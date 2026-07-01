import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  ButtonRow,
  Card,
  Grid2,
  Grid3,
  Muted,
  PrimaryButtonLink,
  Section,
} from '../../shared/styles/PagePrimitives.styles';

type IndustryItem = {
  title: string;
  text: string;
};

type ProcessStep = [string, string];

const fallbackIndustries: IndustryItem[] = [
  {
    title: 'Handwerker',
    text: 'Klare Leistungsseiten, schnelle Kontaktmöglichkeiten und lokale SEO-Struktur für mehr Anfragen aus der Region.',
  },
  {
    title: 'Restaurants & Cafés',
    text: 'Moderne Präsentation von Speisekarte, Öffnungszeiten, Standort, Reservierung und besonderen Angeboten.',
  },
  {
    title: 'Praxen & Studios',
    text: 'Vertrauenswürdige Website-Struktur für Zahnarztpraxen, Kosmetikstudios, Friseure, Coaches und Berater.',
  },
  {
    title: 'Dienstleister',
    text: 'Professionelle Online-Präsenz mit klaren Leistungen, Kontaktformular und Anfrage-Fokus.',
  },
];

const fallbackIncludedItems = [
  'Responsive Design für Smartphone, Tablet und Desktop',
  'SEO-Grundstruktur',
  'schnelle Ladezeit',
  'klare Leistungsseiten',
  'Kontaktformular',
  'Google Maps / Google Business Einbindung',
  'moderne Texte und klare Call-to-Actions',
  'technische Übergabe',
  'optionale Lead-Systeme und Automatisierung',
];

const fallbackProcessSteps: ProcessStep[] = [
  ['Kurzes Erstgespräch', 'Wir klären Ziel, Branche, Budget und wichtigste Funktionen.'],
  ['Struktur & Inhalte', 'Wir planen Seitenstruktur, Texte, Kontaktwege und SEO-Basis.'],
  ['Design & Umsetzung', 'Die Website wird modern, mobilfreundlich und verständlich aufgebaut.'],
  ['Test & Veröffentlichung', 'Wir prüfen Darstellung, Formulare, Geschwindigkeit und SEO-Grundlagen.'],
  ['Optimierung', 'Nach dem Start können Inhalte, SEO und Lead-Prozesse weiter verbessert werden.'],
];

const fallbackWhyItems = [
  'Fokus auf lokale Unternehmen',
  'klare Kommunikation',
  'moderne technische Umsetzung',
  'SEO-Basis von Anfang an',
  'verständliche Prozesse',
  'keine unnötig komplizierten Lösungen',
];

const CtaCard = styled(Card)`
  margin-top: 28px;
  border-color: rgba(255, 197, 111, 0.45);
  background:
    linear-gradient(135deg, rgba(255, 176, 74, 0.08), rgba(46, 132, 255, 0.08)),
    rgba(12, 17, 30, 0.88);
`;

const LocalSection = styled(Section)`
  position: relative;

  > h2 {
    max-width: 760px;
    margin-bottom: 14px;
    font-size: clamp(30px, 4vw, 52px);
    line-height: 1.08;
  }

  > p {
    max-width: 860px;
    font-size: clamp(16px, 1.4vw, 19px);
  }
`;

const TextCard = styled(Card)`
  min-height: 180px;

  svg {
    color: #ffd08a;
    flex: 0 0 auto;
  }

  li {
    display: flex;
    gap: 8px;
    align-items: flex-start;
  }
`;

const ChecklistCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  min-height: 88px;

  svg {
    margin-top: 4px;
    color: #ffd08a;
    flex: 0 0 auto;
  }
`;

const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  margin-bottom: 12px;
  color: #101321;
  background: linear-gradient(120deg, #f7cb84, #ffdca8);
  font-weight: 800;
`;

const LocalSeoSections: React.FC = () => {
  const { t } = useTranslation();
  const industries = t('home.localSeo.industries', {
    returnObjects: true,
    defaultValue: fallbackIndustries,
  }) as IndustryItem[];
  const includedItems = t('home.localSeo.includedItems', {
    returnObjects: true,
    defaultValue: fallbackIncludedItems,
  }) as string[];
  const collaborationSteps = t('home.localSeo.processSteps', {
    returnObjects: true,
    defaultValue: fallbackProcessSteps,
  }) as ProcessStep[];
  const whyItems = t('home.localSeo.whyItems', {
    returnObjects: true,
    defaultValue: fallbackWhyItems,
  }) as string[];

  return (
    <>
      <LocalSection>
        <h2>{t('home.localSeo.audienceTitle', { defaultValue: 'Websites für lokale Unternehmen' })}</h2>
        <Muted>
          {t('home.localSeo.audienceLead', {
            defaultValue:
              'Wir helfen kleinen und lokalen Unternehmen, online professioneller aufzutreten und mehr qualifizierte Anfragen zu erhalten.',
          })}
        </Muted>
        <Grid2>
          {industries.map(item => (
            <TextCard key={item.title}>
              <h3>{item.title}</h3>
              <Muted>{item.text}</Muted>
            </TextCard>
          ))}
        </Grid2>
        <CtaCard>
          <h3>{t('home.localSeo.industryCtaTitle', { defaultValue: 'Ihre Branche ist nicht dabei?' })}</h3>
          <Muted>
            {t('home.localSeo.industryCtaText', {
              defaultValue:
                'Auch andere lokale Dienstleister können mit klarer Website-Struktur, Kontaktformular und lokaler Sichtbarkeit starten.',
            })}
          </Muted>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'>
              <FaArrowRight /> {t('home.localSeo.industryCta', { defaultValue: 'Projekt unverbindlich besprechen' })}
            </PrimaryButtonLink>
          </ButtonRow>
        </CtaCard>
      </LocalSection>

      <LocalSection>
        <h2>{t('home.localSeo.includedTitle', { defaultValue: 'Was Ihre Website enthalten kann' })}</h2>
        <Grid3 as='ul'>
          {includedItems.map(item => (
            <ChecklistCard as='li' key={item}>
              <FaCheckCircle /> {item}
            </ChecklistCard>
          ))}
        </Grid3>
        <CtaCard>
          <h3>{t('home.localSeo.includedCtaTitle', { defaultValue: 'Website mit klarem Anfrage-Fokus planen' })}</h3>
          <Muted>
            {t('home.localSeo.includedCtaText', {
              defaultValue:
                'Gemeinsam legen wir fest, welche Seiten, Formulare und Kontaktwege für Ihr Unternehmen wirklich sinnvoll sind.',
            })}
          </Muted>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'>
              <FaArrowRight /> {t('home.localSeo.includedCta', { defaultValue: 'Website modernisieren lassen' })}
            </PrimaryButtonLink>
          </ButtonRow>
        </CtaCard>
      </LocalSection>

      <LocalSection>
        <h2>{t('home.localSeo.processTitle', { defaultValue: 'So läuft die Zusammenarbeit' })}</h2>
        <Grid3 as='ol'>
          {collaborationSteps.map(([title, text], index) => (
            <TextCard as='li' key={title}>
              <StepNumber>{index + 1}</StepNumber>
              <h3>{title}</h3>
              <Muted>{text}</Muted>
            </TextCard>
          ))}
        </Grid3>
        <CtaCard>
          <h3>{t('home.localSeo.processCtaTitle', { defaultValue: 'Bereit für den ersten Schritt?' })}</h3>
          <Muted>
            {t('home.localSeo.processCtaText', {
              defaultValue: 'Ein kurzes Erstgespräch reicht, um Ziel, Umfang und nächsten Schritt sauber einzuordnen.',
            })}
          </Muted>
          <ButtonRow>
            <PrimaryButtonLink to='/kontakt'>
              <FaArrowRight /> {t('home.localSeo.processCta', { defaultValue: 'Kostenlose Erstberatung anfragen' })}
            </PrimaryButtonLink>
          </ButtonRow>
        </CtaCard>
      </LocalSection>

      <LocalSection>
        <h2>{t('home.localSeo.whyTitle', { defaultValue: 'Warum VS Web Studio?' })}</h2>
        <Muted>
          {t('home.localSeo.whyLead', {
            defaultValue:
              'Wir bauen Websites nicht nur für schöne Optik, sondern für klare Ergebnisse: Vertrauen, Sichtbarkeit und mehr Kundenanfragen.',
          })}
        </Muted>
        <Grid3 as='ul'>
          {whyItems.map(item => (
            <ChecklistCard as='li' key={item}>
              <FaCheckCircle /> {item}
            </ChecklistCard>
          ))}
        </Grid3>
      </LocalSection>
    </>
  );
};

export default LocalSeoSections;
