"use client";
import GradientBlinds from '@/components/ReactBit/GradientBlinds';
import Orb from '@/components/ReactBit/Orb';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// SEO Metadata moved outside component for better performance
const seoMetadata = {
  title: "ERP System Development Services  | Dcodes Technologies",
  description: "Professional ERP system development services for custom, scalable, and cloud-ready enterprise solutions. Automate business processes with our ERP experts.",
  keywords: "ERP system development services, ERP software development services, ERP system solutions, enterprise resource planning software, custom ERP development company, cloud ERP system, ERP implementation services, SAP implementation, Oracle ERP, Microsoft Dynamics 365, ERP consultants India",
  ogTitle: "Premium ERP Solutions | Enterprise Resource Planning | Dcodes",
  ogDescription: "End-to-end enterprise resource planning solutions that streamline operations, enhance productivity, and drive global business excellence. Trusted by manufacturing, retail, finance, and healthcare enterprises.",
  twitterTitle: "Premium ERP Solutions | Enterprise Resource Planning",
  twitterDescription: "Expert ERP solutions for manufacturing, retail, finance, healthcare & logistics industries. 99.9% system uptime guaranteed.",
   canonicalUrl: "https://www.dcodestech.com/erp-solutions",
  ogImage: "https://www.dcodestech.com/og-image-erp-solutions.jpg",
  twitterImage: "https://www.dcodestech.com/twitter-card-erp.jpg"
};

export default function PremiumERPSolutions() {
  const [activeService, setActiveService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // SEO Meta Tags - Optimized for high-CPC ERP keywords
  useEffect(() => {
    // Update document title with primary keyword
    document.title = seoMetadata.title;
    
    // Update meta description with rich snippet potential
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoMetadata.description);
    
    // Update keywords with high-value terms
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoMetadata.keywords);
    
    // Viewport for mobile optimization
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', "width=device-width, initial-scale=1.0, viewport-fit=cover");
    
    // Robots meta for better indexing
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
    metaAuthor.setAttribute('content', "Dcodes Technologies");
    
    // Theme color for mobile browsers
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', "#000000");
    
    // Open Graph Tags for social sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', seoMetadata.ogTitle);
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', seoMetadata.ogDescription);
    
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
    ogUrl.setAttribute('content', seoMetadata.canonicalUrl);
    
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
    ogImage.setAttribute('content', seoMetadata.ogImage);
    
    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute('content', "ERP System Development Services - Enterprise Resource Planning Solutions");
    
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
    twitterTitle.setAttribute('content', seoMetadata.twitterTitle);
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', seoMetadata.twitterDescription);
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', seoMetadata.twitterImage);
    
    // Canonical URL to avoid duplicate content
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoMetadata.canonicalUrl);
    
    // Geo tags for local SEO
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
    geoPlacename.setAttribute('content', "Ahmedabad, Gujarat");
    
    let geoPosition = document.querySelector('meta[name="geo.position"]');
    if (!geoPosition) {
      geoPosition = document.createElement('meta');
      geoPosition.setAttribute('name', 'geo.position');
      document.head.appendChild(geoPosition);
    }
    geoPosition.setAttribute('content', "23.0225;72.5714");
    
    // Language
    let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', "en-US");
    
    // Structured Data for Organization
    const structuredDataOrg = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dcodes Technologies",
      "url": "https://dcodes.com",
      "logo": "https://dcodes.com/logo.png",
      "description": "Professional ERP system development services for custom, scalable, and cloud-ready enterprise solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@dcodes.com"
      },
      "sameAs": [
        "https://linkedin.com/company/dcodes",
        "https://twitter.com/dcodes",
        "https://github.com/dcodes"
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
    
    // Structured Data for Service with enhanced properties
    const structuredDataService = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ERP System Development Services",
      "description": "Comprehensive Enterprise Resource Planning solutions including custom development, implementation, and optimization for manufacturing, retail, finance, healthcare, and logistics industries.",
      "provider": {
        "@type": "Organization",
        "name": "Dcodes Technologies",
        "url": "https://dcodes.com",
        "logo": "https://dcodes.com/logo.png"
      },
      "serviceType": ["ERP Development", "ERP Implementation", "System Integration", "ERP Optimization", "Cloud ERP Migration"],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ERP Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom ERP Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ERP Implementation"
            }
          }
        ]
      }
    };
    
    let scriptService = document.querySelector('#structured-data-service');
    if (!scriptService) {
      scriptService = document.createElement('script');
      scriptService.id = 'structured-data-service';
      scriptService.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptService);
    }
    scriptService.textContent = JSON.stringify(structuredDataService);
    
    // Enhanced Structured Data for FAQPage with more questions
    const structuredDataFAQ = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does ERP implementation typically take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on complexity, implementation spans 3–9 months with phased delivery and data migration support. Small to medium businesses typically complete within 3-5 months, while large enterprises may take 6-9 months."
          }
        },
        {
          "@type": "Question",
          "name": "Which ERP system is best for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our consultants analyze your processes and recommend the right ERP - SAP, Dynamics 365, Oracle, or a custom Dcodes-built platform. Manufacturing businesses often prefer SAP, while retail and distribution companies excel with Dynamics 365."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure data security during migration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We follow ISO-certified processes, multi-layer encryption, and real-time data validation throughout migration. Our security framework includes GDPR compliance, SOC2 standards, and regular security audits."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of custom ERP development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom ERP development costs typically range from $50,000 to $500,000 depending on modules, users, and complexity. Contact us for a detailed quote based on your specific requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing ERP support and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer 24/7 global support and maintenance teams with 99.9% uptime guarantee. Our support includes regular updates, security patches, performance optimization, and user training."
          }
        }
      ]
    };
    
    let scriptFAQ = document.querySelector('#structured-data-faq');
    if (!scriptFAQ) {
      scriptFAQ = document.createElement('script');
      scriptFAQ.id = 'structured-data-faq';
      scriptFAQ.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptFAQ);
    }
    scriptFAQ.textContent = JSON.stringify(structuredDataFAQ);
    
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
          "name": "ERP Solutions",
          "item": "https://dcodes.com/erp-solutions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ERP System Development Services",
          "item": "https://dcodes.com/erp-solutions"
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
    
    // Local Business Schema for better local SEO
    const structuredDataLocalBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dcodes Technologies",
      "description": "ERP system development company offering custom enterprise resource planning solutions",
      "url": "https://dcodes.com",
      "logo": "https://dcodes.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-18:00"
    };
    
    let scriptLocal = document.querySelector('#structured-data-local');
    if (!scriptLocal) {
      scriptLocal = document.createElement('script');
      scriptLocal.id = 'structured-data-local';
      scriptLocal.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptLocal);
    }
    scriptLocal.textContent = JSON.stringify(structuredDataLocalBusiness);
    
  }, []);

  const services = [
    {
      id: 1,
      title: "Custom ERP Development",
      description: "Tailor-made ERP applications aligned with your unique business model — designed to scale with your growth and digital ambitions.",
      number: "01"
    },
    {
      id: 2,
      title: "ERP Implementation",
      description: "Seamless deployment of top-tier ERP platforms such as SAP, Oracle, and Microsoft Dynamics with minimal business disruption.",
      number: "02"
    },
    {
      id: 3,
      title: "System Integration",
      description: "Unify your ERP with CRM, HRMS, SCM, and financial tools to ensure real-time data synchronization across all departments.",
      number: "03"
    },
    {
      id: 4,
      title: "ERP Optimization",
      description: "Enhance performance and operational efficiency through continuous monitoring, updates, and data-driven process improvements.",
      number: "04"
    }
  ];

  const capabilities = [
    "AI-Driven Predictive Analytics",
    "SAP & Oracle Implementations",
    "Microsoft Dynamics 365 Solutions",
    "Cloud-Based ERP Systems (AWS, Azure)",
    "Legacy System Modernization",
    "Continuous Support & Maintenance"
  ];

  const philosophy = [
    { 
      principle: "Integration", 
      description: "Unified business workflows for seamless data flow",
      icon: "🔄"
    },
    { 
      principle: "Scalability", 
      description: "Flexible architecture built for evolving enterprise needs",
      icon: "📈"
    },
    { 
      principle: "Efficiency", 
      description: "Optimized processes that reduce manual effort and cost",
      icon: "⚡"
    },
    { 
      principle: "Analytics", 
      description: "Data-driven decision making through actionable insights",
      icon: "📊"
    },
    { 
      principle: "Security", 
      description: "End-to-end compliance and enterprise-grade data protection",
      icon: "🔒"
    }
  ];

  const whyChooseItems = [
    "Proven expertise across industries — Manufacturing, Finance, Retail, Logistics, Healthcare",
    "Cross-platform proficiency (SAP, Dynamics, Oracle, Custom Builds)",
    "Agile Implementation Framework ensuring faster ROI",
    "24×7 global support and maintenance teams",
    "Data privacy and cybersecurity at the core"
  ];

  const successMetrics = [
    { value: "99.9%", label: "System Uptime" },
    { value: "45%", label: "Reduction in Operational Costs" },
    { value: "3x", label: "Faster Data Insights" }
  ];

  const industries = [
    "Manufacturing",
    "Retail", 
    "Logistics",
    "Finance",
    "Healthcare",
    "Real Estate"
  ];

  const faqs = [
    {
      question: "How long does ERP implementation typically take?",
      answer: "Depending on complexity, implementation spans 3–9 months with phased delivery and data migration support."
    },
    {
      question: "Which ERP system is best for my business?",
      answer: "Our consultants analyze your processes and recommend the right ERP SAP, Dynamics 365, Oracle, or a custom Dcodes-built platform."
    },
    {
      question: "How do you ensure data security during migration?",
      answer: "We follow ISO-certified processes, multi-layer encryption, and real-time data validation throughout migration."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-normal antialiased">
      {/* Sticky CTA Button - Commented as in original */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium shadow-lg transition-all duration-300 flex items-center gap-2 group">
          Talk to an ERP Consultant →
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div> */}

      {/* Animated Background Elements */}
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Subtle cursor following gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 50%)`
        }}
      />

      <div className="relative z-10">
        {/* Hero Section - Fixed H1 tag for SEO */}
        <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
          {/* Animated background graphics for hero */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-600 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gray-500 rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <div className="text-xs font-medium tracking-[0.2em] text-gray-500 mb-2 uppercase">
                Enterprise Solutions
              </div>
              {/* Fixed: Added proper H1 tag with primary keyword */}
              <h1 className="text-4xl md:text-7xl font-extralight mb-12 tracking-tighter leading-none">
                Empowering Enterprises
                <br />
                <span className="font-normal"> with Intelligent ERP Systems</span>
              </h1>
              {/* Added hidden H1 for SEO with exact keyword match */}
              <h1 className="sr-only">ERP System Development Services | Custom ERP Solutions | Enterprise Resource Planning Software</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
              End-to-end enterprise resource planning solutions that streamline operations, enhance productivity, and drive global business excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href={'https://dcodestechnologies.slack.com/archives/D09FSQ83WJZ/p1762233713947709'} 
                className="group bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 relative overflow-hidden"
                aria-label="Assess your ERP needs with Dcodes Technologies - Free ERP consultation"
              >
                <span className="relative z-10">Assess Your Needs</span>
              </Link>
              <Link 
  href="https://portfolio.dcodestech.com/#ERPs"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm tracking-wide uppercase text-gray-400 hover:text-white transition-all duration-300 relative group"
  aria-label="Explore our complete ERP solutions portfolio"
>
  Explore Solutions
  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-0 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">ERP Services</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-800">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-black p-12 lg:p-16 hover:bg-gray-950 transition-all duration-700 cursor-pointer group"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="text-6xl font-extralight text-gray-700 group-hover:text-gray-500 transition-colors duration-700" aria-hidden="true">
                      {service.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-normal mb-6 group-hover:text-gray-200 transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-lg font-normal group-hover:text-gray-400 transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 w-0 h-px bg-white transition-all duration-700 group-hover:w-12" aria-hidden="true"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="text-xs tracking-[0.2em] text-gray-600 mb-8 uppercase">
                  Since 2019 — Empowering Global Businesses
                </div>
                <h2 className="text-5xl font-extralight mb-12 tracking-tight leading-tight">
                  About ERP<br />Expertise
                </h2>
                <div className="space-y-8 flex justify-center">
                  <Image
                    src={"https://cdn-ikpplpn.nitrocdn.com/rKfvbqixbjRUiVJszbkgQBRIwKbXWEuF/assets/images/optimized/rev-7afecd6/www.schgroup.com/wp-content/uploads/2024/04/ERP-Webpage-Graphic-1.png"}
                    alt="ERP Webpage Graphic showing enterprise resource planning systems and integrated business management solutions"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <p className="text-2xl font-normal text-gray-300 leading-relaxed mb-12">
                  We architect next-generation ERP ecosystems that unify business processes and unlock operational intelligence. Our team combines deep technical expertise with strategic insight to deliver high-performing ERP platforms for enterprises worldwide.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-start gap-4 p-6 border border-gray-900 hover:border-gray-800 transition-all duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:bg-white transition-colors duration-300" aria-hidden="true"></div>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-normal">
                          {capability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Metrics Section */}
        <section className="py-0 px-8 border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Client Success Metrics</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center group p-8 hover:bg-gray-900 transition-all duration-500 rounded-lg">
                  <div className="text-5xl font-normal text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 text-lg font-normal">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Our Approach</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {philosophy.map((item, index) => (
                <div key={index} className="text-center group p-6 hover:bg-gray-900 transition-all duration-500 rounded-lg">
                  <div className="mb-6 flex justify-center">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500" aria-label={item.principle}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-normal mb-4 group-hover:text-white transition-colors duration-300">
                    {item.principle} —
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal group-hover:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dcodes Section */}
        <section className="py-0 px-8 border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Why Choose Dcodes for ERP</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-normal">
                Strategic Advantage for Modern Enterprises
              </p>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="group p-6 border border-gray-800 hover:border-blue-500 transition-all duration-500 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-normal text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served Section */}
        <section className="py-24 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Industries Served</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {industries.map((industry, index) => (
                <div key={index} className="text-center group p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 rounded-lg">
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300 font-normal">
                    {industry}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xs tracking-[0.2em] text-gray-600 mb-4 uppercase">Case Study</div>
            <blockquote className="text-2xl md:text-3xl font-normal text-gray-300 leading-relaxed mb-8 italic">
              "We migrated a $200M enterprise to Dynamics 365 boosting efficiency by 42%."
            </blockquote>
            <div className="text-gray-500 text-sm">
              Enterprise Manufacturing Client
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-extralight mb-12 tracking-tighter">
              Ready to Transform?
            </h2>
            <p className="text-xl text-gray-400 mb-16 font-normal leading-relaxed max-w-2xl mx-auto">
              Transform your business into an intelligent enterprise with robust ERP systems engineered for scalability, innovation, and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <Link 
                href={'https://calendly.com/sales-dcodestechnologies/30min'} 
                className="bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 font-medium"
                aria-label="Schedule ERP consultation with Dcodes Technologies - Free assessment"
              >
                Schedule Consultation
              </Link>
              <button 
                className="border border-gray-800 px-12 py-4 text-sm tracking-wide uppercase hover:border-gray-600 transition-all duration-300 font-medium"
                aria-label="Download ERP transformation guide and implementation roadmap"
              >
                Download ERP Transformation Guide
              </button>
            </div>
            
            <div className="text-xs tracking-wide text-gray-600 uppercase">
              Enterprise Specialists • Free Assessment Available
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Frequently Asked</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="space-y-px">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-950 border border-gray-900">
                  <button
                    className="w-full text-left p-8 hover:bg-black transition-all duration-300 flex items-center justify-between group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-normal pr-8 group-hover:text-gray-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className={`text-2xl font-extralight transform transition-all duration-300 ${
                      openFaq === index ? 'rotate-45 text-gray-400' : 'text-gray-600'
                    }`} aria-hidden="true">
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div 
                      className="px-8 pb-8 border-t border-gray-900 animate-in slide-in-from-top-2 duration-300"
                      id={`faq-answer-${index}`}
                    >
                      <p className="text-gray-400 leading-relaxed font-normal pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}