import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { systemAttributes, xpFocusItems } from '../../data/portfolioData';
import { portfolioMedia } from '../../data/portfolioMedia';
import { portfolioViewport, revealCard, staggerContainer, xpFill } from '../../utils/portfolioAnimations';
import { PortfolioImageAura } from '../PortfolioImageAura/PortfolioImageAura';
import {
  AttributeGrid,
  AttributeItem,
  ProfileContainer,
  ProfileCopy,
  ProfileMediaSlot,
  ProfileShell,
  ScanLine,
  SectionIntro,
  SectionLabel,
  SectionTitle,
  XpBar,
  XpFill,
  XpGrid,
  XpItem,
} from './HunterProfile.styled';

// HunterProfile показує current profile як system window з XP-фокусами.
export const HunterProfile: React.FC = () => {
  // t бере labels/status texts з portfolio translations.
  const { t } = useTranslation();

  return (
    <ProfileShell
      id='portfolio-profile'
      aria-labelledby='portfolio-profile-title'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={portfolioViewport}
    >
      <ScanLine aria-hidden='true' />
      <ProfileContainer>
        <ProfileMediaSlot variants={revealCard} data-portfolio-media='profile'>
          <PortfolioImageAura src={portfolioMedia.profile.src} alt={portfolioMedia.profile.alt} />
        </ProfileMediaSlot>

        <ProfileCopy variants={revealCard}>
          <SectionLabel>{t('portfolio.system.eyebrow')}</SectionLabel>
          <SectionTitle id='portfolio-profile-title'>{t('portfolio.system.title')}</SectionTitle>
          <SectionIntro>{t('portfolio.positioning')}</SectionIntro>
        </ProfileCopy>

        <AttributeGrid>
          {systemAttributes.map(attribute => (
            <AttributeItem key={attribute.labelKey} variants={revealCard}>
              <span>{t(attribute.labelKey)}</span>
              <strong>{t(attribute.valueKey)}</strong>
            </AttributeItem>
          ))}
        </AttributeGrid>

        <XpGrid aria-label={t('portfolio.system.xpFocus')}>
          {xpFocusItems.map(item => (
            <XpItem key={item.label} variants={revealCard}>
              <span>{item.label}</span>
              <strong>{item.level}%</strong>
              <XpBar>
                <XpFill
                  as={motion.span}
                  $level={item.level}
                  variants={xpFill}
                  style={{ transformOrigin: 'left center' }}
                />
              </XpBar>
            </XpItem>
          ))}
        </XpGrid>
      </ProfileContainer>
    </ProfileShell>
  );
};
