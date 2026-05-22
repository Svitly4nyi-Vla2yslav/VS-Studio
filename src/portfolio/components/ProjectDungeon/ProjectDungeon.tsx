import { FaCoins, FaExternalLinkAlt, FaLockOpen } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { projectDungeons } from '../../data/portfolioData';
import { portfolioMedia } from '../../data/portfolioMedia';
import { portfolioViewport, revealCard, staggerContainer } from '../../utils/portfolioAnimations';
import { PortfolioImageAura } from '../PortfolioImageAura/PortfolioImageAura';
import {
  DifficultyBadge,
  DungeonCard,
  DungeonGrid,
  DungeonHeader,
  DungeonLink,
  ProjectMediaSlot,
  ProjectDungeonShell,
  ProjectTags,
  RewardLine,
  SectionIntro,
  SectionLabel,
  SectionTitle,
  TypeBadge,
} from './ProjectDungeon.styled';

// ProjectDungeon показує проєкти як dungeon mission cards.
export const ProjectDungeon: React.FC = () => {
  // t перекладає назви, типи, описи й business value.
  const { t } = useTranslation();

  return (
    <ProjectDungeonShell
      id='portfolio-projects'
      aria-labelledby='portfolio-projects-title'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={portfolioViewport}
    >
      <ProjectMediaSlot variants={revealCard} data-portfolio-media='projects'>
        <PortfolioImageAura src={portfolioMedia.projects.src} alt={portfolioMedia.projects.alt} />
      </ProjectMediaSlot>

      <DungeonHeader variants={revealCard}>
        <SectionLabel>{t('portfolio.projects.eyebrow')}</SectionLabel>
        <SectionTitle id='portfolio-projects-title'>{t('portfolio.projects.title')}</SectionTitle>
        <SectionIntro>{t('portfolio.projects.description')}</SectionIntro>
      </DungeonHeader>

      <DungeonGrid>
        {projectDungeons.map(project => (
          <DungeonCard key={project.id} variants={revealCard}>
            <DifficultyBadge>{t('portfolio.projects.difficulty')} {project.difficulty}</DifficultyBadge>
            <TypeBadge>{t(project.typeKey)}</TypeBadge>
            <h3>{t(project.titleKey)}</h3>
            <p>{t(project.descriptionKey)}</p>
            <RewardLine>
              <FaCoins aria-hidden='true' />
              <span>{t(project.rewardKey)}</span>
            </RewardLine>
            <ProjectTags>
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </ProjectTags>
            {project.link ? (
              <DungeonLink href={project.link} target='_blank' rel='noopener noreferrer' aria-label={`${t('portfolio.projects.open')} ${t(project.titleKey)}`}>
                {t('portfolio.projects.open')} <FaExternalLinkAlt aria-hidden='true' />
              </DungeonLink>
            ) : (
              <DungeonLink as='span'>
                {t('portfolio.projects.concept')} <FaLockOpen aria-hidden='true' />
              </DungeonLink>
            )}
          </DungeonCard>
        ))}
      </DungeonGrid>
    </ProjectDungeonShell>
  );
};
