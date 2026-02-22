import { useTranslation } from 'react-i18next';

const Cookies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>{t('legal.cookies.h1')}</h1>
          <p>{t('legal.cookies.subtitle')}</p>
        </section>
        <section className='section card'>
          <p>{t('legal.cookies.l1')}</p>
          <p>{t('legal.cookies.l2')}</p>
        </section>
      </div>
    </div>
  );
};

export default Cookies;

