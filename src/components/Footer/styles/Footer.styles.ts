import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterRoot = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px 0 44px;
  background: rgba(8, 10, 18, 0.9);
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 1.4fr) repeat(4, minmax(140px, 1fr));
  gap: 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterInfo = styled.div`
  p {
    margin: 0;
  }
`;

export const FooterColumn = styled.div`
  display: grid;
  align-content: start;
  gap: 10px;
`;

export const FooterColumnTitle = styled.h2`
  margin: 0;
  color: #ffd08a;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const FooterMuted = styled.p`
  color: rgba(255, 255, 255, 0.72) !important;
  margin-top: 4px !important;

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease-smooth);
  }

  a:hover,
  a:focus-visible {
    color: #ffd08a;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  gap: 8px;
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
`;

const interactiveLink = `
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-smooth), color var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    color: #ffd08a;
    transform: translateY(-1px);
  }
`;

export const FooterLink = styled(NavLink)`
  ${interactiveLink}
`;

export const FooterSocialLink = styled.a`
  ${interactiveLink}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
`;

export const FooterCookieButton = styled.button`
  ${interactiveLink}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`;
