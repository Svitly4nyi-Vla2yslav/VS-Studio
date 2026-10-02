import styled from 'styled-components';

export const DisplayXL = styled.h1`
  margin: 0;
  font-size: var(--type-display-xl);
  line-height: .92;
  letter-spacing: -.045em;
  text-wrap: balance;
`;

export const DisplayL = styled.h1`
  margin: 0;
  font-size: var(--type-display-l);
  line-height: var(--leading-display);
  letter-spacing: -.04em;
  text-wrap: balance;
`;

export const SectionHeading = styled.h2`
  margin: 0;
  font-size: var(--type-h2);
  line-height: var(--leading-heading);
  letter-spacing: -.025em;
  text-wrap: balance;
`;

export const GoldEmphasis = styled.em`
  color: transparent;
  background: var(--gold-metal);
  background-clip: text;
  -webkit-background-clip: text;
  font-style: normal;
  font-weight: 700;
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: var(--gold-400);
  font-size: var(--type-meta);
  font-weight: 700;
  letter-spacing: .18em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const BodyLarge = styled.p`
  margin: 0;
  color: var(--champagne-text);
  font-size: var(--type-body-lg);
  line-height: var(--leading-body);
`;

export const MetaText = styled.span`
  color: var(--muted-gold-text);
  font-size: var(--type-meta);
  letter-spacing: .08em;
  line-height: 1.4;
`;
