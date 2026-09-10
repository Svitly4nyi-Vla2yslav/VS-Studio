import { useEffect, useMemo, useState } from 'react';

type TerminalTypeProps = {
  text: string;
  durationMs?: number;
  typeSpeedMs?: number;
  storageKey?: string;
  start?: boolean;
  respectReducedMotion?: boolean;
  persistInSession?: boolean;
  minIntervalMs?: number;
};

const TerminalType: React.FC<TerminalTypeProps> = ({
  text,
  durationMs = 2400,
  typeSpeedMs,
  storageKey = 'terminal_typed_once',
  start = true,
  respectReducedMotion = true,
  persistInSession = true,
  minIntervalMs = 18,
}) => {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const intervalMs = useMemo(() => {
    if (typeSpeedMs && typeSpeedMs > 0) {
      return Math.max(minIntervalMs, typeSpeedMs);
    }

    const len = Math.max(text.length, 1);
    return Math.max(minIntervalMs, Math.floor(durationMs / len));
  }, [durationMs, minIntervalMs, text.length, typeSpeedMs]);

  useEffect(() => {
    setIndex(0);
    setCompleted(false);
  }, [text]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduceMotion = respectReducedMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setIndex(text.length);
      setCompleted(true);
      return;
    }

    if (!start) {
      setIndex(0);
      setCompleted(false);
      return;
    }

    const seen = persistInSession ? window.sessionStorage.getItem(storageKey) : null;
    if (seen === '1') {
      setIndex(text.length);
      setCompleted(true);
      return;
    }

    let current = 0;
    const id = window.setInterval(() => {
      current += 1;
      setIndex(current);

      if (current >= text.length) {
        window.clearInterval(id);
        setCompleted(true);
        if (persistInSession) window.sessionStorage.setItem(storageKey, '1');
      }
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, persistInSession, respectReducedMotion, start, storageKey, text]);

  return (
    <span className='terminal-text' aria-label={text}>
      {text.slice(0, index)}
      {!completed && <span className='terminal-cursor'>|</span>}
    </span>
  );
};

export default TerminalType;
