import {interpolate, useCurrentFrame} from 'remotion';
import {Accent, Headline, rise, SceneFrame} from '../components/SceneFrame';
import {palette, sceneFrames} from '../data/content';

const code = ['<Sequence from={start}>','  const frame = useCurrentFrame();','  const progress = interpolate(frame, …);','  return <ProjectScreenshot />;','</Sequence>'];
const flow = ['FIGMA','REACT + TS','REMOTION','MP4','/PLEHN'];

export const CodeScene: React.FC = () => {
  const frame=useCurrentFrame();
  const handoff=interpolate(frame,[165,275],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <SceneFrame duration={sceneFrames.code} label="06 · Code als Quelle" accent={palette.blue}>
    <div style={{display:'grid',gridTemplateColumns:'.88fr 1.12fr',gap:72,alignItems:'center'}}>
      <div><Headline size={72} style={rise(frame,8)}>Auch dieses Video ist <Accent color={palette.blue}>Code.</Accent></Headline><div style={{fontSize:29,color:palette.muted,marginTop:34,...rise(frame,38)}}>Codex unterstützt Umsetzung, Tests und Iteration.</div><div style={{display:'flex',alignItems:'center',gap:10,marginTop:48,...rise(frame,70)}}>{flow.map((x,i)=><span key={x} style={{fontSize:15,color:i===4?palette.gold:palette.text}}>{x}{i<flow.length-1?<b style={{color:palette.muted,marginLeft:10}}>→</b>:null}</span>)}</div></div>
      <div style={{position:'relative',height:610}}>
        <div style={{position:'absolute',inset:'0 80px 145px 0',border:`1px solid ${palette.line}`,borderRadius:24,background:'#090c11',padding:'34px 38px',fontFamily:'Consolas, monospace',fontSize:21,lineHeight:1.9,boxShadow:'0 30px 80px rgba(0,0,0,.4)',transform:`translate(${handoff*70}px,${handoff*-10}px) scale(${1-handoff*.16})`,opacity:1-handoff*.55}}>{code.map((line,i)=>{const p=interpolate(frame,[25+i*17,42+i*17],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <div key={line} style={{opacity:p,transform:`translateX(${(1-p)*18}px)`,color:i===2?palette.gold:i===3?palette.cyan:'#d7deea'}}>{line}</div>})}</div>
        <div style={{position:'absolute',right:0,bottom:0,width:600,height:360,borderRadius:23,border:`1px solid ${palette.gold}88`,overflow:'hidden',background:'radial-gradient(circle at 70% 20%,rgba(239,179,62,.22),transparent 35%),#111721',opacity:handoff,transform:`translateY(${(1-handoff)*55}px) scale(${.9+handoff*.1})`,boxShadow:'0 34px 90px rgba(0,0,0,.5)'}}><div style={{padding:38}}><div style={{color:palette.cyan,fontSize:16,letterSpacing:3}}>RENDERED EXPERIENCE</div><div style={{fontSize:48,fontWeight:760,lineHeight:1.05,marginTop:25}}>Ich zeige es<br/><span style={{color:palette.gold}}>lieber.</span></div><div style={{marginTop:35,display:'inline-flex',padding:'13px 19px',borderRadius:10,background:palette.gold,color:palette.bg,fontWeight:700}}>Projekt ansehen</div></div></div>
      </div>
    </div>
  </SceneFrame>;
};
