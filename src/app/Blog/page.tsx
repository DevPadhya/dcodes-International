'use client';
import { useEffect, useState } from "react";
import db from "@/lib/firebaseConfig";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import Link from "next/link";

const SITE = "https://www.dcodestech.com";
const PAGE_URL = `${SITE}/Blog`;
const PAGE_TITLE = "Business Tech & Digital Solutions Blog | Dcodes Technologies";
const PAGE_DESC =
  "Explore the Dcodes blog for practical insights on web and app development, software solutions, digital marketing and business technology.";

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
  metaKeywords?: string;
}

const AVAILABLE_TAGS = ["Tech", "SaaS", "Fashion", "Lifestyle", "Business", "Health", "Travel", "Food"];

// Strip HTML tags -> plain text (for card previews / meta descriptions only)
const stripHtml = (html: string): string => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
};

const preview = (html: string, max: number): string => {
  const text = stripHtml(html);
  return text.length > max ? text.substring(0, max).trim() + "..." : text;
};

const toDate = (createdAt: any): Date | null => {
  const d = createdAt?.toDate?.();
  return d instanceof Date && !isNaN(d.getTime()) ? d : null;
};

const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
  ],
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");
  const [popularBlogs, setPopularBlogs] = useState<Blog[]>([]);
  const [initialLoad, setInitialLoad] = useState(false);

  const fetchBlogs = async () => {
    if (loading) return;

    setLoading(true);

    let blogsQuery;
    if (lastDoc) {
      blogsQuery = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(5)
      );
    } else {
      blogsQuery = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(5));
    }

    try {
      const snapshot = await getDocs(blogsQuery);

      if (!snapshot.empty) {
        const newBlogs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];

        setBlogs((prev) => {
          const existingIds = new Set(prev.map((blog) => blog.id));
          const uniqueNewBlogs = newBlogs.filter((blog) => !existingIds.has(blog.id));
          return [...prev, ...uniqueNewBlogs];
        });

        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        if (snapshot.docs.length < 5) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPopularBlogs = async () => {
    try {
      const popularQuery = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(3));
      const snapshot = await getDocs(popularQuery);
      const popular = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];
      setPopularBlogs(popular);
    } catch (error) {
      console.error("Error fetching latest blogs:", error);
    }
  };

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((blog) => blog.tags && blog.tags.includes(selectedTag)));
    }
  }, [selectedTag, blogs]);

  useEffect(() => {
    if (!initialLoad) {
      fetchBlogs();
      fetchPopularBlogs();
      setInitialLoad(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Blog structured data (uses all loaded blogs, not the tag-filtered list)
  const blogJsonLd =
    blogs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Dcodes Technologies Blog",
          description:
            "Insights on web and app development, software, digital marketing and business technology.",
          url: PAGE_URL,
          publisher: {
            "@type": "Organization",
            name: "Dcodes Technologies",
            url: SITE,
            logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
          },
          blogPost: blogs.slice(0, 10).map((blog) => {
            const date = toDate(blog.createdAt)?.toISOString();
            return {
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.metaDescription || preview(blog.content, 150),
              ...(blog.imageUrl ? { image: blog.imageUrl } : {}),
              ...(date ? { datePublished: date, dateModified: date } : {}),
              author: { "@type": "Person", name: blog.author || "Dcodes Team" },
              ...(blog.tags?.length ? { keywords: blog.tags.join(", ") } : {}),
              url: `${SITE}/Blog/${blog.id}`,
              mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/Blog/${blog.id}` },
            };
          }),
        }
      : null;

  const sidebar = (
    <div className="space-y-8">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-lg font-semibold mb-4 text-white">Filter by Tags</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag("All")}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedTag === "All"
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
            }`}
            aria-label="Show all blog posts"
          >
            All
          </button>
          {AVAILABLE_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
              }`}
              aria-label={`Filter blog posts by ${tag} tag`}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-3">
          Showing {filteredBlogs.length} of {blogs.length} blogs
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-lg font-semibold mb-4 text-white">Latest Posts</h2>
        <div className="space-y-4">
          {popularBlogs.map((blog) => (
            <Link key={blog.id} href={`/Blog/${blog.id}`} className="block">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group cursor-pointer">
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-12 h-12 object-cover rounded flex-shrink-0"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  {blog.readTime && <p className="text-xs text-gray-400 mt-1">{blog.readTime} read</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
        <p className="text-gray-400 text-sm mb-4">Stay updated with our latest stories and insights.</p>
        <div className="space-y-3">
          <a
            href="https://linkedin.com/company/dcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
            aria-label="Follow Dcodes Technologies on LinkedIn"
          >
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.25h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.71z" />
              </svg>
            </div>
            <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ===== SEO: React 19 hoists these into <head> and they are server-rendered ===== */}
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESC} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={PAGE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:site_name" content="Dcodes Technologies" />
      <meta property="og:title" content="Blog | Dcodes Technologies" />
      <meta
        property="og:description"
        content="Practical insights on web and app development, software, digital marketing and business technology."
      />
      <meta property="og:image" content={`${SITE}/og-blog.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog | Dcodes Technologies" />
      <meta
        name="twitter:description"
        content="Insights on software, web, apps and digital marketing from Dcodes Technologies."
      />
      <meta name="twitter:image" content={`${SITE}/og-blog.jpg`} />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(breadcrumbJsonLd) }}
      />
      {blogJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(blogJsonLd) }}
        />
      )}

      <div className="px-6 mt-20 pt-16 pb-12 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-4 leading-[1.1] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Dcodes Technologies Blog
          </h1>
          <div className="w-12 h-px bg-white mx-auto opacity-50" aria-hidden="true"></div>
          <p className="text-gray-400 text-lg mt-6 font-normal max-w-2xl mx-auto">
            Thoughts, insights, and stories worth sharing
          </p>

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mt-8">
            <ol className="flex items-center justify-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-600 mx-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li aria-current="page">
                <span className="text-white">Blog</span>
              </li>
            </ol>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Articles */}
          <section className="lg:col-span-3" aria-label="Blog articles">
            <div className="space-y-16">
              {filteredBlogs.map((blog) => {
                const date = toDate(blog.createdAt);
                return (
                  <article
                    key={blog.id}
                    className="group relative transform hover:scale-[1.01] transition-all duration-500 ease-out border-b border-gray-800 pb-16"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Image container */}
                      <div className="lg:col-span-5 relative overflow-hidden rounded-lg">
                        <div className="aspect-[16/9] bg-gray-900 relative">
                          {blog.imageUrl && (
                            <img
                              src={blog.imageUrl}
                              alt={blog.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              width={600}
                              height={338}
                            />
                          )}
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            aria-hidden="true"
                          ></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-7 space-y-6">
                        {/* Meta information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          {blog.category && (
                            <span className="px-3 py-1 border border-gray-600 text-gray-400 font-normal">
                              {blog.category}
                            </span>
                          )}
                          {blog.readTime && <span>{blog.readTime} read</span>}
                          {date && (
                            <time dateTime={date.toISOString()}>
                              {date.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                          )}
                        </div>

                        {/* Title = stretched link (whole card clickable, no nested <a>) */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight group-hover:text-gray-300 transition-colors duration-300">
                          <Link
                            href={`/Blog/${blog.id}`}
                            className="after:content-[''] after:absolute after:inset-0 after:z-0"
                          >
                            {blog.title}
                          </Link>
                        </h2>

                        {/* Content preview - plain text, tags stripped */}
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed line-clamp-3 font-normal">
                          {preview(blog.content, 200)}
                        </p>

                        {/* Blog tags */}
                        {blog.tags && blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, index) => (
                              <span
                                key={`${blog.id}-${tag}-${index}`}
                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* External links - sit above the stretched link (z-10) */}
                        {blog.links && blog.links.length > 0 && (
                          <div className="relative z-10 flex flex-wrap gap-4 pt-4">
                            {blog.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-white/20 text-white text-sm font-normal hover:border-white/40 hover:bg-white/5 transition-all duration-300 group/link"
                                aria-label={`Visit ${link.name}`}
                              >
                                <span>{link.name}</span>
                                <svg
                                  className="ml-2 w-3 h-3 transform group-hover/link:translate-x-1 transition-transform duration-200"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                  />
                                </svg>
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Author info */}
                        {blog.author && (
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{blog.author}</span>
                          </div>
                        )}

                        {/* Read more indicator */}
                        <div
                          className="flex items-center text-gray-500 text-sm font-normal group-hover:text-gray-400 transition-colors duration-300"
                          aria-hidden="true"
                        >
                          <span>Read full story</span>
                          <svg
                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Load more button */}
            {hasMore && (
              <div className="flex justify-center mt-20">
                <button
                  onClick={fetchBlogs}
                  disabled={loading}
                  className="group relative px-12 py-4 bg-transparent border border-white/20 text-white font-normal text-sm tracking-wider uppercase hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  aria-label={loading ? "Loading more articles" : "Load more blog articles"}
                  aria-busy={loading}
                >
                  <span className="relative z-10">{loading ? "Loading..." : "Load More Stories"}</span>

                  <div
                    className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    aria-hidden="true"
                  ></div>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-black font-normal text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    {loading ? "Loading..." : "Load More Stories"}
                  </span>

                  {loading && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div
                        className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      ></div>
                    </div>
                  )}
                </button>
              </div>
            )}

            {/* No more articles message */}
            {!hasMore && filteredBlogs.length > 0 && (
              <div className="text-center mt-20 py-16">
                <div
                  className="inline-flex items-center space-x-4 text-gray-500 text-sm font-normal"
                  aria-hidden="true"
                >
                  <div className="w-12 h-px bg-gray-700"></div>
                  <span>You've reached the end of our stories</span>
                  <div className="w-12 h-px bg-gray-700"></div>
                </div>
                <p className="text-gray-600 text-sm mt-4 font-normal">Check back later for new content</p>
              </div>
            )}

            {/* Empty state */}
            {filteredBlogs.length === 0 && !loading && (
              <div className="text-center mt-20 py-16">
                <div className="text-gray-500 text-lg font-normal mb-4">
                  No stories found{selectedTag !== "All" ? ` for tag "${selectedTag}"` : ""}
                </div>
                <p className="text-gray-600 text-sm font-normal">
                  {selectedTag !== "All"
                    ? "Try selecting a different tag or check back later for new content"
                    : "We'll have new content coming soon"}
                </p>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1">{sidebar}</aside>
        </div>
      </div>
    </main>
  );
}