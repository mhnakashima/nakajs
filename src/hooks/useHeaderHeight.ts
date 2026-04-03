import { useState, useEffect, useRef, type RefObject } from 'react';

export function useHeaderHeight(
  ref: RefObject<HTMLElement | null>,
  isScrolled: boolean,
) {
  const [expandedHeight, setExpandedHeight] = useState(0);
  const [compactHeight, setCompactHeight] = useState(0);
  const measured = useRef({ expanded: false, compact: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!isScrolled && !measured.current.expanded) {
      setExpandedHeight(el.offsetHeight);
      measured.current.expanded = true;
    }

    if (isScrolled && !measured.current.compact) {
      requestAnimationFrame(() => {
        if (ref.current) {
          setCompactHeight(ref.current.offsetHeight);
          measured.current.compact = true;
        }
      });
    }
  }, [ref, isScrolled]);

  return isScrolled
    ? (compactHeight || expandedHeight)
    : expandedHeight;
}
