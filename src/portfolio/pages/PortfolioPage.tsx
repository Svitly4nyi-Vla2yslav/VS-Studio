import { useEffect } from 'react';
import { AnimeBackground } from '../components/AnimeBackground/AnimeBackground';
import { ContactPortal } from '../components/ContactPortal/ContactPortal';
import { HunterProfile } from '../components/HunterProfile/HunterProfile';
import { NetworkGuild } from '../components/NetworkGuild/NetworkGuild';
import { PortfolioFooter } from '../components/PortfolioFooter/PortfolioFooter';
import { PortfolioHeader } from '../components/PortfolioHeader/PortfolioHeader';
import { PortfolioHero } from '../components/PortfolioHero/PortfolioHero';
import { ProjectDungeon } from '../components/ProjectDungeon/ProjectDungeon';
import { QuestTimeline } from '../components/QuestTimeline/QuestTimeline';
import { SkillTree } from '../components/SkillTree/SkillTree';
import { ContentFrame, PortfolioGlobalStyle, PortfolioPageWrapper, SkipLink } from './PortfolioPage.styled';

// PortfolioPage збирає всі fullscreen-сцени portfolio в ізольованому середовищі.
export const PortfolioPage: React.FC = () => {
  useEffect(() => {
    // Ефект оновлює title, скидає scroll і вмикає scoped-стилі для прихованого scrollbar.
    document.title = 'Vladyslav Svitlychnyi | Portfolio';
    document.documentElement.classList.add('portfolio-page-active');
    document.body.classList.add('portfolio-page-active');
    window.scrollTo({ top: 0, behavior: 'auto' });

    return () => {
      // Cleanup прибирає portfolio-клас, щоб основний сайт залишався без цих глобальних стилів.
      document.documentElement.classList.remove('portfolio-page-active');
      document.body.classList.remove('portfolio-page-active');
    };
  }, []);

  return (
    <PortfolioPageWrapper>
      <PortfolioGlobalStyle />
      <SkipLink href='#portfolio-top'>Skip to portfolio content</SkipLink>
      <AnimeBackground />
      <PortfolioHeader />
      <ContentFrame>
        <PortfolioHero />
        <HunterProfile />
        <SkillTree />
        <ProjectDungeon />
        <QuestTimeline />
        <NetworkGuild />
        <ContactPortal />
      </ContentFrame>
      <PortfolioFooter />
    </PortfolioPageWrapper>
  );
};

export default PortfolioPage;
