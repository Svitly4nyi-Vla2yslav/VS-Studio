import { motion } from 'framer-motion';
import styled from 'styled-components';
import { marblePageBackground } from '../../../styles/marbleBackground';

export const SiteShell = styled.div`
  min-height: 100vh;
  overflow-x: clip;
  ${marblePageBackground}
`;

export const MainContent = styled(motion.main)`
  padding-top: 76px;

  @media (max-width: 767px) {
    padding-top: 66px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 72px;
  }
`;
