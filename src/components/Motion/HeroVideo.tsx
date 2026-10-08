import heroStartseiteWebm from '../../assets/hero-image/Startseite.webm';
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
        <source src={heroStartseiteWebm} type='video/webm' />
      </VideoElement>
      <VideoOverlay />
    </VideoRoot>
  );
};

export default HeroVideo;
