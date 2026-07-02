import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { contactInfo } from '../../data/contactInfo';
import {
  FooterCookieButton,
  FooterColumn,
  FooterColumnTitle,
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
  youtube: FaYoutube,
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
            <FooterColumnTitle>VS Web Studio</FooterColumnTitle>
            <p>
              {t('footer.description', {
                defaultValue:
                  'Webdesign, Websites, SEO und Lead-Systeme für lokale Unternehmen in Hildesheim und Niedersachsen.',
              })}
            </p>
            <FooterMuted>
              <a href={contactInfo.emailHref}>{contactInfo.email}</a>
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
          <FooterColumn>
            <FooterColumnTitle>{t('footer.columns.services', { defaultValue: 'Leistungen' })}</FooterColumnTitle>
            <FooterLinks>
              <FooterLink to='/webdesign-hildesheim'>{t('footer.links.webdesign', { defaultValue: 'Webdesign' })}</FooterLink>
              <FooterLink to='/website-erstellen-lassen'>{t('footer.links.landingpages', { defaultValue: 'Landingpages' })}</FooterLink>
              <FooterLink to='/seo-hildesheim'>{t('footer.links.seoBase', { defaultValue: 'SEO-Grundstruktur' })}</FooterLink>
              <FooterLink to='/lead-systeme'>{t('footer.links.leadSystems', { defaultValue: 'Lead-Systeme' })}</FooterLink>
              <FooterLink to='/services'>{t('footer.links.aiContent', { defaultValue: 'AI Content' })}</FooterLink>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>{t('footer.columns.regions', { defaultValue: 'Regionen' })}</FooterColumnTitle>
            <FooterLinks>
              <FooterLink to='/webdesign-hildesheim'>{t('footer.regions.hildesheim', { defaultValue: 'Hildesheim' })}</FooterLink>
              <FooterLink to='/webdesign-hildesheim'>{t('footer.regions.hannover', { defaultValue: 'Hannover' })}</FooterLink>
              <FooterLink to='/webdesign-hildesheim'>{t('footer.regions.braunschweig', { defaultValue: 'Braunschweig' })}</FooterLink>
              <FooterLink to='/webdesign-hildesheim'>{t('footer.regions.niedersachsen', { defaultValue: 'Niedersachsen' })}</FooterLink>
              <FooterLink to='/kontakt'>{t('footer.regions.onlineGermany', { defaultValue: 'Deutschlandweit online' })}</FooterLink>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>{t('footer.columns.legal', { defaultValue: 'Rechtliches' })}</FooterColumnTitle>
            <FooterLinks>
              <FooterLink to='/impressum'>{safeText(t('footer.impressum'), 'Impressum')}</FooterLink>
              <FooterLink to='/datenschutz'>{safeText(t('footer.datenschutz'), 'Datenschutz')}</FooterLink>
              <FooterLink to='/agb'>{safeText(t('footer.agb'), 'AGB')}</FooterLink>
              <FooterLink to='/cookies'>{safeText(t('footer.cookies'), 'Cookies')}</FooterLink>
              <FooterCookieButton type='button' onClick={openCookieSettings}>
                {safeText(t('footer.cookieSettings'), 'Cookie-Einstellungen')}
              </FooterCookieButton>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>{t('footer.columns.contact', { defaultValue: 'Kontakt' })}</FooterColumnTitle>
            <FooterLinks>
              <FooterLink to='/kontakt'>{t('footer.links.freeConsultation', { defaultValue: 'Kostenlose Erstberatung' })}</FooterLink>
              <FooterLink to='/faq'>{t('footer.links.faq', { defaultValue: 'FAQ' })}</FooterLink>
              <FooterLink to='/portfolio'>{t('footer.links.portfolio', { defaultValue: 'Portfolio' })}</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterRow>
      </FooterInner>
    </FooterRoot>
  );
};

export default Footer;
