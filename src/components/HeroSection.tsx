
import { Button } from "@/components/ui/button";
import { Phone, Users, BarChart3, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Enterprise AI Communication</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Next-Generation <br className="hidden md:block" /><span className="gradient-text">AI-Powered Calling</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              Transform enterprise communication with autonomous AI agents that deliver personalized conversations, intelligent follow-ups, and comprehensive analytics at unprecedented scale.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <Button size="lg" className="text-md h-14 px-8 neo-glow">
                Launch Enterprise Solution
              </Button>
              <Button size="lg" variant="outline" className="text-md h-14 px-6 border-white/10 bg-white/5 hover:bg-white/10">
                Watch Product Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 text-muted-foreground">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">Neural Voice Engine</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Users size={16} className="text-blue-400" />
                <span className="text-sm">Adaptive Response AI</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-2 rounded-lg">
                <BarChart3 size={16} className="text-blue-400" />
                <span className="text-sm">Predictive Analytics</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Lock size={16} className="text-blue-400" />
                <span className="text-sm">Enterprise-Grade Security</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full h-[500px] animate-float p-4">
              {/* Orbital system */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 animate-spin" style={{animationDuration: '40s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/10 animate-spin" style={{animationDuration: '30s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/20 animate-spin" style={{animationDuration: '20s'}}></div>
              
              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="glass-effect p-6 rounded-2xl w-[280px] neo-glow">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-3/4 bg-primary/20 rounded-full"></div>
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <div className="h-2 w-2 rounded-full bg-white/20"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 animate-pulse-subtle">
                        <span className="text-white text-2xl font-bold">AI</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-2/3 bg-primary/20 rounded-full mx-auto"></div>
                        <div className="h-2 w-1/2 bg-primary/10 rounded-full mx-auto"></div>
                      </div>
                      
                      <div className="flex justify-center gap-4 w-full">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                          <Phone size={18} className="text-white" />
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/20 flex items-center justify-center">
                          <Users size={18} className="text-white" />
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                          <BarChart3 size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full bg-primary/10 rounded-full">
                        <div className="h-full w-4/5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      </div>
                      <div className="h-1.5 w-full bg-primary/10 rounded-full">
                        <div className="h-full w-3/5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 right-1/4 glass-effect p-3 rounded-lg animate-float-slow shadow-lg shadow-blue-500/5" style={{animationDelay: '1s'}}>
                <Phone size={20} className="text-blue-400" />
              </div>
              <div className="absolute bottom-1/4 left-1/3 glass-effect p-3 rounded-lg animate-float-slow shadow-lg shadow-purple-500/5" style={{animationDelay: '1.5s'}}>
                <Users size={20} className="text-purple-400" />
              </div>
              <div className="absolute top-1/3 left-1/4 glass-effect p-3 rounded-lg animate-float-slow shadow-lg shadow-indigo-500/5" style={{animationDelay: '2s'}}>
                <BarChart3 size={20} className="text-indigo-400" />
              </div>
              <div className="absolute bottom-1/3 right-1/3 glass-effect p-3 rounded-lg animate-float-slow shadow-lg shadow-blue-500/5" style={{animationDelay: '2.5s'}}>
                <Lock size={20} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-muted-foreground mb-6">Powering enterprises worldwide with cutting-edge AI communication</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
            <div className="text-xl font-bold text-muted-foreground/70 flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 mr-2"></div>
              Twilio Enterprise
            </div>
            <div className="text-xl font-bold text-muted-foreground/70 flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 mr-2"></div>
              Google Cloud
            </div>
            <div className="text-xl font-bold text-muted-foreground/70 flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 mr-2"></div>
              Amazon Connect
            </div>
            <div className="text-xl font-bold text-muted-foreground/70 flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 mr-2"></div>
              Salesforce AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
