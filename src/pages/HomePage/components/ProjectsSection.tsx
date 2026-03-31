import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import { featuredProjects, githubProfileUrl } from '../../../data/featuredProjects';
import ProjectPreview from './ProjectPreview';
import { ProjectsSectionScope } from './styles/ProjectsSection.styles';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ProjectsSectionScope>
      <motion.section
        className='section projects-section'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className='projects-shell'>
          <div className='section-header projects-header'>
            <span className='section-kicker'>{t('home.projects.eyebrow')}</span>
            <h2>{t('home.projects.title')}</h2>
            <p className='section-description'>{t('home.projects.desc')}</p>
          </div>

          <motion.div className='projects-grid' variants={staggerContainer}>
            {featuredProjects.map(project => {
              const title = t(`${project.translationKey}.title`);
              const description = t(`${project.translationKey}.description`);
              const benefit = t(`${project.translationKey}.benefit`);

              return (
                <motion.article className='card project-card' key={project.id} variants={scaleIn}>
                  <ProjectPreview image={project.image} title={title} />

                  <div className='project-copy'>
                    <div className='project-heading'>
                      <h3>{title}</h3>
                      <p className='project-description'>{description}</p>
                    </div>

                    <div className='project-benefit'>
                      <strong>{t('home.projects.benefitLabel')}</strong>
                      <p>{benefit}</p>
                    </div>

                    <div className='project-tags'>
                      {project.tags.map(tag => (
                        <span key={`${project.id}-${tag}`}>{t(`home.projects.tags.${tag}`)}</span>
                      ))}
                    </div>
                  </div>

                  <div className='project-actions'>
                    <a
                      href={project.liveUrl ?? '#'}
                      className='btn btn-primary'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {t('home.projects.cta.livePreview')}
                    </a>

                    <a
                      href={project.repoUrl}
                      className='btn btn-secondary'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {t('home.projects.cta.github')}
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <div className='projects-footer'>
            <a
              href={githubProfileUrl}
              className='btn btn-secondary projects-footer-cta'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('home.projects.cta.moreOnGithub')}
            </a>
          </div>
        </div>
      </motion.section>
    </ProjectsSectionScope>
  );
};

export default ProjectsSection;
