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
      void video.play().catch(() => undefined);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: '240px 0px', threshold: 0.08 }
    );
    observer.observe(frame);

    return () => observer.disconnect();
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
            preload={eager ? 'metadata' : 'none'}
            disablePictureInPicture
          />
        )}
      </MediaInnerLayer>
      <MediaCaption>{alt}</MediaCaption>
    </MediaFrame>
  );
};
