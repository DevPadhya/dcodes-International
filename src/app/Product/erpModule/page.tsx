"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState, useEffect } from 'react';
import Threads from "@/components/ReactBit/Threads";
import {
  Users,
  Wrench,
  Award,
  Target,
  Store,
  BarChart3,
  UserCheck,
  FileText,
  ShoppingCart,
  Settings,
  CheckCircle,
  DollarSign,
  Headphones,
  UserCog,
  ChevronDown,
  Zap,
  Shield,
  Smartphone,
  Link,
  Cloud,
  ArrowRight,
  Factory,
  ShoppingBag,
  Heart,
  Building,
  Home,
  Server
} from 'lucide-react';

const PremiumERPProducts = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // SEO Meta Tags - Adding dynamically with useEffect
  useEffect(() => {
    // Update document title
    document.title = "ERP Development Company | Custom ERP - Dcodes Technologies";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Professional ERP  development company offering custom ERP solutions, business automation, and scalable enterprise resource planning systems for global clients.");
    
    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "ERP software development company, ERP software development services, enterprise resource planning software, custom ERP solutions, cloud ERP solutions, business automation software, ERP implementation services, ERP development company");
    
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
    ogTitle.setAttribute('content', "Premium ERP Solutions | Enterprise Resource Planning Software | Dcodes");
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', "An all-in-one ERP ecosystem designed to unify your operations, boost productivity, and drive data-driven decision-making across every department.");
    
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
    ogUrl.setAttribute('content', "https://dcodes.com/erp-products");
    
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
    ogImage.setAttribute('content', "https://dcodes.com/og-image-erp-products.jpg");
    
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
    twitterTitle.setAttribute('content', "Premium ERP Solutions | Dcodes Technologies");
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', "14+ integrated business modules for enterprise resource planning and management.");
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-erp-products.jpg");
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', "https://dcodes.com/erp-products");
    
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
    
    // Structured Data for Software Application
    const structuredDataApp = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Dcodes ERP Suite",
      "description": "Comprehensive enterprise resource planning software with 14+ integrated modules for business management",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android, Windows, macOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Customer Relationship Management",
        "Accounting & Finance",
        "Human Resources",
        "Inventory Management",
        "Project Management",
        "Production Planning",
        "Quality Control",
        "Sales Management"
      ],
      "publisher": {
        "@type": "Organization",
        "name": "Dcodes Technologies",
        "url": "https://dcodes.com"
      }
    };
    
    let scriptApp = document.querySelector('#structured-data-app');
    if (!scriptApp) {
      scriptApp = document.createElement('script');
      scriptApp.id = 'structured-data-app';
      scriptApp.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptApp);
    }
    scriptApp.textContent = JSON.stringify(structuredDataApp);
    
    // Structured Data for Product Page
    const structuredDataProduct = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "ERP Business Suite",
      "description": "All-in-one ERP ecosystem designed to unify operations and boost productivity",
      "brand": {
        "@type": "Brand",
        "name": "Dcodes Technologies"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "125"
      }
    };
    
    let scriptProduct = document.querySelector('#structured-data-product');
    if (!scriptProduct) {
      scriptProduct = document.createElement('script');
      scriptProduct.id = 'structured-data-product';
      scriptProduct.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptProduct);
    }
    scriptProduct.textContent = JSON.stringify(structuredDataProduct);
    
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
          "name": "ERP Products",
          "item": "https://dcodes.com/erp-products"
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
        "contactType": "customer service",
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

    // FAQ Structured Data
    const structuredDataFaq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    let scriptFaq = document.querySelector('#structured-data-faq');
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'structured-data-faq';
      scriptFaq.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(structuredDataFaq);
    
  }, []);

  const stats = [
    { value: 14, suffix: "+", label: "fully integrated business modules" },
    { value: 100, suffix: "+", label: "productivity-enhancing features" },
    { value: 24, suffix: "/7", label: "support and maintenance" },
    { value: 99.9, suffix: "%", label: "Cloud-based, scalable architecture" },
  ];

  const industries = [
    { icon: Factory, name: "Manufacturing", description: "Streamline production and inventory control." },
    { icon: ShoppingBag, name: "Retail & Distribution", description: "Optimize supply chains and customer experience." },
    { icon: Heart, name: "Healthcare", description: "Simplify records, billing, and compliance." },
    { icon: Building, name: "Finance & Banking", description: "Strengthen governance and data accuracy." },
    { icon: Home, name: "Real Estate", description: "Manage assets, projects, and client relations." },
    { icon: Server, name: "SaaS & IT Services", description: "Integrate billing, HR, and support in one platform." }
  ];

  const whyChoose = [
    "100% Cloud-Based and Scalable Architecture",
    "Unified Platform for Finance, Operations, HR & CRM",
    "Proven ROI and Rapid Deployment",
    "Customizable Modules for Any Industry",
    "24/7 Expert Support with SLA-Backed Uptime Guarantee"
  ];

  const coreModules = [
    {
      id: 'crm',
      name: 'CRM',
      icon: Users,
      title: 'Customer Relationship Management',
      description: 'Complete customer lifecycle management from lead generation to retention',
      features: ['Lead Management', 'Contact Database', 'Sales Pipeline', 'Customer Support', 'Email Integration', 'Follow-up Automation']
    },
    {
      id: 'tools',
      name: 'TOOLS',
      icon: Wrench,
      title: 'Business Tools Suite',
      description: 'Essential productivity tools for daily business operations',
      features: ['Task Management', 'Document Scanner', 'Barcode Generator', 'QR Code Scanner', 'File Converter', 'Backup Tools']
    },
    {
      id: 'certificate',
      name: 'CERTIFICATE',
      icon: Award,
      title: 'Certificate Management',
      description: 'Digital certificate creation, validation and management system',
      features: ['Certificate Generation', 'Digital Signatures', 'Validation System', 'Template Library', 'Bulk Processing', 'Security Compliance']
    },
    {
      id: 'project',
      name: 'PROJECT',
      icon: Target,
      title: 'Project Management',
      description: 'End-to-end project planning, execution and monitoring',
      features: ['Task Assignment', 'Timeline Management', 'Resource Allocation', 'Progress Tracking', 'Team Collaboration', 'Milestone Tracking']
    },
    {
      id: 'store',
      name: 'STORE',
      icon: Store,
      title: 'Store Management',
      description: 'Comprehensive retail and inventory management solution',
      features: ['POS System', 'Inventory Control', 'Stock Management', 'Sales Analytics', 'Customer Database', 'Multi-location Support']
    },
    {
      id: 'account',
      name: 'ACCOUNT',
      icon: BarChart3,
      title: 'Accounting & Finance',
      description: 'Complete financial management and accounting solution',
      features: ['General Ledger', 'Accounts Payable/Receivable', 'Financial Reporting', 'Tax Management', 'Budget Planning', 'Audit Trail']
    },
    {
      id: 'hr',
      name: 'HR',
      icon: UserCheck,
      title: 'Human Resources',
      description: 'Complete workforce management and HR operations',
      features: ['Employee Database', 'Payroll Management', 'Attendance Tracking', 'Performance Reviews', 'Recruitment', 'Training Management']
    },
    {
      id: 'cms',
      name: 'CMS',
      icon: FileText,
      title: 'Content Management System',
      description: 'Digital content creation, management and publishing platform',
      features: ['Content Creation', 'Media Library', 'SEO Tools', 'Version Control', 'User Permissions', 'Multi-site Management']
    },
    {
      id: 'purchase',
      name: 'PURCHASE',
      icon: ShoppingCart,
      title: 'Purchase Management',
      description: 'Streamlined procurement and supplier management system',
      features: ['Purchase Orders', 'Supplier Management', 'RFQ Processing', 'Approval Workflow', 'Cost Analysis', 'Delivery Tracking']
    },
    {
      id: 'production',
      name: 'PRODUCTION',
      icon: Settings,
      title: 'Production Planning',
      description: 'Manufacturing and production optimization system',
      features: ['Production Scheduling', 'Resource Planning', 'Work Orders', 'Quality Control', 'Capacity Management', 'Cost Tracking']
    },
    {
      id: 'qc',
      name: 'QC',
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Comprehensive quality assurance and testing management',
      features: ['Quality Standards', 'Inspection Checklists', 'Test Management', 'Non-conformance Tracking', 'Corrective Actions', 'Compliance Reports']
    },
    {
      id: 'sales',
      name: 'SALES',
      icon: DollarSign,
      title: 'Sales Management',
      description: 'Complete sales process automation and performance tracking',
      features: ['Sales Orders', 'Quotation Management', 'Price Lists', 'Commission Tracking', 'Sales Analytics', 'Customer Portal']
    },
    {
      id: 'service',
      name: 'SERVICE',
      icon: Headphones,
      title: 'Service Management',
      description: 'Customer service and support ticket management system',
      features: ['Ticket Management', 'SLA Tracking', 'Knowledge Base', 'Service Scheduling', 'Field Service', 'Customer Feedback']
    },
    {
      id: 'reception',
      name: 'RECEPTION',
      icon: UserCog,
      title: 'Reception Management',
      description: 'Front desk operations and visitor management system',
      features: ['Visitor Registration', 'Appointment Scheduling', 'ID Card Printing', 'Security Alerts', 'Meeting Room Booking', 'Guest Analytics']
    },
    {
      id: 'AI Insights',
      name: 'AI Insights',
      icon: BarChart3,
      title: 'AI Insights',
      description: 'Predict trends, manage risks, and forecast demand with built-in AI modules.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Machine Learning Models', 'Data Visualization', 'Automated Reporting', 'Custom Dashboards']
    }
  ];

  const features = [
    { title: 'Cloud Architecture', icon: Cloud, desc: 'Secure, reliable, and accessible from any device.' },
    { title: 'Real-time Analytics', icon: BarChart3, desc: 'Make faster, smarter decisions with advanced data insights.' },
    { title: 'Mobile First', icon: Smartphone, desc: 'Access your ERP on the go optimized for all devices.' },
    { title: 'API Integration', icon: Link, desc: 'Seamlessly connect with third-party apps and platforms.' },
    { title: 'Advanced Security & Compliance', icon: Shield, desc: 'Multi-layer encryption and user-role control.' },
    { title: 'Performance Optimized', icon: Zap, desc: 'Optimized architecture for instant processing speed.' }
  ];

  const faqs = [
    {
      question: "What is included in the Dcodes ERP Suite?",
      answer: "The suite includes 14+ integrated modules covering CRM, Accounting, HR, Store, Purchase, Production, Quality Control, Sales, Service, Reception, and AI Insights, all on one unified cloud platform."
    },
    {
      question: "Can the ERP be customized for my industry?",
      answer: "Yes. The modules are fully customizable and have been deployed across Manufacturing, Retail, Healthcare, Finance, Real Estate, and SaaS/IT industries."
    },
    {
      question: "Is the ERP cloud-based or do I need on-premise servers?",
      answer: "It's 100% cloud-based with a scalable architecture, so you can access it from the web, mobile, or desktop without managing your own servers."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Deployment is designed to be rapid thanks to pre-built modules — exact timelines depend on how many modules and integrations you need, which our sales team can scope with you."
    },
    {
      question: "What kind of support is available after go-live?",
      answer: "We provide 24/7 expert support with an SLA-backed uptime guarantee, along with ongoing maintenance."
    },
    {
      question: "Does the ERP integrate with other tools we already use?",
      answer: "Yes, API integration lets the ERP connect seamlessly with third-party apps and platforms you're already running."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Threads
          amplitude={1.5}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-tight">
                <span className="text-gray-400">Empowering Enterprises</span>
                <br />
                <span className="text-white">with Smart ERP Innovation</span>
              </h1>

              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" aria-hidden="true"></div>

              <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-3xl mx-auto leading-relaxed">
                An all-in-one ERP ecosystem designed to unify your operations, boost productivity, and drive data-driven decision-making.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a
                href="https://calendly.com/sales-dcodestechnologies/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-48 sm:w-52 h-14 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="Start free trial of ERP software"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>

              <a
                href="https://youtu.be/z_WMlNtK0ac?si=q7UX27Mcp0_oUuy-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 sm:w-52 h-14 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
                aria-label="Watch ERP software demo video"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" aria-hidden="true">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-normal text-white">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-gray-500 text-xs uppercase tracking-wider font-normal">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">Industries Served</h2>
            <p className="text-xl text-gray-400 font-normal max-w-2xl mx-auto">
              Tailored ERP Solutions for Every Industry
            </p>
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
              Our modular system adapts to your unique workflows helping organizations across diverse sectors achieve operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="group border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-white/5 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-white/70" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-medium text-white mb-2">{industry.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            Trusted by brands across Manufacturing <span className="mx-1.5" aria-hidden="true">•</span>
            Finance <span className="mx-1.5" aria-hidden="true">•</span>
            Healthcare <span className="mx-1.5" aria-hidden="true">•</span>
            IT <span className="mx-1.5" aria-hidden="true">•</span>
            Retail
          </p>
        </div>
      </section>

      {/* Why Choose Our ERP Module Section */}
      <section className="py-24 px-6 border-t border-gray-800 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">Why Choose Our ERP Module</h2>
              <p className="text-xl text-gray-400 font-normal mb-8">
                Driving Digital Transformation for the Modern Enterprise
              </p>

              <div className="space-y-4">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-400 mt-8 leading-relaxed">
                At Dcodes, we don't just implement ERP systems we build future-ready ecosystems that empower enterprises to grow smarter, faster, and stronger.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-2">Enterprise Ready</h3>
                  <p className="text-gray-400">Scalable solutions for businesses of all sizes</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-normal text-white">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-normal text-white">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-normal text-white">100%</div>
                    <div className="text-gray-400 text-sm">Cloud Based</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-normal text-white">14+</div>
                    <div className="text-gray-400 text-sm">Modules</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">Core Modules</h2>
            <p className="text-xl text-gray-400 font-normal">Comprehensive solutions for every business need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {coreModules.map((module) => {
              const IconComponent = module.icon;
              const isActive = activeModule === module.id;

              return (
                <motion.div
                  key={module.id}
                  className={`group cursor-pointer border border-gray-800 rounded-xl p-6 transition-all duration-500 hover:border-gray-600 ${isActive ? 'border-white/30 bg-white/5' : 'hover:bg-white/5'
                    }`}
                  onClick={() => setActiveModule(isActive ? null : module.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        <IconComponent className="w-5 h-5 text-white/70" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">{module.name}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{module.title}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isActive ? 'rotate-180 text-white' : ''
                        }`}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-normal">
                    {module.description}
                  </p>

                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="border-t border-gray-800 pt-4">
                      <h4 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">Features</h4>
                      <div className="space-y-2">
                        {module.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-white/40 rounded-full" aria-hidden="true"></div>
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mt-4">
                    {module.features.length} features included
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">Built for Performance. Designed for Growth.</h2>
            <p className="text-xl text-gray-400 font-normal max-w-2xl mx-auto">
              Our ERP solution delivers enterprise-grade features that scale with your business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-white/5 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-white/60" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400 font-normal leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">Platforms</h2>
            <p className="text-xl text-gray-400 font-normal">Access your business suite anywhere, anytime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group border border-gray-800 rounded-xl p-8 hover:border-gray-600 hover:bg-white/5 transition-all duration-500">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" aria-label="Web platform" aria-hidden="true">🌐</div>
              <h3 className="text-xl font-normal text-white mb-3">Web</h3>
              <p className="text-gray-400 font-normal">Full-featured browser interface</p>
            </div>

            <div className="group border border-gray-800 rounded-xl p-8 hover:border-gray-600 hover:bg-white/5 transition-all duration-500">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" aria-label="Mobile platform" aria-hidden="true">📱</div>
              <h3 className="text-xl font-normal text-white mb-3">Mobile</h3>
              <p className="text-gray-400 font-normal">Native iOS & Android apps</p>
            </div>

            <div className="group border border-gray-800 rounded-xl p-8 hover:border-gray-600 hover:bg-white/5 transition-all duration-500">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" aria-label="Desktop platform" aria-hidden="true">💻</div>
              <h3 className="text-xl font-normal text-white mb-3">Desktop</h3>
              <p className="text-gray-400 font-normal">Cross-platform desktop apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 font-normal">Answers to common questions about our ERP suite</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <motion.div
                  key={index}
                  className={`border border-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:border-gray-600 ${isActive ? 'border-white/30 bg-white/5' : ''
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    onClick={() => setActiveFaq(isActive ? null : index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180 text-white' : ''
                        }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed px-6 pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-normal text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 font-normal max-w-2xl mx-auto">
              Discover how our ERP system can unify your processes and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="group px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="Get started with ERP software"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button 
                className="px-8 py-4 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all duration-300"
                aria-label="Contact sales for ERP software"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-normal text-sm">© 2025 Business Suite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PremiumERPProducts;