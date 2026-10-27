import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in seconds (e.g. 0.1, 0.2)
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number; // Distance in px
  duration?: number; // Duration in seconds
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.65,
  className = '',
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && currentElement) {
            observer.unobserve(currentElement);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: '0px 0px -40px 0px', // Triggers slightly before element reaches bottom on mobile/desktop
        threshold: threshold,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, once]);

  // Compute transform offset based on direction
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
