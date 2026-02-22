import { NavLink } from 'react-router-dom';

const WerkstattLanding: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>Websites für Werkstätten: planbare Leads statt Zufall.</h1>
          <p>Service-orientierte Seiten mit messbarer Conversion.</p>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'>Projekt anfragen</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WerkstattLanding;
