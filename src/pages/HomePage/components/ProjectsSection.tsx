import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HoverVideoPreview from './HoverVideoPreview';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import { projectCards } from './homePageData';
import { ProjectsSectionScope } from './styles/ProjectsSection.styles';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ProjectsSectionScope>
      <motion.section
        className='section'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className='section-header'>
          <h2>{t('home.projects.title', { defaultValue: 'Projekte / Case Studies' })}</h2>
          <p className='section-description'>
            {t('home.projects.desc', { defaultValue: 'Reale Aufgaben und erwartbare Ergebnisse ohne leere Versprechen. Hover auf einen Case für Live-Preview.' })}
          </p>
        </div>
        <motion.div className='grid-2 projects-grid' variants={staggerContainer}>
          {projectCards.map((project, index) => (
            <motion.article className='card project-card' key={project.id} variants={scaleIn}>
              {(() => {
                const titleFallbacks: Record<string, string> = {
                  c1: 'Website für lokale Anfragen',
                  c2: 'Landingpage für Ads',
                  c3: 'Website für Praxis',
                  c4: 'Dashboard für Leads',
                };
                const descriptionFallbacks: Record<string, string> = {
                  c1: 'Landingpage mit Fokus auf Formular, Anruf und schnellen Mobile-Kontakt.',
                  c2: 'Separate Seite mit Tracking für Meta- und Google-Kampagnen.',
                  c3: 'Klare Leistungsstruktur, FAQ und Online-Termin-Flow.',
                  c4: 'Internes Interface zur Lead-Bearbeitung und Statuskontrolle.',
                };
                const goalFallbacks: Record<string, string> = {
                  c1: 'Ziel: mehr Anfragen ohne Budgeterhöhung',
                  c2: 'Erwarteter Effekt: qualifiziertere Leads aus Werbung',
                  c3: 'Ziel: mehr Terminbuchungen mit weniger Rückfragen',
                  c4: 'Erwarteter Effekt: schnellere Bearbeitung von Anfragen',
                };
                const title = t(`home.projects.cards.${project.id}.title`, {
                  defaultValue: titleFallbacks[project.id] || project.id,
                });
                const description = t(`home.projects.cards.${project.id}.description`, {
                  defaultValue: descriptionFallbacks[project.id] || '',
                });
                const goal = t(`home.projects.cards.${project.id}.goal`, {
                  defaultValue: goalFallbacks[project.id] || '',
                });

                return (
                  <>
                    <HoverVideoPreview poster={project.poster} video={project.video} title={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className='project-tags'>
                      {project.tags.map(tag => (
                        <span key={`${tag}-${index}`}>{tag}</span>
                      ))}
                    </div>
                    <p className='muted'>{goal}</p>
                  </>
                );
              })()}
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </ProjectsSectionScope>
  );
};

export default ProjectsSection;
