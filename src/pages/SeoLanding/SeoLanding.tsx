import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaComments,
  FaMapMarkerAlt,
  FaSearch,
} from 'react-icons/fa';
import styled from 'styled-components';
import {
  ButtonRow,
  Card,
  Grid2,
  HeroSection,
  Muted,
  PageContainer,
  PageRoot,
  PrimaryButtonLink,
  Section,
} from '../shared/styles/PagePrimitives.styles';
import seoHeroImage from '../../assets/hero-image/seo.png';
import webdesignHildesheimHeroImage from '../../assets/hero-image/Webdesign_Hildesheim.png';

type PageId =
  | 'webdesign-hildesheim'
  | 'website-erstellen-lassen'
  | 'seo-hildesheim'
  | 'lead-systeme'
  | 'websites-fuer-handwerker'
  | 'faq';

type LandingPageData = {
  eyebrow: string;
  h1: string;
  lead: string;
  sections: Array<{
    title: string;
    text: string;
    points: string[];
  }>;
  cta: string;
};

const fallbackSignals = ['Hildesheim', 'SEO-Grundstruktur', 'klare Leistungen', 'mehr Anfragen'];

const signalIcons = [FaMapMarkerAlt, FaSearch, FaClipboardList, FaComments];

const heroBackgrounds: Partial<Record<PageId, string>> = {
  'webdesign-hildesheim': webdesignHildesheimHeroImage,
  'seo-hildesheim': seoHeroImage,
};

const LandingPageRoot = styled(PageRoot)<{ $fullHero?: boolean }>`
  padding-top: ${({ $fullHero }) => ($fullHero ? '0' : '48px')};

  @media (max-width: 767px) {
    padding-top: ${({ $fullHero }) => ($fullHero ? '0' : '24px')};
  }
`;

const isLandingPageData = (value: unknown): value is LandingPageData => {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as LandingPageData;

  return (
    typeof candidate.eyebrow === 'string' &&
    typeof candidate.h1 === 'string' &&
    typeof candidate.lead === 'string' &&
    typeof candidate.cta === 'string' &&
    Array.isArray(candidate.sections)
  );
};

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every(item => typeof item === 'string');

const localLandingPages: Record<PageId, LandingPageData> = {
  'webdesign-hildesheim': {
    eyebrow: 'Webdesign Hildesheim',
    h1: 'Webdesign Hildesheim für lokale Unternehmen',
    lead:
      'VS Web Studio erstellt moderne Websites, die Vertrauen aufbauen, mobil stark funktionieren und klare Kundenanfragen ermöglichen.',
    cta: 'Kostenlose Erstberatung anfragen',
    sections: [
      {
        title: 'Moderne Websites, die Vertrauen aufbauen',
        text:
          'Eine gute Website erklärt in wenigen Sekunden, wer Sie sind, was Sie anbieten und wie Kunden Sie erreichen.',
        points: ['klare Startseite', 'verständliche Leistungen', 'mobile Optimierung'],
      },
      {
        title: 'Für welche Branchen?',
        text:
          'Der Fokus liegt auf Handwerk, Restaurants, Praxen, Studios und lokalen Dienstleistern in Hildesheim und Niedersachsen.',
        points: ['Handwerker', 'Restaurants & Cafés', 'Praxen, Studios und Dienstleister'],
      },
      {
        title: 'Was ist enthalten?',
        text:
          'Je nach Projekt entsteht eine Landingpage oder mehrseitige Unternehmenswebsite mit SEO-Grundstruktur und Kontaktwegen.',
        points: ['responsive Design', 'SEO-Basis', 'Kontaktformular und klare CTAs'],
      },
      {
        title: 'Warum lokales Webdesign wichtig ist',
        text:
          'Lokale Kunden suchen konkret: Leistung, Standort, Vertrauen und schnelle Kontaktaufnahme. Genau darauf wird die Struktur ausgerichtet.',
        points: ['lokale Keywords', 'Google Business Unterstützung', 'Anfrage-Fokus'],
      },
    ],
  },
  'website-erstellen-lassen': {
    eyebrow: 'Website erstellen lassen',
    h1: 'Website erstellen lassen - professionell, modern und verständlich',
    lead:
      'Lassen Sie eine Website erstellen, die nicht nur gut aussieht, sondern Leistungen klar erklärt und Anfragen erleichtert.',
    cta: 'Projekt unverbindlich besprechen',
    sections: [
      {
        title: 'Warum eine professionelle Website wichtig ist',
        text:
          'Viele Kunden prüfen ein Unternehmen zuerst online. Eine klare Website macht den nächsten Schritt einfacher.',
        points: ['professioneller Eindruck', 'klare Kontaktwege', 'bessere mobile Nutzung'],
      },
      {
        title: 'Was eine gute Unternehmenswebsite braucht',
        text:
          'Struktur, schnelle Ladezeit, gute Texte und eindeutige Call-to-Actions sind wichtiger als reine Effekte.',
        points: ['Startseite', 'Leistungsseiten', 'Kontaktformular'],
      },
      {
        title: 'Leistungsübersicht',
        text:
          'Von der kompakten Landingpage bis zur Business Website kann das Projekt passend zum Bedarf aufgebaut werden.',
        points: ['Landingpage', 'Business Website', 'Website + Lead-System'],
      },
    ],
  },
  'seo-hildesheim': {
    eyebrow: 'SEO Hildesheim',
    h1: 'SEO Hildesheim - besser gefunden werden',
    lead:
      'SEO-Grundstruktur für lokale Unternehmen: klare Seiten, lokale Keywords, schnelle Technik und verständliche Inhalte.',
    cta: 'SEO-Basis prüfen lassen',
    sections: [
      {
        title: 'Was bedeutet SEO für lokale Unternehmen?',
        text:
          'Lokale SEO hilft dabei, bei passenden Suchanfragen sichtbarer zu werden und Nutzer auf die richtige Seite zu führen.',
        points: ['lokale Suchbegriffe', 'saubere Seitenstruktur', 'klare Meta-Daten'],
      },
      {
        title: 'Technische SEO-Basis',
        text:
          'Sitemap, robots.txt, strukturierte Daten, schnelle Ladezeiten und eindeutige Überschriften bilden das Fundament.',
        points: ['Sitemap und robots.txt', 'Schema.org', 'Core Web Vitals'],
      },
      {
        title: 'Content-Struktur',
        text:
          'Jede wichtige Leistung braucht eine verständliche Seite mit Nutzen, Ablauf und klarer Kontaktmöglichkeit.',
        points: ['Leistungsseiten', 'FAQ', 'interne Verlinkung'],
      },
    ],
  },
  'lead-systeme': {
    eyebrow: 'Lead-Systeme',
    h1: 'Lead-Systeme für lokale Unternehmen',
    lead:
      'Mehr Anfragen statt nur Besucher: Kontaktformulare, Anfrageprozesse und Automatisierung für bessere Kundenkommunikation.',
    cta: 'Lead-System anfragen',
    sections: [
      {
        title: 'Mehr Anfragen statt nur Besucher',
        text:
          'Ein Lead-System verbindet Website, Formular, Tracking und Nachverfolgung zu einem klaren Prozess.',
        points: ['Anfrage-Fokus', 'qualifizierte Leads', 'schnelle Rückmeldung'],
      },
      {
        title: 'Kontaktformulare und Anfragewege',
        text:
          'Formulare sollten nur die wichtigsten Daten abfragen und den Nutzer schnell zum Absenden bringen.',
        points: ['Name und Kontakt', 'gewünschte Leistung', 'Nachricht oder Ziel'],
      },
      {
        title: 'Automatisierung und CRM-Idee',
        text:
          'Nach dem Absenden können Anfragen strukturiert gesammelt, priorisiert und für die nächste Antwort vorbereitet werden.',
        points: ['Lead Intake', 'E-Mail Benachrichtigung', 'optionale CRM-Anbindung'],
      },
    ],
  },
  'websites-fuer-handwerker': {
    eyebrow: 'Website für Handwerker',
    h1: 'Website für Handwerker',
    lead:
      'Moderne Websites für Handwerksbetriebe mit klaren Leistungen, Referenzen, lokaler SEO-Struktur und Anfrage-Fokus.',
    cta: 'Website modernisieren lassen',
    sections: [
      {
        title: 'Warum Handwerker eine starke Website brauchen',
        text:
          'Kunden wollen schnell sehen, welche Leistungen angeboten werden, wo der Betrieb aktiv ist und wie Kontakt möglich ist.',
        points: ['Leistungen klar erklären', 'Region sichtbar machen', 'Vertrauen aufbauen'],
      },
      {
        title: 'Leistungen klar präsentieren',
        text:
          'Für wichtige Arbeiten können eigene Abschnitte oder Seiten entstehen, damit Kunden genau das passende Angebot finden.',
        points: ['Reparatur', 'Installation', 'Wartung und Beratung'],
      },
      {
        title: 'Lokale Auffindbarkeit',
        text:
          'Die Website wird auf lokale Suchanfragen und Kontaktwege ausgerichtet, damit Interessenten aus der Region schneller anfragen.',
        points: ['Webdesign Hildesheim', 'Website für Handwerker', 'lokale SEO-Struktur'],
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h1: 'Häufige Fragen',
    lead:
      'Antworten auf typische Fragen zu Webdesign, Website-Erstellung, SEO, Kosten, Dauer und Zusammenarbeit mit VS Web Studio.',
    cta: 'Weitere Frage stellen',
    sections: [
      {
        title: 'Wie lange dauert die Erstellung einer Website?',
        text:
          'Das hängt vom Umfang ab. Eine kompakte Landingpage ist schneller fertig als eine mehrseitige Unternehmenswebsite mit Texten, Formularen und SEO-Struktur.',
        points: ['Umfang', 'Inhalte', 'Feedbackgeschwindigkeit'],
      },
      {
        title: 'Was kostet eine Website?',
        text:
          'Ohne offiziellen Festpreis wird transparent mit Preis auf Anfrage gearbeitet. Der Preis hängt von Seitenanzahl, Funktionen, Texten und Integrationen ab.',
        points: ['Landingpage', 'Business Website', 'Website + Lead-System'],
      },
      {
        title: 'Ist SEO enthalten?',
        text:
          'Eine SEO-Grundstruktur kann direkt eingeplant werden: technische Basis, Meta-Daten, Überschriften, lokale Keywords und klare Seitenstruktur.',
        points: ['Meta-Daten', 'Sitemap', 'lokale Keywords'],
      },
      {
        title: 'Arbeitet VS Web Studio nur in Hildesheim?',
        text:
          'Der lokale Fokus liegt auf Hildesheim und Niedersachsen. Projekte können aber auch deutschlandweit online umgesetzt werden.',
        points: ['Hildesheim', 'Niedersachsen', 'deutschlandweit online'],
      },
    ],
  },
};

const SignalRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const LandingHeroSection = styled(HeroSection)<{ $backgroundImage?: string }>`
  position: relative;
  overflow: hidden;
  width: 100vw;
  min-height: ${({ $backgroundImage }) => ($backgroundImage ? 'calc(100svh - 76px)' : 'auto')};
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding:
    ${({ $backgroundImage }) => ($backgroundImage ? 'clamp(88px, 12vh, 132px)' : '72px')}
    max(var(--gutter), calc((100vw - 1320px) / 2 + var(--gutter)));
  align-content: center;
  isolation: isolate;
  border-bottom: ${({ $backgroundImage }) => ($backgroundImage ? '1px solid rgba(255, 255, 255, 0.12)' : '0')};

  ${({ $backgroundImage }) =>
    $backgroundImage
      ? `
    background-image:
      linear-gradient(90deg, rgba(5, 8, 15, 0.92) 0%, rgba(5, 8, 15, 0.76) 38%, rgba(5, 8, 15, 0.34) 72%, rgba(5, 8, 15, 0.68) 100%),
      linear-gradient(180deg, rgba(5, 8, 15, 0.38) 0%, rgba(5, 8, 15, 0.22) 48%, rgba(5, 8, 15, 0.82) 100%),
      url(${$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `
      : ''}

  &::after {
    content: ${({ $backgroundImage }) => ($backgroundImage ? "''" : 'none')};
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      radial-gradient(circle at 18% 24%, rgba(255, 197, 111, 0.24), transparent 34%),
      radial-gradient(circle at 72% 70%, rgba(70, 132, 255, 0.18), transparent 38%);
    mix-blend-mode: screen;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h1 {
    text-shadow: ${({ $backgroundImage }) => ($backgroundImage ? '0 18px 46px rgba(0, 0, 0, 0.72)' : 'none')};
  }

  p {
    text-shadow: ${({ $backgroundImage }) => ($backgroundImage ? '0 10px 28px rgba(0, 0, 0, 0.62)' : 'none')};
  }

  @media (max-width: 767px) {
    min-height: ${({ $backgroundImage }) => ($backgroundImage ? 'calc(100svh - 66px)' : 'auto')};
    padding:
      ${({ $backgroundImage }) => ($backgroundImage ? 'clamp(72px, 12vh, 104px)' : '48px')}
      var(--gutter);
    background-position: center;
  }
`;

const Signal = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 12px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
`;

const LandingCard = styled(Card)`
  min-height: 320px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.015)),
    rgba(11, 15, 27, 0.82);

  h2 {
    max-width: 15ch;
  }
`;

const PointList = styled.ul`
  display: grid;
  gap: 12px;
  margin-top: 18px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.45;
  }

  svg {
    color: #ffd08a;
    margin-top: 4px;
    flex: 0 0 auto;
  }
`;

const LocalLandingPage: React.FC<{ pageId: PageId }> = ({ pageId }) => {
  const { t } = useTranslation();
  const fallbackPage = localLandingPages[pageId];
  const translatedPage = t(`seoLanding.pages.${pageId}`, {
    returnObjects: true,
    defaultValue: fallbackPage,
  });
  const page = isLandingPageData(translatedPage) ? translatedPage : fallbackPage;
  const translatedSignals = t('seoLanding.signals', {
    returnObjects: true,
    defaultValue: fallbackSignals,
  });
  const signals = isStringArray(translatedSignals) ? translatedSignals : fallbackSignals;
  const heroBackground = heroBackgrounds[pageId];

  if (!page) {
    return <Navigate to='/' replace />;
  }

  return (
    <LandingPageRoot $fullHero={Boolean(heroBackground)}>
      <PageContainer>
        <LandingHeroSection $backgroundImage={heroBackground}>
          <Muted>{page.eyebrow}</Muted>
          <h1>{page.h1}</h1>
          <p>{page.lead}</p>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'>
              <FaArrowRight /> {page.cta}
            </PrimaryButtonLink>
          </ButtonRow>
          <SignalRow aria-label={t('seoLanding.signalsAria', { defaultValue: 'Leistungsbereiche' })}>
            {signals.map((signal, index) => {
              const Icon = signalIcons[index] ?? FaCheckCircle;

              return (
                <Signal key={signal}>
                  <Icon /> {signal}
                </Signal>
              );
            })}
          </SignalRow>
        </LandingHeroSection>

        <Section>
          <Grid2>
            {page.sections.map(section => (
              <LandingCard key={section.title}>
                <h2>{section.title}</h2>
                <Muted>{section.text}</Muted>
                <PointList>
                  {section.points.map(point => (
                    <li key={point}>
                      <FaCheckCircle /> {point}
                    </li>
                  ))}
                </PointList>
              </LandingCard>
            ))}
          </Grid2>
        </Section>

        <Section>
          <Card>
            <h2>{t('seoLanding.finalCta.title', { defaultValue: 'Kostenlose Erstberatung anfragen' })}</h2>
            <Muted>
              {t('seoLanding.finalCta.text', {
                defaultValue:
                  'Beschreiben Sie kurz Ihre Branche, Ihr Ziel und ob bereits eine Website vorhanden ist. Danach kann der passende nächste Schritt vorgeschlagen werden.',
              })}
            </Muted>
            <ButtonRow>
              <PrimaryButtonLink to='/kontakt'>
                <FaArrowRight /> {t('seoLanding.finalCta.button', { defaultValue: 'Anfrage senden' })}
              </PrimaryButtonLink>
            </ButtonRow>
          </Card>
        </Section>
      </PageContainer>
    </LandingPageRoot>
  );
};

export default LocalLandingPage;
