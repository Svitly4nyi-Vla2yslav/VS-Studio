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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterInfo = styled.div`
  p {
    margin: 0;
  }
`;

export const FooterMuted = styled.p`
  color: rgba(255, 255, 255, 0.72) !important;
  margin-top: 4px !important;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
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

export const FooterCookieButton = styled.button`
  ${interactiveLink}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`;
