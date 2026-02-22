import { NavLink } from 'react-router-dom';

const HandwerkerLanding: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>Websites für Handwerker: mehr passende Anfragen.</h1>
          <p>Klare Leistungen, lokale Sichtbarkeit, einfache Kontaktwege.</p>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'>Projekt anfragen</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HandwerkerLanding;
