
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-md">
              Start automating your calls and driving business growth today. Sign up for a free demo.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" variant="outline" className="text-white border-white/80 hover:bg-white hover:text-primary">
              Learn More
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 hover:text-primary">
              Sign Up for Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
