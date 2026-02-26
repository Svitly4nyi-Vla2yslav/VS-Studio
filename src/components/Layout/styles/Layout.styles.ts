import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SiteShell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(1200px 500px at 12% -10%, rgba(255, 160, 70, 0.2), transparent 60%),
    radial-gradient(900px 420px at 88% 10%, rgba(70, 127, 255, 0.22), transparent 60%),
    linear-gradient(180deg, #070812 0%, #0e1220 100%);
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
