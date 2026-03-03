import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const PageRoot = styled.div`
  padding: 48px 0 72px;

  @media (max-width: 767px) {
    padding: 28px 0 52px;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1560px;
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
  gap: 18px;
  padding: 70px 0 30px;

  h1 {
    font-size: clamp(34px, 8vw, 70px);
    line-height: 0.96;
    max-width: 15ch;
  }

  p {
    max-width: 62ch;
    color: rgba(255, 255, 255, 0.82);
  }

  @media (max-width: 767px) {
    padding-top: 38px;
    gap: 14px;

    h1 {
      font-size: clamp(30px, 10vw, 44px);
      max-width: 12ch;
    }
  }
`;

export const Section = styled(motion.section).attrs({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.18 },
  variants: fadeInUp,
})`
  margin-top: var(--section-space, 36px);

  h2 {
    font-size: clamp(28px, 6vw, 46px);
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    margin-top: var(--section-space-mobile, 24px);

    h2 {
      font-size: clamp(26px, 9vw, 34px);
    }

    h3 {
      font-size: 20px;
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
  gap: 14px;
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
  gap: 14px;
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
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 15, 27, 0.75);
  padding: 18px;
  transition:
    transform var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth),
    box-shadow var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(248, 190, 98, 0.62);
    background: rgba(18, 23, 38, 0.9);
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 767px) {
    padding: 14px;
  }
`;

export const Band = styled(Card).attrs({ as: motion.section })`
  margin-top: var(--section-space, 36px);

  @media (max-width: 767px) {
    margin-top: var(--section-space-mobile, 24px);
  }
`;

export const Muted = styled.p`
  color: rgba(255, 255, 255, 0.72);
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 10px;
  }
`;

const BaseButtonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 18px;
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
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${gradientFlow} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`;

export const PrimaryButton = styled.button`
  ${BaseButtonStyles}
  border: 0;
  cursor: pointer;
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${gradientFlow} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
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
  color: #101321;
  background: linear-gradient(120deg, #f7cb84, #ffdca8);
  vertical-align: middle;
`;

export const Checklist = styled.ul`
  display: grid;
  gap: 9px;
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
  color: #ffd08a;
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
  background: rgba(255, 255, 255, 0.04);
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.04);
  padding: 8px 10px;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth);

  &:focus-within {
    border-color: rgba(255, 207, 130, 0.8);
    background: rgba(255, 255, 255, 0.09);
  }

  input,
  textarea {
    width: 100%;
    border: 0;
    background: transparent;
    color: #ffffff;
    outline: none;
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;
