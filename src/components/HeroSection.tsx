import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, CheckCircle } from "lucide-react"; // CheckCircle for potential use, LineChart removed as unused
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
        ease: "circOut",
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
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.1 },
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
        damping: 20,
        stiffness: 100,
        delay,
        duration: 0.8,
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
        delay: i * 0.07, // Stagger each word
        duration: 0.8,
      },
    }),
  };

  const textHighlightVariants: Variants = {
    hidden: { width: "0%", opacity: 0 },
    visible: (delay: number = 0) => ({
      width: "100%",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1], delay }, // Smoother ease
    }),
  };

  const svgUnderlineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0, pathOffset: 1 },
    visible: (delay: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      pathOffset: 0,
      transition: { duration: 1.2, ease: "circOut", delay },
    }),
  };
  
  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "circOut", delay },
    }),
  };

  const bottomSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 18, stiffness: 80, delay, duration: 0.7, staggerChildren: 0.15 },
    }),
  };

  const bottomItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  // Data for headline animation
  const headlineText = "Let AI-Agent Manage your Sales and Lead Generation";
  const words = headlineText.split(" ");

  // Counters for widgets
  const leadGenAmount = useAnimatedCounter(2890);
  const memberGrowth = useAnimatedCounter(75);
  const totalRevenueAmount = useAnimatedCounter(600.32, 1.5); // Target for 4.32k, might need formatting
  const balanceAmount = useAnimatedCounter(60124);

  // Line chart animation
  const lineChartPathRef = useRef(null);
  const isLineChartInView = useInView(lineChartPathRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      id="hero"
      className="pt-20 pb-16 md:pt-10 md:pb-10 relative overflow-hidden bg-gray-950 text-white" // Dark theme
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
        <div className="text-center mb-12"> {/* Increased margin */}
          {/* Placeholder for trust badge - can be animated */}
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-12 lg:gap-8 relative py-10"> {/* Increased gap for mobile */}
          {/* Left dashboard widget */}
          <motion.div
            className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5" // Adjusted responsive width
            variants={widgetVariants("left")}
            custom={0.2} // delay passed to variant
            // initial, whileInView, viewport handled by parent sectionOverallVariants
          >
            <Card className="glass-effect-strong overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10"> {/* Stronger glass */}
              <div className="p-5"> {/* Increased padding */}
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
                <div className="h-24 w-full" ref={lineChartPathRef}> {/* Increased height */}
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
                      transition={{ duration: 2, ease: "circOut", delay: 0.5 }}
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-7 gap-1.5 mt-3"> {/* Increased gap/margin */}
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

          {/* Main content */}
        {/* Main content */}
<div className="flex-1 text-center space-y-8 max-w-3xl mx-auto py-8 lg:py-0"> {/* Increased spacing */}
  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white" // Reduced font size, changed tracking
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{ visible: { transition: { staggerChildren: 0.05 } } }} // Stagger for words
  >
    {words.map((word, i) => (
      // Use React.Fragment to handle the word and the following space correctly
      <React.Fragment key={`${word}-${i}`}>
        <motion.span className="inline-block" variants={headlineWordVariants} custom={i}>
          {word === "AI-Agent" ? (
            <motion.span
              className="inline-block relative overflow-hidden whitespace-nowrap" // Added whitespace-nowrap
              variants={{
                hidden: {width:0},
                visible: (delay=0) => ({width: "auto", transition:{duration:0.01, delay}})
              }}
              custom={ (words.indexOf("AI-Agent") * 0.07) + 0.4}
            >
               <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 -skew-y-2 scale-110" // Stylish highlight
                  variants={textHighlightVariants}
                  custom={ (words.indexOf("AI-Agent") * 0.07) + 0.5}
               />
               {/* px-2 adds space around "AI-Agent" within its highlight */}
               <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 px-2">{word}</span>
            </motion.span>
          ) : word === "Generation" ? (
            <span className="relative inline-block whitespace-nowrap"> {/* Added whitespace-nowrap */}
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
            // Render just the word, space will be handled outside this span
            word 
          )}
        </motion.span>
        {/* Add an explicit space character if it's not the last word */}
        {i < words.length - 1 && ' '}
      </React.Fragment>
    ))}
  </motion.h1>
  
  <motion.p
    className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto" // text-muted-foreground changed to text-white/70 for dark theme
    variants={paragraphVariants}
    custom={ (words.length * 0.07) + 0.2 } // Delay after heading
  >
    Transform enterprise communication with autonomous AI agents that deliver personalized conversations and comprehensive analytics at unprecedented scale.
  </motion.p>
</div>

          {/* Right dashboard widget */}
          <motion.div
            className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5" // Adjusted responsive width
            variants={widgetVariants("right")}
            custom={0.4} // delay
          >
            <Card className="glass-effect-strong overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10"> {/* Stronger glass */}
              <div className="p-5"> {/* Increased padding */}
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-sm font-semibold text-white/90">Total Revenue</h5>
                  {/* Optional icon here */}
                </div>
                <div className="flex items-center gap-4 mb-6"> {/* Increased gap */}
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
                    <div className="flex-1 bg-white/10 h-2.5 rounded-full overflow-hidden"> {/* Thicker bar */}
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full" 
                        initial={{width: 0}}
                        whileInView={{width: '75%'}}
                        viewport={{once: true, amount: 0.8}}
                        transition={{duration: 1.5, ease: "circOut", delay: 0.5}}
                      />
                    </div>
                    <span className="text-xs ml-3 text-green-400 font-medium">Optimal</span> {/* Changed label */}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-28 pt-12 border-t border-white/10" // Increased margin/padding
          variants={bottomSectionVariants}
          custom={0.3} // delay
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-12"> {/* Increased gap */}
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.7157 20.2843 4.40974 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.7157 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V16Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.5 9H20.5M8 4V2M16 4V2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, text: "Connect your lead sources or upload lists; our AI sales agents autonomously initiate personalized outreach.", widthClass: "w-20"},
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, text: "Deploy AI sales agents that engage prospects with natural, human-like conversations, ensuring 24/7 availability.", widthClass: "w-20"},
              { icon: <BarChart3 size={28} className="text-white/80" />, text: "Monitor sales activities, track key performance indicators, and gain actionable insights through a comprehensive analytics dashboard.", widthClass: "w-20"}
            ].map((item, index) => (
              <motion.div className="flex items-center gap-5 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300 shadow-lg" key={index} variants={bottomItemVariants}> {/* Increased gap, padding, rounded */}
                <motion.div 
                  className={`h-20 ${item.widthClass} rounded-full bg-gradient-to-br from-blue-600/70 to-indigo-600/70 p-3 flex items-center justify-center text-white shadow-xl shrink-0`} // Gradient, larger
                  whileHover={{scale: 1.1, rotate: -5, transition: {type: "spring", stiffness: 300}}}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default HeroSection;