
import { Card, CardContent } from "@/components/ui/card";
import { Phone, BarChart3, Shield, Database, Rocket, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Phone className="h-10 w-10 text-blue-400" />,
      title: "Quantum Voice Generation",
      description: "Our AI creates hyper-realistic, emotionally intelligent conversations that adapt in real-time to customer responses.",
      gradient: "from-blue-500/10 via-indigo-400/10 to-purple-500/10",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      slideDirection: "left"
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-400" />,
      title: "Predictive Engagement System",
      description: "AI algorithms determine the perfect timing for follow-ups, automatically sending personalized messages across channels.",
      gradient: "from-indigo-500/10 via-purple-400/10 to-pink-500/10",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
      slideDirection: "right"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-purple-400" />,
      title: "Neural Analytics Engine",
      description: "Advanced data visualization with predictive intelligence that transforms conversation data into actionable strategies.",
      gradient: "from-purple-500/10 via-pink-400/10 to-red-500/10",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      slideDirection: "left"
    },
    {
      icon: <Database className="h-10 w-10 text-pink-400" />,
      title: "Enterprise Campaign Matrix",
      description: "Design sophisticated multi-dimensional campaigns with our neural network personalization algorithms.",
      gradient: "from-pink-500/10 via-red-400/10 to-orange-500/10", 
      iconBg: "bg-gradient-to-br from-pink-500 to-red-600",
      slideDirection: "right"
    },
    {
      icon: <Rocket className="h-10 w-10 text-red-400" />,
      title: "Quantum Integration Hub",
      description: "Enterprise-grade connections with mission-critical platforms through our advanced API ecosystem and secure connectors.",
      gradient: "from-blue-500/10 via-cyan-400/10 to-teal-500/10",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
      slideDirection: "left"
    },
    {
      icon: <Cpu className="h-10 w-10 text-cyan-400" />,
      title: "Autonomous Learning System",
      description: "Self-improving AI that evolves with each interaction, continuously optimizing communication strategies and outcomes.",
      gradient: "from-cyan-500/10 via-teal-400/10 to-emerald-500/10",
      iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
      slideDirection: "right"
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
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Advanced Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
              Enterprise-Grade <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Cutting-edge AI features that deliver unmatched performance, security, and scalability for mission-critical communication.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              animation={`slide-in-${feature.slideDirection}`}
              delay={index * 100}
              className="h-full"
            >
              <Card 
                className="premium-card group h-full transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/5 neo-glow"
              >
                <CardContent className="relative p-8 h-full flex flex-col z-10">
                  <div className={`mb-8 p-4 rounded-xl ${feature.iconBg} shadow-lg shadow-primary/10 transform group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-medium text-primary">Explore capability</span>
                    <svg className="h-4 w-4 text-primary transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
