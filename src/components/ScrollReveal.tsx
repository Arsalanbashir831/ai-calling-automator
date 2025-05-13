
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
  distance?: number;
  duration?: number;
  easing?: string;
  cascade?: boolean;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  animation = 'fade-in',
  className = '',
  distance = 30,
  duration = 700,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
  cascade = false,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) observer.unobserve(ref.current);
        } else if (!once) {
          setIsVisible(false);
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
  }, [threshold, once]);

  const getAnimationStyle = () => {
    if (!isVisible || animation === 'none') return {};

    const baseStyle = {
      opacity: 0,
      transform: '',
      transition: `all ${duration}ms ${easing} ${delay}ms`,
    };

    const visibleStyle = {
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale(1)',
      transition: `all ${duration}ms ${easing} ${delay}ms`,
    };

    switch (animation) {
      case 'fade-in':
        baseStyle.opacity = 0;
        return isVisible ? visibleStyle : baseStyle;
      case 'slide-up':
        baseStyle.transform = `translate3d(0, ${distance}px, 0)`;
        baseStyle.opacity = 0;
        return isVisible ? visibleStyle : baseStyle;
      case 'slide-in-right':
        baseStyle.transform = `translate3d(${distance}px, 0, 0)`;
        baseStyle.opacity = 0;
        return isVisible ? visibleStyle : baseStyle;
      case 'slide-in-left':
        baseStyle.transform = `translate3d(-${distance}px, 0, 0)`;
        baseStyle.opacity = 0;
        return isVisible ? visibleStyle : baseStyle;
      case 'scale-in':
        baseStyle.transform = 'scale(0.95)';
        baseStyle.opacity = 0;
        return isVisible ? visibleStyle : baseStyle;
      default:
        return {};
    }
  };

  const animationDelayClass = delay > 0 ? `animate-delay-${delay}` : '';
  
  // If using standard animation classes from Tailwind
  if (typeof window === 'undefined') {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // Use inline styles for more control
  return (
    <div
      ref={ref}
      className={`${className} ${cascade ? 'overflow-hidden' : ''}`}
      style={cascade ? {} : getAnimationStyle()}
    >
      {cascade && React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        const cascadeDelay = delay + (index * 100);
        
        return React.cloneElement(child as React.ReactElement, {
          style: {
            ...getAnimationStyle(),
            transition: `all ${duration}ms ${easing} ${cascadeDelay}ms`,
            ...(child.props.style || {})
          },
        });
      })}
      
      {!cascade && children}
    </div>
  );
};

export default ScrollReveal;
