import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaUsers, FaRobot, FaBullhorn, FaMapMarkerAlt, FaCheckCircle, FaLayerGroup, FaChartLine } from 'react-icons/fa';
import aboutFounderPhoto from '../../assets/icons/about/vladyslav-founder.jpg';
import {
  Band,
  ButtonRow,
  Card,
  Checklist,
  Grid2,
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
          <HeroSection className='about-hero'>
            <p className='about-hero-eyebrow'>
              {t('about.heroEyebrow', { defaultValue: 'VS Studio | Hildesheim | Niedersachsen | Deutschland' })}
            </p>
            <h1>{t('about.heroTitle', { defaultValue: 'Web Studio fuer lokale Unternehmen in Hildesheim' })}</h1>
            <p>{t('about.heroSubtitle', { defaultValue: 'Wir helfen kleinen Unternehmen, planbare Anfragen zu gewinnen - mit Websites, Lead-Systemen, Werbung und klarer Analyse.' })}</p>
            <p className='about-trustline'>
              {t('about.heroTrustline', { defaultValue: 'Lokal in Hildesheim. Strategisch in Niedersachsen. Umsetzbar in ganz Deutschland.' })}
            </p>
            <ButtonRow>
              <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('about.primaryCta', { defaultValue: 'Kostenloses Erstgespraech starten' })}</PrimaryButtonLink>
            </ButtonRow>
          </HeroSection>

          <Section>
            <h2>{t('about.section.about', { defaultValue: 'About' })}</h2>
            <Grid2>
              <Card>
                <h3>{t('about.blocks.who.title', { defaultValue: 'Wer wir sind' })}</h3>
                <Muted>{t('about.blocks.who.text', { defaultValue: 'Wir sind eine digitale Wachstumsagentur aus Hildesheim. Unser Fokus liegt auf lokaler Sichtbarkeit und messbaren Anfragen fuer kleine Unternehmen.' })}</Muted>
              </Card>
              <Card>
                <h3>{t('about.blocks.focus.title', { defaultValue: 'Unser Fokus' })}</h3>
                <Muted>{t('about.blocks.focus.text', { defaultValue: 'Wir verbinden Website, Lead-Prozess, Werbung und Tracking zu einem klaren System statt isolierter Einzelmassnahmen.' })}</Muted>
              </Card>
            </Grid2>
          </Section>

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
              <h3>{t('about.blocks.locality.title', { defaultValue: 'Lokale Naehe als Vorteil' })}</h3>
              <Muted>{t('about.blocks.locality.text1', { defaultValue: 'Wir arbeiten direkt aus Hildesheim und kennen die Realitaet lokaler Betriebe: knappe Zeit, klare Budgets und Bedarf an schnellen Ergebnissen.' })}</Muted>
              <Muted>{t('about.blocks.locality.text2', { defaultValue: 'Unser Setup passt fuer Hildesheim, Niedersachsen und Unternehmen in ganz Deutschland, die planbar wachsen wollen.' })}</Muted>
              <p className='about-local-priority'>{t('about.localPriority')}</p>
            </Card>
          </Section>

          <Section>
            <h2>{t('about.section.how', { defaultValue: 'How we work' })}</h2>
            <Grid3 className='about-work-grid'>
              <Card className='about-step-card'>
                <h3><IconBadge><FaLayerGroup /></IconBadge>{t('about.how.s1.title', { defaultValue: '1. Verstehen' })}</h3>
                <Muted>{t('about.how.s1.text', { defaultValue: 'Wir klaeren Zielgruppe, Angebot und Markt in Hildesheim, Niedersachsen und Deutschland.' })}</Muted>
              </Card>
              <Card className='about-step-card'>
                <h3><IconBadge><FaUsers /></IconBadge>{t('about.how.s2.title', { defaultValue: '2. Umsetzen' })}</h3>
                <Muted>{t('about.how.s2.text', { defaultValue: 'Wir bauen Website, Lead-System und Kampagnen so, dass Kontaktwege klar und einfach bleiben.' })}</Muted>
              </Card>
              <Card className='about-step-card'>
                <h3><IconBadge><FaChartLine /></IconBadge>{t('about.how.s3.title', { defaultValue: '3. Optimieren' })}</h3>
                <Muted>{t('about.how.s3.text', { defaultValue: 'Wir messen Anfragen, Kosten und Conversion und verbessern jede Phase datenbasiert.' })}</Muted>
              </Card>
            </Grid3>
          </Section>

          <Section>
            <h2>{t('about.section.value', { defaultValue: 'Value' })}</h2>
            <Grid3 className='about-value-grid'>
              <Card className='about-value-card'>
                <h3><IconBadge><FaUsers /></IconBadge>{t('about.cards.work.title', { defaultValue: 'Klarer Prozess' })}</h3>
                <Muted>{t('about.cards.work.desc', { defaultValue: 'Ein Team, ein Ablauf, klare Verantwortung von Strategie bis Launch.' })}</Muted>
              </Card>
              <Card className='about-value-card'>
                <h3><IconBadge><FaRobot /></IconBadge>{t('about.cards.ai.title', { defaultValue: 'AI First' })}</h3>
                <Muted>{t('about.cards.ai.desc', { defaultValue: 'KI beschleunigt Content, Auswertung und Kampagnen ohne Qualitaetsverlust.' })}</Muted>
              </Card>
              <Card className='about-value-card'>
                <h3><IconBadge><FaBullhorn /></IconBadge>{t('about.cards.leads.title', { defaultValue: 'Lead Fokus' })}</h3>
                <Muted>{t('about.cards.leads.desc', { defaultValue: 'Jede Seite und jede Anzeige ist auf qualifizierte Anfragen ausgerichtet.' })}</Muted>
              </Card>
            </Grid3>
          </Section>

          <Section>
            <Card>
              <h2>{t('about.results.title', { defaultValue: 'Was Kunden erhalten' })}</h2>
              <Checklist>
                <li><FaCheckCircle /> {t('about.results.i1', { defaultValue: 'Website, die schnell laedt und Vertrauen aufbaut' })}</li>
                <li><FaCheckCircle /> {t('about.results.i2', { defaultValue: 'Klare Kontaktwege fuer Anruf, Formular und Termin' })}</li>
                <li><FaCheckCircle /> {t('about.results.i3', { defaultValue: 'Messbare Anfragen statt unklarer Marketing-Daten' })}</li>
              </Checklist>
            </Card>
          </Section>

          <Section>
            <h2>{t('about.section.trust', { defaultValue: 'Trust' })}</h2>
            <Grid3>
              <Card>
                <h3>{t('about.trust.projects.label', { defaultValue: 'Anzahl Projekte' })}</h3>
                <p className='about-trust-metric'>{t('about.trust.projects.value', { defaultValue: '120+' })}</p>
                <Muted>{t('about.trust.projects.text', { defaultValue: 'Realisierte Websites, Lead-Funnels und Conversion-Relaunches.' })}</Muted>
              </Card>
              <Card>
                <h3>{t('about.trust.industries.label', { defaultValue: 'Branchen' })}</h3>
                <p className='about-trust-metric'>{t('about.trust.industries.value', { defaultValue: '12' })}</p>
                <Muted>{t('about.trust.industries.text', { defaultValue: 'Handwerk, Praxen, Gastronomie, Beauty, Bildung und lokale Dienstleistungen.' })}</Muted>
              </Card>
              <Card>
                <h3>{t('about.trust.focus.label', { defaultValue: 'Fokus' })}</h3>
                <p className='about-trust-metric'>{t('about.trust.focus.value', { defaultValue: 'Lokal + Messbar' })}</p>
                <Muted>{t('about.trust.focus.text', { defaultValue: 'Hildesheim, Niedersachsen und Deutschland mit klarem Lead-Fokus.' })}</Muted>
              </Card>
            </Grid3>
          </Section>

          <Band className='about-cta-band'>
            <h2>{t('about.cta.title', { defaultValue: 'Bereit fuer planbare Anfragen?' })}</h2>
            <Muted>{t('about.cta.text', { defaultValue: 'Im kostenlosen Erstgespraech zeigen wir die groessten Hebel fuer Ihre Website, Lead-Prozesse und Werbung.' })}</Muted>
            <ButtonRow>
              <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('about.primaryCta', { defaultValue: 'Kostenloses Erstgespraech starten' })}</PrimaryButtonLink>
            </ButtonRow>
          </Band>
        </PageContainer>
      </PageRoot>
    </AboutUsScope>
  );
};

export default AboutUs;

