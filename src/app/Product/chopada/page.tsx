"use client";

import React, { useState } from "react";
import Prism from "@/components/ReactBit/Prism";

const SITE = "https://www.dcodestech.com";
const PAGE_URL = `${SITE}/Product/chopada`;
const PAGE_TITLE = "Chopada App | Yajman & Puja Management App for Bhudev";
const PAGE_DESC =
  "Chopada by Dcodes Technologies helps Bhudev families manage puja records, yajman profiles, donations and family lineage in one app for Android and iOS.";

// ⚠️ Real store links nakho (khali hoy to button j rahe che)
const PLAY_STORE_URL = "";
const APP_STORE_URL = "";

const faqs = [
  {
    q: "What is Chopada App?",
    a: "Chopada is a digital yajman management app built for Bhudev families to manage puja records, client relationships, and family lineage in one place.",
  },
  {
    q: "Is Chopada free to use?",
    a: "Yes, Chopada is free to download and use for managing your puja records, client directory, and family tree.",
  },
  {
    q: "Can I track donations and financial records?",
    a: "Yes. Chopada lets you monitor donations and expenses, generate reports, and keep automated tax documentation.",
  },
  {
    q: "Does Chopada support family lineage tracking?",
    a: "Yes, you can build and maintain your complete family tree, including gotra and kuldevata details, to preserve your spiritual heritage.",
  },
  {
    q: "Which platforms is Chopada available on?",
    a: "Chopada is available on both Android and iOS through the Google Play Store and Apple App Store.",
  },
  {
    q: "How do I manage my clients (yajmans) in the app?",
    a: "You can maintain detailed client profiles with contact info, complete puja history, preferences, and send automated festival greetings.",
  },
];

const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#app`,
      name: "Chopada",
      url: PAGE_URL,
      description:
        "Yajman management app for Bhudev families to manage puja records, client relationships, donations and family lineage.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Dcodes Technologies",
      url: SITE,
      logo: `${SITE}/logo.png`,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Chopada", item: PAGE_URL },
      ],
    },
  ],
};

// App Store / Play Store: link if URL is set, plain button otherwise
const StoreButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  const cls = "border border-gray-800 px-12 py-6 hover:border-gray-700 transition-all group";
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={label}>
      {children}
    </a>
  ) : (
    <button type="button" className={cls} aria-label={label}>
      {children}
    </button>
  );
};

const ChopadaLanding = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-white">
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
      <meta property="og:title" content="Chopada App | Yajman Management App for Bhudev Families" />
      <meta
        property="og:description"
        content="Manage puja records, yajman profiles, donations and family lineage with Chopada, a product by Dcodes Technologies."
      />
      <meta property="og:image" content={`${SITE}/og-chopada.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Chopada App | Yajman Management App" />
      <meta
        name="twitter:description"
        content="Puja records, yajman profiles, donations and family lineage in one app."
      />
      <meta name="twitter:image" content={`${SITE}/og-chopada.jpg`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }}
      />

      <div aria-hidden="true" style={{ width: "100%", height: "600px", position: "absolute" }}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-1.5 bg-gray-900 border border-gray-800 text-gray-400 text-xs tracking-widest">
                FOR BHUDEV FAMILIES
              </div>

              <h1 className="text-6xl lg:text-8xl font-normal tracking-tight leading-none mb-8">
                <span className="sr-only">Chopada: </span>
                Smart Digital Yajman <br />
                <span className="text-blue-400">Management App</span>
              </h1>

              <p className="text-xl text-gray-400 font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
                Modern platform for managing puja records, client relationships, and family lineage
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#download"
                  className="bg-blue-400 text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-blue-300 transition-all"
                  aria-label="Download Chopada App"
                >
                  Download App
                </a>
                <button
                  type="button"
                  className="border border-gray-800 text-white px-10 py-4 text-sm font-medium tracking-wide hover:border-gray-700 transition-all"
                  aria-label="Watch Chopada App demo"
                >
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Minimalist Preview Card */}
            <div className="max-w-4xl mx-auto mt-24">
              <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-1">
                <div className="bg-black p-8 lg:p-12">
                  <div className="grid grid-cols-3 gap-8 mb-12">
                    <div className="text-center border-r border-gray-900">
                      <div className="text-4xl font-normal text-blue-400 mb-2">500+</div>
                      <div className="text-xs text-gray-500 tracking-widest">FAMILIES</div>
                    </div>
                    <div className="text-center border-r border-gray-900">
                      <div className="text-4xl font-normal text-blue-400 mb-2">10K+</div>
                      <div className="text-xs text-gray-500 tracking-widest">PUJAS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-normal text-blue-400 mb-2">4.9</div>
                      <div className="text-xs text-gray-500 tracking-widest">RATING</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-900 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500 tracking-widest">RECENT ACTIVITY</span>
                      <span className="text-xs text-gray-600">TODAY</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-3 border-b border-gray-900">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 bg-blue-400" aria-hidden="true"></div>
                          <span className="text-sm font-normal">Satyanarayan Puja</span>
                        </div>
                        <span className="text-xs text-gray-600">Completed</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-900">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 bg-gray-700" aria-hidden="true"></div>
                          <span className="text-sm font-normal">Client Meeting</span>
                        </div>
                        <span className="text-xs text-gray-600">Upcoming</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-24">
              <div className="text-xs text-gray-500 tracking-widest mb-6">WHY CHOPADA</div>
              <h2 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight">
                Designed for tradition.<br />
                Built for <span className="text-blue-400">tomorrow</span>
              </h2>
              <p className="text-xl text-gray-400 font-normal leading-relaxed">
                A purposeful platform created specifically for Bhudev families to preserve spiritual traditions while embracing modern technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-900">
              <div className="bg-black p-12 hover:bg-gray-950 transition-colors">
                <div className="text-blue-400 text-sm mb-6 tracking-widest">01</div>
                <h3 className="text-2xl font-normal mb-6">Digital Records</h3>
                <p className="text-gray-400 font-normal leading-relaxed">
                  Complete puja documentation with dates, clients, and donations in one secure location
                </p>
              </div>

              <div className="bg-black p-12 hover:bg-gray-950 transition-colors">
                <div className="text-blue-400 text-sm mb-6 tracking-widest">02</div>
                <h3 className="text-2xl font-normal mb-6">Family Lineage</h3>
                <p className="text-gray-400 font-normal leading-relaxed">
                  Preserve your complete family tree and spiritual heritage for future generations
                </p>
              </div>

              <div className="bg-black p-12 hover:bg-gray-950 transition-colors">
                <div className="text-blue-400 text-sm mb-6 tracking-widest">03</div>
                <h3 className="text-2xl font-normal mb-6">Client Relations</h3>
                <p className="text-gray-400 font-normal leading-relaxed">
                  Manage yajmans with contact details, history, and automated reminders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="lg:sticky lg:top-32">
                <div className="text-xs text-gray-500 tracking-widest mb-6">FEATURES</div>
                <h2 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight">
                  Everything you need
                </h2>
                <p className="text-xl text-gray-400 font-normal leading-relaxed">
                  Comprehensive tools designed to manage your spiritual practice and preserve family legacy
                </p>
              </div>

              <div className="space-y-16">
                <div className="border-l border-gray-900 pl-8">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">PUJA MANAGEMENT</div>
                  <h3 className="text-2xl font-normal mb-4">Complete Documentation</h3>
                  <p className="text-gray-400 font-normal leading-relaxed">
                    Track every puja with comprehensive details including type, date, location, client information, and donations. Generate professional digital records and receipts instantly.
                  </p>
                </div>

                <div className="border-l border-gray-900 pl-8">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">CLIENT DIRECTORY</div>
                  <h3 className="text-2xl font-normal mb-4">Relationship Management</h3>
                  <p className="text-gray-400 font-normal leading-relaxed">
                    Maintain detailed client profiles with contact information, complete puja history, preferences, and send automated festival greetings to strengthen relationships.
                  </p>
                </div>

                <div className="border-l border-gray-900 pl-8">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">FAMILY TREE</div>
                  <h3 className="text-2xl font-normal mb-4">Lineage Preservation</h3>
                  <p className="text-gray-400 font-normal leading-relaxed">
                    Create and maintain your complete family lineage with gotra details, kuldevata information, and preserve your spiritual heritage for generations to come.
                  </p>
                </div>

                <div className="border-l border-gray-900 pl-8">
                  <div className="text-blue-400 text-xs tracking-widest mb-4">DONATION TRACKING</div>
                  <h3 className="text-2xl font-normal mb-4">Financial Insights</h3>
                  <p className="text-gray-400 font-normal leading-relaxed">
                    Monitor all donations and expenses with detailed reports, automated tax documentation, and comprehensive financial analytics at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interface Section */}
        <section className="py-10 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs text-gray-500 tracking-widest mb-6">INTERFACE</div>
              <h2 className="text-5xl lg:text-6xl font-normal mb-6 leading-tight">
                Beautifully <span className="text-blue-400">minimal</span>
              </h2>
              <p className="text-xl text-gray-400 font-normal leading-relaxed">
                Clean interface designed with spirituality and modern usability in perfect harmony
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-900">
              <div className="bg-black p-16 flex flex-col items-center justify-center min-h-[400px] hover:bg-gray-950 transition-colors">
                <img
                  src="/screen/landing.png"
                  alt="Chopada App landing screen showing puja management interface"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="bg-black p-16 flex flex-col items-center justify-center min-h-[400px] hover:bg-gray-950 transition-colors">
                <img
                  src="/screen/femily.png"
                  alt="Chopada App family tree and lineage management screen"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="bg-black p-16 flex flex-col items-center justify-center min-h-[400px] hover:bg-gray-950 transition-colors">
                <img
                  src="/screen/deshbord.png"
                  alt="Chopada App dashboard with puja statistics and activity overview"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-xs text-gray-500 tracking-widest mb-6">FAQ</div>
              <h2 className="text-5xl lg:text-6xl font-normal mb-6 leading-tight">
                Frequently asked <span className="text-blue-400">questions</span>
              </h2>
              <p className="text-xl text-gray-400 font-normal leading-relaxed">
                Everything you need to know about Chopada App
              </p>
            </div>

            <div className="border-t border-gray-900">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.q} className="border-b border-gray-900">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-6 py-8 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="text-xl lg:text-2xl font-normal">{item.q}</span>
                      <span
                        className={`shrink-0 text-blue-400 text-2xl font-normal transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-400 font-normal leading-relaxed max-w-2xl">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-32 border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight">
                Ready to begin?
              </h2>
              <p className="text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
                Join hundreds of Bhudev families preserving their spiritual heritage with Chopada
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Apple App Store Button */}
              <StoreButton href={APP_STORE_URL} label="Download Chopada App from Apple App Store">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.05 12.04C17.02 9.28 19.36 8.05 19.45 8C18.2 6.26 16.29 6 15.67 6C13.93 6 12.65 7.08 11.76 7.08C10.83 7.08 9.74 6.06 8.18 6.06C6.76 6.06 5.36 6.94 4.56 8.32C3.14 10.72 3.87 14.68 5.35 17.06C6.21 18.32 7.25 19.74 8.55 19.68C9.81 19.62 10.27 18.84 11.85 18.84C13.41 18.84 13.85 19.68 15.17 19.64C16.53 19.6 17.43 18.36 18.25 17.1C19.21 15.66 19.61 14.26 19.63 14.18C19.59 14.16 17.07 13.18 17.05 12.04ZM15.05 4.5C15.65 3.74 16.09 2.72 15.97 1.68C15.05 1.72 13.93 2.32 13.29 3.08C12.73 3.74 12.19 4.78 12.33 5.78C13.35 5.86 14.41 5.26 15.05 4.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 tracking-widest mb-1">DOWNLOAD FROM</div>
                    <div className="text-sm font-normal tracking-wide group-hover:text-blue-400 transition-colors">App Store</div>
                  </div>
                </div>
              </StoreButton>

              {/* Google Play Store Button */}
              <StoreButton href={PLAY_STORE_URL} label="Get Chopada App from Google Play Store">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.609 1.814L13.792 12L3.61 22.186a1.77 1.77 0 0 1-.71-.713L11.647 12 2.9 2.527a1.77 1.77 0 0 1 .709-.713z" fill="#EA4335" />
                      <path d="M3.61 22.186l.042.022L15.306 12.77l-2.27-1.928-9.426 11.344z" fill="#FBBC04" />
                      <path d="M3.652 22.208L15.35 12.787l2.128-1.8L6.4 1.8a1.8 1.8 0 0 0-2.5.727L3.61 1.814l.042.022z" fill="#4285F4" />
                      <path d="M21.503 12l-3.925-6.187-.013.01-2.115 1.8 2.27 1.928 3.783-2.715A1.8 1.8 0 0 1 22 9.866V12h-.497z" fill="#34A853" />
                      <path d="M3.609 1.814A1.8 1.8 0 0 0 1.1 3.527v16.946a1.8 1.8 0 0 0 2.509 1.713l.042-.022L15.306 12.77l2.27-1.928L6.4 1.8a1.8 1.8 0 0 0-2.5.727L3.61 1.814z" fill="#C5221F" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 tracking-widest mb-1">GET IT FROM</div>
                    <div className="text-sm font-normal tracking-wide group-hover:text-blue-400 transition-colors">Google Play</div>
                  </div>
                </div>
              </StoreButton>
            </div>

            <div className="border border-gray-800 p-12 lg:p-16 mt-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-normal mb-3">Start Your Journey</h3>
                  <p className="text-gray-400 font-normal">Begin preserving your family's spiritual heritage today</p>
                </div>
                <a
                  href="#download"
                  className="bg-blue-400 text-black px-10 py-4 text-sm font-medium tracking-wide hover:bg-blue-300 transition-all whitespace-nowrap"
                  aria-label="Download Chopada App now"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-gray-600 text-sm mb-4">© {new Date().getFullYear()} Chopada App. All rights reserved.</p>
          <p className="text-gray-700 text-xs">A product by Dcodes Technologies. Designed for Bhudev families worldwide</p>
        </div>
      </footer>
    </div>
  );
};

export default ChopadaLanding;