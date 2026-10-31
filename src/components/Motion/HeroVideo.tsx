import heroStartseiteWebm from '../../assets/hero-image/Startseite.webm';
import { VideoElement, VideoOverlay, VideoRoot } from './HeroVideo.styled';

/**
 * Рендерить декоративне фонове WebM-відео hero-секції з постером до завантаження metadata.
 * Відео автоматично повторюється без звуку й відтворюється inline; VideoOverlay додає
 * окремий візуальний шар. Компонент не приймає аргументів і не має побічних ефектів.
 */
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
