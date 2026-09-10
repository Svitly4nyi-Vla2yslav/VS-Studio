import {AbsoluteFill, Audio, interpolate, Sequence, staticFile} from 'remotion';
import {backgroundMusic, finalNarration, sceneFrames} from './data/content';
import {ApplicationScene} from './scenes/ApplicationScene';
import {AssistantScene} from './scenes/AssistantScene';
import {CodeScene} from './scenes/CodeScene';
import {FinalScene} from './scenes/FinalScene';
import {IntroScene} from './scenes/IntroScene';
import {IntroLiveScene} from './scenes/IntroLiveScene';
import {ProjectsScene} from './scenes/ProjectsScene';
import {WorkflowScene} from './scenes/WorkflowScene';

const dbToLinear = (db: number) => 10 ** (db / 20);

const musicVolume = (frame: number, withLiveIntro: boolean) => {
  const introGain = withLiveIntro ? dbToLinear(-30) : dbToLinear(-28);
  const narrationGain = dbToLinear(-18);
  const outroGain = dbToLinear(-15);
  const fadeInEnd = sceneFrames.intro + 75;
  const total = Object.values(sceneFrames).reduce((sum, frames) => sum + frames, 0);
  const outroStart = total - 210;
  const transitionGain = dbToLinear(-15);
  const boundaries = [
    sceneFrames.intro + sceneFrames.application,
    sceneFrames.intro + sceneFrames.application + sceneFrames.assistant,
    sceneFrames.intro + sceneFrames.application + sceneFrames.assistant + sceneFrames.projects,
    sceneFrames.intro + sceneFrames.application + sceneFrames.assistant + sceneFrames.projects + sceneFrames.workflow,
  ];

  if (frame < sceneFrames.intro) return introGain;
  if (frame < fadeInEnd) return interpolate(frame, [sceneFrames.intro, fadeInEnd], [introGain, narrationGain]);
  const boundary = boundaries.find((value) => Math.abs(frame - value) <= 15);
  if (boundary) {
    return interpolate(Math.abs(frame - boundary), [0, 15], [transitionGain, narrationGain]);
  }
  if (frame < outroStart) return narrationGain;
  if (frame < total - 75) return interpolate(frame, [outroStart, total - 75], [narrationGain, outroGain]);
  return interpolate(frame, [total - 75, total], [outroGain, 0], {extrapolateRight: 'clamp'});
};

const VideoBody: React.FC<{withLiveIntro: boolean}> = ({withLiveIntro}) => {
  let start = 0;
  const scene = (duration: number, content: React.ReactNode) => {
    const from = start;
    start += duration;
    return <Sequence key={from} from={from} durationInFrames={duration}>{content}</Sequence>;
  };

  return (
    <AbsoluteFill>
      <Audio src={staticFile(backgroundMusic)} volume={(frame) => musicVolume(frame, withLiveIntro)} loop />
      <Sequence from={sceneFrames.intro}>
        <Audio src={staticFile(finalNarration)} volume={1} />
      </Sequence>
      {scene(sceneFrames.intro, withLiveIntro ? <IntroLiveScene /> : <IntroScene />)}
      {scene(sceneFrames.application, <ApplicationScene />)}
      {scene(sceneFrames.assistant, <AssistantScene />)}
      {scene(sceneFrames.projects, <ProjectsScene />)}
      {scene(sceneFrames.workflow, <WorkflowScene />)}
      {scene(sceneFrames.code, <CodeScene />)}
      {scene(sceneFrames.final, <FinalScene />)}
    </AbsoluteFill>
  );
};

export const PlehnRecruiterVideo: React.FC = () => <VideoBody withLiveIntro={false} />;
export const PlehnRecruiterVideoWithLiveIntro: React.FC = () => <VideoBody withLiveIntro />;
