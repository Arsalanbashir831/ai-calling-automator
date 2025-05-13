
import { ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Contacts",
      description: "Easily upload a CSV file with contact details and campaign IDs.",
      icon: "📋",
    },
    {
      number: "02",
      title: "Define Your Campaign",
      description: "Set the campaign goal, script, and voice settings.",
      icon: "🎯",
    },
    {
      number: "03",
      title: "Automate Your Calls",
      description: "Our AI generates personalized calls and handles follow-ups via SMS.",
      icon: "🤖",
    },
    {
      number: "04",
      title: "Track Results in Real-Time",
      description: "Monitor call success, SMS follow-up, and campaign performance through our user-friendly dashboard.",
      icon: "📊",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Our AI calling agent makes automated outreach simple, personal, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-none shadow-lg group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 text-2xl">
                  {step.icon}
                </div>
                <span className="text-5xl font-bold text-primary/10">{step.number}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 transform rotate-90 lg:rotate-0">
                  <ArrowDown className="text-muted-foreground/40" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
