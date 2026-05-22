import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../../../data/contactInfo';
import { portfolioNavItems } from '../../data/portfolioData';
import {
  FooterBottom,
  FooterBrand,
  FooterGrid,
  FooterLinkList,
  FooterNote,
  FooterPanel,
  FooterShell,
  FooterTitle,
} from './PortfolioFooter.styled';

// PortfolioFooter завершує cinematic portfolio і дублює навігацію/контакти.
export const PortfolioFooter: React.FC = () => {
  // t бере footer copy з i18next.
  const { t } = useTranslation();

  return (
    <FooterShell>
      <FooterGrid>
        <FooterBrand>
          <FooterTitle>{contactInfo.founderName}</FooterTitle>
          <strong>{contactInfo.brandName}</strong>
          <p>{t('portfolio.footer.description')}</p>
        </FooterBrand>

        <FooterPanel>
          <h2>{t('portfolio.footer.navigation')}</h2>
          <FooterLinkList>
            {portfolioNavItems.map(item => (
              <a key={item.id} href={item.href}>
                {t(item.labelKey)}
              </a>
            ))}
          </FooterLinkList>
        </FooterPanel>

        <FooterPanel>
          <h2>{t('portfolio.footer.contact')}</h2>
          <FooterLinkList>
            <a href={contactInfo.emailHref}>{contactInfo.email}</a>
            <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
            <a href={contactInfo.mapsUrl} target='_blank' rel='noopener noreferrer'>
              {contactInfo.cityCountry} <FaExternalLinkAlt aria-hidden='true' />
            </a>
            <a href={contactInfo.websiteUrl} target='_blank' rel='noopener noreferrer'>
              {contactInfo.websiteLabel} <FaExternalLinkAlt aria-hidden='true' />
            </a>
            <a href={contactInfo.githubUrl} target='_blank' rel='noopener noreferrer'>
              <FaGithub aria-hidden='true' /> GitHub
            </a>
          </FooterLinkList>
        </FooterPanel>
      </FooterGrid>

      <FooterBottom>
        <FooterNote>{t('portfolio.footer.note')}</FooterNote>
      </FooterBottom>
    </FooterShell>
  );
};
