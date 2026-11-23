"use client";

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ChevronDown, Users, Calendar, Award, Building, Wifi, Shield, Monitor, Coffee, Trophy, MapPin, Heart, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import WebThreads from '@/components/WebThreads';

// ---------- Animation variants ----------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8 } },
};

// Reusable section wrapper: animates once when it scrolls into view
const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    className={className}
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    {children}
  </motion.section>
);

// ---------- Hero animated background (WebThreads) ----------
const HeroBackground = () => (
  <div
    aria-hidden="true"
    className="absolute top-0 left-0 w-full h-[700px] overflow-hidden pointer-events-none z-0"
  >
    <WebThreads
      colors={["#5227FF", "#FF9FFC"]}
      coreColor="#FFFFFF"
      threadCount={6}
      spread={0.18}
      lightMode={false}
      speed={0.2}
      frequency={5}
      taper={1}
      position={0.5}
      pinch={0.5}
      nodes={1}
      angle={0}
      glow={0.02}
      falloff={0.6}
      thickness={1.1}
      brightness={0.6}
      opacity={1}
      depth={0}
      pulses={0}
      mirror
      shimmer={false}
      fade={0}
      grain={0.05}
      intro
      mouseInteraction
      mouseStrength={0.5}
      pulseOnClick
      paused={false}
    />

    {/* Fade into the black page background */}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
  </div>
);

const LifeAtDecodes = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // Floating animation (disabled if user prefers reduced motion)
  const floatAnim = reduceMotion
    ? {}
    : { y: [0, -10, 0], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const } };

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "Life at Dcodes Technologies | Company Culture & Team | Work With Us";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Discover life at Dcodes Technologies — our culture, team values, work environment, and what makes working with us exciting for tech professionals and creatives.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "life at Dcodes Technologies, Dcodes company culture, working at Dcodes Technologies, career at Dcodes, employee experience at Dcodes, tech company culture in Ahmedabad, IT company culture");
    
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
    ogTitle.setAttribute('content', "Life at Dcodes Technologies | Company Culture & Careers");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Experience our dynamic workplace culture with modern infrastructure, team events, and career growth opportunities.");
    
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
    ogUrl.setAttribute('content', "https://dcodes.com/life-at-dcodes");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/og-image-life-at-dcodes.jpg");
    
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
    twitterTitle.setAttribute('content', "Life at Dcodes Technologies");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Join our innovative team and experience our vibrant workplace culture.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-life-at-dcodes.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/life-at-dcodes");
    
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
    
    // Structured Data for Career Page
    const structuredDataAbout = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Life at Dcodes Technologies",
      "description": "Workplace culture and career opportunities at Dcodes Technologies",
      "url": "https://dcodes.com/life-at-dcodes",
      "about": {
        "@type": "Organization",
        "name": "Dcodes Technologies",
        "description": "Technology company offering web development, mobile apps, and digital solutions",
        "url": "https://dcodes.com",
        "sameAs": [
          "https://linkedin.com/company/dcodes",
          "https://twitter.com/dcodes",
          "https://github.com/dcodes"
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Thing",
            "name": "Company Culture",
            "description": "Dynamic and lively workplace promoting creativity, teamwork, and continuous learning"
          },
          {
            "@type": "Thing",
            "name": "Infrastructure",
            "description": "Modern office with cutting-edge technology and amenities"
          },
          {
            "@type": "Thing",
            "name": "Employee Benefits",
            "description": "Competitive perks and career growth opportunities"
          }
        ]
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
          "name": "Life at Dcodes",
          "item": "https://dcodes.com/life-at-dcodes"
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
    
    // Organization Structured Data
    const structuredDataOrg = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dcodes Technologies",
      "url": "https://dcodes.com",
      "logo": "https://dcodes.com/logo.png",
      "foundingDate": "2019",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "15"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressRegion": "Gujarat"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "human resources",
        "email": "hr@dcodestech.com",
        "telephone": "+91-6353-653-977"
      }
    };
    
    let scriptOrg = document.querySelector('#structured-data-org');
    if (!scriptOrg) {
      scriptOrg = document.createElement('script');
      scriptOrg.id = 'structured-data-org';
      scriptOrg.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptOrg);
    }
    scriptOrg.textContent = JSON.stringify(structuredDataOrg);
    
  }, []);

  // Culture & Events Data
  const cultureEvents = [
    {
      id: 1,
      title: "Annual Trip",
      description: "We have a stunning display of light, traditional clothing, and joyous celebrations that foster a strong sense of harmony and happiness among our team.",
      image: "/annual-trip.jpg"
    },
    {
      id: 2,
      title: "Festival Celebrations",
      description: "Our vibrant festival celebrations, like Holi, bring color and joy to our workplace, fostering unity and a sense of community among all team members.",
      image: "/holi-celebration.jpg"
    },
    {
      id: 3,
      title: "New Year Party",
      description: "Dcodes Technologies offers thrilling and memorable team trips that provide the ideal balance of adventure, fun, and team-building activities.",
      image: "/new-year-party.jpg"
    }
  ];

  // Infrastructure Sections
  const infrastructure = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Modern Office",
      description: "State-of-the-art workspace designed for comfort and productivity"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Networks & Servers",
      description: "High-speed internet and robust server infrastructure"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Devices",
      description: "Latest technology equipment for optimal performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Surveillance",
      description: "Advanced security systems ensuring safety and data protection"
    }
  ];

  // Perks & Benefits
  const perks = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "5 Days a Week",
      description: "Healthy work-life balance with weekends off"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Peak Environment",
      description: "Optimal working conditions for maximum productivity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fun Activities",
      description: "Regular team-building and recreational activities"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Onsite Opportunities",
      description: "Chances to work on international projects"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Rewards & Benefits",
      description: "Competitive compensation and recognition programs"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Career Growth",
      description: "Continuous learning and professional development"
    }
  ];

  // Team Values
  const teamValues = [
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "We constantly push boundaries and explore new technologies"
    },
    {
      icon: "🤝",
      title: "Collaborative Spirit",
      description: "Teamwork and open communication are at our core"
    },
    {
      icon: "🌱",
      title: "Continuous Learning",
      description: "We invest in our team's growth and skill development"
    },
    {
      icon: "💡",
      title: "Creative Freedom",
      description: "Encouraging innovative thinking and creative solutions"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero animated background (WebThreads) */}
      <HeroBackground />

      {/* Background Grid Pattern (slowly drifting) */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          animate={reduceMotion ? undefined : { backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        
        {/* Hero Section */}
        <motion.div
          className="mb-20 mt-10 text-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8 bg-black/30 backdrop-blur-sm"
          >
            <span className="text-sm font-normal tracking-wider uppercase">Life at</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
            Dcodes
            <span className="block font-extralight italic">Technologies</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl font-normal text-white/70 max-w-3xl mx-auto leading-relaxed">
            A dynamic and lively place to work where we promote a culture of creativity, teamwork, and continuous learning. 
            Our team thrives in a well-balanced setting with stimulating activities that boost innovation and team spirit.
          </motion.p>
        </motion.div>

        {/* Culture & Events Section */}
        <Reveal className="mb-32">
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Life & Culture at Dcodes</h2>
            <motion.div className="w-16 h-px bg-white/20 mb-8 origin-left" variants={lineGrow} />
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              We believe that great work happens in a great environment. Our culture is built on collaboration, 
              innovation, and making work enjoyable through various events and activities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cultureEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="border border-white/10 rounded-xl bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 overflow-hidden h-full">
                  <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <motion.div
                      className="text-4xl"
                      animate={floatAnim}
                      whileHover={{ scale: 1.3, rotate: 8 }}
                    >
                      {index === 0 && "🏰"}
                      {index === 1 && "🎨"}
                      {index === 2 && "🎉"}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-normal mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-white/70 font-normal leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Infrastructure Section */}
        <Reveal className="mb-32">
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Our Infrastructure</h2>
            <motion.div className="w-16 h-px bg-white/20 mb-8 origin-left" variants={lineGrow} />
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Cutting-edge infrastructure built for peak efficiency and innovation. Our workspace is equipped with 
              modern technologies and amenities that ensure strong and efficient project execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group cursor-default"
              >
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/20 rounded-xl text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400 transition-all duration-300"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-normal mb-3 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Perks & Benefits */}
        <Reveal className="mb-32">
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Perks of Working at Decodes</h2>
            <motion.div className="w-16 h-px bg-white/20 mb-8 origin-left" variants={lineGrow} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group cursor-default"
              >
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-xl text-blue-400 group-hover:bg-blue-400/10 group-hover:border-blue-400 transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.15 }}
                    >
                      {perk.icon}
                    </motion.div>
                    <h3 className="text-lg font-normal group-hover:text-white transition-colors duration-300">
                      {perk.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm font-normal leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
                          
        {/* Team Values */}
        <Reveal className="mb-32">
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Our Team Values</h2>
            <motion.div className="w-16 h-px bg-white/20 mb-8 origin-left" variants={lineGrow} />
          </motion.div>           
                           
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group cursor-default"
              >
                <div className="border border-white/10 rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full text-center">
                  <motion.div
                    className="text-3xl mb-4 inline-block"
                    animate={reduceMotion ? undefined : {
                      y: [0, -8, 0],
                      transition: { duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-lg font-normal mb-3 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm font-normal leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Meet Our Team Section */}
        <Reveal className="mb-20">
          <motion.div
            variants={scaleIn}
            className="border border-white/10 rounded-2xl p-12 bg-gray-900/20 backdrop-blur-sm"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-4xl font-normal mb-6 tracking-wide">Be Part of Our Team</motion.h2>
                <motion.div className="w-16 h-px bg-white/20 mb-6 origin-left" variants={lineGrow} />
                <motion.p variants={fadeUp} className="text-lg text-white/70 leading-relaxed mb-6">
                  Our team at Dcodes Technologies is the foundation of our success. We are a group of fully committed 
                  professionals including ambitious developers, creative designers, smart campaign managers, and 
                  effective project leaders.
                </motion.p>
                <motion.p variants={fadeUp} className="text-lg text-white/70 leading-relaxed mb-8">
                  Together, our specialized knowledge and unwavering dedication to quality work together to produce 
                  innovative, superior solutions. We create a friendly workplace that boosts creativity and efficiency 
                  by fostering a culture of ongoing learning and teamwork.
                </motion.p>
                <motion.div variants={fadeUp} className="inline-block" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    href="/careers" 
                    className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg bg-gray-800/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 group"
                    aria-label="View open positions at Dcodes Technologies"
                  >
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      View Open Positions
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="flex justify-center"
              >
                <motion.img 
                  src="/Team.png" 
                  alt="Our Team at Dcodes Technologies" 
                  className="rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 max-w-full h-auto"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </Reveal>

        {/* CTA Section */}
        <Reveal className="text-center py-16">
          <motion.h2 variants={fadeUp} className="text-4xl font-normal mb-6 tracking-wide">Ready to Join Our Team?</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Be part of a team that's shaping the future of technology. Explore opportunities to grow, innovate, and make an impact.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link 
                href="/careers" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg"
                aria-label="View current job openings at Dcodes Technologies"
              >
                View Current Openings
              </Link>
            </motion.div>
            <motion.a 
              href="mailto:hr@dcodestech.com" 
              className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-lg inline-block text-center"
              aria-label="Contact HR department at Dcodes Technologies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact HR
            </motion.a>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
};

export default LifeAtDecodes;