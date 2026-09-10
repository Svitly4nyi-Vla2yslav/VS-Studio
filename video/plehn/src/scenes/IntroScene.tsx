import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {palette, sceneFrames} from '../data/content';

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [0, 30, 120], [0, 1, 1], {extrapolateRight: 'clamp'});
  const finish = interpolate(frame, [sceneFrames.intro - 24, sceneFrames.intro], [0, 1], {extrapolateLeft: 'clamp'});

  return <AbsoluteFill style={{background: palette.bg, overflow: 'hidden'}}>
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 15% 20%, rgba(49,107,249,0.18), transparent 30%), radial-gradient(circle at 80% 12%, rgba(239,179,62,0.12), transparent 25%), linear-gradient(180deg, #090d12 0%, #07090d 100%)'}} />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,9,13,.72), transparent 35%, transparent 68%, rgba(7,9,13,.72))'}} />
    <div style={{position: 'absolute', inset: 0, opacity: reveal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 30, textAlign: 'center', color: palette.text}}>
      <div style={{fontSize: 22, letterSpacing: 5, textTransform: 'uppercase', color: palette.muted}}>Hallo Herr Plehn.</div>
      <div style={{fontSize: 78, lineHeight: 1.05, letterSpacing: -3.8, fontWeight: 700, maxWidth: 1200}}>
        Ich könnte Ihnen einfach erzählen,<br />
        dass ich gerne mit KI arbeite.<br />
        <span style={{color: palette.gold}}>Für diese Bewerbung wollte ich es lieber direkt zeigen.</span>
      </div>
    </div>
    <AbsoluteFill style={{background: palette.bg, opacity: finish}} />
  </AbsoluteFill>;
};
