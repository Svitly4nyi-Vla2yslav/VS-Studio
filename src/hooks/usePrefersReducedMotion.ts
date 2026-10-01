import { useEffect, useState } from 'react';

/**
 * Повертає поточне значення медіа-запиту `prefers-reduced-motion: reduce`.
 * Після монтування підписується на системні зміни, оновлює React-стан
 * і обов'язково прибирає слухач під час unmount.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Перечитує matches із того самого MediaQueryList після системної зміни.
    const onChange = () => setReduced(mq.matches);
    setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  return reduced;
}
