import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Accent, Headline, SceneFrame} from '../components/SceneFrame';
import {palette, projectAssets, sceneFrames} from '../data/content';

export const ProjectsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const index = Math.min(2, Math.floor(frame / 100));
  const project = projectAssets[index];
  const local = frame - index * 100;
  const opacity = interpolate(local, [0, 12, 88, 99], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const zoom = interpolate(local, [0, 100], [1.03, 1.12]);
  const finale = interpolate(frame, [302, 330], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <SceneFrame duration={sceneFrames.projects} label="04 · Reale Projekte">
    <div style={{position:'relative',height:720}}>
      <div style={{position:'absolute',inset:0,opacity:1-finale}}>
        <Headline size={58}><Accent>{String(index + 1).padStart(2,'0')}</Accent> · {project.name}</Headline>
        <div style={{position:'absolute',left:0,right:0,top:88,bottom:0,overflow:'hidden',borderRadius:24,border:`1px solid ${project.color}77`,background:palette.surface,opacity}}><Img src={staticFile(project.image)} style={{width:'100%',height:'100%',objectFit:'cover',transform:`scale(${zoom})`}}/><div style={{position:'absolute',left:26,bottom:24,padding:'12px 18px',borderRadius:999,background:'rgba(7,9,13,.82)',fontSize:19,color:project.color}}>{project.tag}</div></div>
      </div>
      <div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',opacity:finale,transform:`scale(${.94+finale*.06})`}}><div style={{textAlign:'center'}}><Headline size={82}>Drei Projekte.<br/><Accent>Drei Perspektiven.</Accent></Headline><div style={{display:'flex',gap:16,justifyContent:'center',marginTop:38}}>{projectAssets.map(p=><span key={p.name} style={{padding:'15px 21px',borderRadius:999,border:`1px solid ${p.color}`,color:p.color,fontSize:21}}>{p.name}</span>)}</div></div></div>
    </div>
  </SceneFrame>;
};
