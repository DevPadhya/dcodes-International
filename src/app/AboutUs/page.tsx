// src/app/AboutUs/page.tsx  — SERVER component (no "use client"), everything in one file
import type { Metadata } from "next";
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import DarkVeil from "@/components/ReactBit/DarkVeil";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Target, Eye, Users, ExternalLink, Globe, ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What services does Dcodes Technologies offer?",
    a: "Dcodes Technologies offers a comprehensive range of IT services including Website Development, Software & Web ERP Solutions, Mobile App Development (Android & iOS), Digital Marketing, and SEO services. We provide end-to-end solutions from ideation to deployment and maintenance."
  },
  {
    q: "What industries do you serve?",
    a: "We serve a wide range of industries including Fintech & Insurance, Education, Energy and Utilities, Healthcare, Media & Entertainment, Oil & Gas, Retail & Ecommerce, Logistics & Distribution, Travel & Hospitality, Public Sector, Real Estate, Manufacturing, Financial Services, and Food & Beverage."
  },
  {
    q: "Where is Dcodes Technologies headquartered?",
    a: "Our team is based in Ahmedabad, Gujarat, India. We work remotely with clients in the US, UK, Canada, the UAE and other markets."
  },
  {
    q: "How long has Dcodes Technologies been in business?",
    a: "Dcodes Technologies was founded in early 2019. Since then, we have worked with clients ranging from startups to established businesses on websites, software, mobile apps and ERP systems."
  },
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in modern technologies including React & Next.js, Laravel & PHP, WordPress, MERN Stack, Flutter, React Native, and custom software development. Our team stays up-to-date with the latest tech trends to deliver cutting-edge solutions."
  },
  {
    q: "Do you offer custom software development?",
    a: "Yes, we specialize in custom software and Web ERP solutions tailored to specific business requirements. We work closely with clients to understand their needs and deliver scalable, secure, and high-performance solutions."
  },
];

const SITE = "https://www.dcodestech.com";
const CONTACT_URL = "/connect"; // change to "/contact" when the new contact page is live

export const metadata: Metadata = {
  title: "About Dcodes Technologies ",
  description:
    "Meet the team behind Dcodes Technologies: what we build, how we work with clients abroad and how to reach us.",
  authors: [{ name: "Dcodes Technologies" }],
  alternates: { canonical: `${SITE}/about` },
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
    title: "About Dcodes Technologies | Software & Web Team",
    description:
      "Dcodes Technologies is a software development company based in Ahmedabad, India that builds custom software, websites, mobile apps and ERP systems for businesses worldwide.",
    url: `${SITE}/about`,
    siteName: "Dcodes Technologies",
    images: [{ url: `${SITE}/og-image-about-us.jpg` }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dcodes Technologies | Software & Web Team",
    description:
      "Meet the team behind Dcodes Technologies: what we build, how we work with clients abroad and how to reach us.",
    images: [`${SITE}/twitter-card-about.jpg`],
  },
};

// Put this in app/layout.jsx if you don't have it already:
// export const viewport = { width: "device-width", initialScale: 1, themeColor: "#000000" };

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dcodes Technologies",
  description:
    "Professional IT solutions company specializing in web development, mobile apps, ERP systems, SEO, and digital marketing services.",
  url: SITE,
  logo: `${SITE}/logo.png`,
  foundingDate: "2019",
  founder: { "@type": "Person", name: "Dev Padhya" },
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
  areaServed: ["US", "GB", "CA", "AE", "AU"],
  employee: [
    { "@type": "Person", name: "Khushali Parikh", jobTitle: "Full Stack Developer" },
    { "@type": "Person", name: "Kunj Thakar", jobTitle: "Digital Marketer" },
    { "@type": "Person", name: "Milan Aaradeshna", jobTitle: "WordPress Developer" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+91-6353-653-977",
    email: "info@dcodestech.com",
  },
  sameAs: [
    "https://www.linkedin.com/in/dev-padhya/",
    // add your real company LinkedIn / Twitter / Instagram URLs here
  ],
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Dcodes Technologies",
  url: `${SITE}/about`,
  description: "Learn about our mission, vision, services, and team at Dcodes Technologies.",
  publisher: { "@type": "Organization", name: "Dcodes Technologies" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

const interactiveSections = [
  {
    id: 1,
    title: "About Company",
    image: "./about.jpg",
    icon: <Users className="w-5 h-5" />,
    content: [
      "From custom websites and mobile apps to enterprise software and digital marketing, we combine creativity, technology, and strategy to deliver measurable impact.",
      "Dcodes Technologies builds innovative, scalable digital experiences with a creative, client-first approach.",
      "Since our inception, we've helped businesses across industries transform ideas into scalable, high-performing solutions from custom websites and mobile apps to ERP systems, SEO, and digital marketing strategies that drive real growth."
    ]
  },
  {
    id: 2,
    title: "Our Mission",
    image: "./misson.jpg",
    icon: <Target className="w-5 h-5" />,
    content: [
      "To deliver high-performance digital products that simplify business processes and enhance user experiences.",
      "To ensure continuous innovation through R&D, emerging technologies, and adaptive design.",
      "To foster long-term partnerships built on trust, transparency, and measurable results.",
      "To maintain a culture of collaboration, learning, and excellence across our teams and clients."
    ]
  },
  {
    id: 3,
    title: "Our Vision",
    image: "./vision.jpg",
    icon: <Eye className="w-5 h-5" />,
    content: [
      "To become a global leader in digital transformation, empowering businesses worldwide with smart, scalable, and secure technology solutions that drive long-term success.",
      "With a strong global presence and a client-first mindset, we turn ideas into scalable realities."
    ]
  },
  {
    id: 4,
    title: "Global Expertise",
    image: "./goals.jpg",
    icon: <Globe className="w-5 h-5" />,
    content: [
      "Dcodes Technologies partners with clients across multiple industries and continents, providing adaptable, cross-border digital solutions.",
      "Our scalable infrastructure and diverse talent enable us to handle projects of any size from small business websites to enterprise-grade systems with the same focus, precision, and passion."
    ]
  },
  {
    id: 5,
    title: "Our Focus",
    image: "./focus.jpg",
    icon: <Target className="w-5 h-5" />,
    content: [
      "We don't just build software we create digital ecosystems that connect businesses to customers, data to strategy, and vision to execution.",
      "Whether you need a responsive website, a custom business application, or a 360° marketing strategy, Dcodes Technologies ensures results that scale with your growth."
    ]
  }
];

const stats = [
  { emoji: "🌍", value: "Global", label: "Serving Clients Worldwide", description: "Working with startups and businesses in the US, UK, Canada, UAE and beyond" },
  { emoji: "💡", value: "In-house", label: "Products We Built", description: "ERP Module, Hospital Management and Ticketing software" },
  { emoji: "👥", value: "Expert", label: "Team", description: "Experienced professionals in web, app, and software development" },
  { emoji: "⚙️", value: "Modern", label: "Technology Stack", description: "MERN, Laravel, WordPress, Flutter, React Native, Next.js, and more" },
  { emoji: "🚀", value: "Multiple", label: "Industries Served", description: "IT, Manufacturing, E-Commerce, Logistics, Healthcare, Education & More" }
];

const services = [
  {
    title: "Website Development",
    description: "Our expertise spans across Website Development, Software & Web ERP Solutions, Mobile App Development, Digital Marketing, and SEO designed to transform your ideas into high-performing, real-world results.",
    technologies: ["React & Next.js", "Laravel & PHP", "WordPress", "MERN Stack"]
  },
  {
    title: "Software & Web ERP Solutions",
    description: "We design and develop custom Web ERP solutions tailored to your specific business requirements, ensuring seamless workflow automation, enhanced productivity, and scalable growth.",
    industries: ["IT", "Manufacturing", "E-Commerce", "Logistics", "Healthcare", "Education"]
  },
  {
    title: "Mobile App Development",
    description: "High-performance mobile applications for both Android and iOS platforms using modern technologies.",
    technologies: ["Android", "iOS", "Flutter", "React Native"]
  },
  {
    title: "Digital Marketing & SEO",
    description: "Complete digital marketing services to help businesses build a strong online presence and drive real results.",
    platforms: ["SEO Strategy", "Social Media", "Content Marketing", "Performance Analytics"]
  }
];

const industries = [
  { name: "Fintech & Insurance", icon: "💳" },
  { name: "Education", icon: "🎓" },
  { name: "Energy and Utilities", icon: "⚡" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Media & Entertainment", icon: "🎬" },
  { name: "Oil & Gas, Mining", icon: "⛽" },
  { name: "Retail & Ecommerce", icon: "🛒" },
  { name: "Logistics & Distribution", icon: "🚚" },
  { name: "Travel & Hospitality", icon: "✈️" },
  { name: "Public Sector", icon: "🏛️" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Manufacturing", icon: "🚗" },
  { name: "Financial Services", icon: "💰" },
  { name: "Food & Beverage", icon: "🍔" },
];

const images = [
  "./logo1.jpg", "./logo2.png", "./logo3.png", "./logo4.png", "./logo5.jpg",
  "./logo7.jpg", "./logo8.png", "./logo9.png", "./logo10.png", "./logo11.jpg",
  "./logo12.jpg", "./logo13.png", "./logo14.png", "./logo15.jpg", "./logo16.png",
  "./logo12.jpg", "./logo7.jpg", "./logo8.png", "./logo12.jpg", "./logo17.png",
  "./logo18.png", "./logo13.png", "./logo19.png", "./logo20.png", "./logo9.png",
  "./logo10.png", "./logo11.jpg", "./logo12.jpg", "./logo13.png",
];

const storyCards = [
  { src: "/story (3).jpeg", alt: "Our Journey Begins at Dcodes Technologies", title: "Our Journey Begins" },
  { src: "/story (1).jpeg", alt: "The Team & Our Hub at Dcodes Technologies", title: "The Team & Our Hub" },
  { src: "/story (2).jpeg", alt: "Ideation & Collaboration at Dcodes Technologies", title: "Ideation & Collaboration" },
];

const teamMembers: { name: string; role: string; description: string; linkedin?: string }[] = [
  {
    name: "Khushali Parikh",
    role: "Full Stack Developer",
    description: "Full stack developer specializing in the MERN stack, database management, and server-side programming.",
  },
  {
    name: "Kunj Thakar",
    role: "Digital Marketer",
    description: "Creative digital marketer with skills in branding, social media campaigns, and content strategy.",
    linkedin: "https://www.linkedin.com/in/kunj-thakar-290756305/",
  },
  {
    name: "Milan Aaradeshna",
    role: "WordPress Developer",
    description: "Expert in WordPress development, including custom themes, plugin development, and website optimization.",
    linkedin: "https://www.linkedin.com/in/milan-aaradeshna-43157458/",
  },
];

// Selected from the public Google Business reviews.
// Note: Kunj Thakar's review is intentionally left out (he is a team member).
const testimonials: { name: string; text: string; tag: string }[] = [
  {
    name: "Riken Patel",
    text: "Dcodes Technologies delivers exceptional digital marketing, website development, and SEO services, driving impactful growth and online visibility for businesses. Their expertise and innovation consistently yield impressive results.",
    tag: "Digital Marketing & SEO",
  },
  {
    name: "Kaushal P",
    text: "Best website and SEO service provider in Ahmedabad.",
    tag: "Website & SEO",
  },
  {
    name: "Asim Raval",
    text: "Best digital marketing service provider.",
    tag: "Digital Marketing",
  },
  {
    name: "Hetal Ben",
    text: "Very helpful company for web development and digital marketing services in Ahmedabad.",
    tag: "Web Development",
  },
  {
    name: "Priya Khubani",
    text: "Best digital marketing service provider.",
    tag: "Digital Marketing",
  },
  {
    name: "Saloni Thakar",
    text: "Had a great experience at Dcodes. The visit was insightful, and the team was very professional. Learned a lot about industry practices.",
    tag: "Industrial Visit",
  },
];

const SectionHeading = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-6 mb-6">
    <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-normal group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
  </div>
);

const SectionBullets = ({ items }: { items: string[] }) => (
  <>
    <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mb-6" />
    <ul className="space-y-3">
      {items.map((point, idx) => (
        <li key={idx} className="text-gray-300 leading-relaxed font-normal text-lg flex items-start">
          <span className="text-blue-400 mr-3 mt-1.5" aria-hidden="true">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </>
);

const Tags = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item, i) => (
      <li key={i} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
        {item}
      </li>
    ))}
  </ul>
);

const AboutUsPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(orgSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(aboutSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated DarkVeil Background */}
      <div aria-hidden="true" style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
        <DarkVeil />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Hero Section */}
        <header className="relative mb-32 mt-20 text-center">
          <div className="relative z-10">
            <p className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8 bg-black/30 backdrop-blur-sm">
              <span className="text-sm font-normal tracking-wider uppercase">Professional IT Solutions</span>
            </p>

            <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
              Dcodes{" "}
              <span className="block font-extralight italic">Technologies</span>
              <span className="sr-only"> – About Our Software, Web &amp; Mobile App Development Team</span>
            </h1>

            <p className="text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
              At Dcodes Technologies, we build powerful digital solutions that help businesses scale in today's fast-moving world.
            </p>
          </div>

          <div className="flex flex-col mt-8 gap-4 items-center sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="/Dcodes Technologies Corporate Profile.pdf"
              download="portfolio.pdf"
              className='p-3 w-45 md:w-58 lg:w-70 bg-gradient-to-r from-purple-800 to-blue-700 text-white font-bold rounded-full border-2 border-transparent hover:border-white transition-all duration-300'
              aria-label="Download Dcodes Technologies portfolio PDF"
            >
              Download Portfolio
            </a>

      <a
  href="https://portfolio.dcodestech.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 w-45 md:w-58 lg:w-70 bg-transparent text-white font-bold rounded-full border-2 border-gray-400 hover:border-white transition-all duration-300"
  aria-label="View Dcodes Technologies portfolio in new tab"
>
  View Portfolio
</a>
          </div>
        </header>

        {/* Stats Section */}
        <section className="w-full flex justify-center" aria-labelledby="why-dcodes">
          <h2 id="why-dcodes" className="sr-only">Why Choose Dcodes Technologies</h2>
          <div className="mb-26 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl lg:max-w-[90rem] mx-auto px-4">
            {stats.map((stat, index) => (
              <div key={index} className="group cursor-default flex justify-center">
                <div className="relative w-full lg:w-[230px] xl:w-[250px] p-8 border border-white/10 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full">
                  <div className="text-2xl mb-4" aria-hidden="true">{stat.emoji}</div>
                  <div className="text-xl font-normal mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 font-medium mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400 font-normal leading-relaxed">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Sections */}
        <section className="mb-32" aria-labelledby="about-heading">
          <div className="mb-16">
            <h2 id="about-heading" className="text-4xl font-normal mb-4 tracking-wide">Who We Are</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="space-y-8">
            {interactiveSections.map((section, index) => {
              const imageEl = (
                <img
                  src={section.image}
                  alt={`${section.title} – Dcodes Technologies`}
                  loading="lazy"
                  className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              );
              const textEl = (
                <>
                  <SectionHeading icon={section.icon} title={section.title} />
                  <SectionBullets items={section.content} />
                </>
              );
              return (
                <article key={section.id} className="group">
                  <div className="relative border border-white/10 rounded-xl bg-gray-900/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-hidden">
                    <div className="p-8 flex flex-col md:flex-row gap-8 items-start lg:items-center">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex-shrink-0 w-full md:w-64 lg:w-80 order-2 md:order-1">{imageEl}</div>
                          <div className="flex-1 order-1 md:order-2">{textEl}</div>
                        </>
                      ) : (
                        <>
                          <div className="flex-1 order-1">{textEl}</div>
                          <div className="flex-shrink-0 w-full md:w-64 lg:w-80 order-2">{imageEl}</div>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-32" aria-labelledby="services-heading">
          <div className="mb-16">
            <h2 id="services-heading" className="text-4xl font-normal mb-4 tracking-wide">Our IT Services</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <div className="space-y-4 text-lg font-normal text-white/80 leading-relaxed max-w-4xl">
              <p>
                At Dcodes Technologies, we craft powerful digital solutions that help businesses grow, scale, and succeed in the modern world.
              </p>
              <p>
                Our expertise spans across Website Development, Software & Web ERP Solutions, Mobile App Development, Digital Marketing, and SEO designed to transform your ideas into high-performing, real-world results.
              </p>
              <p>
                We combine innovation, strategy, and technology to deliver solutions that don't just look great — they drive measurable business impact and support your growth globally.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="border border-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:border-white/30 hover:bg-white/5">
                  <div className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-full mb-6 group-hover:border-white/40 transition-colors" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-normal tracking-wide mb-4">{service.title}</h3>
                  <p className="text-white/70 font-normal leading-relaxed mb-4">{service.description}</p>
                  {service.technologies && <Tags items={service.technologies} />}
                  {service.industries && <Tags items={service.industries} />}
                  {service.platforms && <Tags items={service.platforms} />}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CEO Section */}
        <section className="mb-32" aria-labelledby="leadership-heading">
          <div className="mb-16">
            <h2 id="leadership-heading" className="text-4xl font-normal mb-4 tracking-wide">Leadership & Founder</h2>
            <div className="w-16 h-px bg-white/20" />
          </div>

          <div className="relative p-12 border border-white/10 rounded-2xl bg-gray-900/20 backdrop-blur-sm cursor-pointer hover:border-blue-400/50 transition-all duration-300 group">
            {/* Whole-card link (no nested interactive elements inside it) */}
            <Link
              href="/ceo"
              className="absolute inset-0 z-10 rounded-2xl"
              aria-label="View full profile of Dev Padhya, Founder & CEO"
            />

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-800 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                  <img
                    src="/dev.png"
                    alt="Dev Padhya - Founder & CEO of Dcodes Technologies"
                    width={160}
                    height={160}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-3xl font-normal mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">Dev Padhya</h3>
                  <p className="text-blue-400 font-medium text-lg tracking-wide">Founder & CEO</p>
                </div>

                <div className="mb-8">
                  <p className="text-lg leading-relaxed text-gray-300 font-normal">
                    Founded in early 2019, we are driven by a passion for innovation and digital transformation. With a deep understanding of the fast-evolving digital landscape, we empower organizations to thrive in the modern era.
                  </p>
                  <br />
                  <p className="text-lg leading-relaxed text-gray-300 font-normal">
                    Our mission is to help businesses harness the power of technology to achieve their strategic goals, streamline operations, and stay ahead in an ever-changing world. At Dcodes Technologies, we don't just build solutions we create impactful, scalable, and future-ready digital experiences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/dev-padhya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 group inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg bg-gray-800/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                    aria-label="Connect with Dev Padhya on LinkedIn"
                  >
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      Connect on LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>

                  <a
                    href="https://bni-ahmedabad.in/ahmedabad-west-odysseus/en-IN/memberdetails?encryptedMemberId=gpyc%2FH45myen9LMLQJyDmg%3D%3D&cmsv3=true&name=Dev+Padhya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 group inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg bg-gray-800/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                    aria-label="Connect with Dev Padhya on BNI"
                  >
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      Connect on BNI
                    </span>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>

                  <span className="inline-flex items-center gap-3 px-6 py-3 border border-blue-400/30 rounded-lg bg-blue-400/10 transition-all duration-300">
                    <span className="font-medium text-blue-400">View Full Profile →</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where we work + time zones */}
        <section className="mb-32" aria-labelledby="where-heading">
          <div className="mb-16">
            <h2 id="where-heading" className="text-4xl font-normal mb-4 tracking-wide">Where We Work & How We Work With You</h2>
            <div className="w-16 h-px bg-white/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="border border-white/10 rounded-lg p-8 transition-all duration-300 hover:border-white/30 hover:bg-white/5">
              <h3 className="text-2xl font-normal tracking-wide mb-4">Where We Work From</h3>
              <p className="text-white/70 font-normal leading-relaxed">
                Our team is based in Ahmedabad, Gujarat, India. We work remotely with clients in the US, UK, Canada, the UAE and other markets.
              </p>
            </article>
            <article className="border border-white/10 rounded-lg p-8 transition-all duration-300 hover:border-white/30 hover:bg-white/5">
              <h3 className="text-2xl font-normal tracking-wide mb-4">How We Work Across Time Zones</h3>
              <p className="text-white/70 font-normal leading-relaxed">
                A named project lead, a shared task board and regular demos keep distance from slowing you down. On the first call we agree meeting hours that overlap with your working day.
              </p>
            </article>
          </div>
        </section>

        {/* Team */}
        <section className="mb-32" aria-labelledby="team-heading">
          <div className="mb-16">
            <h2 id="team-heading" className="text-4xl font-normal mb-4 tracking-wide">Meet the Team</h2>
            <div className="w-16 h-px bg-white/20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((m) => (
              <article
                key={m.name}
                className="group border border-white/10 rounded-lg p-6 bg-gray-900/20 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
              >
                {/* Vector avatar (replaces photo) */}
                <div
                  className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 mb-5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-normal text-white group-hover:text-blue-400 transition-colors duration-300">{m.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{m.role}</p>
                <p className="text-sm text-gray-400 font-normal leading-relaxed">{m.description}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-gray-300 hover:text-white transition-colors"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-32" aria-labelledby="testimonials-heading">
          <div className="mb-16">
            <h2 id="testimonials-heading" className="text-4xl font-normal mb-4 tracking-wide">
              What People Say About Us
            </h2>
            <div className="w-16 h-px bg-white/20 mb-6" />
            <p className="text-white/60 text-lg">Reviews from our Google Business profile.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="group flex flex-col justify-between border border-white/10 rounded-lg p-6 bg-gray-900/20 backdrop-blur-sm transition-all duration-300 hover:border-white/30"
              >
                <blockquote className="text-gray-300 leading-relaxed mb-6">
                  <span className="text-blue-400 text-3xl leading-none mr-1" aria-hidden="true">“</span>
                  {t.text}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-sm text-white/70"
                    aria-hidden="true"
                  >
                    {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                  </span>
                  <div>
                    <div className="text-white font-normal group-hover:text-blue-400 transition-colors duration-300">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.tag} · Google Review</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Industries + Marquee */}
        <section className="py-8 px-4 sm:px-6 lg:px-8" aria-labelledby="industries-heading">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-3xl md:text-4xl font-bold text-white mb-4">
                Delivering the Right Solution
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We excel in delivering the best-suited solution...
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[32%_68%] gap-10 items-start">
              {/* LEFT - INDUSTRIES */}
              <div className="min-w-[280px]">
                <h2 id="industries-heading" className="text-xl font-semibold text-white mb-6">Industries We Serve</h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industries.map((industry) => (
                    <li
                      key={industry.name}
                      className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                    >
                      <span className="text-xl mr-3" aria-hidden="true">{industry.icon}</span>
                      <span className="text-gray-200">{industry.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT - MARQUEE */}
              <div className="overflow-hidden rounded-2xl bg-gray-900/20 p-3 ring-1 ring-neutral-700/20">
                <ThreeDMarquee images={images} />
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="w-full py-16" aria-labelledby="story-heading">
          <h2 id="story-heading" className="text-4xl font-bold text-center mb-14 uppercase">Our Story</h2>


          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            {storyCards.map((card) => (
              <div
                key={card.title}
                className="group relative rounded-xl overflow-hidden shadow-xl border border-gray-400 transition-all duration-500 hover:shadow-blue-400/40 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 p-[2px]"
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={250}
                    height={350}
                    className="object-cover h-64 w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                <h3 className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-md">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 border-t border-white/10" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <HelpCircle className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-white/60">FAQ</span>
              </div>
              <h2 id="faq-heading" className="text-4xl font-normal mb-4 tracking-wide">
                Frequently Asked Questions
              </h2>
              <p className="text-white/50 text-lg">
                Everything you need to know about Dcodes Technologies and our services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="group bg-gray-900/40 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  <input type="checkbox" id={`faq-toggle-${i}`} className="sr-only" />
                  <h3>
                    <label
                      htmlFor={`faq-toggle-${i}`}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="font-medium text-white text-base md:text-lg">{faq.q}</span>
                      <span
                        aria-hidden="true"
                        className="text-blue-400 text-2xl leading-none transition-transform duration-300 flex-shrink-0 group-has-[:checked]:rotate-45"
                      >
                        +
                      </span>
                    </label>
                  </h3>
                  {/* Answer is always in the DOM (crawlable), only visually collapsed */}
                  <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-has-[:checked]:max-h-96 group-has-[:checked]:opacity-100">
                    <p className="px-6 pb-5 text-white/70 text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/50 mb-6">Still have questions? We're here to help!</p>
              <Link
                href={CONTACT_URL}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16" aria-labelledby="contact-heading">
          <div className="text-center mb-16">
            <p className="text-4xl font-normal mb-6 tracking-wide">Thank You!</p>
            <p className="text-lg font-normal text-white/70">
              Hopefully, we can work together and this project will be successful.
            </p>
          </div>

          <div className="border border-white/10 rounded-lg p-12 max-w-2xl mx-auto">
            <h2 id="contact-heading" className="text-3xl font-normal mb-12 text-center tracking-wide">
              Let's Get In Touch
              <span className="sr-only"> – Contact Dcodes Technologies</span>
            </h2>

            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-xl font-normal mb-6 tracking-wide">Contact Us</h3>
                <address className="space-y-2 not-italic">
                  <a href="mailto:info@dcodestech.com" className="text-white/80 font-normal hover:text-white transition-colors">
                    info@dcodestech.com
                  </a>
                  <br />
                  <a href="tel:+916353653977" className="text-white/80 font-normal hover:text-white transition-colors">
                    +91 6353 653 977
                  </a>
                </address>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href={CONTACT_URL}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Talk to us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
};

export default AboutUsPage;