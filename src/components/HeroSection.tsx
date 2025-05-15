
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react"; 
import { Card } from "@/components/ui/card";
import { motion, Variants, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// Custom hook for number counting animation
function useAnimatedCounter(targetValue: number, duration: number = 1.5) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const isInViewRef = useRef(null);
  const isInView = useInView(isInViewRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetValue, {
        duration: duration,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [isInView, count, targetValue, duration]);

  return { ref: isInViewRef, displayValue: rounded };
}


const HeroSection = () => {
  // Variants for overall section and orchestration
  const sectionOverallVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2, delayChildren: 0.2, ease: "easeInOut" },
    },
  };

  // Variants for side widgets with potential 3D effect
  const widgetVariants = (direction: "left" | "right"): Variants => ({
    hidden: { opacity: 0, x: direction === "left" ? -80 : 80, rotateY: direction === "left" ? 30 : -30, scale: 0.9 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 80,
        delay,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  });

  // Advanced text animation for headline (word by word)
  const headlineWordVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  const textHighlightVariants: Variants = {
    hidden: { width: "0%", opacity: 0 },
    visible: (delay: number = 0) => ({
      width: "100%",
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut", delay },
    }),
  };

  const svgUnderlineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0, pathOffset: 1 },
    visible: (delay: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      pathOffset: 0,
      transition: { duration: 1.5, ease: "easeInOut", delay },
    }),
  };
  
  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay },
    }),
  };

  const bottomSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 18, stiffness: 80, delay, duration: 1, staggerChildren: 0.15 },
    }),
  };

  const bottomItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100, ease: "easeInOut" } },
  };

  // Data for headline animation
  const headlineText = "Let AI-Agent Manage your Sales and Lead Generation";
  const words = headlineText.split(" ");

  // Counters for widgets
  const leadGenAmount = useAnimatedCounter(2890);
  const memberGrowth = useAnimatedCounter(75);
  const totalRevenueAmount = useAnimatedCounter(600.32, 1.5); 
  const balanceAmount = useAnimatedCounter(60124);

  // Line chart animation
  const lineChartPathRef = useRef(null);
  const isLineChartInView = useInView(lineChartPathRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      id="hero"
      className="py-20 pt-28 md:pt-20 relative overflow-hidden bg-gray-950 text-white" 
      variants={sectionOverallVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Animated Gradient background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-70"
        animate={{
          background: [
            "radial-gradient(ellipse at top right, rgba(29,78,216,0.25), transparent 60%)",
            "radial-gradient(ellipse at top right, rgba(59,130,246,0.25), transparent 60%)",
            "radial-gradient(ellipse at top right, rgba(29,78,216,0.25), transparent 60%)",
          ]
        }}
        transition={{duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}}
      />
      <motion.div 
        className="absolute inset-0 -z-10 opacity-70"
        animate={{
          background: [
            "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.25), transparent 60%)",
            "radial-gradient(ellipse at bottom left, rgba(167,139,250,0.25), transparent 60%)",
            "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.25), transparent 60%)",
          ]
        }}
        transition={{duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 2}}
      />
      <motion.div 
        className="absolute inset-0 -z-9 opacity-40" 
        style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgTCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')" }}
        animate={{ y: ["0px", "-20px", "0px"], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-12">
          {/* Placeholder for trust badge */}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative py-4 md:py-10">
          {/* Main content - Moved to the top for mobile */}
          <div className="flex-1 text-center order-2 lg:order-2 space-y-6 md:space-y-8 max-w-3xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {words.map((word, i) => (
                <React.Fragment key={`${word}-${i}`}>
                  <motion.span className="inline-block" variants={headlineWordVariants} custom={i}>
                    {word === "AI-Agent" ? (
                      <motion.span
                        className="inline-block relative overflow-hidden whitespace-nowrap"
                        variants={{
                          hidden: {width:0},
                          visible: (delay=0) => ({width: "auto", transition:{duration:0.01, delay}})
                        }}
                        custom={ (words.indexOf("AI-Agent") * 0.07) + 0.4}
                      >
                         <motion.span 
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 -skew-y-2 scale-110"
                            variants={textHighlightVariants}
                            custom={ (words.indexOf("AI-Agent") * 0.07) + 0.5}
                         />
                         <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 px-2">{word}</span>
                      </motion.span>
                    ) : word === "Generation" ? (
                      <span className="relative inline-block whitespace-nowrap">
                        {word}
                        <motion.svg
                          className="absolute -bottom-3 left-0 w-full h-3"
                          viewBox="0 0 138 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          variants={svgUnderlineVariants}
                          custom={ (words.length * 0.07) + 0.3 }
                        >
                          <motion.path
                            d="M2 7.5C30.1613 3.5698 80 -1.08932 136 5.90112"
                            stroke="url(#underlineGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <defs>
                              <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#60a5fa" /> 
                                  <stop offset="100%" stopColor="#c084fc" />
                              </linearGradient>
                          </defs>
                        </motion.svg>
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                  {i < words.length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
              variants={paragraphVariants}
              custom={ (words.length * 0.07) + 0.2 }
            >
              Transform enterprise communication with autonomous AI agents that deliver personalized conversations and comprehensive analytics at unprecedented scale.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Button 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Left dashboard widget */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 xl:w-1/5 order-1 lg:order-1"
            variants={widgetVariants("left")}
            custom={0.2}
          >
            <Card className="glass-effect-strong overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
              <div className="p-5">
                <div className="mb-3 flex justify-between items-center">
                  <h5 className="text-sm font-semibold text-white/90">Lead Generation</h5>
                  <span className="text-blue-400">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.5V12.5M8 3.5L4 7.5M8 3.5L12 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="bg-blue-500/20 px-3 py-1.5 rounded-md inline-block mb-4 shadow-inner">
                  <span className="text-sm font-bold text-blue-300" ref={leadGenAmount.ref}>
                    $<motion.span>{leadGenAmount.displayValue}</motion.span>
                  </span>
                </div>
                <div className="h-24 w-full" ref={lineChartPathRef}>
                  <svg viewBox="0 0 100 40" width="100%" height="100%" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroChartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <motion.path 
                      d="M0,35 L5,28 L10,32 L15,20 L20,25 L25,18 L30,28 L35,15 L40,20 L45,5 L50,14 L55,10 L60,20 L65,25 L70,10 L75,20 L80,15 L85,25 L90,5 L95,15 L100,10" 
                      fill="none" 
                      stroke="url(#heroChartGradient)" 
                      strokeWidth="2.5" 
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isLineChartInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-7 gap-1.5 mt-3">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => <div key={i} className="text-xs text-center text-white/60">{day}</div>)}
                </div>
              </div>
              <div className="mt-4 border-t border-white/10">
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-3xl font-bold text-white" ref={memberGrowth.ref}>
                        <motion.span>{memberGrowth.displayValue}</motion.span>%
                      </div>
                      <div className="text-xs text-white/70">Member Growth</div>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs h-9 px-4 py-2 border-white/20 hover:bg-white/10 text-white/80">Details</Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right dashboard widget */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 xl:w-1/5 order-3 lg:order-3"
            variants={widgetVariants("right")}
            custom={0.4}
          >
            <Card className="glass-effect-strong overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-sm font-semibold text-white/90">Total Revenue</h5>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div ref={totalRevenueAmount.ref}>
                    <motion.span className="text-3xl font-bold text-white">
                      $<motion.span>{totalRevenueAmount.displayValue}</motion.span>k
                    </motion.span>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10">
                <div className="p-5">
                  <div className="mb-2 flex justify-between">
                    <div className="text-sm text-white/80">Balance</div>
                    <div className="text-xs px-2.5 py-1 bg-green-500/20 text-green-300 rounded-md font-medium">Reserved</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-4" ref={balanceAmount.ref}>
                    $<motion.span>{balanceAmount.displayValue}</motion.span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                        initial={{width: 0}}
                        whileInView={{width: '75%'}}
                        viewport={{once: true, amount: 0.8}}
                        transition={{duration: 1.5, ease: "easeInOut", delay: 0.5}}
                      />
                    </div>
                    <span className="text-xs ml-3 text-green-400 font-medium">Optimal</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default HeroSection;
