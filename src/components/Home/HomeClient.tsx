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

const SectionWrapper = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
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

export default function HomeClient() {
  return (
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
  );
}