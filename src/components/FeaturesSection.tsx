
import { Card, CardContent } from "@/components/ui/card";
import { Phone, BarChart, Shield, Database, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "AI-Driven Outbound Calls",
      description: "Automatically initiate sales or support calls with personalized scripts based on machine learning algorithms.",
      gradient: "from-blue-500/20 via-indigo-400/20 to-purple-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Smart Missed Call Follow-Ups",
      description: "Intelligent system detects patterns and sends perfectly timed, customized SMS messages when calls are missed.",
      gradient: "from-indigo-500/20 via-purple-400/20 to-pink-500/20",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Real-Time Analytics Dashboard",
      description: "Comprehensive data visualization with predictive insights into call statuses and connection performance.",
      gradient: "from-purple-500/20 via-pink-400/20 to-red-500/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Enterprise-Grade Campaigns",
      description: "Build sophisticated multi-channel campaigns with advanced segmentation and personalization algorithms.",
      gradient: "from-pink-500/20 via-red-400/20 to-orange-500/20", 
      iconBg: "bg-gradient-to-br from-pink-500 to-red-600"
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "AI-Powered Integrations",
      description: "Seamless connections with enterprise platforms through our advanced API ecosystem and intelligent connectors.",
      gradient: "from-blue-500/20 via-cyan-400/20 to-teal-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600"
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
    <section id="features" className="py-28" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Enterprise-Grade Features</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Our platform delivers cutting-edge capabilities to transform your outreach strategy with advanced AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group relative border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br ${feature.gradient} backdrop-blur-sm ${isVisible ? 'animate-slide-up animate-delay-' + (index * 100) : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-white/90 dark:bg-black/90"></div>
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="relative p-8 h-full flex flex-col z-10">
                <div className={`mb-6 p-3 rounded-xl ${feature.iconBg} shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm font-medium text-primary">Learn more</span>
                  <svg className="h-4 w-4 text-primary transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
