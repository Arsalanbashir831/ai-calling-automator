
import { useEffect, useRef, useState } from "react";
import FeatureCard from "./features/FeatureCard";
import { features } from "./features/featuresData";
import BackgroundElements from "./features/BackgroundElements";
import SectionHeader from "./features/SectionHeader";
import WidgetShowcase from "./features/WidgetShowcase";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <BackgroundElements />
      
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
        
        {/* Widget showcase */}
        <WidgetShowcase />
      </div>
    </section>
  );
};

export default FeaturesSection;
