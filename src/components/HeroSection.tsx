
import { Button } from "@/components/ui/button";
import { Phone, Users, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-pattern">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              AI-Powered Outreach
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Revolutionize Your Outreach with <span className="gradient-text">AI-Powered Calling</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Automate outbound calls, deliver personalized messages, and follow up with 
              SMS—effortlessly scale your sales and customer support.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="text-md px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-md px-6">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span className="text-sm">Automated Calling</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-primary" />
                <span className="text-sm">SMS Follow-ups</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span className="text-sm">Real-time Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] animate-float">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-primary/10 to-transparent rounded-full animate-pulse-light"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-effect rounded-2xl p-6 w-[320px]">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-primary/20 rounded-full"></div>
                      <div className="h-4 w-1/2 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-4xl">
                        AI
                      </div>
                      <div className="h-4 w-1/2 bg-primary/20 rounded-full mx-auto"></div>
                      <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-accent/30 flex items-center justify-center">
                          <Phone size={18} className="text-accent" />
                        </div>
                        <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center">
                          <Users size={18} className="text-secondary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground mb-4">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-2xl font-bold text-muted-foreground/70">Twilio</div>
            <div className="text-2xl font-bold text-muted-foreground/70">Google Cloud</div>
            <div className="text-2xl font-bold text-muted-foreground/70">Amazon</div>
            <div className="text-2xl font-bold text-muted-foreground/70">Salesforce</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
