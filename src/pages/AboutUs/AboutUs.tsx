import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaUsers, FaRobot, FaBullhorn, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import aboutFounderPhoto from '../../assets/icons/about/vladyslav-founder.jpg';
import {
  Band,
  ButtonRow,
  Card,
  Checklist,
  Grid3,
  HeroSection,
  IconBadge,
  Muted,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
  Section,
} from '../shared/styles/PagePrimitives.styles';
import { AboutUsScope } from './styles/AboutUsPage.styles';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutUsScope>
      <PageRoot>
        <PageContainer>
          <HeroSection>
            <h1><TerminalType text={t('about.h1')} durationMs={2200} storageKey='about_h1_once' /></h1>
            <p>{t('about.subtitle')}</p>
          </HeroSection>

          <Section className='about-main-grid'>
            <Card className='about-photo-card'>
              <img className='about-photo-image' src={aboutFounderPhoto} alt={t('about.photoAlt')} />
              <Muted className='about-photo-caption'>{t('about.photoCaption')}</Muted>
              <div className='about-geo-badges'>
                <span className='about-geo-badge'><FaMapMarkerAlt /> {t('about.geo.local')}</span>
                <span className='about-geo-badge'><FaMapMarkerAlt /> {t('about.geo.region')}</span>
                <span className='about-geo-badge'><FaMapMarkerAlt /> {t('about.geo.country')}</span>
              </div>
            </Card>

            <Card className='about-text-card'>
              <Muted>{t('about.intro1')}</Muted>
              <Muted>{t('about.intro2')}</Muted>
              <Muted>{t('about.intro3')}</Muted>
              <p className='about-local-priority'>{t('about.localPriority')}</p>

              <h3>{t('about.miniFactsTitle')}</h3>
              <Checklist>
                <li><FaCheckCircle /> {t('about.miniFacts.i1')}</li>
                <li><FaCheckCircle /> {t('about.miniFacts.i2')}</li>
                <li><FaCheckCircle /> {t('about.miniFacts.i3')}</li>
              </Checklist>
            </Card>
          </Section>

          <Section>
            <Grid3>
              <Card><h3><IconBadge><FaUsers /></IconBadge>{t('about.cards.work.title')}</h3><Muted>{t('about.cards.work.desc')}</Muted></Card>
              <Card><h3><IconBadge><FaRobot /></IconBadge>{t('about.cards.ai.title')}</h3><Muted>{t('about.cards.ai.desc')}</Muted></Card>
              <Card><h3><IconBadge><FaBullhorn /></IconBadge>{t('about.cards.leads.title')}</h3><Muted>{t('about.cards.leads.desc')}</Muted></Card>
            </Grid3>
          </Section>

          <Section>
            <Card>
              <h2>{t('about.whatYouGetTitle')}</h2>
              <Checklist>
                <li><FaCheckCircle /> {t('about.whatYouGet.i1')}</li>
                <li><FaCheckCircle /> {t('about.whatYouGet.i2')}</li>
                <li><FaCheckCircle /> {t('about.whatYouGet.i3')}</li>
                <li><FaCheckCircle /> {t('about.whatYouGet.i4')}</li>
              </Checklist>
            </Card>
          </Section>

          <Band>
            <h2>{t('about.contactTitle')}</h2>
            <Muted>{t('about.contactText')}</Muted>
            <ButtonRow>
              <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('about.contactButton')}</PrimaryButtonLink>
            </ButtonRow>
          </Band>

          <Band>
            <h2><TerminalType text={t('about.ctaTitle')} durationMs={1500} storageKey='about_cta_once' /></h2>
            <ButtonRow>
              <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('about.ctaTitle')}</PrimaryButtonLink>
            </ButtonRow>
          </Band>
        </PageContainer>
      </PageRoot>
    </AboutUsScope>
  );
};

export default AboutUs;