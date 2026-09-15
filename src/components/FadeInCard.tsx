import React, { ReactNode } from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface FadeInCardProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  id?: string;
  onClick?: () => void;
  asArticle?: boolean;
}

/**
 * Editorial scroll-entrance card component.
 * Applies a subtle 'fade-in-up' entrance animation using Tailwind transition classes
 * as elements scroll into view, mimicking marwanmursyid.com.
 */
export const FadeInCard: React.FC<FadeInCardProps> = ({
  children,
  className = '',
  delayMs = 0,
  threshold = 0.1,
  id,
  onClick,
  asArticle = false,
}) => {
  const { ref, animationClasses } = useFadeInOnScroll<HTMLDivElement>({
    delayMs,
    threshold,
  });

  if (asArticle) {
    return (
      <article
        ref={ref}
        id={id}
        onClick={onClick}
        className={`${animationClasses} ${className}`}
      >
        {children}
      </article>
    );
  }

  return (
    <div
      ref={ref}
      id={id}
      onClick={onClick}
      className={`${animationClasses} ${className}`}
    >
      {children}
    </div>
  );
};
