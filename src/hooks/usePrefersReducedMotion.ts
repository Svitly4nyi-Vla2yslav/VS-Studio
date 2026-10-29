import { useEffect, useState } from 'react';

/**
 * Не приймає аргументів і повертає boolean із поточного media query 'prefers-reduced-motion: reduce'.
 * Після монтування синхронізує початкове значення, підписується на системні зміни
 * та прибирає той самий слухач під час unmount; до виконання ефекту повертає false.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Не приймає дані події: перечитує актуальний matches із того самого MediaQueryList.
    const onChange = () => setReduced(mq.matches);
    setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  return reduced;
}
