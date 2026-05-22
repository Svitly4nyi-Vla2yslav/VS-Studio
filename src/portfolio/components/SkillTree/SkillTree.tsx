import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skillCategories } from '../../data/portfolioData';
import { portfolioMedia } from '../../data/portfolioMedia';
import { portfolioViewport, revealCard, staggerContainer, xpFill } from '../../utils/portfolioAnimations';
import { PortfolioMediaFrame } from '../PortfolioMediaFrame/PortfolioMediaFrame';
import {
  AbilityCard,
  AbilityHeader,
  AbilityIcon,
  AbilityList,
  BranchLine,
  RankBadge,
  SectionIntro,
  SectionLabel,
  SectionTitle,
  SkillMediaSlot,
  SkillBar,
  SkillFill,
  SkillGrid,
  SkillItem,
  SkillTreeShell,
} from './SkillTree.styled';

// SkillTree рендерить ability paths і animated XP bars.
export const SkillTree: React.FC = () => {
  // t перекладає назви гілок і описи.
  const { t } = useTranslation();

  return (
    <SkillTreeShell
      id='portfolio-skills'
      aria-labelledby='portfolio-skills-title'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={portfolioViewport}
    >
     
<div>
      <motion.div variants={revealCard}>
        <SectionLabel>{t('portfolio.skills.eyebrow')}</SectionLabel>
        <SectionTitle id='portfolio-skills-title'>{t('portfolio.skills.title')}</SectionTitle>
        <SectionIntro>{t('portfolio.skills.description')}</SectionIntro>
      </motion.div>

      <SkillGrid>
        {skillCategories.map(category => {
          // Icon є react-icons компонентом для конкретної ability branch.
          const Icon = category.icon;
          return (
            <AbilityCard key={category.id} variants={revealCard}>
              <BranchLine aria-hidden='true' />
              <AbilityHeader>
                <AbilityIcon>
                  <Icon aria-hidden='true' />
                </AbilityIcon>
                <div>
                  <h3>{t(category.titleKey)}</h3>
                  <p>{t(category.descriptionKey)}</p>
                </div>
                <RankBadge>{category.rank}</RankBadge>
              </AbilityHeader>

              <AbilityList>
                {category.skills.slice(0, 4).map(skill => (
                  <SkillItem key={skill.labelKey}>
                    <span>{t(skill.labelKey)}</span>
                    <strong>{skill.level}%</strong>
                    <SkillBar>
                      <SkillFill
                        as={motion.span}
                        $level={skill.level}
                        variants={xpFill}
                        style={{ transformOrigin: 'left center' }}
                      />
                    </SkillBar>
                  </SkillItem>
                ))}
              </AbilityList>
            </AbilityCard>
          );
        })}
      </SkillGrid> </div>
       <SkillMediaSlot variants={revealCard} data-portfolio-media='skills'>
        <PortfolioMediaFrame type={portfolioMedia.skills.type} src={portfolioMedia.skills.src} alt={t(portfolioMedia.skills.altKey)} />
      </SkillMediaSlot>
    </SkillTreeShell>
  );
};
