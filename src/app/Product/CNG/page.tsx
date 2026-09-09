"use client";

import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import {
    Users, MessageSquare, Calendar, FileText,
    BarChart3, CreditCard, Settings, Bell,
    Target, Shield, Zap, TrendingUp,
    Heart, Globe, Clock, Star
} from "lucide-react";
import SoftAurora from './SoftAurora';

// ============== FEATURES DATA ==============
const features = [
    {
        id: 1,
        title: "Real-time Dashboard",
        description: "Monitor sales, inventory, and customer data in real-time with interactive charts and analytics.",
        image: "/images/cng/dashboard.png",
        color: "bg-blue-500",
        icon: <BarChart3 className="w-6 h-6" />
    },
    {
        id: 2,
        title: "Customer Management",
        description: "Centralized customer database with contact details, service history, and communication logs.",
        image: "/images/cng/customer.png",
        color: "bg-blue-500",
        icon: <Users className="w-6 h-6" />
    },
    {
        id: 3,
        title: "Sales Tracking",
        description: "Track leads, quotations, and conversions with automated follow-up reminders and pipeline view.",
        image: "/images/cng/sales.png",
        color: "bg-blue-500",
        icon: <TrendingUp className="w-6 h-6" />
    },
    {
        id: 4,
        title: "Inventory Control",
        description: "Manage CNG kit inventory with stock alerts, supplier tracking, and automated reordering.",
        image: "/images/cng/inventory.png",
        color: "bg-blue-500",
        icon: <Settings className="w-6 h-6" />
    },
    {   
        id: 5,
        title: "Service Management",
        description: "Schedule installations, track service history, and manage technician assignments.",
        image: "/images/cng/service.png",
        color: "bg-blue-500",
        icon: <Calendar className="w-6 h-6" />
    },
    {
        id: 6,
        title: "Reporting & Analytics",
        description: "Generate financial reports, performance metrics, and business insights with one click.",
        image: "/images/cng/report.png",
        color: "bg-blue-500",
        icon: <FileText className="w-6 h-6" />
    },
];

// ============== MODULES DATA ==============
const modules = [
    {
        id: 1,
        title: "Customer 360° View",
        description: "Complete customer profiles with interaction history",
        icon: <Users className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 2,
        title: "Communication Hub",
        description: "Email, SMS, WhatsApp integration with templates",
        icon: <MessageSquare className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 3,
        title: "Appointment Scheduler",
        description: "Book service appointments with automated reminders",
        icon: <Calendar className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 4,
        title: "Service History",
        description: "Track all past services and maintenance records",
        icon: <FileText className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 5,
        title: "Sales Analytics",
        description: "Visual reports on sales performance and trends",
        icon: <BarChart3 className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 6,
        title: "Payment Tracking",
        description: "Monitor payments, invoices, and outstanding dues",
        icon: <CreditCard className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 7,
        title: "Notifications Center",
        description: "Smart alerts for follow-ups and important updates",
        icon: <Bell className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 8,
        title: "Custom Workflows",
        description: "Create automated processes for your business",
        icon: <Settings className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-400",
    }
];

// ============== CRM FEATURES ==============
const crmFeatures = [
    { icon: <Users className="w-5 h-5" />, text: "360° Customer View" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Multi-channel Communication" },
    { icon: <Calendar className="w-5 h-5" />, text: "Smart Appointment Scheduling" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Sales Performance Analytics" }
];

// ============== FAQ DATA ==============
const faqs = [
    {
        id: 1,
        question: "What is the Smart CNG Kit Renewal & Management System?",
        answer: "It's an intelligent ERP solution built for CNG kit businesses to manage renewals, customers, inventory, sales, and service operations from a single dashboard."
    },
    {
        id: 2,
        question: "How does customer management work in this system?",
        answer: "Every customer gets a 360° profile with contact details, service history, and communication logs, so your team always has full context before reaching out."
    },
    // {
    //     id: 3,
    //     question: "Can I track inventory and get low-stock alerts?",
    //     answer: "Yes. Inventory Control gives you real-time stock levels, supplier tracking, and automated reordering alerts so you never run short on CNG kits."
    // },
    {
        id: 4,
        question: "Does the system support service and installation scheduling?",
        answer: "Yes, you can schedule installations, track full service history, and assign technicians directly through the Service Management module."
    },
    {
        id: 5,
        question: "What kind of reports and analytics are available?",
        answer: "You get one-click financial reports, sales performance metrics, and business insights through the Reporting & Analytics module."
    },
    {
        id: 6,
        question: "Is there a setup fee to get started?",
        answer: "No setup fee — you can get started in minutes and only pay for what your business needs."
    }
];

// ============== HERO TITLE COMPONENT ==============
const HeroTitle = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* SoftAurora Background - Purple */}
            <div className="absolute inset-0 z-0">
                <SoftAurora
                    speed={0.6}
                    scale={1.5}
                    brightness={1.2}
                    color1="#7c3aed"
                    color2="#8b5cf6"
                    noiseFrequency={2.5}
                    noiseAmplitude={1}
                    bandHeight={0.5}
                    bandSpread={1}
                    octaveDecay={0.1}
                    layerOffset={0}
                    colorSpeed={1}
                    enableMouseInteraction
                    mouseInfluence={0.25}
                />
            </div>

            {/* Soft fade for better text readability */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 text-xs font-light text-blue-300 bg-blue-400/10 rounded-full border border-blue-400/20 backdrop-blur-sm tracking-wide">
                            Smart CNG Kit Renewal & Management System
                        </span>
                    </div>
                    <h1 className="text-white font-light tracking-tight drop-shadow-[0_0_20px_rgba(124,58,237,0.35)] 
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-4 leading-[1.1]">
                        Smart CNG Kit <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Renewal & Management</span> System
                    </h1>
                </div>

                <div className={`transition-all duration-1000 delay-700 mt-6 md:mt-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-white/70 text-base sm:text-lg md:text-xl text-center px-4 max-w-3xl mx-auto leading-relaxed font-light">
                        Streamline your CNG kit renewals, customer management, inventory tracking, 
                        and service operations with our intelligent ERP solution
                    </p>
                    
                    {/* CTA Buttons - Blue */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 text-sm tracking-wide">
                            Get Started
                        </button>
                        <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 text-sm tracking-wide">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

// ============== FEATURES SECTION ==============
const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [openDropdown, setOpenDropdown] = useState<number | null>(1);

    const toggleDropdown = (id: number) => {
        setOpenDropdown(openDropdown === id ? null : id);
        setActiveFeature(id - 1);
    };

    return (
        <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
                        Powerful Features for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">CNG Business</span>
                    </h2>
                    <p className="text-gray-400 text-base font-light max-w-3xl mx-auto tracking-wide">
                        Discover how our ERP system transforms your operations with intelligent modules
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Feature List */}
                    <div className="lg:w-2/5">
                        <div className="relative">
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800 hidden lg:block">
                                <div
                                    className="absolute w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 transition-all duration-500"
                                    style={{ height: `${(activeFeature + 1) * (100 / features.length)}%`, top: '0' }}
                                />
                            </div>

                            <div className="lg:hidden mb-6">
                                <div className="h-1 w-full bg-gray-800 rounded-full">
                                    <div
                                        className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                                        style={{ width: `${(activeFeature + 1) * (100 / features.length)}%` }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                {features.map((feature, index) => (
                                    <div key={feature.id} className="relative">
                                        <div className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                                            <div className={`
                                                w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                                ${activeFeature === index
                                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 border-blue-500 scale-110 shadow-lg shadow-blue-500/50'
                                                    : 'bg-black border-gray-700 hover:border-blue-400'
                                                }
                                            `}>
                                                <span className={`font-light text-sm ${activeFeature === index ? 'text-white' : 'text-gray-400'}`}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={`lg:ml-14 p-3 rounded-xl cursor-pointer transition-all duration-300 border
                                            ${activeFeature === index
                                                ? 'border-blue-500 bg-gray-900/50 shadow-lg shadow-blue-500/10'
                                                : 'border-gray-800 bg-gray-900/30 hover:bg-gray-900/50'
                                            }`}
                                            onClick={() => {
                                                toggleDropdown(feature.id);
                                                if (openDropdown !== feature.id) setActiveFeature(index);
                                            }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className={`text-base md:text-lg font-light tracking-wide transition-colors ${activeFeature === index ? 'text-blue-400' : 'text-white'}`}>
                                                    {feature.title}
                                                </h3>
                                                <button className="p-1 hover:bg-gray-800 rounded">
                                                    {openDropdown === feature.id ? (
                                                        <ChevronUp className="w-4 h-4 text-gray-400" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                                    )}
                                                </button>
                                            </div>

                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out
                                                ${openDropdown === feature.id ? 'max-h-32 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image Preview */}
                    <div className="lg:w-3/5">
                        <div className="sticky top-8">
                            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                                <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-400/20 rounded-2xl flex items-center justify-center">
                                            {features[activeFeature]?.icon}
                                        </div>
                                        <h3 className="text-lg font-light text-white mb-2 tracking-wide">{features[activeFeature]?.title}</h3>
                                        <p className="text-gray-400 text-sm font-light">{features[activeFeature]?.description}</p>
                                    </div>
                                </div>

                                <div className="p-5 border-t border-gray-800 bg-black/50">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h4 className="text-lg font-light text-white tracking-wide">{features[activeFeature]?.title}</h4>
                                            <p className="text-gray-400 text-xs font-light">Module {activeFeature + 1} of {features.length}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {features.map((_, idx) => (
                                                <div key={idx} className={`h-1 rounded-full transition-all ${activeFeature === idx ? 'w-5 bg-gradient-to-r from-blue-500 to-cyan-400' : 'w-2 bg-gray-700'}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm font-light leading-relaxed">{features[activeFeature]?.description}</p>
                                </div>
                            </div>

                            <div className="flex justify-between gap-3 mt-4 lg:hidden">
                                <button onClick={() => {
                                    const prev = activeFeature > 0 ? activeFeature - 1 : features.length - 1;
                                    setActiveFeature(prev);
                                    setOpenDropdown(features[prev].id);
                                }} className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-light text-sm">
                                    ← Previous
                                </button>
                                <button onClick={() => {
                                    const next = activeFeature < features.length - 1 ? activeFeature + 1 : 0;
                                    setActiveFeature(next);
                                    setOpenDropdown(features[next].id);
                                }} className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-light text-sm">
                                    Next →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ============== INTERACTIVE MODULES ==============
const InteractiveModules = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 px-3 py-1.5 rounded-full mb-4">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                        <span className="text-blue-400 font-light text-sm tracking-wide">Customer-Focused Modules</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
                        Everything Your <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">CRM Needs</span>
                    </h2>

                    <p className="text-base text-gray-400 font-light max-w-3xl mx-auto tracking-wide">
                        Complete customer relationship management designed specifically for CNG kit businesses
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            onMouseEnter={() => setHoveredId(module.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${module.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>

                            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-gray-700 hover:translate-y-[-2px] h-full">
                                <div className="relative mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white mb-2 transition-transform duration-300 group-hover:scale-110`}>
                                        {module.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg font-light text-white mb-2 group-hover:text-blue-400 transition-colors tracking-wide">
                                    {module.title}
                                </h3>

                                <p className="text-gray-400 text-sm font-light leading-relaxed">{module.description}</p>

                                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${module.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============== CRM CARD ==============
const CRMCard = () => {
    return (
        <div className="flex justify-center items-center py-16 px-4 bg-gradient-to-t from-black to-gray-900">
            <div className="relative w-full max-w-6xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-3 py-1.5 rounded-full mb-4">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-blue-400 font-light text-sm tracking-wide">Customer Relationship Management</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light text-white mb-3 tracking-wide">
                                Complete <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    CRM Platform
                                </span>
                            </h2>

                            <p className="text-gray-400 text-base font-light leading-relaxed">
                                Transform how you manage customer relationships with our intelligent CRM designed specifically for CNG businesses.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {crmFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">{feature.icon}</div>
                                    <span className="text-white font-light text-sm tracking-wide">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-800">
                            <div className="text-center">
                                <div className="text-2xl font-light text-white">40%</div>
                                <div className="text-xs text-gray-400 font-light">Time Saved</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-light text-white">95%</div>
                                <div className="text-xs text-gray-400 font-light">Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-light text-white">24/7</div>
                                <div className="text-xs text-gray-400 font-light">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Dashboard Preview */}
                    <div className="relative">
                        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-5">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-lg font-light text-white tracking-wide">Customer Dashboard</h3>
                                    <p className="text-gray-400 text-xs font-light">Real-time overview</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="h-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full w-3/4"></div>
                                <div className="h-2 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-full w-5/6"></div>
                                <div className="h-2 bg-gradient-to-r from-red-500 to-cyan-500 rounded-full w-1/2"></div>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                                <div className="text-3xl mb-1">📊</div>
                                <p className="text-gray-400 text-xs font-light">Dashboard Preview</p>
                                <p className="text-gray-500 text-[10px] font-light mt-1">Interactive charts and analytics</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-gray-400 text-sm font-light">
                        <span className="text-white font-light">No setup fee.</span> Get started in minutes.
                    </p>
                </div>
            </div>
        </div>
    );
};

// ============== FAQ SECTION ==============
const FAQSection = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 px-3 py-1.5 rounded-full mb-4">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                        <span className="text-blue-400 font-light text-sm tracking-wide">FAQ</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
                        Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Questions</span>
                    </h2>

                    <p className="text-base text-gray-400 font-light max-w-2xl mx-auto tracking-wide">
                        Everything you need to know about the Smart CNG Kit Renewal & Management System
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className={`rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                        ? 'border-blue-500 bg-gray-900/50 shadow-lg shadow-blue-500/10'
                                        : 'border-gray-800 bg-gray-900/30 hover:bg-gray-900/50'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <h3 className={`text-base md:text-lg font-light tracking-wide transition-colors ${isOpen ? 'text-blue-400' : 'text-white'}`}>
                                        {faq.question}
                                    </h3>
                                    <span className="shrink-0 p-1 hover:bg-gray-800 rounded">
                                        {isOpen ? (
                                            <ChevronUp className="w-4 h-4 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                        )}
                                    </span>
                                </button>

                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed px-5 pb-5">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// ============== MAIN CNG PAGE ==============
export default function CNGPage() {
    useEffect(() => {
        document.title = "CNG Solutions | Energy & Gas Services | Dcodes Technologies";
        
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', "Explore Dcodes Technologies' CNG solutions for clean energy, natural gas services, and sustainable fuel management. Innovative technology for the energy sector.");
        
        // Structured Data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "CNG Solutions",
            "name": "CNG Solutions & Clean Energy Services",
            "description": "Advanced compressed natural gas solutions for sustainable energy management",
            "provider": {
                "@type": "Organization",
                "name": "Dcodes Technologies",
                "url": "https://dcodes.com"
            }
        };
        
        let script = document.querySelector('#structured-data');
        if (!script) {
            script = document.createElement('script');
            script.id = 'structured-data';
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(structuredData);

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

    return (
        <div className="min-h-screen bg-black">
            <HeroTitle />
            <FeaturesSection />
            <InteractiveModules />
            <CRMCard />
            <FAQSection />
        </div>
    );
}