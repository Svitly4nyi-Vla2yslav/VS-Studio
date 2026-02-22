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
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(10, 14, 26, 0.82);
  padding: 10px;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 10px;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 207, 130, 0.36);
  color: #fef6df;
  font-size: 14px;
  font-weight: 600;
  background: linear-gradient(120deg, rgba(255, 180, 90, 0.26), rgba(79, 141, 255, 0.2));
  white-space: nowrap;
`;
