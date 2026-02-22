import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type LiveMetricProps = {
  start: number;
  min?: number;
  max: number;
  target?: number;
  step?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  storageKey?: string;
};

const formatValue = (
  value: number,
  decimals: number,
  prefix: string,
  suffix: string
) => `${prefix}${value.toFixed(decimals)}${suffix}`;

const LiveMetric: React.FC<LiveMetricProps> = ({
  start,
  max,
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  durationMs = 1800,
  storageKey,
}) => {
  const finalValue = target ?? max;
  const [value, setValue] = useState(start);
  const [isAnimating, setIsAnimating] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (storageKey && window.sessionStorage.getItem(storageKey) === '1') {
      setValue(finalValue);
      setIsAnimating(false);
      return;
    }

    let startTime = 0;
    const from = start;
    const to = finalValue;

    const tick = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / durationMs, 1);
      const next = from + (to - from) * progress;
      setValue(next);

      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(tick);
      } else {
        setIsAnimating(false);
        setValue(to);
        if (storageKey) window.sessionStorage.setItem(storageKey, '1');
      }
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [durationMs, finalValue, start, storageKey]);

  const view = useMemo(
    () => formatValue(value, decimals, prefix, suffix),
    [value, decimals, prefix, suffix]
  );

  return (
    <motion.span
      className='live-metric command-line-metric'
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42 }}
    >
      {view}
      {isAnimating ? <span className='terminal-cursor'>|</span> : null}
    </motion.span>
  );
};

export default LiveMetric;
