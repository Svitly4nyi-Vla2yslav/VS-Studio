import styled from 'styled-components';

export const VideoRoot = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;

export const VideoElement = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  z-index: 0;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
`;
