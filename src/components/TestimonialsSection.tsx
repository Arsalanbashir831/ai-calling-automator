
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This AI-powered calling agent revolutionized our sales process. We saw a 25% increase in lead engagement!",
      name: "John Doe",
      position: "CEO of Solar Solutions",
      avatar: "JD",
    },
    {
      quote: "The follow-up SMS feature has been a game changer for us. We never miss an opportunity.",
      name: "Jane Smith",
      position: "Marketing Manager at EcoTech",
      avatar: "JS",
    },
    {
      quote: "Our team can now focus on high-value tasks while the AI handles routine calls. ROI has been incredible.",
      name: "Robert Johnson",
      position: "Sales Director at TechCorp",
      avatar: "RJ",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what businesses achieve with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 px-6">
                <div className="mb-4 text-4xl text-primary">"</div>
                <p className="text-lg mb-6">
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
