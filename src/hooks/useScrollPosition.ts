import { useState, useEffect, useRef } from 'react';

/**
 * Hysteresis scroll hook: once scrolled past `threshold`, the user must
 * scroll back above `threshold - hysteresis` to revert to the expanded
 * state. This prevents the feedback loop caused by padding-top changes
 * shifting the scroll position back and forth across a single threshold.
 */
export function useScrollPosition(threshold = 80, hysteresis = 40) {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;

          if (!scrolledRef.current && y > threshold) {
            scrolledRef.current = true;
            setIsScrolled(true);
          } else if (scrolledRef.current && y < threshold - hysteresis) {
            scrolledRef.current = false;
            setIsScrolled(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, hysteresis]);

  return isScrolled;
}
