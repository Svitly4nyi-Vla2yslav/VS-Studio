import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { FaArrowRight, FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import workshop from '../../assets/proekt/Auto-Werkstatt.webp';
import handwerk from '../../assets/proekt/handwerk.webp';
import beauty from '../../assets/proekt/single-page_beauty_salon.webp';
import { fadeInUp, scaleIn, staggerContainer } from '../../components/Motion/reveal';
import { PortfolioPageWrapper } from './PortfolioPage.styled';

type Project = {
  title: string; sector: string; description: string; impact: string; image: string;
  tags: string[]; live: string; code: string; tone: string;
};

const projects: Project[] = [
  { title:'Handwerk SHK', sector:'Lead Website · Live', description:'Service-Website für Heizungs-, Sanitär- und Wärmepumpenbetriebe mit lokaler Angebotsstruktur.', impact:'Weniger Suchaufwand, schnellere Kontaktaufnahme und qualifiziertere regionale Anfragen.', image:handwerk, tags:['Webdesign','Local SEO','Lead Flow'], live:'https://handwerken.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/handwerk', tone:'#dfa636' },
  { title:'Auto Werkstatt', sector:'Booking Experience · Live', description:'Dunkle Premium-Experience für Werkstattservices, Vertrauensaufbau und Terminwünsche.', impact:'Hilft Werkstätten, Leistungen verständlich zu zeigen und Anfragen vorzuqualifizieren.', image:workshop, tags:['Automotive','Booking','Conversion'], live:'https://auto-werkstatt.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/Auto-Werkstatt', tone:'#e56d35' },
  { title:'Lumina Atelier', sector:'Beauty Website · Live', description:'Ruhige, hochwertige One-Page-Präsenz für Kosmetikstudios und Beauty-Dienstleister.', impact:'Transportiert Qualität visuell und führt Kundinnen ohne Umwege zur Terminbuchung.', image:beauty, tags:['Beauty','One Page','Trust'], live:'https://lumina-atelier-salon.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/single-page_beauty_salon', tone:'#d9a987' },
  { title:'VS Web Studio', sector:'Digital Studio · Live', description:'Mehrsprachige Plattform für Websites, SEO, Lead-Systeme und digitale Unternehmenslösungen.', impact:'Bündelt Angebote, Beratung und Anfragewege in einer skalierbaren Markenplattform.', image:'/images/vs-web-studio.de.png', tags:['React','i18n','AI Assistant'], live:'https://vs-web-studio.de/', code:'https://github.com/Svitly4nyi-Vla2yslav/VS-Studio', tone:'#d6a542' },
  { title:'SABSUS Commerce', sector:'E-Commerce · Live', description:'Moderner digitaler Shop mit klarer Produkthierarchie und markanter visueller Identität.', impact:'Macht Produkte schneller erfassbar und schafft einen direkten Weg zum Kauf.', image:'/images/sabsus.shop.png', tags:['Commerce','UX','Catalog'], live:'https://sabsus.shop/', code:'https://github.com/Svitly4nyi-Vla2yslav/sabsus-lending_page', tone:'#6e78ff' },
  { title:'AirTexno Service Hub', sector:'Service Platform · Live', description:'Digitale Serviceplattform für Reparatur, Wartung und strukturierte Kundenanfragen.', impact:'Verbindet lokale Auffindbarkeit, Service-Auswahl und schnelle Kontaktaufnahme.', image:'/images/airtexno.com.png', tags:['Service UX','SEO','Forms'], live:'https://airtexno.com/', code:'https://github.com/Svitly4nyi-Vla2yslav/AirTexno', tone:'#45a8ff' },
  { title:'SRM SABSUS', sector:'Business Platform · Live', description:'Modulares CRM-, POS- und Verwaltungsökosystem für Gastronomie, Cafés und lokalen Handel.', impact:'Führt operative Prozesse, Kundenbeziehungen und Verkaufsdaten in einer Oberfläche zusammen.', image:'/images/portfolio-srm-sabsus.webp', tags:['CRM','POS','Operations'], live:'https://srm-sabsus.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/srm-sabsus', tone:'#746cff' },
  { title:'MeterFlow', sector:'Energy SaaS · Live', description:'Fullstack-Dashboard zur Verwaltung von Mieterstrom-Projekten, Anlagen, Verträgen und Verbrauchsdaten.', impact:'Macht komplexe Energieprojekte für Betreiber und Teams zentral steuerbar.', image:'/images/portfolio-meterflow.webp', tags:['React','NestJS','PostgreSQL'], live:'https://meterflow-demo.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/meterflow-demo', tone:'#35b77d' },
  { title:'HealthAI', sector:'Mobile Health · Live Demo', description:'Mobile-first Gesundheitsoberfläche mit strukturiertem Onboarding und plattformübergreifender React-Native-Basis.', impact:'Zeigt, wie komplexe Gesundheitsfunktionen klar, ruhig und zugänglich organisiert werden können.', image:'/images/portfolio-healthai.webp', tags:['Expo','React Native','TypeScript'], live:'https://svitly4nyi-vla2yslav.github.io/HealthAI/', code:'https://github.com/Svitly4nyi-Vla2yslav/HealthAI', tone:'#56b5a7' },
  { title:'Photography Portfolio', sector:'Creative Portfolio · Live', description:'Reduzierte, bildorientierte Portfolio-Präsenz für Fotografie, Arbeiten und direkte Kontaktwege.', impact:'Gibt visuellen Arbeiten Raum und führt Interessenten ohne Ablenkung zu Referenzen und Kontakt.', image:'/images/portfolio-photography.webp', tags:['Portfolio','Photography','Brand'], live:'https://portfolio-photography-1.netlify.app/', code:'https://github.com/Svitly4nyi-Vla2yslav/portfolio-photography', tone:'#f0c661' },
];

const industries = ['HANDWERK','PRAXEN','WERKSTÄTTEN','GASTRONOMIE','BEAUTY','IMMOBILIEN','KANZLEIEN','FITNESS','COACHING','LOKALER HANDEL'];
const viewport = { once:true, amount:.12 } as const;

const PortfolioPage: React.FC = () => (
  <PortfolioPageWrapper>
    <section className='portfolio-hero' aria-labelledby='portfolio-title'>
      <img className='hero-image' src='/images/portfolio-hildesheim-hero.webp' alt='Hildesheim bei Nacht als Hintergrund für das digitale Portfolio' fetchPriority='high' />
      <div className='hero-vignette' />
      <motion.div className='hero-content' initial='hidden' animate='visible' variants={staggerContainer}>
        <motion.span className='eyebrow' variants={fadeInUp}>Hildesheim · Digital Growth Portfolio</motion.span>
        <motion.h1 id='portfolio-title' variants={fadeInUp}>Digitale Lösungen, die <em>Aufmerksamkeit in Wachstum</em> verwandeln.</motion.h1>
        <motion.p variants={fadeInUp}>Websites sind nur der Anfang. Ich entwickle digitale Systeme für lokale Unternehmen — von CRM und Lead-Automation bis Social Media, AI-Bots und intelligenten Kundenprozessen.</motion.p>
        <motion.div className='hero-actions' variants={fadeInUp}><a className='primary-action' href='#projects'>10 Cases entdecken <FaArrowRight /></a><Link className='secondary-action' to='/kontakt'>Lösung besprechen</Link></motion.div>
        <motion.div className='hero-index' variants={fadeInUp}><span><strong>10</strong> echte Projekte</span><span><strong>06</strong> Lösungsbereiche</span><span><strong>01</strong> Ziel: mehr Kunden</span></motion.div>
      </motion.div>
      <a className='scroll-cue' href='#industries'><span /> Scroll to explore</a>
    </section>

    <section id='industries' className='industry-strip' aria-label='Branchen, die wir digital unterstützen möchten'>
      <div className='marquee-label'>Für diese Branchen entwickeln wir</div>
      <div className='marquee-window'><div className='marquee-track'>{[...industries,...industries].map((name,index)=><div className='industry-logo' key={`${name}-${index}`}><b>{name.slice(0,2)}</b><span>{name}</span></div>)}</div></div>
      <p>Beispielhafte Zielbranchen — keine Darstellung bestehender Kundenbeziehungen.</p>
    </section>

    <motion.section id='projects' className='projects-section' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp}>
      <div className='section-heading'><span className='eyebrow'>Selected work / 2025—2026</span><h2>Erfahrung, sichtbar gemacht.</h2><p>Ausgewählte reale Projekte aus meinem GitHub — mit Live-Seite, Quellcode, Zielgruppe, Aufgabe und dem konkreten Nutzen für das Unternehmen.</p></div>
      <motion.div className='project-grid' variants={staggerContainer}>
        {projects.map((project,index)=><motion.article className={`project-card card-${index+1}`} style={{'--tone':project.tone} as CSSProperties} key={project.title} variants={scaleIn}>
          <div className='project-media'>
            <div className='browser-bar'><i/><i/><i/><span>{project.live.replace(/^https?:\/\//,'').replace(/\/$/,'')}</span></div>
            <img src={project.image} alt={`Vollständige Vorschau: ${project.title}`} loading={index<2?'eager':'lazy'} decoding='async'/>
            <span className='case-count'>{String(index+1).padStart(2,'0')}</span>
          </div>
          <div className='project-copy'>
            <span className='project-sector'>{project.sector}</span><h3>{project.title}</h3><p>{project.description}</p>
            <div className='project-impact'><small>Business impact</small><p>{project.impact}</p></div>
            <div className='project-tags'>{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
            <div className='project-actions'><a href={project.live} target='_blank' rel='noreferrer'>Live project <FaExternalLinkAlt/></a><a href={project.code} target='_blank' rel='noreferrer'><FaCode/> Source</a></div>
          </div>
        </motion.article>)}
      </motion.div>
      <a className='github-link' href='https://github.com/Svitly4nyi-Vla2yslav' target='_blank' rel='noreferrer'><FaGithub/> More experiments on GitHub <FaArrowRight/></a>
    </motion.section>

    <motion.section className='capabilities' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp}>
      <div><span className='eyebrow'>Beyond websites</span><h2>Ein digitales System statt einzelner Tools.</h2></div>
      <div className='capability-list'>{['Conversion Websites','CRM & Lead Pipelines','AI Voice & Chat Bots','Social Media Systems','Business Automation','Analytics & Growth'].map((item,index)=><div key={item}><span>0{index+1}</span><h3>{item}</h3><FaArrowRight/></div>)}</div>
    </motion.section>

    <motion.section className='portfolio-cta' initial='hidden' whileInView='visible' viewport={viewport} variants={fadeInUp}><span className='eyebrow'>From Hildesheim to your business</span><h2>Was soll für Ihr Unternehmen künftig automatisch funktionieren?</h2><p>Wir starten nicht mit einem Tool, sondern mit Ihrem Ziel: mehr passende Kunden, weniger Routine und ein System, das mit dem Unternehmen wächst.</p><Link className='primary-action' to='/kontakt'>Kostenloses Erstgespräch <FaArrowRight/></Link></motion.section>
  </PortfolioPageWrapper>
);

export default PortfolioPage;
