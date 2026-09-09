"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import DarkVeil from "@/components/ReactBit/DarkVeil";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ChevronDown, Target, Eye, Users, ExternalLink, Globe, ArrowRight, HelpCircle, Plus, Minus } from 'lucide-react';

const AboutUsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Animated Stat Component
  function AnimatedStat({ value }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }, [value]);

    return <div className="text-3xl font-extralight mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">{count}+</div>;
  }

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "About Us – IT Services Company | Dcodes Technologies";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Learn about Dcodes Technologies — a global IT services company offering web, mobile, and software development, digital marketing for businesses worldwide.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "IT services company, web development, mobile apps, ERP systems, digital marketing, SEO, software development, website development, app development");
    
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
    
    // Update or create language
    let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', "en");
    
    // Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', "About Dcodes Technologies | IT Solutions Company");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Leading IT solutions provider specializing in web development, mobile apps, ERP systems, and digital marketing since 2019.");
    
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
    ogUrl.setAttribute('content', "https://dcodes.com/about");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/og-image-about-us.jpg");
    
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
    twitterTitle.setAttribute('content', "About Dcodes Technologies | IT Solutions");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Professional IT solutions company offering web development, mobile apps, ERP systems, and digital marketing services.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-about.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/about");
    
    // Structured Data for Organization
    const structuredDataOrg = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dcodes Technologies",
      "description": "Professional IT solutions company specializing in web development, mobile apps, ERP systems, SEO, and digital marketing services.",
      "url": "https://dcodes.com",
      "logo": "https://dcodes.com/logo.png",
      "foundingDate": "2019",
      "founder": {
        "@type": "Person",
        "name": "Dev Padhya"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+91-6353-653-977",
        "email": "info@dcodestech.com"
      },
      "sameAs": [
        "https://linkedin.com/company/dcodes",
        "https://twitter.com/dcodes"
      ]
    };
    
    let scriptOrg = document.querySelector('#structured-data-org');
    if (!scriptOrg) {
      scriptOrg = document.createElement('script');
      scriptOrg.id = 'structured-data-org';
      scriptOrg.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptOrg);
    }
    scriptOrg.textContent = JSON.stringify(structuredDataOrg);
    
    // Structured Data for AboutPage
    const structuredDataAbout = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Dcodes Technologies",
      "description": "Learn about our mission, vision, services, and team at Dcodes Technologies.",
      "publisher": {
        "@type": "Organization",
        "name": "Dcodes Technologies"
      }
    };
    
    let scriptAbout = document.querySelector('#structured-data-about');
    if (!scriptAbout) {
      scriptAbout = document.createElement('script');
      scriptAbout.id = 'structured-data-about';
      scriptAbout.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptAbout);
    }
    scriptAbout.textContent = JSON.stringify(structuredDataAbout);
    
    // Geo tags
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
    
  }, []);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // FAQ Data
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
      a: "Dcodes Technologies is headquartered in Gujarat, India. We serve clients globally with a strong presence across multiple countries and continents."
    },
    {
      q: "How long has Dcodes Technologies been in business?",
      a: "Dcodes Technologies was founded in early 2019. Since then, we have successfully delivered over 500 projects for clients ranging from startups to enterprise-level organizations."
    },
    {
      q: "What technologies do you specialize in?",
      a: "We specialize in modern technologies including React & Next.js, Laravel & PHP, WordPress, MERN Stack, Flutter, React Native, and custom software development. Our team stays up-to-date with the latest tech trends to deliver cutting-edge solutions."
    },
    {
      q: "Do you offer custom software development?",
      a: "Yes, we specialize in custom software and Web ERP solutions tailored to specific business requirements. We work closely with clients to understand their needs and deliver scalable, secure, and high-performance solutions."
    },
    {
      q: "What is your project delivery process?",
      a: "Our process includes: 1) Requirement gathering and analysis, 2) Planning and strategy, 3) Design and prototyping, 4) Development and testing, 5) Deployment and launch, and 6) Ongoing maintenance and support. We follow agile methodologies for transparency and flexibility."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Absolutely! We provide comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements. We offer various maintenance plans to suit different business needs."
    },
    {
      q: "How can I contact Dcodes Technologies?",
      a: "You can reach us via email at info@dcodestech.com or by phone at +91 6353 653 977. You can also fill out the contact form on our website, and our team will get back to you within 24 hours."
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, we work with clients worldwide. Our team has experience delivering projects for clients across multiple continents and time zones. We have a flexible approach to accommodate different cultural and business requirements."
    },
    {
      q: "What makes Dcodes Technologies different from other IT companies?",
      a: "What sets us apart is our client-first approach, innovative thinking, and commitment to quality. We don't just build solutions — we create digital ecosystems that connect businesses to customers, data to strategy, and vision to execution. Our team combines creativity, technology, and strategy to deliver measurable business impact."
    },
    {
      q: "Do you provide digital marketing services?",
      a: "Yes, we offer comprehensive digital marketing services including SEO Strategy, Social Media Marketing, Content Marketing, Performance Analytics, and complete online presence management to help businesses grow their digital footprint."
    },
  ];

  // Data from both components
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
    { emoji: "🌍", value: "Global", label: "Serving Clients Worldwide", description: "Trusted by businesses across multiple countries" },
    { emoji: "💡", value: "500", label: "Projects Delivered", description: "From startups to enterprise solutions" },
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

  const values = [
    { letter: "I", title: "Innovation", description: "We continuously explore new technologies and creative approaches to deliver cutting-edge solutions." },
    { letter: "I", title: "Integrity", description: "We believe in honest communication and ethical practices at every stage." },
    { letter: "C", title: "Customer-Centricity", description: "Every project begins with your goals — success is built around your vision." },
    { letter: "Q", title: "Quality & Security", description: "We ensure every product meets the highest standards of performance, scalability, and data protection." },
    { letter: "T", title: "Teamwork", description: "Our skilled professionals collaborate seamlessly to turn complex challenges into powerful digital outcomes." },
    { letter: "R", title: "Responsibility", description: "We take ownership of our actions and strive to deliver reliable solutions that make a positive impact." }
  ];

  const teamMembers = [
    {
      name: "Dev Padhya",
      role: "Founder & CEO",
      description: "Founded in early 2019, we are driven by a passion for innovation and digital transformation. With a deep understanding of the fast-evolving digital landscape, we empower organizations to thrive in the modern era.",
      social: { linkedin: "https://www.linkedin.com/in/dev-padhya/" },
      imgurl: "/dev.png"
    },
    {
      name: "Khushali Parikh",
      role: "Full Stack Developer",
      description: "Full stack developer specializing in Marn, database management, and server-side programming.",
      social: { linkedin: "", twitter: "" },
      imgurl: "/k.jpg"
    },
    {
      name: "Kunj Thakar",
      role: "Digital Marketer",
      description: "Creative digital marketer with skills in branding, social media campaigns, and content strategy.",
      social: { linkedin: "https://www.linkedin.com/in/kunj-thakar-290756305/" },
      imgurl: "/ku.jpg"
    },
    {
      name: "Milan Aaradeshna",
      role: "WordPress Developer",
      description: "Expert in WordPress development, including custom themes, plugin development, and website optimization.",
      social: { linkedin: "https://www.linkedin.com/in/milan-aaradeshna-43157458/" },
      imgurl: "/m.png"
    },
    {
      name: "Jaydev Patel",
      role: "Backend Developer",
      description: "Expert in Backend development, including custom themes, plugin development, and website optimization.",
      social: { linkedin: "https://www.linkedin.com/in/milan-aaradeshna-43157458/" },
      imgurl: "/.png"
    }
  ];

  const images = [
    "./logo1.jpg",
    "./logo2.png",
    "./logo3.png",
    "./logo4.png",
    "./logo5.jpg",
    "./logo7.jpg",
    "./logo8.png",
    "./logo9.png",
    "./logo10.png",
    "./logo11.jpg",
    "./logo12.jpg",
    "./logo13.png",
    "./logo14.png",
    "./logo15.jpg",
    "./logo16.png",
    "./logo12.jpg",
    "./logo7.jpg",
    "./logo8.png",
    "./logo12.jpg",
    "./logo17.png",
    "./logo18.png",
    "./logo13.png",
    "./logo19.png",
    "./logo20.png",
    "./logo9.png",
    "./logo10.png",
    "./logo11.jpg",
    "./logo12.jpg",
    "./logo13.png",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Animated DarkVeil Background */}
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
        <DarkVeil />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Hero Section */}
        <div className="relative mb-32 mt-20 text-center">
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8 bg-black/30 backdrop-blur-sm">
              <span className="text-sm font-normal tracking-wider uppercase">Professional IT Solutions</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
              Dcodes
              <span className="block font-extralight italic">Technologies</span>
            </h1>

            <p className="text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
              At Dcodes Technologies, we build powerful digital solutions that help businesses scale in today's fast-moving world.
            </p>
          </div>

          <div className="flex flex-col mt-8 gap-4 items-center sm:flex-row sm:justify-center sm:gap-4">
            <button
              className='p-3 w-45 md:w-58 lg:w-70 bg-gradient-to-r from-purple-800 to-blue-700 text-white font-bold rounded-full border-2 border-transparent hover:border-white transition-all duration-300'
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Dcodes Technologies Corporate Profile.pdf';
                link.download = 'portfolio.pdf';
                link.click();
              }}
              aria-label="Download Dcodes Technologies portfolio PDF"
            >
              Download Portfolio
            </button>

            <button
              className='p-3 w-45 md:w-58 lg:w-70 bg-transparent text-white font-bold rounded-full border-2 border-gray-400 hover:border-white transition-all duration-300'
              onClick={() => window.open('/Dcodes Technologies Corporate Profile.pdf', '_blank')}
              aria-label="View Dcodes Technologies portfolio in new tab"
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full flex justify-center">
          <div className="mb-26 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl lg:max-w-[90rem] mx-auto px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group cursor-default flex justify-center"
              >
                <div className="relative w-full lg:w-[230px] xl:w-[250px] p-8 border border-white/10 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full">
                  <div className="text-2xl mb-4" aria-hidden="true">{stat.emoji}</div>
                  <div className="text-xl font-normal mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 font-normal leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive About Sections */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">About Our Company</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="space-y-8">
            {interactiveSections.map((section, index) => (
              <div key={section.id} className="group">
                <div className="relative border border-white/10 rounded-xl bg-gray-900/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-hidden">
                  <div className="p-8 flex flex-col md:flex-row gap-8 items-start lg:items-center">
                    {index % 2 === 0 ? (
                      <>
                        {/* Image - Left */}
                        <div className="flex-shrink-0 w-full md:w-64 lg:w-80 order-2 md:order-1">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Text Content - Right */}
                        <div className="flex-1 order-1 md:order-2">
                          <div className="flex items-center gap-6 mb-6">
                            <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                              {section.icon}
                            </div>
                            <h3 className="text-2xl font-normal group-hover:text-white transition-colors duration-300">
                              {section.title}
                            </h3>
                          </div>

                          <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mb-6" />
                          <ul className="space-y-3">
                            {section.content.map((point, idx) => (
                              <li key={idx} className="text-gray-300 leading-relaxed font-normal text-lg flex items-start">
                                <span className="text-blue-400 mr-3 mt-1.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Content - Left */}
                        <div className="flex-1 order-1">
                          <div className="flex items-center gap-6 mb-6">
                            <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                              {section.icon}
                            </div>
                            <h3 className="text-2xl font-normal group-hover:text-white transition-colors duration-300">
                              {section.title}
                            </h3>
                          </div>

                          <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mb-6" />
                          <ul className="space-y-3">
                            {section.content.map((point, idx) => (
                              <li key={idx} className="text-gray-300 leading-relaxed font-normal text-lg flex items-start">
                                <span className="text-blue-400 mr-3 mt-1.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Image - Right */}
                        <div className="flex-shrink-0 w-full md:w-64 lg:w-80 order-2">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do Section */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">What We Do?</h2>
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
              <div key={index} className="group cursor-pointer">
                <div className="border border-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:border-white/30 hover:bg-white/5">
                  <div className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-full mb-6 group-hover:border-white/40 transition-colors">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-normal tracking-wide mb-4">{service.title}</h3>
                  <p className="text-white/70 font-normal leading-relaxed mb-4">{service.description}</p>

                  {service.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {service.industries && (
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span key={industryIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
                          {industry}
                        </span>
                      ))}
                    </div>
                  )}

                  {service.platforms && (
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CEO Section - Link to /ceo page */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Leadership Vision</h2>
            <div className="w-16 h-px bg-white/20" />
          </div>

          <Link href="/ceo">
            <div className="relative p-12 border border-white/10 rounded-2xl bg-gray-900/20 backdrop-blur-sm cursor-pointer hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-800 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                    <img
                      src="/dev.png"
                      alt="Dev Padhya - Founder & CEO of Dcodes Technologies"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-8">
                    <h3 className="text-3xl font-normal mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">Dev Padhya</h3>
                    <p className="text-blue-400 font-medium text-lg tracking-wide">
                      Founder & CEO
                    </p>
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://www.linkedin.com/in/dev-padhya/", "_blank");
                      }}
                      className="group inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg bg-gray-800/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                      aria-label="Connect with Dev Padhya on LinkedIn"
                    >
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        Connect on LinkedIn
                      </span>
                      <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://bni-ahmedabad.in/ahmedabad-west-odysseus/en-IN/memberdetails?encryptedMemberId=gpyc%2FH45myen9LMLQJyDmg%3D%3D&cmsv3=true&name=Dev+Padhya/", "_blank");
                      }}
                      className="group inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg bg-gray-800/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                      aria-label="Connect with Dev Padhya on BNI"
                    >
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        Connect on BNI
                      </span>
                      <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                    </button>

                    <span className="inline-flex items-center gap-3 px-6 py-3 border border-blue-400/30 rounded-lg bg-blue-400/10 transition-all duration-300">
                      <span className="font-medium text-blue-400">
                        View Full Profile →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Industry we serve in */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Delivering the Right Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We excel in delivering the best-suited solution...
              </p>
            </div>

            {/* FIXED GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[32%_68%] gap-10 items-start">
              {/* LEFT - INDUSTRIES */}
              <div className="min-w-[280px]">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Industries We Serve
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
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
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                    >
                      <span className="text-xl mr-3" aria-hidden="true">{industry.icon}</span>
                      <span className="text-gray-200">{industry.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT - MARQUEE */}
              <div className="overflow-hidden rounded-2xl bg-gray-900/20 p-3 ring-1 ring-neutral-700/20">
                <ThreeDMarquee images={images} />
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="w-full py-16">
          <h2 className="text-4xl font-bold text-center mb-14">OUR STORY</h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            <div className="group relative rounded-xl overflow-hidden shadow-xl border border-gray-400 transition-all duration-500 hover:shadow-blue-400/40 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 p-[2px]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/story (3).jpeg"
                  alt="Our Journey Begins at Dcodes Technologies"
                  width={250}
                  height={350}
                  className="object-cover h-64 w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <h3 className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-md">
                Our Journey Begins
              </h3>
            </div>
            
            {/* Card 1 */}
            <div className="group relative rounded-xl overflow-hidden shadow-xl border border-gray-400 transition-all duration-500 hover:shadow-blue-400/40 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 p-[2px]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/story (1).jpeg"
                  alt="The Team & Our Hub at Dcodes Technologies"
                  width={250}
                  height={350}
                  className="object-cover h-64 w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <h3 className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-md">
                The Team & Our Hub
              </h3>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-xl overflow-hidden shadow-xl border border-gray-400 transition-all duration-500 hover:shadow-blue-400/40 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 p-[2px]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/story (2).jpeg"
                  alt="Ideation & Collaboration at Dcodes Technologies"
                  width={250}
                  height={350}
                  className="object-cover h-64 w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <h3 className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-md">
                Ideation & Collaboration
              </h3>
            </div>
          </div>
        </section>

        {/* ============ FAQ SECTION - NEWLY ADDED ============ */}
        <section className="w-full py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <HelpCircle className="w-4 h-4 text-blue-400" />
                <span className="text-xs uppercase tracking-widest text-white/60">FAQ</span>
              </div>
              <h2 className="text-4xl font-normal mb-4 tracking-wide">
                Frequently Asked Questions
              </h2>
              <p className="text-white/50 text-lg">
                Everything you need to know about Dcodes Technologies and our services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="bg-gray-900/40 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-white text-base md:text-lg">
                        {faq.q}
                      </span>
                      <span
                        className={`text-blue-400 text-2xl leading-none transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 pb-5 text-white/70 text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-12 text-center">
              <p className="text-white/50 mb-6">
                Still have questions? We're here to help!
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal mb-6 tracking-wide">Thank You!</h2>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;