import { useTranslation } from 'react-i18next';

const Datenschutz: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>{t('legal.datenschutz.h1')}</h1>
          <p>{t('legal.datenschutz.subtitle')}</p>
        </section>
        <section className='section card'>
          <p>{t('legal.datenschutz.l1')}</p>
          <p>{t('legal.datenschutz.l2')}</p>
          <p>{t('legal.datenschutz.l3')}</p>
          <p>{t('legal.datenschutz.l4')}</p>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;

