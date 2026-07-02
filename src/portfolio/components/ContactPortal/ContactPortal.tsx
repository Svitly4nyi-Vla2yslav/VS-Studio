import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../../data/contactInfo';
import { portfolioMedia } from '../../data/portfolioMedia';
import { portfolioViewport, revealCard, staggerContainer } from '../../utils/portfolioAnimations';
import { PortfolioMediaFrame } from '../PortfolioMediaFrame/PortfolioMediaFrame';
import {
  ChannelCard,
  ChannelGrid,
  ContactActions,
  ContactMediaSlot,
  ContactPortalShell,
  PortalCore,
  PortalFrame,
  PortalHalo,
  PrimaryButton,
  SectionIntro,
  SectionLabel,
  SectionTitle,
  SecondaryButton,
} from './ContactPortal.styled';

const socialIcons = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

// ContactPortal рендерить final portal CTA з контактами зі спільного contactInfo.
export const ContactPortal: React.FC = () => {
  // t перекладає CTA та labels контактних каналів.
  const { t } = useTranslation();

  // channels збирає контакти тільки з contactInfo, щоб не дублювати їх вручну в portfolio.
  const channels = [
    { id: 'email', label: t('portfolio.contact.channels.email'), value: contactInfo.email, href: contactInfo.emailHref, icon: FaEnvelope, external: false },
    { id: 'phone', label: t('portfolio.contact.channels.phone'), value: contactInfo.phone, href: contactInfo.phoneHref, icon: FaPhone, external: false },
    // { id: 'location', label: t('portfolio.contact.channels.location'), value: contactInfo.addressLine, href: contactInfo.mapsUrl, icon: FaMapMarkerAlt, external: true },
    { id: 'website', label: t('portfolio.contact.channels.website'), value: contactInfo.websiteLabel, href: contactInfo.websiteUrl, icon: FaExternalLinkAlt, external: true },
    ...contactInfo.socialLinks.map(link => ({
      id: link.id,
      label: link.label,
      value: 'VS Web Studio',
      href: link.url,
      icon: socialIcons[link.id],
      external: true,
      rel: 'me noopener noreferrer',
    })),
  ] as const;

  return (
    <ContactPortalShell
      id='portfolio-contact'
      aria-labelledby='portfolio-contact-title'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={portfolioViewport}
    >
      <ContactMediaSlot variants={revealCard} data-portfolio-media='contact'>
        <PortfolioMediaFrame type={portfolioMedia.contact.type} src={portfolioMedia.contact.src} alt={t(portfolioMedia.contact.altKey)}  />
      </ContactMediaSlot>

      <PortalFrame variants={revealCard}>
        <PortalHalo aria-hidden='true'>
          <PortalCore />
        </PortalHalo>
        <SectionLabel>{t('portfolio.contact.eyebrow')}</SectionLabel>
        <SectionTitle id='portfolio-contact-title'>{t('portfolio.contact.title')}</SectionTitle>
        <SectionIntro>{t('portfolio.contact.description')}</SectionIntro>

        <ContactActions>
          <PrimaryButton href={contactInfo.emailHref}>
            <FaPaperPlane aria-hidden='true' /> {t('portfolio.contact.buttons.project')}
          </PrimaryButton>
          <SecondaryButton href={contactInfo.emailHref}>
            <FaEnvelope aria-hidden='true' /> {t('portfolio.contact.buttons.email')}
          </SecondaryButton>
          <SecondaryButton href={contactInfo.websiteUrl} target='_blank' rel='noopener noreferrer'>
            {t('portfolio.contact.buttons.website')} <FaExternalLinkAlt aria-hidden='true' />
          </SecondaryButton>
          <SecondaryButton href={contactInfo.githubUrl} target='_blank' rel='noopener noreferrer'>
            <FaGithub aria-hidden='true' /> {t('portfolio.contact.buttons.github')}
          </SecondaryButton>
        </ContactActions>
      </PortalFrame>

      <ChannelGrid>
        {channels.map(channel => {
          // Icon є react-icons компонентом для поточного contact channel.
          const Icon = channel.icon;
          return (
            <ChannelCard
              key={channel.id}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={'rel' in channel ? channel.rel : channel.external ? 'noopener noreferrer' : undefined}
              variants={revealCard}
            >
              <Icon aria-hidden='true' />
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
            </ChannelCard>
          );
        })}
      </ChannelGrid>
    </ContactPortalShell>
  );
};
