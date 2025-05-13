
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Data Integration",
      description: "Seamlessly connect your CRM and import contacts through our enterprise API or secure CSV import.",
      icon: "📊",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      number: "02",
      title: "AI Campaign Design",
      description: "Define conversation flows, personalization variables, and dynamic response pathways using our visual builder.",
      icon: "🎯",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      number: "03",
      title: "Autonomous Execution",
      description: "Our neural voice engine generates human-like conversations with real-time sentiment analysis and response adaptation.",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      number: "04",
      title: "Intelligence Center",
      description: "Access enterprise-grade analytics with predictive insights, conversation heatmaps, and conversion optimization recommendations.",
      icon: "📈",
      gradient: "from-pink-500 to-red-600"
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider">
              Streamlined Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">How It Works</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our enterprise platform makes intelligent communication simple, personal, and scalable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
          {/* Connection lines between steps */}
          <div className="hidden lg:block absolute top-1/3 left-[23%] right-[23%] h-0.5 bg-gradient-to-r from-primary/40 to-secondary/40"></div>

          {steps.map((step, index) => (
            <ScrollReveal 
              key={index}
              animation="slide-up"
              delay={index * 100}
              className="relative z-10"
            >
              <Card className="relative overflow-hidden border-none shadow-lg group h-full">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/10 text-3xl group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <div className="space-y-4">
                    <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/20 to-secondary/20">{step.number}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div className="mt-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-primary font-medium">
                      <span>Learn more</span>
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
