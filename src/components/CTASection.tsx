import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { Clock, BarChart3, PhoneCall, Database } from "lucide-react";
import { useRef } from "react";

// Animation Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5, // Increased duration for smoother section entrance
      staggerChildren: 0.3, // More space between children to make animations feel more organic
      delayChildren: 0.4,
      ease: "easeInOut", // Smooth easing for better transition
    },
  },
};

const bgBlobVariants = (delay: number = 0, duration: number = 20): Variants => ({
  animate: {
    y: [0, -15, 0, 20, 5, -10, 0],
    x: [0, 10, -5, 15, 0, -15, 0],
    scale: [1, 1.03, 0.97, 1.05, 0.95, 1.02, 1],
    rotate: [0, 5, -3, 4, -2, 6, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
      repeatType: "mirror",
    },
  },
});

const ctaCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25, // Increased damping for smooth deceleration
      stiffness: 60, // Reduced stiffness for a softer bounce
      duration: 1, // Smoother and longer duration
      delay: 0.4,
      staggerChildren: 0.15,
    },
  },
};

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7, // Slightly longer duration
      ease: "easeOut", // Smooth ease-out
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // Smooth and natural ease
    },
  },
};

const checkmarkPathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

const actionCardVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 30, // Increased damping for smoothness
      stiffness: 50, // Reduced stiffness for more fluid motion
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 150, duration: 0.6 },
  },
};

const CTASection = () => {
  return (
    <motion.section
      className="py-28 relative overflow-hidden bg-gray-950 text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle vignette effects */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-transparent via-black/5 to-black/20"></div>

        {/* Animated Blobs with Framer Motion */}
        <motion.div
          className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-blue-500/10 filter blur-[100px] opacity-50"
          variants={bgBlobVariants(0, 22)}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-purple-500/10 filter blur-[100px] opacity-50"
          variants={bgBlobVariants(1, 25)}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/5 filter blur-[80px] opacity-40"
          variants={bgBlobVariants(2, 28)}
          animate="animate"
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          variants={ctaCardVariants}
        >
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-10 p-10 md:p-16 rounded-3xl neo-glow overflow-hidden shadow-2xl shadow-blue-500/10">
            {/* Background gradient for the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 backdrop-blur-xl"></div>

            {/* Content container (Left Side) */}
            <motion.div
              className="relative flex-1 space-y-6"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div
                className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium uppercase tracking-wider text-blue-300 shadow-md"
                variants={contentItemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.span
                  className="flex h-2 w-2 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.3, 1], transition: { duration: 1.5, repeat: Infinity } }}
                />
                <span>Enterprise Solution</span>
              </motion.div>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white leading-tight"
                variants={contentItemVariants}
              >
                Ready to Transform Your<br className="hidden md:block" /> Communication Strategy?
              </motion.h2>
              <motion.p
                className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl"
                variants={contentItemVariants}
              >
                Join industry leaders leveraging our neural platform to redefine enterprise communication, accelerate growth, and deliver exceptional experiences.
              </motion.p>

              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {[
                  "Enterprise SLA & Priority Support",
                  "Dedicated Success Engineer",
                  "Custom Neural Voice Training",
                  "Quantum Analytics Platform",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-white/70"
                    variants={listItemVariants}
                  >
                    <motion.div
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/30 shrink-0"
                      variants={contentItemVariants}
                    >
                      <motion.svg className="h-3.5 w-3.5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <motion.path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          variants={checkmarkPathVariants}
                        />
                      </motion.svg>
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Action Card (Right Side) */}
            <motion.div
              className="relative flex flex-col gap-4 min-w-[300px] lg:min-w-[350px] bg-black/20 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-lg neo-frost-strong"
              variants={actionCardVariants}
            >
              <motion.div className="relative" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <motion.h3 className="text-2xl font-bold text-white mb-2" variants={contentItemVariants}>Schedule Executive Demo</motion.h3>
                <motion.p className="text-white/70 mb-6" variants={contentItemVariants}>Experience our enterprise platform with a personalized consultation.</motion.p>
                <motion.div className="space-y-4" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                  <motion.div variants={buttonVariants} whileHover={{ scale: 1.03, y: -2, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" className="w-full h-14 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 text-base font-semibold neo-glow-button">
                      Request Enterprise Access
                    </Button>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover={{ scale: 1.03, y: -2, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)" }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" variant="outline" className="w-full h-14 bg-white/5 hover:bg-white/10 border-white/20 text-white text-base font-semibold neo-frost-button">
                      Contact Enterprise Sales
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div className="mt-8 text-sm text-white/60 text-center" variants={contentItemVariants}>
                  <div className="flex items-center justify-center mb-1 space-x-1">
                    {[1, 2, 3].map((num) => (
                      <motion.div
                        key={num}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium border border-white/15 shadow-sm
                                ${num === 1 ? 'bg-blue-500/30 text-blue-300' : num === 2 ? 'bg-indigo-500/30 text-indigo-300' : 'bg-purple-500/30 text-purple-300'}`}
                        variants={contentItemVariants}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { type: "spring", delay: num * 0.1 } }}
                      >
                        {num}
                      </motion.div>
                    ))}
                    <span className="ml-2">Rapid implementation within 72 hours</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
