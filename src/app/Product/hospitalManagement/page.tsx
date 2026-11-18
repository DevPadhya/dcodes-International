// SERVER component (no "use client"). Put this in the route file, e.g.
// src/app/Product/hospitalManagement/page.tsx
import type { Metadata } from "next";
import ColorBends from "@/components/ReactBit/ColorBends";
import FeatureCard from "./FeatureCard";

const SITE = "https://www.dcodestech.com";
const PATH = "/Product/hospitalManagement"; // must match the real route. After you move the folder to /products/hospital-management, change this and add a 301 redirect
const URL = `${SITE}${PATH}`;
const ORG_ID = `${SITE}/#organization`;

// ---------- metadata (server-rendered) ----------
export const metadata: Metadata = {
    title: "Hospital Management System for Clinic",
    description:
        "Cloud hospital management software from Dcodes Technologies: patient records, scheduling, pharmacy, billing and EHR integration. Request a demo.",
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
        title: "Cloud Hospital Management Software | Dcodes Technologies",
        description:
            "Manage patient records, scheduling, pharmacy and billing in one cloud platform, set up remotely.",
        url: URL,
        siteName: "Dcodes Technologies",
        images: [{ url: `${SITE}/og-image-hospital-erp.jpg` }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Hospital Management Software | Dcodes Technologies",
        description:
            "Patient management, scheduling, pharmacy, billing and EHR integration in one cloud platform.",
        images: [`${SITE}/twitter-card-hospital.jpg`],
    },
};

// ---------- data (unchanged) ----------
const featuresData = [
    { icon: "👨‍⚕️", title: "Patient Management", description: "Complete patient records, medical history, and treatment plans" },
    { icon: "📅", title: "Appointment Scheduling", description: "Smart booking system with doctor availability and reminders" },
    { icon: "💊", title: "Pharmacy & Inventory", description: "Medicine stock management and prescription tracking" },
    { icon: "💰", title: "Billing & Insurance", description: "Automated billing, insurance claims, and payment processing" },
    { icon: "🩺", title: "Doctor Portal", description: "Dedicated interface for doctors with patient dashboards" },
    { icon: "📊", title: "Analytics & Reports", description: "Real-time insights and performance analytics" },
    {
        icon: "🔒",
        title: "Data Security & Access Control",
        // TODO: only name specific regulations once certifications/audits are confirmed.
        description: "Data encryption and role-based access controls, built to support HIPAA and GDPR obligations",
    },
    { icon: "👥", title: "Human Resources", description: "Staff management, payroll processing, attendance tracking, and scheduling." },
    { icon: "💻", title: "Electronic Health Records (EHR) Integration", description: "Seamless integration with existing EHR systems for unified patient data management" },
];

// TODO (verify before publishing): every figure in this table is a business claim.
const comparisonData = [
    { feature: "Implementation Time", traditional: "3-6 Months", ourSolution: "2-4 Weeks" },
    { feature: "Training Required", traditional: "Extensive (40+ hours)", ourSolution: "Minimal (10 hours)" },
    { feature: "Customer Support", traditional: "Business Hours Only", ourSolution: "24/7 Dedicated Support" },
    { feature: "System Updates", traditional: "Manual, Disruptive", ourSolution: "Automatic, Zero Downtime" },
    { feature: "Scalability", traditional: "Limited, Hardware Dependent", ourSolution: "Unlimited, Cloud Native" },
    { feature: "Total Cost of Ownership", traditional: "High, Unpredictable", ourSolution: "Predictable Monthly/Yearly" },
    { feature: "Data Security", traditional: "Basic", ourSolution: "Encryption & access controls, built to support HIPAA/GDPR" },
    { feature: "Mobile Access", traditional: "Limited or None", ourSolution: "Full Mobile App Suite" },
];

const faqData = [
    {
        question: "Can clinics and hospitals outside India use the Hospital ERP?",
        answer: "Yes. The platform is cloud-based, so it can be set up and used from any location with an internet connection, without on-premise hardware.",
    },
    {
        question: "How long does it take to implement the Hospital ERP?",
        answer: "Most deployments go live in 2-4 weeks, compared to the 3-6 months typical of traditional hospital systems.",
    },
    {
        question: "How does the system handle HIPAA and GDPR requirements?",
        answer: "The platform includes data encryption and role-based access controls designed to support HIPAA and GDPR obligations. Compliance also depends on how your organisation configures and uses the system, so contact us to discuss the requirements in your country.",
    },
    {
        question: "Can it integrate with our existing EHR system?",
        answer: "Yes, the platform offers Electronic Health Records (EHR) integration so patient data stays unified across systems.",
    },
    {
        question: "How much training does our staff need?",
        answer: "Training is minimal, around 10 hours on average, versus 40+ hours typically required for traditional hospital software.",
    },
    {
        question: "Does it handle pharmacy and billing as well as patient records?",
        answer: "Yes. Beyond patient management and scheduling, it covers pharmacy and inventory tracking, automated billing, and insurance claims processing.",
    },
    {
        question: "What kind of support is available after go-live?",
        answer: "All plans include 24/7 dedicated support, automatic zero-downtime updates, and cloud deployment.",
    },
];

// ---------- structured data (server-rendered) ----------
const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Dcodes Hospital Management Software",
    description:
        "Cloud-based hospital management system for clinics and hospitals, covering patient management, appointment scheduling, pharmacy inventory, billing and EHR integration.",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: URL,
    publisher: { "@id": ORG_ID },
    // TODO: keep only markets you will actually sell into and support
    areaServed: ["United States", "United Kingdom", "Canada", "United Arab Emirates"],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Hospital Management Software", item: URL },
    ],
};

const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Dcodes Technologies",
    // TODO: add "legalName" exactly as on your company registration
    url: SITE,
    logo: `${SITE}/logo.png`,
    description: "Software development company based in Ahmedabad, India, building custom software, websites, mobile apps, ERP and hospital management systems.",
    // TODO: add "sameAs" with ONLY profile URLs verified as yours (company LinkedIn, Clutch, etc.)
    address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@dcodestech.com",
        telephone: "+91-6353-653-977",
        availableLanguage: "English",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

export default function Hospital() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(productSchema)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(orgSchema)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

            <div className="relative h-screen" aria-hidden="true">
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
            <header className="absolute top-20 left-0 w-full h-full flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center w-full max-w-6xl">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-thin text-white mb-6">
                        <span className="block">FOR CLINICS AND HOSPITALS WORLDWIDE</span>
                        <span className="block">RUN YOUR HOSPITAL FROM THE CLOUD</span>
                        <span className="sr-only"> – Cloud Hospital Management Software by Dcodes Technologies</span>
                    </h1>
                    <p className="text-lg font-sans font-light tracking-wide sm:text-xl text-gray-400 p-4 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Patient records, scheduling, pharmacy and billing in one platform, set up remotely and live in weeks
                    </p>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-5 mt-10 px-3 bg-black" aria-labelledby="features-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
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
            </section>

            {/* Comparison Section */}
            <section className="py-20 bg-gray-900" aria-labelledby="compare-heading">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 id="compare-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Why Choose Our Hospital ERP?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Compare traditional systems with our modern healthcare solution
                        </p>
                    </div>
                    <div className="border overflow-x-auto">
                        <table className="w-full bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-400">
                            <caption className="sr-only">
                                Traditional hospital systems compared with Dcodes hospital management software
                            </caption>
                            <thead>
                                <tr className="bg-gray-900">
                                    <th scope="col" className="py-4 px-6 text-left text-white font-bold text-lg">Feature / Category</th>
                                    <th scope="col" className="py-4 px-6 text-left text-red-400 font-bold">Traditional System</th>
                                    <th scope="col" className="py-4 px-6 text-left text-green-400 font-bold">Our ERP Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700 border-gray-500 border"}>
                                        <th scope="row" className="py-4 px-6 text-left text-white font-medium">{item.feature}</th>
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
            </section>

            {/* FAQ Section (pure CSS accordion, first item open by default) */}
            <section className="py-20 bg-black" aria-labelledby="faq-heading">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Everything you need to know about our Hospital ERP solution
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="group bg-gray-900 rounded-lg border border-gray-700 overflow-hidden"
                            >
                                <input
                                    type="checkbox"
                                    id={`hospital-faq-toggle-${index}`}
                                    className="sr-only"
                                    defaultChecked={index === 0}
                                />
                                <h3>
                                    <label
                                        htmlFor={`hospital-faq-toggle-${index}`}
                                        className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left cursor-pointer"
                                    >
                                        <span className="text-white font-medium text-base sm:text-lg">{faq.question}</span>
                                        <span
                                            className="shrink-0 text-2xl text-gray-400 transition-transform duration-300 group-has-[:checked]:rotate-45"
                                            aria-hidden="true"
                                        >
                                            +
                                        </span>
                                    </label>
                                </h3>
                                {/* Answer always in the DOM (crawlable); only visually collapsed */}
                                <div className="overflow-hidden transition-all duration-300 max-h-0 group-has-[:checked]:max-h-60">
                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-6 pb-5">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}