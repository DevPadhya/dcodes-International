"use client";

import { useEffect, useRef, useState } from "react";
import {
  Linkedin,
  CalendarDays,
  ArrowUpRight,
  Quote,
  Rocket,
  ShieldCheck,
  RefreshCcw,
  Award,
  Handshake,
  Eye,
  Target,
  HeartPulse,
  Factory,
  Building2,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Hotel,
  Car,
  Users2,
  LayoutGrid,
  Globe2,
  Code2,
  BarChart3,
  Flag,
  Brain,
  Trophy,
  BadgeCheck,
  Download,
  Layers,
  Boxes,
  Cog,
  Cloud,
  LineChart as LineChartIcon,
  Briefcase,
  Palette,
  Megaphone,
  Search,
  Wrench,
  Sparkles,
  Server,
  User,
} from "lucide-react";
import Image from "next/image";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${className} reveal ${visible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}

const BRANDS = ["KOTAN'S", "MADHURAM PRIME", "HandTreat PAPER"];

const PRINCIPLES = [
  { icon: Sparkles, title: "Innovation", copy: "Always build better." },
  { icon: ShieldCheck, title: "Integrity", copy: "Trust before business." },
  { icon: Users2, title: "Customer Success", copy: "Our success begins with yours." },
  { icon: RefreshCcw, title: "Continuous Learning", copy: "Technology never stops." },
  { icon: Award, title: "Ownership", copy: "We take responsibility." },
  { icon: Handshake, title: "Long-Term Relationships", copy: "We believe in partnerships." },
];

const INDUSTRIES = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Building2, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "Retail & E-commerce" },
  { icon: Landmark, label: "Finance" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Car, label: "Automobile" },
  { icon: Handshake, label: "NGOs & Government" },
  { icon: LayoutGrid, label: "And Many More" },
];

const EXPERTISE = [
  { icon: Layers, label: "Website Development" },
  { icon: Boxes, label: "Enterprise Software" },
  { icon: Cog, label: "Business Automation" },
  { icon: Server, label: "ERP Development" },
  { icon: Users2, label: "CRM Solutions" },
  { icon: Brain, label: "AI Solutions" },
  { icon: Cloud, label: "Cloud Technology" },
  { icon: LineChartIcon, label: "Digital Strategy" },
  { icon: Briefcase, label: "Business Consultation" },
  { icon: Palette, label: "Branding & Design" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Search, label: "SEO & Lead Generation" },
  { icon: Wrench, label: "Product Development" },
  { icon: Cloud, label: "SaaS Development" },
  { icon: Handshake, label: "Technology Consulting" },
];

const MILESTONES = [
  { icon: Rocket, title: "Started Entrepreneurial Journey" },
  { icon: Flag, title: "Founded Dcodes Tech" },
  { icon: Users2, title: "100+ Businesses Served" },
  { icon: BarChart3, title: "Expanded Digital Services" },
  { icon: Code2, title: "Enterprise Solutions" },
  { icon: Globe2, title: "Global Client Expansion" },
  { icon: Brain, title: "AI Integration" },
  { icon: Users2, title: "Team Growth" },
  { icon: Trophy, title: "Global Technology Leader" },
];

const NUMBERS = [
  { num: "10+", label: "Years Experience" },
  { num: "250+", label: "Projects Delivered" },
  { num: "100+", label: "Businesses Empowered" },
  { num: "20+", label: "Technologies" },
  { num: "15+", label: "Industries" },
  { num: "5+", label: "Countries" },
];

const AWARDS = [
  { icon: BadgeCheck, title: "Proud", sub: "BNI Member" },
  { icon: Award, title: "Leadership", sub: "Roles" },
  { icon: ShieldCheck, title: "Business", sub: "Excellence" },
  { icon: Trophy, title: "Client", sub: "Appreciation" },
];

export default function DevPadhyaPage() {
  const [imageError, setImageError] = useState(false);

  // ==================== SEO META TAGS ====================
  useEffect(() => {
    // Update document title
    document.title = "Dev Padhya | Founder & CEO of Dcodes Technologies | Digital Transformation Leader";
    
    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Dev Padhya is the Founder & CEO of Dcodes Technologies, a leading digital transformation company. Learn about his journey, vision, and how he's helping businesses grow through technology and innovation.");
    
    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "Dev Padhya, Dcodes Technologies, Founder, CEO, Digital Transformation, Technology Leader, Entrepreneur, Business Growth, Digital Solutions, Enterprise Software, AI Solutions, Web Development, Business Automation, Technology Consulting");
    
    // Viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', "width=device-width, initial-scale=1.0");
    
    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    // Author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', "Dev Padhya, Dcodes Technologies");
    
    // Theme Color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', "#080d19");
    
    // Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', "Dev Padhya - Founder & CEO of Dcodes Technologies");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Meet Dev Padhya, the visionary Founder & CEO of Dcodes Technologies, dedicated to helping businesses succeed through innovative technology and digital transformation.");
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', "profile");
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', "https://dcodes.com/about/dev-padhya");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/dev-padhya-og-image.jpg");
    
    let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
    if (!ogImageWidth) {
      ogImageWidth = document.createElement('meta');
      ogImageWidth.setAttribute('property', 'og:image:width');
      document.head.appendChild(ogImageWidth);
    }
    ogImageWidth.setAttribute('content', "1200");
    
    let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
    if (!ogImageHeight) {
      ogImageHeight = document.createElement('meta');
      ogImageHeight.setAttribute('property', 'og:image:height');
      document.head.appendChild(ogImageHeight);
    }
    ogImageHeight.setAttribute('content', "630");
    
    // Profile-specific OG tags
    let ogProfileFirstName = document.querySelector('meta[property="og:profile:first_name"]');
    if (!ogProfileFirstName) {
      ogProfileFirstName = document.createElement('meta');
      ogProfileFirstName.setAttribute('property', 'og:profile:first_name');
      document.head.appendChild(ogProfileFirstName);
    }
    ogProfileFirstName.setAttribute('content', "Dev");
    
    let ogProfileLastName = document.querySelector('meta[property="og:profile:last_name"]');
    if (!ogProfileLastName) {
      ogProfileLastName = document.createElement('meta');
      ogProfileLastName.setAttribute('property', 'og:profile:last_name');
      document.head.appendChild(ogProfileLastName);
    }
    ogProfileLastName.setAttribute('content', "Padhya");
    
    let ogProfileUsername = document.querySelector('meta[property="og:profile:username"]');
    if (!ogProfileUsername) {
      ogProfileUsername = document.createElement('meta');
      ogProfileUsername.setAttribute('property', 'og:profile:username');
      document.head.appendChild(ogProfileUsername);
    }
    ogProfileUsername.setAttribute('content', "devpadhya");
    
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
    twitterTitle.setAttribute('content', "Dev Padhya - Founder & CEO of Dcodes Technologies");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Meet Dev Padhya, the visionary Founder & CEO of Dcodes Technologies, helping businesses succeed through innovative technology.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/dev-padhya-twitter-image.jpg");
    
    let twitterSite = document.querySelector('meta[name="twitter:site"]');
    if (!twitterSite) {
      twitterSite = document.createElement('meta');
      twitterSite.setAttribute('name', 'twitter:site');
      document.head.appendChild(twitterSite);
    }
    twitterSite.setAttribute('content', "@dcodestech");
    
    let twitterCreator = document.querySelector('meta[name="twitter:creator"]');
    if (!twitterCreator) {
      twitterCreator = document.createElement('meta');
      twitterCreator.setAttribute('name', 'twitter:creator');
      document.head.appendChild(twitterCreator);
    }
    twitterCreator.setAttribute('content', "@devpadhya");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/about/dev-padhya");
    
    // Geo Tags
    let geoRegion = document.querySelector('meta[name="geo.region"]');
    if (!geoRegion) {
      geoRegion = document.createElement('meta');
      geoRegion.setAttribute('name', 'geo.region');
      document.head.appendChild(geoRegion);
    }
    geoRegion.setAttribute('content', "IN-GJ");
    
    let geoPlacename = document.querySelector('meta[name="geo.placename"]');
    if (!geoPlacename) {
      geoPlacename = document.createElement('meta');
      geoPlacename.setAttribute('name', 'geo.placename');
      document.head.appendChild(geoPlacename);
    }
    geoPlacename.setAttribute('content', "Gujarat");
    
    // Language
    let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', "en");
    
    // ==================== STRUCTURED DATA ====================
    
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
          "name": "About",
          "item": "https://dcodes.com/about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dev Padhya",
          "item": "https://dcodes.com/about/dev-padhya"
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
    
    // Person Structured Data
    const structuredDataPerson = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dev Padhya",
      "givenName": "Dev",
      "familyName": "Padhya",
      "jobTitle": "Founder & Chief Executive Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "Dcodes Technologies",
        "url": "https://dcodes.com"
      },
      "url": "https://dcodes.com/about/dev-padhya",
      "sameAs": [
        "https://www.linkedin.com/in/dev-padhya/",
        "https://twitter.com/devpadhya"
      ],
      "description": "Dev Padhya is the Founder & CEO of Dcodes Technologies, a leading digital transformation company helping businesses grow through innovative technology solutions.",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Second-generation entrepreneur with business and technology expertise"
      },
      "knowsAbout": [
        "Digital Transformation",
        "Enterprise Software",
        "AI Solutions",
        "Business Automation",
        "Web Development",
        "Technology Consulting",
        "SaaS Development",
        "Business Strategy",
        "Leadership"
      ]
    };
    
    let scriptPerson = document.querySelector('#structured-data-person');
    if (!scriptPerson) {
      scriptPerson = document.createElement('script');
      scriptPerson.id = 'structured-data-person';
      scriptPerson.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptPerson);
    }
    scriptPerson.textContent = JSON.stringify(structuredDataPerson);
    
    // Organization Structured Data
    const structuredDataOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dcodes Technologies",
      "url": "https://dcodes.com",
      "logo": "https://dcodes.com/logo.png",
      "description": "Dcodes Technologies is a leading digital transformation company founded by Dev Padhya, providing innovative technology solutions to businesses worldwide.",
      "founder": {
        "@type": "Person",
        "name": "Dev Padhya"
      },
      "sameAs": [
        "https://www.linkedin.com/company/dcodestechnologies",
        "https://twitter.com/dcodestech",
        "https://www.facebook.com/dcodestechnologies",
        "https://www.instagram.com/dcodestechnologies"
      ]
    };
    
    let scriptOrganization = document.querySelector('#structured-data-organization');
    if (!scriptOrganization) {
      scriptOrganization = document.createElement('script');
      scriptOrganization.id = 'structured-data-organization';
      scriptOrganization.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptOrganization);
    }
    scriptOrganization.textContent = JSON.stringify(structuredDataOrganization);
    
  }, []);

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="hero" id="about">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__container">
          <div className="hero__grid">
            <Reveal className="hero__portrait">
              {!imageError ? (
                <Image
                  className="portrait__img"
                  src="/Dev_Padhya.png"
                  alt="Dev Padhya - Founder & CEO of Dcodes Technologies"
                  title="Dev Padhya - Founder & CEO of Dcodes Technologies"
                  width={420}
                  height={560}
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="portrait__fallback" aria-label="Dev Padhya portrait placeholder">
                  <User size={80} className="portrait__fallback-icon" />
                  <span className="portrait__fallback-name">Dev Padhya</span>
                </div>
              )}
            </Reveal>

            <Reveal className="hero__content">
              <p className="hero__eyebrow">Meet Our Founder & CEO</p>
              <h1 className="hero__title">Dev Padhya</h1>
              <p className="hero__subtitle">Founder & Chief Executive Officer</p>
              <h2 className="hero__headline">
                Building Businesses Through Technology. Transforming Ideas Into
                Digital Success Stories.
              </h2>
              <p className="hero__text">
                Technology isn't just about writing code. It's about solving real
                business problems. Every successful business deserves innovative
                technology that helps it grow, scale, and compete globally. That
                belief became the foundation of Dcodes Technologies.
              </p>
              <div className="hero__actions">
                <a
                  className="btn btn--primary"
                  href="https://www.linkedin.com/in/dev-padhya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Dev Padhya on LinkedIn"
                >
                  <Linkedin size={16} /> Connect on LinkedIn
                </a>
                <a className="btn btn--secondary" href="https://calendly.com/developer-dcodestechnologies/30min" aria-label="Schedule a meeting with Dev Padhya">
                  <CalendarDays size={16} /> Schedule a Meeting
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust Bar - Between Hero and Body */}
      
      
      {/* ============================ ABOUT ============================ */}
      <section className="section" id="who">
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-content">
              <p className="section-eyebrow">About Dev Padhya</p>
              <h2 className="section-title">Who is Dev Padhya?</h2>
              <div className="about-text">
                <p>
                  Dev Padhya is the Founder & Chief Executive Officer of Dcodes
                  Technologies, a fast-growing technology company dedicated to
                  helping businesses embrace digital transformation through
                  innovative web solutions, enterprise software, automation, mobile
                  applications, AI-driven technologies, and digital growth
                  strategies.
                </p>
                <p>
                  As a second-generation entrepreneur, Dev's journey into business
                  started long before Dcodes Technologies was established. Growing
                  up in a business-oriented family gave him first-hand exposure to
                  entrepreneurship, customer relationships, operations, and
                  leadership from an early age.
                </p>
                <p>
                  Rather than following traditional paths, he chose to build a
                  technology company focused on delivering measurable business
                  outcomes — not just software.
                </p>
                <p>
                  Today, his mission extends beyond developing websites and
                  applications. He is committed to empowering startups, SMEs,
                  enterprises, and global organizations with scalable digital
                  ecosystems that drive long-term success.
                </p>
              </div>
            </Reveal>

            <Reveal className="about-vision">
              <div className="vision-card">
                <div className="vision-item">
                  <div className="vision-icon">
                    <Eye size={22} />
                  </div>
                  <div>
                    <span className="vision-tag">My Vision</span>
                    <p>
                      To build Dcodes Technologies into one of the world's most
                      trusted digital transformation companies, empowering millions
                      of businesses through innovative technology, intelligent
                      automation, and AI-driven solutions that create lasting
                      impact across industries.
                    </p>
                  </div>
                </div>
                <div className="vision-divider" />
                <div className="vision-item">
                  <div className="vision-icon">
                    <Target size={22} />
                  </div>
                  <div>
                    <span className="vision-tag">My Mission</span>
                    <p>
                      To simplify technology for businesses by delivering
                      world-class digital solutions that solve real problems,
                      improve operational efficiency, accelerate business growth,
                      and create exceptional customer experiences while maintaining
                      innovation, transparency, quality, and long-term
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== VALUES ====================== */}
      <section className="section section--dark" id="values">
        <div className="container">
          <Reveal className="section-header">
            <h2>Leading With Purpose. Building With Passion.</h2>
          </Reveal>

          <div className="values-grid">
            <Reveal className="values-text">
              <p>
                Technology evolves every day.
                <br />Businesses evolve every day.
                <br />Customer expectations evolve every day.
                <br />Therefore, companies cannot rely on outdated systems.
              </p>
              <p>
                As a leader, I believe innovation should never stop. Every project
                at Dcodes Technologies begins with one simple question:
              </p>
              <p className="values-question">
                "How can we create measurable business value?"
              </p>
            </Reveal>

            <Reveal className="values-cards">
              {PRINCIPLES.map(({ icon: Icon, title, copy }) => (
                <div className="value-card" key={title}>
                  <span className="value-icon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================= INDUSTRIES ========================= */}
      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-header section-header--bordered">
            <p className="section-eyebrow">Industries We Empower</p>
          </Reveal>
          <Reveal>
            <div className="industries-grid">
              {INDUSTRIES.map(({ icon: Icon, label }) => (
                <div className="industry-item" key={label}>
                  <span className="industry-icon">
                    <Icon size={26} />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================ EXPERTISE + MILESTONES ================ */}
      <section className="section" id="portfolio">
        <div className="container">
          <div className="expertise-grid">
            <Reveal className="expertise-panel">
              <p className="section-eyebrow">My Areas of Expertise</p>
              <div className="expertise-list">
                {EXPERTISE.map(({ icon: Icon, label }) => (
                  <div className="expertise-item" key={label}>
                    <span className="expertise-icon">
                      <Icon size={16} />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="milestones-panel">
              <p className="section-eyebrow">Journey & Milestones</p>
              <div className="milestones-grid">
                {MILESTONES.map(({ icon: Icon, title }, i) => (
                  <div className="milestone-item" key={title}>
                    {i % 5 !== 0 && <span className="milestone-line" />}
                    <span className="milestone-dot">
                      <Icon size={16} />
                    </span>
                    <p>{title}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== CEO MESSAGE ====================== */}
      <section className="section" id="blog">
        <div className="container">
          <div className="message-grid">
            <Reveal className="message-quote">
              <Quote size={26} className="message-quote-icon" />
              <p>
                I don't build software.
                <br />I build opportunities.
                <br />Every website can create a business.
                <br />Every automation can save thousands of hours.
                <br />Every innovation can transform someone's future.
                <br />That is why I do what I do.
              </p>
            </Reveal>
            <Reveal className="message-content">
              <p className="section-eyebrow">Message From The CEO</p>
              <p>
                Every entrepreneur starts with an idea. Some ideas become businesses.
                Some businesses become brands. My goal has never been simply to
                create another IT company. I want Dcodes Technologies to become a
                trusted technology partner that businesses rely on for innovation,
                growth, and transformation.
              </p>
              <p>
                Every client who chooses Dcodes Technologies places their trust in
                us. That trust inspires us to push boundaries, embrace emerging
                technologies, and deliver solutions that make a measurable
                difference.
              </p>
              <p>
                As technology continues to evolve, our commitment remains the same:
                to build innovative digital experiences that help businesses succeed
                today while preparing them for tomorrow. The journey has only just
                begun, and I invite you to be part of it.
              </p>
              <div className="message-footer">
                <div className="message-signature">
                  Dev Padhya
                  <span>Founder & CEO, Dcodes Technologies</span>
                </div>
                <span className="message-scribble">Dev Padhya</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ====================== NUMBERS + AWARDS ====================== */}
      <section className="section section--dark stats-section" id="stats">
        <div className="container">
          <div className="stats-grid">
            <Reveal className="stats-col">
              <p className="section-eyebrow">Leadership By Numbers</p>
              <div className="stats-list">
                {NUMBERS.map((s) => (
                  <div className="stat-item" key={s.label}>
                    <span className="stat-icon"><Award size={16} /></span>
                    <div>
                      <span className="stat-number">{s.num}</span>
                      <span className="stat-label">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="stats-col">
              <p className="section-eyebrow">Awards & Recognitions</p>
              <div className="awards-list">
                {AWARDS.map(({ icon: Icon, title, sub }) => (
                  <div className="award-item" key={title}>
                    <span className="award-icon">
                      <Icon size={26} />
                    </span>
                    <span className="award-label">
                      {title}
                      <em>{sub}</em>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="cta-section" id="cta">
        <div className="cta-glow" aria-hidden="true" />
        <div className="container">
          <Reveal className="cta-content">
            <div>
              <h2>Let's Build Something Extraordinary Together</h2>
              <p>
                Whether you're launching a startup, scaling an enterprise, or
                transforming an existing business, let's create technology that
                drives measurable growth.
              </p>
            </div>
            <div className="cta-actions">
              <a 
                className="btn btn--primary btn--lg" 
                href="https://calendly.com/developer-dcodestechnologies/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule a consultation with Dev Padhya"
              >
                Schedule a Consultation <ArrowUpRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section> 

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap");

        /* Page content styles - Dark theme with light text */
        .hero,
        .section,
        .cta-section,
        .trust-bar-wrapper {
          font-family: "Inter", ui-sans-serif, sans-serif;
          color: #f5f6f8;
          background: #080d19;
        }

        .hero h1, .hero h2, .hero h3, .hero h4,
        .section h1, .section h2, .section h3, .section h4,
        .cta-section h1, .cta-section h2, .cta-section h3, .cta-section h4 {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          color: #f5f6f8;
        }

        .hero p, .section p, .cta-section p {
          color: #97a2bd;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7fb0ff;
          margin-bottom: 8px;
        }

        .section-title {
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          color: #f5f6f8;
        }

        .section-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 48px;
        }

        .section-header h2 {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #f5f6f8;
        }

        .section-header--bordered {
          position: relative;
          padding-top: 20px;
        }

        .section-header--bordered::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: rgba(245, 246, 248, 0.1);
        }

        .section {
          padding: 80px 0;
          background: #080d19;
        }

        .section--dark {
          background: #0f1a30;
        }

        .stats-section {
          padding: 32px 0 32px;
        }

        #blog.section {
          padding-bottom: 40px;
        }

        .cta-section {
          margin: 24px 24px 60px;
          padding: 72px 40px;
          background: #080d19;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(245, 246, 248, 0.1);
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 999px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79, 141, 255, 0.3);
        }

        .btn--primary {
          background: #4f8dff;
          color: #fff;
        }

        .btn--primary:hover {
          background: #3a7ae8;
        }

        .btn--secondary {
          background: transparent;
          border-color: rgba(245, 246, 248, 0.1);
          color: #f5f6f8;
        }

        .btn--secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(245, 246, 248, 0.2);
        }

        .btn--lg {
          padding: 16px 32px;
          font-size: 15px;
        }

        /* ============ HERO ============ */
        .hero {
          position: relative;
          padding: 80px 0 60px;
          background: radial-gradient(ellipse at 80% 20%, #0a1628 0%, #050a14 60%);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero__glow {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 500px;
          height: 500px;
          background: #4f8dff;
          opacity: 0.06;
          filter: blur(150px);
          pointer-events: none;
        }

        .hero__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero__grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .hero__portrait {
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .portrait__img {
          display: block;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: top center;
          border-radius: 16px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .portrait__fallback {
          width: 100%;
          max-width: 420px;
          aspect-ratio: 3/4;
          border-radius: 16px;
          background: linear-gradient(135deg, #0f1a30, #1a2a4a);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(245, 246, 248, 0.1);
        }

        .portrait__fallback-icon {
          color: #4f8dff;
          opacity: 0.4;
        }

        .portrait__fallback-name {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #f5f6f8;
          letter-spacing: 0.05em;
        }

        .hero__content {
          padding: 20px 0;
        }

        .hero__eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7fb0ff;
          margin-bottom: 8px;
        }

        .hero__title {
          font-size: clamp(42px, 5vw, 58px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.05;
          margin-bottom: 4px;
          color: #f5f6f8;
        }

        .hero__subtitle {
          font-size: 16px;
          font-weight: 500;
          color: #7fb0ff;
          margin-bottom: 16px;
        }

        .hero__headline {
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 16px;
          max-width: 38ch;
          color: #f5f6f8;
        }

        .hero__text {
          color: #97a2bd;
          font-size: 15px;
          margin-bottom: 24px;
          max-width: 44ch;
          line-height: 1.7;
        }

        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ============ TRUST BAR ============ */
        .trust-bar-wrapper {
          padding: 20px 0 40px 0;
          background: #080d19;
        }

        .trust-bar {
          padding: 22px 40px;
          background: #111a30;
          border: 1px solid rgba(245, 246, 248, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .trust-bar__label {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .trust-bar__label span {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7fb0ff;
        }

        .trust-bar__label strong {
          font-size: 15px;
          font-weight: 700;
          color: #f5f6f8;
        }

        .trust-bar__brands {
          display: flex;
          align-items: center;
          gap: 36px;
          flex-wrap: wrap;
          flex: 1;
        }

        .trust-bar__brand {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #97a2bd;
          letter-spacing: 0.02em;
        }

        .trust-bar__more {
          font-size: 13px;
          font-weight: 600;
          color: #7fb0ff;
          margin-left: auto;
        }

        /* ============ ABOUT ============ */
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 56px;
          align-items: start;
        }

        .about-text p {
          color: #97a2bd;
          font-size: 15px;
          margin-bottom: 16px;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        .vision-card {
          background: #111a30;
          border: 1px solid rgba(245, 246, 248, 0.1);
          border-radius: 16px;
          padding: 32px;
        }

        .vision-item {
          display: flex;
          gap: 16px;
        }

        .vision-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(79, 141, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7fb0ff;
        }

        .vision-tag {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7fb0ff;
          margin-bottom: 6px;
        }

        .vision-item p {
          font-size: 14px;
          color: #97a2bd;
          margin: 0;
        }

        .vision-divider {
          height: 1px;
          background: rgba(245, 246, 248, 0.1);
          margin: 24px 0;
        }

        /* ============ VALUES ============ */
        .values-grid {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 48px;
          align-items: start;
        }

        .values-text p {
          color: #97a2bd;
          font-size: 15px;
          margin-bottom: 16px;
        }

        .values-question {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #4f8dff;
        }

        .values-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .value-card {
          display: flex;
          gap: 12px;
          padding: 18px;
          background: #111a30;
          border: 1px solid rgba(245, 246, 248, 0.1);
          border-radius: 10px;
        }

        .value-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(79, 141, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7fb0ff;
        }

        .value-card h3 {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 2px;
          color: #f5f6f8;
        }

        .value-card p {
          font-size: 12px;
          color: #97a2bd;
          margin: 0;
        }

        /* ============ INDUSTRIES ============ */
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 32px 16px;
          text-align: center;
        }

        .industry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #97a2bd;
        }

        .industry-icon {
          color: #7fb0ff;
        }

        /* ============ EXPERTISE ============ */
        .expertise-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid rgba(245, 246, 248, 0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        .expertise-panel,
        .milestones-panel {
          padding: 36px;
          background: #111a30;
        }

        .expertise-panel {
          border-right: 1px solid rgba(245, 246, 248, 0.1);
        }

        .expertise-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 16px;
        }

        .expertise-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: #080d19;
          border: 1px solid rgba(245, 246, 248, 0.1);
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 500;
          color: #f5f6f8;
        }

        .expertise-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: #4f8dff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px 4px;
          margin-top: 16px;
        }

        .milestone-item {
          position: relative;
          text-align: center;
        }

        .milestone-line {
          position: absolute;
          top: 20px;
          right: 50%;
          width: 100%;
          height: 1px;
          background: rgba(245, 246, 248, 0.1);
          z-index: 0;
        }

        .milestone-dot {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #080d19;
          border: 2px solid #4f8dff;
          color: #7fb0ff;
        }

        .milestone-item p {
          margin-top: 8px;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          color: #f5f6f8;
        }

        /* ============ MESSAGE ============ */
        .message-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 0;
          border: 1px solid rgba(245, 246, 248, 0.1);
          border-radius: 16px;
          overflow: hidden;
        }

        .message-quote {
          padding: 40px;
          background: #111a30;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .message-quote-icon {
          color: #7fb0ff;
          margin-bottom: 16px;
        }

        .message-quote p {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.8;
          margin: 0;
          color: #f5f6f8;
        }

        .message-content {
          padding: 40px;
          background: #080d19;
        }

        .message-content p {
          font-size: 14.5px;
          color: #97a2bd;
          margin-bottom: 16px;
        }

        .message-content p:last-of-type {
          margin-bottom: 0;
        }

        .message-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 24px;
        }

        .message-signature {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #f5f6f8;
        }

        .message-signature span {
          display: block;
          font-family: "Inter", ui-sans-serif, sans-serif;
          font-weight: 400;
          font-size: 12.5px;
          color: #97a2bd;
          margin-top: 2px;
        }

        .message-scribble {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          font-style: italic;
          font-size: 22px;
          color: #97a2bd;
          opacity: 0.6;
        }

        /* ============ STATS ============ */
        .stats-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .stats-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 24px;
          margin-top: 16px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stat-icon {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(79, 141, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7fb0ff;
        }

        .stat-item div {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: "Plus Jakarta Sans", ui-sans-serif, sans-serif;
          font-size: 24px;
          font-weight: 800;
          line-height: 1.1;
          color: #f5f6f8;
        }

        .stat-label {
          font-size: 11px;
          color: #97a2bd;
        }

        .awards-list {
          display: flex;
          gap: 32px;
          margin-top: 16px;
        }

        .award-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
        }

        .award-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #111a30;
          border: 1px solid rgba(245, 246, 248, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7fb0ff;
        }

        .award-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #f5f6f8;
        }

        .award-label em {
          display: block;
          font-style: normal;
          font-weight: 500;
          color: #97a2bd;
          text-transform: none;
          letter-spacing: 0;
          font-size: 11px;
        }

        /* ============ CTA ============ */
        .cta-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 300px;
          background: #4f8dff;
          opacity: 0.15;
          filter: blur(120px);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .cta-content h2 {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          max-width: 20ch;
          color: #f5f6f8;
        }

        .cta-content p {
          color: #97a2bd;
          font-size: 15px;
          max-width: 44ch;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-shrink: 0;
          min-width: 240px;
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 1024px) {
          .hero {
            padding: 60px 0 40px;
            min-height: auto;
          }
          
          .hero__grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero__portrait {
            max-width: 320px;
            margin: 0 auto;
          }

          .portrait__fallback {
            max-width: 320px;
          }

          .hero__content {
            padding: 10px 0;
          }

          .hero__headline,
          .hero__text {
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
          }

          .hero__actions {
            justify-content: center;
          }

          .trust-bar {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 24px;
          }

          .trust-bar__brands {
            justify-content: center;
            width: 100%;
          }

          .trust-bar__more {
            margin-left: 0;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }

          .expertise-panel {
            border-right: none;
            border-bottom: 1px solid rgba(245, 246, 248, 0.1);
          }

          .message-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stats-list {
            grid-template-columns: repeat(3, 1fr);
          }

          .industries-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .cta-content {
            flex-direction: column;
            text-align: center;
          }

          .cta-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .cta-actions {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 40px 0 30px;
          }
          
          .hero__title {
            font-size: 32px;
          }
          
          .hero__grid {
            gap: 30px;
          }
          
          .hero__portrait {
            max-width: 280px;
          }

          .portrait__fallback {
            max-width: 280px;
          }

          .values-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .expertise-list {
            grid-template-columns: 1fr 1fr;
          }

          .milestones-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .awards-list {
            flex-wrap: wrap;
          }

          .cta-section {
            margin: 24px 16px 40px;
            padding: 48px 20px;
          }

          .trust-bar-wrapper {
            padding: 20px 0 30px 0;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 30px 0 20px;
          }
          
          .hero__container {
            padding: 0 16px;
          }
          
          .hero__portrait {
            max-width: 240px;
          }

          .portrait__fallback {
            max-width: 240px;
          }

          .portrait__fallback-name {
            font-size: 18px;
          }

          .portrait__fallback-icon {
            width: 60px;
            height: 60px;
          }
          
          .hero__title {
            font-size: 28px;
          }
          
          .hero__headline {
            font-size: 16px;
          }
          
          .hero__text {
            font-size: 14px;
          }

          .values-cards {
            grid-template-columns: 1fr;
          }

          .expertise-list {
            grid-template-columns: 1fr;
          }

          .milestones-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .industries-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stats-list {
            grid-template-columns: repeat(2, 1fr);
          }

          .section {
            padding: 60px 0;
          }

          .trust-bar__brands {
            gap: 16px;
            justify-content: flex-start;
          }

          .trust-bar__brand {
            font-size: 13px;
          }

          .trust-bar-wrapper {
            padding: 15px 0 20px 0;
          }
        }
      `}</style>
    </>
  );
}