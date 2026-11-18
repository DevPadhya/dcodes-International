// SERVER component (no "use client"). Put this in the route file, e.g.
// src/app/products/ticketing-software/page.tsx
import type { Metadata } from "next";
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

const SITE = "https://www.dcodestech.com";
const PATH = "/products/ticketing-software"; // must match the real route (SEO plan URL)
const URL = `${SITE}${PATH}`;

// TODO (IMPORTANT): this is a placeholder number. Put the real WhatsApp number here.
const whatsappNumber = "+919876543210";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

// ---------- metadata (server-rendered) ----------
export const metadata: Metadata = {
  title: "Ticket System | Smart Helpdesk",
  description:
    "Raise device repair tickets on WhatsApp. No app needed: send a message, get a ticket ID and live repair updates for phones, laptops and more.",
  authors: [{ name: "Dcodes Technologies" }],
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "WhatsApp Ticket System | Smart IT Helpdesk | Dcodes",
    description:
      "Create support tickets via WhatsApp for device repairs. No app required: just send a message and get instant ticket generation.",
    url: URL,
    siteName: "Dcodes Technologies",
    images: [{ url: `${SITE}/og-image-ticket-system.jpg` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Ticket System | Dcodes",
    description:
      "IT helpdesk and device repair support via WhatsApp. Quick ticket creation and real-time updates.",
    images: [`${SITE}/twitter-card-ticket-system.jpg`],
  },
};

// ---------- data (unchanged) ----------
const steps = [
  { icon: <MessageCircle className="w-8 h-8" />, title: "WhatsApp Message", description: "Send 'Hello' to our WhatsApp number" },
  { icon: <Ticket className="w-8 h-8" />, title: "Auto Ticket Created", description: "Your ticket will be automatically generated" },
  { icon: <Smartphone className="w-8 h-8" />, title: "Device Details", description: "Send device issue and model information" },
  { icon: <CheckCircle className="w-8 h-8" />, title: "Get Updates", description: "Repair status will be sent via WhatsApp" },
];

const features = [
  { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp Integration", description: "No app download required" },
  { icon: <Clock className="w-6 h-6" />, title: "24/7 Available", description: "Create tickets anytime" },
  { icon: <Zap className="w-6 h-6" />, title: "Instant Response", description: "Quick confirmation" },
  { icon: <Users className="w-6 h-6" />, title: "Multi User", description: "Admin & User both" },
  { icon: <Wrench className="w-6 h-6" />, title: "Repair Tracking", description: "Track status easily" },
  { icon: <Shield className="w-6 h-6" />, title: "Secure", description: "Safe & private data" },
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

// TODO (verify): these figures are business claims. Publish only if they are real and provable.
const stats = [
  { icon: <Ticket className="w-6 h-6" />, value: "2,400+", label: "Tickets Resolved" },
  { icon: <Clock className="w-6 h-6" />, value: "< 15 min", label: "Avg. Response Time" },
  { icon: <Users className="w-6 h-6" />, value: "1,800+", label: "Happy Customers" },
  { icon: <Star className="w-6 h-6" />, value: "4.8/5", label: "Customer Rating" },
];

// TODO (verify): warranty, pickup, payment, data-sharing and hours answers are business claims.
const faqs = [
  {
    q: "Do I need to install any app to raise a ticket?",
    a: "No. Everything runs on WhatsApp — just send a message to our number and your ticket is created automatically. No additional app installation required.",
  },
  {
    q: "How will I know the status of my repair?",
    a: "You'll get real-time updates directly on WhatsApp as your device moves through each repair stage. We keep you informed at every step.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We only collect what's needed to process your repair, and your information is never shared with third parties. We follow strict data protection protocols.",
  },
  {
    q: "What if my device isn't listed?",
    a: "Send us a message anyway with your device details — we support most electronics and will confirm if we can help. Our team is always ready to assist.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Repair time varies depending on the issue and device. Simple fixes may take 1-2 hours, while complex hardware repairs may take 24-48 hours. We'll give you an estimated time when you raise the ticket.",
  },
  {
    q: "Do you provide warranty on repairs?",
    a: "Yes, we provide a 30-day warranty on all repairs. If the same issue recurs within the warranty period, we'll fix it free of charge.",
  },
  {
    q: "Can I track my repair status online?",
    a: "Yes, we'll provide you with a unique ticket ID. You can track your repair status through WhatsApp or our web portal using this ID.",
  },
  {
    q: "What are your working hours?",
    a: "Our support team is available 24/7 via WhatsApp for ticket creation. Repair services are available Monday to Saturday, 9:00 AM to 8:00 PM IST.",
  },
  {
    q: "Do you offer doorstep pickup and delivery?",
    a: "Yes, we offer convenient doorstep pickup and delivery services. Just mention your address when creating the ticket, and we'll arrange the pickup.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept multiple payment methods including UPI, Google Pay, PhonePe, credit/debit cards, net banking, and cash on delivery.",
  },
  {
    q: "Can I cancel or modify my repair request?",
    a: "Yes, you can cancel or modify your repair request by sending a message on WhatsApp. For changes, please contact us within 2 hours of ticket creation.",
  },
  {
    q: "Do you provide temporary devices while repairing?",
    a: "Yes, we offer temporary replacement devices for specific cases. This service is subject to availability and prior arrangement.",
  },
];

// ---------- structured data (server-rendered) ----------
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp Ticket System",
  description:
    "IT helpdesk and device repair support system using WhatsApp for ticket creation and tracking.",
  url: URL,
  provider: { "@type": "Organization", name: "Dcodes Technologies", url: SITE },
  serviceType: "Customer Support System",
  // TODO: content mentions IST hours and doorstep pickup, so this is India-only.
  // Change if you also serve other countries.
  areaServed: { "@type": "Country", name: "India" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Ticket System", item: URL },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dcodes Technologies",
  url: SITE,
  logo: `${SITE}/logo.png`,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@dcodestech.com",
    telephone: "+91-6353-653-977",
  },
  // TODO: add "sameAs" with ONLY profile URLs verified as yours.
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

export default function TicketPage() {
  return (
    <main className="bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(orgSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      {/* HERO */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
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
          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Ticket className="w-4 h-4 text-purple-400" />
            <span className="text-xs uppercase tracking-widest text-white/80">
              Smart Helpdesk System
            </span>
          </p>

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
              Get More Details
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
      </header>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-3xl text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 bg-gray-900 rounded-xl text-center border border-white/5 hover:border-white/20 transition-colors duration-300"
            >
              <div className="text-blue-400 mb-4 flex justify-center">{step.icon}</div>
              <h3>{step.title}</h3>
              <p className="text-white/60 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-3xl text-center mb-12">Features</h2>

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
            <p className="text-white/60 mb-6">We handle all types of repairs.</p>

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
              <h2 className="text-xl">What to Send on WhatsApp</h2>
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Dcodes Ticket System in Numbers</h2>
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

      {/* FAQ (pure CSS accordion, first item open by default) */}
      <section className="max-w-3xl mx-auto px-6 py-20 border-t border-white/10" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-white/50 text-center mb-12">
          Still unsure? Here's what people usually ask before raising a ticket.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden"
            >
              <input
                type="checkbox"
                id={`ticket-faq-toggle-${i}`}
                className="sr-only"
                defaultChecked={i === 0}
              />
              <h3>
                <label
                  htmlFor={`ticket-faq-toggle-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                >
                  <span className="font-medium text-white text-sm md:text-base">{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="text-blue-400 text-xl leading-none transition-transform duration-300 flex-shrink-0 group-has-[:checked]:rotate-45"
                  >
                    +
                  </span>
                </label>
              </h3>
              {/* Answer always in the DOM (crawlable); only visually collapsed */}
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-has-[:checked]:max-h-60 group-has-[:checked]:opacity-100">
                <p className="px-6 pb-4 text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 border-t border-white/10" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-3xl mb-4">Ready to Get Started?</h2>

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
    </main>
  );
}