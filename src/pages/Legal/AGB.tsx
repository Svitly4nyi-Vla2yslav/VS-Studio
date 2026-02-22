import { useTranslation } from 'react-i18next';

const AGB: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>{t('legal.agb.h1')}</h1>
          <p>{t('legal.agb.subtitle')}</p>
        </section>
        <section className='section card'>
          <p>{t('legal.agb.l1')}</p>
          <p>{t('legal.agb.l2')}</p>
        </section>
      </div>
    </div>
  );
};

export default AGB;

