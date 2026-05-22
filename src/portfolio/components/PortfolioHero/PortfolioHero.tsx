import { FaArrowRight, FaEnvelope, FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../../data/contactInfo';
import { floatingCodeFragments } from '../../data/portfolioData';
import { portfolioMedia } from '../../data/portfolioMedia';
import { systemAwakening } from '../../utils/portfolioAnimations';
import { PortfolioMediaFrame } from '../PortfolioMediaFrame/PortfolioMediaFrame';
import {
  ActionGroup,
  CodeFragment,
  HeroBadge,
  HeroCopy,
  HeroMeta,
  HeroScene,
  HeroTitle,
  HeroWrapper,
  MangaPanel,
  Notification,
  PrimaryButton,
  SecondaryButton,
  Subtitle,
} from './PortfolioHero.styled';

// PortfolioHero рендерить першу fullscreen-сцену з portal, hero silhouette і CTA.
export const PortfolioHero: React.FC = () => {
  // t підтягує всі hero-тексти з i18next.
  const { t } = useTranslation();

  return (
    <HeroWrapper id='portfolio-top' aria-labelledby='portfolio-title'>
      <HeroCopy variants={systemAwakening} initial='hidden' animate='visible'>
        <Notification>{t('portfolio.hero.systemAwakened')}</Notification>
        <HeroBadge>{t('portfolio.profile.role')}</HeroBadge>
        <HeroTitle id='portfolio-title'>{t('portfolio.hero.title')}</HeroTitle>
        <Subtitle>{t('portfolio.hero.subtitle')}</Subtitle>
        <HeroMeta>
          <span>
            <FaMapMarkerAlt aria-hidden='true' /> {t('portfolio.profile.location')}
          </span>
          <span>{t('portfolio.profile.languages')}</span>
        </HeroMeta>
        <ActionGroup>
          <PrimaryButton href='#portfolio-projects'>
            {t('portfolio.hero.buttons.projects')} <FaArrowRight aria-hidden='true' />
          </PrimaryButton>
          <SecondaryButton href={contactInfo.emailHref}>
            <FaEnvelope aria-hidden='true' /> {t('portfolio.hero.buttons.contact')}
          </SecondaryButton>
          <SecondaryButton href={contactInfo.websiteUrl} target='_blank' rel='noopener noreferrer'>
            {t('portfolio.hero.buttons.studio')} <FaExternalLinkAlt aria-hidden='true' />
          </SecondaryButton>
        </ActionGroup>
      </HeroCopy>

      <MangaPanel variants={systemAwakening} initial='hidden' animate='visible'>
        <HeroScene>
          <PortfolioMediaFrame type={portfolioMedia.hero.type} src={portfolioMedia.hero.src} alt={t(portfolioMedia.hero.altKey)} />
          {floatingCodeFragments.map(fragment => (
            <CodeFragment key={fragment.labelKey} $x={fragment.x} $y={fragment.y}>
              {t(fragment.labelKey)}
            </CodeFragment>
          ))}
        </HeroScene>
      </MangaPanel>
    </HeroWrapper>
  );
};
