
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  animation?: 
    | 'fade-in'
    | 'slide-up'
    | 'slide-in-right'
    | 'slide-in-left'
    | 'scale-in'
    | 'none';
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  animation = 'fade-in',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const animationClass = animation !== 'none' ? `animate-${animation}` : '';
  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';
  
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass + ' ' + delayClass : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
