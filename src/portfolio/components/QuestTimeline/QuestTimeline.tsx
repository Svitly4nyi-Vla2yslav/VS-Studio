import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { questTimeline } from '../../data/portfolioData';
import { portfolioMedia } from '../../data/portfolioMedia';
import { portfolioViewport, revealCard, staggerContainer } from '../../utils/portfolioAnimations';
import { PortfolioMediaFrame } from '../PortfolioMediaFrame/PortfolioMediaFrame';
import {
  Checkpoint,
  CheckpointDot,
  QuestLine,
  QuestList,
  QuestTimelineShell,
  SectionIntro,
  SectionLabel,
  SectionTitle,
  StatusBadge,
  TimelineMediaSlot,
} from './QuestTimeline.styled';

// QuestTimeline рендерить vertical progress map із checkpoint nodes.
export const QuestTimeline: React.FC = () => {
  // t підтягує title/description/status кожного checkpoint.
  const { t } = useTranslation();

  return (
    <QuestTimelineShell
      id='portfolio-timeline'
      aria-labelledby='portfolio-timeline-title'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={portfolioViewport}
    >
      <TimelineMediaSlot variants={revealCard} data-portfolio-media='timeline'>
        <PortfolioMediaFrame type={portfolioMedia.timeline.type} src={portfolioMedia.timeline.src} alt={t(portfolioMedia.timeline.altKey)} />
      </TimelineMediaSlot>
      <div>
        <div>
          <SectionLabel>{t('portfolio.timeline.eyebrow')}</SectionLabel>
          <SectionTitle id='portfolio-timeline-title'>{t('portfolio.timeline.title')}</SectionTitle>
          <SectionIntro>{t('portfolio.timeline.description')}</SectionIntro>
        </div>

        <QuestList>
          <QuestLine aria-hidden='true' />
          {questTimeline.map((quest, index) => (
            <Checkpoint key={quest.id} variants={revealCard}>
              <CheckpointDot>
                <FaMapMarkerAlt aria-hidden='true' />
              </CheckpointDot>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{t(quest.titleKey)}</h3>
                <p>{t(quest.descriptionKey)}</p>
              </div>
              <StatusBadge>{t(quest.statusKey)}</StatusBadge>
            </Checkpoint>
          ))}
        </QuestList></div>
    </QuestTimelineShell>
  );
};
