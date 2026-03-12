import { useTranslation } from 'react-i18next';
import {
  FooterCookieButton,
  FooterInfo,
  FooterInner,
  FooterLink,
  FooterLinks,
  FooterMuted,
  FooterRoot,
  FooterRow,
} from './styles/Footer.styles';

const hasBrokenEncoding = (value: string) => /[\u00C3\u00C2\uFFFD]/.test(value);

const safeText = (value: string, fallback: string) => (hasBrokenEncoding(value) ? fallback : value);

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const openCookieSettings = () => {
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <FooterRoot>
      <FooterInner>
        <FooterRow>
          <FooterInfo>
            <p>{safeText(t('footer.tagline'), 'VS Studio - Websites, Web-Apps, Ads & Automationen')}</p>
            <FooterMuted>
              <a href='mailto:anfrage@vs-web-studio.de'>anfrage@vs-web-studio.de</a>
              {' | '}
              <a href='tel:+4915164392053'>+49 1516 4392053</a>
            </FooterMuted>
          </FooterInfo>
          <FooterLinks>
            <FooterLink to='/impressum'>{safeText(t('footer.impressum'), 'Impressum')}</FooterLink>
            <FooterLink to='/datenschutz'>{safeText(t('footer.datenschutz'), 'Datenschutz')}</FooterLink>
            <FooterLink to='/agb'>{safeText(t('footer.agb'), 'AGB')}</FooterLink>
            <FooterLink to='/cookies'>{safeText(t('footer.cookies'), 'Cookies')}</FooterLink>
            <FooterCookieButton type='button' onClick={openCookieSettings}>
              {safeText(t('footer.cookieSettings'), 'Cookie-Einstellungen')}
            </FooterCookieButton>
            <FooterLink to='/blog'>{safeText(t('footer.blog'), 'Blog')}</FooterLink>
          </FooterLinks>
        </FooterRow>
      </FooterInner>
    </FooterRoot>
  );
};

export default Footer;
