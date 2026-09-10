"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LiquidEther from '../ReactBit/LiquidEther';
import Link from 'next/link';

// Reusable Button component with hover effects
const Button = ({ children, className, onClick, ...props }: any) => (
  <motion.button
    className={`inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

// Custom hook for mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const wordVariants = {
    hidden: { y: 60, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const handleBookCall = () => {
    // Add your booking logic here
    console.log('Booking a call...');
  };

  const handleExploreServices = () => {
    // Add your navigation logic here

  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}


          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-32 min-h-screen flex items-center z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="flex flex-col items-center text-center space-y-12 sm:space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Main Heading with sophisticated animations */}
            <div className="max-w-5xl space-y-8 sm:space-y-10">
              <div className="space-y-6 sm:space-y-8">
                <div className="overflow-hidden">
                  <motion.h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl font-extralight leading-[0.9] tracking-tight">
                    <motion.div
                      variants={wordVariants}
                      className="block text-white/95 mb-2"
                    >
                      BUILDING DIGITAL
                    </motion.div>
                    <motion.div
                      variants={wordVariants}
                      className="block text-white/95 mb-2 relative"
                    >
                      <span className="relative inline-block">
                        EXPERIENCES
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            delay: 1.5,
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        />
                      </span>
                      <span className="text-gray-300 ml-3">THAT POWER</span>
                    </motion.div>
                    <motion.div
                      variants={wordVariants}
                      className="flex items-center justify-center gap-4 text-white/95"
                    >
                      BUSINESSES GLOBALLY
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400"
                        initial={{ rotate: -45, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        whileHover={{
                          rotate: 45,
                          scale: 1.1,
                          color: '#3b82f6'
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <motion.path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 2.5, duration: 1 }}
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.h1>
                </div>

                <motion.p
                  variants={itemVariants}
                  className="max-w-2xl mx-auto text-sm sm:text-xl lg:text-xl text-gray-400 font-normal leading-relaxed"
                >
                  From websites to enterprise software and marketing solutions <motion.span
                    className="text-gray-500 block mt-1 sm:inline sm:mt-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    {' '} Dcodes Technologies delivers scalable, high-performance IT services that help businesses grow worldwide.

                  </motion.span>
                </motion.p>
              </div>
            </div>

            {/* --- MODIFIED SECTION --- */}
            {/* Wrapped buttons in a flex container */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
            >
              {/* Button 1: Book a call (Existing) */}
              <Button
                className="group relative h-14 px-10 sm:px-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium text-base sm:text-lg rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
                onClick={handleBookCall}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Button content */}
                <Link href="https://calendly.com/sales-dcodestechnologies/30min" className="relative z-10 flex items-center gap-3">
                  <motion.span
                    animate={{ x: isHovered ? -2 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Book a call
                  </motion.span>

                  <motion.div
                    className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
                    animate={{
                      rotate: isHovered ? 45 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <motion.svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{ x: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.div>
                </Link>

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full opacity-0"
                  animate={{
                    scale: isHovered ? [1, 1.2] : 1,
                    opacity: isHovered ? [0, 0.3, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: isHovered ? Infinity : 0,
                  }}
                />
              </Button>

              {/* Button 2: Explore Services (New) */}
              <Link
                href="/services/digitalMarketing"
                className="h-14 px-10 sm:px-16 flex justify-center items-center bg-transparent border border-white/30 text-white/80 hover:bg-white/10 hover:text-white font-medium text-base sm:text-lg rounded-full transition-all duration-300"
                onClick={handleExploreServices}
              >
                Explore Solutions
              </Link>
            </motion.div>
            {/* --- END OF MODIFIED SECTION --- */}

          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;