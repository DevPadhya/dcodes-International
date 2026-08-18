'use client';
import { useEffect, useState } from "react"; 
import db from "@/lib/firebaseConfig"; 
import { collection, query, orderBy, limit, startAfter, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import Link from "next/link";

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

export default function BlogsPage() { 
  const [blogs, setBlogs] = useState<Blog[]>([]); 
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]); 
  const [loading, setLoading] = useState(false); 
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null); 
  const [hasMore, setHasMore] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");
  const [popularBlogs, setPopularBlogs] = useState<Blog[]>([]);
  const [initialLoad, setInitialLoad] = useState(false);

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "Business Tech & Digital Solutions Blog – Dcodes Technologies";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Explore the Dcodes Blog for expert insights on web & app development, software solutions, digital marketing, and business tech trends to grow your business.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "business tech blog, technology blog for businesses, software development blog, digital marketing blog, web development tips, mobile app development insights");
    
    // Update or create viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', "width=device-width, initial-scale=1.0");
    
    // Update or create robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    // Update or create author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', "Dcodes Technologies");
    
    // Update or create theme-color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', "#000000");
    
    // Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', "Blog | Technology, Business & Lifestyle Insights | Dcodes Technologies");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Thoughts, insights, and stories worth sharing about technology, business, and lifestyle from Dcodes Technologies.");
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', "website");
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', "https://dcodes.com/blog");
    
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', "Dcodes Technologies");
    
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', "https://dcodes.com/og-image-blog.jpg");
    
    // Twitter Card Tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', "summary_large_image");
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', "Blog | Dcodes Technologies");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Expert insights on technology, business, SaaS, fashion, lifestyle, health, travel, and food.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-blog.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/blog");
    
    // Breadcrumb Structured Data
    const structuredDataBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dcodes.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://dcodes.com/blog"
        }
      ]
    };
    
    let scriptBreadcrumb = document.querySelector('#structured-data-breadcrumb');
    if (!scriptBreadcrumb) {
      scriptBreadcrumb = document.createElement('script');
      scriptBreadcrumb.id = 'structured-data-breadcrumb';
      scriptBreadcrumb.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptBreadcrumb);
    }
    scriptBreadcrumb.textContent = JSON.stringify(structuredDataBreadcrumb);
    
  }, []);

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
      blogsQuery = query( 
        collection(db, "blogs"), 
        orderBy("createdAt", "desc"), 
        limit(5) 
      ); 
    }

    try {
      const snapshot = await getDocs(blogsQuery);

      if (!snapshot.empty) { 
        const newBlogs = snapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        })) as Blog[]; 
        
        setBlogs(prev => {
          const existingIds = new Set(prev.map(blog => blog.id));
          const uniqueNewBlogs = newBlogs.filter(blog => !existingIds.has(blog.id));
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
      const popularQuery = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc"),
        limit(3)
      );
      const snapshot = await getDocs(popularQuery);
      const popular = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Blog[];
      setPopularBlogs(popular);
    } catch (error) {
      console.error("Error fetching popular blogs:", error);
    }
  };

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(blog => 
        blog.tags && blog.tags.includes(selectedTag)
      );
      setFilteredBlogs(filtered);
    }
  }, [selectedTag, blogs]);

  useEffect(() => { 
    if (!initialLoad) {
      fetchBlogs();
      fetchPopularBlogs();
      setInitialLoad(true);
    }
  }, []);

  // Update structured data when filteredBlogs changes
  useEffect(() => {
    if (filteredBlogs.length > 0) {
      const structuredDataBlog = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Dcodes Technologies Blog",
        "description": "Technology, Business & Lifestyle Insights",
        "url": "https://dcodes.com/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Dcodes Technologies",
          "logo": {
            "@type": "ImageObject",
            "url": "https://dcodes.com/logo.png"
          }
        },
        "blogPost": filteredBlogs.slice(0, 10).map(blog => ({
          "@type": "BlogPosting",
          "headline": blog.title,
          "description": blog.metaDescription || (blog.content ? stripHtml(blog.content).substring(0, 150) + "..." : ""),
          "image": blog.imageUrl,
          "datePublished": blog.createdAt?.toDate?.().toISOString() || new Date().toISOString(),
          "dateModified": blog.createdAt?.toDate?.().toISOString() || new Date().toISOString(),
          "author": {
            "@type": "Person",
            "name": blog.author || "Dcodes Team"
          },
          "keywords": blog.tags?.join(", ") || "technology, business",
          "url": `https://dcodes.com/Blog/${blog.id}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://dcodes.com/Blog/${blog.id}`
          }
        }))
      };
      
      let scriptBlog = document.querySelector('#structured-data-blog');
      if (!scriptBlog) {
        scriptBlog = document.createElement('script');
        scriptBlog.id = 'structured-data-blog';
        scriptBlog.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptBlog);
      }
      scriptBlog.textContent = JSON.stringify(structuredDataBlog);
    }
  }, [filteredBlogs]);

  const Sidebar = () => (
    <div className="space-y-8">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h3 className="text-lg font-semibold mb-4 text-white">Filter by Tags</h3>
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
        <h3 className="text-lg font-semibold mb-4 text-white">Trending Topics</h3>
        <div className="space-y-4">
          {popularBlogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/Blog/${blog.id}`}
              className="block"
            >
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
                  <h4 className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                    {blog.title}
                  </h4>
                  {blog.readTime && (
                    <p className="text-xs text-gray-400 mt-1">{blog.readTime} read</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
        <p className="text-gray-400 text-sm mb-4">
          Stay updated with our latest stories and insights.
        </p>
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
                <title>LinkedIn Logo</title>
                <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.25h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.71z"/>
              </svg>
            </div>
            <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );

  return ( 
    <div className="min-h-screen bg-black text-white">
      <div className="px-6 mt-20 pt-16 pb-12 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-4 leading-[1.1] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            BLOG
          </h1>
          <div className="w-12 h-px bg-white mx-auto opacity-50" aria-hidden="true"></div>
          <p className="text-gray-400 text-lg mt-6 font-normal max-w-2xl mx-auto">
            Thoughts, insights, and stories worth sharing
          </p>
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mt-8">
            <ol className="flex items-center justify-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300" aria-label="Go to home page">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-600 mx-2" aria-hidden="true">/</span>
              </li>
              <li aria-current="page">
                <span className="text-white">Blog</span>
              </li>
            </ol>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Articles */}
          <main className="lg:col-span-3">
            <div className="space-y-16">
              {filteredBlogs.map((blog) => ( 
                <div key={blog.id} className="block group cursor-pointer transform hover:scale-[1.01] transition-all duration-500 ease-out border-b border-gray-800 pb-16">
                  {/* FIXED: Removed nested <a> tag - Link component handles the anchor */}
                  <Link href={`/Blog/${blog.id}`} className="block">
                    <article>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Image container */}
                        <div className="lg:col-span-5 relative overflow-hidden rounded-lg">
                          <div className="aspect-[16/9] bg-gray-900 relative">
                            <img 
                              src={blog.imageUrl} 
                              alt={blog.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                              loading="lazy"
                              width={600}
                              height={338}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
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
                            {blog.readTime && (
                              <span>{blog.readTime} read</span>
                            )}
                            {blog.createdAt && (
                              <time dateTime={blog.createdAt.toDate?.().toISOString() || new Date().toISOString()}>
                                {blog.createdAt.toDate?.().toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                }) || 'Recent'}
                              </time>
                            )}
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight group-hover:text-gray-300 transition-colors duration-300">
                            {blog.title}
                          </h2>
                          
                          {/* Content preview - plain text, tags stripped */}
                          <p className="text-gray-400 text-base md:text-lg leading-relaxed line-clamp-3 font-normal">
                            {blog.content ? stripHtml(blog.content).substring(0, 200) : ''}...
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

                          {/* External links - FIXED: These are separate standalone <a> tags, not nested inside Link */}
                          {blog.links && blog.links.length > 0 && (
                            <div 
                              className="flex flex-wrap gap-4 pt-4"
                              onClick={(e) => e.preventDefault()}
                            >
                              {blog.links.map((link, i) => (
                                <a 
                                  key={i} 
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center px-4 py-2 border border-white/20 text-white text-sm font-normal hover:border-white/40 hover:bg-white/5 transition-all duration-300 group/link"
                                  onClick={(e) => e.stopPropagation()}
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
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
                          <div className="flex items-center text-gray-500 text-sm font-normal group-hover:text-gray-400 transition-colors duration-300" aria-hidden="true">
                            <span>Read full story</span>
                            <svg 
                              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
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
                  <span className="relative z-10">
                    {loading ? "Loading..." : "Load More Stories"}
                  </span>
                  
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden="true"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-black font-normal text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    {loading ? "Loading..." : "Load More Stories"}
                  </span>

                  {loading && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true"></div>
                    </div>
                  )}
                </button> 
              </div> 
            )}

            {/* No more articles message */}
            {!hasMore && filteredBlogs.length > 0 && (
              <div className="text-center mt-20 py-16">
                <div className="inline-flex items-center space-x-4 text-gray-500 text-sm font-normal" aria-hidden="true">
                  <div className="w-12 h-px bg-gray-700"></div>
                  <span>You've reached the end of our stories</span>
                  <div className="w-12 h-px bg-gray-700"></div>
                </div>
                <p className="text-gray-600 text-sm mt-4 font-normal">
                  Check back later for new content
                </p>
              </div>
            )}

            {/* Empty state */}
            {filteredBlogs.length === 0 && !loading && (
              <div className="text-center mt-20 py-16">
                <div className="text-gray-500 text-lg font-normal mb-4">
                  No stories found{selectedTag !== "All" ? ` for tag "${selectedTag}"` : ""}
                </div>
                <p className="text-gray-600 text-sm font-normal">
                  {selectedTag !== "All" ? "Try selecting a different tag or check back later for new content" : "We'll have new content coming soon"}
                </p>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  ); 
}