import { Button } from "@/components/ui/button";
import { BarChart3, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
const HeroSection = () => {
  return <section id="hero" className="pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Trust badge */}
        <div className="text-center mb-8">
          
        </div>

        <div className="flex  lg:flex-row md:flex-row items-center gap-8 relative py-10">
          {/* Left dashboard widget */}
          <ScrollReveal animation="slide-in-left" className="w-full md:w-1/4 lg:w-1/5">
            <Card className="glass-effect overflow-hidden">
              <div className="p-4">
                <div className="mb-2 flex justify-between items-center">
                  <h5 className="text-sm font-medium">Lead Generation</h5>
                  <span className="text-muted-foreground">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.5V12.5M8 3.5L4 7.5M8 3.5L12 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                
                <div className="bg-primary/10 px-2 py-1 rounded inline-block mb-3">
                  <span className="text-xs font-medium text-primary">$2,890</span>
                </div>

                <div className="h-20 w-full">
                  <svg viewBox="0 0 100 40" width="100%" height="100%" preserveAspectRatio="none">
                    <path d="M0,35 L5,28 L10,32 L15,20 L20,25 L25,18 L30,28 L35,15 L40,20 L45,5 L50,14 L55,10 L60,20 L65,25 L70,10 L75,20 L80,15 L85,25 L90,5 L95,15 L100,10" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="grid grid-cols-7 gap-1 mt-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => <div key={i} className="text-[10px] text-center text-muted-foreground">
                      {day}
                    </div>)}
                </div>
              </div>

              <div className="mt-4 border-t border-white/10">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold">75%</div>
                      <div className="text-xs text-muted-foreground">Member Growth</div>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs h-8 px-3 py-1">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Main content */}
          <div className="flex-1 text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Deliver <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-lightblue-500 text-white px-4">the Perfect</span><br />
              solution for your client <span className="relative">now
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 138 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.93188C30.1613 2.5698 103.378 -0.0893219 137 6.90112" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform enterprise communication with autonomous AI agents that deliver personalized conversations and comprehensive analytics at unprecedented scale.
            </p>
            
            
            
            
          </div>

          {/* Right dashboard widget */}
          <ScrollReveal animation="slide-in-right" className="w-full md:w-1/4 lg:w-1/5">
            <Card className="glass-effect overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="text-sm font-medium">Total Revenue</h5>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-black">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold">4.32k</span>
                </div>
              </div>

              <div className="border-t border-white/10">
                <div className="p-4">
                  <div className="mb-2 flex justify-between">
                    <div className="text-sm">Balance</div>
                    <div className="text-xs px-2 py-0.5 bg-green-900/30 text-green-400 rounded">Reserved</div>
                  </div>
                  <div className="text-xl font-bold mb-4">$60,124.00</div>
                  
                  <div className="flex items-center">
                    <div className="flex-1 bg-green-400/20 h-2 rounded-full">
                      <div style={{
                      width: '75%'
                    }} className="bg-blue-400 h-2 rounded-full"></div>
                    </div>
                    <span className="text-xs ml-2">Fine</span>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
        
        {/* Bottom icons section */}
        <div className="mt-24 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-card flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.7157 20.2843 4.40974 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.7157 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.5 9H20.5M8 4V2M16 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Upload your leads file and let our AI system handle the rest.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-card flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Automated outbound calls with natural-sounding AI voice technology.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-card flex items-center justify-center">
                <BarChart3 size={24} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Comprehensive analytics dashboard for monitoring campaign performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;