import { useEffect } from 'react';

export function useCursorSpotlight(disabled = false) {
  useEffect(() => {
    if (disabled) return;

    let rafId = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.3;

    const commit = () => {
      document.documentElement.style.setProperty('--spotlight-x', `${x}px`);
      document.documentElement.style.setProperty('--spotlight-y', `${y}px`);
      rafId = 0;
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(commit);
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    commit();

    return () => {
      window.removeEventListener('pointermove', onMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [disabled]);
}
