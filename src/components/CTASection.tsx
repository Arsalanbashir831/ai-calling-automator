
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/10 mix-blend-multiply filter blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 mix-blend-multiply filter blur-3xl animate-float-slow" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl backdrop-blur-sm">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
                Enterprise Solution
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Transform Your<br className="hidden md:block" /> Communication Strategy?
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                Join industry leaders who leverage our AI platform to scale their outreach, increase conversions, and deliver exceptional customer experiences.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="h-5 w-5 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Enterprise SLA & Support</span>
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="h-5 w-5 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated Success Manager</span>
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="h-5 w-5 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom AI Voice Training</span>
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="h-5 w-5 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced Analytics Portal</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 min-w-[300px] lg:min-w-[350px] bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule a Demo</h3>
              <p className="text-white/80 mb-4">See our enterprise platform in action with a personalized demo.</p>
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 text-base font-medium">
                  Book Enterprise Demo
                </Button>
                <Button size="lg" variant="outline" className="w-full text-white border-white/80 hover:bg-white/20 text-base font-medium">
                  Contact Sales
                </Button>
              </div>
              <div className="mt-4 text-sm text-white/70 text-center">
                Typically replies within 24 hours
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
