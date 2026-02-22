import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type LiveMetricProps = {
  start: number;
  min: number;
  max: number;
  step?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

const formatValue = (
  value: number,
  decimals: number,
  prefix: string,
  suffix: string
) => `${prefix}${value.toFixed(decimals)}${suffix}`;

const LiveMetric: React.FC<LiveMetricProps> = ({
  start,
  min,
  max,
  step = 1,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const id = window.setInterval(() => {
      setValue(prev => {
        const jitter = (Math.random() - 0.5) * step * 0.7;
        const next = prev + step + jitter;
        if (next > max) return min;
        return Math.max(min, next);
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [max, min, step]);

  const view = useMemo(
    () => formatValue(value, decimals, prefix, suffix),
    [value, decimals, prefix, suffix]
  );

  return (
    <AnimatePresence mode='wait'>
      <motion.span
        key={view}
        className='live-metric'
        initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
        transition={{ duration: 0.24 }}
      >
        {view}
      </motion.span>
    </AnimatePresence>
  );
};

export default LiveMetric;
