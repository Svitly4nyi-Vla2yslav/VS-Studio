import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground: React.FC = React.memo(() => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="vs-bg" aria-hidden>
      <div className="vs-depth" />
      {/* Статичні “зірки” (CSS) = майже безкоштовно по ресурсах */}
      <div className="vs-stars" />

      {/* Дуги (SVG) як light-trails */}
      <svg className="vs-arcs" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="0.22" stopColor="rgba(246,211,101,0.95)" />
            <stop offset="0.55" stopColor="rgba(212,175,55,0.75)" />
            <stop offset="1" stopColor="rgba(255,177,74,0)" />
          </linearGradient>

          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="0.75" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="flare" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="rgba(255,255,255,0.98)" />
            <stop offset="0.35" stopColor="rgba(246,211,101,0.9)" />
            <stop offset="1" stopColor="rgba(255,177,74,0)" />
          </radialGradient>
        </defs>

        <g className="vs-arcs-move" filter="url(#softGlow)">
          <path d="M -10 18 C 18 10, 52 6, 112 10" stroke="url(#goldLine)" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.9" />
          <path d="M -12 20 C 18 12, 54 8, 114 12" stroke="url(#goldLine)" strokeWidth="0.2" strokeLinecap="round" fill="none" opacity="0.55" />

          <path d="M -10 86 C 22 92, 60 96, 112 92" stroke="url(#goldLine)" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.9" />
          <path d="M -12 84 C 22 90, 62 94, 114 90" stroke="url(#goldLine)" strokeWidth="0.2" strokeLinecap="round" fill="none" opacity="0.55" />

          <circle className="vs-flare" cx="14" cy="18" r="6.2" fill="url(#flare)" />
          <circle className="vs-flare vs-flare2" cx="52" cy="88" r="7.2" fill="url(#flare)" />
        </g>
      </svg>

      {/* STARFIELD (1 canvas) */}
      <Particles
        id="vs-stars-canvas"
        init={particlesInit}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },

          // RAM saver
          detectRetina: false,

          // бекграунду не треба 60fps
          fpsLimit: 40,
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          interactivity: { events: { resize: true } },
          reduceMotion: { enable: true, factor: 4 },

          particles: {
            number: { value: 900, density: { enable: true, area: 1600 } },

            // більше “небо”: біле/блакитне домінує, золото лише акцент
            color: { value: ["#FFFFFF", "#EAF2FF", "#BFD7FF", "#7FB2FF", "#F6D365", "#D4AF37"] },

            shape: { type: "circle" },

            shadow: { enable: false },

            opacity: {
              value: { min: 0.08, max: 0.95 },
              animation: {
                enable: true,
                speed: 0.22,          // плавне мерехтіння
                minimumValue: 0.06,
                sync: false,
              },
            },

            size: {
              value: { min: 0.25, max: 1.8 },
              // без size animation: дешевше і “зоряніше”
              animation: { enable: false },
            },

            move: {
              enable: true,
              // ледь-ледь дрейф, як у відео
              speed: { min: 0.01, max: 0.09 },
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },

            // рідкісні “іскри”
            twinkle: { particles: { enable: true, frequency: 0.012, opacity: 1 } },
          },

          responsive: [
            { maxWidth: 768, options: { particles: { number: { value: 520 } } } },
            { maxWidth: 420, options: { particles: { number: { value: 360 } } } },
          ],
        }}
      />

      <style>{css}</style>
    </div>
  );
});

const css = `
.vs-bg{
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: #05050a;
}

.vs-depth{
  position:absolute;
  inset:0;
  background:
    radial-gradient(1000px 700px at 55% 60%, rgba(90,140,255,0.14), transparent 60%),
    radial-gradient(1200px 700px at 70% 30%, rgba(255,177,74,0.18), transparent 62%),
    radial-gradient(900px 520px at 22% 78%, rgba(246,211,101,0.10), transparent 60%),
    radial-gradient(1400px 900px at 50% 55%, rgba(0,0,0,0.20), rgba(0,0,0,0.86)),
    linear-gradient(180deg, #04040a 0%, #060610 55%, #04040a 100%);
  animation: vsDepth 18s ease-in-out infinite;
}

/* Щільність “неба” без canvas: 2-3 десятки великих зірок */
.vs-stars{
  position:absolute;
  inset:0;
  opacity: .75;
  mix-blend-mode: screen;
  background:
    radial-gradient(1.2px 1.2px at 8% 18%, rgba(255,255,255,.95) 0 60%, transparent 62%),
    radial-gradient(1px 1px at 14% 62%, rgba(191,215,255,.85) 0 60%, transparent 62%),
    radial-gradient(1.4px 1.4px at 22% 28%, rgba(255,255,255,.9) 0 60%, transparent 62%),
    radial-gradient(1px 1px at 28% 76%, rgba(127,178,255,.8) 0 60%, transparent 62%),
    radial-gradient(1.6px 1.6px at 34% 40%, rgba(255,255,255,.95) 0 60%, transparent 62%),
    radial-gradient(1px 1px at 41% 12%, rgba(234,242,255,.85) 0 60%, transparent 62%),
    radial-gradient(1.8px 1.8px at 46% 68%, rgba(255,255,255,.95) 0 60%, transparent 62%),
    radial-gradient(1px 1px at 52% 30%, rgba(191,215,255,.8) 0 60%, transparent 62%),
    radial-gradient(1.5px 1.5px at 58% 82%, rgba(255,255,255,.9) 0 60%, transparent 62%),
    radial-gradient(1px 1px at 64% 18%, rgba(127,178,255,.75) 0 60%, transparent 62%),
    radial-gradient(1.7px 1.7px at 70% 44%, rgba(255,255,255,.95) 0 60%, transparent 62%),
    radial-gradient(1px 1px at 78% 70%, rgba(234,242,255,.8) 0 60%, transparent 62%),
    radial-gradient(1.4px 1.4px at 86% 26%, rgba(255,255,255,.9) 0 60%, transparent 62%),
    radial-gradient(1px 1px at 90% 58%, rgba(191,215,255,.8) 0 60%, transparent 62%);
  filter: drop-shadow(0 0 6px rgba(255,255,255,.12));
  animation: starsDrift 22s ease-in-out infinite;
}

.vs-arcs{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  mix-blend-mode: screen;
  opacity: .95;
}

.vs-arcs-move{ animation: arcsDrift 12s ease-in-out infinite; }
.vs-flare{ animation: flarePulse 2.8s ease-in-out infinite; }
.vs-flare2{ animation-delay: 1.1s; }

@keyframes vsDepth {
  0% { transform: translate3d(0,0,0) scale(1); filter: saturate(1.06) contrast(1.02); }
  50% { transform: translate3d(-10px,8px,0) scale(1.02); filter: saturate(1.16) contrast(1.06); }
  100% { transform: translate3d(0,0,0) scale(1); filter: saturate(1.06) contrast(1.02); }
}

@keyframes starsDrift{
  0%{ transform: translate3d(0,0,0); opacity:.65; }
  50%{ transform: translate3d(-1.2%,0.6%,0); opacity:.82; }
  100%{ transform: translate3d(0,0,0); opacity:.65; }
}

@keyframes arcsDrift{
  0%{ transform: translate3d(0,0,0); opacity:0.9; }
  50%{ transform: translate3d(-2.2%,0,0); opacity:1; }
  100%{ transform: translate3d(0,0,0); opacity:0.9; }
}

@keyframes flarePulse{
  0%,100%{ transform: scale(1); opacity:0.85; }
  50%{ transform: scale(1.06); opacity:1; }
}

@media (prefers-reduced-motion: reduce){
  .vs-depth, .vs-arcs-move, .vs-flare, .vs-stars{ animation:none !important; }
}
`;

export default ParticlesBackground;
