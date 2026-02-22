import { useEffect, useMemo, useState } from 'react';

type TerminalTypeProps = {
  text: string;
  durationMs?: number;
  storageKey?: string;
};

const TerminalType: React.FC<TerminalTypeProps> = ({
  text,
  durationMs = 6200,
  storageKey = 'terminal_typed_once',
}) => {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const intervalMs = useMemo(() => {
    const len = Math.max(text.length, 1);
    return Math.max(24, Math.floor(durationMs / len));
  }, [durationMs, text.length]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const seen = window.sessionStorage.getItem(storageKey);
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
        window.sessionStorage.setItem(storageKey, '1');
      }
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, storageKey, text]);

  return (
    <span className='terminal-text' aria-label={text}>
      {text.slice(0, index)}
      {!completed && <span className='terminal-cursor'>|</span>}
    </span>
  );
};

export default TerminalType;
