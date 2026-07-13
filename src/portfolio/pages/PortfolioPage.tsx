import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCursorSpotlight } from '../../hooks/useCursorSpotlight';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { AnimeBackground } from '../components/AnimeBackground/AnimeBackground';
import { ContactPortal } from '../components/ContactPortal/ContactPortal';
import { HunterProfile } from '../components/HunterProfile/HunterProfile';
import { NetworkGuild } from '../components/NetworkGuild/NetworkGuild';
import { PortfolioFooter } from '../components/PortfolioFooter/PortfolioFooter';
import { PortfolioHeader } from '../components/PortfolioHeader/PortfolioHeader';
import { PortfolioHero } from '../components/PortfolioHero/PortfolioHero';
import { ProjectDungeon } from '../components/ProjectDungeon/ProjectDungeon';
import { QuestTimeline } from '../components/QuestTimeline/QuestTimeline';
import { ScrollChapter } from '../components/ScrollChapter/ScrollChapter';
import { ScrollExperience } from '../components/ScrollExperience/ScrollExperience';
import { SkillTree } from '../components/SkillTree/SkillTree';
import {
  AmbientSpotlight,
  ContentFrame,
  MotionModeButton,
  PortfolioGlobalStyle,
  PortfolioPageWrapper,
  SkipLink,
} from './PortfolioPage.styled';

// PortfolioPage збирає всі fullscreen-сцени portfolio в ізольованому середовищі.
export const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const systemPrefersReducedMotion = usePrefersReducedMotion();
  const [fullMotion, setFullMotion] = useState(true);
  const reducedMotion = !fullMotion;
  useCursorSpotlight(reducedMotion);

  useEffect(() => {
    const savedMotion = window.localStorage.getItem('portfolio-motion');
    if (savedMotion === 'reduced') setFullMotion(false);
    if (savedMotion === 'full') setFullMotion(true);
  }, [systemPrefersReducedMotion]);

  const toggleMotion = () => {
    setFullMotion(current => {
      const next = !current;
      window.localStorage.setItem('portfolio-motion', next ? 'full' : 'reduced');
      return next;
    });
  };

  useEffect(() => {
    // Ефект оновлює title, скидає scroll і вмикає scoped-стилі для прихованого scrollbar.
    document.title = t('portfolio.meta.title');
    document.documentElement.classList.add('portfolio-page-active');
    document.body.classList.add('portfolio-page-active');
    window.scrollTo({ top: 0, behavior: 'auto' });

    return () => {
      // Cleanup прибирає portfolio-клас, щоб основний сайт залишався без цих глобальних стилів.
      document.documentElement.classList.remove('portfolio-page-active');
      document.body.classList.remove('portfolio-page-active');
    };
  }, [t]);

  return (
    <PortfolioPageWrapper>
      <PortfolioGlobalStyle />
      <SkipLink href='#portfolio-top'>{t('portfolio.skipLink')}</SkipLink>
      <AnimeBackground />
      <ScrollExperience reducedMotion={reducedMotion} />
      <AmbientSpotlight aria-hidden='true' />
      <MotionModeButton
        type='button'
        $active={fullMotion}
        aria-pressed={fullMotion}
        aria-label={fullMotion ? 'Disable full portfolio motion' : 'Enable full portfolio motion'}
        title={systemPrefersReducedMotion ? 'System reduced motion detected — click to change' : 'Toggle motion effects'}
        onClick={toggleMotion}
      >
        <span aria-hidden='true' />
        FX {fullMotion ? 'FULL' : 'CALM'}
      </MotionModeButton>
      <PortfolioHeader />
      <ContentFrame>
        <PortfolioHero />
        <ScrollChapter index={2} mode='depth' reducedMotion={reducedMotion}>
          <HunterProfile />
        </ScrollChapter>
        <ScrollChapter index={3} mode='wipe' reducedMotion={reducedMotion}>
          <SkillTree />
        </ScrollChapter>
        <ScrollChapter index={4} mode='deck' reducedMotion={reducedMotion}>
          <ProjectDungeon />
        </ScrollChapter>
        <ScrollChapter index={5} mode='diagonal' reducedMotion={reducedMotion}>
          <QuestTimeline />
        </ScrollChapter>
        <ScrollChapter index={6} mode='orbit' reducedMotion={reducedMotion}>
          <NetworkGuild />
        </ScrollChapter>
        <ScrollChapter index={7} mode='portal' reducedMotion={reducedMotion}>
          <ContactPortal />
        </ScrollChapter>
      </ContentFrame>
      <PortfolioFooter />
    </PortfolioPageWrapper>
  );
};

export default PortfolioPage;
