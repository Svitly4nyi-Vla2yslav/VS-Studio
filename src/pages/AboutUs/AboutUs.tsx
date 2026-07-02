import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaUsers, FaRobot, FaBullhorn, FaMapMarkerAlt, FaCheckCircle, FaLayerGroup, FaChartLine } from 'react-icons/fa';
import aboutFounderPhoto from '../../assets/icons/about/vladyslav-founder.png';
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
      <PageRoot className='about-page-root'>
        <PageContainer>
          <HeroSection className='about-hero'>
            <div className='about-hero-copy'>
              <p className='about-hero-eyebrow'>
                {t('aboutPage.heroEyebrow', { defaultValue: 'VS Studio | Hildesheim | Niedersachsen | Deutschland' })}
              </p>
              <h1>
                <span className='about-hero-title-line'>{t('aboutPage.heroTitleLine1', { defaultValue: 'Websites und' })}</span>
                <span className='about-hero-title-line'>
                  <span className='about-hero-title-highlight'>{t('aboutPage.heroTitleLine2', { defaultValue: 'Lead-Systeme' })}</span>
                </span>
                <span className='about-hero-title-line'>{t('aboutPage.heroTitleLine3', { defaultValue: 'für lokale Unternehmen' })}</span>
                <span className='about-hero-title-line'>{t('aboutPage.heroTitleLine4', { defaultValue: 'in Hildesheim' })}</span>
              </h1>
              <p className='about-hero-subtitle'>
                {t('aboutPage.heroSubtitle', { defaultValue: 'Mehr qualifizierte Anfragen durch schnelle Websites, klare Kontaktwege und messbares Marketing.' })}
              </p>
              <p className='about-trustline'>
                {t('aboutPage.heroTrustline', { defaultValue: 'Lokal in Hildesheim. Strategisch in Niedersachsen. Umsetzbar in ganz Deutschland.' })}
              </p>
              <ButtonRow className='about-hero-actions'>
                <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('aboutPage.primaryCta', { defaultValue: 'Kostenlose Website-Analyse' })}</PrimaryButtonLink>
              </ButtonRow>
            </div>
          </HeroSection>

          <Section>
            <h2>{t('aboutPage.section.about', { defaultValue: 'About' })}</h2>
            <Grid2>
              <Card>
                <h3>{t('aboutPage.blocks.who.title', { defaultValue: 'Fuer lokale Unternehmen' })}</h3>
                <Muted>{t('aboutPage.blocks.who.text', { defaultValue: 'Websites, Lead-Systeme und Marketing für Betriebe, die planbar mehr Anfragen wollen.' })}</Muted>
              </Card>
              <Card>
                <h3>{t('aboutPage.blocks.focus.title', { defaultValue: 'Ein System statt Einzelloesungen' })}</h3>
                <Muted>{t('aboutPage.blocks.focus.text', { defaultValue: 'Website, Kontaktwege, Kampagnen und Tracking greifen als ein klarer Prozess zusammen.' })}</Muted>
              </Card>
            </Grid2>
          </Section>

          <Section>
            <h2>{t('aboutPage.section.localAdvantages', { defaultValue: 'Lokale Vorteile' })}</h2>
            <div className='about-main-grid'>
              <Card className='about-photo-card'>
                <img className='about-photo-image' src={aboutFounderPhoto} alt={t('aboutPage.photoAlt', { defaultValue: 'Vladyslav, Gruender von VS Web Studio aus Hildesheim' })} width='488' height='536' loading='lazy' decoding='async' fetchPriority='low' />
                <p className='about-photo-caption'>{t('aboutPage.photoCaption', { defaultValue: 'Vladyslav - Gruender von VS Web Studio' })}</p>
                <Checklist className='about-photo-facts'>
                  <li><FaCheckCircle /> {t('aboutPage.photoFacts.f1', { defaultValue: 'Fokus: lokale Unternehmen' })}</li>
                  <li><FaCheckCircle /> {t('aboutPage.photoFacts.f2', { defaultValue: 'Standort: Hildesheim' })}</li>
                  <li><FaCheckCircle /> {t('aboutPage.photoFacts.f3', { defaultValue: 'Projekte: deutschlandweit' })}</li>
                </Checklist>
                <div className='about-geo-badges'>
                  <span className='about-geo-badge'><FaMapMarkerAlt /> {t('aboutPage.geo.local', { defaultValue: 'Hildesheim' })}</span>
                  <span className='about-geo-badge'><FaMapMarkerAlt /> {t('aboutPage.geo.region', { defaultValue: 'Niedersachsen' })}</span>
                  <span className='about-geo-badge'><FaMapMarkerAlt /> {t('aboutPage.geo.country', { defaultValue: 'Deutschlandweit' })}</span>
                </div>
              </Card>

              <Card className='about-text-card'>
                <h3>{t('aboutPage.blocks.locality.title', { defaultValue: 'Lokale Naehe als Vorteil' })}</h3>
                <p className='about-local-subtitle'>
                  {t('aboutPage.blocks.locality.subtitle', { defaultValue: 'Schnelle Abstimmung, klare Prioritaeten und messbare Ergebnisse.' })}
                </p>
                <Muted className='about-local-copy'>
                  {t('aboutPage.blocks.locality.text1', { defaultValue: 'Wir arbeiten direkt mit lokalen Unternehmen zusammen - ohne lange Agenturketten und unnoetige Buerokratie.' })}
                </Muted>
                <Checklist className='about-local-list'>
                  <li><FaCheckCircle /> {t('aboutPage.blocks.locality.i1', { defaultValue: 'Direkte Kommunikation ohne Umwege' })}</li>
                  <li><FaCheckCircle /> {t('aboutPage.blocks.locality.i2', { defaultValue: 'Schnelle Umsetzung statt langer Abstimmungen' })}</li>
                  <li><FaCheckCircle /> {t('aboutPage.blocks.locality.i3', { defaultValue: 'Verstaendnis für lokale Maerkte und Budgets' })}</li>
                </Checklist>
                <Muted className='about-local-copy'>
                  {t('aboutPage.blocks.locality.text2', { defaultValue: 'Unsere Kunden profitieren davon, dass Entscheidungen schneller getroffen werden und Projekte nicht wochenlang in Abstimmungsschleifen haengen bleiben.' })}
                </Muted>
                <Muted className='about-local-copy'>
                  {t('aboutPage.blocks.locality.text3', { defaultValue: 'Das spart Zeit, reduziert Kosten und sorgt dafuer, dass Marketingmassnahmen schneller Ergebnisse liefern.' })}
                </Muted>
                <Muted className='about-local-copy'>
                  {t('aboutPage.blocks.locality.text4', { defaultValue: 'Wir kennen die Realitaet kleiner und mittelstaendischer Unternehmen: begrenzte Budgets, wenig Zeit und den Wunsch nach klaren Resultaten statt komplizierten Konzepten.' })}
                </Muted>
                <Muted className='about-local-copy'>
                  {t('aboutPage.blocks.locality.text5', { defaultValue: 'Deshalb arbeiten wir pragmatisch und strukturiert - von der ersten Analyse ueber die Umsetzung bis zur kontinuierlichen Optimierung.' })}
                </Muted>
                <p className='about-local-priority'>{t('aboutPage.localPriority', { defaultValue: 'Kurze Wege. Klare Prioritaeten. Fokus auf Ergebnisse.' })}</p>
              </Card>
            </div>
          </Section>

          <Section>
            <h2>{t('aboutPage.section.how', { defaultValue: 'How we work' })}</h2>
            <Grid3 className='about-work-grid'>
              <Card className='about-step-card'>
                <h3><IconBadge><FaLayerGroup /></IconBadge>{t('aboutPage.how.s1.title', { defaultValue: '1. Verstehen' })}</h3>
                <Muted>{t('aboutPage.how.s1.text', { defaultValue: 'Zielgruppe, Angebot und Markt analysieren.' })}</Muted>
              </Card>
              <Card className='about-step-card'>
                <h3><IconBadge><FaUsers /></IconBadge>{t('aboutPage.how.s2.title', { defaultValue: '2. Umsetzen' })}</h3>
                <Muted>{t('aboutPage.how.s2.text', { defaultValue: 'Website, Lead-System und Kampagnen starten.' })}</Muted>
              </Card>
              <Card className='about-step-card'>
                <h3><IconBadge><FaChartLine /></IconBadge>{t('aboutPage.how.s3.title', { defaultValue: '3. Optimieren' })}</h3>
                <Muted>{t('aboutPage.how.s3.text', { defaultValue: 'Daten analysieren und Ergebnisse verbessern.' })}</Muted>
              </Card>
            </Grid3>
          </Section>

          <Section>
            <h2>{t('aboutPage.section.value', { defaultValue: 'Value' })}</h2>
            <Grid3 className='about-value-grid'>
              <Card className='about-value-card'>
                <h3><IconBadge><FaUsers /></IconBadge>{t('aboutPage.cards.work.title', { defaultValue: 'Klare Prozesse' })}</h3>
                <Muted>{t('aboutPage.cards.work.desc', { defaultValue: 'Kurze Wege. Klare Verantwortung.' })}</Muted>
              </Card>
              <Card className='about-value-card'>
                <h3><IconBadge><FaRobot /></IconBadge>{t('aboutPage.cards.ai.title', { defaultValue: 'AI First' })}</h3>
                <Muted>{t('aboutPage.cards.ai.desc', { defaultValue: 'Automatisierung dort, wo sie Zeit spart.' })}</Muted>
              </Card>
              <Card className='about-value-card'>
                <h3><IconBadge><FaBullhorn /></IconBadge>{t('aboutPage.cards.leads.title', { defaultValue: 'Lead Fokus' })}</h3>
                <Muted>{t('aboutPage.cards.leads.desc', { defaultValue: 'Design und Marketing arbeiten zusammen.' })}</Muted>
              </Card>
            </Grid3>
          </Section>

          <Section>
            <Card>
              <h2>{t('aboutPage.results.title', { defaultValue: 'Was Kunden erhalten' })}</h2>
              <Checklist>
                <li><FaCheckCircle /> {t('aboutPage.results.i1', { defaultValue: 'Schnelle Website, die auf jedem Smartphone laedt' })}</li>
                <li><FaCheckCircle /> {t('aboutPage.results.i2', { defaultValue: 'Klare Kontaktwege: Anruf, Formular, Termin' })}</li>
                <li><FaCheckCircle /> {t('aboutPage.results.i3', { defaultValue: 'Messbare Anfragen mit Tracking und Marketing-Daten' })}</li>
              </Checklist>
            </Card>
          </Section>

          <Section>
            <h2>{t('aboutPage.section.trust', { defaultValue: 'Trust' })}</h2>
            <Grid3>
              <Card>
                <h3>{t('aboutPage.trust.projects.label', { defaultValue: 'Anzahl Projekte' })}</h3>
                <p className='about-trust-metric'>{t('aboutPage.trust.projects.value', { defaultValue: '120+' })}</p>
                <Muted>{t('aboutPage.trust.projects.text', { defaultValue: 'Websites, Lead-Funnels und Relaunches.' })}</Muted>
              </Card>
              <Card>
                <h3>{t('aboutPage.trust.industries.label', { defaultValue: 'Branchen' })}</h3>
                <p className='about-trust-metric'>{t('aboutPage.trust.industries.value', { defaultValue: '12' })}</p>
                <Muted>{t('aboutPage.trust.industries.text', { defaultValue: 'Handwerk, Praxen, Gastronomie, Beauty, Bildung und lokale Dienstleistungen.' })}</Muted>
              </Card>
              <Card>
                <h3>{t('aboutPage.trust.focus.label', { defaultValue: 'Fokus' })}</h3>
                <p className='about-trust-metric'>{t('aboutPage.trust.focus.value', { defaultValue: 'Lokal + Messbar' })}</p>
                <Muted>{t('aboutPage.trust.focus.text', { defaultValue: 'Hildesheim, Niedersachsen und Deutschland mit klarem Lead-Fokus.' })}</Muted>
              </Card>
            </Grid3>
          </Section>

          <Band className='about-cta-band'>
            <h2>{t('aboutPage.cta.title', { defaultValue: 'Bereit für planbare Anfragen?' })}</h2>
            <Muted>{t('aboutPage.cta.text', { defaultValue: 'Im kostenlosen Erstgespräch zeigen wir die größten Hebel für Ihre Website, Lead-Prozesse und Werbung.' })}</Muted>
            <ButtonRow>
              <PrimaryButtonLink to='/kontakt'><FaArrowRight /> {t('aboutPage.primaryCta', { defaultValue: 'Kostenloses Erstgespräch starten' })}</PrimaryButtonLink>
            </ButtonRow>
          </Band>
        </PageContainer>
      </PageRoot>
    </AboutUsScope>
  );
};

export default AboutUs;

