import { useTranslation } from 'react-i18next';

const Impressum: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>{t('legal.impressum.h1')}</h1>
          <p>{t('legal.impressum.subtitle')}</p>
        </section>
        <section className='section card'>
          <p>{t('legal.impressum.l1')}</p>
          <p>{t('legal.impressum.l2')}</p>
          <p>{t('legal.impressum.l3')}</p>
          <p>{t('legal.impressum.l4')}</p>
          <p>{t('legal.impressum.l5')}</p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;

