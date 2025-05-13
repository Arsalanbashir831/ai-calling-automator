
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-transparent to-black/10"></div>
        <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-blue-500/10 filter blur-[100px] opacity-60 animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-purple-500/10 filter blur-[100px] opacity-60 animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/5 filter blur-[80px] opacity-60 animate-float-slow" style={{animationDelay: '4s'}}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-10 p-10 md:p-16 rounded-3xl neo-glow overflow-hidden">
            {/* Background gradient for the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/20 backdrop-blur-xl"></div>
            
            {/* Content container */}
            <div className="relative flex-1 space-y-6">
              <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
                <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                <span>Enterprise Solution</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Transform Your<br className="hidden md:block" /> Communication Strategy?
              </h2>
              <p className="text-muted-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                Join industry leaders leveraging our neural platform to redefine enterprise communication, accelerate growth, and deliver exceptional experiences.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <li className="flex items-center gap-2 text-muted-foreground/90">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
                    <svg className="h-3 w-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Enterprise SLA & Priority Support</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground/90">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
                    <svg className="h-3 w-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Dedicated Success Engineer</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground/90">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
                    <svg className="h-3 w-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Custom Neural Voice Training</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground/90">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
                    <svg className="h-3 w-3 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Quantum Analytics Platform</span>
                </li>
              </ul>
            </div>
            
            <div className="relative flex flex-col gap-4 min-w-[300px] lg:min-w-[350px] neo-frost p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-primary/5 to-purple-500/5 rounded-2xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Schedule Executive Demo</h3>
                <p className="text-muted-foreground mb-6">Experience our enterprise platform with a personalized consultation.</p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full h-14 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 text-base font-medium neo-glow">
                    Request Enterprise Access
                  </Button>
                  <Button size="lg" variant="outline" className="w-full h-14 neo-frost border-white/10 hover:bg-white/10 text-base font-medium">
                    Contact Enterprise Sales
                  </Button>
                </div>
                <div className="mt-6 text-sm text-muted-foreground/80 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 border border-white/10">1</div>
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-400 border border-white/10">2</div>
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400 border border-white/10">3</div>
                    </div>
                    <span className="ml-2">Rapid implementation within 72 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
