import React, { useRef, useEffect, useState } from 'react';

/**
 * SectionReveal: Lightweight IntersectionObserver-based entrance animation
 * Triggers once when entering viewport. Respects prefers-reduced-motion.
 */
export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  duration = 500,
  yOffset = 25,
  withAccentWipe = false
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {withAccentWipe && (
        <div
          className="h-[2px] bg-industrial-steel transition-all duration-700 ease-out mb-3"
          style={{ width: isVisible ? '64px' : '0px' }}
        />
      )}
      {children}
    </div>
  );
}

/**
 * ImageMaskReveal: Reveals an image with a smooth clip-path mask
 */
export function ImageMaskReveal({
  children,
  className = '',
  duration = 800,
  delay = 0
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{
        clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
        transition: `clip-path ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

/**
 * StaggerContainer: Viewport-triggered sequential entry for card grids
 */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.08,
  delayChildren = 0
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

