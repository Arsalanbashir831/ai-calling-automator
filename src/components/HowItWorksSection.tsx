
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Enterprise Integration",
      description: "Seamlessly connect your CRM and import contacts through our secure API or enterprise-grade data pipeline.",
      icon: "🔄",
      gradient: "from-blue-500/80 to-indigo-600/80"
    },
    {
      number: "02",
      title: "Neural Campaign Design",
      description: "Define conversation flows, personalization variables, and adaptive response pathways using our visual AI builder.",
      icon: "🧠",
      gradient: "from-indigo-500/80 to-purple-600/80"
    },
    {
      number: "03",
      title: "Autonomous Execution",
      description: "Our quantum voice engine generates human-like conversations with real-time sentiment analysis and intelligent adaptation.",
      icon: "⚡",
      gradient: "from-purple-500/80 to-pink-600/80"
    },
    {
      number: "04",
      title: "Advanced Intelligence",
      description: "Access predictive analytics with conversation heatmaps, conversion optimization AI, and strategic recommendations.",
      icon: "📊",
      gradient: "from-pink-500/80 to-red-600/80"
    },
  ];

  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.07),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Enterprise Workflow</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
              Revolutionary AI <span className="gradient-text">Communication Process</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our quantum neural platform transforms enterprise communication with autonomous agents that adapt in real-time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
          {/* Connection lines between steps */}
          <div className="hidden lg:block absolute top-1/3 left-[23%] right-[23%] h-0.5 bg-gradient-to-r from-primary/40 via-white/5 to-secondary/40"></div>

          {steps.map((step, index) => (
            <ScrollReveal 
              key={index}
              animation="slide-up"
              delay={index * 100}
              className="relative z-10"
            >
              <Card className="relative overflow-hidden border-none shadow-lg bg-card/50 neo-glow backdrop-blur-sm group h-full">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-3xl group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="space-y-4">
                    <span className="text-6xl font-bold text-white/5">{step.number}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-primary font-medium">
                      <span>Explore capabilities</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/3 z-20">
                    <ArrowRight className="text-primary/40 animate-pulse-subtle" />
                  </div>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
