import { useEffect } from 'react';

/**
 * Відстежує координати вказівника й записує їх у CSS-змінні кореневого елемента.
 * Параметр `disabled` повністю вимикає слухач; під час очищення хук видаляє його
 * та скасовує запланований кадр, тому не залишає побічних ефектів після unmount.
 */
export function useCursorSpotlight(disabled = false) {
  useEffect(() => {
    if (disabled) return;

    let rafId = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.3;

    // Застосовує останні координати не частіше одного разу за кадр анімації.
    const commit = () => {
      document.documentElement.style.setProperty('--spotlight-x', `${x}px`);
      document.documentElement.style.setProperty('--spotlight-y', `${y}px`);
      rafId = 0;
    };

    // Накопичує останню позицію та планує єдине DOM-оновлення для поточного кадру.
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
