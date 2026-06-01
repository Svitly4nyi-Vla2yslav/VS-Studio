import { useEffect, useRef } from 'react';
import { useLazyMedia } from '../../../hooks/useLazyMedia';
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
  const { targetRef, shouldLoad, isVisible } = useLazyMedia<HTMLElement>({ eager });
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || type !== 'video' || !shouldLoad) return;

    if (isVisible) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad, type]);

  return (
    <MediaFrame ref={targetRef} className={className} $type={type}>
      <MediaFrameGlow aria-hidden='true' />
      <MediaInnerLayer $type={type}>
        {type === 'image' ? (
          <ImageMedia src={shouldLoad ? src : undefined} alt={alt} loading='lazy' decoding='async' fetchPriority={eager ? 'high' : 'low'} />
        ) : (
          <VideoMedia
            ref={videoRef}
            src={shouldLoad ? src : undefined}
            aria-label={alt}
            loop
            muted
            playsInline
            controls={false}
            preload={shouldLoad ? 'metadata' : 'none'}
            disablePictureInPicture
          />
        )}
      </MediaInnerLayer>
      <MediaCaption>{alt}</MediaCaption>
    </MediaFrame>
  );
};
