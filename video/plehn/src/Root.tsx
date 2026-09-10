import {Composition} from 'remotion';
import {PlehnRecruiterVideo, PlehnRecruiterVideoWithLiveIntro} from './PlehnRecruiterVideo';
import {sceneFrames} from './data/content';

export const VIDEO = {
  fps: 30,
  width: 1920,
  height: 1080,
  durationInFrames: Object.values(sceneFrames).reduce((sum, frames) => sum + frames, 0),
} as const;

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="PlehnRecruiterVideo"
      component={PlehnRecruiterVideo}
      durationInFrames={VIDEO.durationInFrames}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
    <Composition
      id="PlehnRecruiterVideoWithLiveIntro"
      component={PlehnRecruiterVideoWithLiveIntro}
      durationInFrames={VIDEO.durationInFrames}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  </>
);
