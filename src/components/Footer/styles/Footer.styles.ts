import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterRoot = styled.footer`
  border-top: 1px solid var(--obsidian-border);
  padding: 30px 0 44px;
  background:
    radial-gradient(circle at 12% 100%, rgba(106, 60, 25, .1), transparent 34%),
    linear-gradient(180deg, rgba(10, 9, 12, .9), var(--obsidian-950));
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
  color: var(--gold-300);
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const FooterMuted = styled.p`
  color: var(--muted-gold-text) !important;
  margin-top: 4px !important;

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease-smooth);
  }

  a:hover,
  a:focus-visible {
    color: var(--gold-300);
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
  color: var(--champagne-text);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-smooth), color var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    color: var(--gold-300);
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
  border: 1px solid var(--obsidian-border);
  border-radius: 8px;
  background: var(--obsidian-surface);
`;

export const FooterCookieButton = styled.button`
  ${interactiveLink}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`;
