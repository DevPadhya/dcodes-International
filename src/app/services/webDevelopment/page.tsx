"use client";
import { Zap, Rocket, Accessibility, Sparkles } from "lucide-react";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  ShoppingCart, 
  Layers, 
  Check,
  Monitor,
  Smartphone,
  Search,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Award,
  Code,
  Database,
  Cloud,
  GitBranch,
  Briefcase,
  Heart,
  Building,
  DollarSign,
  Home,
  Wrench,
  Calendar
} from 'lucide-react';
import DotGrid from '@/components/ReactBit/DotGrid';
import ProjectsShowcase from "./ProjectsShowcase";
import Link from "next/link";

// ============================================
// SCHEMA MARKUP COMPONENTS
// ============================================

// 1. Organization Schema
const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dcodes Technologies",
    "url": "https://www.dcodestech.com",
    "logo": "https://www.dcodestech.com/logo.png",
    "description": "Web development, mobile app development, ERP solutions and digital marketing company in Ahmedabad, India",
    "email": "info@dcodes.com",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN",
      "postalCode": "380001",
      "streetAddress": "Your Office Street Address"
    },
    "sameAs": [
      "https://www.linkedin.com/company/dcodestech",
      "https://twitter.com/dcodestech",
      "https://github.com/dcodestech"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 2. LocalBusiness Schema
const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.dcodestech.com/#localbusiness",
    "name": "Dcodes Technologies",
    "image": "https://www.dcodestech.com/og-image.jpg",
    "description": "Professional web development services building custom, responsive, and SEO-optimized websites for businesses worldwide",
    "priceRange": "$$",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@dcodes.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Office Street Address",
      "addressLocality": "Ahmedabad",
      "addressRegion": "GJ",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "url": "https://www.dcodestech.com/web-development",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 3. WebPage Schema
const WebPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Development Services | Custom & Responsive Websites",
    "description": "Professional web development services building custom, responsive, and SEO-optimized websites for businesses worldwide.",
    "url": "https://www.dcodestech.com/web-development",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Dcodes Technologies",
      "url": "https://www.dcodestech.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 4. Service Schema (Web Development Specific)
const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional web development services including custom website development, e-commerce solutions, web applications, and ongoing maintenance.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dcodes Technologies",
      "url": "https://www.dcodestech.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "Custom Website Development",
      "E-commerce Development",
      "Web Application Development",
      "Responsive Web Design",
      "Frontend Development",
      "Backend Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "price": "25000",
          "priceCurrency": "INR",
          "description": "Basic Business Website"
        },
        {
          "@type": "Offer",
          "price": "50000",
          "priceCurrency": "INR",
          "description": "E-commerce Website"
        },
        {
          "@type": "Offer",
          "price": "100000",
          "priceCurrency": "INR",
          "description": "Custom Web Application"
        }
      ]
    },
    "url": "https://www.dcodestech.com/web-development"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 5. BreadcrumbList Schema
const BreadcrumbSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.dcodestech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Development",
        "item": "https://www.dcodestech.com/web-development"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 6. FAQ Schema (Expanded for Web Development)
const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What defines your development approach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on strategy, user experience, and scalability — delivering future-ready solutions that perform seamlessly across platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure project success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By combining agile methodologies, transparent communication, and strict quality assurance, we ensure each project exceeds expectations."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies shape your solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with modern stacks like React, Next.js, Node.js, Laravel, Python, and cloud-based architectures to deliver high-performance, secure web platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How much does web development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web development costs typically range from INR 25,000 to INR 5,00,000 depending on project complexity. For international clients, pricing starts at $25/hour."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard business website takes 4-6 weeks. E-commerce websites take 6-10 weeks. Complex web applications may take 3-6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 90-day post-launch support and ongoing maintenance packages for all our web development projects."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 7. Pricing Schema (Web Development Packages)
const PricingSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Web Development Services",
    "description": "Professional web development packages for businesses of all sizes",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "25000",
      "highPrice": "500000",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Basic Business Website",
          "price": "25000",
          "priceCurrency": "INR",
          "description": "5-10 pages, responsive design, contact form, SEO basic"
        },
        {
          "@type": "Offer",
          "name": "E-commerce Website",
          "price": "50000",
          "priceCurrency": "INR",
          "description": "Product catalog, shopping cart, payment gateway, admin panel"
        },
        {
          "@type": "Offer",
          "name": "Custom Web Application",
          "price": "100000",
          "priceCurrency": "INR",
          "description": "Custom features, database integration, API development"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 8. TechStack Schema (SoftwareApplication)
const TechStackSchema = () => {
  const technologies = ["React", "Next.js", "Vue.js", "Node.js", "Laravel", "Python", "MongoDB", "MySQL", "AWS", "Azure", "Docker"];
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Web Development Technologies",
    "description": "Technologies used by Dcodes Technologies for web development",
    "itemListElement": technologies.map((tech, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tech,
        "applicationCategory": "DeveloperApplication"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Main Schema Component - Includes all schemas for web development page
const AllSchemas = () => {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebPageSchema />
      <ServiceSchema />
      <BreadcrumbSchema />
      <FAQSchema />
      <PricingSchema />
      <TechStackSchema />
    </>
  );
};

export default function DcodesWebsiteDev() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  // SEO Meta Tags - Updated with better content
  React.useEffect(() => {
    // Update document title
    document.title = "Web Development Services - Custom Websites | Dcodes tech";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Professional web development services building custom, responsive, and SEO-optimized websites for businesses worldwide — scalable, secure, and future-ready.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "web development services, custom web development services, website development company, responsive website development, full stack web development, ecommerce website development services, front end and back end web development, web development company in Ahmedabad, hire web developers India");
    
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
    ogTitle.setAttribute('content', "Professional Web Development Services | Dcodes Technologies");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Crafting intelligent, scalable, and high-performing digital experiences engineered for the modern world. Expert web development solutions.");
    
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
    ogUrl.setAttribute('content', "https://dcodes.com/web-development");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/og-image-web-development.jpg");
    
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
    twitterTitle.setAttribute('content', "Professional Web Development Services | Dcodes");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Expert web development solutions for businesses worldwide. Scalable, secure, and high-performing websites.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-web-development.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/web-development");
    
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
    
    // Language
    let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', "en");
    
    // hreflang tags
    let hreflangEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      hreflangEn.setAttribute('href', 'https://dcodes.com/web-development');
      document.head.appendChild(hreflangEn);
    }
    
    let hreflangXDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!hreflangXDefault) {
      hreflangXDefault = document.createElement('link');
      hreflangXDefault.setAttribute('rel', 'alternate');
      hreflangXDefault.setAttribute('hreflang', 'x-default');
      hreflangXDefault.setAttribute('href', 'https://dcodes.com/web-development');
      document.head.appendChild(hreflangXDefault);
    }
    
  }, []);

  const services = [
    {
      id: 1,
      title: "Digital Architecture",
      description: "Strategic, scalable web frameworks designed to deliver seamless functionality and intuitive user journeys.",
      number: "01",
      icon: Globe
    },
    {
      id: 2,
      title: "E-Commerce Solutions", 
      description: "Powerful, conversion-driven commerce systems that redefine online shopping experiences.",
      number: "02",
      icon: ShoppingCart
    },
    {
      id: 3,
      title: "Web Applications",
      description: "Advanced web applications integrating automation, analytics, and performance to empower businesses.",
      number: "03",
      icon: Layers
    },
    {
      id: 4,
      title: "Digital Maintenance",
      description: "Continuous optimization, monitoring, and upgrades keeping your platforms future-ready.",
      number: "04",
      icon: Zap
    }
  ];

  const capabilities = [
    { text: "Integrated Digital Ecosystems", icon: Globe },
    { text: "Cross-Platform Responsiveness", icon: Monitor },
    { text: "Performance-Optimized Execution", icon: Zap },
    { text: "SEO-Optimized Architecture", icon: Search },
    { text: "Enterprise-Grade Security", icon: Shield },
    { text: "Continuous Evolution Support", icon: TrendingUp }
  ];

  const philosophy = [
    { principle: "Minimalism", description: "Every element serves a clear purpose.", icon: <Zap className="w-10 h-10 text-cyan-400" /> },
    { principle: "Performance", description: "Speed and reliability are at the core.", icon: <Rocket className="w-10 h-10 text-cyan-400" /> },
    { principle: "Accessibility", description: "Creative designs that welcome every user.", icon: <Accessibility className="w-10 h-10 text-cyan-400" /> },
    { principle: "Innovation", description: "Tomorrow's technology, built today.", icon: <Sparkles className="w-10 h-10 text-cyan-400" /> }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vue.js"],
      icon: Code,
      color: "from-cyan-400 to-blue-500"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Laravel", "Python", ".NET"],
      icon: Database,
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Database",
      technologies: ["MongoDB", "MySQL", "Firebase"],
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Azure", "Google Cloud"],
      icon: Cloud,
      color: "from-pink-500 to-red-500"
    },
    {
      category: "DevOps",
      technologies: ["Docker", "GitHub Actions", "CI/CD"],
      icon: GitBranch,
      color: "from-red-500 to-orange-500"
    }
  ];

  const industries = [
    { name: "E-commerce", icon: ShoppingCart },
    { name: "SaaS Platforms", icon: Cloud },
    { name: "Healthcare", icon: Heart },
    { name: "Fintech", icon: DollarSign },
    { name: "Real Estate", icon: Home },
    { name: "Manufacturing", icon: Wrench }
  ];

  const whyChoose = [
    { title: "Global Delivery Standards", icon: Globe },
    { title: "Custom-Built Scalable Frameworks", icon: Code },
    { title: "24/7 Technical Support", icon: Shield },
    { title: "Experienced R&D Team", icon: Users },
    { title: "98% Client Retention Rate", icon: Award }
  ];

  const workflow = [
    { step: "Discovery & Strategy", icon: Search },
    { step: "UX/UI Design", icon: Monitor },
    { step: "Development", icon: Code },
    { step: "Testing & Optimization", icon: Zap },
    { step: "Deployment & Support", icon: Cloud }
  ];

  const trustedBrands = [
    "Automotive", "Finance", "HealthTech", "SaaS", "Manufacturing", "Retail"
  ];

  const faqs = [
    {
      question: "What defines your development approach?",
      answer: "We focus on strategy, user experience, and scalability — delivering future-ready solutions that perform seamlessly across platforms."
    },
    {
      question: "How do you ensure project success?",
      answer: "By combining agile methodologies, transparent communication, and strict quality assurance, we ensure each project exceeds expectations."
    },
    {
      question: "What technologies shape your solutions?",
      answer: "We work with modern stacks like React, Next.js, Node.js, Laravel, Python, and cloud-based architectures to deliver high-performance, secure web platforms."
    }
  ];

  const showcaseFeatures = [
    { icon: Monitor, title: "Data-Driven", desc: "Optimization" },
    { icon: Smartphone, title: "UI/UX", desc: "Excellence" },
    { icon: TrendingUp, title: "Unmatched", desc: "Scalability" }
  ];

  return (
    <>
      {/* ALL SCHEMA MARKUPS ADDED HERE */}
      <AllSchemas />

      <div className="bg-black text-white min-h-screen font-normal antialiased relative overflow-hidden">
        {/* DotGrid Background with lower z-index */}
        <div className="fixed inset-0 -z-10" style={{ zIndex: 0 }}>
          <DotGrid
            dotSize={2}
            gap={20}
            baseColor="#1E40AF"
            activeColor="#06B6D4"
            proximity={200}
            shockRadius={250}
            shockStrength={5}
            resistance={500}
            returnDuration={1.2}
          />
        </div>

        {/* Content with higher z-index */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 md:py-12 lg:py-20">
            <div className="max-w-7xl mx-auto w-full text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 md:space-y-8 lg:space-y-12"
              >
                {/* Main Heading */}
                <div className="space-y-4 md:space-y-6">
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight md:leading-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                  >
                    Website
                    <br />
                    <span className="font-normal bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                      Development
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.div 
                    className="text-xs sm:text-sm tracking-[0.3em] text-cyan-400 uppercase font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Precision-Engineered Digital Experiences
                  </motion.div>
                </div>

                {/* Description Text */}
                <motion.div 
                  className="max-w-4xl mx-auto px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed md:leading-relaxed text-gray-300">
                    Crafting intelligent, scalable,{" "}
                    <span className="font-normal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                      and high-performing digital
                    </span>{" "}
                    experiences engineered for the modern world.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-4 md:pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Link 
                    href="/connect" 
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 text-sm md:text-base tracking-wider uppercase hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 rounded-xl flex items-center justify-center gap-2 min-w-[200px] sm:min-w-[220px] transform hover:-translate-y-1"
                    aria-label="Discuss your web development project with Dcodes"
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </Link>

                  <Link 
                    href="https://portfolio.dcodestech.com/#Website%20Projects" 
                    className="group text-sm md:text-base tracking-wider uppercase text-gray-400 hover:text-white transition-all duration-300 px-6 sm:px-8 md:px-10 py-3 md:py-4 border border-gray-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 rounded-xl flex items-center justify-center min-w-[200px] sm:min-w-[220px] transform hover:-translate-y-1"
                    aria-label="View our web development portfolio"
                  >
                    View Portfolio
                  </Link>
                </motion.div>

                {/* Trust Badge */}
                <motion.div 
                  className="pt-8 lg:pt-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-widest">
                    Trusted by Startups, Enterprises & Global Innovators
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Trusted Brands Section */}
          <section className="px-6 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {trustedBrands.map((brand, index) => (
                  <div key={index} className="text-white hover:text-cyan-400 transition-colors text-sm tracking-wider uppercase">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-32 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">Our Expertise</div>
                  <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-white mb-4">
                    Our Expertise in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web Engineering</span>
                  </h2>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full" />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveService(service.id)}
                    onMouseLeave={() => setActiveService(null)}
                    className="group"
                  >
                    <Card className="relative h-full overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/50 hover:scale-[1.02]">
                      <CardHeader className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <span className="text-7xl font-extralight text-gray-800 group-hover:text-cyan-400/40 transition-colors duration-500" aria-hidden="true">
                            {service.number}
                          </span>
                          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500 border border-cyan-500/20">
                            <service.icon className="w-7 h-7 text-cyan-400" aria-hidden="true" />
                          </div>
                        </div>

                        <CardTitle className="text-2xl font-normal mb-4 text-gray-100 group-hover:text-white transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="px-8 pb-10">
                        <CardDescription className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                          {service.description}
                        </CardDescription>

                        <AnimatePresence>
                          {activeService === service.id && (
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: 60 }}
                              exit={{ width: 0 }}
                              className="mt-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                              aria-hidden="true"
                            />
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-400 bg-cyan-400/10 px-4 py-1">
                    Since 2019
                  </Badge>
                  
                  <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight leading-tight">
                    Dcodes<br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Technologies
                    </span>
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    We are a global technology company engineering digital solutions that elevate brands and accelerate transformation.
                  </p>

                  <p className="text-base text-gray-400 leading-relaxed mb-10">
                    Our expertise spans enterprise systems, SaaS products, and high-performance web solutions designed for innovation-driven organizations.
                  </p>

                  <div className="space-y-4">
                    {["Continuous Support", "Quality Assurance", "Modern Technology Stack"].map((item) => (
                      <div key={item} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" aria-hidden="true" />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {capabilities.map((capability, index) => (
                      <Card key={index} className="p-6 bg-gray-900/40 backdrop-blur-xl border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                            <capability.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                          </div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                            {capability.text}
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Showcase Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-xs tracking-[0.3em] text-cyan-400 mb-6 uppercase">
                    Digital Perfection
                  </div>

                  <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight leading-tight">
                    Digital Perfection,
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Crafted with Precision
                    </span>
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    Every Dcodes project reflects our passion for design excellence and engineering precision delivering speed, security, and seamless performance.
                  </p>

                  <div className="space-y-5">
                    {["Responsive Design – Fluid, adaptive interfaces for every screen and device.", 
                      "Fast Loading – Engineered for speed and real-time performance.", 
                      "SEO Optimization – Structurally optimized for visibility and growth."].map((item) => (
                      <div key={item} className="flex items-start gap-4 group cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-1.5 group-hover:scale-125 transition-transform" aria-hidden="true" />
                        <span className="text-gray-300 text-base group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {showcaseFeatures.map((item, index) => (
                      <motion.div 
                        key={item.title} 
                        className="text-center group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                          <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-cyan-500/30">
                            <item.icon className="w-7 h-7 text-cyan-400" aria-hidden="true" />
                          </div>
                          <h3 className="text-sm font-normal mb-2 text-white">{item.title}</h3>
                          <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">Powered By</div>
                <h2 className="text-4xl md:text-6xl font-extralight mb-4 tracking-tight">
                  Technologies We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work With</span>
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6" />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredTech(index)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="group"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-6 rounded-xl">
                      <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center transition-all`}>
                        <tech.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-center text-lg font-normal mb-4 text-white">{tech.category}</h3>
                      <div className="space-y-2">
                        {tech.technologies.map((t) => (
                          <div key={t} className="text-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {t}
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">Our Process</div>
                <h2 className="text-4xl md:text-6xl font-extralight mb-4 tracking-tight">
                  Project <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Lifecycle</span>
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6" />
              </motion.div>

              <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20" aria-hidden="true" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                  {workflow.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-800 group-hover:border-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative z-10">
                          <item.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="text-gray-500 text-xs mb-2 font-medium">STEP {index + 1}</div>
                      <h3 className="text-base font-normal text-white group-hover:text-cyan-400 transition-colors">
                        {item.step}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Industries Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">Versatile Solutions</div>
                <h2 className="text-4xl md:text-6xl font-extralight mb-4 tracking-tight">
                  Industries We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Serve</span>
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6" />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-8 rounded-xl text-center">
                      <div className="w-14 h-14 mx-auto mb-4 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-lg flex items-center justify-center transition-all">
                        <industry.icon className="w-7 h-7 text-cyan-400" aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-normal text-gray-300 group-hover:text-white transition-colors">
                        {industry.name}
                      </h3>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="py-0 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                  <Shield className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
                  Enterprise-Grade <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Security</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Our development follows GDPR, ISO/IEC, and best security practices to ensure robust data protection and zero vulnerabilities.
                </p>
              </motion.div>
            </div>
          </section>
                                    
          {/* Why Choose Dcodes Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">Why Partner With Us</div>
                <h2 className="text-4xl md:text-6xl font-extralight mb-4 tracking-tight">
                  Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Dcodes</span>
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 mb-8" />
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Your vision, powered by our code.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Card className="h-full bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-8 rounded-xl text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-xl flex items-center justify-center transition-all border border-cyan-500/20">
                        <item.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-normal text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                        {item.title}
                      </h3>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <ProjectsShowcase />

          {/* Philosophy Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">Our Approach</div>
                <h2 className="text-4xl md:text-6xl font-extralight mb-6 tracking-tight">
                  Our Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Philosophy</span>
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We believe great web experiences are born where technology meets creativity. Our process ensures each website is elegant, efficient, and inclusive.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {philosophy.map((item, index) => (
                  <motion.div 
                    key={item.principle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-10 rounded-xl">
                      <div className="mb-6 flex justify-center" aria-hidden="true">{item.icon}</div>
                      <h3 className="text-xl font-normal mb-4 group-hover:text-cyan-300 transition-colors text-white">
                        {item.principle}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.3em] text-cyan-400 mb-6 uppercase">Get Started</div>
                <h2 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight leading-tight">
                  Ready to Launch Your <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Digital Future?
                  </span>
                </h2>
                <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Transform your ideas into high-impact web applications that engage users, build trust, and scale globally.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <Link href={'https://calendly.com/sales-dcodestechnologies/30min'} className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 text-sm tracking-wider uppercase hover:shadow-2xl hover:shadow-cyan-500/50 transition-all rounded-lg flex items-center gap-2" aria-label="Schedule a 15-minute strategy call for web development">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    Schedule a 15-Minute Strategy Call
                  </Link>
                  
                  <Link href={''} className="border border-gray-700 hover:border-cyan-500 px-10 py-4 text-sm tracking-wider uppercase transition-all rounded-lg text-white hover:bg-cyan-500/5" aria-label="View web development case studies">
                    View Case Studies
                  </Link>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Check className="w-3 h-4 text-cyan-400" aria-hidden="true" />
                    Free Consultation
                  </span>
                  <span className="text-gray-700" aria-hidden="true">•</span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                    No Obligation
                  </span>
                  <span className="text-gray-700" aria-hidden="true">•</span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                    Expert Guidance
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-0 px-6 md:px-8 border-t border-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">Questions</div>
                <h2 className="text-4xl md:text-6xl font-extralight mb-4 tracking-tight">
                  Frequently <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Asked</span>
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6" />
              </motion.div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-xl border border-gray-800/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all"
                  >
                    <button
                      className="w-full text-left p-6 hover:bg-gray-800/20 transition-colors flex items-center justify-between group"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <h3 className="text-base font-normal pr-8 text-white group-hover:text-cyan-400 transition-colors">
                        {faq.question}  
                      </h3>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center transition-all ${openFaq === index ? 'rotate-45 bg-cyan-500/20' : ''}`}>
                        <span className={`text-xl ${openFaq === index ? 'text-cyan-400' : 'text-gray-400'}`} aria-hidden="true">
                          +
                        </span>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          id={`faq-answer-${index}`}
                        >
                          <div className="px-6 pb-6 border-t border-gray-800/50">
                            <p className="text-gray-300 leading-relaxed pt-4 text-sm">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto">
              {/* Main Footer Content */}
              <div className="text-center mb-12">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-3">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                      Dcodes Technologies
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 tracking-wider max-w-2xl mx-auto leading-relaxed">
                    Driving Global Digital Transformation Through Innovative Solutions
                  </p>
                </div>
                
                {/* Services Navigation */}
                <nav className="mb-8" aria-label="Services">
                  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    <a 
                      href="/services/appDevelopment" 
                      className="hover:text-cyan-300 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-gray-800/30"
                    >
                      App Development
                    </a>
                    
                    <span className="text-gray-600 hidden sm:inline" aria-hidden="true">•</span>
                    
                    <a 
                      href="/services/webDevelopment" 
                      className="hover:text-cyan-300 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-gray-800/30"
                    >
                      Web Development
                    </a>
                    
                    <span className="text-gray-600 hidden sm:inline" aria-hidden="true">•</span>
                    
                    <a 
                      href="/services/erpSystem" 
                      className="hover:text-cyan-300 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-gray-800/30"
                    >
                      ERP System
                    </a>
                    
                    <span className="text-gray-600 hidden sm:inline" aria-hidden="true">•</span>
                    
                    <a 
                      href="/services/digitalMarketing" 
                      className="hover:text-cyan-300 transition-all duration-300 font-medium px-2 py-1 rounded-lg hover:bg-gray-800/30"
                    >
                      Digital Marketing
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </footer>
        </div>

        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s linear infinite;
          }
        `}</style>
      </div>
    </>
  );
}