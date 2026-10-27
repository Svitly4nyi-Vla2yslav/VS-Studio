import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import workshop from '../../assets/proekt/Auto-Werkstatt.webp';
import handwerk from '../../assets/proekt/handwerk.webp';
import beauty from '../../assets/proekt/single-page_beauty_salon.webp';
import { fadeInUp, scaleIn, staggerContainer } from '../../components/Motion/reveal';
import { PortfolioPageWrapper } from './PortfolioPage.styled';

type Project = {
  key: string; title: string; image: string; tags: string[];
  live: string; code: string; tone: string;
};

const projects: Project[] = [
  { key:'handwerk', title:'Handwerk SHK', image:handwerk, tags:['Webdesign','Local SEO','Lead Flow'], live:'https://handwerken.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/handwerk', tone:'#dfa636' },
  { key:'workshop', title:'Auto Werkstatt', image:workshop, tags:['Automotive','Booking','Conversion'], live:'https://auto-werkstatt.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/Auto-Werkstatt', tone:'#e56d35' },
  { key:'beauty', title:'Lumina Atelier', image:beauty, tags:['Beauty','One Page','Trust'], live:'https://lumina-atelier-salon.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/single-page_beauty_salon', tone:'#d9a987' },
  { key:'studio', title:'VS Web Studio', image:'/images/vs-web-studio.de.png', tags:['React','i18n','AI Assistant'], live:'https://vs-web-studio.de/', code:'https://github.com/Svitly4nyi-Vla2yslav/VS-Studio', tone:'#d6a542' },
  { key:'sabsus', title:'SABSUS Commerce', image:'/images/sabsus.shop.png', tags:['Commerce','UX','Catalog'], live:'https://sabsus.shop/', code:'https://github.com/Svitly4nyi-Vla2yslav/sabsus-lending_page', tone:'#6e78ff' },
  { key:'airtexno', title:'AirTexno Service Hub', image:'/images/airtexno.com.png', tags:['Service UX','SEO','Forms'], live:'https://airtexno.com/', code:'https://github.com/Svitly4nyi-Vla2yslav/AirTexno', tone:'#45a8ff' },
  { key:'srm', title:'SRM SABSUS', image:'/images/portfolio-srm-sabsus.webp', tags:['CRM','POS','Operations'], live:'https://srm-sabsus.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/srm-sabsus', tone:'#746cff' },
  { key:'meterflow', title:'MeterFlow', image:'/images/portfolio-meterflow.webp', tags:['React','NestJS','PostgreSQL'], live:'https://meterflow-demo.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/meterflow-demo', tone:'#35b77d' },
  { key:'healthai', title:'HealthAI', image:'/images/portfolio-healthai.webp', tags:['Expo','React Native','TypeScript'], live:'https://svitly4nyi-vla2yslav.github.io/HealthAI/', code:'https://github.com/Svitly4nyi-Vla2yslav/HealthAI', tone:'#56b5a7' },
  { key:'photography', title:'Photography Portfolio', image:'/images/portfolio-photography.webp', tags:['Portfolio','Photography','Brand'], live:'https://portfolio-photography-1.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/portfolio-photography', tone:'#f0c661' },
];

const industryKeys = ['handwerk','practices','workshops','gastronomy','beauty','realEstate','lawFirms','fitness','coaching','retail'];
const capabilityKeys = ['websites','crm','ai','social','automation','analytics'];
const viewport = { once:true, amount:.12 } as const;

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const industries = industryKeys.map((key) => t(`portfolioPage.industries.items.${key}`));

  return <PortfolioPageWrapper>
    <section className='portfolio-hero' aria-labelledby='portfolio-title'>
      <img className='hero-image' src='/images/portfolio-hildesheim-hero.webp' alt={t('portfolioPage.hero.imageAlt')} fetchPriority='high' />
      <div className='hero-vignette' />
      <motion.div className='hero-content' initial='hidden' animate='visible' variants={staggerContainer}>
        <motion.span className='eyebrow' variants={fadeInUp}>{t('portfolioPage.hero.eyebrow')}</motion.span>
        <motion.h1 id='portfolio-title' variants={fadeInUp}>{t('portfolioPage.hero.title')} <em>{t('portfolioPage.hero.accent')}</em></motion.h1>
        <motion.p variants={fadeInUp}>{t('portfolioPage.hero.description')}</motion.p>
        <motion.div className='hero-actions' variants={fadeInUp}><a className='primary-action' href='#projects'>{t('portfolioPage.hero.primary')} <FaArrowRight /></a><Link className='secondary-action' to='/kontakt'>{t('portfolioPage.hero.secondary')}</Link></motion.div>
        <motion.div className='hero-index' variants={fadeInUp}><span><strong>10</strong> {t('portfolioPage.hero.stats.projects')}</span><span><strong>06</strong> {t('portfolioPage.hero.stats.areas')}</span><span><strong>01</strong> {t('portfolioPage.hero.stats.goal')}</span></motion.div>
      </motion.div>
      <a className='scroll-cue' href='#industries'><span /> {t('portfolioPage.hero.scroll')}</a>
    </section>

    <section id='industries' className='industry-strip' aria-label={t('portfolioPage.industries.aria')}>
      <div className='marquee-label'>{t('portfolioPage.industries.label')}</div>
      <div className='marquee-window'>
        <div className='marquee-track'>
          {[0,1].map((group) => <div className='marquee-group' aria-hidden={group === 1 ? 'true' : undefined} key={group}>{industries.map((name,index)=><div className='industry-logo' key={`${group}-${index}`}><b>{name.slice(0,2)}</b><span>{name}</span></div>)}</div>)}
        </div>
      </div>
      <p>{t('portfolioPage.industries.note')}</p>
    </section>

    <motion.section id='projects' className='projects-section' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp}>
      <div className='section-heading'><span className='eyebrow'>{t('portfolioPage.projects.eyebrow')}</span><h2>{t('portfolioPage.projects.title')}</h2><p>{t('portfolioPage.projects.description')}</p></div>
      <motion.div className='project-grid' variants={staggerContainer}>
        {projects.map((project,index)=><motion.article className={`project-card card-${index+1}`} style={{'--tone':project.tone} as CSSProperties} key={project.title} variants={scaleIn}>
          <div className='project-media'>
            <div className='browser-bar'><i/><i/><i/><span>{project.live.replace(/^https?:\/\//,'').replace(/\/$/,'')}</span></div>
            <img src={project.image} alt={t('portfolioPage.projects.previewAlt',{title:project.title})} loading={index<2?'eager':'lazy'} decoding='async'/>
            <span className='case-count'>{String(index+1).padStart(2,'0')}</span>
          </div>
          <div className='project-copy'>
            <span className='project-sector'>{t(`portfolioPage.projects.items.${project.key}.sector`)}</span><h3>{project.title}</h3><p>{t(`portfolioPage.projects.items.${project.key}.description`)}</p>
            <div className='project-impact'><small>{t('portfolioPage.projects.impact')}</small><p>{t(`portfolioPage.projects.items.${project.key}.impact`)}</p></div>
            <div className='project-tags'>{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
            <div className='project-actions'><a href={project.live} target='_blank' rel='noreferrer'>{t('portfolioPage.projects.live')} <FaExternalLinkAlt/></a><a href={project.code} target='_blank' rel='noreferrer'><FaCode/> {t('portfolioPage.projects.source')}</a></div>
          </div>
        </motion.article>)}
      </motion.div>
      <a className='github-link' href='https://github.com/Svitly4nyi-Vla2yslav' target='_blank' rel='noreferrer'><FaGithub/> {t('portfolioPage.projects.github')} <FaArrowRight/></a>
    </motion.section>

    <motion.section className='capabilities' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp}>
      <div><span className='eyebrow'>{t('portfolioPage.capabilities.eyebrow')}</span><h2>{t('portfolioPage.capabilities.title')}</h2><p className='capabilities-intro'>{t('portfolioPage.capabilities.intro')}</p></div>
      <div className='capability-list'>{capabilityKeys.map((key,index)=><article key={key}><span>0{index+1}</span><div><h3>{t(`portfolioPage.capabilities.items.${key}.title`)}</h3><p>{t(`portfolioPage.capabilities.items.${key}.description`)}</p></div><FaArrowRight aria-hidden='true'/></article>)}</div>
    </motion.section>

    <motion.section className='portfolio-cta' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp}><span className='eyebrow'>{t('portfolioPage.cta.eyebrow')}</span><h2>{t('portfolioPage.cta.title')}</h2><p>{t('portfolioPage.cta.description')}</p><Link className='primary-action' to='/kontakt'>{t('portfolioPage.cta.button')} <FaArrowRight/></Link></motion.section>
  </PortfolioPageWrapper>;
};

export default PortfolioPage;
