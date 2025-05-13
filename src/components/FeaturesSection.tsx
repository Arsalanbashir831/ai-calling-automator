
import { Card, CardContent } from "@/components/ui/card";
import { Phone, BellOff, Calendar, Users, Mail } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "AI-Driven Outbound Calls",
      description: "Automatically initiate sales or support calls with personalized scripts.",
    },
    {
      icon: <BellOff className="h-8 w-8 text-primary" />,
      title: "Smart Missed Call Follow-Ups",
      description: "Send customized SMS messages when calls are missed or unanswered.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Real-Time Analytics",
      description: "Gain insights into call statuses, connection rates, and SMS follow-up success.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customizable Campaigns",
      description: "Create multiple campaigns with unique scripts and goals.",
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Seamless Integrations",
      description: "Integrate with Twilio, Google Cloud, and other services for reliable communication.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground text-lg">
            Our platform is packed with powerful features to streamline your outreach efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow duration-300 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
