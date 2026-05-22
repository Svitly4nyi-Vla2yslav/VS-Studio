import { useTranslation } from 'react-i18next';
import { guildSignals } from '../../data/portfolioData';
import { portfolioMedia } from '../../data/portfolioMedia';
import { portfolioViewport, revealCard, staggerContainer } from '../../utils/portfolioAnimations';
import { PortfolioMediaFrame } from '../PortfolioMediaFrame/PortfolioMediaFrame';
import {
  GuildCard,
  GuildGrid,
  GuildIcon,
  NetworkGuildShell,
  NetworkMediaSlot,
  SectionIntro,
  SectionLabel,
  SectionTitle,
} from './NetworkGuild.styled';

// NetworkGuild показує чесний business/network context без client claims.
export const NetworkGuild: React.FC = () => {
  // t перекладає guild cards.
  const { t } = useTranslation();

  return (
    <NetworkGuildShell
      id='portfolio-network'
      aria-labelledby='portfolio-network-title'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={portfolioViewport}
    >
      <NetworkMediaSlot variants={revealCard} data-portfolio-media='network'>
        <PortfolioMediaFrame type={portfolioMedia.network.type} src={portfolioMedia.network.src} alt={t(portfolioMedia.network.altKey)} />
      </NetworkMediaSlot>

      <div>
        <SectionLabel>{t('portfolio.network.eyebrow')}</SectionLabel>
        <SectionTitle id='portfolio-network-title'>{t('portfolio.network.title')}</SectionTitle>
        <SectionIntro>{t('portfolio.network.description')}</SectionIntro>
      </div>

      <GuildGrid>
        {guildSignals.map(signal => {
          // Icon є react-icons компонентом для конкретного guild signal.
          const Icon = signal.icon;
          return (
            <GuildCard key={signal.id} variants={revealCard}>
              <GuildIcon>
                <Icon aria-hidden='true' />
              </GuildIcon>
              <h3>{t(signal.titleKey)}</h3>
              <p>{t(signal.descriptionKey)}</p>
            </GuildCard>
          );
        })}
      </GuildGrid>
    </NetworkGuildShell>
  );
};
