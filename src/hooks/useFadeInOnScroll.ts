import { useEffect, useRef, useState } from 'react';

interface UseFadeInOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
}

/**
 * Custom hook providing a subtle 'fade-in-up' entrance animation using Tailwind transition classes.
 * Mirrors the fluid editorial feel seen on marwanmursyid.com, animating cards into view on scroll.
 */
export function useFadeInOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: UseFadeInOnScrollOptions = {}
) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', delayMs = 0 } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if already in viewport on mount
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 40 && rect.bottom > 0) {
      if (delayMs > 0) {
        const timer = setTimeout(() => setIsVisible(true), delayMs);
        return () => clearTimeout(timer);
      } else {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            setTimeout(() => setIsVisible(true), delayMs);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delayMs]);

  const animationClasses = `transition-all duration-700 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  return { ref, isVisible, animationClasses };
}
