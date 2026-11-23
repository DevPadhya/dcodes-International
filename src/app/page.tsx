"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import Grid from "@/components/landingPage/Grid";
import AddAI from "@/components/landingPage/AddAI";
import AboutUsSection from "@/components/About/AboutUsSection";
import Services from "@/components/landingPage/Services";
import Servicestwo from "@/components/landingPage/Servicestwo";
import ConnectUsForm from "@/components/landingPage/ConnectUsForm";
import WorkProcessUI from "@/components/landingPage/WorkProcessUI";

const SITE = "https://www.dcodestech.com";
const PAGE_TITLE = "Software, Web & Mobile App Development | Dcodes Technologies";
const PAGE_DESC =
  "Dcodes Technologies builds custom software, websites, mobile apps and ERP systems for startups and growing businesses. Tell us about your project.";

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
      style={{ scaleX }}
      aria-hidden="true"
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
      margin: "-50px 0px -50px 0px",
    }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// ============================================
// STRUCTURED DATA - only facts that are true and visible on the site
// ============================================
const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Dcodes Technologies",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "Dcodes Technologies is a software development company based in Ahmedabad, India that builds custom software, websites, mobile apps and ERP systems for businesses worldwide.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "Dcodes Technologies",
      url: SITE,
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* ===== SEO: React 19 hoists these into <head> ===== */}
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESC} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={SITE} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE} />
      <meta property="og:site_name" content="Dcodes Technologies" />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESC} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={PAGE_DESC} />
      <meta name="twitter:image" content={`${SITE}/og-image.jpg`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(homeJsonLd) }}
      />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen"
      >
        <ScrollProgress />

        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Grid />
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <AddAI />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <AboutUsSection />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Services />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <Servicestwo />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <WorkProcessUI />
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <ConnectUsForm />
        </SectionWrapper>
      </motion.main>
    </>
  );
}