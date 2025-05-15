import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation, Variants } from "framer-motion"; // Import motion
import { Clock, BarChart3, PhoneCall, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react"; // Added useState for potential count-up if not using direct motion text animation

// Helper function to create variants for staggering child animations
const staggerContainer = (staggerVal: number = 0.1, delayVal: number = 0): Variants => ({
  hidden: { opacity: 0 }, // Parent container can be initially hidden or just serve as orchestrator
  visible: {
    opacity: 1, // Parent container becomes visible
    transition: {
      staggerChildren: staggerVal,
      delayChildren: delayVal,
    },
  },
});


// Animation Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100, duration: 0.6 } },
};

const cardGridVariants: Variants = {
  hidden: {}, // The grid itself might not need to animate its own opacity if children are staggered
  visible: { transition: { staggerChildren: 0.2 } },
};

const benefitCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 80, duration: 0.7 },
  },
};

const iconWrapperVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", damping: 10, stiffness: 100, delay: 0.2 } },
};

const animatedRingVariants: Variants = {
  initial: { pathLength: 0, opacity: 0.5 },
  animate: {
    pathLength: [0, 1, 0],
    opacity: [0.7, 0.3, 0.7],
    transition: { duration: 3, repeat: Infinity, ease: "linear", times: [0, 0.5, 1] }
  }
};

const miniBarVariants = (widthPercentage: string): Variants => ({
  hidden: { width: "0%" },
  visible: { width: widthPercentage, transition: { duration: 1.2, ease: "circOut", delay: 0.5 } },
});

const circularProgressVariants = (targetOffset: number): Variants => ({
  hidden: { strokeDashoffset: 282.7 }, // Circumference
  visible: { strokeDashoffset: targetOffset, transition: { duration: 1.5, ease: "circOut", delay: 0.3 } },
});


const BenefitsSection = () => {
  const benefits = [
    {
      title: "Exponential Efficiency",
      description: "Our AI Caller handles all your leads with perfect precision, running 24/7 without fatigue. Achieve 10x more conversations than human teams at a fraction of the cost.",
      stats: "10x", 
      statsTarget: 10, 
      statsLabel: "Call Volume",
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      gradient: "from-blue-800/30 to-indigo-800/30 dark:from-blue-500/20 dark:to-indigo-500/20", // Adjusted opacity
      barWidth: "80%"
    },
    {
      title: "Conversion Optimization",
      description: "AI-powered conversations adapt in real-time to prospect responses, using neural network algorithms that continuously improve conversion rates over time.",
      stats: "37%",
      statsTarget: 37,
      statsLabel: "Higher Conversion",
      icon: <PhoneCall className="h-8 w-8 text-indigo-400" />,
      gradient: "from-indigo-800/30 to-purple-800/30 dark:from-indigo-500/20 dark:to-purple-500/20",
      barWidth: "60%"
    },
    {
      title: "Complete Data Control",
      description: "Securely upload your lead data, segment audiences, and let our system handle the rest. Your data remains encrypted and secure throughout the entire process.",
      stats: "100%",
      statsTarget: 100,
      statsLabel: "Data Security",
      icon: <Database className="h-8 w-8 text-purple-400" />,
      gradient: "from-purple-800/30 to-pink-800/30 dark:from-purple-500/20 dark:to-pink-500/20",
      barWidth: "95%"
    },
    {
      title: "Advanced Analytics",
      description: "Access comprehensive dashboards showing call performance, conversions, customer sentiment analysis, and actionable insights to optimize your campaigns.",
      stats: "Real-time", 
      statsTarget: null,
      statsLabel: "Performance Data",
      icon: <BarChart3 className="h-8 w-8 text-pink-400" />,
      gradient: "from-pink-800/30 to-red-800/30 dark:from-pink-500/20 dark:to-red-500/20",
      barWidth: "75%"
    },
  ];

  const callImpactMetrics = [
    { value: 80, label: "Cost Reduction", description: "Compared to traditional call centers", gradientId: "blue-gradient-metric", colors: ["#3b82f6", "#6366f1"], strokeDashoffset: 282.7 * (1 - 0.80) },
    { value: 66, label: "More Leads", description: "Average increase in qualified leads", gradientId: "purple-gradient-metric", colors: ["#8b5cf6", "#d946ef"], strokeDashoffset: 282.7 * (1 - 0.66) },
    { value: 95, label: "Accuracy", description: "In lead qualification and data capture", gradientId: "pink-gradient-metric", colors: ["#d946ef", "#ec4899"], strokeDashoffset: 282.7 * (1 - 0.95) },
  ];
  
  const gradientTextVariants: Variants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: "100% 50%",
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }
    }
  };

  const bgPulseVariant = (delay: number = 0): Variants => ({
    initial: { opacity: 0.03, scale: 0.95 },
    animate: {
      opacity: [0.03, 0.07, 0.03],
      scale: [0.95, 1.05, 0.95],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay }
    }
  });


  return (
    <motion.section 
      id="benefits" 
      className="py-28 relative overflow-hidden bg-gray-950 text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.07),transparent_70%)]"
          variants={bgPulseVariant(0)}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.07),transparent_70%)]"
          variants={bgPulseVariant(2)}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute inset-0 opacity-50"
          variants={{
            initial: {opacity: 0.02},
            animate: {opacity: [0.02, 0.05, 0.02], transition: {duration: 12, repeat: Infinity, ease:"easeInOut"}}
          }}
          initial="initial"
          animate="animate"
          style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgTCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')" }}
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header - using sectionVariants to stagger its direct children */}
        <motion.div className="text-center max-w-3xl mx-auto mb-20" variants={sectionVariants}>
          <motion.div 
            className="inline-flex items-center justify-center px-5 py-2 space-x-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-xs font-medium uppercase tracking-wider text-blue-300 mb-6"
            variants={headerItemVariants} // This will be staggered by the parent's sectionVariants
            // whileHover={{ scale: 1.05, y: -3, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.span 
              className="flex h-2.5 w-2.5 rounded-full bg-blue-500"
              // animate={{ scale: [1,1.4,1], opacity: [0.7,1,0.7], transition: { duration: 1.8, repeat: Infinity, ease:"easeInOut"}}}
            />
            <span>Business Impact</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold my-6 tracking-tight leading-tight"
            variants={headerItemVariants} // Staggered by parent
          >
            Transforming {" "}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
              style={{backgroundSize: "200% auto"}}
              variants={gradientTextVariants}
              initial="initial"
              animate="animate"
            >
              Lead Generation
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg md:text-xl"
            variants={headerItemVariants} // Staggered by parent
          >
            Our AI calling platform delivers quantifiable business results with enterprise-grade reliability, security, and scalability.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10"
          variants={cardGridVariants} // This will stagger its direct motion.div children (the cards)
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={benefitCardVariants} // Each card has its entrance animation
              className="h-full" 
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.3), 0px 0px 50px rgba(79,70,229,0.3)", 
                transition: { type: "spring", damping: 15, stiffness: 200 }
              }}
            >
              <Card className={`h-full overflow-hidden border-none bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl shadow-2xl transition-all duration-500 neo-glow premium-card relative`}>
                <CardContent className="p-8">
                  {/* Use staggerContainer for the two main columns inside the card */}
                  <motion.div 
                    className="flex flex-col md:flex-row gap-8 items-start h-full"
                    // This motion.div will orchestrate its direct motion children (icon column & text column)
                    initial="hidden" // Important: initial state for the container
                    whileInView="visible" // Trigger when this container is in view
                    viewport={{ once: true, amount: 0.3 }} // Adjust amount as needed
                    variants={staggerContainer(0.2, 0.1)} // Stagger icon column and text column
                  >
                    <motion.div 
                      className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:border-r md:border-white/10 md:pr-8 md:py-2 shrink-0"
                      variants={headerItemVariants} // Animate this column as one item
                    >
                      <motion.div 
                        className="relative p-4 rounded-full bg-white/10 backdrop-blur-xl mb-3 shadow-lg neo-glow-strong"
                        variants={iconWrapperVariants} // Icon specific animation
                      >
                        {benefit.icon}
                        <svg className="absolute -inset-1.5 w-[calc(100%+0.75rem)] h-[calc(100%+0.75rem)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.circle 
                              cx="50" cy="50" r="48" 
                              stroke="url(#ringGrad)" strokeWidth="2.5"
                              variants={animatedRingVariants}
                              initial="initial" // Framer Motion will pick up these if not part of parent's sequence
                              animate="animate"  // Or use whileInView here if ring animation should trigger on scroll
                            />
                            <defs>
                                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.8)" />
                                </linearGradient>
                            </defs>
                        </svg>
                      </motion.div>
                      
                      <motion.div 
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-indigo-300"
                        // Animate children of this if stats and label are separate motion elements
                        variants={headerItemVariants} // Or animate as a block
                      >
                        {benefit.stats} 
                      </motion.div>
                      <motion.div className="text-sm text-white/60" variants={headerItemVariants}>{benefit.statsLabel}</motion.div>
                    </motion.div>

                    <motion.div 
                      className="flex-1 flex flex-col justify-center"
                      variants={headerItemVariants} // Animate this column as one item
                                                    // Or apply staggerContainer here if h3, p, and bar div are direct motion children
                    >
                      <motion.h3 className="text-xl md:text-2xl font-bold mb-3 text-white" variants={headerItemVariants}>{benefit.title}</motion.h3>
                      <motion.p className="text-white/80 leading-relaxed text-sm md:text-base" variants={headerItemVariants}>{benefit.description}</motion.p>
                      
                      <motion.div className="mt-5 pt-5 border-t border-white/10" variants={headerItemVariants}>
                        <div className="h-2 w-full bg-white/10 overflow-hidden rounded-full">
                          <motion.div 
                            className={`h-full ${
                              index === 0 ? "bg-gradient-to-r from-blue-500 to-indigo-600" :
                              index === 1 ? "bg-gradient-to-r from-indigo-500 to-purple-600" :
                              index === 2 ? "bg-gradient-to-r from-purple-500 to-pink-600" :
                              "bg-gradient-to-r from-pink-500 to-red-600"
                            } rounded-full`}
                            variants={miniBarVariants(benefit.barWidth)}
                            initial="hidden" // Trigger these specifically when in view
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-24" 
          initial="hidden" whileInView="visible" viewport={{once:true, amount:0.1}}
          variants={staggerContainer(0.2, 0.3)} // Stagger title/desc and then the grid of metrics
        >
          <Card className="border-none overflow-hidden bg-black/30 backdrop-blur-2xl shadow-2xl neo-glow premium-card">
            <CardContent className="p-8 md:p-12">
              <motion.div className="text-center mb-12" variants={headerItemVariants}> {/* This will be staggered by parent */}
                <motion.h3 className="text-3xl md:text-4xl font-bold mb-3 text-white" variants={headerItemVariants}>AI Calling Impact</motion.h3>
                <motion.p className="text-white/70 text-lg" variants={headerItemVariants}>Real-time performance metrics from our enterprise clients</motion.p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
                variants={staggerContainer(0.25)} // Stagger each metric item
              >
                {callImpactMetrics.map((metric, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center"
                    variants={benefitCardVariants} // Reuse card entrance for consistency & staggering
                  >
                    <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7" />
                        <motion.circle 
                          cx="50" cy="50" r="45" 
                          fill="none" 
                          stroke={`url(#${metric.gradientId})`}
                          strokeWidth="7" 
                          strokeDasharray="282.7"
                          strokeLinecap="round"
                          variants={circularProgressVariants(metric.strokeDashoffset)}
                          initial="hidden" // Trigger these specifically when in view
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transform="rotate(-90 50 50)"
                        />
                        <defs>
                          <linearGradient id={metric.gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={metric.colors[0]} />
                            <stop offset="100%" stopColor={metric.colors[1]} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <motion.div 
                        className="absolute inset-0 flex flex-col items-center justify-center"
                        initial="hidden" whileInView="visible" viewport={{once: true, amount:0.5}}
                        variants={staggerContainer(0.1, 0.8)} // Delay text after circle animation
                      >
                        <motion.span 
                            className="text-4xl font-bold text-white"
                            variants={headerItemVariants} // Simple fade/slide for text
                        >
                            {metric.value}%
                        </motion.span>
                        <motion.span className="text-sm text-white/60 mt-1" variants={headerItemVariants}>{metric.label}</motion.span>
                      </motion.div>
                    </div>
                    <motion.p className="text-center text-sm text-white/70" variants={headerItemVariants}>{metric.description}</motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;