import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import ScrollReveal from "@/components/ScrollReveal"; // Replaced
import { motion, Variants, useAnimation } from "framer-motion"; // Added useAnimation
import { useRef, useEffect, useState } from "react"; // Added useEffect, useState for marquee

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

const gradientTextVariants: Variants = {
  initial: { backgroundPosition: "0% 50%" },
  animate: {
    backgroundPosition: "100% 50%",
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }
  }
};

const bgPulseVariant = (delay: number = 0): Variants => ({
  initial: { opacity: 0.05, scale: 0.95 },
  animate: {
    opacity: [0.05, 0.1, 0.05],
    scale: [0.95, 1.05, 0.95],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut", delay }
  }
});

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This quantum AI communication platform has fundamentally transformed our enterprise sales strategy. We've measured a 57% acceleration in sales cycles and 42% increase in enterprise deal closure.",
      name: "Alexandra Chen",
      position: "Chief Revenue Officer, Fortune 100 Tech",
      avatar: "AC",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "The predictive engagement system delivers perfect timing interactions that have transformed our customer journey. Our NPS scores increased by 38 points while operational costs decreased by 42%.",
      name: "Marcus Johnson",
      position: "VP Global Operations, Enterprise Solutions",
      avatar: "MJ",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "We integrated the neural platform across 27 business units in 14 countries with zero disruption. The ROI calculation came in at 378% over 18 months with transformation of customer engagement metrics.",
      name: "Sophia Nakamura",
      position: "Global CTO, Multinational Corporation",
      avatar: "SN",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "The AI's ability to handle complex multi-turn conversations has revolutionized our support channels, boosting CSAT by 25% while improving agent productivity by 60%.",
      name: "Dr. Evelyn Reed",
      position: "Chief Experience Officer, Global Services Inc.",
      avatar: "ER",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "Deploying this neural net for outbound prospecting was a game-changer. Lead qualification accuracy is now near 99%, and our sales pipeline has never been healthier. A truly transformative technology.",
      name: "Raj Patel",
      position: "Head of Sales Development, Tech Unicorn",
      avatar: "RP",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "As a financial institution, security and compliance are paramount. This platform not only met our stringent requirements but also delivered unprecedented efficiency in client communication.",
      name: "Isabella Rossi",
      position: "CIO, International Banking Group",
      avatar: "IR",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "The insights derived from the AI's interaction analytics have provided us with a much deeper understanding of our customer base, enabling highly targeted and effective marketing campaigns.",
      name: "Kenji Tanaka",
      position: "CMO, E-commerce Giant",
      avatar: "KT",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    }
  ];

  // For infinite scroll marquee
  const marqueeControls = useAnimation();
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);
  // Adjust DURATION for speed: higher value = slower scroll
  const DURATION = 40; // seconds for one full loop of original items

  useEffect(() => {
    if (!isHoveringMarquee) {
      marqueeControls.start({
        x: "-100%", // Move by the width of the first set of items
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: DURATION,
            ease: "linear",
          },
        },
      });
    } else {
      marqueeControls.stop();
    }
  }, [isHoveringMarquee, marqueeControls, testimonials.length]);


  return (
    <motion.section 
      id="testimonials" 
      className="py-28 overflow-hidden relative bg-gray-950 text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(29,78,216,0.1),transparent_50%)]"
          variants={bgPulseVariant(0)} initial="initial" animate="animate"
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]"
          variants={bgPulseVariant(1.5)} initial="initial" animate="animate"
        />
        <motion.div 
          className="absolute inset-0 opacity-50"
          variants={{
            initial: {opacity: 0.02},
            animate: {opacity: [0.02, 0.04, 0.02], transition: {duration: 12, repeat: Infinity, ease:"easeInOut"}}
          }}
          initial="initial" animate="animate"
          style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgTCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')" }}
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-20" variants={sectionVariants}>
          <motion.div 
            className="inline-flex items-center justify-center px-5 py-2 space-x-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg text-xs font-medium uppercase tracking-wider text-blue-300 mb-6"
            variants={headerItemVariants}
            whileHover={{ scale: 1.05, y: -3, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.span 
              className="flex h-2.5 w-2.5 rounded-full bg-blue-500"
              animate={{ scale: [1,1.4,1], opacity: [0.7,1,0.7], transition: { duration: 1.8, repeat: Infinity, ease:"easeInOut"}}}
            />
            <span>Global Transformation</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold my-6 tracking-tight leading-tight"
            variants={headerItemVariants}
          >
            Enterprise {" "}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
              style={{backgroundSize: "200% auto"}}
              variants={gradientTextVariants}
              initial="initial" animate="animate"
            >
              Success Stories
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg md:text-xl"
            variants={headerItemVariants}
          >
            Leading global organizations achieve strategic transformation with our neural communication platform.
          </motion.p>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee for Testimonials */}
      <div 
        className="w-full overflow-hidden mt-4 relative group/marquee" // Group for pause on hover detection
        onMouseEnter={() => setIsHoveringMarquee(true)}
        onMouseLeave={() => setIsHoveringMarquee(false)}
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"}} // Fades edges
      >
        <motion.div
          className="flex" // Flex container for side-by-side cards
          animate={marqueeControls}
        >
          {/* Render testimonials twice for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`testimonial-${index}`}
              className="flex-shrink-0 w-[calc(100%/1.5)] md:w-[calc(100%/2.5)] lg:w-[calc(100%/3.5)] xl:w-[calc(100%/4.2)] p-4" // Adjust width for # of visible items and padding
              // Add individual card hover effects if desired, separate from marquee pause
              whileHover={{ 
                scale: 1.03, 
                // y: -5, // Optional: lift card on hover
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <Card className="premium-card neo-glow h-full group bg-gradient-to-br from-gray-800/30 via-gray-900/40 to-black/50 border border-white/10 shadow-2xl hover:shadow-primary/20 transition-shadow duration-400 flex flex-col">
                <CardContent className="pt-8 px-8 relative flex-grow">
                  <motion.div 
                    className="mb-4 text-7xl font-serif text-blue-500/10 absolute -top-1 left-4 opacity-40 group-hover:text-blue-500/30 group-hover:scale-110 transition-all duration-400"
                    initial={{ opacity:0.4, scale: 1}}
                    whileHover={{ opacity:1, scale: 1.2}} // Hover on quote mark itself
                  >
                    ❝
                  </motion.div>
                  <p className="text-md lg:text-lg mb-8 relative z-10 leading-relaxed text-white/80 group-hover:text-white/95 transition-colors duration-300">
                    {testimonial.quote}
                  </p>
                </CardContent>
                <CardFooter className="border-t border-white/10 px-8 py-6 bg-black/20 backdrop-blur-sm mt-auto">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-blue-600/40 group-hover:border-blue-500/80 transition-colors duration-300 shadow-lg">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-700/30 text-blue-300">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/60">{testimonial.position}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;