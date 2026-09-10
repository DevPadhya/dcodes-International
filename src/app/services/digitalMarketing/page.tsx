"use client";
import Beams from '@/components/ReactBit/Beams';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  BarChart3, 
  Users, 
  Rocket, 
  Layers,
  Target,
  FileText,
  BarChart,
  DollarSign,
  Users as UsersIcon,
  GraduationCap,
  Sparkles,
  Calendar,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Globe,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Phone,
  MapPin,
  Clock,
  Award,
  Briefcase,
  Zap,
  Shield,
  HeartHandshake,
  Search,
  Megaphone,
  PenTool,
  Settings,
  LineChart,
  CreditCard
} from "lucide-react";

export default function DigitalMarketingSolutions() {
  const [activeService, setActiveService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Digital Marketing Services | SEO & SSM | Dcodes Technologies";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, and performance campaigns to grow your business online.");
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "digital marketing services, online marketing services, digital advertising services, seo & sem services, social media marketing services, performance marketing agency, content marketing services, ppc management services");
    
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', "width=device-width, initial-scale=1.0");
    
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', "Dcodes Technologies");
    
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
    ogTitle.setAttribute('content', "Digital Marketing Solutions | SEO, PPC, SMM | Dcodes Technologies");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "We merge creativity, data, and cutting-edge technology to deliver measurable digital growth for global brands.");
    
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
    ogUrl.setAttribute('content', "https://dcodes.com/digital-marketing");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/og-image-digital-marketing.jpg");
    
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
    twitterTitle.setAttribute('content', "Digital Marketing Solutions | Dcodes Technologies");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "Expert SEO, PPC, and social media marketing services for businesses worldwide.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-digital-marketing.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/digital-marketing");
    
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
    
    let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.setAttribute('http-equiv', 'content-language');
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.setAttribute('content', "en");
    
    // hreflang tags
    const languages = [
      { code: 'en', url: 'https://dcodes.com/digital-marketing' },
      { code: 'gu', url: 'https://dcodes.com/gu/digital-marketing' },
      { code: 'hi', url: 'https://dcodes.com/hi/digital-marketing' }
    ];

    languages.forEach(lang => {
      let hreflang = document.querySelector(`link[rel="alternate"][hreflang="${lang.code}"]`);
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.setAttribute('rel', 'alternate');
        hreflang.setAttribute('hreflang', lang.code);
        hreflang.setAttribute('href', lang.url);
        document.head.appendChild(hreflang);
      }
    });

    let xDefault = document.querySelector(`link[rel="alternate"][hreflang="x-default"]`);
    if (!xDefault) {
      xDefault = document.createElement('link');
      xDefault.setAttribute('rel', 'alternate');
      xDefault.setAttribute('hreflang', 'x-default');
      xDefault.setAttribute('href', 'https://dcodes.com/digital-marketing');
      document.head.appendChild(xDefault);
    }

    let lastModified = document.querySelector('meta[name="last-modified"]');
    if (!lastModified) {
      lastModified = document.createElement('meta');
      lastModified.setAttribute('name', 'last-modified');
      lastModified.setAttribute('content', new Date().toISOString().split('T')[0]);
      document.head.appendChild(lastModified);
    }

    let appName = document.querySelector('meta[name="application-name"]');
    if (!appName) {
      appName = document.createElement('meta');
      appName.setAttribute('name', 'application-name');
      appName.setAttribute('content', 'Dcodes Digital Marketing');
      document.head.appendChild(appName);
    }
    
    let googleBot = document.querySelector('meta[name="googlebot"]');
    if (!googleBot) {
      googleBot = document.createElement('meta');
      googleBot.setAttribute('name', 'googlebot');
      googleBot.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      document.head.appendChild(googleBot);
    }
    
    // Structured Data
    const structuredDataService = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Solutions",
      "description": "Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, and content strategy.",
      "provider": {
        "@type": "Organization",
        "name": "Dcodes Technologies",
        "url": "https://dcodes.com"
      },
      "serviceType": ["SEO Services", "PPC Advertising", "Social Media Marketing", "Content Marketing"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "price": "999",
            "priceCurrency": "USD",
            "description": "Starter Package - SEO + Social Media"
          },
          {
            "@type": "Offer",
            "price": "2499",
            "priceCurrency": "USD",
            "description": "Professional Package - SEO + PPC + Social Media"
          },
          {
            "@type": "Offer",
            "price": "4999",
            "priceCurrency": "USD",
            "description": "Enterprise Package - Full Service Suite"
          }
        ]
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
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
    
    // FAQ Structured Data
    const structuredDataFAQ = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to see results from digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO results usually appear in 3–4 months, while paid campaigns deliver leads within days of launch."
          }
        },
        {
          "@type": "Question",
          "name": "Is digital marketing expensive for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not at all — we tailor campaigns to fit your budget and goals, ensuring the highest ROI at every scale. Packages start at $999/month."
          }
        },
        {
          "@type": "Question",
          "name": "How do you measure campaign success?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track KPIs like engagement rate, conversion cost, customer lifetime value (CLV), and ROI — not just clicks."
          }
        },
        {
          "@type": "Question",
          "name": "What social media platforms do you specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in all major platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, and emerging platforms like TikTok based on your target audience."
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
    
  }, []);

  const services = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description: "Elevate your website's visibility and attract organic traffic through AI-driven keyword analysis, technical optimization, and data-backed content strategies. Our SEO experts ensure your business ranks higher on Google and other search engines, driving qualified leads to your website.",
      number: "01"
    },
    {
      id: 2,
      title: "Social Media Marketing (SMM)",
      description: "Build impactful social presence across LinkedIn, Instagram, and Facebook with personalized campaigns that connect brands to audiences globally. We create engaging content that resonates with your target audience and drives meaningful interactions.",
      number: "02"
    },
    {
      id: 3,
      title: "Content Marketing",
      description: "Craft engaging, conversion-focused stories that build authority and trust across blogs, videos, and social platforms. Our content strategy helps establish your brand as an industry leader while nurturing leads through the sales funnel.",
      number: "03"
    },
    {
      id: 4,
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Maximize ROI with intelligent PPC campaigns designed for precision targeting, real-time tracking, and cost-effective lead generation. Our certified experts manage Google Ads, Bing Ads, and social media advertising to deliver measurable results.",
      number: "04"
    }
  ];

  // NEW: Pricing Tiers Section
  const pricingTiers = [
    {
      name: "Starter",
      price: "$999",
      period: "month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "SEO Audit & Keyword Research",
        "10 Target Keywords",
        "Monthly Blog Posts (2)",
        "Social Media Management (2 platforms)",
        "Monthly Performance Report",
        "Email Support"
      ],
      cta: "Get Started",
      popular: false,
      icon: Search
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "month",
      description: "Ideal for growing businesses seeking comprehensive growth",
      features: [
        "Everything in Starter, plus:",
        "25 Target Keywords",
        "Monthly Blog Posts (4)",
        "Social Media Management (4 platforms)",
        "PPC Campaign Management",
        "Monthly Strategy Call",
        "Priority Support",
        "Conversion Rate Optimization"
      ],
      cta: "Get Started",
      popular: true,
      icon: Megaphone
    },
    {
      name: "Enterprise",
      price: "$4,999+",
      period: "month",
      description: "Custom solutions for established enterprises",
      features: [
        "Everything in Professional, plus:",
        "Unlimited Keywords",
        "Custom Content Strategy",
        "Full Social Media Suite",
        "Advanced PPC + Programmatic",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Reporting Dashboard",
        "A/B Testing & Analytics"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Rocket
    }
  ];

  // NEW: How We Work Process
  const howWeWorkSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and competition. Our team conducts comprehensive market research and creates a data-driven roadmap tailored to your unique needs.",
      icon: Target,
      duration: "Week 1-2"
    },
    {
      step: "02",
      title: "Setup & Integration",
      description: "We implement tracking pixels, set up analytics dashboards, integrate CRM systems, and configure marketing automation tools to ensure seamless data collection and campaign execution.",
      icon: Settings,
      duration: "Week 2-3"
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "Our team launches optimized campaigns across selected channels, ensuring all creative assets, ad copies, and targeting parameters are perfectly aligned with your brand voice and goals.",
      icon: Rocket,
      duration: "Week 3-4"
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "We continuously monitor performance metrics, conduct A/B testing, and make data-driven adjustments to maximize ROI. Weekly reports keep you informed of progress and insights.",
      icon: LineChart,
      duration: "Ongoing"
    },
    {
      step: "05",
      title: "Scale & Grow",
      description: "Based on proven results, we scale successful campaigns, explore new channels, and implement advanced strategies to accelerate your business growth and market dominance.",
      icon: TrendingUp,
      duration: "Month 3+"
    }
  ];

  // UPDATED: Case Studies with detailed metrics
  const caseStudies = [
    {
      metric: "400%",
      metricLabel: "Increase in Organic Traffic",
      description: "We helped a B2B SaaS company achieve 400% increase in organic traffic within 6 months through strategic SEO implementation, technical optimization, and high-quality content marketing.",
      industry: "SaaS",
      roi: "3.2x ROI",
      timeframe: "6 months",
      strategies: ["Technical SEO Audit", "Content Strategy", "Link Building", "Local SEO"]
    },
    {
      metric: "3.2x",
      metricLabel: "ROI Improvement",
      description: "AI-optimized PPC campaign for an e-commerce client resulted in 3.2x ROI improvement through precise audience targeting, ad scheduling optimization, and dynamic retargeting strategies.",
      industry: "E-commerce",
      roi: "3.2x ROI",
      timeframe: "4 months",
      strategies: ["Google Shopping Ads", "Retargeting", "Audience Segmentation", "A/B Testing"]
    },
    {
      metric: "15K+",
      metricLabel: "Qualified Leads Generated",
      description: "Integrated marketing automation across email, social, and paid channels generated 15,000+ qualified leads for a healthcare client, reducing cost per lead by 45%.",
      industry: "Healthcare",
      roi: "45% lower CPA",
      timeframe: "8 months",
      strategies: ["Multi-channel Campaign", "Lead Nurturing", "Conversion Optimization", "Analytics Integration"]
    },
    {
      metric: "187%",
      metricLabel: "Social Media Engagement",
      description: "Strategic social media campaign for a retail brand increased engagement by 187% and grew follower base by 50,000+ in 3 months through influencer partnerships and viral content.",
      industry: "Retail",
      roi: "187% engagement",
      timeframe: "3 months",
      strategies: ["Influencer Marketing", "User Generated Content", "Social Contests", "Community Management"]
    },
    {
      metric: "52%",
      metricLabel: "Reduction in CPA",
      description: "Data-driven PPC optimization reduced cost per acquisition by 52% for a financial services client while maintaining lead quality and increasing conversion rates.",
      industry: "Finance",
      roi: "52% lower CPA",
      timeframe: "5 months",
      strategies: ["Keyword Optimization", "Ad Copy Testing", "Landing Page CRO", "Bid Management"]
    }
  ];

  // SMM Features - 6 Features
  const smmFeatures = [
    {
      title: "Tailored Social Media Plans",
      description: "We create customized social media plans that support your company's goals and guarantee a consistent online presence. Every strategy is uniquely crafted based on your industry, target audience, and business objectives.",
      icon: Target
    },
    {
      title: "Paid Social Advertising",
      description: "Our professionals create and oversee focused social media ad campaigns to raise awareness, improve traffic, and produce leads while maximizing your budget for return on investment. We optimize every dollar spent.",
      icon: DollarSign
    },
    {
      title: "Influencer Partnerships",
      description: "We seek out and work with brand-consistent influencers, and use their following and reputation to boost your advertising. Influencer marketing drives authentic engagement and builds trust with your audience.",
      icon: UsersIcon
    },
    {
      title: "Content Creation and Curation",
      description: "To capture your audience, our team creates and selects interesting content such as blogs, photos, videos, and infographics. High-quality visual content increases engagement and shares across all platforms.",
      icon: FileText
    },
    {
      title: "Social Media Analytics and Reporting",
      description: "We offer thorough analytics and consistent reporting to provide you with a clear understanding of how well your social media initiatives are performing. Data-driven decisions lead to continuous improvement.",
      icon: BarChart
    },
    {
      title: "Social Media Consultation and Training",
      description: "We provide social media advice and training services to give your team the know-how to properly manage and expand your social media presence. Empower your in-house team with expert guidance.",
      icon: GraduationCap
    }
  ];

  // Hiring Models
  const hiringModels = [
    {
      title: "Fixed Price",
      description: "Choose our Fixed Prices model for projects with well-defined deliverables and scopes. With no hidden costs, this method guarantees that your project will remain within budget and schedule. It also offers upfront cost certainty.",
      icon: DollarSign,
      features: ["Well-defined deliverables", "No hidden costs", "Upfront cost certainty", "On-time delivery"],
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Dedicated Team",
      description: "Choose our Dedicated Team option to have a team of experts focus just on your project. This approach is flexible and manageable, making it perfect for long-term initiatives that need ongoing cooperation and development.",
      icon: UsersIcon,
      features: ["Team of experts", "Flexible approach", "Long-term initiatives", "Ongoing cooperation"],
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Monthly Hire Developer",
      description: "With our monthly developer model, you may hire professional developers on a contract basis, allowing you to grow your team as your needs change. This is ideal for continuing initiatives that need constant assistance and knowledge.",
      icon: Calendar,
      features: ["Contract basis", "Scale as needed", "Constant assistance", "Expert knowledge"],
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    }
  ];

  const capabilities = [
    "Advanced Analytics and Reporting",
    "Global Audience Targeting",
    "Email & Marketing Automation",
    "Professional copywriting",
    "Conversion Rate Optimization (CRO)",
    "Programmatic Advertising"
  ];

  const philosophy = [
    {
      principle: "Strategy",
      description: "Data-driven campaign planning backed by insights and clarity.",
      icon: BarChart3,
    },
    {
      principle: "Innovation",
      description: "Adopting new technologies, automation, and AI to stay ahead of trends.",
      icon: Lightbulb,
    },
    {
      principle: "Engagement",
      description: "Creating emotional and interactive experiences for your audience.",
      icon: Users,
    },
    {
      principle: "Results",
      description: "Driving measurable growth that delivers real business impact.",
      icon: Rocket,
    },
    {
      principle: "Scalability",
      description: "Designing campaigns that evolve seamlessly as your business grows.",
      icon: Layers,
    },
  ];

  const whyChooseUs = [
    "Unified marketing and technology expertise.",
    "Proven track record across 10+ global industries.",
    "AI and automation integration in every campaign.",
    "Transparent, data-backed performance reporting.",
    "Dedicated success managers for enterprise accounts."
  ];

  const industries = [
    "SaaS", "Manufacturing", "Healthcare", "Finance", "Retail", "Real Estate", "Education", "Travel", "E-commerce"
  ];

  const trustBadges = [
    "Google Partner", "Meta Certified", "ISO 9001", "Clutch Verified"
  ];

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "SEO results usually appear in 3–4 months, while paid campaigns deliver leads within days of launch. We provide regular progress reports to track your campaign's performance and make data-driven adjustments."
    },
    {
      question: "Is digital marketing expensive for small businesses?",
      answer: "Not at all — we tailor campaigns to fit your budget and goals, ensuring the highest ROI at every scale. Our flexible pricing models allow small businesses to compete with larger enterprises effectively. Packages start at $999/month."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track KPIs like engagement rate, conversion cost, customer lifetime value (CLV), and ROI — not just clicks. Our comprehensive dashboards provide real-time visibility into your campaign performance."
    },
    {
      question: "What social media platforms do you specialize in?",
      answer: "We specialize in all major platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, and emerging platforms like TikTok based on your target audience and business goals."
    },
    {
      question: "Do you offer custom digital marketing strategies?",
      answer: "Yes! Every business is unique, so we create custom strategies tailored to your specific industry, target audience, goals, and budget constraints for maximum effectiveness."
    }
  ];

  // Analytics counter simulation
  const [analytics, setAnalytics] = useState({
    impressions: 12500000,
    leads: 34700,
    conversionRate: 7.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        impressions: prev.impressions + Math.floor(Math.random() * 1000),
        leads: prev.leads + Math.floor(Math.random() * 10),
        conversionRate: 8.2 + (Math.random() - 0.5) * 0.1
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-normal antialiased">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={4}
          noiseIntensity={1.75}
          scale={0.4}
          rotation={25}
        />
      </div>

      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 50%)`
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(45deg, #0066FF 0%, #1B1C1E 100%)',
              animation: 'wave 8s ease-in-out infinite'
            }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-25 text-center relative z-10">
            <div className="mb-12">
              <div className="text-xs tracking-[0.2em] text-gray-500 mb-8 font-semibold uppercase">
                Technology Meets Marketing
              </div>
              <h1 className="text-4xl md:text-7xl font-extralight mb-12 tracking-tighter leading-none">
                Digital Marketing, 
                <br />
                <span className="font-normal bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Redefined by Technology</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
              We merge creativity, data, and cutting-edge technology to deliver measurable digital growth for global brands. 
              From startups to enterprises, our data-driven strategies drive real business results.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-xs tracking-wide font-bold text-gray-200 border border-gray-800 px-4 py-2 rounded-full">
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href={'/connect'} 
                className="group bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Campaign</span>
              </Link>
              <Link 
                href="https://portfolio.dcodestech.com/#Social%20Media"
                className="text-sm tracking-wide uppercase text-gray-400 hover:text-white transition-all duration-300 relative group"
              >
                View Success Stories
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Digital Marketing Statistics Section */}
        <section className="py-20 px-8 border-t border-gray-900 bg-gradient-to-b from-gray-900/20 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extralight mb-4">The Power of Digital Marketing</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Businesses that invest in digital marketing see significant returns. Our data-driven approach delivers measurable results across all channels.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 border border-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-400">63%</div>
                <div className="text-gray-500 text-sm mt-2">of businesses increased revenue through SEO</div>
              </div>
              <div className="p-6 border border-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-green-400">$2.5K</div>
                <div className="text-gray-500 text-sm mt-2">average ROI per $1 spent on email marketing</div>
              </div>
              <div className="p-6 border border-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">4.5B+</div>
                <div className="text-gray-500 text-sm mt-2">active social media users worldwide</div>
              </div>
              <div className="p-6 border border-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-pink-400">93%</div>
                <div className="text-gray-500 text-sm mt-2">of online experiences start with a search engine</div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8 max-w-3xl mx-auto">
              According to recent industry reports, companies that prioritize digital marketing are 2.8x more likely to experience revenue growth. 
              Our expert team leverages these trends to create campaigns that drive real business results, from increased brand awareness to measurable sales growth.
              Whether you're a startup looking to establish your online presence or an enterprise seeking to optimize existing campaigns, 
              our data-backed strategies ensure maximum return on your marketing investment.
            </p>
          </div>
        </section>

        {/* NEW: Pricing Tiers Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full mb-6">
                <CreditCard className="w-4 h-4 text-yellow-400" />
                <span className="text-xs tracking-wide text-yellow-400 uppercase font-medium">Pricing</span>
              </div>
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">
                Transparent <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Pricing Tiers</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal">
                Choose the perfect package for your business needs. All plans include dedicated support and regular reporting.
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    <div className={`bg-gradient-to-br from-gray-900/60 to-gray-800/20 border-2 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-500 h-full ${tier.popular ? 'border-yellow-500/50' : 'border-gray-800/50'}`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                          <Icon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                          <div className="mt-2">
                            <span className="text-4xl font-bold text-white">{tier.price}</span>
                            <span className="text-gray-400">/{tier.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="/connect"
                        className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                          tier.popular
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600'
                            : 'border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-white'
                        }`}
                      >
                        {tier.cta}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEW: How We Work Process Section */}
        <section className="py-32 px-8 border-t border-gray-900 bg-gradient-to-b from-gray-900/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6">
                <Settings className="w-4 h-4 text-blue-400" />
                <span className="text-xs tracking-wide text-blue-400 uppercase font-medium">Our Process</span>
              </div>
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">
                How <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">We Work</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal">
                A proven 5-step methodology to deliver exceptional results for your business
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 hidden lg:block"></div>
              
              <div className="space-y-12">
                {howWeWorkSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500">
                          <div className="text-sm text-blue-400 mb-2 font-mono">{step.duration}</div>
                          <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-xs font-bold text-blue-400">
                          {step.step}
                        </div>
                      </div>
                      
                      <div className="flex-1"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* UPDATED: Case Study Carousel with Enhanced Metrics */}
        <section className="py-20 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-xs tracking-wide text-green-400 uppercase font-medium">Case Studies</span>
              </div>
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Real Results, Real Impact</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal">
                See how we've helped businesses like yours achieve remarkable growth
              </p>
              <div className="w-16 h-px bg-white mx-auto opacity-50 mt-6"></div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/20 border border-gray-800 rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left side - Metrics */}
                  <div className="text-center lg:text-left">
                    <div className="text-6xl md:text-7xl font-bold text-green-400 mb-4">
                      {caseStudies[currentCaseStudy].metric}
                    </div>
                    <div className="text-xl text-gray-300 mb-3">
                      {caseStudies[currentCaseStudy].metricLabel}
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                      <span className="inline-flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full text-sm text-green-400">
                        <TrendingUp className="w-3 h-3" />
                        {caseStudies[currentCaseStudy].roi}
                      </span>
                      <span className="inline-flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full text-sm text-blue-400">
                        <Calendar className="w-3 h-3" />
                        {caseStudies[currentCaseStudy].timeframe}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {caseStudies[currentCaseStudy].description}
                    </p>
                    <div className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                      {caseStudies[currentCaseStudy].industry} Industry
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {caseStudies[currentCaseStudy].strategies.map((strategy, idx) => (
                        <span key={idx} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">
                          {strategy}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right side - Visual indicator */}
                  <div className="flex flex-col items-center justify-center border-l border-gray-800 pl-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">ROI Impact</div>
                      <div className="text-6xl font-bold text-green-400 mb-4">{caseStudies[currentCaseStudy].roi}</div>
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: currentCaseStudy === 0 ? '85%' : currentCaseStudy === 1 ? '75%' : currentCaseStudy === 2 ? '90%' : currentCaseStudy === 3 ? '80%' : '70%' }}
                        ></div>
                      </div>
                      <p className="text-gray-500 text-sm">vs. industry average</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 gap-4">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCaseStudy(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCaseStudy === index ? 'bg-green-400 w-6' : 'bg-gray-700'
                    }`}
                    aria-label={`View case study ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Model Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full mb-6">
                <UsersIcon className="w-4 h-4 text-blue-400" />
                <span className="text-xs tracking-wide text-blue-400 uppercase font-medium">Hiring Model</span>
              </div>
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">
                Flexible <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hiring Models</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal">
                We create High Quality Designs, Effective Websites & Smart Mobile Apps
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hiringModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${model.color} border border-gray-800/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 h-full`}>
                    <div className="flex items-start gap-5">
                      <div className="p-3 rounded-xl bg-gray-900/50 group-hover:scale-110 transition-transform duration-300">
                        <model.icon className={`w-8 h-8 ${model.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-normal mb-4 text-white group-hover:text-blue-300 transition-colors">
                          {model.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-normal text-sm mb-6">
                          {model.description}
                        </p>
                        
                        <div className="space-y-2">
                          {model.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className={`w-4 h-4 ${model.iconColor}`} />
                              <span className="text-gray-500 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Link 
                          href="/hire-developers"
                          className="inline-flex items-center gap-2 mt-6 text-sm text-gray-400 hover:text-white transition-colors group/link"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SMM Features Section - 6 Features */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-xs tracking-wide text-pink-400 uppercase font-medium">SMM Features</span>
              </div>
              <h2 className="text-5xl font-extralight mb-4 tracking-tight">
                Features of <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Social Media Marketing</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                Comprehensive social media solutions to boost your brand's online presence and drive engagement across all platforms
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smmFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-800/50 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-500 h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-pink-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Analytics Dashboard */}
        <section className="py-20 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <div className="text-4xl font-normal mb-2 text-blue-400">
                  {analytics.impressions.toLocaleString()}+
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Ad Impressions</div>
              </div>
              <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <div className="text-4xl font-normal mb-2 text-green-400">
                  {analytics.leads.toLocaleString()}+
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Leads Generated</div>
              </div>
              <div className="p-8 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <div className="text-4xl font-normal mb-2 text-purple-400">
                  {analytics.conversionRate.toFixed(1)}%
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Avg. Conversion Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Industries We Serve</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="px-6 py-3 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300 cursor-default"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Our Services</h2>
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
                  Since 2019 — Technology Meets Marketing
                </div>
                <h2 className="text-5xl font-extralight mb-12 tracking-tight leading-tight">
                  Digital<br />Marketing Pros
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                    <span className="text-sm tracking-wide text-gray-400">Certified Google & Meta Partners</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                    <span className="text-sm tracking-wide text-gray-400">ROI-Focused Campaigns</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                    <span className="text-sm tracking-wide text-gray-400">24/7 Performance Monitoring</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <p className="text-2xl font-normal text-gray-300 leading-relaxed mb-6">
                  We craft high-performance marketing ecosystems that amplify brand presence and deliver measurable outcomes.
                </p>
                <p className="text-xl font-normal text-gray-400 leading-relaxed mb-12">
                  Our approach combines creative storytelling, marketing automation, and AI-powered analytics to help enterprises grow at scale.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-start gap-4 p-6 border border-gray-900 hover:border-gray-800 transition-all duration-300">
                        <div className="w-1 h-1 bg-gray-600 rounded-full mt-3 group-hover:bg-white transition-colors duration-300" aria-hidden="true"></div>
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

        {/* Why Choose Us Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Why Choose Dcodes for Digital Marketing</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center group p-8 border border-gray-900 hover:border-gray-800 transition-all duration-500">
                  <div className="mb-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></div>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed font-normal group-hover:text-gray-300 transition-colors duration-300">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">
                Our Philosophy
              </h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
              {philosophy.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center group p-6 bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gray-800/60 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors duration-300">
                      {item.principle}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-extralight mb-12 tracking-tighter">
              Ready to Grow?
            </h2>
            <p className="text-xl text-gray-400 mb-16 font-normal leading-relaxed max-w-2xl mx-auto">
              Empower your brand to reach global audiences with scalable, data-driven marketing strategies engineered for measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <Link 
                href="/connect" 
                className="bg-white text-black px-12 py-4 text-sm tracking-wide uppercase hover:bg-gray-100 transition-all duration-500 font-medium"
              >
                Request a Quote
              </Link>
              <Link 
                href="/portfolio" 
                className="border border-gray-800 px-12 py-4 text-sm tracking-wide uppercase hover:border-gray-600 transition-all duration-300 font-medium"
              >
                View Our Portfolio
              </Link>
            </div>
            
            <div className="text-xs tracking-wide font-medium text-gray-600 uppercase">
              Digital Growth Experts • Free Consultation Available
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-8 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Frequently Asked Questions</h2>
              <div className="w-16 h-px bg-white mx-auto opacity-50"></div>
            </div>
            
            <div className="space-y-px">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-950 border border-gray-900">
                  <button
                    className="w-full text-left p-8 hover:bg-black transition-all duration-300 flex items-center justify-between group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
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
                    <div className="px-8 pb-8 border-t border-gray-900">
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

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
      `}</style>
    </div>
  );
}