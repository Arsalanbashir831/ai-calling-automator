
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { Clock, BarChart3, PhoneCall, Database } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Exponential Efficiency",
      description: "Our AI Caller handles all your leads with perfect precision, running 24/7 without fatigue. Achieve 10x more conversations than human teams at a fraction of the cost.",
      stats: "10x",
      statsLabel: "Call Volume",
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      gradient: "from-blue-800/20 to-indigo-800/20 dark:from-blue-500/10 dark:to-indigo-500/10"
    },
    {
      title: "Conversion Optimization",
      description: "AI-powered conversations adapt in real-time to prospect responses, using neural network algorithms that continuously improve conversion rates over time.",
      stats: "37%",
      statsLabel: "Higher Conversion",
      icon: <PhoneCall className="h-6 w-6 text-indigo-400" />,
      gradient: "from-indigo-800/20 to-purple-800/20 dark:from-indigo-500/10 dark:to-purple-500/10"
    },
    {
      title: "Complete Data Control",
      description: "Securely upload your lead data, segment audiences, and let our system handle the rest. Your data remains encrypted and secure throughout the entire process.",
      stats: "100%",
      statsLabel: "Data Security",
      icon: <Database className="h-6 w-6 text-purple-400" />,
      gradient: "from-purple-800/20 to-pink-800/20 dark:from-purple-500/10 dark:to-pink-500/10"
    },
    {
      title: "Advanced Analytics",
      description: "Access comprehensive dashboards showing call performance, conversions, customer sentiment analysis, and actionable insights to optimize your campaigns.",
      stats: "Real-time",
      statsLabel: "Performance Data",
      icon: <BarChart3 className="h-6 w-6 text-pink-400" />,
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
              <span>Business Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
              Transforming <span className="gradient-text">Lead Generation</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Our AI calling platform delivers quantifiable business results with enterprise-grade reliability, security, and scalability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal 
              key={index} 
              animation="slide-up" 
              delay={(index % 2) * 100}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border-none neo-glow bg-gradient-to-br backdrop-blur-xl hover:shadow-xl transition-all duration-500 premium-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
                    <div className="flex flex-col items-center md:items-start space-y-3 md:border-r md:border-white/10 md:pr-6 md:py-2">
                      <div className="relative p-3 rounded-full bg-white/5 backdrop-blur-xl mb-3 neo-glow">
                        {benefit.icon}
                        {/* Animated ring */}
                        <div className="absolute -inset-1 rounded-full border border-primary/20 animate-pulse-subtle"></div>
                      </div>
                      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary/70">{benefit.stats}</div>
                      <div className="text-sm text-muted-foreground">{benefit.statsLabel}</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground/90 leading-relaxed">{benefit.description}</p>
                      
                      {/* Enhanced visual element - Mini stat */}
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <div className="h-1.5 w-full bg-white/5 overflow-hidden rounded-full">
                          <div className={`h-full ${
                            index === 0 ? "w-[80%] bg-gradient-to-r from-blue-500 to-indigo-600" :
                            index === 1 ? "w-[60%] bg-gradient-to-r from-indigo-500 to-purple-600" :
                            index === 2 ? "w-[95%] bg-gradient-to-r from-purple-500 to-pink-600" :
                            "w-[75%] bg-gradient-to-r from-pink-500 to-red-600"
                          } rounded-full animate-pulse-subtle`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Call tracking visualization */}
        <ScrollReveal animation="fade-in" delay={200} className="mt-16">
          <Card className="border-none overflow-hidden neo-glow backdrop-blur-xl premium-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">AI Calling Impact</h3>
                <p className="text-muted-foreground">Real-time performance metrics from our enterprise clients</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Metric 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-36 h-36">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="8" 
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="url(#blue-gradient)" 
                        strokeWidth="8" 
                        strokeDasharray="282.7"
                        strokeDashoffset="56.5" 
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">80%</span>
                      <span className="text-sm text-muted-foreground">Cost Reduction</span>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Compared to traditional call centers
                  </p>
                </div>
                
                {/* Metric 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-36 h-36">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="8" 
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="url(#purple-gradient)" 
                        strokeWidth="8" 
                        strokeDasharray="282.7"
                        strokeDashoffset="96.1" 
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#d946ef" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">66%</span>
                      <span className="text-sm text-muted-foreground">More Leads</span>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Average increase in qualified leads
                  </p>
                </div>
                
                {/* Metric 3 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-36 h-36">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="8" 
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="url(#pink-gradient)" 
                        strokeWidth="8" 
                        strokeDasharray="282.7"
                        strokeDashoffset="14.1" 
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#d946ef" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold">95%</span>
                      <span className="text-sm text-muted-foreground">Accuracy</span>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    In lead qualification and data capture
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BenefitsSection;
