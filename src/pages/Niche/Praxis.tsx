import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PraxisLanding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>{t('niche.praxis.h1')}</h1>
          <p>{t('niche.praxis.p')}</p>
          <div className='btn-row'>
            <NavLink to='/kontakt' className='btn btn-primary'>{t('common.projectRequest')}</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PraxisLanding;

