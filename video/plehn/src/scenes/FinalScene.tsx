import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Accent, Headline, rise, SceneFrame} from '../components/SceneFrame';
import {palette, sceneFrames} from '../data/content';

export const FinalScene: React.FC = () => {
  const frame=useCurrentFrame();
  const breathe=interpolate(frame,[0,sceneFrames.final],[.98,1.025]);
  return <SceneFrame duration={sceneFrames.final} label="07 · Gespräch" accent={palette.gold}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 390px',alignItems:'center',gap:130,transform:`scale(${breathe})`}}>
      <div><Headline size={96} style={rise(frame,10)}>Wenn dieser Ansatz passt:</Headline><div style={{fontSize:54,marginTop:25,color:palette.muted,...rise(frame,34)}}>Ich freue mich auf ein <Accent>Gespräch.</Accent></div><div style={{display:'inline-flex',alignItems:'center',gap:18,marginTop:56,padding:'21px 31px',borderRadius:15,background:palette.gold,color:'#080a0d',fontSize:25,fontWeight:760,...rise(frame,62)}}>vs-web-studio.de/plehn <span>→</span></div></div>
      <div style={{display:'grid',gap:30,justifyItems:'center',...rise(frame,48)}}><div style={{padding:'29px 32px',background:'#fff',borderRadius:20}}><Img src={staticFile('plehn-media-logo.gif')} style={{width:315}} /></div><div style={{fontSize:22,color:palette.muted,textAlign:'center'}}>Vladyslav Svitlychnyi<br/><span style={{color:palette.text}}>Web · KI · Conversion</span></div></div>
    </div>
  </SceneFrame>;
};
