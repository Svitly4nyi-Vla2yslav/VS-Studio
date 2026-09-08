import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';

const gold = '#efb33e';
const cyan = '#33e0d1';
const blue = '#316bf9';

const driftGold = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: .14; }
  25% { transform: translate3d(-110px, 40px, 0) scale(1.12); opacity: .22; }
  50% { transform: translate3d(120px, -90px, 0) scale(1.24); opacity: .28; }
  75% { transform: translate3d(-140px, -30px, 0) scale(1.14); opacity: .18; }
  100% { transform: translate3d(0, 0, 0) scale(1); opacity: .14; }
`;

const driftBlue = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1.02); opacity: .1; }
  25% { transform: translate3d(120px, -60px, 0) scale(1.15); opacity: .2; }
  50% { transform: translate3d(-110px, 86px, 0) scale(1.2); opacity: .24; }
  75% { transform: translate3d(80px, 40px, 0) scale(1.12); opacity: .16; }
  100% { transform: translate3d(0, 0, 0) scale(1.02); opacity: .1; }
`;

const driftCyan = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); opacity: .08; }
  25% { transform: translate3d(-90px, -40px, 0) scale(1.12); opacity: .18; }
  50% { transform: translate3d(110px, 70px, 0) scale(1.2); opacity: .24; }
  75% { transform: translate3d(-70px, 80px, 0) scale(1.1); opacity: .14; }
  100% { transform: translate3d(0, 0, 0) scale(1); opacity: .08; }
`;

const cursorBlink = keyframes`
  0%, 42% { opacity: 1; }
  43%, 100% { opacity: 0; }
`;

const workflowPulse = keyframes`
  0%, 12% { opacity: .55; border-color: rgba(255,255,255,.1); transform: translateY(0); }
  18%, 28% { opacity: 1; border-color: rgba(239,179,62,.75); transform: translateY(-4px); }
  36%, 100% { opacity: .7; border-color: rgba(51,224,209,.2); transform: translateY(0); }
`;

const sheen = keyframes`
  from { transform: translateX(-130%); }
  to { transform: translateX(230%); }
`;

export const Page = styled.main`
  --plehn-bg: #07090d;
  --plehn-surface: #0e1218;
  --plehn-surface-2: #131923;
  --plehn-text: #f7f8fa;
  --plehn-muted: #9ba3b0;
  --plehn-gold: ${gold};
  --plehn-cyan: ${cyan};
  --plehn-blue: ${blue};
  --plehn-line: #292f3b;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  margin-top: 0;
  padding-top: 0;
  overflow-x: clip;
  color: var(--plehn-text);
  background:
    radial-gradient(circle at 50% 22%, rgba(49,107,249,.045), transparent 28%),
    var(--plehn-bg);
  font-family: Inter, Geist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  scroll-behavior: smooth;

  *, *::before, *::after { box-sizing: border-box; }
  button, input { font: inherit; }
  a { color: inherit; }
  button { cursor: pointer; }

  :focus-visible {
    outline: 2px solid var(--plehn-cyan);
    outline-offset: 4px;
  }

  .terminal-cursor {
    display: inline-block;
    width: .08em;
    margin-left: .08em;
    overflow: hidden;
    color: var(--plehn-gold);
    animation: ${cursorBlink} 700ms steps(1, end) infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: .001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .001ms !important;
    }
  }
`;

export const Container = styled.div`
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;

  @media (max-width: 767px) { width: min(100% - 40px, 1200px); }
  @media (max-width: 430px) { width: calc(100% - 40px); }
`;

export const Hero = styled.section`
  position: relative;
  z-index: 1;
  min-height: min(940px, 100svh);
  margin-top: 0;
  isolation: isolate;
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,.06);
  scroll-margin-top: 104px;
`;

export const HeroBlob = styled.div<{ $tone: 'gold' | 'blue' | 'cyan' }>`
  position: absolute;
  z-index: 0;
  width: clamp(360px, 48vw, 760px);
  aspect-ratio: 1;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(105px);
  mix-blend-mode: screen;
  will-change: transform, opacity;
  opacity: .8;
  transform-origin: center;
  background: ${({ $tone }) => ($tone === 'gold' ? gold : $tone === 'blue' ? blue : cyan)};
  ${({ $tone }) =>
    $tone === 'gold'
      ? css`top: 15%; right: 4%; animation: ${driftGold} 24s ease-in-out infinite;`
      : $tone === 'blue'
        ? css`bottom: -24%; left: 16%; animation: ${driftBlue} 28s ease-in-out infinite;`
        : css`bottom: 2%; right: -16%; width: clamp(260px, 34vw, 520px); animation: ${driftCyan} 26s ease-in-out infinite;`}
`;

export const Header = styled.header`
  position: sticky;
  top: 12px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: min(1200px, calc(100% - 32px));
  min-height: 72px;
  margin: 0 auto;
  padding: 10px 14px 10px 10px;
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 18px;
  background: rgba(7,9,13,.7);
  box-shadow: 0 18px 50px rgba(0,0,0,.22);
  backdrop-filter: blur(18px);

  @media (max-width: 860px) {
    width: min(100% - 20px, 1200px);
    padding: 8px 10px 8px 12px;
  }
`;

export const HeaderNavGroup = styled.div<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-left: auto;

  @media (max-width: 860px) {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    padding: 14px 12px 12px;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 16px;
    background: rgba(9, 12, 18, 0.94);
    box-shadow: 0 18px 40px rgba(0,0,0,.24);
  }
`;

export const MobileMenuButton = styled.button<{ $open?: boolean }>`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 12px;
  background: rgba(19,25,35,.82);
  color: var(--plehn-text);

  span {
    position: relative;
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
  }

  span::before,
  span::after {
    content: '';
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    transition: transform 180ms ease, top 180ms ease, opacity 180ms ease;
  }

  span::before { top: -6px; }
  span::after { top: 6px; }

  @media (max-width: 860px) {
    display: inline-flex;
  }

  ${({ $open }) =>
    $open &&
    css`
      span {
        background: transparent;
      }

      span::before {
        top: 0;
        transform: rotate(45deg);
      }

      span::after {
        top: 0;
        transform: rotate(-45deg);
      }
    `}
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  color: var(--plehn-text);
  text-decoration: none;
  font-size: 14px;
  font-weight: 650;

  @media (max-width: 560px) {
    .brand-label { display: none; }
  }
`;

export const BrandLogo = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(239,179,62,.2);
  background: rgba(255,255,255,.05);
`;

export const HeaderLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 860px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SectionNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  margin-left: auto;

  @media (max-width: 860px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 0;
    padding-top: 0;
  }
`;

export const SectionNavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 12px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 999px;
  background: rgba(19,25,35,.7);
  color: var(--plehn-text);
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;

  &:hover { border-color: rgba(51,224,209,.6); }

  @media (max-width: 860px) {
    justify-content: flex-start;
    min-height: 40px;
    padding: 0 14px;
    border-radius: 12px;
  }
`;

export const HeaderLink = styled.a<{ $accent?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 17px;
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => ($accent ? 'rgba(239,179,62,.75)' : 'rgba(255,255,255,.11)')};
  background: rgba(19,25,35,.82);
  color: var(--plehn-text);
  text-decoration: none;
  font-size: 12px;
  font-weight: 650;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover { transform: translateY(-2px); border-color: var(--plehn-cyan); background: #171e29; }
  @media (max-width: 860px) {
    width: 100%;
    justify-content: center;
  }
  @media (max-width: 480px) { padding: 0 12px; span { display: none; } }
`;

export const HeroContent = styled.div`
  display: flex;
  min-height: calc(min(940px, 100svh) - 110px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: clamp(80px, 10vw, 132px) 0 96px;
`;

export const RolePill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 30px;
  padding: 10px 16px;
  border: 1px solid rgba(239,179,62,.72);
  border-radius: 999px;
  background: rgba(19,25,35,.72);
  color: #f4f1ea;
  font-size: 12px;
  font-weight: 650;

  &::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--plehn-cyan); box-shadow: 0 0 16px var(--plehn-cyan); }
`;

export const HeroTitle = styled.h1`
  min-height: 3.05em;
  max-width: 950px;
  margin: 0 0 24px;
  font-size: clamp(56px, 6.2vw, 88px);
  font-weight: 730;
  line-height: .99;
  letter-spacing: -.055em;
  text-wrap: balance;

  @media (max-width: 767px) { min-height: 3.4em; font-size: clamp(44px, 10.6vw, 64px); }
  @media (max-width: 430px) { min-height: 4.25em; font-size: 43px; line-height: 1.02; }
`;

export const HeroLead = styled.p`
  max-width: 760px;
  margin: 0;
  color: var(--plehn-muted);
  font-size: clamp(17px, 1.7vw, 21px);
  line-height: 1.5;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 38px;
  @media (max-width: 480px) { width: 100%; > * { width: 100%; } }
`;

const buttonStyles = css`
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 22px;
  border-radius: 13px;
  border: 1px solid rgba(255,255,255,.12);
  text-decoration: none;
  font-size: 14px;
  font-weight: 750;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  &:hover { transform: translateY(-3px); }
`;

export const PrimaryLink = styled.a`
  ${buttonStyles}
  border-color: var(--plehn-gold);
  color: #080a0d;
  background: linear-gradient(135deg, #f8c55b, var(--plehn-gold));
  box-shadow: 0 18px 50px rgba(239,179,62,.16);
  &:hover { box-shadow: 0 22px 54px rgba(239,179,62,.28); }
`;

export const SecondaryLink = styled.a`
  ${buttonStyles}
  background: var(--plehn-surface-2);
  &:hover { border-color: rgba(51,224,209,.6); }
`;

export const StackList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  margin: 34px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 8px 14px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 999px;
    background: rgba(19,25,35,.76);
    color: #cfd4dc;
    font-size: 12px;
    font-weight: 620;
  }
`;

export const Section = styled(motion.section)<{ $compact?: boolean }>`
  position: relative;
  padding: ${({ $compact }) => ($compact ? '80px 0' : 'clamp(96px, 11vw, 150px) 0')};
  border-bottom: 1px solid rgba(255,255,255,.055);
  scroll-margin-top: 104px;
`;

export const SectionKicker = styled.p`
  margin: 0 0 14px;
  color: var(--plehn-cyan);
  font-size: 12px;
  font-weight: 760;
  letter-spacing: .1em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  max-width: 920px;
  margin: 0;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.02;
  letter-spacing: -.045em;
  text-wrap: balance;
`;

export const SectionLead = styled.p`
  max-width: 800px;
  margin: 18px 0 0;
  color: var(--plehn-muted);
  font-size: clamp(16px, 1.7vw, 19px);
  line-height: 1.55;
`;

export const AssistantGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(260px, .75fr);
  gap: 24px;
  margin-top: 42px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

export const AssistantPanel = styled.div`
  min-width: 0;
  padding: clamp(20px, 3.2vw, 34px);
  border: 1px solid var(--plehn-line);
  border-radius: 26px;
  background:
    radial-gradient(circle at 100% 0, rgba(51,224,209,.06), transparent 32%),
    var(--plehn-surface);
`;

export const AssistantLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
  color: var(--plehn-cyan);
  font-size: 12px;
  font-weight: 760;
  letter-spacing: .06em;
  text-transform: uppercase;
  &::before { content: ''; width: 9px; height: 9px; border-radius: 50%; background: var(--plehn-cyan); box-shadow: 0 0 18px rgba(51,224,209,.7); }
`;

export const Conversation = styled.div`
  display: grid;
  min-height: 270px;
  align-content: start;
  gap: 14px;
`;

export const Message = styled.div<{ $role: 'user' | 'assistant' }>`
  width: ${({ $role }) => ($role === 'user' ? 'min(88%, 620px)' : 'min(94%, 690px)')};
  margin-left: ${({ $role }) => ($role === 'user' ? 'auto' : '0')};
  padding: 17px 19px;
  border: 1px solid ${({ $role }) => ($role === 'user' ? 'rgba(255,255,255,.06)' : 'rgba(51,224,209,.1)')};
  border-radius: ${({ $role }) => ($role === 'user' ? '18px 18px 5px 18px' : '18px 18px 18px 5px')};
  background: ${({ $role }) => ($role === 'user' ? '#1a2029' : 'rgba(20,41,35,.7)')};
  color: ${({ $role }) => ($role === 'user' ? '#edf0f4' : '#e8efec')};
  font-size: 14px;
  line-height: 1.52;
  white-space: pre-wrap;
`;

export const SourceRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 12px;
  span { padding: 5px 9px; border: 1px solid rgba(51,224,209,.2); border-radius: 999px; color: #9edbd4; font-size: 10px; }
`;

export const QuickQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
  margin-top: 24px;
  @media (max-width: 580px) { grid-template-columns: 1fr; }
`;

export const QuickButton = styled.button<{ $active?: boolean }>`
  min-height: 43px;
  padding: 10px 13px;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(51,224,209,.7)' : 'rgba(255,255,255,.1)')};
  border-radius: 999px;
  background: ${({ $active }) => ($active ? 'rgba(51,224,209,.1)' : '#171d25')};
  color: #e8ebef;
  text-align: left;
  font-size: 12px;
  line-height: 1.25;
  transition: transform 160ms ease, border-color 160ms ease;
  &:hover { transform: translateY(-2px); border-color: var(--plehn-cyan); }
`;

export const AssistantForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  margin-top: 16px;
  input {
    min-width: 0;
    min-height: 46px;
    padding: 0 15px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 12px;
    background: #171d25;
    color: var(--plehn-text);
    &::placeholder { color: #808895; }
  }
  button { min-width: 46px; border: 0; border-radius: 12px; background: var(--plehn-gold); color: #080a0d; font-weight: 800; }
  @media (max-width: 480px) { grid-template-columns: 1fr; button { min-height: 46px; } }
`;

export const TrustStack = styled.div`
  display: grid;
  gap: 18px;
  align-content: start;
`;

export const TrustCard = styled.div<{ $gold?: boolean }>`
  padding: 24px;
  border: 1px solid var(--plehn-line);
  border-radius: 22px;
  background: var(--plehn-surface);
  svg { color: ${({ $gold }) => ($gold ? gold : cyan)}; font-size: 22px; }
  h3 { margin: 18px 0 9px; font-size: 22px; letter-spacing: -.02em; }
  p { margin: 0; color: var(--plehn-muted); font-size: 14px; line-height: 1.55; }
`;

export const CaseList = styled.div`
  display: grid;
  gap: clamp(80px, 10vw, 128px);
  margin-top: 64px;
`;

export const CaseArticle = styled(motion.article)<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
  gap: clamp(36px, 6vw, 74px);
  align-items: center;
  > :first-child { order: ${({ $reverse }) => ($reverse ? 2 : 1)}; }
  > :last-child { order: ${({ $reverse }) => ($reverse ? 1 : 2)}; }
  @media (max-width: 850px) { grid-template-columns: 1fr; > :first-child, > :last-child { order: initial; } }
`;

export const CaseVisual = styled.div<{ $accent: 'gold' | 'cyan' | 'blue' }>`
  position: relative;
  min-height: 430px;
  overflow: hidden;
  padding: 24px;
  border: 1px solid ${({ $accent }) => ($accent === 'gold' ? 'rgba(239,179,62,.3)' : $accent === 'cyan' ? 'rgba(51,224,209,.28)' : 'rgba(49,107,249,.36)')};
  border-radius: 26px;
  background:
    radial-gradient(circle at 80% 15%, ${({ $accent }) => ($accent === 'gold' ? 'rgba(239,179,62,.12)' : $accent === 'cyan' ? 'rgba(51,224,209,.1)' : 'rgba(49,107,249,.15)')}, transparent 36%),
    #0d1117;
  box-shadow: 0 26px 80px rgba(0,0,0,.24);
  transition: transform 240ms ease, box-shadow 240ms ease;
  &:hover { transform: translateY(-4px); box-shadow: 0 32px 90px rgba(0,0,0,.34); }
  @media (max-width: 480px) { min-height: 350px; padding: 16px; }
`;

export const BrowserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 11px 11px 0 0;
  background: #151b24;
  span { width: 7px; height: 7px; border-radius: 50%; background: #3b4350; &:first-child { background: var(--plehn-gold); } }
  i { height: 11px; flex: 1; max-width: 190px; margin-left: 8px; border-radius: 999px; background: rgba(255,255,255,.06); }
`;

export const VisualCanvas = styled.div`
  position: relative;
  height: 330px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.07);
  border-top: 0;
  border-radius: 0 0 14px 14px;
  background:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px),
    #0a0e14;
  background-size: 24px 24px;

  .visual-title { position: absolute; left: 7%; top: 14%; width: 54%; height: 18%; border-radius: 12px; background: linear-gradient(90deg, #f2f4f8 0 72%, transparent 72%); opacity: .9; }
  .visual-copy { position: absolute; left: 7%; top: 38%; width: 42%; height: 8%; border-radius: 8px; background: linear-gradient(#5a6472 0 30%, transparent 30% 60%, #5a6472 60%); opacity: .6; }
  .visual-cta { position: absolute; left: 7%; top: 55%; width: 25%; height: 12%; border-radius: 9px; background: var(--plehn-gold); }
  .visual-panel { position: absolute; right: 6%; top: 10%; width: 37%; height: 70%; border: 1px solid rgba(51,224,209,.2); border-radius: 18px; background: linear-gradient(155deg, #17212b, #0f151d); box-shadow: -16px 22px 60px rgba(49,107,249,.15); }
  .visual-panel::before { content: ''; position: absolute; inset: 12% 12% auto; height: 42%; border-radius: 12px; background: linear-gradient(145deg, rgba(51,224,209,.2), rgba(49,107,249,.15)); }
  .visual-panel::after { content: ''; position: absolute; inset: auto 12% 12%; height: 25%; border-radius: 9px; background: repeating-linear-gradient(180deg, #313b47 0 5px, transparent 5px 13px); }
  @media (max-width: 480px) { height: 270px; .visual-title { width: 70%; } .visual-panel { top: 48%; width: 58%; height: 45%; } }
`;

export const FlowCanvas = styled.div`
  position: relative;
  height: 100%;
  min-height: 378px;
  display: grid;
  place-items: center;
  background-image: radial-gradient(rgba(51,224,209,.13) 1px, transparent 1px);
  background-size: 22px 22px;
  .hub { z-index: 2; display: grid; place-items: center; width: 132px; height: 132px; border: 1px solid rgba(51,224,209,.5); border-radius: 32px; background: #101d20; color: var(--plehn-cyan); font-weight: 800; box-shadow: 0 0 60px rgba(51,224,209,.1); }
  .node { position: absolute; display: grid; place-items: center; width: 104px; height: 58px; border: 1px solid rgba(255,255,255,.12); border-radius: 14px; background: #171d25; font-size: 12px; font-weight: 650; }
  .n1 { top: 12%; left: 8%; } .n2 { bottom: 12%; left: 8%; } .n3 { top: 12%; right: 8%; } .n4 { bottom: 12%; right: 8%; }
  .line { position: absolute; width: 30%; height: 1px; background: linear-gradient(90deg, transparent, var(--plehn-cyan), transparent); transform-origin: center; opacity: .55; }
  .l1 { transform: translate(-39%, -55px) rotate(22deg); } .l2 { transform: translate(-39%, 55px) rotate(-22deg); } .l3 { transform: translate(39%, -55px) rotate(-22deg); } .l4 { transform: translate(39%, 55px) rotate(22deg); }
`;

export const DashboardCanvas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-template-rows: auto 1fr;
  gap: 12px;
  height: 100%;
  min-height: 378px;
  .side { grid-row: 1 / 3; padding: 16px; border-radius: 17px; background: #111721; }
  .logo { width: 44px; height: 44px; margin-bottom: 26px; border-radius: 13px; background: linear-gradient(135deg, var(--plehn-blue), var(--plehn-cyan)); }
  .navline { height: 8px; margin: 15px 0; border-radius: 999px; background: #29323e; &:nth-child(3) { width: 72%; } &:nth-child(4) { width: 88%; } }
  .stats { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; }
  .stat { min-height: 82px; padding: 13px; border-radius: 14px; background: #151c27; } .stat::before { content: ''; display: block; width: 34%; height: 8px; border-radius: 9px; background: var(--plehn-cyan); opacity: .7; } .stat::after { content: ''; display: block; width: 68%; height: 20px; margin-top: 17px; border-radius: 5px; background: #e8edf5; opacity: .8; }
  .chart { position: relative; border-radius: 17px; background: #111721; overflow: hidden; }
  .chart::before { content: ''; position: absolute; inset: 26% 12% 15%; background: linear-gradient(145deg, transparent 0 22%, var(--plehn-blue) 23% 25%, transparent 26% 48%, var(--plehn-cyan) 49% 52%, transparent 53% 68%, var(--plehn-gold) 69% 72%, transparent 73%); opacity: .8; }
  @media (max-width: 480px) { grid-template-columns: .75fr 1.25fr; min-height: 318px; }
`;

export const DesignCanvas = styled.div`
  position: relative;
  height: 100%;
  min-height: 378px;
  .frame { position: absolute; width: 42%; height: 52%; border: 1px solid rgba(255,255,255,.13); border-radius: 17px; background: #151b24; box-shadow: 0 24px 50px rgba(0,0,0,.28); }
  .frame::before { content: ''; position: absolute; inset: 12%; border-radius: 10px; background: linear-gradient(#edf1f7 0 18%, transparent 18% 30%, #303947 30% 38%, transparent 38% 52%, var(--plehn-gold) 52% 72%, transparent 72%); opacity: .8; }
  .f1 { left: 4%; top: 9%; transform: rotate(-4deg); } .f2 { right: 3%; top: 22%; transform: rotate(5deg); border-color: rgba(239,179,62,.32); } .f3 { left: 29%; bottom: 5%; transform: rotate(-1deg); border-color: rgba(51,224,209,.28); }
  .tag { position: absolute; padding: 8px 11px; border-radius: 999px; background: var(--plehn-cyan); color: #07100f; font-size: 10px; font-weight: 800; } .t1 { right: 12%; top: 9%; } .t2 { left: 6%; bottom: 10%; background: var(--plehn-gold); }
`;

export const CaseCopy = styled.div`
  min-width: 0;
`;

export const CaseNumber = styled.span`
  display: inline-flex;
  margin-bottom: 16px;
  color: var(--plehn-cyan);
  font-size: 12px;
  font-weight: 780;
  letter-spacing: .1em;
  text-transform: uppercase;
`;

export const CaseTitle = styled.h3`
  margin: 0 0 12px;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1;
  letter-spacing: -.04em;
`;

export const CasePurpose = styled.p`
  margin: 0 0 28px;
  color: #c3c9d2;
  font-size: 17px;
  line-height: 1.55;
`;

export const DetailList = styled.dl`
  display: grid;
  gap: 18px;
  margin: 0;
  > div { display: grid; grid-template-columns: 90px 1fr; gap: 16px; }
  dt { color: var(--plehn-gold); font-size: 11px; font-weight: 780; letter-spacing: .08em; text-transform: uppercase; }
  dd { margin: 0; color: var(--plehn-muted); font-size: 14px; line-height: 1.55; }
  @media (max-width: 480px) { > div { grid-template-columns: 1fr; gap: 5px; } }
`;

export const Learning = styled.blockquote`
  margin: 26px 0 0;
  padding: 18px 20px;
  border-left: 2px solid var(--plehn-gold);
  background: linear-gradient(90deg, rgba(239,179,62,.08), transparent);
  color: #e8ebef;
  font-size: 14px;
  line-height: 1.55;
`;

export const TechRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  li { padding: 7px 10px; border: 1px solid rgba(255,255,255,.1); border-radius: 999px; color: #b8c0cb; font-size: 11px; }
`;

export const CaseLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 24px;
  a { display: inline-flex; align-items: center; gap: 7px; color: #f0f2f5; font-size: 13px; font-weight: 720; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.2); padding-bottom: 3px; &:hover { color: var(--plehn-cyan); } }
`;

export const WorkflowShell = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 46px;
  padding: clamp(24px, 4vw, 42px);
  border: 1px solid var(--plehn-line);
  border-radius: 26px;
  background: #0b0f15;
  &::after { content: ''; position: absolute; top: 0; bottom: 0; width: 30%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.03), transparent); animation: ${sheen} 15s linear infinite; pointer-events: none; }
`;

export const WorkflowGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 850px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr 1fr; }
`;

export const WorkflowStep = styled.li<{ $index: number }>`
  min-height: 142px;
  padding: 16px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 16px;
  background: var(--plehn-surface-2);
  animation: ${workflowPulse} 15s ease-in-out infinite;
  animation-delay: ${({ $index }) => `${$index * 1.8}s`};
  span { color: var(--plehn-gold); font-size: 11px; font-weight: 800; }
  strong { display: block; margin-top: 12px; font-size: 14px; }
  p { margin: 24px 0 0; color: var(--plehn-muted); font-size: 11px; line-height: 1.4; }
`;

export const Workbench = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 6vw, 72px);
  margin-top: 42px;
  padding: clamp(24px, 4vw, 40px);
  border: 2px solid #159ee6;
  border-radius: 24px;
  background: var(--plehn-surface);
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

export const WorkbenchColumn = styled.div`
  display: grid;
  align-content: start;
  gap: 16px;
  > strong { color: var(--plehn-cyan); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }
`;

export const WorkField = styled.label`
  display: grid;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 13px;
  background: #1a2028;
  color: var(--plehn-muted);
  font-size: 11px;
  input { width: 100%; padding: 0; border: 0; outline: 0; background: transparent; color: var(--plehn-text); font-weight: 650; }
`;

export const OutputField = styled.div`
  min-height: 70px;
  padding: 14px 16px;
  border-radius: 13px;
  background: #1a2028;
  span { display: block; margin-bottom: 8px; color: var(--plehn-muted); font-size: 11px; }
  strong { display: block; color: #eef1f5; font-size: 14px; line-height: 1.3; }
`;

export const ActionButton = styled.button`
  ${buttonStyles}
  width: fit-content;
  margin-top: 6px;
  border-color: var(--plehn-gold);
  background: var(--plehn-gold);
  color: #080a0d;
  @media (max-width: 480px) { width: 100%; }
`;

export const MobileDemoToggle = styled.button`
  display: none;
  width: 100%;
  min-height: 50px;
  margin-top: 30px;
  border: 1px solid var(--plehn-gold);
  border-radius: 13px;
  background: transparent;
  color: var(--plehn-text);
  font-weight: 700;
  @media (max-width: 600px) { display: block; }
`;

export const WorkbenchWrap = styled.div<{ $open: boolean }>`
  @media (max-width: 600px) { display: ${({ $open }) => ($open ? 'block' : 'none')}; }
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, .75fr);
  gap: 24px;
  margin-top: 42px;
  @media (max-width: 820px) { grid-template-columns: 1fr; }
`;

export const VideoFrame = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  display: grid;
  place-items: center;
  border: 1px solid rgba(239,179,62,.75);
  border-radius: 24px;
  background:
    radial-gradient(circle at 70% 20%, rgba(239,179,62,.18), transparent 34%),
    radial-gradient(circle at 30% 80%, rgba(49,107,249,.18), transparent 36%),
    #171207;
  video { width: 100%; height: 100%; object-fit: cover; }
`;

export const VideoPoster = styled.div`
  display: grid;
  place-items: center;
  gap: 22px;
  text-align: center;
  button { display: grid; place-items: center; width: 76px; height: 58px; border: 0; border-radius: 999px; background: var(--plehn-gold); color: #07090d; font-size: 20px; transition: transform 180ms ease; &:hover { transform: scale(1.05); } }
  strong { font-size: clamp(17px, 2vw, 22px); }
  span { display: block; margin-top: 8px; color: var(--plehn-muted); font-size: 13px; }
`;

export const Transcript = styled.aside`
  max-height: 480px;
  overflow: auto;
  padding: 26px;
  border: 1px solid var(--plehn-line);
  border-radius: 24px;
  background: var(--plehn-surface);
  h3 { margin: 0 0 22px; color: var(--plehn-cyan); font-size: 12px; letter-spacing: .08em; text-transform: uppercase; }
  p { margin: 0 0 16px; color: #d4d8de; font-size: 14px; line-height: 1.5; &:last-child { margin-bottom: 0; } }
`;

export const AnswerPanel = styled.div`
  margin-top: 38px;
  min-height: 260px;
  padding: clamp(24px, 4vw, 42px);
  border: 1px solid rgba(239,179,62,.75);
  border-radius: 24px;
  background: var(--plehn-surface);
  color: #eef0f4;
  font-size: clamp(19px, 2.2vw, 27px);
  font-weight: 650;
  line-height: 1.33;
  letter-spacing: -.015em;
  @media (max-width: 480px) { min-height: 350px; font-size: 19px; }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-top: 40px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

export const SkillColumn = styled.div<{ $growing?: boolean }>`
  padding: clamp(22px, 3vw, 30px);
  border: 1px solid var(--plehn-line);
  border-radius: 22px;
  background: var(--plehn-surface);
  h3 { margin: 0 0 22px; color: ${({ $growing }) => ($growing ? gold : '#70e3a3')}; font-size: 12px; letter-spacing: .06em; text-transform: uppercase; }
  ul { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
  li { display: flex; align-items: center; gap: 9px; min-height: 38px; padding: 8px 12px; border: 1px solid ${({ $growing }) => ($growing ? 'rgba(239,179,62,.75)' : 'rgba(79,210,139,.68)')}; border-radius: 999px; color: #e8ebef; font-size: 12px; }
`;

export const FinalSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(110px, 14vw, 190px) 0 90px;
  text-align: center;
  > div:not([aria-hidden='true']) { position: relative; z-index: 1; }
  h2 { max-width: 980px; margin: 0 auto; font-size: clamp(40px, 5.4vw, 70px); line-height: 1.02; letter-spacing: -.045em; text-wrap: balance; }
  > div > p { margin: 20px auto 0; color: var(--plehn-muted); font-size: 17px; }
`;

export const FinalBlob = styled.div<{ $tone: 'gold' | 'blue' | 'cyan' }>`
  position: absolute;
  z-index: -1;
  width: clamp(300px, 44vw, 680px);
  aspect-ratio: 1;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(105px);
  will-change: transform, opacity;
  background: ${({ $tone }) => ($tone === 'gold' ? gold : $tone === 'blue' ? blue : cyan)};
  ${({ $tone }) =>
    $tone === 'gold'
      ? css`bottom: -58%; left: 26%; animation: ${driftGold} 13s ease-in-out infinite reverse;`
      : $tone === 'blue'
        ? css`bottom: -70%; left: -8%; animation: ${driftBlue} 17s ease-in-out infinite;`
        : css`bottom: -62%; right: -5%; width: clamp(260px, 34vw, 520px); animation: ${driftCyan} 15s ease-in-out infinite reverse;`}
`;

export const FinalActions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 42px;
  min-height: 105px;
  @media (max-width: 520px) { flex-direction: column; > * { width: 100%; } }
`;

export const EvasiveStage = styled.div`
  display: grid;
  width: 360px;
  min-height: 92px;
  place-items: center;

  @media (max-width: 520px) {
    width: 100%;
    min-height: auto;
  }
`;

export const EvasiveLink = styled.a`
  ${buttonStyles}
  position: relative;
  min-width: 210px;
  border-color: var(--plehn-gold);
  background: var(--plehn-gold);
  color: #07090d;
  box-shadow: 0 18px 45px rgba(239,179,62,.2);
  will-change: transform;
`;

export const EvasiveNote = styled.p`
  min-height: 20px;
  margin: 6px 0 0 !important;
  color: #dfba6a !important;
  font-size: 12px !important;
`;

export const FooterMeta = styled.div`
  position: relative;
  margin-top: 54px;
  color: #737b87;
  font-size: 11px;
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
`;
