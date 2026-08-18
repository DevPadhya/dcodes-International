"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Ticket,
  MessageCircle,
  CheckCircle,
  Clock,
  Smartphone,
  Wrench,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";
import SlicedWaves from "./SlicedWaves";

export default function TicketPage() {
  const whatsappNumber = "+919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "Ticket System | Smart IT Helpdesk & Support | Dcodes Tech";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Create support tickets for device repairs. 24/7 IT helpdesk system with instant ticket generation and real-time status updates for  laptops, Desk, and more.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "WhatsApp ticket system, IT helpdesk, device repair service, support ticket system, WhatsApp support, repair tracking, smartphone repair, laptop repair, customer support system");
    
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
    ogTitle.setAttribute('content', "WhatsApp Ticket System | Smart IT Helpdesk | Dcodes");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "Create support tickets via WhatsApp for device repairs. No app required — just send a message and get instant ticket generation.");
    
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
    ogUrl.setAttribute('content', "https://dcodes.com/ticket-system");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/og-image-ticket-system.jpg");
    
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
    twitterTitle.setAttribute('content', "WhatsApp Ticket System | Dcodes");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "24/7 IT helpdesk and device repair support via WhatsApp. Quick ticket creation and real-time updates.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-ticket-system.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/ticket-system");
    
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
    
    // Structured Data for Service
    const structuredDataService = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "WhatsApp Ticket System",
      "description": "IT helpdesk and device repair support system using WhatsApp for ticket creation and tracking",
      "provider": {
        "@type": "Organization",
        "name": "Dcodes Technologies",
        "url": "https://dcodes.com"
      },
      "serviceType": "Customer Support System",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "contactOption": "WhatsApp",
        "telephone": "+919876543210",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
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
          "name": "Ticket System",
          "item": "https://dcodes.com/ticket-system"
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
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressRegion": "Gujarat"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "info@dcodestech.com",
        "telephone": "+91-6353-653-977"
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
    
  }, []);

  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Message",
      description: "Send 'Hello' to our WhatsApp number",
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Auto Ticket Created",
      description: "Your ticket will be automatically generated",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Device Details",
      description: "Send device issue and model information",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Get Updates",
      description: "Repair status will be sent via WhatsApp",
    },
  ];

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp Integration",
      description: "No app download required",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Available",
      description: "Create tickets anytime",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Response",
      description: "Quick confirmation",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi User",
      description: "Admin & User both",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Repair Tracking",
      description: "Track status easily",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure",
      description: "Safe & private data",
    },
  ];

  const deviceTypes = [
    "📱 Smartphones (iPhone, Samsung, OnePlus)",
    "💻 Laptops & Computers",
    "📟 Tablets",
    "🎧 Headphones",
    "⌚ Smartwatches",
    "🖨️ Printers",
  ];

  const instructions = [
    "Your name and contact number",
    "Device model and brand",
    "Clear issue description",
    "Device photo (optional)",
  ];

  const stats = [
    { icon: <Ticket className="w-6 h-6" />, value: "2,400+", label: "Tickets Resolved" },
    { icon: <Clock className="w-6 h-6" />, value: "< 15 min", label: "Avg. Response Time" },
    { icon: <Users className="w-6 h-6" />, value: "1,800+", label: "Happy Customers" },
    { icon: <Star className="w-6 h-6" />, value: "4.8/5", label: "Customer Rating" },
  ];

  const faqs = [
    {
      q: "Do I need to install any app to raise a ticket?",
      a: "No. Everything runs on WhatsApp — just send a message to our number and your ticket is created automatically.",
    },
    {
      q: "How will I know the status of my repair?",
      a: "You'll get real-time updates directly on WhatsApp as your device moves through each repair stage.",
    },
    {
      q: "Is my data safe?",
      a: "Yes. We only collect what's needed to process your repair, and your information is never shared with third parties.",
    },
    {
      q: "What if my device isn't listed?",
      a: "Send us a message anyway with your device details — we support most electronics and will confirm if we can help.",
    },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <SlicedWaves
            color1="#8B5CF6"
            color2="#6366F1"
            color3="#06B6D4"
            columns={14}
            rows={8}
            barThickness={0.1}
            speed={0.35}
            travel={0.7}
            waveSpread={0.9}
            rowOffset={1}
            softness={0.05}
            glow={0}
            brightness={1}
            contrast={1}
            opacity={0.5}
            orientation="horizontal"
            alternate={false}
            mouseInteraction
            mouseStrength={1}
            mouseRadius={0.3}
            grain
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Ticket className="w-4 h-4 text-purple-400" />
            <span className="text-xs uppercase tracking-widest text-white/80">
              Smart Helpdesk System
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">
            Dcodes Smart IT
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Helpdesk & Service
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Ticket System
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Create a ticket via WhatsApp for any device repair. Updates will be sent directly on WhatsApp.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://upsolvix.com/"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-8 py-4 rounded text-lg font-medium shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              aria-label="Go to landing page"
            >
          Get More Dettils
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 py-4 rounded text-lg backdrop-blur-md transition-all duration-300 w-full sm:w-auto justify-center"
              aria-label="Read more about how it works"
            >
              Read More
            </a>
          </div>

          <p className="text-sm text-white/40 mt-4">
            Fast, reliable & secure device repair support
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900 rounded-xl text-center border border-white/5 hover:border-white/20 transition-colors duration-300"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p className="text-white/60 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl text-center mb-12">Features</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900 rounded-xl border border-white/5 hover:border-white/20 transition-colors duration-300"
            >
              <div className="text-blue-400 mb-3">{f.icon}</div>
              <h3>{f.title}</h3>
              <p className="text-white/60 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMBINED SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl mb-4">We Repair All Devices</h2>
            <p className="text-white/60 mb-6">
              We handle all types of repairs.
            </p>

            <ul className="space-y-3">
              {deviceTypes.map((d, i) => (
                <li key={i} className="flex gap-2 text-white/70">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl">What to Send on WhatsApp</h3>
            </div>

            <ul className="space-y-4">
              {instructions.map((ins, i) => (
                <li key={i} className="flex gap-3 text-white/70">
                  <span className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-xs text-blue-400">
                    {i + 1}
                  </span>
                  {ins}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-6 bg-gray-900/50 rounded-2xl border border-white/5 hover:border-blue-400/30 transition-colors duration-300"
            >
              <div className="text-blue-400 mb-3 flex justify-center">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-semibold text-white">{s.value}</div>
              <div className="text-white/50 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-white/50 text-center mb-12">
          Still unsure? Here's what people usually ask before raising a ticket.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <span
                    className={`text-blue-400 text-xl leading-none transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 border-t border-white/10">
        <h2 className="text-3xl mb-4">Ready to Get Started?</h2>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-full mt-4 transition"
          aria-label="Create support ticket on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          Create Ticket
        </a>
      </section>

    </div>
  );
}