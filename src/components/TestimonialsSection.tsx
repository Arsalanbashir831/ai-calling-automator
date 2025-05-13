
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollReveal from "@/components/ScrollReveal";
import { useRef } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This quantum AI communication platform has fundamentally transformed our enterprise sales strategy. We've measured a 57% acceleration in sales cycles and 42% increase in enterprise deal closure.",
      name: "Alexandra Chen",
      position: "Chief Revenue Officer, Fortune 100 Tech",
      avatar: "AC",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "The predictive engagement system delivers perfect timing interactions that have transformed our customer journey. Our NPS scores increased by 38 points while operational costs decreased by 42%.",
      name: "Marcus Johnson",
      position: "VP Global Operations, Enterprise Solutions",
      avatar: "MJ",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "We integrated the neural platform across 27 business units in 14 countries with zero disruption. The ROI calculation came in at 378% over 18 months with transformation of customer engagement metrics.",
      name: "Sophia Nakamura",
      position: "Global CTO, Multinational Corporation",
      avatar: "SN",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=faces",
    },
  ];

  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-28 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(29,78,216,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Global Transformation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
              Enterprise <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Leading global organizations achieve strategic transformation with our neural communication platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8" ref={cardsRef}>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index} 
              animation="slide-up"
              delay={index * 100}
              className="h-full"
            >
              <Card className="premium-card neo-glow h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                <CardContent className="pt-8 px-8 relative">
                  <div className="mb-4 text-6xl font-serif text-blue-500/20 absolute top-2 left-6 opacity-50 group-hover:opacity-100 transition-opacity">❝</div>
                  <p className="text-lg mb-8 relative z-10 leading-relaxed text-muted-foreground/90 group-hover:text-foreground/90 transition-colors">
                    {testimonial.quote}
                  </p>
                </CardContent>
                <CardFooter className="border-t border-white/5 px-8 py-5 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-blue-500/30 group-hover:border-blue-500/70 transition-colors shadow-md shadow-blue-500/10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
