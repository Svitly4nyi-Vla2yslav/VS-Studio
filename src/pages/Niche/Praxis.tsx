import { NavLink } from 'react-router-dom';

const PraxisLanding: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>Websites für Praxen: weniger Rückfragen, mehr Terminanfragen.</h1>
          <p>Patientenfreundliche Struktur und klarer Online-Erstkontakt.</p>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'>Projekt anfragen</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PraxisLanding;
