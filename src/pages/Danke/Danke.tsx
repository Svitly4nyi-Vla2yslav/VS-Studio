import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import './Danke.css';

const Danke = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const confirmed = Boolean((location.state as { confirmedSubmission?: boolean } | null)?.confirmedSubmission);

  return (
    <section className='danke-page'>
      <div className='danke-page__card'>
        <span className='danke-page__eyebrow'>VS Web Studio</span>
        <h1>{t('danke.title', { defaultValue: 'Vielen Dank für Ihre Anfrage.' })}</h1>
        <p>
          {confirmed
            ? t('danke.confirmed', { defaultValue: 'Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns so schnell wie möglich.' })
            : t('danke.direct', { defaultValue: 'Hier finden Sie den nächsten Schritt zu Ihrer Projektanfrage.' })}
        </p>
        <div className='danke-page__actions'>
          <Link className='btn btn-primary' to='/'>
            {t('danke.home', { defaultValue: 'Zur Startseite' })}
          </Link>
          <Link className='btn btn-secondary' to='/services'>
            {t('danke.services', { defaultValue: 'Leistungen ansehen' })}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Danke;

