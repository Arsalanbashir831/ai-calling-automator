import { useRef } from "react"; // useEffect, useState removed as IntersectionObserver is replaced
import { motion } from "framer-motion"; // Import motion
import FeatureCard from "./features/FeatureCard";
import { features } from "./features/featuresData";
import BackgroundElements from "./features/BackgroundElements";
import SectionHeader from "./features/SectionHeader";
import WidgetShowcase from "./features/WidgetShowcase";

// Animation Variants
const sectionOverallVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren", // Ensure section is ready before children animate
      staggerChildren: 0.2, // Stagger direct children of the section
    },
  },
};

const headerContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "circOut",
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger animation for each card
      delayChildren: 0.2, // Small delay after parent (section) is visible
    },
  },
};

// This variant would ideally be applied inside FeatureCard.tsx
// For now, we'll wrap FeatureCard with a motion.div using this.
const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "circOut",
    },
  },
};

const widgetShowcaseVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.7,
      delay: 0.4, // Delay slightly after cards start appearing
    },
  },
};

const backgroundVariants = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  }
  // For continuous animation (example: subtle pulse on BackgroundElements)
  // animate: {
  //   opacity: [0.7, 1, 0.7],
  //   transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  // }
}

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // sectionRef can still be used for other purposes if needed

  return (
    <motion.section
      id="features"
      className="py-28 relative overflow-hidden bg-gray-950 text-white" // Assuming a dark theme for "fancy"
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }} // Trigger when 5% of section is visible
      variants={sectionOverallVariants}
    >
      {/* Background elements - subtle entrance, could have continuous animation too */}
      <motion.div
        className="absolute inset-0 -z-0" // Ensure it's behind content but within stacking context
        variants={backgroundVariants}
        // To add continuous animation: initial="hidden" animate="animate" whileInView="visible"
      >
        <BackgroundElements />
      </motion.div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div variants={headerContentVariants}> {/* Animates SectionHeader as a block */}
          <SectionHeader />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-16 mb-20" // Added margin
          variants={gridVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}> {/* Each card gets its own motion wrapper */}
              <FeatureCard
                {...feature}
                index={index} // index can be used inside FeatureCard for further staggered internal animations
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