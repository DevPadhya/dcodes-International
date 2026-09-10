"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import Grid from "@/components/landingPage/Grid";
import AddAI from "@/components/landingPage/AddAI";
import AboutUsSection from "@/components/About/AboutUsSection";
import Services from "@/components/landingPage/Services";
import Servicestwo from "@/components/landingPage/Servicestwo";
import Subscribe from "@/components/landingPage/Subscribe";
import ConnectUsForm from "@/components/landingPage/ConnectUsForm";
import { useEffect, useState } from "react";
import WorkProcessUI from "@/components/landingPage/WorkProcessUI";
import Head from "next/head";

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1] 
    }
  }
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Wrapper component for each section
const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      margin: "-50px 0px -50px 0px"
    }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// ============================================
// SCHEMA MARKUP COMPONENTS (SEO Optimized)
// ============================================

// 1. Organization Schema
const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dcodes Technologies - Software Development Company",
    "url": "https://www.dcodestech.com",
    "logo": "https://www.dcodestech.com/logo.png",
    "description": "Dcodes Technologies is a leading software development company, web development company, and mobile app development company offering services in USA, UK, Europe, and India.",
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

// 2. LocalBusiness Schema with Location Targeting
const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.dcodestech.com/#localbusiness",
    "name": "Dcodes Technologies - Web & Mobile App Development Company",
    "image": "https://www.dcodestech.com/og-image.jpg",
    "description": "Dcodes Technologies is a top software development company, web development company, and mobile app development company serving clients in USA, UK, Europe, and India.",
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
    "url": "https://www.dcodestech.com",
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

// 3. Website Schema with Sitelinks Searchbox
const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dcodes Technologies - Software, Web & Mobile App Development",
    "url": "https://www.dcodestech.com",
    "description": "Dcodes Technologies offers software development services, web development services, and mobile app development services in USA, UK, Europe, and India.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.dcodestech.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 4. BreadcrumbList Schema
const BreadcrumbSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home - Software Development Company",
        "item": "https://www.dcodestech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Development Company in USA, UK, Europe & India",
        "item": "https://www.dcodestech.com/web-development"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mobile App Development Company in USA, UK, Europe & India",
        "item": "https://www.dcodestech.com/mobile-app-development"
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

// 5. FAQ Schema with Keywords
const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Dcodes Technologies offer as a software development company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a leading software development company, we offer web development services, mobile app development services, ERP solutions, digital marketing, SEO, PPC, social media marketing, and IT consulting services in USA, UK, Europe, and India."
        }
      },
      {
        "@type": "Question",
        "name": "Is Dcodes Technologies a reliable web development company in USA and UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dcodes Technologies is a trusted web development company serving clients in USA, UK, Europe, and India. We have delivered 500+ projects globally with 98% client satisfaction."
        }
      },
      {
        "@type": "Question",
        "name": "How much does mobile app development cost in India and USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile app development costs start from $5,000 for basic apps in India and $15,000+ for complex apps in USA. We provide affordable app development services with high-quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-launch support for web and mobile apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 90-day post-launch support and ongoing maintenance packages for all our software development, web development, and mobile app development projects."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Dcodes Technologies for software development in Europe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dcodes Technologies is a preferred software development company in Europe because we offer cost-effective solutions, follow GDPR compliance, provide dedicated teams, and ensure timely delivery."
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

// Main Schema Component - Includes all schemas for homepage
const AllSchemas = () => {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <BreadcrumbSchema />
      <FAQSchema />
    </>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* ===== SEO HEAD SECTION ===== */}
      <Head>
        {/* Primary Title with Keywords */}
        <title>
          Software Development Company | Web & Mobile App Development in USA, UK, Europe & India - Dcodes Technologies
        </title>

        {/* Meta Description with Keywords */}
        <meta 
          name="description" 
          content="Dcodes Technologies is a leading software development company, web development company, and mobile app development company offering services in USA, UK, Europe, and India. Get affordable web development services, mobile app development services, and software development services." 
        />

        {/* Keywords Meta Tag */}
        <meta 
          name="keywords" 
          content="Software Development Company, Web Development Company, Mobile App Development Company, Software Development Services, Web Development Services, Mobile App Development Services, Web Development Company in USA, Web Development Company in UK, Web Development Company in India, Software Development Company in USA, Software Development Company in UK, Software Development Company in India, Mobile App Development in USA, Mobile App Development in UK,  Mobile App Development in India" 
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.dcodestech.com" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Software Development Company | Web & Mobile App Development in USA, UK, Europe & India" />
        <meta property="og:description" content="Dcodes Technologies is a top software development company offering web development services, mobile app development services in USA, UK, Europe, and India." />
        <meta property="og:url" content="https://www.dcodestech.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.dcodestech.com/og-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development Company | Web & Mobile App Development in USA, UK, Europe & India" />
        <meta name="twitter:description" content="Dcodes Technologies is a leading software development company, web development company, and mobile app development company in USA, UK, Europe, and India." />
        <meta name="twitter:image" content="https://www.dcodestech.com/og-image.jpg" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Geo Tags for Location Targeting */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
      </Head>

      {/* All Schema Markup Added Here */}
      <AllSchemas />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen"
      >
        <ScrollProgress />

        {/* Hero Section - First to appear */}
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        {/* Grid Section */}
        <SectionWrapper delay={0.1}>
          <Grid />
        </SectionWrapper>

        {/* Add AI Section */}
        <SectionWrapper delay={0.2}>
          <AddAI />
        </SectionWrapper>

        {/* About Us Section */}
        <SectionWrapper delay={0.1}>
          <AboutUsSection />
        </SectionWrapper>

        {/* Services Section */}
        <SectionWrapper delay={0.1}>
          <Services />
        </SectionWrapper>

        {/* Services Two Section */}
        <SectionWrapper delay={0.1}>
          <Servicestwo />
        </SectionWrapper>

        {/* Subscribe Section */}
        <SectionWrapper delay={0.1}>
          <WorkProcessUI />
        </SectionWrapper>
     
        {/* Connect Us Form - Last section */}
        <SectionWrapper delay={0.2}>
          <ConnectUsForm />
        </SectionWrapper>
      </motion.div>
    </>
  );
}