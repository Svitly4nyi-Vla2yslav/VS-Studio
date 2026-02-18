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

      {/* Дуги = SVG (дешево), а не 1300 manualParticles + links */}
      <svg className="vs-arcs" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="0.22" stopColor="rgba(246,211,101,0.95)" />
            <stop offset="0.55" stopColor="rgba(212,175,55,0.75)" />
            <stop offset="1" stopColor="rgba(255,177,74,0)" />
          </linearGradient>

          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="0.7" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="flare" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="0.35" stopColor="rgba(246,211,101,0.85)" />
            <stop offset="1" stopColor="rgba(255,177,74,0)" />
          </radialGradient>
        </defs>

        <g className="vs-arcs-move" filter="url(#softGlow)">
          {/* TOP arcs */}
          <path
            d="M -10 18 C 18 10, 52 6, 112 10"
            stroke="url(#goldLine)"
            strokeWidth="0.55"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M -12 20 C 18 12, 54 8, 114 12"
            stroke="url(#goldLine)"
            strokeWidth="0.22"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M -14 22 C 18 14, 56 10, 116 14"
            stroke="url(#goldLine)"
            strokeWidth="0.18"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />

          {/* BOTTOM arcs */}
          <path
            d="M -10 86 C 22 92, 60 96, 112 92"
            stroke="url(#goldLine)"
            strokeWidth="0.55"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M -12 84 C 22 90, 62 94, 114 90"
            stroke="url(#goldLine)"
            strokeWidth="0.22"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M -14 82 C 22 88, 64 92, 116 88"
            stroke="url(#goldLine)"
            strokeWidth="0.18"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />

          {/* Флейри як на відео */}
          <circle className="vs-flare vs-flare-top" cx="14" cy="18" r="6" fill="url(#flare)" />
          <circle className="vs-flare vs-flare-bot" cx="52" cy="88" r="7" fill="url(#flare)" />
        </g>
      </svg>

      {/* GOLD DUST = один canvas */}
      <Particles
        id="vs-dust"
        init={particlesInit}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },

          // 🔥 головне для RAM: не множимо canvas на DPR
          detectRetina: false,

          // не треба 60fps для бекграунду
          fpsLimit: 40,
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,

          interactivity: { events: { resize: true } },
          reduceMotion: { enable: true, factor: 4 },

          particles: {
            number: { value: 520, density: { enable: true, area: 1300 } },
            color: { value: ["#F6D365", "#D4AF37", "#FFB14A", "#FFD9A3", "#FFFFFF", "#2E8BFF"] },
            shape: { type: "circle" },

            // тіні прибрані (вони реально дорогі)
            shadow: { enable: false },

            opacity: {
              value: { min: 0.05, max: 0.55 },
              animation: { enable: true, speed: 0.25, minimumValue: 0.04, sync: false },
            },
            size: {
              value: { min: 0.35, max: 2.1 },
              animation: { enable: false },
            },
            move: {
              enable: true,
              speed: { min: 0.06, max: 0.22 },
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },

            twinkle: { particles: { enable: true, frequency: 0.018, opacity: 1 } },
          },

          responsive: [
            { maxWidth: 768, options: { particles: { number: { value: 320 } } } },
            { maxWidth: 420, options: { particles: { number: { value: 220 } } } },
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
    radial-gradient(1200px 700px at 70% 30%, rgba(255,177,74,0.22), transparent 62%),
    radial-gradient(900px 520px at 22% 78%, rgba(246,211,101,0.14), transparent 60%),
    radial-gradient(1400px 900px at 50% 55%, rgba(0,0,0,0.20), rgba(0,0,0,0.82)),
    linear-gradient(180deg, #04040a 0%, #060610 55%, #04040a 100%);
  animation: vsDepth 18s ease-in-out infinite;
}
.vs-arcs{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  mix-blend-mode: screen;
  opacity: 0.95;
}
.vs-arcs-move{
  animation: arcsDrift 12s ease-in-out infinite;
}
.vs-flare{
  animation: flarePulse 2.8s ease-in-out infinite;
}
.vs-flare-bot{ animation-delay: 1.1s; }

@keyframes vsDepth {
  0% { transform: translate3d(0,0,0) scale(1); filter: saturate(1.06) contrast(1.02); }
  50% { transform: translate3d(-10px,8px,0) scale(1.02); filter: saturate(1.18) contrast(1.06); }
  100% { transform: translate3d(0,0,0) scale(1); filter: saturate(1.06) contrast(1.02); }
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
  .vs-depth, .vs-arcs-move, .vs-flare{ animation:none !important; }
}
`;

export default ParticlesBackground;
