import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import FeatureCard from "./features/FeatureCard";
import { features } from "./features/featuresData";
import BackgroundElements from "./features/BackgroundElements";
import SectionHeader from "./features/SectionHeader";
import WidgetShowcase from "./features/WidgetShowcase";

// Animation Variants
const sectionOverallVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.3,
      ease: "easeInOut", // Smooth transition
    },
  },
};

const headerContentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: "easeInOut", // Smooth transition
    },
  },
};

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const widgetShowcaseVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20, // Adjust damping for smoother motion
      stiffness: 80, // Adjust stiffness for smoother easing
      duration: 1.0,
      delay: 0.5, 
    },
  },
};

const backgroundVariants: Variants = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null); 

  return (
    <motion.section
      id="features"
      className="py-28 relative overflow-hidden bg-gray-950 text-white"
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionOverallVariants}
    >
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        variants={backgroundVariants}
      >
        <BackgroundElements />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div variants={headerContentVariants}>
          <SectionHeader />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-16 mb-20"
          variants={gridVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <FeatureCard
                {...feature}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={widgetShowcaseVariants}>
          <WidgetShowcase />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
