
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Calendar, PhoneCall, BarChart2, Activity, MessageSquare, Users, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const FeaturesSection = () => {
  const features = [
    {
      title: "Upload Your Lead Lists",
      description: "Easily import your lead generation files in CSV format and let our AI do the rest. No complex setup required.",
      icon: <Upload className="h-10 w-10 text-blue-400" />,
      gradient: "from-blue-500/10 via-indigo-400/10 to-purple-500/10",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      animation: "slide-in-left"
    },
    {
      title: "Smart Call Scheduling",
      description: "Set up automated calling schedules for outbound and inbound calls based on time zones and optimal contact windows.",
      icon: <Calendar className="h-10 w-10 text-indigo-400" />,
      gradient: "from-indigo-500/10 via-purple-400/10 to-pink-500/10",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
      animation: "slide-in-right"
    },
    {
      title: "AI Powered Calling",
      description: "Our intelligent AI automatically calls leads, engages in natural conversations, and qualifies prospects in real-time.",
      icon: <PhoneCall className="h-10 w-10 text-purple-400" />,
      gradient: "from-purple-500/10 via-pink-400/10 to-red-500/10",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      animation: "slide-in-left"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with real-time metrics, conversion rates, and actionable insights to optimize campaigns.",
      icon: <BarChart2 className="h-10 w-10 text-pink-400" />,
      gradient: "from-pink-500/10 via-red-400/10 to-orange-500/10", 
      iconBg: "bg-gradient-to-br from-pink-500 to-red-600",
      animation: "slide-in-right"
    },
    {
      title: "Engagement Tracking",
      description: "Track lead engagement and sentiment analysis across all conversations with detailed reporting and feedback.",
      icon: <Activity className="h-10 w-10 text-red-400" />,
      gradient: "from-blue-500/10 via-cyan-400/10 to-teal-500/10",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
      animation: "slide-in-left"
    },
    {
      title: "Conversation Intelligence",
      description: "AI analyzes conversations to extract insights, identify patterns, and continuously improve communication effectiveness.",
      icon: <MessageSquare className="h-10 w-10 text-cyan-400" />,
      gradient: "from-cyan-500/10 via-teal-400/10 to-emerald-500/10",
      iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
      animation: "slide-in-right"
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.07),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.07),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
              AI-Powered <span className="gradient-text">Lead Generation</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our intelligent calling platform automates outreach and qualification, delivering high-quality leads with minimal effort.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              animation={feature.animation}
              delay={index * 100}
              className="h-full"
            >
              <Card 
                className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
              >
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex items-center">
                    <div className={`mb-6 p-3 rounded-xl ${feature.iconBg} shadow-lg shadow-primary/10 transform hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
                  
                  <div className="absolute inset-0 bg-gradient-to-br opacity-5 from-primary/20 to-transparent"></div>
                  
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">Learn more</span>
                    <svg className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  {/* Card corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[120px] h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent transform rotate-45 translate-x-[40px] translate-y-[58px]"></div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Widget showcase */}
        <div className="mt-24 relative">
          <ScrollReveal animation="fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-3xl font-bold mb-6">Complete AI Call Platform</h3>
              <p className="text-muted-foreground">
                A comprehensive solution that handles every aspect of your lead generation process with cutting-edge AI technology.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="slide-in-left" className="col-span-1">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-400" />
                  Lead Management
                </h4>
                <div className="space-y-3 mt-5">
                  {[85, 64, 92, 78, 55].map((value, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-full bg-white/10 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" 
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 text-xs font-medium text-muted-foreground">{value}%</span>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" className="col-span-1">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <PhoneCall className="h-5 w-5 mr-2 text-indigo-400" />
                  AI Call Activity
                </h4>
                <div className="flex justify-between items-center mt-5">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">278</div>
                    <div className="text-xs text-muted-foreground">Calls Today</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">78%</div>
                    <div className="text-xs text-muted-foreground">Connection Rate</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-green-500">43</div>
                    <div className="text-xs text-muted-foreground">Qualified Leads</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-center text-green-500 text-sm">
                    <Activity className="h-4 w-4 mr-2" />
                    <span>+12.5% from last week</span>
                  </div>
                </div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-in-right" className="col-span-1">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-purple-400" />
                  Campaign Performance
                </h4>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {[
                    { label: "Cold Calls", value: "1,237" },
                    { label: "Conversations", value: "864" },
                    { label: "Meetings Set", value: "124" },
                    { label: "Revenue Gen", value: "$43.2K" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-lg font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
