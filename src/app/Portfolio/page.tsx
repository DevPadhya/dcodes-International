import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://www.dcodestech.com";
const PAGE_URL = `${SITE}/Portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Services & Company Profile | Dcodes Technologies",
  description:
    "Dcodes Technologies builds websites, custom software, ERP systems and mobile apps, and runs SEO and social media marketing. See what we do and get in touch.",
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Dcodes Technologies",
    title: "Dcodes Technologies | Services & Company Profile",
    description:
      "Websites, custom software, ERP systems, mobile apps, SEO and social media marketing from Dcodes Technologies.",
    images: [{ url: "/og-portfolio.jpg", width: 1200, height: 630, alt: "Dcodes Technologies company profile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dcodes Technologies | Services & Company Profile",
    description: "Websites, custom software, ERP, mobile apps, SEO and social media marketing.",
    images: ["/og-portfolio.jpg"],
  },
};

const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#page`,
      name: "Dcodes Technologies Company Profile",
      url: PAGE_URL,
      about: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Dcodes Technologies",
      url: SITE,
      logo: `${SITE}/logo.png`,
      email: "info@dcodestech.com",
      telephone: "+91-6353-653-977",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: PAGE_URL },
      ],
    },
  ],
};

export default function Portfolio() {
  return (
    <div className="bg-black text-white mt-16 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }}
      />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-32">
          <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-normal tracking-wider uppercase">Professional IT Solutions</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-normal mb-8 tracking-tight">
            <span className="sr-only">Dcodes Technologies </span>
            Corporate
            <span className="block font-extralight italic">Profile</span>
          </h1>
          <p className="text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
            We offer professional and business IT solutions covering a large domain of sectors.
          </p>
        </section>

        {/* About Company */}
        <section className="mb-32" aria-labelledby="about-heading">
          <div className="mb-16">
            <h2 id="about-heading" className="text-4xl font-normal mb-4 tracking-wide">About Company</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <p className="text-lg font-normal text-white/80 leading-relaxed">
                Dcodes Technologies was founded in year 2023 in India. The company's main goal is to create IT solutions through research and innovation.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-normal tracking-wide">Introduction</h3>
              <p className="text-white/70 font-normal leading-relaxed">
                Dcodes Technologies is a forward-thinking software development company dedicated to delivering innovative digital solutions. Our expertise spans a wide range of technologies, empowering businesses to harness the full potential of the digital world.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-normal tracking-wide">Our Vision And Mission</h3>
              <p className="text-white/70 font-normal leading-relaxed">
                To become the most trusted partner in digital transformation, known for our innovative solutions, exceptional service, and commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-32" aria-labelledby="what-heading">
          <div className="mb-16">
            <h2 id="what-heading" className="text-4xl font-normal mb-4 tracking-wide">What We Do?</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg font-normal text-white/80 leading-relaxed max-w-4xl">
              At Dcodes Technologies, we specialize in software development, website design, web development, and Android and iOS app creation. Our digital marketing solutions enhance your online presence and drive growth. We turn your digital visions into reality with innovative and effective strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Web Development", "Software Development", "Digital Marketing", "App Development"].map((service) => (
              <div key={service} className="group">
                <div className="border border-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:border-white/30 hover:bg-white/5">
                  <div className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-full mb-6 group-hover:border-white/40 transition-colors" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-normal tracking-wide">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Website Development */}
        <section id="web-development" className="mb-32" aria-labelledby="web-heading">
          <div className="mb-16">
            <h2 id="web-heading" className="text-4xl font-normal mb-4 tracking-wide">Website Development</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-white/80 font-normal leading-relaxed">
                We build custom websites using WordPress, HTML, and PHP. Our expertise is in WordPress, where we design unique websites from scratch, including business, informational, and e-commerce sites.
              </p>
              <p className="text-white/80 font-normal leading-relaxed">
                For online stores, we work with both WooCommerce and Shopify to deliver fast, user-friendly experiences.
              </p>
              <p className="text-white/80 font-normal leading-relaxed">
                Every website we create is responsive, secure, and tailored to your goals.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-normal mb-8 text-center tracking-wide">Our Web Technologies</h3>
              <div className="space-y-4">
                {["WordPress Development", "React & PHP Websites", "E-commerce Solutions", "WooCommerce & Shopify"].map((tech) => (
                  <div key={tech} className="flex items-center space-x-4">
                    <div className="w-1 h-1 bg-white/40 rounded-full" aria-hidden="true"></div>
                    <span className="font-normal text-white/90">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Web ERPs */}
        <section id="erp-solutions" className="mb-32" aria-labelledby="erp-heading">
          <div className="mb-16">
            <h2 id="erp-heading" className="text-4xl font-normal mb-4 tracking-wide">Web ERPs</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-white/80 font-normal leading-relaxed">
                We develop custom Web ERP solutions tailored to specific business workflows. Along with custom ERP development, we also offer our own ready-to-use ERP product. We use the latest technologies to ensure our ERP systems are secure, scalable, and optimized for performance, helping businesses manage operations more efficiently.
              </p>

              <div className="space-y-6">
                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-normal mb-3 tracking-wide">Custom ERP Solutions</h3>
                  <p className="text-white/70 font-normal">We develop custom Web ERPs as per clients requirement</p>
                </div>

                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-normal mb-3 tracking-wide">Ready-to-Use ERP</h3>
                  <p className="text-white/70 font-normal">We also offer our own ready-to-use ERP product.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="border border-white/10 rounded-lg p-8 w-full h-full flex items-center justify-center min-h-[300px] bg-white/5">
                <div className="text-center space-y-4">
                  <div className="flex justify-center" aria-hidden="true">
                    <svg className="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 9l-3 3 3 3" />
                    </svg>
                  </div>
                  <p className="font-normal text-white/60 text-sm">ERP System Dashboard</p>
                  <p className="font-normal text-white/40 text-xs">Complete Business Management Solution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Development */}
        <section id="software-development" className="mb-32" aria-labelledby="software-heading">
          <div className="mb-16">
            <h2 id="software-heading" className="text-4xl font-normal mb-4 tracking-wide">Software Development</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg font-normal text-white/80 leading-relaxed max-w-4xl">
              We provide custom software development services tailored to your specific business needs. From concept to deployment, we build scalable and efficient software solutions using modern technologies, ensuring smooth integration with your existing systems and processes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-normal mb-8 tracking-wide">Industries we serve:</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Retail", "Education", "Healthcare", "Real Estate", "Manufacturing", "Logistics", "HR", "& more"].map((industry) => (
                  <div key={industry} className="border border-white/10 rounded px-4 py-3 text-center font-normal hover:border-white/20 transition-colors">
                    {industry}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-normal mb-6 tracking-wide">We build custom software:</h3>
              <p className="text-white/70 font-normal leading-relaxed">
                Tailored to your business needs — whether it's billing, tracking, or managing operations.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Marketing */}
        <section id="digital-marketing" className="mb-32" aria-labelledby="smm-heading">
          <div className="mb-16">
            <h2 id="smm-heading" className="text-4xl font-normal mb-4 tracking-wide">Social Media Marketing</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-white/80 font-normal leading-relaxed">
                We offer complete social media marketing services to help businesses build a strong online presence. From creating engaging content to running targeted ad campaigns, we manage everything to boost your visibility and drive real results.
              </p>
              <p className="text-white/80 font-normal leading-relaxed">
                We work across platforms like Instagram, Facebook, LinkedIn, Google, and YouTube, crafting strategies that align with your brand and business goals.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-normal mb-8 text-center tracking-wide">Platforms We Cover</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Instagram", "Facebook", "LinkedIn", "Google"].map((platform) => (
                  <div key={platform} className="border border-white/10 rounded px-4 py-3 text-center font-normal hover:border-white/20 transition-colors">
                    {platform}
                  </div>
                ))}
                <div className="col-span-2 border border-white/10 rounded px-4 py-3 text-center font-normal hover:border-white/20 transition-colors">
                  YouTube
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Engine Optimization */}
        <section id="seo" className="mb-32" aria-labelledby="seo-heading">
          <div className="mb-16">
            <h2 id="seo-heading" className="text-4xl font-normal mb-4 tracking-wide">Search Engine Optimization</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-white/80 font-normal leading-relaxed">
                We provide result-driven SEO services to help your website rank higher on search engines and attract quality traffic. Our approach includes on-page optimization, technical SEO, keyword research, and high-authority backlink building. We ensure your website is search-friendly, fast, and aligned with the latest algorithms to improve visibility and grow your organic reach.
              </p>

              <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-normal mb-3 tracking-wide">Organic traffic that converts:</h3>
                <p className="text-white/70 font-normal">Attract your ideal customers with powerful SEO</p>
              </div>
            </div>

            <div className="flex items-center justify-center" aria-hidden="true">
              <div className="border border-white/10 rounded-lg p-16 w-full h-full flex items-center justify-center min-h-[300px]">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border border-white/20 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-2 h-8 bg-white/30 rounded-full mr-1"></div>
                    <div className="w-2 h-6 bg-white/20 rounded-full mr-1"></div>
                    <div className="w-2 h-10 bg-white/40 rounded-full"></div>
                  </div>
                  <p className="font-normal text-white/60">SEO Performance Metrics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Apps Development */}
        <section id="mobile-apps" className="mb-32" aria-labelledby="mobile-heading">
          <div className="mb-16">
            <h2 id="mobile-heading" className="text-4xl font-normal mb-4 tracking-wide">Mobile Apps Development</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <p className="text-lg font-normal text-white/80 leading-relaxed max-w-4xl">
              We develop high-performance mobile applications for both Android and iOS platforms. We also build cross-platform apps using Flutter to ensure faster development and a seamless experience across all devices. Whether it's a business app, e-commerce solution, or service-based platform, we create apps that are user-friendly, scalable, and built to perform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-normal mb-6 tracking-wide">Why go mobile?</h3>
              <p className="text-white/70 font-normal leading-relaxed">
                Today's customers expect everything at their fingertips. A mobile app not only increases engagement but also builds trust and brand loyalty.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-normal mb-6 tracking-wide">"Make your business mobile"</h3>
              <p className="text-white/70 font-normal leading-relaxed">
                A custom mobile app can simplify your daily operations — from managing staff and tracking orders to handling customer queries in real-time. Whether it's internal workflow or customer service, a well-designed app makes your business faster, smarter, and more efficient on the go.
              </p>
            </div>
          </div>

          <div className="border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-normal mb-8 text-center tracking-wide">Our App Development Technologies</h3>
            <div className="grid grid-cols-3 gap-6">
              {["Android", "iOS", "Flutter"].map((tech) => (
                <div key={tech} className="border border-white/10 rounded px-6 py-4 text-center font-normal hover:border-white/20 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16" aria-labelledby="contact-heading">
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="text-4xl font-normal mb-6 tracking-wide">Thank You!</h2>
            <p className="text-lg font-normal text-white/70">
              Hopefully, we can work together and this project will be successful.
            </p>
          </div>

          <div className="border border-white/10 rounded-lg p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-normal mb-12 text-center tracking-wide">Let's Get In Touch</h3>

            <div className="space-y-12">
              <div className="text-center">
                <h4 className="text-xl font-normal mb-6 tracking-wide">Contact Us</h4>
                <div className="space-y-2">
                  <a href="mailto:info@dcodestech.com" className="text-white/80 font-normal hover:text-white transition-colors">
                    info@dcodestech.com
                  </a>
                  <br />
                  <a href="tel:+916353653977" className="text-white/80 font-normal hover:text-white transition-colors">
                    +91 6353 653 977
                  </a>
                  <br />
                  <Link href="/connect" className="inline-block mt-4 border border-white/20 rounded-full px-6 py-2 text-white/90 hover:bg-white/10 transition-colors">
                    Send us your project brief
                  </Link>
                </div>
              </div>

              <div className="w-16 h-px bg-white/10 mx-auto"></div>

              <div className="text-center">
                <h4 className="text-xl font-normal mb-6 tracking-wide">Visit Our Website</h4>
                <a href="https://www.dcodestech.com" className="text-white/80 font-normal hover:text-white transition-colors">
                  www.dcodestech.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}