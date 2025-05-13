
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollReveal from "@/components/ScrollReveal";
import { useRef } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This AI-powered calling agent revolutionized our enterprise sales process. We've seen a 25% increase in lead engagement and 40% shorter sales cycles.",
      name: "John Doe",
      position: "VP of Sales, Fortune 500 Tech",
      avatar: "JD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "The predictive follow-up system has been transformational. Our team can focus on strategic activities while the AI handles thousands of perfect-timing interactions.",
      name: "Jane Smith",
      position: "CMO at Global Retailer",
      avatar: "JS",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    },
    {
      quote: "We integrated the platform across 12 business units in 8 countries. The ROI was immediate, with customer satisfaction scores improving by 18% and operational costs dropping 30%.",
      name: "Robert Johnson",
      position: "CTO, Enterprise Solutions Inc.",
      avatar: "RJ",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    },
  ];

  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What Our Enterprise Clients Say</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Leading organizations achieve remarkable results with our AI communication platform.
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
              <Card className="border hover:shadow-lg transition-all duration-500 backdrop-blur-sm bg-white/80 dark:bg-black/80 h-full group hover:border-primary/30">
                <CardContent className="pt-8 px-8 relative">
                  <div className="mb-4 text-5xl font-serif text-primary/30 absolute top-2 left-6 opacity-50 group-hover:opacity-100 transition-opacity">❝</div>
                  <p className="text-lg mb-8 relative z-10 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </CardContent>
                <CardFooter className="border-t px-8 py-5 bg-muted/30">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
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
