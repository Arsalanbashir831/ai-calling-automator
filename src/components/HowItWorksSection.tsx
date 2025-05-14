
import { Upload, Calendar, PhoneCall, BarChart2, User, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ScrollReveal from "@/components/ScrollReveal";
import { useRef, useState, useEffect } from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "Setup Your Account",
      description: "Start by providing your basic information and uploading your leads database in CSV format.",
      icon: <Upload className="w-6 h-6 text-blue-400" />,
      content: (
        <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-white/10">
          <div className="text-lg font-semibold mb-4 text-white">Create an Account</div>
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-white/50" />
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-3 text-white" 
              />
            </div>
            <div className="relative">
              <svg className="absolute left-3 top-3 h-5 w-5 text-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-3 text-white" 
              />
            </div>
            <div className="relative">
              <svg className="absolute left-3 top-3 h-5 w-5 text-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-3 text-white" 
              />
              <svg className="absolute right-3 top-3 h-5 w-5 text-white/50 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "STEP 2",
      title: "Configure Call Schedule",
      description: "Set up your outbound calling schedule and define your preferences for the AI sales agent.",
      icon: <Calendar className="w-6 h-6 text-indigo-400" />,
      content: (
        <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-white/10">
          <div className="text-lg font-semibold mb-4 text-white">Call Schedule Setup</div>
          <div className="space-y-4">
            <div className="bg-black/30 p-4 rounded-lg border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-white">Business Hours</span>
                </div>
                <div className="flex h-6 items-center">
                  <div className="bg-indigo-900/50 w-10 h-5 rounded-full flex items-center p-1">
                    <div className="bg-indigo-500 w-4 h-4 rounded-full transform translate-x-4"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <div className="flex items-center">
                  <span className="text-white/70">9:00 AM</span>
                  <span className="mx-2 text-white/50">to</span>
                  <span className="text-white/70">5:00 PM</span>
                </div>
                <div className="text-indigo-400">Mon-Fri</div>
              </div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-lg border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm text-white">Call Frequency</span>
                </div>
                <div className="flex h-6 items-center">
                  <div className="bg-purple-900/50 w-10 h-5 rounded-full flex items-center p-1">
                    <div className="bg-purple-500 w-4 h-4 rounded-full transform translate-x-4"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/70">Calls per hour</div>
                <div className="h-2 w-full bg-white/10 rounded-full">
                  <div className="h-full w-3/5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-white/50">
                  <span>10</span>
                  <span>20</span>
                  <span>30</span>
                  <span>40</span>
                  <span>50</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-lg border border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                  <span className="text-sm text-white">Retry Settings</span>
                </div>
                <div className="text-pink-400 text-sm">3 attempts</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "STEP 3",
      title: "Set Your Preferences",
      description: "Customize how the AI agent handles conversations and qualifies leads based on your criteria.",
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      content: (
        <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-white/10">
          <div className="text-lg font-semibold mb-4 text-white">AI Agent Preferences</div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-7 gap-1 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/20 text-white text-xs">M</div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/20 text-white text-xs">T</div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-xs">W</div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-xs">T</div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/20 text-white text-xs">F</div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/50 text-xs">S</div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/50 text-xs">S</div>
            </div>
            
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <div className="flex justify-between items-center">
                <div className="text-sm text-white">Monday</div>
                <div className="flex items-center">
                  <span className="text-xs text-white/70 mr-2">13:00</span>
                  <span className="text-xs text-white/50 mx-1">to</span>
                  <span className="text-xs text-white/70">17:00</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <div className="flex justify-between items-center">
                <div className="text-sm text-white">Wednesday</div>
                <div className="flex items-center">
                  <span className="text-xs text-white/70 mr-2">09:00</span>
                  <span className="text-xs text-white/50 mx-1">to</span>
                  <span className="text-xs text-white/70">15:00</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 p-3 rounded-lg border border-white/5">
              <div className="flex justify-between items-center">
                <div className="text-sm text-white">Thursday</div>
                <div className="flex items-center">
                  <span className="text-xs text-white/70 mr-2">10:00</span>
                  <span className="text-xs text-white/50 mx-1">to</span>
                  <span className="text-xs text-white/70">16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ];

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
      const stepIndex = Math.min(
        Math.max(Math.floor(scrollProgress * 5) - 1, 0), 
        steps.length - 1
      );
      
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,33,182,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full bg-purple-950/50 border border-purple-800/30 text-xs font-medium uppercase tracking-wider text-purple-400">
              <span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
              <span>How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4 tracking-tight">
              Getting Started with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Our AI Scheduling Assistant
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how easy it is to streamline your lead generation and boost your 
              sales productivity with just a few simple steps
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal 
              key={index} 
              animation={index % 2 === 0 ? "fade-in" : "fade-in"}
              delay={index * 100}
            >
              <Card className={`relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-xl ${activeStep === index ? 'ring-2 ring-purple-500/50' : ''} h-full flex flex-col`}>
                <AspectRatio ratio={16/14} className="relative overflow-hidden">
                  <div className="absolute inset-0 p-6">
                    {step.content}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                </AspectRatio>
                <div className="p-6">
                  <div className="text-xs font-semibold text-purple-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
