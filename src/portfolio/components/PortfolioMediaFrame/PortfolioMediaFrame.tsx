import { useEffect, useRef, useState } from 'react';
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
  const [hasAttachedSource, setHasAttachedSource] = useState(eager);
  const hasAttachedSourceRef = useRef(eager);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || type !== 'video' || !hasAttachedSource || !isVisibleRef.current) return;

    void video.play().catch(() => undefined);
  }, [hasAttachedSource, src, type]);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video || type !== 'video') return;

    const prepareVideo = () => {
      video.preload = 'metadata';

      if (!hasAttachedSourceRef.current) {
        hasAttachedSourceRef.current = true;
        setHasAttachedSource(true);
      }
    };

    if (!('IntersectionObserver' in window)) {
      prepareVideo();
      void video.play().catch(() => undefined);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        prepareVideo();
        preloadObserver.disconnect();
      },
      { rootMargin: '800px 0px', threshold: 0 }
    );

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          prepareVideo();
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    if (eager) {
      prepareVideo();
    }

    preloadObserver.observe(frame);
    playbackObserver.observe(frame);

    return () => {
      preloadObserver.disconnect();
      playbackObserver.disconnect();
    };
  }, [eager, type]);

  return (
    <MediaFrame ref={frameRef} className={className} $type={type}>
      <MediaFrameGlow aria-hidden='true' />
      <MediaInnerLayer $type={type}>
        {type === 'image' ? (
          <ImageMedia src={src} alt={alt} loading='lazy' decoding='async' fetchPriority={eager ? 'high' : 'low'} />
        ) : (
          <VideoMedia
            ref={videoRef}
            src={hasAttachedSource ? src : undefined}
            aria-label={alt}
            loop
            muted
            playsInline
            controls={false}
            preload={eager || hasAttachedSource ? 'metadata' : 'none'}
            disablePictureInPicture
          />
        )}
      </MediaInnerLayer>
      <MediaCaption>{alt}</MediaCaption>
    </MediaFrame>
  );
};
