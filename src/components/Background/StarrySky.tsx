import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Engine, IShapeDrawer } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

function makeRng(seed = 1337) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type ArcConfig = {
  cx: number; // 0..100 (%)
  cy: number; // 0..100 (%)
  rx: number; // % radius X
  ry: number; // % radius Y
  startDeg: number;
  endDeg: number;
  count: number;
  rotateDeg: number;
  jitter: number; // % jitter
  sizeMin: number;
  sizeMax: number;
  opMin: number;
  opMax: number;
  seed: number;
};

function arcPoints(cfg: ArcConfig) {
  const rand = makeRng(cfg.seed);
  const toRad = (d: number) => (d * Math.PI) / 180;

  const rot = toRad(cfg.rotateDeg);
  const cosR = Math.cos(rot);
  const sinR = Math.sin(rot);

  const pts: any[] = [];

  for (let i = 0; i < cfg.count; i++) {
    const t = cfg.startDeg + ((cfg.endDeg - cfg.startDeg) * i) / (cfg.count - 1);
    const r = toRad(t);

    let x = cfg.cx + cfg.rx * Math.cos(r);
    let y = cfg.cy + cfg.ry * Math.sin(r);

    const dx = x - cfg.cx;
    const dy = y - cfg.cy;
    x = cfg.cx + dx * cosR - dy * sinR;
    y = cfg.cy + dx * sinR + dy * cosR;

    x += (rand() - 0.5) * cfg.jitter;
    y += (rand() - 0.5) * cfg.jitter;

    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    const size = cfg.sizeMin + rand() * (cfg.sizeMax - cfg.sizeMin);
    const opacity = cfg.opMin + rand() * (cfg.opMax - cfg.opMin);

    pts.push({
      position: { x, y },
      options: {
        move: { enable: false },
        shape: { type: "circle" },
        size: { value: size },
        opacity: { value: opacity },
      },
    });
  }

  return pts;
}

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    engine.addShape("four-point-star", new FourPointStarDrawer());
  }, []);

  const arcManual = useMemo(() => {
    // TOP ARC (позиція як у референсі: дуга зверху, центр еліпса нижче екрану)
    const topMain = arcPoints({
      cx: 52,
      cy: 140,
      rx: 120,
      ry: 48,
      startDeg: 202,
      endDeg: 345,
      count: 240,
      rotateDeg: 10,
      jitter: 0.9,
      sizeMin: 0.8,
      sizeMax: 1.9,
      opMin: 0.22,
      opMax: 0.82,
      seed: 11,
    });

    const topThin1 = arcPoints({
      cx: 52,
      cy: 140,
      rx: 120,
      ry: 50,
      startDeg: 205,
      endDeg: 348,
      count: 280,
      rotateDeg: 10,
      jitter: 1.2,
      sizeMin: 0.55,
      sizeMax: 1.1,
      opMin: 0.06,
      opMax: 0.28,
      seed: 12,
    });

    const topThin2 = arcPoints({
      cx: 52,
      cy: 140,
      rx: 120,
      ry: 52,
      startDeg: 205,
      endDeg: 348,
      count: 280,
      rotateDeg: 10,
      jitter: 1.25,
      sizeMin: 0.5,
      sizeMax: 1.0,
      opMin: 0.05,
      opMax: 0.24,
      seed: 13,
    });

    // BOTTOM ARC (центр еліпса вище екрану)
    const botMain = arcPoints({
      cx: 50,
      cy: -40,
      rx: 125,
      ry: 52,
      startDeg: 12,
      endDeg: 168,
      count: 260,
      rotateDeg: 9,
      jitter: 1.0,
      sizeMin: 0.8,
      sizeMax: 2.0,
      opMin: 0.18,
      opMax: 0.78,
      seed: 21,
    });

    const botThin = arcPoints({
      cx: 50,
      cy: -40,
      rx: 125,
      ry: 54,
      startDeg: 10,
      endDeg: 170,
      count: 300,
      rotateDeg: 9,
      jitter: 1.25,
      sizeMin: 0.5,
      sizeMax: 1.05,
      opMin: 0.05,
      opMax: 0.26,
      seed: 22,
    });

    // HOTSPOTS (яскраві “вузли” як на картинці)
    const flares = [
      {
        position: { x: 66, y: 28 },
        options: { size: { value: 6.2 }, opacity: { value: 0.98 }, move: { enable: false } },
      },
      {
        position: { x: 74, y: 84 },
        options: { size: { value: 6.8 }, opacity: { value: 0.92 }, move: { enable: false } },
      },
      {
        position: { x: 14, y: 30 },
        options: { size: { value: 4.0 }, opacity: { value: 0.55 }, move: { enable: false } },
      },
    ];

    return [...topMain, ...topThin1, ...topThin2, ...botMain, ...botThin, ...flares];
  }, []);

  return (
    <div style={styles.wrap}>
      <style>{css}</style>

      {/* Легка “космічна глибина” (не картинка, просто код) */}
      <div style={styles.depth} />

      {/* ARCS (particles + links) */}
      <Particles
        id="vs-arcs"
        init={particlesInit}
        style={styles.canvasFill}
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          interactivity: { events: { resize: true } },
          particles: {
            number: { value: 0 },
            move: { enable: false },
            color: { value: ["#F6D365", "#D4AF37", "#FFB14A", "#FFD9A3"] },
            opacity: {
              value: { min: 0.08, max: 0.9 },
              animation: { enable: true, speed: 0.7, minimumValue: 0.05, sync: false },
            },
            size: {
              value: { min: 0.6, max: 2.2 },
              animation: { enable: true, speed: 0.8, minimumValue: 0.55, sync: false },
            },
            shadow: { enable: true, color: "#F6D365", blur: 22, offset: { x: 0, y: 0 } },
            links: {
              enable: true,
              distance: 44,
              color: "#F6D365",
              opacity: 0.35,
              width: 2,
            },
          },
          manualParticles: arcManual,
        }}
      />

      {/* GOLD DUST (particles) */}
      <Particles
        id="vs-dust"
        init={particlesInit}
        style={styles.canvasFill}
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          interactivity: { events: { resize: true } },
          reduceMotion: { enable: true, factor: 3 },
          particles: {
            number: { value: 1400, density: { enable: true, area: 1200 } },
            color: { value: ["#F6D365", "#D4AF37", "#B8860B", "#FFB14A", "#FFD9A3", "#FFFFFF", "#2E8BFF"] },
            shape: { type: ["circle", "four-point-star"] },
            opacity: {
              value: { min: 0.03, max: 0.62 },
              animation: { enable: true, speed: 0.85, minimumValue: 0.02, sync: false },
            },
            size: {
              value: { min: 0.28, max: 2.4 },
              animation: { enable: true, speed: 1.1, minimumValue: 0.25, sync: false },
            },
            move: {
              enable: true,
              speed: { min: 0.05, max: 0.34 },
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            shadow: { enable: true, color: "#F6D365", blur: 10, offset: { x: 0, y: 0 } },
            twinkle: { particles: { enable: true, frequency: 0.03, opacity: 1 } },
          },
          responsive: [
            { maxWidth: 768, options: { particles: { number: { value: 800 } } } },
            { maxWidth: 420, options: { particles: { number: { value: 520 } } } },
          ],
        }}
      />
    </div>
  );
};

// 4-point sparkle
class FourPointStarDrawer implements IShapeDrawer {
  draw(context: CanvasRenderingContext2D, _particle: any, radius: number) {
    context.beginPath();
    context.moveTo(0, -radius);
    context.lineTo(radius / 2, 0);
    context.lineTo(0, radius);
    context.lineTo(-radius / 2, 0);
    context.closePath();
    context.fill();
  }
  getSidesCount() {
    return 4;
  }
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    position: "fixed",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    overflow: "hidden",
    background: "#05050a",
  },
  depth: {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(1200px 700px at 70% 30%, rgba(255,177,74,0.22), transparent 62%),
      radial-gradient(900px 520px at 22% 78%, rgba(246,211,101,0.14), transparent 60%),
      radial-gradient(1400px 900px at 50% 55%, rgba(0,0,0,0.20), rgba(0,0,0,0.82)),
      linear-gradient(180deg, #04040a 0%, #060610 55%, #04040a 100%)
    `.replace(/\s+/g, " "),
    animation: "vsDepth 20s ease-in-out infinite",
  },
  canvasFill: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    // оце критично: робить “золото” яскравим як на референсі
    mixBlendMode: "screen" as any,
    filter: "contrast(1.05) saturate(1.08)",
  },
};

const css = `
@keyframes vsDepth {
  0% { transform: translate3d(0,0,0) scale(1); filter: saturate(1.06) contrast(1.02); }
  50% { transform: translate3d(-10px,8px,0) scale(1.02); filter: saturate(1.20) contrast(1.06); }
  100% { transform: translate3d(0,0,0) scale(1); filter: saturate(1.06) contrast(1.02); }
}
`;

export default ParticlesBackground;
