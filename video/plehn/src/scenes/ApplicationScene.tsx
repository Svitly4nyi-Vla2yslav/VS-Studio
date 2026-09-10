import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Accent, Headline, Pill, rise, SceneFrame} from '../components/SceneFrame';
import {palette, sceneFrames} from '../data/content';

export const ApplicationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, sceneFrames.application], [1.06, 1.16]);
  const cursor = interpolate(frame, [54, 130], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <SceneFrame duration={sceneFrames.application} label="02 · Die Bewerbung" accent={palette.cyan}>
    <div style={{display: 'grid', gridTemplateColumns: '.78fr 1.22fr', gap: 58, alignItems: 'center'}}>
      <div><Headline size={72} style={rise(frame, 8)}>Diese Bewerbung ist <Accent color={palette.cyan}>selbst ein Projekt.</Accent></Headline><div style={{display: 'flex', flexWrap: 'wrap', gap: 11, marginTop: 38, ...rise(frame, 34)}}>{['React', 'TypeScript', 'Design', 'Conversion', 'KI-Assistent'].map(x => <Pill key={x} color={palette.cyan}>{x}</Pill>)}</div></div>
      <div style={{height: 610, overflow: 'hidden', borderRadius: 24, border: `1px solid ${palette.line}`, boxShadow: '0 35px 90px rgba(0,0,0,.45)', position: 'relative', ...rise(frame, 18)}}>
        <Img src={staticFile('images/Workflow Cover – Figma × Canva Motion.png')} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom}) translateY(-1%)`}} />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 55%, rgba(7,9,13,.12))'}} />
        <div style={{position: 'absolute', left: `${42 + cursor * 20}%`, top: `${65 - cursor * 31}%`, width: 27, height: 36, filter: 'drop-shadow(0 4px 5px #000)', transform: 'rotate(-18deg)'}}><div style={{width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: `34px solid ${palette.text}`}} /></div>
      </div>
    </div>
  </SceneFrame>;
};
