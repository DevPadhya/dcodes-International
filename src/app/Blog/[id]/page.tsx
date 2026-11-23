'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import db from "@/lib/firebaseConfig";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import Link from "next/link";

const SITE = "https://www.dcodestech.com";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  links?: Array<{ name: string; url: string }>;
  createdAt: any;
  author?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  metaDescription?: string;
  keywords?: string[];
}

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

// ============================================================
// HTML CLEANER - fixes stray tags from the rich text editor
// ============================================================
const cleanHtml = (html: string): string => {
  if (!html) return "";
  let cleaned = html;

  cleaned = cleaned.replace(/<hr><\/h2>/g, "</h2>");
  cleaned = cleaned.replace(/<p><hr><\/h2>/g, "<h2>");
  cleaned = cleaned.replace(/<hr><h2>/g, "<h2>");
  cleaned = cleaned.replace(/<p><hr>/g, "<hr>");
  cleaned = cleaned.replace(/<hr><\/p>/g, "<hr>");

  cleaned = cleaned.replace(/<p><h1>/g, "<h1>");
  cleaned = cleaned.replace(/<\/h1><\/p>/g, "</h1>");
  cleaned = cleaned.replace(/<p><h2>/g, "<h2>");
  cleaned = cleaned.replace(/<\/h2><\/p>/g, "</h2>");
  cleaned = cleaned.replace(/<p><h3>/g, "<h3>");
  cleaned = cleaned.replace(/<\/h3><\/p>/g, "</h3>");
  cleaned = cleaned.replace(/<p><h4>/g, "<h4>");
  cleaned = cleaned.replace(/<\/h4><\/p>/g, "</h4>");

  cleaned = cleaned.replace(/<p><ul>/g, "<ul>");
  cleaned = cleaned.replace(/<\/ul><\/p>/g, "</ul>");
  cleaned = cleaned.replace(/<p><ol>/g, "<ol>");
  cleaned = cleaned.replace(/<\/ol><\/p>/g, "</ol>");
  cleaned = cleaned.replace(/<p><li>/g, "<li>");
  cleaned = cleaned.replace(/<\/li><\/p>/g, "</li>");

  cleaned = cleaned.replace(/<p><table>/g, "<table>");
  cleaned = cleaned.replace(/<\/table><\/p>/g, "</table>");

  cleaned = cleaned.replace(/<p>\s*<\/p>/g, "");
  cleaned = cleaned.replace(/<br>/g, "<br />");
  cleaned = cleaned.replace(/<hr>/g, "<hr />");

  // The page title is the only H1 - demote any H1 inside the content to H2
  cleaned = cleaned.replace(/<h1(\s[^>]*)?>/g, "<h2$1>").replace(/<\/h1>/g, "</h2>");

  return cleaned;
};

// Strip HTML tags -> plain text (for meta description / previews only)
const stripHtml = (html: string): string => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
};

// Turn heading text into a URL-safe slug
const slugify = (text: string, index: number): string => {
  const base = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return `${base || "section"}-${index}`;
};

// Walk the HTML once: inject an id="" on every h2/h3 and collect a TOC list
const injectHeadingIdsAndBuildToc = (html: string): { html: string; toc: TocItem[] } => {
  if (!html) return { html: "", toc: [] };

  const toc: TocItem[] = [];
  let index = 0;

  const withIds = html.replace(
    /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/g,
    (_match, tag: string, attrs: string, inner: string) => {
      const plainText = inner.replace(/<[^>]*>/g, "").trim();
      if (!plainText) return `<${tag}${attrs}>${inner}</${tag}>`;

      const id = slugify(plainText, index);
      index += 1;
      toc.push({ id, text: plainText, level: tag === "h2" ? 2 : 3 });

      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    }
  );

  return { html: withIds, toc };
};

// Meta description: first sentences of the plain text, max ~155 chars
const getMetaDescription = (content: string): string => {
  const plain = stripHtml(content);
  if (plain.length <= 155) return plain;
  const cut = plain.substring(0, 155);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 100 ? cut.substring(0, lastSpace) : cut).trim() + "...";
};

const toDate = (createdAt: any): Date | null => {
  const d = createdAt?.toDate?.();
  return d instanceof Date && !isNaN(d.getTime()) ? d : null;
};

const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params.id as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trendingPosts, setTrendingPosts] = useState<Blog[]>([]);
  const [recommendedBlogs, setRecommendedBlogs] = useState<Blog[]>([]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const blogDoc = doc(db, "blogs", blogId);
      const blogSnapshot = await getDoc(blogDoc);

      if (blogSnapshot.exists()) {
        const blogData = blogSnapshot.data();
        setBlog({
          id: blogSnapshot.id,
          ...blogData,
        } as Blog);
      } else {
        setError("Blog post not found");
      }
    } catch (err) {
      setError("Failed to load blog post");
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId]);

  // Latest posts, excluding the one being viewed
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingQuery = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc"),
          limit(5)
        );
        const snapshot = await getDocs(trendingQuery);
        const posts = snapshot.docs
          .map((d) => ({ id: d.id, ...d.data() } as Blog))
          .filter((b) => b.id !== blogId)
          .slice(0, 4);
        setTrendingPosts(posts);
      } catch (err) {
        console.error("Error fetching latest posts:", err);
      }
    };

    if (blogId) fetchTrending();
  }, [blogId]);

  // Recommended blogs - same category first, filled up with recent posts
  useEffect(() => {
    const fetchRecommended = async () => {
      if (!blog) return;

      try {
        let recommended: Blog[] = [];

        if (blog.category) {
          const categoryQuery = query(
            collection(db, "blogs"),
            where("category", "==", blog.category),
            limit(6)
          );
          const snapshot = await getDocs(categoryQuery);
          recommended = snapshot.docs
            .map((d) => ({ id: d.id, ...d.data() } as Blog))
            .filter((b) => b.id !== blog.id);
        }

        if (recommended.length < 3) {
          const fallbackQuery = query(
            collection(db, "blogs"),
            orderBy("createdAt", "desc"),
            limit(8)
          );
          const snapshot = await getDocs(fallbackQuery);
          const existingIds = new Set([blog.id, ...recommended.map((b) => b.id)]);
          const fallback = snapshot.docs
            .map((d) => ({ id: d.id, ...d.data() } as Blog))
            .filter((b) => !existingIds.has(b.id));
          recommended = [...recommended, ...fallback];
        }

        setRecommendedBlogs(recommended.slice(0, 3));
      } catch (err) {
        console.error("Error fetching recommended blogs:", err);
      }
    };

    fetchRecommended();
  }, [blog]);

  // ---------- Loading (NO noindex here: this is what the initial HTML contains) ----------
  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white">
        <title>Dcodes Technologies Blog</title>
        <div className="px-6 mt-20 pt-16 pb-12 max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-6 w-32 bg-gray-800 rounded mb-8"></div>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="h-8 w-24 bg-gray-800 rounded"></div>
              <div className="h-4 w-20 bg-gray-800 rounded"></div>
              <div className="h-4 w-32 bg-gray-800 rounded"></div>
            </div>
            <div className="h-12 bg-gray-800 rounded w-3/4 mb-8"></div>
            <div className="h-64 bg-gray-800 rounded mb-12"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6"></div>
              <div className="h-4 bg-gray-800 rounded w-4/6"></div>
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ---------- Not found ----------
  if (error || !blog) {
    return (
      <main className="min-h-screen bg-black text-white">
        <title>Blog Post Not Found | Dcodes Technologies</title>
        <meta name="robots" content="noindex, nofollow" />

        <div className="px-6 mt-20 pt-16 pb-12 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-6xl mb-4">404</p>
            <div className="w-12 h-px bg-white mx-auto opacity-50"></div>
          </div>

          <h1 className="text-2xl md:text-3xl font-normal mb-6">
            {error || "Blog post not found"}
          </h1>

          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>

          <Link
            href="/Blog"
            className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-normal hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            aria-label="Return to all blog posts"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  // ---------- Prepare metadata ----------
  const metaDescription = blog.metaDescription || getMetaDescription(blog.content);
  const pageTitle = `${blog.title} | Dcodes Technologies Blog`;
  const canonicalUrl = `${SITE}/Blog/${blog.id}`;
  const author = blog.author || "Dcodes Technologies Team";
  const dateObj = toDate(blog.createdAt);
  const publishDate = dateObj ? dateObj.toISOString() : null;

  const { html: renderedContent, toc } = injectHeadingIdsAndBuildToc(cleanHtml(blog.content));

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: metaDescription,
    ...(blog.imageUrl ? { image: blog.imageUrl } : {}),
    ...(publishDate ? { datePublished: publishDate, dateModified: publishDate } : {}),
    ...(blog.keywords?.length ? { keywords: blog.keywords.join(", ") } : {}),
    ...(blog.category ? { articleSection: blog.category } : {}),
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Dcodes Technologies",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/Blog` },
      { "@type": "ListItem", position: 3, name: blog.title, item: canonicalUrl },
    ],
  };

  return (
    <>
      {/* ===== SEO: React 19 hoists these into <head> ===== */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={blog.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      {blog.imageUrl && <meta property="og:image" content={blog.imageUrl} />}
      <meta property="og:site_name" content="Dcodes Technologies" />
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {blog.author && <meta property="article:author" content={blog.author} />}
      {blog.category && <meta property="article:section" content={blog.category} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={blog.title} />
      <meta name="twitter:description" content={metaDescription} />
      {blog.imageUrl && <meta name="twitter:image" content={blog.imageUrl} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Back Navigation */}
        <div className="px-6 mt-20 pt-8 max-w-7xl mx-auto">
          <Link
            href="/Blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-8 group"
            aria-label="Return to all blog posts"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all stories
          </Link>
        </div>

        {/* Blog Header (full width) */}
        <header className="px-6 pb-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
            {blog.category && (
              <span className="px-3 py-1 border border-gray-600 text-gray-400 font-normal">
                {blog.category}
              </span>
            )}
            {blog.readTime && <span>{blog.readTime} read</span>}
            {blog.author && <span>{blog.author}</span>}
            {dateObj && (
              <time dateTime={publishDate!}>
                {dateObj.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-white">
            {blog.title}
          </h1>
        </header>

        {/* Content + Sidebar */}
        <div className="px-6 pb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main content */}
            <main className="lg:col-span-3">
              {/* Featured Image */}
              {blog.imageUrl && (
                <div className="relative mb-8 overflow-hidden rounded-lg">
                  <div className="h-56 sm:h-64 md:h-72 bg-gray-900 relative">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
                  </div>
                </div>
              )}

              <article className="blog-article">
                <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
              </article>

              {/* Links Section */}
              {blog.links && blog.links.length > 0 && (
                <div className="mt-16 pt-8 border-t border-gray-800">
                  <h2 className="text-xl font-semibold mb-6 text-white">Related Links</h2>
                  <div className="grid gap-4">
                    {blog.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 border border-gray-800 hover:border-gray-600 hover:bg-white/5 transition-all duration-300 group"
                        aria-label={`Read more about ${link.name}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                          <span className="text-white font-normal group-hover:text-gray-300 transition-colors duration-300">
                            {link.name}
                          </span>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to blog */}
              <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-400 mb-6 font-normal">Enjoyed this story?</p>
                <Link
                  href="/Blog"
                  className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-normal hover:border-white/40 hover:bg-white/5 transition-all duration-300 group"
                  aria-label="Explore more blog posts from Dcodes Technologies"
                >
                  <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Explore more stories
                </Link>
              </div>
            </main>

            {/* Sidebar: 1) Table of Contents 2) CTA 3) Latest Posts */}
            <aside className="lg:col-span-1">
              <div className="space-y-6 lg:sticky lg:top-24">
                {/* 1. Table of Contents */}
                {toc.length > 0 && (
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <h2 className="text-lg font-semibold mb-4 text-white">Table of Contents</h2>
                    <nav aria-label="Table of contents">
                      <ul className="space-y-2">
                        {toc.map((item) => (
                          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                            <a
                              href={`#${item.id}`}
                              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 block leading-snug"
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}

                {/* 2. CTA */}
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h2 className="text-lg font-semibold mb-2 text-white">Have a project in mind?</h2>
                  <p className="text-gray-400 text-sm mb-5">
                    Let's talk about how Dcodes Technologies can help you build it.
                  </p>
                  <Link
                    href="/connect"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-all duration-300"
                    aria-label="Contact Dcodes Technologies"
                  >
                    Let's Talk
                  </Link>
                </div>

                {/* 3. Latest Posts */}
                {trendingPosts.length > 0 && (
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <h2 className="text-lg font-semibold mb-4 text-white">Latest Posts</h2>
                    <div className="space-y-4">
                      {trendingPosts.map((post) => (
                        <Link key={post.id} href={`/Blog/${post.id}`} className="block">
                          <div className="flex items-start space-x-3 p-2 -mx-2 rounded-lg hover:bg-gray-800 transition-all duration-300 group cursor-pointer">
                            {post.imageUrl && (
                              <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-12 h-12 object-cover rounded flex-shrink-0"
                                loading="lazy"
                                width={48}
                                height={48}
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              {post.readTime && (
                                <p className="text-xs text-gray-400 mt-1">{post.readTime} read</p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* Recommended Blogs */}
          {recommendedBlogs.length > 0 && (
            <section className="mt-20 pt-12 border-t border-gray-800" aria-label="Recommended posts">
              <h2 className="text-2xl md:text-3xl font-normal mb-8 text-white">Recommended for you</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedBlogs.map((rec) => (
                  <Link key={rec.id} href={`/Blog/${rec.id}`} className="block group">
                    <article className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300">
                      <div className="aspect-[16/9] bg-gray-900 relative overflow-hidden">
                        {rec.imageUrl && (
                          <img
                            src={rec.imageUrl}
                            alt={rec.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="p-5">
                        {rec.category && (
                          <span className="text-xs text-gray-400 border border-gray-700 px-2 py-1 rounded">
                            {rec.category}
                          </span>
                        )}
                        <h3 className="text-lg font-medium text-white mt-3 leading-snug group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                          {rec.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                          {getMetaDescription(rec.content)}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <style jsx global>{`
        .blog-article h1 {
          color: #ffffff;
          font-weight: 700;
          font-size: 2.25rem;
          line-height: 1.2;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          letter-spacing: 0.01em;
        }
        .blog-article h2 {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.75rem;
          line-height: 1.25;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          letter-spacing: 0.01em;
          scroll-margin-top: 6rem;
        }
        .blog-article h3 {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.375rem;
          line-height: 1.3;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          scroll-margin-top: 6rem;
        }
        .blog-article h4 {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.125rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .blog-article p {
          color: #d1d5db;
          font-size: 1.125rem;
          line-height: 2rem;
          margin-bottom: 1.25rem;
          font-weight: 400;
        }
        .blog-article strong {
          color: #ffffff;
          font-weight: 700;
        }
        .blog-article em {
          font-style: italic;
        }
        .blog-article u {
          text-decoration: underline;
        }
        .blog-article ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: #d1d5db;
        }
        .blog-article ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: #d1d5db;
        }
        .blog-article li {
          font-size: 1.125rem;
          line-height: 2rem;
          margin-bottom: 0.25rem;
          color: #d1d5db;
        }
        .blog-article a {
          color: #60a5fa;
          text-decoration: underline;
        }
        .blog-article a:hover {
          color: #93c5fd;
        }
        .blog-article hr {
          border-color: #374151;
          margin: 2rem 0;
        }
        .blog-article img {
          border-radius: 0.5rem;
          margin: 1.5rem 0;
          max-width: 100%;
        }
        .blog-article table {
          border-collapse: collapse;
          width: 100%;
          margin: 1.5rem 0;
          overflow-x: auto;
          display: block;
        }
        .blog-article table tbody,
        .blog-article table thead {
          display: table;
          width: 100%;
          table-layout: fixed;
        }
        .blog-article table td,
        .blog-article table th {
          border: 1px solid #374151;
          padding: 0.6rem 0.9rem;
          text-align: left;
          color: #d1d5db;
          font-size: 1rem;
          line-height: 1.6;
        }
        .blog-article table th {
          background-color: #1f2937;
          color: #ffffff;
          font-weight: 600;
        }
        .blog-article table tr:nth-child(even) td {
          background-color: #111827;
        }
      `}</style>
    </>
  );
}