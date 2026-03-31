import styled from 'styled-components';

export const SectionWrap = styled.div`
  display: grid;
  gap: 20px;
`;

export const RowWrap = styled.div`
  display: grid;
  gap: 10px;
`;

export const RowTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
`;

export const MarqueeViewport = styled.div`
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(10, 14, 26, 0.86);
  padding: 14px;

  .partners-swiper {
    overflow: visible;
  }

  .partners-swiper .swiper-wrapper {
    align-items: stretch;
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }

  .partners-swiper .swiper-slide {
    height: auto;
    display: flex;
    transition: transform 480ms ease, opacity 480ms ease;
  }

  .partners-swiper .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.92;
  }

  .partners-swiper .swiper-slide-active {
    opacity: 1;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  align-items: stretch;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
  }
`;

export const Badge = styled.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  border-radius: 22px;
  border: 1px solid rgba(255, 207, 130, 0.32);
  color: #fef6df;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(180deg, rgba(19, 24, 38, 0.86), rgba(10, 13, 23, 0.96)),
    rgba(10, 14, 26, 0.92);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 16px 40px rgba(0, 0, 0, 0.28);
  transition:
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 520ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 22%);
    opacity: 0.55;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 219, 162, 0.48);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 24px 54px rgba(0, 0, 0, 0.38);
  }

  &:hover .card-bg {
    transform: scale(1.08);
    filter: saturate(1.06) brightness(1.04);
  }

  &:hover .card-overlay {
    opacity: 0.88;
  }

  &:hover .card-content {
    transform: translateY(-4px);
  }

  &:hover .badge-icon {
    transform: translateY(-2px) scale(1.04);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.12),
      0 12px 24px rgba(0, 0, 0, 0.22);
  }
`;

export const CardBg = styled.div<{ $backgroundImage?: string }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage ? `url(${$backgroundImage})` : 'linear-gradient(130deg, rgba(255, 180, 90, 0.22), rgba(79, 141, 255, 0.18))'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1);
  transition:
    transform 780ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 780ms cubic-bezier(0.22, 1, 0.36, 1);
  filter: saturate(0.96) brightness(0.94);
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      180deg,
      rgba(8, 12, 22, 0.36) 0%,
      rgba(8, 12, 22, 0.52) 34%,
      rgba(8, 12, 22, 0.82) 72%,
      rgba(8, 12, 22, 0.95) 100%
    ),
    linear-gradient(180deg, rgba(255, 214, 148, 0.05), transparent 24%);
  opacity: 1;
  transition: opacity 560ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100%;
  padding: 18px;
  transition: transform 560ms cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 767px) {
    padding: 16px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const CardBottom = styled.div`
  margin-top: auto;
  display: grid;
  gap: 10px;
  max-width: 20ch;
  width: 100%;
`;

export const BadgeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition:
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1);
`;

export const BadgeGroup = styled.span`
  color: #ffdba2;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const BadgeText = styled.span`
  color: #fff4dc;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  backface-visibility: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BadgeDesc = styled.span`
  color: rgba(255, 255, 255, 0.86);
  font-size: 14px;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  backface-visibility: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
