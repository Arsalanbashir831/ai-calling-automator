
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import PricingFaq from "@/components/pricing/PricingFaq";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      description: "For individuals exploring AI calling capabilities",
      price: {
        monthly: "$0",
        yearly: "$0",
      },
      features: [
        "Up to 50 AI calls/month",
        "Upload up to 200 leads",
        "Basic AI voice (default voice)",
        "Google Calendar meeting booking (basic)",
        "Dashboard with recent call stats (last 7 days)",
        "Email or community support",
      ],
      cta: "Get Started",
      popular: false,
      badge: "",
    },
    {
      name: "Pro",
      description: "For professionals and growing businesses",
      price: {
        monthly: "$49",
        yearly: "$490",
      },
      features: [
        "Up to 1,000 AI calls/month",
        "Upload up to 5,000 leads",
        "Advanced AI voice options",
        "Full Google Calendar integration",
        "Detailed dashboard with analytics",
        "SMS/email follow-ups",
        "Priority email/chat support",
      ],
      cta: "Start Free Trial",
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Business",
      description: "For teams and enterprises with advanced needs",
      price: {
        monthly: "Custom",
        yearly: "Custom",
      },
      features: [
        "Custom or high-volume AI calls (5,000+)",
        "Unlimited lead uploads",
        "Custom AI voices and advanced call settings",
        "Advanced dashboard with team stats",
        "Exportable reports",
        "Dedicated support (phone/chat)",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
      badge: "Enterprise Ready",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-4 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Simple, <span className="gradient-text">transparent</span> pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Choose the perfect plan for your AI calling needs. Scale as you grow.
        </p>

        <Tabs
          defaultValue="monthly"
          className="w-full max-w-xs mt-8"
          onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly <Badge className="ml-1.5 bg-primary/20 text-primary">Save 15%</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative flex flex-col border ${
              plan.popular ? "neo-glow shadow-lg border-primary/40" : "border-border/50"
            } transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
          >
            {plan.badge && (
              <Badge
                className={`absolute right-4 top-4 ${
                  plan.popular ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {plan.badge}
              </Badge>
            )}
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-sm mt-1.5">{plan.description}</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">
                  {plan.price[billingCycle]}
                </span>
                {plan.price[billingCycle] !== "Custom" && (
                  <span className="text-muted-foreground">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    : ""
                }`}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-24">
        <PricingFaq />
      </div>

      <div className="mt-24 text-center bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 py-16 px-4 rounded-2xl border border-white/5 neo-frost animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Contact our sales team for enterprise solutions, special requirements, or to discuss how our AI calling
          platform can best serve your organization's unique needs.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
