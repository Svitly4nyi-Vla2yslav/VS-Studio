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
}

// PortfolioMediaFrame рендерить один квадратний контейнер і вибирає img або video за type.
export const PortfolioMediaFrame: React.FC<PortfolioMediaFrameProps> = ({ type, src, alt, className }) => (
  <MediaFrame className={className} $type={type}>
    <MediaFrameGlow aria-hidden='true' />
    <MediaInnerLayer $type={type}>
      {type === 'image' ? (
        <ImageMedia src={src} alt={alt} loading='lazy' decoding='async' />
      ) : (
        <VideoMedia
          src={src}
          aria-label={alt}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload='metadata'
          disablePictureInPicture
        />
      )}
    </MediaInnerLayer>
    <MediaCaption>{alt}</MediaCaption>
  </MediaFrame>
);
