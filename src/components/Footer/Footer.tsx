import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const openCookieSettings = () => {
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <footer className='footer'>
      <div className='container footer-row'>
        <div>
          <p>{t('footer.tagline')}</p>
          <p className='muted'>kontakt@vs-web-studio.de · +49 30 1234567</p>
        </div>
        <div className='footer-links'>
          <NavLink to='/impressum'>{t('footer.impressum')}</NavLink>
          <NavLink to='/datenschutz'>{t('footer.datenschutz')}</NavLink>
          <NavLink to='/agb'>{t('footer.agb')}</NavLink>
          <NavLink to='/cookies'>{t('footer.cookies')}</NavLink>
          <button type='button' className='footer-cookie-btn' onClick={openCookieSettings}>
            {t('footer.cookieSettings')}
          </button>
          <NavLink to='/blog'>{t('footer.blog')}</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
