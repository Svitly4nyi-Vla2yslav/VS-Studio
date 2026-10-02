import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import { goldButtonMotion } from '../../../components/visual/goldButtonMotion';

export const PageRoot = styled.div`
  padding: 48px 0 96px;

  @media (max-width: 767px) {
    padding: 24px 0 72px;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`;

export const HeroSection = styled(motion.section).attrs({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.22 },
  variants: fadeInUp,
})`
  display: grid;
  gap: 24px;
  padding: 72px 0;

  h1 {
    font-size: var(--type-display-l);
    line-height: var(--leading-display);
    letter-spacing: -.04em;
    max-width: 680px;
  }

  p {
    max-width: 62ch;
    color: var(--champagne-text);
  }

  @media (max-width: 767px) {
    padding: 48px 0;
    gap: 16px;

    h1 {
      max-width: 680px;
    }
  }
`;

export const Section = styled(motion.section).attrs({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.18 },
  variants: fadeInUp,
})`
  padding-top: 72px;
  padding-bottom: 72px;

  h2 {
    font-size: var(--type-h2);
    line-height: var(--leading-heading);
    letter-spacing: -.025em;
    margin-top: 72px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  > :first-child {
    margin-top: 0;
  }

  @media (max-width: 767px) {
    padding-top: 48px;
    padding-bottom: 48px;

    h2 {
      margin-top: 48px;
    }

    h3 {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
`;

export const Grid2 = styled(motion.div).attrs({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
  variants: staggerContainer,
})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid3 = styled(motion.div).attrs({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
  variants: staggerContainer,
})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(motion.article).attrs({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
  variants: scaleIn,
})`
  position: relative;
  overflow: hidden;
  border-radius: 22px 22px 18px 24px;
  border: 1px solid var(--obsidian-border);
  background:
    radial-gradient(circle at 88% 0%, rgba(255, 242, 189, .08), transparent 30%),
    radial-gradient(ellipse at 0% 110%, rgba(100, 57, 25, .12), transparent 42%),
    linear-gradient(145deg, rgba(23, 20, 26, .94), rgba(6, 6, 7, .96));
  padding: 32px;
  overflow-wrap: normal;
  word-break: normal;
  hyphens: auto;
  transition:
    transform var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth),
    box-shadow var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--obsidian-border-hot);
    background-color: var(--obsidian-surface-hover);
    box-shadow: var(--obsidian-shadow-md), var(--gold-glow-sm);
  }

  h2 {
    margin: 0 0 14px;
    font-size: var(--type-h2);
    line-height: var(--leading-heading);
    overflow-wrap: normal;
    word-break: normal;
  }

  h3 {
    margin: 0 0 12px;
    font-size: var(--type-h3);
    line-height: var(--leading-heading);
    overflow-wrap: normal;
    word-break: normal;
  }

  p,
  li {
    line-height: 1.55;
  }

  @media (max-width: 767px) {
    padding: 24px;
  }
`;

export const Band = styled(Card).attrs({ as: motion.section })`
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }
`;

export const Muted = styled.p`
  color: var(--muted-gold-text);
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 16px;
  }
`;

const BaseButtonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: transform var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth), background var(--dur-mid) var(--ease-smooth),
    color var(--dur-mid) var(--ease-smooth), filter var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    min-height: 44px;
    width: 100%;
  }
`;

export const PrimaryButtonLink = styled(NavLink)`
  ${BaseButtonStyles}
  ${goldButtonMotion}
  border: 1px solid rgba(255, 242, 189, .52);
  background: var(--gold-metal);
  background-size: 180% 100%;
  color: #171108;

  &:hover,
  &:focus-visible {
    color: #171108;
    animation: none;
    box-shadow: 0 14px 28px rgba(126, 78, 15, .28);
  }
`;

export const PrimaryButton = styled.button`
  ${BaseButtonStyles}
  ${goldButtonMotion}
  border: 1px solid rgba(255, 242, 189, .52);
  cursor: pointer;
  background: var(--gold-metal);
  background-size: 180% 100%;
  color: #171108;

  &:hover,
  &:focus-visible {
    color: #171108;
    animation: none;
    box-shadow: 0 14px 28px rgba(126, 78, 15, .28);
  }
`;

export const IconBadge = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: #171108;
  background: var(--gold-metal-soft);
  vertical-align: middle;
`;

export const Checklist = styled.ul`
  display: grid;
  gap: 16px;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Price = styled.p`
  font-size: 30px;
  color: var(--gold-300);
  margin: 8px 0;
`;

export const TableLike = styled.div`
  display: grid;
  gap: 10px;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid rgba(214, 165, 66, .12);
  background: rgba(7, 7, 9, .62);
  padding: 10px 12px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
`;

export const FormGrid = styled.form`
  display: grid;
  gap: 10px;
`;

export const FieldIcon = styled.label`
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid var(--obsidian-border);
  background: rgba(7, 7, 9, .72);
  padding: 8px 10px;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth);

  &:focus-within {
    border-color: var(--obsidian-border-hot);
    background: rgba(15, 13, 17, .9);
    box-shadow: var(--focus-ring);
  }

  input,
  textarea {
    width: 100%;
    border: 0;
    background: transparent;
    color: var(--champagne-text);
    outline: none;
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;
