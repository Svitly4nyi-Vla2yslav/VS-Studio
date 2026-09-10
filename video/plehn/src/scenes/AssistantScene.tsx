import {interpolate, useCurrentFrame} from 'remotion';
import {Browser} from '../components/Browser';
import {Accent, Headline, rise, SceneFrame} from '../components/SceneFrame';
import {palette, sceneFrames} from '../data/content';

const answer = 'Vlad verbindet Technik mit Gestaltung und denkt vom Ziel der Seite aus.';

export const AssistantScene: React.FC = () => {
  const frame = useCurrentFrame();
  const thinking = frame > 48 && frame < 88;
  const chars = Math.floor(interpolate(frame, [88, 178], [0, answer.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  return <SceneFrame duration={sceneFrames.assistant} label="03 · Bewerbungsassistent" accent={palette.cyan}>
    <div style={{display: 'grid', gridTemplateColumns: '.82fr 1.18fr', gap: 64, alignItems: 'center'}}>
      <Headline size={68} style={rise(frame, 8)}>Fragen stellen.<br /><Accent color={palette.cyan}>Antworten prüfen.</Accent></Headline>
      <div style={rise(frame, 20)}><Browser title="Bewerbungsassistent · begrenzte Wissensbasis"><div style={{padding: 32, height: 590}}>
        <div style={{marginLeft: 160, padding: 22, borderRadius: '18px 18px 4px 18px', background: '#202735', fontSize: 25}}>Warum passt Vlad zu plehn media?</div>
        <div style={{marginTop: 22, marginRight: 55, padding: 27, minHeight: 205, borderRadius: '18px 18px 18px 4px', border: `1px solid ${palette.cyan}55`, background: '#0f171d', color: '#dce4e9', fontSize: 26, lineHeight: 1.42}}>{thinking ? <span style={{letterSpacing: 10, color: palette.cyan}}>•••</span> : answer.slice(0, chars)}{!thinking && chars < answer.length ? <span style={{color: palette.cyan}}>|</span> : null}</div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 11, marginTop: 24}}>{['Webtechnik', 'Design', 'Conversion', 'KI'].map((x, i) => {const p=interpolate(frame,[168+i*10,190+i*10],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <span key={x} style={{opacity:p, transform:`translateY(${(1-p)*12}px)`, fontSize:17,padding:'10px 15px',borderRadius:99,color:i===3?palette.cyan:palette.text,border:`1px solid ${i===3?palette.cyan:palette.line}`}}>{x}</span>})}</div>
      </div></Browser></div>
    </div>
  </SceneFrame>;
};
