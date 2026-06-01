import { ImageAuraAsset, ImageAuraGlow, ImageAuraRoot } from './PortfolioImageAura.styled';

export interface PortfolioImageAuraProps {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
}

// PortfolioImageAura рендерить прозорий PNG як фоновий anime-персонаж із glow/pulse без рамки.
export const PortfolioImageAura: React.FC<PortfolioImageAuraProps> = ({ src, alt, className }) => (
  <ImageAuraRoot className={className} aria-hidden='true'>
    <ImageAuraGlow />
    <ImageAuraAsset src={src} alt={alt} loading='eager' decoding='async' fetchPriority='low' />
  </ImageAuraRoot>
);
