
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Enterprise Resource Optimization",
      description: "Transform complex outreach workflows with our quantum AI, reducing operational overhead by up to 70% while enhancing quality.",
      stats: "70%",
      statsLabel: "Resource Efficiency",
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      gradient: "from-blue-800/20 to-indigo-800/20 dark:from-blue-500/10 dark:to-indigo-500/10"
    },
    {
      title: "Revenue Acceleration Matrix",
      description: "AI-optimized communication patterns and neural personalization algorithms generate 35% more qualified enterprise conversations.",
      stats: "35%",
      statsLabel: "Conversion Increase",
      icon: <TrendingUp className="h-6 w-6 text-indigo-400" />,
      gradient: "from-indigo-800/20 to-purple-800/20 dark:from-indigo-500/10 dark:to-purple-500/10"
    },
    {
      title: "Quantum Experience Enhancement",
      description: "Advanced machine learning models adapt conversation flows in real-time based on sentiment analysis and response patterns.",
      stats: "24/7",
      statsLabel: "Adaptive Intelligence",
      icon: <Users className="h-6 w-6 text-purple-400" />,
      gradient: "from-purple-800/20 to-pink-800/20 dark:from-purple-500/10 dark:to-pink-500/10"
    },
    {
      title: "Infinite Scalability Protocol",
      description: "Our distributed quantum infrastructure handles millions of concurrent interactions with enterprise-grade reliability and security.",
      stats: "∞",
      statsLabel: "Scale Capacity",
      icon: <Zap className="h-6 w-6 text-pink-400" />,
      gradient: "from-pink-800/20 to-red-800/20 dark:from-pink-500/10 dark:to-red-500/10"
    },
  ];

  return (
    <section id="benefits" className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.07),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.07),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Strategic Advantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
              Enterprise <span className="gradient-text">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our neural platform creates paradigm shifts in enterprise communication, delivering unprecedented ROI and strategic advantage.
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
              <Card className={`overflow-hidden border-none neo-glow bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl hover:shadow-xl transition-all duration-500 h-full card-shimmer premium-card`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
                    <div className="flex flex-col items-center md:items-start space-y-3 md:border-r md:border-white/10 md:pr-6 md:py-2">
                      <div className="p-3 rounded-full bg-white/5 backdrop-blur-xl mb-3 neo-glow">
                        {benefit.icon}
                      </div>
                      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary/70">{benefit.stats}</div>
                      <div className="text-sm text-muted-foreground">{benefit.statsLabel}</div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground/90 leading-relaxed">{benefit.description}</p>
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
