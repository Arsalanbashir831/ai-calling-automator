
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Save Time & Resources",
      description: "Automate complex outreach workflows with our enterprise-grade AI, reducing manual effort by up to 70%.",
      stats: "Up to 70%",
      statsLabel: "Time Saved",
      icon: <Clock className="h-6 w-6 text-primary" />,
      gradient: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
    },
    {
      title: "Increase Sales Efficiency",
      description: "AI-optimized calling patterns and personalization algorithms generate 35% more qualified conversations.",
      stats: "+35%",
      statsLabel: "More Leads Contacted",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      gradient: "from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30"
    },
    {
      title: "Improve Customer Experience",
      description: "Machine learning models adapt conversation flows based on customer responses for natural interactions.",
      stats: "24/7",
      statsLabel: "Customer Support",
      icon: <Users className="h-6 w-6 text-primary" />,
      gradient: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30"
    },
    {
      title: "Scale Effortlessly",
      description: "Our distributed cloud infrastructure handles thousands of concurrent calls with enterprise-grade reliability.",
      stats: "1000s",
      statsLabel: "Calls Per Day",
      icon: <Zap className="h-6 w-6 text-primary" />,
      gradient: "from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/30"
    },
  ];

  return (
    <section id="benefits" className="py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 md:px-6">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider">
              Business Impact
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Why Choose AI Calling Agent?</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our enterprise platform delivers measurable business results and transforms your customer interactions at scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal 
              key={index} 
              animation="slide-up" 
              delay={(index % 2) * 100}
              className="h-full"
            >
              <Card className={`overflow-hidden border-none shadow-lg bg-gradient-to-br ${benefit.gradient} hover:shadow-xl transition-all duration-500 h-full card-shimmer`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex flex-col items-center md:items-start space-y-3 md:border-r md:border-border md:pr-6 md:py-2">
                      <div className="p-3 rounded-full bg-primary/10 mb-3">
                        {benefit.icon}
                      </div>
                      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">{benefit.stats}</div>
                      <div className="text-sm text-muted-foreground">{benefit.statsLabel}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
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

export default BenefitsSection;
