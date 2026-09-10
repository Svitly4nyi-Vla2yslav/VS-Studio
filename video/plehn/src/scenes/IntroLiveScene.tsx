import {AbsoluteFill, interpolate, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';
import {palette, sceneFrames} from '../data/content';

const video = staticFile('vlad-intro-hq.mp4');

export const IntroLiveScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12, sceneFrames.intro - 18, sceneFrames.intro], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: palette.bg, opacity, overflow: 'hidden'}}>
      <OffthreadVideo
        src={video}
        muted
        style={{position: 'absolute', inset: -45, width: 'calc(100% + 90px)', height: 'calc(100% + 90px)', objectFit: 'cover', filter: 'blur(30px) brightness(.24) saturate(.72)', transform: 'scale(1.08)'}}
      />
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(7,9,13,.22), rgba(7,9,13,.72))'}} />
      <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{width: '78%', aspectRatio: '16 / 9', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,.13)', boxShadow: '0 30px 90px rgba(0,0,0,.52)'}}>
          <OffthreadVideo src={video} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
      </div>
      <div style={{position: 'absolute', left: 78, bottom: 54, fontSize: 15, letterSpacing: 3.2, textTransform: 'uppercase', color: 'rgba(247,248,250,.7)'}}>Vladyslav Svitlychnyi</div>
    </AbsoluteFill>
  );
};
