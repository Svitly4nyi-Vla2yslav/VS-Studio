import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCheck, FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fadeInUp, scaleIn, staggerContainer } from '../../components/Motion/reveal';
import { featuredProjects, githubProfileUrl } from '../../data/featuredProjects';
import { PortfolioPageWrapper } from './PortfolioPage.styled';

const viewport = { once: true, amount: 0.18 } as const;
const steps = [
  ['01', 'Verstehen', 'Zielgruppe, Angebot und wichtigste Nutzerfrage werden zuerst geklärt.'],
  ['02', 'Strukturieren', 'Inhalte und Aktionen werden so priorisiert, dass Besucher schnell entscheiden können.'],
  ['03', 'Gestalten', 'Ein eigenständiges, responsives Interface schafft Vertrauen und bleibt leicht bedienbar.'],
  ['04', 'Verbessern', 'Performance, SEO-Basis und Conversion-Wege werden vor dem Launch geprüft.'],
] as const;

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PortfolioPageWrapper>
      <section className='portfolio-hero' aria-labelledby='portfolio-title'>
        <motion.div className='hero-orb orb-one' aria-hidden='true' animate={{ y: [0, -22, 0], scale: [1, 1.06, 1] }} transition={{ duration: 9, repeat: Infinity }} />
        <motion.div className='hero-orb orb-two' aria-hidden='true' animate={{ y: [0, 18, 0], x: [0, -12, 0] }} transition={{ duration: 11, repeat: Infinity }} />
        <motion.div className='hero-content' initial='hidden' animate='visible' variants={staggerContainer}>
          <motion.span className='eyebrow' variants={fadeInUp}>VS Web Studio · Portfolio</motion.span>
          <motion.h1 id='portfolio-title' className='gold-title' variants={fadeInUp}>Websites, die nicht nur gut aussehen — sondern Orientierung geben.</motion.h1>
          <motion.p className='hero-lead' variants={fadeInUp}>Ausgewählte Website-Beispiele und Konzepte für lokale Unternehmen. Jedes Projekt zeigt, für wen es gedacht ist, welches Problem es löst und wie Design zu einem klaren nächsten Schritt führt.</motion.p>
          <motion.div className='hero-actions' variants={fadeInUp}>
            <a className='primary-action' href='#projekte'>Projekte entdecken <FaArrowRight /></a>
            <Link className='secondary-action' to='/kontakt'>Projekt besprechen</Link>
          </motion.div>
          <motion.ul className='hero-proof' variants={fadeInUp} aria-label='Portfolio Schwerpunkte'>
            <li><FaCheck /> Responsive Webdesign</li><li><FaCheck /> Klare Nutzerführung</li><li><FaCheck /> Fokus auf Anfragen</li>
          </motion.ul>
        </motion.div>
      </section>

      <motion.section id='projekte' className='projects-section' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp} aria-labelledby='projects-title'>
        <div className='section-heading'><span className='eyebrow'>{t('home.projects.eyebrow', { defaultValue: 'Ausgewählte Arbeiten' })}</span><h2 id='projects-title' className='gold-title'>Websites mit einem klaren Zweck</h2><p>Keine anonymen Mockups: Die Vorschauen zeigen echte, responsive Projekte. Live-Demo und Quellcode sind direkt erreichbar.</p></div>
        <motion.div className='project-grid' variants={staggerContainer}>
          {featuredProjects.map((project, index) => {
            const title = t(`${project.translationKey}.title`);
            return (
              <motion.article className='project-card' key={project.id} variants={scaleIn}>
                <div className='project-visual'>
                  <img src={project.image} alt={`Screenshot des Projekts ${title}`} loading={index === 0 ? 'eager' : 'lazy'} decoding='async' />
                  <div className='browser-chrome' aria-hidden='true'><i /><i /><i /><small>{project.liveUrl?.replace(/^https?:\/\//, '').replace(/\/$/, '') ?? 'Konzept'}</small></div>
                  <div className='visual-shine' aria-hidden='true' />
                </div>
                <div className='project-content'>
                  <div className='project-number'>0{index + 1}</div>
                  <span className='project-type'>{index === 0 ? 'Handwerk & lokale Services' : index === 1 ? 'Automotive & Werkstatt' : 'Beauty & Terminbuchung'}</span>
                  <h3>{title}</h3>
                  <p className='project-description'>{t(`${project.translationKey}.description`)}</p>
                  <div className='project-value'><strong>Wofür und für wen?</strong><p>{t(`${project.translationKey}.benefit`)}</p></div>
                  <div className='project-tags'>{project.tags.map(tag => <span key={tag}>{t(`home.projects.tags.${tag}`)}</span>)}</div>
                  <div className='project-actions'>
                    {project.liveUrl ? <a className='project-link live' href={project.liveUrl} target='_blank' rel='noopener noreferrer'>Live ansehen <FaExternalLinkAlt /></a> : <span className='project-link disabled'>Live nicht verfügbar</span>}
                    <a className='project-link code' href={project.repoUrl} target='_blank' rel='noopener noreferrer'><FaCode /> Code ansehen</a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
        <a className='github-link' href={githubProfileUrl} target='_blank' rel='noopener noreferrer'><FaGithub /> Weitere Projekte auf GitHub <FaArrowRight /></a>
      </motion.section>

      <motion.section className='method-section' initial='hidden' whileInView='visible' viewport={viewport} variants={staggerContainer} aria-labelledby='method-title'>
        <motion.div className='section-heading' variants={fadeInUp}><span className='eyebrow'>Vom Problem zur Lösung</span><h2 id='method-title' className='gold-title'>Was hinter jedem Projekt steckt</h2></motion.div>
        <div className='method-grid'>{steps.map(item => <motion.article key={item[0]} className='method-card' variants={scaleIn}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></motion.article>)}</div>
      </motion.section>

      <motion.section className='portfolio-cta' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp}>
        <span className='eyebrow'>Ihr nächstes Projekt</span><h2 className='gold-title'>Eine Website, die zu Ihrem Unternehmen passt.</h2><p>Erzählen Sie kurz, was Sie anbieten und wen Sie erreichen möchten. Gemeinsam finden wir den sinnvollsten nächsten Schritt.</p><Link className='primary-action' to='/kontakt'>Kostenloses Erstgespräch <FaArrowRight /></Link>
      </motion.section>
    </PortfolioPageWrapper>
  );
};

export default PortfolioPage;

