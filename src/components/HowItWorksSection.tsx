import { Upload, Calendar, PhoneCall, BarChart2, User, Settings, Mail, Lock, Eye, EyeOff } from "lucide-react"; // Added Mail, Lock, Eye, EyeOff
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
// import ScrollReveal from "@/components/ScrollReveal"; // Replaced by Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react"; // useEffect is not used here, but kept from original

// Helper for staggering children
const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const fadeInFromBottom = (delay = 0, duration = 0.5) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration,
      delay,
    },
  },
});

const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeInOut"
    },
  },
});

const scaleIn = (delay = 0, duration = 0.4) => ({
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay,
      duration,
    },
  },
});

const drawLine = (delay = 0, duration = 0.8) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "circOut",
    },
  },
});

const HowItWorksSection = () => {
  const [showPassword, setShowPassword] = useState(false);

  const steps = [
    {
      step: "STEP 1",
      title: "Setup Your Account",
      description: "Provide your basic information and upload your leads database in CSV format to kickstart your journey.",
      icon: <Upload className="w-8 h-8 text-blue-400" />, // Icon size increased
      content: (motionInstance) => ( // Pass motion instance for dynamic content animation
        <motion.div 
          className="bg-black/50 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl"
          variants={staggerContainer(0.15)} // Stagger children inside content
        >
          <motion.div className="text-lg font-semibold mb-6 text-white" variants={fadeInFromBottom(0.1)}>Create an Account</motion.div>
          <motion.div className="space-y-4" variants={staggerContainer(0.1, 0.2)}>
            <motion.div className="relative" variants={fadeInFromBottom()}>
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
            </motion.div>
            <motion.div className="relative" variants={fadeInFromBottom()}>
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
            </motion.div>
            <motion.div className="relative" variants={fadeInFromBottom()}>
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-12 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
              />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/90 transition-colors">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </motion.div>
             <motion.button 
                variants={fadeInFromBottom(0.1)}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      )
    },
    {
      step: "STEP 2",
      title: "Configure Call Schedule",
      description: "Define your outbound calling windows and AI agent preferences for optimal engagement.",
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      content: (motionInstance) => ( // Placeholder for more detailed animation
        <motion.div className="bg-black/50 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl" variants={staggerContainer(0.1)}>
          <motion.div className="text-lg font-semibold mb-4 text-white" variants={fadeInFromBottom(0.1)}>Call Schedule Setup</motion.div>
          {/* Add animated elements here similar to Step 1 */}
          <motion.div className="space-y-4" variants={staggerContainer(0.1, 0.2)}>
            <motion.div className="bg-black/40 p-4 rounded-lg border border-white/10" variants={fadeInFromBottom()}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div><span className="text-sm text-white">Business Hours</span></div>
                {/* Simplified Toggle for brevity, can be animated component */}
                <div className="flex h-6 items-center"><div className="bg-blue-700 w-10 h-5 rounded-full flex items-center p-0.5"><div className="bg-blue-300 w-4 h-4 rounded-full transform translate-x-5 transition-transform"></div></div></div>
              </div>
              <div className="flex justify-between text-xs"><div className="flex items-center"><span className="text-white/70">9:00 AM</span><span className="mx-2 text-white/50">-</span><span className="text-white/70">5:00 PM</span></div><div className="text-blue-400">Mon-Fri</div></div>
            </motion.div>
            <motion.div className="bg-black/40 p-4 rounded-lg border border-white/10" variants={fadeInFromBottom()}>
                <div className="flex items-center justify-between mb-2"><div className="flex items-center"><div className="w-3 h-3 rounded-full bg-indigo-500 mr-2 animate-pulse"></div><span className="text-sm text-white">Call Frequency</span></div></div>
                <div className="space-y-2">
                    <div className="text-xs text-white/70">Calls per hour: <span className="font-bold text-indigo-300">30</span></div>
                    <div className="h-2.5 w-full bg-white/10 rounded-full"><motion.div initial={{width:0}} whileInView={{width:'60%'}} transition={{duration:1, delay:0.5}} className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></motion.div></div>
                </div>
            </motion.div>
             <motion.button 
                variants={fadeInFromBottom(0.1)}
                className="w-full bg-white/10 hover:bg-white/20 border border-blue-500 text-blue-400 font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Customize Schedule
            </motion.button>
          </motion.div>
        </motion.div>
      )
    },
    {
      step: "STEP 3",
      title: "Set Your Preferences",
      description: "Tailor the AI's conversational style and lead qualification criteria to match your unique strategy.",
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      content: (motionInstance) => ( // Placeholder for more detailed animation
        <motion.div className="bg-black/50 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl" variants={staggerContainer(0.1)}>
          <motion.div className="text-lg font-semibold mb-4 text-white" variants={fadeInFromBottom(0.1)}>AI Agent Preferences</motion.div>
           {/* Add animated elements here similar to Step 1 */}
          <motion.div className="space-y-3" variants={staggerContainer(0.08, 0.2)}>
            <motion.p className="text-sm text-white/80 mb-3" variants={fadeInFromBottom()}>Define active calling days and times:</motion.p>
            <motion.div className="grid grid-cols-7 gap-2 mb-4" variants={fadeInFromBottom()}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <motion.div 
                  key={day} 
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${[2,3].includes(i) ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                  whileHover={{y: -2}}
                  variants={scaleIn(i*0.05)}
                >
                  {day}
                </motion.div>
              ))}
            </motion.div>
            {[ "Mon: 1pm - 5pm", "Wed: 9am - 3pm", "Thu: 10am - 4pm"].map((slot, i) => (
                 <motion.div className="bg-black/40 p-3.5 rounded-lg border border-white/10 flex justify-between items-center" variants={fadeInFromBottom(i*0.1)}>
                    <span className="text-sm text-white">{slot.split(':')[0]}</span>
                    <span className="text-xs text-blue-300 bg-blue-800/50 px-2 py-1 rounded-md">{slot.split(':')[1].trim()}</span>
                </motion.div>
            ))}
             <motion.button 
                variants={fadeInFromBottom(0.1)}
                className="w-full mt-4 bg-white/10 hover:bg-white/20 border border-purple-500 text-purple-400 font-semibold py-3 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Fine-tune AI Behavior
            </motion.button>
          </motion.div>
        </motion.div>
      )
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation for the gradient text shimmer
  const gradientTextVariants = {
    initial: { backgroundPosition: "200% center" },
    animate: {
      backgroundPosition: "-200% center",
      transition: {
        duration: 3, // Slower shimmer
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  
  // Animation for the background radial gradient pulse
  const bgPulseVariants = {
    initial: { opacity: 0.05, scale: 1 },
    animate: {
      opacity: [0.05, 0.1, 0.05], // More subtle pulse
      scale: [1, 1.05, 1], // Slight scale pulse
      transition: {
        duration: 8, // Slower pulse
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  return (
    <motion.section 
      id="how-it-works" 
      className="py-28 relative overflow-hidden bg-black" // Added bg-black for darker theme
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.2)}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(33,150,243,0.1),transparent_70%)]"
          variants={bgPulseVariants}
          initial="initial"
          animate="animate"
        />
        {/* Optional: Add more subtle animated background shapes/particles here */}
         <div className="absolute -bottom-1/3 -left-1/4 w-2/3 h-2/3 rounded-full bg-gradient-to-br from-blue-900/30 via-transparent to-transparent opacity-50 blur-3xl transform-gpu"></div>
         <div className="absolute -top-1/3 -right-1/4 w-2/3 h-2/3 rounded-full bg-gradient-to-tl from-indigo-900/30 via-transparent to-transparent opacity-50 blur-3xl transform-gpu"></div>
      </div>
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div className="text-center mb-20" variants={staggerContainer(0.2)}>
          <motion.div 
            className="inline-flex items-center justify-center px-5 py-2 space-x-2.5 rounded-full bg-blue-950/70 border border-blue-700/50 text-xs font-medium uppercase tracking-wider text-blue-300 shadow-md mb-6"
            variants={fadeInFromBottom(0)}
            // whileHover={{ y: -3, scale: 1.05, transition: {type: "spring", stiffness:300}}}
          >
            <motion.span 
              className="flex h-2.5 w-2.5 rounded-full bg-blue-500"
              // animate={{ scale: [1, 1.3, 1], transition: {duration: 1.5, repeat: Infinity}}}
            />
            <span>How It Works</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold mt-6 mb-5 tracking-tight text-white leading-tight" // Adjusted leading
            variants={fadeInFromBottom(0.1)}
          >
            Getting Started with <br />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
              style={{ backgroundSize: "200% auto" }} // For gradient animation
              variants={gradientTextVariants} // Apply shimmer
              initial="initial" // Start position for shimmer
              animate="animate"   // Animate to end position for shimmer
            >
              Our AI Scheduling Assistant
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto" // Increased font size and max-width
            variants={fadeInFromBottom(0.2)}
          >
            See how easily you can streamline lead generation and boost sales productivity with just a few simple, intuitive steps.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-12" // Increased gap
          variants={staggerContainer(0.2, 0.5)} // Stagger cards, delay after header
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInFromBottom(index * 0.15, 0.6)} // Staggered entrance for each card
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-md border border-white/10 shadow-2xl h-full flex flex-col transition-all duration-300 group`}>
                {/* Animated Decorative Line */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 group-hover:opacity-100"
                  initial={{ scaleX: 0, originX: 0.5 }}
                  whileInView={{ scaleX: 1, transition: { duration: 0.8, delay: 0.3 + index * 0.1, ease: "circOut" } }}
                  viewport={{ once: true }}
                />
                
                <AspectRatio ratio={16/14} className="relative overflow-hidden rounded-t-2xl">
                  <motion.div 
                    className="absolute inset-0 p-1" // Reduced padding to allow content's own padding to shine
                    initial="hidden"
                    whileInView="visible" // Trigger content animation when card is in view
                    viewport={{ once: true, amount: 0.4 }} // Content animates when 40% visible
                    variants={staggerContainer(0.1, 0.5)} // Delay content animation slightly
                  >
                    {step.content(motion)} 
                  </motion.div>
                </AspectRatio>
                
                <motion.div 
                  className="p-6 md:p-8 flex-grow flex flex-col" // Increased padding
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer(0.1, 0.2)} // Stagger text content
                >
                  <motion.div className="flex items-center mb-4" variants={fadeInFromBottom()}>
                    <motion.div 
                      className="mr-4 p-2 bg-blue-900/50 rounded-lg border border-blue-700/60 shadow-lg"
                      whileHover={{scale:1.1, rotate: -5, transition: {type:"spring", stiffness:300}}}
                      variants={scaleIn(0.1)}
                    >
                      {step.icon}
                    </motion.div>
                    <div>
                      <motion.div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1" variants={fadeInFromBottom(0.05)}>{step.step}</motion.div>
                      <motion.h3 className="text-xl md:text-2xl font-bold text-white" variants={fadeInFromBottom(0.1)}>{step.title}</motion.h3>
                    </div>
                  </motion.div>
                  <motion.p className="text-white/70 text-sm md:text-base flex-grow" variants={fadeInFromBottom(0.15)}>{step.description}</motion.p>
                   <motion.div 
                      className="mt-6 self-start"
                      variants={fadeInFromBottom(0.2)}
                    >
                        <button className="text-sm text-blue-300 hover:text-blue-100 font-medium group/button relative">
                            Learn More
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover/button:w-full"></span>
                        </button>
                    </motion.div>
                </motion.div>
                
                {/* Enhanced Hover Glow Effect */}
                <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 pointer-events-none"
                    whileHover={{ 
                        borderColor: "rgba(59, 130, 246, 0.5)", /* blue-500 with opacity */
                        boxShadow: "0 0 25px rgba(59, 130, 246, 0.4), 0 0 10px rgba(59, 130, 246, 0.3) inset",
                        transition: { duration: 0.3 }
                    }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;