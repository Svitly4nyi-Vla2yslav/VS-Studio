import { useEffect, useRef } from 'react';
import './StarfieldBackground.css';

type StarfieldBackgroundProps = {
  className?: string;
  density?: number;
  maxFps?: number;
};

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
  speed: number;
};

const MOBILE_BREAKPOINT = 768;
const MAX_DPR = 1.5;

export const StarfieldBackground = ({ className = '', density = 1, maxFps = 30 }: StarfieldBackgroundProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });

    if (!root || !canvas || !context) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = motionQuery.matches;
    let inViewport = false;
    let frameId: number | null = null;
    let lastFrame = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];

    const createStars = () => {
      const area = width * height;
      const mobileMultiplier = width < MOBILE_BREAKPOINT ? 0.48 : 1;
      const count = Math.max(18, Math.min(140, Math.round((area / 13000) * density * mobileMultiplier)));

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.35 + Math.random() * 1.05,
        alpha: 0.25 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
        speed: 0.7 + Math.random() * 1.1,
      }));
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const seconds = time / 1000;

      for (const star of stars) {
        const twinkle = reducedMotion ? 1 : 0.72 + Math.sin(seconds * star.speed + star.phase) * 0.28;
        const drift = reducedMotion ? 0 : (seconds * star.speed * 2.2) % (height + 8);
        const y = (star.y + drift) % (height + 8) - 4;
        context.beginPath();
        context.arc(star.x, y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 226, 155, ${star.alpha * twinkle})`;
        context.fill();
      }
    };

    const stop = () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      frameId = null;
    };

    const tick = (time: number) => {
      if (document.hidden || !inViewport || reducedMotion) {
        frameId = null;
        return;
      }

      if (time - lastFrame >= 1000 / Math.min(30, Math.max(1, maxFps))) {
        draw(time);
        lastFrame = time;
      }
      frameId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (frameId === null && !document.hidden && inViewport && !reducedMotion) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    const resize = () => {
      const rect = root.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
      draw(performance.now());
    };

    const handleVisibility = () => (document.hidden ? stop() : start());
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      stop();
      draw(performance.now());
      start();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      if (inViewport) start(); else stop();
    });

    resizeObserver.observe(root);
    intersectionObserver.observe(root);
    document.addEventListener('visibilitychange', handleVisibility);
    motionQuery.addEventListener('change', handleMotionPreference);
    resize();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      motionQuery.removeEventListener('change', handleMotionPreference);
    };
  }, [density, maxFps]);

  return (
    <div ref={rootRef} className={`starfield-background ${className}`.trim()} aria-hidden='true'>
      <div className='starfield-background__gradient' />
      <canvas ref={canvasRef} className='starfield-background__canvas' />
    </div>
  );
};

export default StarfieldBackground;
