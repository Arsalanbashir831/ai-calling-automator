
import { Activity, PhoneCall, Users, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WidgetShowcase = () => {
  return (
    <div className="mt-24 relative">
      <ScrollReveal animation="fade-in">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-3xl font-bold mb-6">Complete AI Call Platform</h3>
          <p className="text-muted-foreground">
            A comprehensive solution that handles every aspect of your lead generation process with cutting-edge AI technology.
          </p>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ScrollReveal animation="slide-in-left" className="col-span-1">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-400" />
              Lead Management
            </h4>
            <div className="space-y-3 mt-5">
              {[85, 64, 92, 78, 55].map((value, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <span className="ml-3 text-xs font-medium text-muted-foreground">{value}%</span>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="slide-up" className="col-span-1">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <PhoneCall className="h-5 w-5 mr-2 text-indigo-400" />
              AI Call Activity
            </h4>
            <div className="flex justify-between items-center mt-5">
              <div className="space-y-1">
                <div className="text-2xl font-bold">278</div>
                <div className="text-xs text-muted-foreground">Calls Today</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">78%</div>
                <div className="text-xs text-muted-foreground">Connection Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-500">43</div>
                <div className="text-xs text-muted-foreground">Qualified Leads</div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="flex items-center text-green-500 text-sm">
                <Activity className="h-4 w-4 mr-2" />
                <span>+12.5% from last week</span>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="slide-in-right" className="col-span-1">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-purple-400" />
              Campaign Performance
            </h4>
            <div className="grid grid-cols-2 gap-3 mt-5">
              {[
                { label: "Cold Calls", value: "1,237" },
                { label: "Conversations", value: "864" },
                { label: "Meetings Set", value: "124" },
                { label: "Revenue Gen", value: "$43.2K" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default WidgetShowcase;
