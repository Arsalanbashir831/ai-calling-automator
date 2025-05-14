import { Database, CalendarDays, PhoneCall, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { useRef, useState, useEffect } from "react";
const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "Upload Lead Data",
    description: "Upload your CSV lead files through our enterprise-grade data pipeline. Our system intelligently processes contact information, segments audiences, and prepares your campaign.",
    icon: <Database className="w-10 h-10 text-blue-400" />,
    gradient: "from-blue-500/80 to-indigo-600/80"
  }, {
    number: "02",
    title: "Configure Call Schedule",
    description: "Set your outbound and inbound call preferences, time zones, call frequency, and follow-up parameters through our intuitive scheduling interface.",
    icon: <CalendarDays className="w-10 h-10 text-indigo-400" />,
    gradient: "from-indigo-500/80 to-purple-600/80"
  }, {
    number: "03",
    title: "Autonomous Calls",
    description: "Our AI engine automatically initiates calls to leads, handling conversations with natural voice, adapting to responses, and qualifying prospects in real-time.",
    icon: <PhoneCall className="w-10 h-10 text-purple-400" />,
    gradient: "from-purple-500/80 to-pink-600/80"
  }, {
    number: "04",
    title: "Analytics Dashboard",
    description: "Access comprehensive call analytics, conversion metrics, call recordings, and AI-generated insights through our executive dashboard.",
    icon: <BarChart3 className="w-10 h-10 text-pink-400" />,
    gradient: "from-pink-500/80 to-red-600/80"
  }];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Handle scroll-based step activation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate which step should be active based on scroll position
      const scrollProgress = (windowHeight - sectionTop) / (sectionHeight + windowHeight);
      const stepIndex = Math.min(Math.max(Math.floor(scrollProgress * 6) - 1, 0), steps.length - 1);
      setActiveStep(stepIndex);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);
  return <section id="how-it-works" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.07),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span>AI Calling Platform</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
              How Our <span className="gradient-text">AI Caller</span> Works
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our enterprise-grade platform transforms lead generation through autonomous AI calling, delivering exceptional results with minimal setup.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Left side: Vertical timeline */}
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[42px] w-0.5 bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30"></div>
            
            {steps.map((step, index) => <ScrollReveal key={index} animation="slide-up" delay={index * 100} className="relative">
                <div className={`flex mb-16 last:mb-0 transition-all duration-500 ${activeStep >= index ? 'opacity-100' : 'opacity-40'}`}>
                  {/* Step Number Circle */}
                  <div className="relative z-10">
                    <div className={`
                      w-[85px] h-[85px] rounded-full flex items-center justify-center text-2xl font-bold
                      ${activeStep >= index ? `bg-gradient-to-br ${step.gradient} neo-glow text-white` : 'bg-black/40 border border-white/10 text-white/50'}
                      transition-all duration-700
                    `}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="ml-8 pt-6">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${activeStep >= index ? 'text-primary' : 'text-white/50'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${activeStep >= index ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
          
          {/* Right side: Interactive Dashboard Preview */}
          <div className="lg:sticky lg:top-32 h-fit">
            <ScrollReveal animation="fade-in" delay={200}>
              <div className="relative rounded-2xl overflow-hidden neo-glow">
                {/* Dashboard header */}
                <div className="bg-black/80 backdrop-blur-lg border-b border-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm font-medium text-white/70">AI Caller Dashboard</div>
                    <div className="text-white/50 text-xs">v2.4.1</div>
                  </div>
                </div>

                {/* Dashboard content changes based on active step */}
                <div className="relative bg-black/50 backdrop-blur-md p-6 h-[400px]">
                  {/* Step 1: File Upload UI */}
                  <div className={`absolute inset-0 p-6 transition-all duration-700 ${activeStep === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <div className="text-xl font-semibold mb-4 text-white">Upload Lead Database</div>
                    <div className="border-2 border-dashed border-white/20 rounded-lg h-64 flex flex-col items-center justify-center p-6 bg-black/30">
                      <Database className="w-16 h-16 text-blue-400 mb-4" />
                      <p className="text-white mb-2 text-center">Drag & drop your CSV file or click to browse</p>
                      <p className="text-white/50 text-sm text-center mb-4">Supports .csv, .xlsx formats up to 100MB</p>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                        Select File
                      </button>
                    </div>
                    
                    <div className="flex mt-6 text-white/70 text-sm justify-between">
                      <div>Recent uploads: <span className="text-blue-400">3 files</span></div>
                      <div>Total contacts: <span className="text-blue-400">12,485</span></div>
                    </div>
                  </div>

                  {/* Step 2: Schedule Configuration */}
                  <div className={`absolute inset-0 p-6 transition-all duration-700 ${activeStep === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <div className="text-xl font-semibold mb-4 text-white">Call Schedule Setup</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 mb-2">Call Window</div>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-white">
                            <span>Start Time</span>
                            <span className="text-indigo-400">09:00 AM</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full mt-1.5">
                            <div className="h-full w-3/4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm text-white">
                            <span>End Time</span>
                            <span className="text-purple-400">05:00 PM</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full mt-1.5">
                            <div className="h-full w-2/3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 mb-2">Call Frequency</div>
                        <div className="text-3xl font-bold text-white mb-2">42<span className="text-sm font-normal text-white/50 ml-1">calls/hr</span></div>
                        <div className="h-1 w-full bg-white/10 rounded-full">
                          <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs text-white/50 mt-1">
                          <span>0</span>
                          <span>25</span>
                          <span>50</span>
                          <span>75</span>
                          <span>100</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 text-sm mb-1">Time Zone</div>
                        <div className="text-white">PST (UTC-8)</div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 text-sm mb-1">Work Days</div>
                        <div className="text-white">Mon-Fri</div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 text-sm mb-1">Retry Limit</div>
                        <div className="text-white">3 attempts</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: AI Calling in Progress */}
                  <div className={`absolute inset-0 p-6 transition-all duration-700 ${activeStep === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <div className="text-xl font-semibold mb-4 text-white">Live Call Center</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <PhoneCall className="h-6 w-6 text-purple-400" />
                          </div>
                          <div className="ml-4">
                            <div className="text-white">Active Call: <span className="text-purple-400">John Smith</span></div>
                            <div className="text-white/50 text-sm flex items-center">
                              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                              <span>00:02:47</span>
                            </div>
                          </div>
                          <div className="ml-auto text-right">
                            <div className="text-white/70">Sentiment</div>
                            <div className="text-emerald-400">Positive</div>
                          </div>
                        </div>
                        <div className="mt-3 h-16 w-full bg-black/40 rounded-md flex items-end overflow-hidden px-1">
                          <div className="h-2 w-1/6 bg-purple-500/50 mx-0.5 rounded-sm animate-pulse" style={{
                          animationDelay: "0ms"
                        }}></div>
                          <div className="h-4 w-1/6 bg-purple-500/50 mx-0.5 rounded-sm animate-pulse" style={{
                          animationDelay: "100ms"
                        }}></div>
                          <div className="h-8 w-1/6 bg-purple-500/50 mx-0.5 rounded-sm animate-pulse" style={{
                          animationDelay: "200ms"
                        }}></div>
                          <div className="h-10 w-1/6 bg-purple-500/50 mx-0.5 rounded-sm animate-pulse" style={{
                          animationDelay: "300ms"
                        }}></div>
                          <div className="h-6 w-1/6 bg-purple-500/50 mx-0.5 rounded-sm animate-pulse" style={{
                          animationDelay: "400ms"
                        }}></div>
                          <div className="h-3 w-1/6 bg-purple-500/50 mx-0.5 rounded-sm animate-pulse" style={{
                          animationDelay: "500ms"
                        }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 mb-2">Today's Progress</div>
                        <div className="flex items-baseline">
                          <div className="text-3xl font-bold text-white">128</div>
                          <div className="ml-2 text-sm text-emerald-400">+12%</div>
                        </div>
                        <div className="text-white/50 text-sm">calls completed</div>
                        <div className="h-1 w-full bg-white/10 rounded-full mt-2">
                          <div className="h-full w-3/5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 mb-2">Queue Status</div>
                        <div className="flex items-baseline">
                          <div className="text-3xl font-bold text-white">47</div>
                        </div>
                        <div className="text-white/50 text-sm">leads remaining</div>
                        <div className="h-1 w-full bg-white/10 rounded-full mt-2">
                          <div className="h-full w-1/4 bg-gradient-to-r from-pink-500 to-red-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Analytics Dashboard */}
                  <div className={`absolute inset-0 p-6 transition-all duration-700 ${activeStep === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <div className="text-xl font-semibold mb-4 text-white">Analytics Overview</div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 text-sm">Calls Made</div>
                        <div className="text-3xl font-bold text-white">3,847</div>
                        <div className="text-emerald-400 text-xs flex items-center mt-1">
                          <span>+12.5%</span>
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 text-sm">Leads Generated</div>
                        <div className="text-3xl font-bold text-white">852</div>
                        <div className="text-emerald-400 text-xs flex items-center mt-1">
                          <span>+8.3%</span>
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                        <div className="text-white/70 text-sm">Conversion Rate</div>
                        <div className="text-3xl font-bold text-white">22.1%</div>
                        <div className="text-emerald-400 text-xs flex items-center mt-1">
                          <span>+2.4%</span>
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                      <div className="flex justify-between mb-2">
                        <div className="text-white/70">Weekly Performance</div>
                        <div className="text-white/50 text-sm">Last 7 days</div>
                      </div>
                      <div className="h-40 w-full">
                        <div className="relative h-full">
                          {/* Chart bars */}
                          <div className="absolute bottom-0 left-0 w-full flex justify-between items-end h-full">
                            <div className="w-[12%] h-[45%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm opacity-80"></div>
                            <div className="w-[12%] h-[65%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm opacity-80"></div>
                            <div className="w-[12%] h-[55%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm opacity-80"></div>
                            <div className="w-[12%] h-[75%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm opacity-80"></div>
                            <div className="w-[12%] h-[60%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm opacity-80"></div>
                            <div className="w-[12%] h-[85%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm opacity-80"></div>
                            <div className="w-[12%] h-[70%] bg-gradient-to-t from-pink-600 to-pink-400 rounded-sm opacity-80"></div>
                          </div>
                          
                          {/* Line chart overlay */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,55 L14.28,35 L28.56,45 L42.84,25 L57.12,40 L71.4,15 L85.68,30 L100,30" fill="none" stroke="#ec4899" strokeWidth="1.5" />
                            <path d="M0,55 L14.28,35 L28.56,45 L42.84,25 L57.12,40 L71.4,15 L85.68,30 L100,30" fill="none" stroke="url(#gradient)" strokeWidth="1.5" strokeDasharray="1,1" />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                              </linearGradient>
                            </defs>
                          </svg>
                          
                          {/* Y-axis grid lines */}
                          <div className="absolute inset-0 flex flex-col justify-between">
                            <div className="border-b border-white/5 h-1/4"></div>
                            <div className="border-b border-white/5 h-1/4"></div>
                            <div className="border-b border-white/5 h-1/4"></div>
                            <div className="border-b border-white/5 h-1/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-white/50">
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;