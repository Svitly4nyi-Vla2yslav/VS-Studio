import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Accent, Headline, rise, SceneFrame} from '../components/SceneFrame';
import {palette, sceneFrames} from '../data/content';

export const WorkflowScene: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame,[0,sceneFrames.workflow],[1.05,1.18]);
  const focus = interpolate(frame,[65,145,235],[0,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <SceneFrame duration={sceneFrames.workflow} label="05 · Workflow" accent={palette.cyan}>
    <div style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:58,alignItems:'center'}}>
      <div style={{height:650,overflow:'hidden',borderRadius:25,border:`1px solid ${palette.cyan}66`,position:'relative',...rise(frame,8)}}><Img src={staticFile('images/Workflow Cover – Figma × Canva Motion.png')} style={{width:'100%',height:'100%',objectFit:'cover',transform:`scale(${zoom}) translateY(${focus*-2}%)`}}/><div style={{position:'absolute',inset:0,boxShadow:`inset 0 0 ${80+focus*90}px rgba(51,224,209,${focus*.34})`}}/></div>
      <div><Headline size={70} style={rise(frame,18)}>Design wird <Accent color={palette.cyan}>Bewegung.</Accent><br/>Bewegung wird Ergebnis.</Headline><div style={{display:'grid',gap:13,marginTop:42,...rise(frame,55)}}>{['FIGMA','MOTION','CONVERSION'].map((x,i)=><div key={x} style={{display:'flex',alignItems:'center',gap:16,fontSize:22,color:i===1?palette.gold:palette.text}}><span style={{width:36,height:2,background:i===1?palette.gold:palette.cyan}}/>{x}</div>)}</div></div>
    </div>
  </SceneFrame>;
};
