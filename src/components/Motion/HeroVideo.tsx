import heroStartseiteMp4 from '../../assets/hero-image/Startseite.mp4';
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
        <source src={heroStartseiteMp4} type='video/mp4' />
      </VideoElement>
      <VideoOverlay />
    </VideoRoot>
  );
};

export default HeroVideo;
