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
            <p>{t('footer.tagline')}</p>
            <FooterMuted>kontakt@vs-web-studio.de · +49 30 1234567</FooterMuted>
          </FooterInfo>
          <FooterLinks>
            <FooterLink to='/impressum'>{t('footer.impressum')}</FooterLink>
            <FooterLink to='/datenschutz'>{t('footer.datenschutz')}</FooterLink>
            <FooterLink to='/agb'>{t('footer.agb')}</FooterLink>
            <FooterLink to='/cookies'>{t('footer.cookies')}</FooterLink>
            <FooterCookieButton type='button' onClick={openCookieSettings}>
              {t('footer.cookieSettings')}
            </FooterCookieButton>
            <FooterLink to='/blog'>{t('footer.blog')}</FooterLink>
          </FooterLinks>
        </FooterRow>
      </FooterInner>
    </FooterRoot>
  );
};

export default Footer;
