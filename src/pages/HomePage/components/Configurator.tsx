import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Segmented from './Segmented';
import { segmentData } from './homePageData';

type OfferResult =
  | { isComplete: false }
  | {
    isComplete: true;
    pack: 'Starter' | 'Business';
    bullets: string[];
    totalFrom: number;
    totalTo: number;
    supportMonthly: number;
    supportYearlyRaw: number;
    supportYearly: number;
    cta: string;
  };

const PRICE_BY_GOAL: Record<string, number> = {
  leads: 576,
  calls: 558,
  booking: 630,
  other: 180,
};

const PRICE_BY_INTEGRATION: Record<string, number> = {
  booking: 108,
  crm: 153,
  chat: 81,
  payments: 189,
  other: 45,
};

const PRICE_BY_ADS: Record<string, number> = {
  none: 20,
  meta: 108,
  google: 135,
  other: 25,
};

const PRICE_BY_TERM: Record<string, number> = {
  'up-to-7': 198,
  '7-14': 153,
  '14-21': 81,
  '21-30': 35,
  other: 30,
};

const PRICE_BY_CONTENT: Record<string, number> = {
  has: 35,
  copy: 117,
  other: 35,
};

const PRICE_BY_LANGUAGES: Record<string, number> = {
  basic: 25,
  multi: 135,
  other: 25,
};

const PRICE_BY_HOSTING: Record<string, number> = {
  shared: 30,
  vps: 85,
  managed: 120,
  other: 30,
};

const PRICE_BY_DOMAIN: Record<string, number> = {
  'new-domain': 25,
  'existing-domain': 20,
  transfer: 45,
  other: 25,
};

const PRICE_BY_PAGES: Record<string, number> = {
  one: 70,
  'up-to-3': 117,
  'five-plus': 189,
  other: 70,
};

const PRICE_BY_SEO: Record<string, number> = {
  base: 20,
  extended: 126,
  other: 20,
};

const MAX_BY_GOAL: Record<string, number> = {
  leads: 576,
  calls: 558,
  booking: 630,
  other: 320,
};

const MAX_BY_INTEGRATION: Record<string, number> = {
  booking: 108,
  crm: 153,
  chat: 81,
  payments: 189,
  other: 120,
};

const MAX_BY_ADS: Record<string, number> = {
  none: 20,
  meta: 108,
  google: 135,
  other: 90,
};

const MAX_BY_TERM: Record<string, number> = {
  'up-to-7': 198,
  '7-14': 153,
  '14-21': 81,
  '21-30': 35,
  other: 120,
};

const MAX_BY_CONTENT: Record<string, number> = {
  has: 35,
  copy: 117,
  other: 90,
};

const MAX_BY_LANGUAGES: Record<string, number> = {
  basic: 25,
  multi: 135,
  other: 90,
};

const MAX_BY_HOSTING: Record<string, number> = {
  shared: 30,
  vps: 85,
  managed: 120,
  other: 90,
};

const MAX_BY_DOMAIN: Record<string, number> = {
  'new-domain': 25,
  'existing-domain': 20,
  transfer: 45,
  other: 90,
};

const MAX_BY_PAGES: Record<string, number> = {
  one: 70,
  'up-to-3': 117,
  'five-plus': 189,
  other: 170,
};

const MAX_BY_SEO: Record<string, number> = {
  base: 20,
  extended: 126,
  other: 90,
};

const LAUNCH_PRICE_MIN = 600;
const LAUNCH_PRICE_MAX = 900;
const LAUNCH_PRICE_SCALE = 0.42;
const LAUNCH_PRICE_STEP = 10;

const normalizeLaunchPrice = (value: number) =>
  Math.min(
    LAUNCH_PRICE_MAX,
    Math.max(LAUNCH_PRICE_MIN, Math.round((value * LAUNCH_PRICE_SCALE) / LAUNCH_PRICE_STEP) * LAUNCH_PRICE_STEP)
  );

const labelFallbacks: Record<string, string> = {
  goal: 'Ziel',
  integrations: 'Integrationen',
  ads: 'Werbung',
  term: 'Zeitrahmen',
  content: 'Content-Level',
  languages: 'Sprachen',
  hosting: 'Hosting',
  domain: 'Domain',
  pages: 'Seiten',
  seo: 'SEO',
};

const optionFallbacks: Record<string, Record<string, string>> = {
  goal: { leads: 'Leads', calls: 'Anrufe', booking: 'Buchungen', other: 'Andere' },
  integrations: { booking: 'Buchung', crm: 'CRM', chat: 'Chat', payments: 'Zahlungen', other: 'Andere' },
  ads: { none: 'Ohne Werbung', meta: 'Meta', google: 'Google', other: 'Andere' },
  term: { 'up-to-7': 'Bis 1 Woche', '7-14': '7-14 Tage', '14-21': '14-21 Tage', '21-30': '21-30 Tage', other: 'Andere' },
  content: { has: 'Texte vorhanden', copy: 'Copywriting ötig', other: 'Andere' },
  languages: { basic: '1 Sprache', multi: '2+ Sprachen', other: 'Andere' },
  hosting: { shared: 'Shared Hosting', vps: 'VPS', managed: 'Managed Hosting', other: 'Andere' },
  domain: { 'new-domain': 'Neue Domain', 'existing-domain': 'Domain vorhanden', transfer: 'Domain-Transfer', other: 'Andere' },
  pages: { one: '1 Seite', 'up-to-3': 'Bis 3 Seiten', 'five-plus': '5+ Seiten', other: 'Andere' },
  seo: { base: 'SEO Base', extended: 'SEO Extended', other: 'Andere' },
};

const Configurator: React.FC = () => {
  const { t } = useTranslation();
  const [goal, setGoal] = useState<string[]>([]);
  const [integration, setIntegration] = useState<string[]>([]);
  const [ads, setAds] = useState<string[]>([]);
  const [term, setTerm] = useState<string[]>([]);
  const [content, setContent] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [hosting, setHosting] = useState<string[]>([]);
  const [domain, setDomain] = useState<string[]>([]);
  const [pages, setPages] = useState<string[]>([]);
  const [seo, setSeo] = useState<string[]>([]);

  const resetAll = () => {
    setGoal([]);
    setIntegration([]);
    setAds([]);
    setTerm([]);
    setContent([]);
    setLanguages([]);
    setHosting([]);
    setDomain([]);
    setPages([]);
    setSeo([]);
  };

  const translate = (key: string, fallback: string, options?: Record<string, unknown>) =>
    t(key, { defaultValue: fallback, ...options });

  const getOptionFallback = (group: string, value: string) => optionFallbacks[group]?.[value] ?? value;

  const translatedSegmentData = useMemo(
    () => ({
      goal: segmentData.goal.map(option => ({ ...option, title: translate(option.title, getOptionFallback('goal', option.value)) })),
      integrations: segmentData.integrations.map(option => ({
        ...option,
        title: translate(option.title, getOptionFallback('integrations', option.value)),
      })),
      ads: segmentData.ads.map(option => ({ ...option, title: translate(option.title, getOptionFallback('ads', option.value)) })),
      term: segmentData.term.map(option => ({ ...option, title: translate(option.title, getOptionFallback('term', option.value)) })),
      content: segmentData.content.map(option => ({
        ...option,
        title: translate(option.title, getOptionFallback('content', option.value)),
      })),
      languages: segmentData.languages.map(option => ({
        ...option,
        title: translate(option.title, getOptionFallback('languages', option.value)),
      })),
      hosting: segmentData.hosting.map(option => ({
        ...option,
        title: translate(option.title, getOptionFallback('hosting', option.value)),
      })),
      domain: segmentData.domain.map(option => ({
        ...option,
        title: translate(option.title, getOptionFallback('domain', option.value)),
      })),
      pages: segmentData.pages.map(option => ({ ...option, title: translate(option.title, getOptionFallback('pages', option.value)) })),
      seo: segmentData.seo.map(option => ({ ...option, title: translate(option.title, getOptionFallback('seo', option.value)) })),
    }),
    [t]
  );

  const offer = useMemo<OfferResult>(() => {
    const isComplete = [goal, integration, ads, term, content, languages, hosting, domain, pages, seo].every(
      selection => selection.length > 0
    );

    if (!isComplete) {
      return { isComplete: false };
    }

    const sumPrices = (values: string[], priceMap: Record<string, number>) =>
      values.reduce((sum, item) => sum + (priceMap[item] ?? 0), 0);

    const getLabels = (values: string[], options: readonly { value: string; title: string }[]) =>
      values.map(value => options.find(option => option.value === value)?.title || value).join(', ');

    const rawTotalFrom =
      sumPrices(goal, PRICE_BY_GOAL) +
      sumPrices(integration, PRICE_BY_INTEGRATION) +
      sumPrices(ads, PRICE_BY_ADS) +
      sumPrices(term, PRICE_BY_TERM) +
      sumPrices(content, PRICE_BY_CONTENT) +
      sumPrices(languages, PRICE_BY_LANGUAGES) +
      sumPrices(hosting, PRICE_BY_HOSTING) +
      sumPrices(domain, PRICE_BY_DOMAIN) +
      sumPrices(pages, PRICE_BY_PAGES) +
      sumPrices(seo, PRICE_BY_SEO);
    const rawTotalTo =
      sumPrices(goal, MAX_BY_GOAL) +
      sumPrices(integration, MAX_BY_INTEGRATION) +
      sumPrices(ads, MAX_BY_ADS) +
      sumPrices(term, MAX_BY_TERM) +
      sumPrices(content, MAX_BY_CONTENT) +
      sumPrices(languages, MAX_BY_LANGUAGES) +
      sumPrices(hosting, MAX_BY_HOSTING) +
      sumPrices(domain, MAX_BY_DOMAIN) +
      sumPrices(pages, MAX_BY_PAGES) +
      sumPrices(seo, MAX_BY_SEO);
    const totalFrom = normalizeLaunchPrice(rawTotalFrom);
    const totalTo = Math.max(totalFrom, normalizeLaunchPrice(rawTotalTo));

    const businessSignals =
      languages.includes('multi') ||
      pages.includes('five-plus') ||
      seo.includes('extended') ||
      ads.some(item => item !== 'none' && item !== 'other') ||
      integration.includes('crm') ||
      integration.includes('payments');

    const pack: 'Starter' | 'Business' = rawTotalTo > 1400 || businessSignals ? 'Business' : 'Starter';
    const supportMonthly = pack === 'Business' ? 86 : 62;
    const supportYearlyRaw = supportMonthly * 12;
    const supportYearly = Math.round(supportYearlyRaw * 0.7);

    const bullets = [
      translate('home.configurator.bullets.prototype', 'Prototyp und Struktur mit Fokus auf Anfragen'),
      translate('home.configurator.bullets.goal', 'Ziele: {{value}}', { value: getLabels(goal, translatedSegmentData.goal) }),
      translate('home.configurator.bullets.integrations', 'Integrationen: {{value}}', {
        value: getLabels(integration, translatedSegmentData.integrations),
      }),
      translate('home.configurator.bullets.term', 'Zeitrahmen: {{value}}', { value: getLabels(term, translatedSegmentData.term) }),
      translate('home.configurator.bullets.hosting', 'Hosting: {{value}}', { value: getLabels(hosting, translatedSegmentData.hosting) }),
      translate('home.configurator.bullets.domain', 'Domain: {{value}}', { value: getLabels(domain, translatedSegmentData.domain) }),
      translate('home.configurator.bullets.pages', 'Seiten: {{value}}', { value: getLabels(pages, translatedSegmentData.pages) }),
      translate('home.configurator.bullets.analytics', 'GA4 und Event-Tracking für Formulare/Kontakte'),
      content.includes('copy')
        ? translate('home.configurator.bullets.copy_true', 'Unterstützung bei Texten und Offer')
        : translate('home.configurator.bullets.copy_false', 'Wir arbeiten mit Ihren vorhandenen Texten'),
      translate('home.configurator.bullets.market_note', 'Orientierungspreis unter marktüblichem Niveau für kleine Unternehmen'),
    ];

    return {
      isComplete: true,
      pack,
      bullets,
      totalFrom,
      totalTo,
      supportMonthly,
      supportYearlyRaw,
      supportYearly,
      cta: '/kontakt',
    };
  }, [ads, content, domain, goal, hosting, integration, languages, pages, seo, t, term, translatedSegmentData]);

  const contactBrief = useMemo(() => {
    if (!offer.isComplete) return '';

    const labels = (values: string[], options: readonly { value: string; title: string }[]) =>
      values.map(value => options.find(option => option.value === value)?.title || value).join(', ');

    const formatPrice =
      offer.totalFrom === offer.totalTo
        ? `${offer.totalFrom} EUR`
        : `${offer.totalFrom} - ${offer.totalTo} EUR`;

    return [
      translate('home.configurator.brief.title', 'Brief aus dem Angebots-Konfigurator:'),
      translate('home.configurator.brief.goal', 'Ziel: {{value}}', { value: labels(goal, translatedSegmentData.goal) }),
      translate('home.configurator.brief.integrations', 'Integrationen: {{value}}', {
        value: labels(integration, translatedSegmentData.integrations),
      }),
      translate('home.configurator.brief.ads', 'Werbung: {{value}}', { value: labels(ads, translatedSegmentData.ads) }),
      translate('home.configurator.brief.term', 'Zeitrahmen: {{value}}', { value: labels(term, translatedSegmentData.term) }),
      translate('home.configurator.brief.content', 'Content: {{value}}', { value: labels(content, translatedSegmentData.content) }),
      translate('home.configurator.brief.languages', 'Sprachen: {{value}}', {
        value: labels(languages, translatedSegmentData.languages),
      }),
      translate('home.configurator.brief.hosting', 'Hosting: {{value}}', {
        value: labels(hosting, translatedSegmentData.hosting),
      }),
      translate('home.configurator.brief.domain', 'Domain: {{value}}', { value: labels(domain, translatedSegmentData.domain) }),
      translate('home.configurator.brief.pages', 'Seiten: {{value}}', { value: labels(pages, translatedSegmentData.pages) }),
      translate('home.configurator.brief.seo', 'SEO: {{value}}', { value: labels(seo, translatedSegmentData.seo) }),
      translate('home.configurator.brief.launch_price', 'Startpreis: {{value}}', { value: formatPrice }),
      translate('home.configurator.brief.support_monthly', 'Support / Monat: {{value}}', {
        value: `${offer.supportMonthly} EUR`,
      }),
      translate('home.configurator.brief.support_yearly', 'Support / Jahr (-30%): {{value}}', {
        value: `${offer.supportYearly} EUR`,
      }),
    ].join('\n');
  }, [ads, content, domain, goal, hosting, integration, languages, offer, pages, seo, t, term, translatedSegmentData]);

  return (
    <div className='card configurator-card'>
      <Segmented
        label={translate('home.configurator.labels.goal', labelFallbacks.goal)}
        value={goal}
        options={translatedSegmentData.goal}
        onChange={setGoal}
      />
      <Segmented
        label={translate('home.configurator.labels.integrations', labelFallbacks.integrations)}
        value={integration}
        options={translatedSegmentData.integrations}
        onChange={setIntegration}
      />
      <Segmented
        label={translate('home.configurator.labels.ads', labelFallbacks.ads)}
        value={ads}
        options={translatedSegmentData.ads}
        onChange={setAds}
      />
      <Segmented
        label={translate('home.configurator.labels.term', labelFallbacks.term)}
        value={term}
        options={translatedSegmentData.term}
        onChange={setTerm}
      />
      <Segmented
        label={translate('home.configurator.labels.content', labelFallbacks.content)}
        value={content}
        options={translatedSegmentData.content}
        onChange={setContent}
      />
      <Segmented
        label={translate('home.configurator.labels.languages', labelFallbacks.languages)}
        value={languages}
        options={translatedSegmentData.languages}
        onChange={setLanguages}
      />
      <Segmented
        label={translate('home.configurator.labels.hosting', labelFallbacks.hosting)}
        value={hosting}
        options={translatedSegmentData.hosting}
        onChange={setHosting}
      />
      <Segmented
        label={translate('home.configurator.labels.domain', labelFallbacks.domain)}
        value={domain}
        options={translatedSegmentData.domain}
        onChange={setDomain}
      />
      <Segmented
        label={translate('home.configurator.labels.pages', labelFallbacks.pages)}
        value={pages}
        options={translatedSegmentData.pages}
        onChange={setPages}
      />
      <Segmented
        label={translate('home.configurator.labels.seo', labelFallbacks.seo)}
        value={seo}
        options={translatedSegmentData.seo}
        onChange={setSeo}
      />

      <div className='offer'>
        <button type='button' className='btn btn-secondary reset-btn' onClick={resetAll}>
          {translate('home.configurator.reset', 'Alles zurücksetzen')}
        </button>
        {!offer.isComplete ? (
          <div className='offer-empty'>
            {translate(
              'home.configurator.empty',
              'Wählen Sie mindestens eine Option in jedem Block. Mehrfachauswahl ist möglich; bei "Andere" wird keine Zusatzgebühr berechnet.'
            )}
          </div>
        ) : (
          <>
            <div className='offer-title'>
              {translate('home.configurator.recommended', 'Empfohlen:')}{' '}
              <strong>
                {offer.pack === 'Business'
                  ? translate('home.configurator.pack.business', 'Business')
                  : translate('home.configurator.pack.starter', 'Starter')}
              </strong>
            </div>
            <p className='offer-price'>
              {translate('home.configurator.launchPrice', 'Startpreis:')}{' '}
              <strong>
                {offer.totalFrom === offer.totalTo
                  ? `${offer.totalFrom} EUR`
                  : `${offer.totalFrom} - ${offer.totalTo} EUR`}
              </strong>
            </p>
            <ul className='offer-list'>
              {offer.bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className='support-grid'>
              <article className='support-card'>
                <h3>{translate('home.configurator.supportMonthly', 'Support / Monat')}</h3>
                <p>
                  <strong>{offer.supportMonthly} EUR</strong>
                </p>
              </article>
              <article className='support-card'>
                <h3>{translate('home.configurator.supportYearly', 'Support / Jahr (-30%)')}</h3>
                <p>
                  <strong>{offer.supportYearly} EUR</strong> <span className='support-old'>{offer.supportYearlyRaw} EUR</span>
                </p>
              </article>
            </div>
            <NavLink to={offer.cta} state={{ prefillNeed: contactBrief }} className='btn btn-primary offer-cta'>
              {translate('home.configurator.cta', 'Kontaktanfrage und exakter Kostenvoranschlag')}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Configurator;
