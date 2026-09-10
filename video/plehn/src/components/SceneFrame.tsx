import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {palette} from '../data/content';

export const fade = (frame: number, duration: number) =>
  interpolate(frame, [0, 18, duration - 18, duration], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

export const rise = (frame: number, delay = 0, distance = 34) => {
  const p = interpolate(frame, [delay, delay + 24], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return {opacity: p, transform: `translateY(${(1 - p) * distance}px)`};
};

export const SceneFrame: React.FC<{children: ReactNode; duration: number; label: string; accent?: string}> = ({children, duration, label, accent = palette.gold}) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, duration], [-25, 25]);
  return (
    <AbsoluteFill style={{background: palette.bg, color: palette.text, overflow: 'hidden', opacity: fade(frame, duration)}}>
      <AbsoluteFill style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: '72px 72px', maskImage: 'linear-gradient(to bottom, black, transparent 90%)'}} />
      <div style={{position: 'absolute', width: 780, height: 780, borderRadius: '50%', right: -250 + drift, top: -360, background: accent, filter: 'blur(150px)', opacity: .13}} />
      <div style={{position: 'absolute', width: 650, height: 650, borderRadius: '50%', left: -260 - drift, bottom: -360, background: palette.blue, filter: 'blur(160px)', opacity: .11}} />
      <div style={{position: 'absolute', inset: '70px 88px', border: `1px solid ${palette.line}`, borderRadius: 34}} />
      <div style={{position: 'absolute', top: 94, left: 120, fontSize: 20, letterSpacing: 4, textTransform: 'uppercase', color: accent}}>{label}</div>
      <Img src={staticFile('vs-logo.svg')} style={{position: 'absolute', width: 154, right: 118, top: 84}} />
      <div style={{position: 'absolute', left: 120, right: 120, top: 160, bottom: 110, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{children}</div>
      <div style={{position: 'absolute', left: 120, bottom: 91, fontSize: 17, letterSpacing: 2, color: palette.muted}}>BEWERBUNG FÜR PLEHN MEDIA · 2026</div>
    </AbsoluteFill>
  );
};

export const Kicker: React.FC<{children: ReactNode; style?: CSSProperties}> = ({children, style}) => <div style={{fontSize: 23, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: palette.cyan, marginBottom: 24, ...style}}>{children}</div>;
export const Headline: React.FC<{children: ReactNode; size?: number; style?: CSSProperties}> = ({children, size = 86, style}) => <div style={{fontSize: size, lineHeight: 1.02, letterSpacing: -3.5, fontWeight: 760, maxWidth: 1450, ...style}}>{children}</div>;
export const Accent: React.FC<{children: ReactNode; color?: string}> = ({children, color = palette.gold}) => <span style={{color}}>{children}</span>;

export const Pill: React.FC<{children: ReactNode; color?: string}> = ({children, color = palette.gold}) => (
  <span style={{display: 'inline-flex', alignItems: 'center', minHeight: 48, padding: '0 22px', border: `1px solid ${color}70`, borderRadius: 999, background: `${color}13`, color: palette.text, fontSize: 20, fontWeight: 650}}>{children}</span>
);
