import { useRef } from 'react';

type HoverVideoPreviewProps = {
  poster: string;
  video: string;
  title: string;
};

const HoverVideoPreview: React.FC<HoverVideoPreviewProps> = ({ poster, video, title }) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  const play = async () => {
    const currentVideo = ref.current;
    if (!currentVideo) return;
    try {
      currentVideo.currentTime = 0;
      await currentVideo.play();
    } catch {
      // ignore autoplay restrictions
    }
  };

  const stop = () => {
    const currentVideo = ref.current;
    if (!currentVideo) return;
    currentVideo.pause();
    currentVideo.currentTime = 0;
  };

  return (
    <div
      className='project-preview'
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      tabIndex={0}
      aria-label={title}
    >
      <img src={poster} alt='' loading='lazy' />
      <video ref={ref} muted loop playsInline preload='none'>
        <source src={video} type='video/webm' />
      </video>
      <div className='preview-overlay' />
    </div>
  );
};

export default HoverVideoPreview;
 