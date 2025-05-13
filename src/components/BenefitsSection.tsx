
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Save Time & Resources",
      description: "Automate repetitive tasks like outbound calling and follow-up messaging.",
      stats: "Up to 70%",
      statsLabel: "Time Saved",
    },
    {
      title: "Increase Sales Efficiency",
      description: "Reach more leads and customers with minimal human intervention.",
      stats: "+35%",
      statsLabel: "More Leads Contacted",
    },
    {
      title: "Improve Customer Experience",
      description: "Engage customers with personalized calls and responses, anytime.",
      stats: "24/7",
      statsLabel: "Customer Support",
    },
    {
      title: "Scale Effortlessly",
      description: "Handle multiple campaigns and thousands of calls without extra overhead.",
      stats: "1000s",
      statsLabel: "Calls Per Day",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI Calling Agent?</h2>
          <p className="text-muted-foreground text-lg">
            Our AI technology delivers measurable business results and transforms your customer interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-muted/80">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="text-center md:text-left md:border-r md:border-border md:pr-6 md:py-2">
                    <div className="text-4xl font-bold text-primary">{benefit.stats}</div>
                    <div className="text-sm text-muted-foreground">{benefit.statsLabel}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
