import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaUsers, FaRobot, FaBullhorn } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';

const AboutUs: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1><TerminalType text='Über uns' durationMs={2200} storageKey='about_h1_once' /></h1>
          <p>Wir sind ein kleines Umsetzungsteam für lokale Unternehmen.</p>
        </section>

        <section className='section grid-3'>
          <article className='card'><h3><span className='icon-badge'><FaUsers /></span>Wie wir arbeiten</h3><p className='muted'>Kurze Wege, klare Verantwortungen.</p></article>
          <article className='card'><h3><span className='icon-badge'><FaRobot /></span>AI First</h3><p className='muted'>Automationen dort, wo sie Zeit sparen.</p></article>
          <article className='card'><h3><span className='icon-badge'><FaBullhorn /></span>Lead Focus</h3><p className='muted'>Design und Marketing arbeiten zusammen.</p></article>
        </section>

        <section className='section band'>
          <h2><TerminalType text='Kontakt' durationMs={1500} storageKey='about_cta_once' /></h2>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'><FaArrowRight /> Kontakt</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
