
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

export type AnimationType = "slide-in-left" | "slide-in-right" | "fade-in" | "slide-up" | "scale-in" | "none";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  iconBg: string;
  animation: AnimationType;
  index: number;
}

const FeatureCard = ({ title, description, icon, iconBg, animation, index }: FeatureCardProps) => {
  return (
    <ScrollReveal 
      animation={animation}
      delay={index * 100}
      className="h-full"
    >
      <Card 
        className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 shadow-xl transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/20"
      >
        <CardContent className="relative p-8 h-full flex flex-col z-10">
          <div className="flex items-center">
            <div className={`mb-6 p-3 rounded-xl ${iconBg} shadow-lg shadow-primary/10 transform hover:scale-110 transition-transform duration-300`}>
              <div className="text-white">
                {icon}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
          
          <div className="absolute inset-0 bg-gradient-to-br opacity-5 from-primary/20 to-transparent"></div>
          
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-sm font-medium text-primary">Learn more</span>
            <svg className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          
          {/* Card corner decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[120px] h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent transform rotate-45 translate-x-[40px] translate-y-[58px]"></div>
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"></div>
            <div className="absolute inset-0 -z-10 border-2 border-primary/20 rounded-xl"></div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default FeatureCard;
