import { useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  FaArrowRight,  FaChartLine,
  FaCheck,
  FaClock,
  FaDatabase,
  FaGlobe,
  FaLayerGroup,  FaShieldAlt,
  FaTools,
  FaUsers,
} from 'react-icons/fa';
import { AI_MUSIC_PACKAGES } from '../../data/pricingCatalog';
import pricingHeroImage from '../../assets/hero-image/Preise.png';
import { PageContainer, PageRoot, PrimaryButtonLink, Section } from '../shared/styles/PagePrimitives.styles';

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const floatY = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
  50% { box-shadow: 0 0 30px rgba(73, 157, 255, 0.28); }
  100% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
`;

const PricingPageRoot = styled(PageRoot)`
  padding-top: 0;
`;

const PricingSurface = styled.div`
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: -120px -20px auto;
    height: 420px;
    z-index: -2;
    background:
      radial-gradient(circle at 22% 12%, rgba(31, 115, 255, 0.22), transparent 52%),
      radial-gradient(circle at 78% 22%, rgba(255, 185, 91, 0.2), transparent 50%),
      radial-gradient(circle at 50% 75%, rgba(10, 16, 34, 0.9), rgba(6, 10, 20, 1));
    filter: blur(2px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -40px 0 auto;
    height: 460px;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent 84%);
    opacity: 0.26;
  }
`;

const Hero = styled.section`
  position: relative;
  display: grid;
  gap: 26px;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  width: 100vw;
  min-height: calc(100svh - 76px);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: clamp(72px, 12vh, 132px) max(var(--gutter), calc((100vw - 1320px) / 2 + var(--gutter)));
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(90deg, rgba(5, 8, 15, 0.92) 0%, rgba(5, 8, 15, 0.72) 40%, rgba(5, 8, 15, 0.3) 74%, rgba(5, 8, 15, 0.68) 100%),
    linear-gradient(180deg, rgba(5, 8, 15, 0.28) 0%, rgba(5, 8, 15, 0.18) 48%, rgba(5, 8, 15, 0.86) 100%),
    url(${pricingHeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    min-height: calc(100svh - 72px);
    padding: clamp(64px, 12vh, 104px) var(--gutter);
  }

  @media (max-width: 767px) {
    min-height: calc(100svh - 66px);
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: clamp(34px, 7vw, 72px);
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin: 0;
    text-wrap: balance;
  }

  p {
    margin: 18px 0 0;
    max-width: 52ch;
    color: rgba(255, 255, 255, 0.78);
    font-size: clamp(15px, 1.7vw, 18px);
  }

  @media (max-width: 767px) {
    h1 {
      font-size: clamp(32px, 12vw, 52px);
      line-height: 1.05;
    }
  }
`;

const HeroAccent = styled.span`
  color: #ffd08a;
  text-shadow: 0 0 28px rgba(255, 193, 104, 0.34);
`;

const HeroActions = styled.div`
  margin-top: 24px;
`;

const HeroButton = styled(PrimaryButtonLink)`
  min-height: 54px;
  padding: 0 28px;
  border: 1px solid rgba(255, 202, 128, 0.35);
  box-shadow: 0 10px 24px rgba(18, 33, 58, 0.34);

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 213, 150, 0.55), 0 16px 30px rgba(255, 183, 77, 0.28);
  }
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  min-height: 340px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    linear-gradient(165deg, rgba(16, 24, 44, 0.92), rgba(10, 16, 31, 0.82)),
    radial-gradient(circle at 80% 18%, rgba(71, 154, 255, 0.22), transparent 44%);
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(4, 7, 15, 0.62);

  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    right: -70px;
    top: -70px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(77, 160, 255, 0.34), transparent 70%);
    filter: blur(14px);
  }
`;

const DashboardMock = styled.div`
  position: absolute;
  inset: 22px;
  display: grid;
  gap: 12px;
`;

const VisualRow = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(8, 13, 26, 0.66);
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 13px;
    letter-spacing: 0.02em;
  }
`;

const BarWrap = styled.div`
  flex: 1;
  height: 9px;
  margin-left: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

const Bar = styled(motion.div)`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #3f8cff, #76b8ff);
`;

const FunnelLine = styled(motion.div)`
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 11, 22, 0.7);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  animation: ${floatY} 5.2s ease-in-out infinite;
`;

const Node = styled(motion.div)`
  border-radius: 10px;
  background: rgba(17, 27, 49, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.12);
  min-height: 64px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 6px;
  font-size: 12px;

  svg {
    margin-bottom: 4px;
    color: #8dc4ff;
  }
`;

const FlowSection = styled(Section)`
  margin-top: 26px;
`;

const FlowCard = styled.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(10, 16, 30, 0.82));
  padding: 18px;
  box-shadow: 0 20px 54px rgba(5, 9, 18, 0.5);
`;

const FlowGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FlowStep = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(9, 14, 28, 0.8);
  min-height: 82px;
  display: grid;
  gap: 4px;
  place-content: center;
  text-align: center;

  svg {
    margin: 0 auto;
    color: #8cc2ff;
  }

  @media (min-width: 901px) {
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -14px;
      top: 50%;
      width: 18px;
      height: 2px;
      background: linear-gradient(90deg, rgba(82, 156, 255, 0.85), rgba(82, 156, 255, 0));
    }
  }
`;

const PricingGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const SectionSubtitle = styled.p`
  max-width: 760px;
  margin: -4px 0 14px;
  color: rgba(255, 255, 255, 0.68);
  font-size: clamp(14px, 1.6vw, 16px);
  line-height: 1.55;
`;

const BillingToggle = styled.div`
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.72);
`;

const BillingButton = styled.button<{ $active?: boolean }>`
  border: 0;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  color: ${({ $active }) => ($active ? '#08101f' : 'rgba(255, 255, 255, 0.82)')};
  background: ${({ $active }) =>
    $active ? 'linear-gradient(120deg, #ffd08a, #fff1cf)' : 'transparent'};
  box-shadow: ${({ $active }) => ($active ? '0 8px 20px rgba(255, 201, 125, 0.24)' : 'none')};
  font-weight: 700;
  cursor: pointer;
  transition:
    background var(--dur-mid) var(--ease-smooth),
    color var(--dur-mid) var(--ease-smooth),
    transform var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
  }
`;

const PricingCard = styled(motion.article)<{ $recommended?: boolean }>`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 17, 32, 0.78);
  padding: ${({ $recommended }) => ($recommended ? '24px' : '20px')};
  box-shadow: ${({ $recommended }) =>
    $recommended ? '0 22px 60px rgba(32, 78, 148, 0.36)' : '0 14px 34px rgba(5, 9, 18, 0.45)'};
  transform: ${({ $recommended }) => ($recommended ? 'translateY(-6px)' : 'none')};
  border-color: ${({ $recommended }) => ($recommended ? 'rgba(118, 182, 255, 0.68)' : 'rgba(255, 255, 255, 0.14)')};
  animation: ${({ $recommended }) => ($recommended ? pulseGlow : 'none')} 4.6s ease-in-out infinite;

  &:hover {
    transform: ${({ $recommended }) => ($recommended ? 'translateY(-9px)' : 'translateY(-5px)')};
    border-color: rgba(245, 195, 120, 0.58);
  }
`;

const Badge = styled.span`
  position: absolute;
  right: 16px;
  top: 14px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(118, 182, 255, 0.24), rgba(255, 206, 132, 0.24));
  border: 1px solid rgba(153, 201, 255, 0.45);
`;

const PriceEyebrow = styled.div`
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Price = styled.div`
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin: 10px 0 3px;
  color: #ffd28f;
`;

const PriceMeta = styled.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
`;

const OfferNote = styled.div`
  margin-top: 6px;
  color: rgba(255, 208, 138, 0.86);
  font-size: 13px;
  line-height: 1.35;
`;

const CardGroupTitle = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`;

const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  svg {
    color: #82beff;
    font-size: 13px;
  }
`;

const Outcome = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`;

const SubscriptionBox = styled.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(118, 182, 255, 0.2);
  background:
    linear-gradient(180deg, rgba(17, 27, 49, 0.82), rgba(10, 16, 31, 0.84)),
    radial-gradient(circle at top right, rgba(255, 206, 132, 0.12), transparent 42%);
`;

const SubscriptionLabel = styled.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`;

const SubscriptionName = styled.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 700;
`;

const SubscriptionPrice = styled.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  color: #8fc5ff;
`;

const SubscriptionMeta = styled.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
`;

const CompareWrap = styled.div`
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  background: rgba(11, 17, 32, 0.7);
`;

const CompareHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 16px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
`;

const CompareRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 14px 16px;
  gap: 8px;
  align-items: center;
  transition: background var(--dur-mid) var(--ease-smooth);

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.03);
  }

  &:hover {
    background: rgba(77, 154, 255, 0.1);
  }

  span:last-child {
    background: rgba(255, 209, 137, 0.1);
    border-radius: 8px;
    padding: 4px 8px;
  }
`;

const CheckCell = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  svg {
    color: #8ec4ff;
  }
`;

const TrustGrid = styled.div`
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TrustBadge = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.78);
  padding: 18px;
  display: grid;
  gap: 8px;
  min-height: 132px;

  svg {
    font-size: 24px;
    color: #ffd08a;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
  }
`;

const FinalCta = styled.section`
  margin-top: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(circle at 15% 10%, rgba(74, 156, 255, 0.24), transparent 40%),
    radial-gradient(circle at 85% 12%, rgba(255, 194, 112, 0.22), transparent 44%),
    linear-gradient(140deg, rgba(8, 13, 27, 0.94), rgba(11, 18, 34, 0.9));
  padding: 36px 24px;
  text-align: center;
  box-shadow: 0 26px 70px rgba(3, 7, 15, 0.62);

  h2 {
    margin: 0;
    font-size: clamp(28px, 5.2vw, 42px);
  }

  p {
    margin: 12px auto 0;
    max-width: 64ch;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const FinalButton = styled(HeroButton)`
  margin-top: 20px;
  min-height: 58px;
  padding: 0 32px;
  font-size: 16px;
`;

// Цей React-компонент рендерить сторінку цін: hero, flow, пакети, порівняння,
// trust-блок і фінальний CTA. Тексти для pricing-секції беруться через i18n.
const PricingPage: React.FC = () => {
  // Функція t() приходить з react-i18next і повертає текст за ключем перекладу
  // з public/locales/{мова}/translation.json.
  const { t } = useTranslation();

  // Ця змінна зберігає активний режим відображення support abo:
  // місячний або річний. Логіку перемикача не змінюємо.
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  // Цей список визначає, які пакети показувати і в якому порядку.
  // Самі назви, ціни та списки features нижче беруться через i18n-ключі.
  const packageKeys = ['starter', 'business', 'pro'] as const;
  const aiMusicPackageKeys = ['basic', 'standard', 'premium'] as const;

  // Цей масив описує всі картки пакетів. Метод map() збирає дані для кожної
  // картки з перекладів, щоб не дублювати JSX окремо для Starter, Business і Pro.
  const packages = packageKeys.map(key => ({
    key,
    // Badge "Empfohlen" показується тільки для Business-пакета.
    recommended: key === 'business',
    name: t(`pricing.packages.${key}.name`),
    desc: t(`pricing.packages.${key}.desc`),
    price: t(`pricing.packages.${key}.price`),
    range: t(`pricing.packages.${key}.range`),
    core: t(`pricing.packages.${key}.core`, { returnObjects: true }) as string[],
    plus: t(`pricing.packages.${key}.plus`, { returnObjects: true }) as string[],
    outcome: t(`pricing.packages.${key}.outcome`),
    // Ці два рядки відповідають за текст support abo залежно від активного
    // режиму Monat/Jahr. Саму логіку перемикання не переписуємо.
    subscriptionPrice: t(`pricing.packages.${key}.subscription.${billingPeriod}.price`),
    subscriptionMeta: t(`pricing.packages.${key}.subscription.${billingPeriod}.meta`),
    subscriptionItems: t(`pricing.packages.${key}.subscription.includes`, { returnObjects: true }) as string[],
  }));

  const aiMusicPackages = aiMusicPackageKeys.map(key => ({
    key,
    recommended: key === 'standard',
    name: t(`pricing.aiMusic.packages.${key}.name`),
    desc: t(`pricing.aiMusic.packages.${key}.desc`),
    price: t(`pricing.aiMusic.packages.${key}.price`, {
      defaultValue: `EUR ${AI_MUSIC_PACKAGES[key].price}`,
    }),
    range: t(`pricing.aiMusic.packages.${key}.range`),
    includes: t(`pricing.aiMusic.packages.${key}.includes`, { returnObjects: true }) as string[],
    outcome: t(`pricing.aiMusic.packages.${key}.outcome`),
  }));

  return (
    <PricingPageRoot>
      <PageContainer>
        <PricingSurface>
          <Hero as={motion.section} initial='hidden' animate='show' variants={reveal} transition={{ duration: 0.64, ease: easeOut }}>
            <HeroText>
              <h1>
                {t('pricing.hero.titleLine1')}
                <br />
                {t('pricing.hero.titleLine2')}
                <br />
                <HeroAccent>{t('pricing.hero.titleLine3')}</HeroAccent>
              </h1>
              <p>{t('pricing.hero.subtitle')}</p>
              <HeroActions>
                <HeroButton to='/kontakt'>
                  <FaArrowRight /> {t('pricing.hero.cta')}
                </HeroButton>
              </HeroActions>
            </HeroText>

            <HeroVisual initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
              <DashboardMock>
                <VisualRow>
                  <strong>{t('pricing.hero.metrics.leadVolume')}</strong>
                  <BarWrap>
                    <Bar
                      initial={{ width: '22%' }}
                      animate={{ width: ['22%', '72%', '58%', '72%'] }}
                      transition={{ duration: 6, delay: 0.35, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </BarWrap>
                </VisualRow>
                <VisualRow>
                  <strong>{t('pricing.hero.metrics.qualifiedLeads')}</strong>
                  <BarWrap>
                    <Bar
                      initial={{ width: '18%' }}
                      animate={{ width: ['18%', '61%', '49%', '61%'] }}
                      transition={{ duration: 5.6, delay: 0.48, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </BarWrap>
                </VisualRow>
                <VisualRow>
                  <strong>{t('pricing.hero.metrics.costPerLead')}</strong>
                  <BarWrap>
                    <Bar
                      initial={{ width: '76%' }}
                      animate={{ width: ['76%', '42%', '54%', '42%'] }}
                      transition={{ duration: 6.2, delay: 0.62, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </BarWrap>
                </VisualRow>
                <FunnelLine initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
                  <Node animate={{ y: [0, -3, 0], boxShadow: ['0 0 0 rgba(80,150,255,0)', '0 0 16px rgba(80,150,255,0.2)', '0 0 0 rgba(80,150,255,0)'] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}><FaGlobe />{t('pricing.hero.funnel.traffic')}</Node>
                  <Node animate={{ y: [0, -3, 0], boxShadow: ['0 0 0 rgba(80,150,255,0)', '0 0 16px rgba(80,150,255,0.2)', '0 0 0 rgba(80,150,255,0)'] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}><FaLayerGroup />{t('pricing.hero.funnel.landing')}</Node>
                  <Node animate={{ y: [0, -3, 0], boxShadow: ['0 0 0 rgba(80,150,255,0)', '0 0 16px rgba(80,150,255,0.2)', '0 0 0 rgba(80,150,255,0)'] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}><FaUsers />{t('pricing.hero.funnel.leads')}</Node>
                  <Node animate={{ y: [0, -3, 0], boxShadow: ['0 0 0 rgba(80,150,255,0)', '0 0 16px rgba(80,150,255,0.2)', '0 0 0 rgba(80,150,255,0)'] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.75 }}><FaDatabase />{t('pricing.hero.funnel.crm')}</Node>
                  <Node animate={{ y: [0, -3, 0], boxShadow: ['0 0 0 rgba(80,150,255,0)', '0 0 16px rgba(80,150,255,0.2)', '0 0 0 rgba(80,150,255,0)'] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}><FaChartLine />{t('pricing.hero.funnel.sales')}</Node>
                </FunnelLine>
              </DashboardMock>
            </HeroVisual>
          </Hero>

          <FlowSection>
            <h2>{t('pricing.flow.title')}</h2>
            <FlowCard>
              <FlowGrid>
                <FlowStep whileHover={{ y: -3 }}><FaGlobe />{t('pricing.flow.steps.traffic')}</FlowStep>
                <FlowStep whileHover={{ y: -3 }}><FaLayerGroup />{t('pricing.flow.steps.landing')}</FlowStep>
                <FlowStep whileHover={{ y: -3 }}><FaUsers />{t('pricing.flow.steps.capture')}</FlowStep>
                <FlowStep whileHover={{ y: -3 }}><FaDatabase />{t('pricing.flow.steps.crm')}</FlowStep>
                <FlowStep whileHover={{ y: -3 }}><FaChartLine />{t('pricing.flow.steps.sales')}</FlowStep>
              </FlowGrid>
            </FlowCard>
          </FlowSection>

          <Section>
            <h2>{t('pricing.packages.title')}</h2>
            <SectionSubtitle>{t('pricing.packages.subtitle')}</SectionSubtitle>
            <BillingToggle role='tablist' aria-label={t('pricing.packages.subscriptionTitle')}>
              <BillingButton
                type='button'
                $active={billingPeriod === 'monthly'}
                onClick={() => setBillingPeriod('monthly')}
              >
                {t('pricing.packages.billing.monthly')}
              </BillingButton>
              <BillingButton
                type='button'
                $active={billingPeriod === 'yearly'}
                onClick={() => setBillingPeriod('yearly')}
              >
                {t('pricing.packages.billing.yearly')}
              </BillingButton>
            </BillingToggle>
            <PricingGrid>
              {packages.map(pkg => (
                <PricingCard
                  key={pkg.key}
                  $recommended={pkg.recommended}
                  whileHover={{ y: pkg.recommended ? -6 : -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Цей badge показує рекомендацію для Business-пакета. */}
                  {pkg.recommended ? <Badge>{t('pricing.packages.badge')}</Badge> : null}
                  <h3>{pkg.name}</h3>
                  <p>{pkg.desc}</p>
                  {/* Цей блок відповідає за одноразову ціну створення сайту. */}
                  <PriceEyebrow>{t('pricing.packages.websiteCreationLabel')}</PriceEyebrow>
                  <Price>{pkg.price}</Price>
                  <PriceMeta>{pkg.range}</PriceMeta>
                  <OfferNote>{t('pricing.packages.introOfferNote')}</OfferNote>
                  <CardGroupTitle>{t('pricing.packages.coreTitle')}</CardGroupTitle>
                  <FeatureList>
                    {/* Цей map() рендерить список базових features пакета. */}
                    {pkg.core.map(item => (
                      <li key={item}><FaCheck /> {item}</li>
                    ))}
                  </FeatureList>
                  <CardGroupTitle>{t('pricing.packages.plusTitle')}</CardGroupTitle>
                  <FeatureList>
                    {/* Цей map() рендерить додаткові features без дублювання JSX. */}
                    {pkg.plus.map(item => (
                      <li key={item}><FaCheck /> {item}</li>
                    ))}
                  </FeatureList>
                  <SubscriptionBox>
                    <SubscriptionLabel>{t('pricing.packages.optionalSupportLabel')}</SubscriptionLabel>
                    <SubscriptionName>{t('pricing.packages.subscriptionTitle')}</SubscriptionName>
                    {/* Цей блок показує ціну support abo, яку перемикає Monat/Jahr. */}
                    <SubscriptionPrice>{pkg.subscriptionPrice}</SubscriptionPrice>
                    <SubscriptionMeta>{pkg.subscriptionMeta}</SubscriptionMeta>
                    <CardGroupTitle>{t('pricing.packages.subscriptionIncludesTitle')}</CardGroupTitle>
                    <FeatureList>
                      {/* Цей map() показує, що входить в optional support. */}
                      {pkg.subscriptionItems.map(item => (
                        <li key={item}><FaCheck /> {item}</li>
                      ))}
                    </FeatureList>
                  </SubscriptionBox>
                  <Outcome><strong>{t('pricing.packages.outcomeLabel')}</strong> {pkg.outcome}</Outcome>
                </PricingCard>
              ))}
            </PricingGrid>
          </Section>

          <Section>
            <h2>{t('pricing.aiMusic.title')}</h2>
            <SectionSubtitle>{t('pricing.aiMusic.subtitle')}</SectionSubtitle>
            <PricingGrid>
              {aiMusicPackages.map(pkg => (
                <PricingCard
                  key={pkg.key}
                  $recommended={pkg.recommended}
                  whileHover={{ y: pkg.recommended ? -6 : -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {pkg.recommended ? <Badge>{t('pricing.packages.badge')}</Badge> : null}
                  <h3>{pkg.name}</h3>
                  <p>{pkg.desc}</p>
                  <PriceEyebrow>{t('pricing.aiMusic.packageLabel')}</PriceEyebrow>
                  <Price>{pkg.price}</Price>
                  <PriceMeta>{pkg.range}</PriceMeta>
                  <CardGroupTitle>{t('pricing.packages.coreTitle')}</CardGroupTitle>
                  <FeatureList>
                    {pkg.includes.map(item => (
                      <li key={item}><FaCheck /> {item}</li>
                    ))}
                  </FeatureList>
                  <Outcome><strong>{t('pricing.packages.outcomeLabel')}</strong> {pkg.outcome}</Outcome>
                </PricingCard>
              ))}
            </PricingGrid>
          </Section>

          <Section>
            <h2>{t('pricing.comparison.title')}</h2>
            <CompareWrap>
              <CompareHead>
                <span>{t('pricing.comparison.headers.feature')}</span>
                <span>{t('pricing.comparison.headers.starter')}</span>
                <span>{t('pricing.comparison.headers.business')}</span>
                <span>{t('pricing.comparison.headers.pro')}</span>
              </CompareHead>
              <CompareRow>
                <span>{t('pricing.comparison.rows.landing')}</span>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
              </CompareRow>
              <CompareRow>
                <span>{t('pricing.comparison.rows.multi')}</span>
                <span>{t('pricing.comparison.no')}</span>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
              </CompareRow>
              <CompareRow>
                <span>{t('pricing.comparison.rows.crm')}</span>
                <span>{t('pricing.comparison.no')}</span>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
              </CompareRow>
              <CompareRow>
                <span>{t('pricing.comparison.rows.ai')}</span>
                <span>{t('pricing.comparison.no')}</span>
                <span>{t('pricing.comparison.no')}</span>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
              </CompareRow>
              <CompareRow>
                <span>{t('pricing.comparison.rows.ads')}</span>
                <span>{t('pricing.comparison.no')}</span>
                <span>{t('pricing.comparison.no')}</span>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
              </CompareRow>
              <CompareRow>
                <span>{t('pricing.comparison.rows.dashboard')}</span>
                <span>{t('pricing.comparison.no')}</span>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
                <CheckCell><FaCheck /> {t('pricing.comparison.yes')}</CheckCell>
              </CompareRow>
            </CompareWrap>
          </Section>

          <Section>
            <h2>{t('pricing.trust.title')}</h2>
            <TrustGrid>
              <TrustBadge>
                <FaClock />
                <strong>{t('pricing.trust.delivery.title')}</strong>
                <p>{t('pricing.trust.delivery.desc')}</p>
              </TrustBadge>
              <TrustBadge>
                <FaTools />
                <strong>{t('pricing.trust.support.title')}</strong>
                <p>{t('pricing.trust.support.desc')}</p>
              </TrustBadge>
              <TrustBadge>
                <FaShieldAlt />
                <strong>{t('pricing.trust.dsgvo.title')}</strong>
                <p>{t('pricing.trust.dsgvo.desc')}</p>
              </TrustBadge>
            </TrustGrid>
          </Section>

          <FinalCta>
            <h2>{t('pricing.final.title')}</h2>
            <p>{t('pricing.final.subtitle')}</p>
            <FinalButton to='/kontakt'>
              <FaArrowRight /> {t('pricing.final.cta')}
            </FinalButton>
          </FinalCta>
        </PricingSurface>
      </PageContainer>
    </PricingPageRoot>
  );
};

export default PricingPage;

