import { useEffect, useRef, useState } from 'react';

interface LazyMediaOptions {
  readonly eager?: boolean;
  readonly rootMargin?: string;
}

export const useLazyMedia = <T extends Element>({
  eager = false,
  rootMargin = '320px 0px',
}: LazyMediaOptions = {}) => {
  const targetRef = useRef<T | null>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isVisible, setIsVisible] = useState(eager);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.08 }
    );
    visibilityObserver.observe(target);

    let loadObserver: IntersectionObserver | undefined;
    if (!eager && !shouldLoad) {
      loadObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setShouldLoad(true);
          loadObserver?.disconnect();
        },
        { rootMargin }
      );
      loadObserver.observe(target);
    }

    return () => {
      visibilityObserver.disconnect();
      loadObserver?.disconnect();
    };
  }, [eager, rootMargin, shouldLoad]);

  return { targetRef, shouldLoad, isVisible };
};
