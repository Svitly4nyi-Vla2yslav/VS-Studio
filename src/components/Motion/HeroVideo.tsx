import heroVideo from '../../assets/video/Sub_Zero_Refrigerator_Cinematic_Reveal.mov';
import { VideoElement, VideoOverlay, VideoRoot } from './HeroVideo.styled';

const HeroVideo: React.FC = () => {
  return (
    <VideoRoot>
      <VideoElement
        autoPlay
        loop
        muted
        playsInline
        preload='metadata'
        poster='/images/hero-generated.svg'
      >
        <source src={heroVideo} type='video/mp4' />
      </VideoElement>
      <VideoOverlay />
    </VideoRoot>
  );
};

export default HeroVideo;
