import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { contactInfo } from '../../data/contactInfo';
import {
  FooterCookieButton,
  FooterInfo,
  FooterInner,
  FooterLink,
  FooterLinks,
  FooterMuted,
  FooterRoot,
  FooterRow,
  FooterSocialLink,
  FooterSocialLinks,
} from './styles/Footer.styles';

const hasBrokenEncoding = (value: string) => /[\u00C3\u00C2\uFFFD]/.test(value);

const safeText = (value: string, fallback: string) => (hasBrokenEncoding(value) ? fallback : value);

const socialIcons = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

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
              <a href={contactInfo.emailHref}>{contactInfo.email}</a>
              {' | '}
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
            </FooterMuted>
            <FooterSocialLinks aria-label='VS Web Studio social media'>
              {contactInfo.socialLinks.map(link => {
                const Icon = socialIcons[link.id];
                return (
                  <FooterSocialLink
                    key={link.id}
                    href={link.url}
                    target='_blank'
                    rel='me noopener noreferrer'
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon aria-hidden='true' />
                  </FooterSocialLink>
                );
              })}
            </FooterSocialLinks>
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
