import styled from 'styled-components';

export const SectionWrap = styled.div`
  display: grid;
  gap: 16px;
`;

export const RowWrap = styled.div`
  display: grid;
  gap: 8px;
`;

export const RowTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
`;

export const MarqueeViewport = styled.div`
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(10, 14, 26, 0.86);
  padding: 12px;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 12px;
`;

export const Badge = styled.div<{ $backgroundImage?: string }>`
  min-width: 180px;
  min-height: 180px;
  border-radius: 14px;
  border: 1px solid rgba(255, 207, 130, 0.42);
  color: #fef6df;
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage
      ? `linear-gradient(155deg, rgba(7, 12, 23, 0.46), rgba(7, 12, 23, 0.82)), url(${$backgroundImage})`
      : 'linear-gradient(130deg, rgba(255, 180, 90, 0.2), rgba(79, 141, 255, 0.16))'};
  background-size: cover;
  background-position: center;
  padding: 12px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-content: start;
  gap: 8px;

  .badge-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
`;

export const BadgeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.18);
`;

export const BadgeGroup = styled.span`
  color: #ffdba2;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const BadgeText = styled.span`
  color: #fef6df;
  font-size: 15px;
  font-weight: 700;
`;

export const BadgeDesc = styled.span`
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.35;
`;
