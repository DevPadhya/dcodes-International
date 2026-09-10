"use client";

import { useState, useEffect } from 'react';
import ColorBends from '@/components/ReactBit/ColorBends';
import FeatureCard from './FeatureCard';

// feature data
const featuresData = [
    {
        icon: "👨‍⚕️",
        title: "Patient Management",
        description: "Complete patient records, medical history, and treatment plans"
    },
    {
        icon: "📅",
        title: "Appointment Scheduling",
        description: "Smart booking system with doctor availability and reminders"
    },
    {
        icon: "💊",
        title: "Pharmacy & Inventory",
        description: "Medicine stock management and prescription tracking"
    },
    {
        icon: "💰",
        title: "Billing & Insurance",
        description: "Automated billing, insurance claims, and payment processing"
    },
    {
        icon: "🩺",
        title: "Doctor Portal",
        description: "Dedicated interface for doctors with patient dashboards"
    },
    {
        icon: "📊",
        title: "Analytics & Reports",
        description: "Real-time insights and performance analytics"
    },
    {
        icon: "🔒",
        title: "Data Security & Compliance",
        description: "Assure potential clients that the system meets regulatory standards like HIPAA, including features like data encryption and access controls."
    },
    {
        icon: "👥",
        title: "Human Resources",
        description: "Staff management, payroll processing, attendance tracking, and scheduling."
    },
    {
        icon: "💻",
        title: "Electronic Health Records (EHR) Integration",
        description: "Seamless integration with existing EHR systems for unified patient data management"
    }
];

// comparison data
const comparisonData = [
    { feature: 'Implementation Time', traditional: '3-6 Months', ourSolution: '2-4 Weeks' },
    { feature: 'Training Required', traditional: 'Extensive (40+ hours)', ourSolution: 'Minimal (10 hours)' },
    { feature: 'Customer Support', traditional: 'Business Hours Only', ourSolution: '24/7 Dedicated Support' },
    { feature: 'System Updates', traditional: 'Manual, Disruptive', ourSolution: 'Automatic, Zero Downtime' },
    { feature: 'Scalability', traditional: 'Limited, Hardware Dependent', ourSolution: 'Unlimited, Cloud Native' },
    { feature: 'Total Cost of Ownership', traditional: 'High, Unpredictable', ourSolution: 'Predictable Monthly/Yearly' },
    { feature: 'Data Security', traditional: 'Basic, Compliance Risks', ourSolution: 'Advanced, HIPAA/GDPR Ready' },
    { feature: 'Mobile Access', traditional: 'Limited or None', ourSolution: 'Full Mobile App Suite' },
];

// faq data
const faqData = [
    {
        question: "How long does it take to implement the Hospital ERP?",
        answer: "Most deployments go live in 2-4 weeks, compared to the 3-6 months typical of traditional hospital systems."
    },
    {
        question: "Is the system HIPAA and GDPR compliant?",
        answer: "Yes. Data is protected with encryption and access controls, and the platform is built to meet HIPAA and GDPR requirements."
    },
    {
        question: "Can it integrate with our existing EHR system?",
        answer: "Yes, the platform offers seamless Electronic Health Records (EHR) integration so patient data stays unified across systems."
    },
    {
        question: "How much training does our staff need?",
        answer: "Training is minimal — around 10 hours on average, versus 40+ hours typically required for traditional hospital software."
    },
    {
        question: "Does it handle pharmacy and billing as well as patient records?",
        answer: "Yes. Beyond patient management and scheduling, it covers pharmacy and inventory tracking, automated billing, and insurance claims processing."
    },
    {
        question: "What kind of support is available after go-live?",
        answer: "All plans include 24/7 dedicated support, automatic zero-downtime updates, and cloud deployment."
    }
];

export default function Hospital() {
    const [openFaq, setOpenFaq] = useState(0);

    // SEO Meta Tags - Adding dynamically with useEffect
    useEffect(() => {
        // Update document title
        document.title = "Hospital Management System Software | HMS ERP | Dcodes Tech";
        
        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', "Get advanced hms software for healthcare and medical institutions. Streamline operations, patient care, billing with our comprehensive healthcare ERP solution.");
        
        // Update or create keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', "hospital management system software, hospital management software, hospital information system, healthcare management system, medical practice management software, clinic management software, hospital ERP, healthcare ERP");
        
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
        ogTitle.setAttribute('content', "Hospital ERP Solutions | Healthcare Management System | Dcodes");
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', "Modern platform for managing patient records, medical operations, and healthcare services with comprehensive Hospital ERP solution.");
        
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
        ogUrl.setAttribute('content', "https://dcodes.com/hospital-erp");
        
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
        ogImage.setAttribute('content', "https://dcodes.com/og-image-hospital-erp.jpg");
        
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
        twitterTitle.setAttribute('content', "Hospital ERP Solutions | Healthcare Management");
        
        let twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (!twitterDescription) {
            twitterDescription = document.createElement('meta');
            twitterDescription.setAttribute('name', 'twitter:description');
            document.head.appendChild(twitterDescription);
        }
        twitterDescription.setAttribute('content', "Comprehensive Hospital ERP solution for modern healthcare providers including patient management, appointment scheduling, and EHR integration.");
        
        let twitterImage = document.querySelector('meta[name="twitter:image"]');
        if (!twitterImage) {
            twitterImage = document.createElement('meta');
            twitterImage.setAttribute('name', 'twitter:image');
            document.head.appendChild(twitterImage);
        }
        twitterImage.setAttribute('content', "https://dcodes.com/twitter-card-hospital.jpg");
        
        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', "https://dcodes.com/hospital-erp");
        
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
        
        // Structured Data for Hospital ERP Service
        const structuredDataService = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Hospital ERP Solutions",
            "description": "Comprehensive Hospital Enterprise Resource Planning system for healthcare providers including patient management, appointment scheduling, pharmacy inventory, and EHR integration.",
            "provider": {
                "@type": "Organization",
                "name": "Dcodes Technologies",
                "url": "https://dcodes.com",
                "logo": "https://dcodes.com/logo.png",
                "sameAs": [
                    "https://linkedin.com/company/dcodes",
                    "https://twitter.com/dcodes",
                    "https://github.com/dcodes"
                ]
            },
            "serviceType": ["Hospital Management Software", "Healthcare ERP", "Medical Software"],
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "offers": {
                "@type": "Offer",
                "description": "Comprehensive Hospital ERP solution"
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
                    "name": "Hospital ERP",
                    "item": "https://dcodes.com/hospital-erp"
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

        // FAQ Structured Data
        const structuredDataFaq = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((item) => ({
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

    return (
        <>
            <div className="relative h-screen">
                <ColorBends
                    colors={["#6366F1", "#8B5CF6", "#06B6D4"]}
                    rotation={93}
                    speed={0.1}
                    scale={1}
                    frequency={1}
                    warpStrength={0}
                    mouseInfluence={0}
                    parallax={0.5}
                    noise={0}
                    transparent
                />
            </div>

            {/* Hero Section */}
            <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center w-full max-w-6xl">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-thin text-white">
                        FOR HEALTHCARE PROVIDERS
                    </h1>
                    <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-thin text-white mb-6">
                        TRANSFORM YOUR HOSPITAL MANAGEMENT
                    </h2>
                    <p className="text-lg font-sans font-light tracking-wide sm:text-xl text-gray-400 p-4 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Modern platform for managing patient records, medical operations, and healthcare services
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-5 mt-10 px-3 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Comprehensive Healthcare Modules
                        </h2>
                        <p className="text-lg text-gray-400 my-5 max-w-3xl mx-auto">
                            End-to-end solutions covering all hospital management needs
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index}>
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Comparison Section */}
            <div className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Choose Our Hospital ERP?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Compare traditional systems with our modern healthcare solution
                        </p>
                    </div>
                    <div className="border overflow-x-auto">
                        <table className="w-full bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-400">
                            <thead>
                                <tr className="bg-gray-900">
                                    <th className="py-4 px-6 text-left text-white font-bold text-lg">Feature / Category</th>
                                    <th className="py-4 px-6 text-left text-red-400 font-bold">Traditional System</th>
                                    <th className="py-4 px-6 text-left text-green-400 font-bold">Our ERP Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700 border-gray-500 border'}>
                                        <td className="py-4 px-6 text-white font-medium">{item.feature}</td>
                                        <td className="py-4 px-6 text-gray-400">{item.traditional}</td>
                                        <td className="py-4 px-6 text-gray-300">{item.ourSolution}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-12 text-center text-gray-400 text-sm">
                        <p>All plans include 24/7 support, automatic updates, and cloud deployment</p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Everything you need to know about our Hospital ERP solution
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left"
                                        aria-expanded={isOpen}
                                        aria-controls={`hospital-faq-answer-${index}`}
                                    >
                                        <span className="text-white font-medium text-base sm:text-lg">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`shrink-0 text-2xl text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                            aria-hidden="true"
                                        >
                                            +
                                        </span>
                                    </button>
                                    <div
                                        id={`hospital-faq-answer-${index}`}
                                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}
                                    >
                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-6 pb-5">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}