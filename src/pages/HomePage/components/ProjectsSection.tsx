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
          <h2>{t('home.projects.title')}</h2>
          <p className='section-description'>{t('home.projects.desc')}</p>
        </div>
        <motion.div className='grid-2 projects-grid' variants={staggerContainer}>
          {projectCards.map((project, index) => (
            <motion.article className='card project-card' key={project.id} variants={scaleIn}>
              <HoverVideoPreview
                poster={project.poster}
                video={project.video}
                title={t(`home.projects.cards.${project.id}.title`)}
              />
              <h3>{t(`home.projects.cards.${project.id}.title`)}</h3>
              <p>{t(`home.projects.cards.${project.id}.description`)}</p>
              <div className='project-tags'>
                {project.tags.map(tag => (
                  <span key={`${tag}-${index}`}>{tag}</span>
                ))}
              </div>
              <p className='muted'>{t(`home.projects.cards.${project.id}.goal`)}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </ProjectsSectionScope>
  );
};

export default ProjectsSection;
