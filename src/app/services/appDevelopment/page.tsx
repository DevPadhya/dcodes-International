"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Android } from "@/components/magicui/android";
import { Badge } from "@/components/ui/badge";
import LaserFlow from "@/components/ui/LaserFlow";
import { Card } from "@/components/ui/card";
import {
  Code,
  Zap,
  Star,
  ArrowRight,
  Check,
  Truck,
  BookOpen,
  Heart,
  CreditCard,
  Clock,
  Map,
  Database,
  Server,
  MessageCircle,
  Fuel,
  Users,
  DollarSign,
  ClipboardList,
  Settings,
  Package,
  CheckCircle
} from "lucide-react";
import TestimonialsSection from "./TestimonialsSection";
import {
  SiFlutter,
  SiReact,
  SiFirebase,
  SiKotlin,
  SiSwift,
  SiAwsamplify,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import Link from "next/link";

const SITE = "https://www.dcodestech.com";
// ⚠️ Aa page nu real route (sitemap ma "/services/appDevelopment" che). 301 migration vakhte badlavo.
const PAGE_PATH = "/services/appDevelopment";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const PAGE_TITLE = "Mobile App Development Company | iOS & Android";
const PAGE_DESC =
  "Customer-facing and internal mobile apps from Dcodes Technologies, scoped around your users and goals. Share your idea and get a plan and quote.";
const PORTFOLIO_URL = "https://portfolio.dcodestech.com/#Mobile";

const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

// Fallback: if any <img> in the 'What We Deliver' cards is broken/missing, show a vector icon instead
const DELIVER_ICON_CSS = `
/* "What We Deliver" cards: broken images ni jagya e vector icons */
img[alt^="build native" i],
img[alt^="build scalable" i],
img[alt^="build high" i] {
  box-sizing: border-box;
  width: 56px !important;
  height: 56px !important;
  min-width: 56px;
  padding: 10px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid rgba(34, 211, 238, 0.2);
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(37, 99, 235, 0.15));
}

/* native: phone */
img[alt^="build native" i] {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none'%3E%3Crect x='13' y='4' width='22' height='40' rx='5' stroke='%2322d3ee' stroke-width='2.5'/%3E%3Crect x='17' y='14' width='14' height='5' rx='1.5' fill='%2322d3ee' opacity='.8'/%3E%3Crect x='17' y='22' width='6' height='6' rx='1.5' fill='%233b82f6' opacity='.5'/%3E%3Crect x='25' y='22' width='6' height='6' rx='1.5' fill='%2322d3ee' opacity='.4'/%3E%3Cpath d='M19 35l3.5 3.5L29 32' stroke='%2322d3ee' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

/* scalable: layers */
img[alt^="build scalable" i] {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none'%3E%3Cpath d='M24 6l17 9-17 9-17-9z' stroke='%233b82f6' stroke-width='2.5' stroke-linejoin='round'/%3E%3Cpath d='M7 24l17 9 17-9' stroke='%238b5cf6' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' opacity='.8'/%3E%3Cpath d='M7 33l17 9 17-9' stroke='%238b5cf6' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' opacity='.5'/%3E%3C/svg%3E");
}

/* high-performance: speedometer */
img[alt^="build high" i] {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none'%3E%3Cpath d='M7 34a17 17 0 1 1 34 0' stroke='%238b5cf6' stroke-width='2.5' stroke-linecap='round'/%3E%3Cpath d='M24 34l8-12' stroke='%23ec4899' stroke-width='2.5' stroke-linecap='round'/%3E%3Ccircle cx='24' cy='34' r='3' fill='%238b5cf6'/%3E%3C/svg%3E");
}
`;

const faqs = [
  {
    question: "Which platform should I choose for my app?",
    answer: "It depends on your target audience, budget, and performance needs. We'll help you decide between native, cross-platform, or hybrid based on your goals."
  },
  {
    question: "Do you build for iOS, Android or both?",
    answer: "We build native iOS and Android apps, and cross-platform apps with Flutter and React Native, depending on what suits your project."
  },
  {
    question: "How much does a mobile app cost?",
    answer: "Scope decides the cost. We give a written range after a short discovery call."
  },
  {
    question: "How long does mobile app development take?",
    answer: "Typically between 4-12 weeks depending on app complexity, platform, and feature set."
  },
  {
    question: "Do you handle App Store submissions?",
    answer: "Yes — we handle everything from compliance to submission, and provide support for future updates and releases."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Mobile App Development",
      serviceType: "Mobile Application Development",
      url: PAGE_URL,
      description:
        "Customer-facing and internal mobile apps for iOS and Android, built natively or cross-platform with Flutter and React Native.",
      provider: { "@id": `${SITE}/#organization` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mobile App Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Native iOS Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Native Android Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Platform Development" } }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Dcodes Technologies",
      url: SITE,
      logo: `${SITE}/logo.png`
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Mobile App Development", item: PAGE_URL }
      ]
    }
  ]
};

// Small vector icons for the "What We Deliver" cards (replaces the missing image)
const DeliverIcon = ({ type }: { type: "native" | "scalable" | "performance" }) => {
  return (
    <div
      className="relative flex-shrink-0 w-14 h-14 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 flex items-center justify-center"
      aria-hidden="true"
    >
      {type === "native" && (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="di-nat" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <rect x="13" y="4" width="22" height="40" rx="5" stroke="url(#di-nat)" strokeWidth="2.5" />
          <rect x="20" y="7.5" width="8" height="2" rx="1" fill="#22d3ee" opacity="0.7" />
          <rect x="17" y="14" width="14" height="5" rx="1.5" fill="url(#di-nat)" opacity="0.8" />
          <rect x="17" y="22" width="6" height="6" rx="1.5" fill="#22d3ee" opacity="0.4" />
          <rect x="25" y="22" width="6" height="6" rx="1.5" fill="#3b82f6" opacity="0.4" />
          <path d="M19 35l3.5 3.5L29 32" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}

      {type === "scalable" && (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="di-sca" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M24 6l17 9-17 9-17-9z" stroke="url(#di-sca)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M7 24l17 9 17-9" stroke="url(#di-sca)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
          <path d="M7 33l17 9 17-9" stroke="url(#di-sca)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      )}

      {type === "performance" && (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="di-per" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path d="M7 34a17 17 0 1 1 34 0" stroke="url(#di-per)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 34l8-12" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="34" r="3" fill="#8b5cf6" />
          <path d="M12 24l2 1.2M24 12v2.6M36 24l-2 1.2" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      )}
    </div>
  );
};

// Tech Stack Logos Component
const TechStack = () => {
  const techStack = [
    { name: "Flutter", color: "#02569B", Icon: SiFlutter },
    { name: "React Native", color: "#61DAFB", Icon: SiReact },
    { name: "Firebase", color: "#FFCA28", Icon: SiFirebase },
    { name: "Kotlin", color: "#7F52FF", Icon: SiKotlin },
    { name: "Swift", color: "#FA7343", Icon: SiSwift },
    { name: "AWS Amplify", color: "#FF9900", Icon: SiAwsamplify },
    { name: "Node.js", color: "#339933", Icon: SiNodedotjs },
    { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  ];

  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-b from-gray-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-normal mb-12 text-gray-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Built With Modern Technologies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${tech.color}20` }}
                aria-hidden="true"
              >
                <tech.Icon className="text-3xl" style={{ color: tech.color }} />
              </div>
              <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Industry Use Cases Component
const IndustryUseCases = () => {
  const industries = [
    { icon: Truck, title: "Logistics & Supply Chain", description: "Real-time tracking and inventory management solutions" },
    { icon: BookOpen, title: "EdTech Platforms", description: "Interactive learning and classroom management apps" },
    { icon: Heart, title: "Healthcare Solutions", description: "Patient care, telemedicine, and health monitoring apps" },
    { icon: CreditCard, title: "Fintech & Wallets", description: "Secure payment processing and financial management" },
    { icon: Clock, title: "On-Demand Services", description: "Service booking and delivery management platforms" },
    { icon: Map, title: "Travel & Booking Apps", description: "Flight, hotel, and experience booking solutions" }
  ];

  return (
    <motion.section
      className="py-10 px-8 border-t border-gray-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
            Industry Solutions
          </Badge>
          <h2 className="text-5xl font-extralight mb-6 tracking-tight">Apps We Build For</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal">
            Tailored mobile solutions for diverse industry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 hover:border-cyan-500/30 transition-all duration-300 h-full">
                <div className="flex flex-col items-start">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-normal mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-normal">{industry.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Development Process Component
const DevelopmentProcess = () => {
  const processSteps = [
    { step: "Discovery", icon: "🔍", description: "Requirement analysis & planning" },
    { step: "UX/UI Design", icon: "🎨", description: "Wireframing & prototype design" },
    { step: "Development", icon: "⚙️", description: "Agile development & coding" },
    { step: "QA Testing", icon: "🧪", description: "Quality assurance & testing" },
    { step: "App Store Launch", icon: "🚀", description: "Submission & deployment" },
    { step: "Support", icon: "🔧", description: "Maintenance & updates" }
  ];

  return (
    <motion.section
      className="py-24 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Our Development Process</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-normal">
            A streamlined approach to delivering exceptional mobile applications from concept to launch.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 hidden lg:block"
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className={`relative flex flex-col lg:flex-row items-center lg:mb-12 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2 lg:px-8 w-full">
                  <motion.div
                    className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-xl transition-all duration-300 text-center ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(56, 189, 248, 0.3)" }}
                  >
                    <div
                      className={`inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 mb-4 ${
                        index % 2 === 0 ? "lg:float-right lg:ml-4" : "lg:float-left lg:mr-4"
                      }`}
                    >
                      <span className="text-3xl" aria-hidden="true">{step.icon}</span>
                    </div>
                    <div className="lg:inline-block">
                      <h3 className="text-2xl font-semibold mb-2 text-white">{step.step}</h3>
                      <p className="text-gray-400 font-normal">{step.description}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" aria-hidden="true">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-gray-900 ring-4 ring-cyan-500/30" />
                </div>

                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Why Choose Us Component
const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Data Based Decisions",
      description: "Using the information gathered, we craft solutions tailored to address the evolving needs of your end customers, keeping in mind the dynamic shifts in the market.",
      icon: Database,
      color: "#06b6d4"
    },
    {
      title: "Robust Architecture",
      description: "Our mobile app development experts design an architecture with a focus on sustainability and adaptability, conceptualizing every aspect.",
      icon: Server,
      color: "#3b82f6"
    },
    {
      title: "Proven Track Record",
      description: "We have consistently empowered clients with our high-quality solutions, further strengthening our proven track record. Please explore our portfolio for references.",
      icon: Star,
      color: "#8b5cf6"
    },
    {
      title: "Open Communication",
      description: "Our straight-forward and transparent approach ensures an effective internal and external communication for a clear vision of business objectives.",
      icon: MessageCircle,
      color: "#ec4899"
    }
  ];

  return (
    <motion.section
      className="py-32 px-8 border-t border-gray-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
            Why Choose Us
          </Badge>
          <h2 className="text-5xl font-extralight mb-6 tracking-tight">
            Why <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Dcodes</span> for App Development?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal">
            Delivering excellence through expertise, transparency, and proven methodologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-800/30 hover:border-cyan-500/40 transition-all duration-300 h-full backdrop-blur-sm">
                <div className="flex flex-col items-start">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 mb-6 border border-gray-700/50 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <reason.icon className="w-8 h-8" style={{ color: reason.color }} aria-hidden="true" />
                  </motion.div>

                  <h3 className="text-2xl font-normal mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed font-normal">{reason.description}</p>

                  <motion.div
                    className="h-px bg-gradient-to-r from-cyan-400 to-transparent mt-6"
                    initial={{ width: 0 }}
                    whileHover={{ width: 60 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            <Link href="/Portfolio" className="font-medium">
              Explore Our Portfolio
            </Link>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Business Hiring Models Component
const BusinessHiringModels = () => {
  const [activeModel, setActiveModel] = useState<"dedicated" | "fixed">("dedicated");

  const dedicatedSteps = [
    {
      title: "Hire Dedicated Team",
      icon: Users,
      steps: [
        "Requirement discussion and team proposition",
        "Evaluation and team finalization",
        "Dedicated team hiring and engagement"
      ]
    },
    {
      title: "Project Development",
      icon: Settings,
      steps: [
        "Agile and Lean software development",
        "Project milestones & bi-weekly sprint designs",
        "Iterative development and feedback"
      ]
    },
    {
      title: "Project Delivery",
      icon: Package,
      steps: [
        "Cloud and DevOps integration",
        "Manual / Automated testing",
        "Reliable and Flexible delivery"
      ]
    }
  ];

  const fixedPriceSteps = [
    {
      title: "Requirement Analysis",
      icon: ClipboardList,
      steps: [
        "Detailed project scope definition",
        "Fixed price estimation",
        "Timeline and milestone planning"
      ]
    },
    {
      title: "Development & QA",
      icon: Code,
      steps: [
        "Sprint-based development",
        "Quality assurance testing",
        "Regular progress updates"
      ]
    },
    {
      title: "Delivery & Support",
      icon: CheckCircle,
      steps: [
        "Final delivery and deployment",
        "Post-launch support",
        "Maintenance and updates"
      ]
    }
  ];

  const steps = activeModel === "dedicated" ? dedicatedSteps : fixedPriceSteps;

  return (
    <motion.section
      className="py-32 px-8 border-t border-gray-800/50 bg-gradient-to-b from-gray-900/30 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
            Hiring Models
          </Badge>
          <h2 className="text-5xl font-extralight mb-6 tracking-tight">
            Business-Friendly <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Hiring Models</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Take business to the next level by hiring our dedicated developers on monthly or fixed-priced models.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            type="button"
            onClick={() => setActiveModel("dedicated")}
            className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
              activeModel === "dedicated"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                : "bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800/50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Users className="w-5 h-5" aria-hidden="true" />
            Dedicated Team Model
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setActiveModel("fixed")}
            className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
              activeModel === "fixed"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                : "bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800/50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <DollarSign className="w-5 h-5" aria-hidden="true" />
            Fixed Price Model
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-800/30 hover:border-cyan-500/40 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                    </div>
                    <span className="text-4xl font-extralight text-gray-700" aria-hidden="true">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-6 text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <ul className="space-y-3">
                    {step.steps.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    className="h-px bg-gradient-to-r from-cyan-400 to-transparent mt-6"
                    initial={{ width: 0 }}
                    whileHover={{ width: 60 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block group bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 rounded-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm tracking-wide uppercase font-medium"
            >
              Hire Your Team Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Case Studies Component
const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Brahaman",
      tech: "Node.js, React Native",
      category: "Energy & Utility",
      description: "With the increasing pollution around the globe, governments are advocating more usage of electric vehicles which increases infrastructural needs of charging stations. Dcodes assisted United Kingdom based electric vehicle charging station provider to develop a mobile app for users to locate charging stations, check real time charging progress and make payments.",
      icon: Zap,
      iconBg: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400"
    },
    {
      title: "BSCC - ONGC",
      tech: "Flutter, Node.js, MongoDB",
      category: "Energy & Oil",
      description: "A comprehensive enterprise solution for ONGC's Business Support and Coordination Center. This powerful platform streamlines operations, asset management, and real-time monitoring for one of India's largest oil and gas exploration companies, enabling efficient decision-making and operational excellence.",
      icon: Fuel,
      iconBg: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    }
  ];

  return (
    <motion.section
      className="py-32 px-8 border-t border-gray-800/50 bg-gradient-to-b from-black to-gray-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-6 border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
            Our Work
          </Badge>
          <h2 className="text-5xl font-extralight mb-6 tracking-tight">
            App Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
            We boast a vast pool of technology experts who have successfully created applications for a diverse range of clients.
            Exploring these projects will underscore our proficiency in mobile app development. Feel free to dive in!
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-800/30 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-none px-3 py-1">{study.tech}</Badge>
                        <Badge variant="outline" className="border-gray-700 text-gray-400">{study.category}</Badge>
                      </div>

                      <h3 className="text-3xl font-normal mb-6 text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {study.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-8 font-normal">{study.description}</p>
                    </div>

                    <motion.div whileHover={{ x: 10 }} className="inline-flex items-center">
                      <a
                        href={PORTFOLIO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
                        aria-label={`View case study: ${study.title}`}
                      >
                        VIEW CASE STUDY
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                      </a>
                    </motion.div>
                  </div>

                  <div className={`relative bg-gradient-to-br ${study.iconBg} p-8 lg:p-10 flex items-center justify-center min-h-[250px] lg:min-h-[300px]`}>
                    <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
                        <study.icon className={`w-12 h-12 ${study.iconColor}`} />
                      </div>
                    </motion.div>

                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-transparent border border-cyan-500/50 hover:border-cyan-400 text-white px-10 py-4 text-sm tracking-wide uppercase hover:bg-cyan-500/10 transition-all duration-500 font-medium rounded-sm inline-flex items-center justify-center gap-2"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Hero Section
const UpdatedHero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-8 relative"
      style={{ opacity, scale }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div className="mb-12">
          <motion.p
            className="text-xs tracking-[0.2em] text-cyan-400 mb-2 pt-10 uppercase font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Build Smarter Apps for a Smarter World
          </motion.p>

          <motion.h1
            className="text-7xl md:text-9xl font-extralight mb-12 tracking-tighter leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="sr-only">Mobile app development for businesses: </span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            >
              Enterprise
            </motion.span>
            <br />
            <motion.span
              className="font-normal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            >
              Grade Apps
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-normal leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Enterprise-grade native & cross-platform apps engineered for performance, security, and scale
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 relative overflow-hidden rounded-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,212,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/connect"
              className="relative z-10 block px-12 py-4 text-sm tracking-wide uppercase font-medium"
              aria-label="Start your mobile app development project"
            >
              Start Your Project
            </Link>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              aria-hidden="true"
            />
          </motion.div>

          <motion.a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide uppercase text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group font-medium"
            whileHover={{ y: -2 }}
            aria-label="View mobile app development case studies"
          >
            <span className="relative z-10">View Case Studies</span>
            <motion.span
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default function EnhancedPremiumAppDev() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Mouse glow: updates the DOM directly (no re-render of the whole page on every mouse move)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(0,212,255,0.1), transparent 50%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const capabilities = [
    "Native iOS & Android Development",
    "Intuitive UI/UX Design",
    "Cross-Platform Frameworks (Flutter, React Native)",
    "API Development & Integration",
    "App Store Optimization & Compliance",
    "Maintenance, Updates & Feature Rollouts",
    "Scalable Cloud-Connected Architecture",
    "CI/CD & DevOps for Mobile"
  ];

  const philosophy = [
    { principle: "Performance", description: "Lightning-fast apps with optimized responsiveness.", icon: "⚡" },
    { principle: "User-Centric", description: "Interfaces that simplify navigation and maximize retention.", icon: "👤" },
    { principle: "Scalability", description: "Built to grow whether 10 or 10 million users.", icon: "📈" },
    { principle: "Security", description: "Enterprise-grade protection for data, users, and compliance.", icon: "🔒" }
  ];

  const highlights = ["High-Speed Performance", "Native-Like UI/UX", "App Store Launch Support", "Real-Time Data Integration", "Security-First Architecture"];

  return (
    <div className="bg-black text-white min-h-screen font-normal antialiased overflow-x-hidden">
      {/* ===== SEO: React 19 hoists these into <head> and they are server-rendered ===== */}
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESC} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={PAGE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:site_name" content="Dcodes Technologies" />
      <meta property="og:title" content="Mobile App Development Company | Dcodes Technologies" />
      <meta
        property="og:description"
        content="Customer-facing and internal mobile apps for iOS and Android. Share your idea and get a plan and quote."
      />
      <meta property="og:image" content={`${SITE}/og-mobile-apps.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile App Development Company | Dcodes Technologies" />
      <meta
        name="twitter:description"
        content="iOS, Android and cross-platform apps scoped around your users and goals."
      />
      <meta name="twitter:image" content={`${SITE}/og-mobile-apps.jpg`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }}
      />

      <style dangerouslySetInnerHTML={{ __html: DELIVER_ICON_CSS }} />

      {/* Animated Background Effects */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <div style={{ height: "200vh", position: "relative", overflow: "hidden", right: "-300px" }}>
          <LaserFlow color="#5f78d1" />
        </div>
        <div ref={glowRef} className="absolute inset-0 pointer-events-none opacity-20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-20" />
      </div>

      <main className="relative z-30">
        <UpdatedHero />

        {/* What We Deliver Section */}
        <motion.section
          className="py-10 px-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">What We Deliver</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-normal">
                We help businesses turn bold app ideas into scalable digital products that users love. Our mobile development services span across platforms, technologies, and industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  type: "native" as const,
                  title: "build native-feeling apps",
                  subtitle: "React Native — iOS & Android",
                  text: "Build native-feeling apps with React Native for Android and iOS. We deliver cross-platform performance, SEO-friendly web integrations, and the best UX/UI designs."
                },
                {
                  type: "scalable" as const,
                  title: "build scalable apps",
                  subtitle: "highly scalable apps",
                  text: "Launch faster with Flutter and React Native apps. Code once, run anywhere without compromising user experience or functionality."
                },
                {
                  type: "performance" as const,
                  title: "build high-performance apps",
                  subtitle: "best performance apps",
                  text: "Power high-traffic ecosystems with secure, cloud-connected apps optimized for large-scale deployments and business-critical operations."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-slate-900/60 border-indigo-900/40 h-full">
                    <div className="flex items-start gap-4 mb-5">
                      <DeliverIcon type={item.type} />
                      <div>
                        <h3 className="text-xl font-medium text-white leading-snug">{item.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 font-normal leading-relaxed">{item.text}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <IndustryUseCases />
        <TechStack />
        <DevelopmentProcess />
        <WhyChooseUs />
        <BusinessHiringModels />
        <CaseStudies />

        {/* About Section */}
        <motion.section
          className="py-32 px-8 border-t border-gray-800/50 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <motion.div
                className="lg:col-span-5"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="mb-8 border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
                  Since 2020
                </Badge>

                <motion.h2
                  className="text-5xl font-extralight mb-12 tracking-tight leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Dcodes<br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Mobile Studio
                  </span>
                </motion.h2>

                <div className="space-y-8">
                  {["iOS & Android Expertise", "Cross-Platform Solutions", "App Store Success"].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" aria-hidden="true" />
                      <span className="text-sm tracking-wide text-gray-400 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-7"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-2xl font-normal text-gray-400 leading-relaxed mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Our development studio combines creativity with cutting-edge engineering.
                  We craft mobile solutions that not only work but win.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={capability}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <Card className="p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border-gray-800/30 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <Check className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-normal">
                            {capability}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}

                  <motion.div
                    className="group w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: capabilities.length * 0.1 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="p-6 w-full bg-gradient-to-br from-cyan-900/30 via-cyan-800/10 to-transparent border border-cyan-500/40 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Star className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div className="text-left">
                          <h3 className="text-white font-medium mb-1">App Store Ready</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            Every app we build meets the latest Apple App Store & Google Play Store guidelines.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Your App, Our Expertise */}
        <motion.section
          className="py-32 px-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="lg:hidden">
              <motion.p
                className="text-xs tracking-[0.2em] text-cyan-400 mb-8 uppercase font-semibold text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                App Development
              </motion.p>

              <motion.h2
                className="text-4xl font-extralight mb-8 leading-tight tracking-tight text-center"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Your App,<br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Our Expertise
                </span>
              </motion.h2>

              <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
                <Android
                  className="h-full rounded-xl shadow-2xl overflow-hidden"
                  videoSrc="https://videos.pexels.com/video-files/14993748/14993748-uhd_1296_2304_30fps.mp4"
                  alt="Mobile app development demonstration video showing app features"
                />
              </div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      whileHover={{ scale: 1.4 }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-300 text-sm font-medium tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-gray-400 text-base font-normal leading-relaxed mt-8 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                We design and develop apps that are user-focused, high-performing, and built for market success.
              </motion.p>
            </div>

            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <motion.div
                className="lg:col-span-5"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="text-xs tracking-[0.2em] text-cyan-400 mb-8 uppercase font-semibold">
                  App Development
                </p>

                <motion.h2
                  className="text-5xl md:text-6xl font-extralight mb-12 leading-tight tracking-tight"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Your App,<br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Our Expertise
                  </span>
                </motion.h2>

                <div className="space-y-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        whileHover={{ scale: 1.4 }}
                        aria-hidden="true"
                      />
                      <span className="text-gray-300 text-sm font-medium tracking-wide">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-7 flex flex-col justify-center"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed mb-12"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  We design and develop apps that are user-focused, high-performing, and built for market success.
                </motion.p>

                <div className="relative w-full flex h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                  <Android
                    className="h-[60vh] rounded-xl shadow-2xl overflow-hidden"
                    videoSrc="https://videos.pexels.com/video-files/14993748/14993748-uhd_1296_2304_30fps.mp4"
                    alt="Mobile app development platform demonstration showing cross-platform capabilities"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <TestimonialsSection />

        {/* Pillars */}
        <motion.section
          className="py-32 px-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-24"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Built on These 4 Pillars</h2>
              <motion.div
                className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                aria-hidden="true"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.principle}
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="mb-8" aria-hidden="true">
                    <motion.div
                      className="block w-[2px] min-w-[2px] h-16 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 mx-auto shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover:from-cyan-300 group-hover:to-blue-400 transition-colors duration-500"
                      whileHover={{ scaleY: 1.2 }}
                    />
                  </div>
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-normal mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.principle}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-normal group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-32 px-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-6xl md:text-7xl font-extralight mb-12 tracking-tighter"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Launch?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-16 font-normal leading-relaxed max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              From startup MVPs to enterprise platforms we turn your app vision into scalable success.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 rounded-sm relative overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,212,255,0.4)", y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/connect"
                  className="relative z-10 block px-12 py-4 text-sm tracking-wide uppercase font-medium"
                  aria-label="Share your app idea with Dcodes Technologies"
                >
                  Share Your App Idea
                </Link>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  aria-hidden="true"
                />
              </motion.div>

              <motion.div
                className="border border-gray-700 hover:border-cyan-500 transition-all duration-300 rounded-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/Product/chopada"
                  className="relative z-10 block px-12 py-4 text-sm tracking-wide uppercase font-medium group-hover:text-cyan-400 transition-colors duration-300"
                  aria-label="View mobile app examples"
                >
                  View App Examples
                </Link>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-xs tracking-wide text-gray-500 uppercase font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan-400">iOS & Android Specialists</span> • Free Consultation Available
            </motion.p>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="py-32 px-8 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-24"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-extralight mb-6 tracking-tight">Frequently Asked</h2>
              <motion.div
                className="w-16 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                aria-hidden="true"
              />
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="bg-gradient-to-r from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="button"
                    className="w-full text-left p-8 hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-between group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    whileHover={{ backgroundColor: "rgba(17, 24, 39, 0.5)" }}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-normal pr-8 group-hover:text-cyan-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <motion.span
                      className={`text-2xl font-extralight transition-all duration-300 ${
                        openFaq === index ? "text-cyan-400" : "text-gray-500"
                      }`}
                      animate={{
                        rotate: openFaq === index ? 45 : 0,
                        scale: openFaq === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                        id={`faq-answer-${index}`}
                      >
                        <motion.div
                          className="px-8 pb-8 border-t border-gray-800/30"
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          <p className="text-gray-300 leading-relaxed font-normal pt-6">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}