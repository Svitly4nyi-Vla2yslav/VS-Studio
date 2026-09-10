import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {backgroundMusic, finalNarration, sceneFrames} from './data/content';
import {ApplicationScene} from './scenes/ApplicationScene';
import {AssistantScene} from './scenes/AssistantScene';
import {CodeScene} from './scenes/CodeScene';
import {FinalScene} from './scenes/FinalScene';
import {IntroScene} from './scenes/IntroScene';
import {ProjectsScene} from './scenes/ProjectsScene';
import {WorkflowScene} from './scenes/WorkflowScene';

export const PlehnRecruiterVideo: React.FC = () => {
  let start = 0;
  const scene = (duration: number, content: React.ReactNode) => {
    const from = start;
    start += duration;
    return <Sequence key={from} from={from} durationInFrames={duration}>{content}</Sequence>;
  };

  return (
    <AbsoluteFill>
      {backgroundMusic ? <Audio src={staticFile(backgroundMusic)} volume={0.08} loop /> : null}
      {finalNarration ? <Audio src={staticFile(finalNarration)} volume={0.96} startFrom={0} /> : null}
      {scene(sceneFrames.intro, <IntroScene />)}
      {scene(sceneFrames.application, <ApplicationScene />)}
      {scene(sceneFrames.assistant, <AssistantScene />)}
      {scene(sceneFrames.projects, <ProjectsScene />)}
      {scene(sceneFrames.workflow, <WorkflowScene />)}
      {scene(sceneFrames.code, <CodeScene />)}
      {scene(sceneFrames.final, <FinalScene />)}
    </AbsoluteFill>
  );
};
