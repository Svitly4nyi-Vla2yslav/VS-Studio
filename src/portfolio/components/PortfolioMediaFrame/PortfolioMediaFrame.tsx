import { useEffect, useRef } from 'react';
import {
  ImageMedia,
  MediaCaption,
  MediaFrame,
  MediaFrameGlow,
  MediaInnerLayer,
  VideoMedia,
} from './PortfolioMediaFrame.styled';

export interface PortfolioMediaFrameProps {
  readonly type: 'image' | 'video';
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly eager?: boolean;
}

// PortfolioMediaFrame рендерить один квадратний контейнер і вибирає img або video за type.
export const PortfolioMediaFrame: React.FC<PortfolioMediaFrameProps> = ({ type, src, alt, className, eager = false }) => {
  const frameRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video || type !== 'video') return;

    if (!('IntersectionObserver' in window)) {
      video.preload = 'auto';
      video.load();
      void video.play().catch(() => undefined);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        video.preload = 'auto';
        video.load();
        preloadObserver.disconnect();
      },
      { rootMargin: '200% 0px', threshold: 0 }
    );

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: '360px 0px', threshold: 0.04 }
    );
    preloadObserver.observe(frame);
    playbackObserver.observe(frame);

    return () => {
      preloadObserver.disconnect();
      playbackObserver.disconnect();
    };
  }, [type]);

  return (
    <MediaFrame ref={frameRef} className={className} $type={type}>
      <MediaFrameGlow aria-hidden='true' />
      <MediaInnerLayer $type={type}>
        {type === 'image' ? (
          <ImageMedia src={src} alt={alt} loading='lazy' decoding='async' fetchPriority={eager ? 'high' : 'low'} />
        ) : (
          <VideoMedia
            ref={videoRef}
            src={src}
            aria-label={alt}
            loop
            muted
            playsInline
            controls={false}
            preload={eager ? 'auto' : 'none'}
            disablePictureInPicture
          />
        )}
      </MediaInnerLayer>
      <MediaCaption>{alt}</MediaCaption>
    </MediaFrame>
  );
};
