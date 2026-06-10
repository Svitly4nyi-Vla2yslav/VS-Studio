import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AI_MUSIC_PRICING, CONFIGURATOR_PRICING } from '../../../data/pricingCatalog';
import Segmented from './Segmented';
import { segmentData } from './homePageData';
import type { SegmentOption } from './types';

type WebsiteOfferResult =
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

type AiMusicOfferResult = {
  bullets: string[];
  total: number;
  packageName: string;
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
  other: 120,
  '21-30': 35,
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

const normalizeLaunchPrice = (value: number) =>
  Math.min(
    CONFIGURATOR_PRICING.launchMax,
    Math.max(
      CONFIGURATOR_PRICING.launchMin,
      Math.round((value * CONFIGURATOR_PRICING.launchScale) / CONFIGURATOR_PRICING.launchStep) *
        CONFIGURATOR_PRICING.launchStep
    )
  );

const labelFallbacks: Record<string, string> = {
  service: 'Service',
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
  songDuration: 'Song duration',
  songLanguage: 'Language',
  musicStyle: 'Music style',
  vocals: 'Vocals',
  fileFormat: 'File format',
  socialVersion: 'Social media version',
  extraRevision: 'Additional revision',
  expressDelivery: 'Express delivery',
};

const optionFallbacks: Record<string, Record<string, string>> = {
  service: { website: 'Website & lead system', aiMusic: 'AI Songs & Jingles' },
  goal: { leads: 'Leads', calls: 'Anrufe', booking: 'Buchungen', other: 'Andere' },
  integrations: { booking: 'Buchung', crm: 'CRM', chat: 'Chat', payments: 'Zahlungen', other: 'Andere' },
  ads: { none: 'Ohne Werbung', meta: 'Meta', google: 'Google', other: 'Andere' },
  term: { 'up-to-7': 'Bis 1 Woche', '7-14': '7-14 Tage', '14-21': '14-21 Tage', '21-30': '21-30 Tage', other: 'Andere' },
  content: { has: 'Texte vorhanden', copy: 'Copywriting noetig', other: 'Andere' },
  languages: { basic: '1 Sprache', multi: '2+ Sprachen', other: 'Andere' },
  hosting: { shared: 'Shared Hosting', vps: 'VPS', managed: 'Managed Hosting', other: 'Andere' },
  domain: { 'new-domain': 'Neue Domain', 'existing-domain': 'Domain vorhanden', transfer: 'Domain-Transfer', other: 'Andere' },
  pages: { one: '1 Seite', 'up-to-3': 'Bis 3 Seiten', 'five-plus': '5+ Seiten', other: 'Andere' },
  seo: { base: 'SEO Base', extended: 'SEO Extended', other: 'Andere' },
  songDuration: { '15': '15 sec', '30': '30 sec', '45': '45 sec', custom: 'Custom' },
  songLanguage: { en: 'English', de: 'German', 'en-de': 'English + German' },
  musicStyle: { pop: 'Pop', edm: 'EDM', hiphop: 'Hip-Hop', corporate: 'Corporate', funny: 'Funny', elegant: 'Elegant', other: 'Other' },
  vocals: { 'ai-vocal': 'AI vocal', instrumental: 'Instrumental only' },
  fileFormat: { mp3: 'MP3', 'mp3-wav': 'MP3 + WAV' },
  socialVersion: { no: 'No', yes: 'Yes' },
  extraRevision: { no: 'No', yes: 'Yes' },
  expressDelivery: { no: 'No', yes: 'Yes' },
};

const serviceOptions: readonly SegmentOption[] = [
  { value: 'website', title: 'home.configurator.options.service.website' },
  { value: 'aiMusic', title: 'home.configurator.options.service.aiMusic' },
];

const aiMusicSegmentData: Record<string, readonly SegmentOption[]> = {
  songDuration: [
    { value: '15', title: 'home.configurator.options.aiMusic.duration.15' },
    { value: '30', title: 'home.configurator.options.aiMusic.duration.30' },
    { value: '45', title: 'home.configurator.options.aiMusic.duration.45' },
    { value: 'custom', title: 'home.configurator.options.aiMusic.duration.custom' },
  ],
  songLanguage: [
    { value: 'en', title: 'home.configurator.options.aiMusic.language.en' },
    { value: 'de', title: 'home.configurator.options.aiMusic.language.de' },
    { value: 'en-de', title: 'home.configurator.options.aiMusic.language.en_de' },
  ],
  musicStyle: [
    { value: 'pop', title: 'home.configurator.options.aiMusic.style.pop' },
    { value: 'edm', title: 'home.configurator.options.aiMusic.style.edm' },
    { value: 'hiphop', title: 'home.configurator.options.aiMusic.style.hiphop' },
    { value: 'corporate', title: 'home.configurator.options.aiMusic.style.corporate' },
    { value: 'funny', title: 'home.configurator.options.aiMusic.style.funny' },
    { value: 'elegant', title: 'home.configurator.options.aiMusic.style.elegant' },
    { value: 'other', title: 'home.configurator.options.common.other' },
  ],
  vocals: [
    { value: 'ai-vocal', title: 'home.configurator.options.aiMusic.vocals.ai_vocal' },
    { value: 'instrumental', title: 'home.configurator.options.aiMusic.vocals.instrumental' },
  ],
  fileFormat: [
    { value: 'mp3', title: 'home.configurator.options.aiMusic.fileFormat.mp3' },
    { value: 'mp3-wav', title: 'home.configurator.options.aiMusic.fileFormat.mp3_wav' },
  ],
  socialVersion: [
    { value: 'no', title: 'home.configurator.options.common.no' },
    { value: 'yes', title: 'home.configurator.options.common.yes' },
  ],
  extraRevision: [
    { value: 'no', title: 'home.configurator.options.common.no' },
    { value: 'yes', title: 'home.configurator.options.common.yes' },
  ],
  expressDelivery: [
    { value: 'no', title: 'home.configurator.options.common.no' },
    { value: 'yes', title: 'home.configurator.options.common.yes' },
  ],
};

const getLastSelection = (next: string[], fallback: string) => [next[next.length - 1] ?? fallback];
const first = (value: string[], fallback: string) => value[0] ?? fallback;

const Configurator: React.FC = () => {
  const { t } = useTranslation();
  const [service, setService] = useState<string[]>(['website']);
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
  const [songDuration, setSongDuration] = useState<string[]>(['15']);
  const [songLanguage, setSongLanguage] = useState<string[]>(['en']);
  const [musicStyle, setMusicStyle] = useState<string[]>(['pop']);
  const [vocals, setVocals] = useState<string[]>(['ai-vocal']);
  const [fileFormat, setFileFormat] = useState<string[]>(['mp3']);
  const [socialVersion, setSocialVersion] = useState<string[]>(['no']);
  const [extraRevision, setExtraRevision] = useState<string[]>(['no']);
  const [expressDelivery, setExpressDelivery] = useState<string[]>(['no']);

  const activeService = first(service, 'website');

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
    setSongDuration(['15']);
    setSongLanguage(['en']);
    setMusicStyle(['pop']);
    setVocals(['ai-vocal']);
    setFileFormat(['mp3']);
    setSocialVersion(['no']);
    setExtraRevision(['no']);
    setExpressDelivery(['no']);
  };

  const translate = (key: string, fallback: string, options?: Record<string, unknown>) =>
    t(key, { defaultValue: fallback, ...options });

  const getOptionFallback = (group: string, value: string) => optionFallbacks[group]?.[value] ?? value;

  const translateOptions = (group: string, options: readonly SegmentOption[]) =>
    options.map(option => ({ ...option, title: translate(option.title, getOptionFallback(group, option.value)) }));

  const translatedServiceOptions = useMemo(() => translateOptions('service', serviceOptions), [t]);

  const translatedSegmentData = useMemo(
    () => ({
      goal: translateOptions('goal', segmentData.goal),
      integrations: translateOptions('integrations', segmentData.integrations),
      ads: translateOptions('ads', segmentData.ads),
      term: translateOptions('term', segmentData.term),
      content: translateOptions('content', segmentData.content),
      languages: translateOptions('languages', segmentData.languages),
      hosting: translateOptions('hosting', segmentData.hosting),
      domain: translateOptions('domain', segmentData.domain),
      pages: translateOptions('pages', segmentData.pages),
      seo: translateOptions('seo', segmentData.seo),
      songDuration: translateOptions('songDuration', aiMusicSegmentData.songDuration),
      songLanguage: translateOptions('songLanguage', aiMusicSegmentData.songLanguage),
      musicStyle: translateOptions('musicStyle', aiMusicSegmentData.musicStyle),
      vocals: translateOptions('vocals', aiMusicSegmentData.vocals),
      fileFormat: translateOptions('fileFormat', aiMusicSegmentData.fileFormat),
      socialVersion: translateOptions('socialVersion', aiMusicSegmentData.socialVersion),
      extraRevision: translateOptions('extraRevision', aiMusicSegmentData.extraRevision),
      expressDelivery: translateOptions('expressDelivery', aiMusicSegmentData.expressDelivery),
    }),
    [t]
  );

  const getLabels = (values: string[], options: readonly { value: string; title: string }[]) =>
    values.map(value => options.find(option => option.value === value)?.title || value).join(', ');

  const websiteOffer = useMemo<WebsiteOfferResult>(() => {
    const isComplete = [goal, integration, ads, term, content, languages, hosting, domain, pages, seo].every(
      selection => selection.length > 0
    );

    if (!isComplete) {
      return { isComplete: false };
    }

    const sumPrices = (values: string[], priceMap: Record<string, number>) =>
      values.reduce((sum, item) => sum + (priceMap[item] ?? 0), 0);

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
    const supportMonthly =
      pack === 'Business' ? CONFIGURATOR_PRICING.businessSupportMonthly : CONFIGURATOR_PRICING.starterSupportMonthly;
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
      translate('home.configurator.bullets.analytics', 'GA4 und Event-Tracking fuer Formulare/Kontakte'),
      content.includes('copy')
        ? translate('home.configurator.bullets.copy_true', 'Unterstuetzung bei Texten und Offer')
        : translate('home.configurator.bullets.copy_false', 'Wir arbeiten mit Ihren vorhandenen Texten'),
      translate('home.configurator.bullets.market_note', 'Orientierungspreis unter marktueblichem Niveau fuer kleine Unternehmen'),
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

  const aiMusicOffer = useMemo<AiMusicOfferResult>(() => {
    const duration = first(songDuration, '15') as keyof typeof AI_MUSIC_PRICING.baseByDuration;
    const language = first(songLanguage, 'en');
    const social = first(socialVersion, 'no');
    const revision = first(extraRevision, 'no');
    const express = first(expressDelivery, 'no');
    const base = AI_MUSIC_PRICING.baseByDuration[duration] ?? AI_MUSIC_PRICING.baseByDuration['15'];
    const total =
      base +
      (duration === 'custom' ? AI_MUSIC_PRICING.additional15Seconds : 0) +
      (language === 'en-de' ? AI_MUSIC_PRICING.additionalLanguageVersion : 0) +
      (social === 'yes' ? AI_MUSIC_PRICING.socialMediaCut : 0) +
      (revision === 'yes' ? AI_MUSIC_PRICING.extraRevision : 0) +
      (express === 'yes' ? AI_MUSIC_PRICING.expressDelivery : 0);

    const packageName =
      duration === '15'
        ? translate('home.configurator.aiMusic.pack.basic', 'Short AI Jingle')
        : duration === '30'
          ? translate('home.configurator.aiMusic.pack.standard', 'Business Promo Song')
          : translate('home.configurator.aiMusic.pack.premium', 'Full Brand Music Pack');

    const bullets = [
      translate('home.configurator.aiMusic.bullets.service', 'Custom AI-generated song, jingle or brand music'),
      translate('home.configurator.aiMusic.bullets.duration', 'Duration: {{value}}', {
        value: getLabels(songDuration, translatedSegmentData.songDuration),
      }),
      translate('home.configurator.aiMusic.bullets.language', 'Language: {{value}}', {
        value: getLabels(songLanguage, translatedSegmentData.songLanguage),
      }),
      translate('home.configurator.aiMusic.bullets.style', 'Music style: {{value}}', {
        value: getLabels(musicStyle, translatedSegmentData.musicStyle),
      }),
      translate('home.configurator.aiMusic.bullets.vocals', 'Vocals: {{value}}', {
        value: getLabels(vocals, translatedSegmentData.vocals),
      }),
      translate('home.configurator.aiMusic.bullets.format', 'File format: {{value}}', {
        value: getLabels(fileFormat, translatedSegmentData.fileFormat),
      }),
      social === 'yes'
        ? translate('home.configurator.aiMusic.bullets.social_true', 'Social media cut included')
        : translate('home.configurator.aiMusic.bullets.social_false', 'No separate social media cut'),
      express === 'yes'
        ? translate('home.configurator.aiMusic.bullets.express_true', 'Express delivery selected')
        : translate('home.configurator.aiMusic.bullets.express_false', 'Standard delivery'),
    ];

    return {
      bullets,
      total,
      packageName,
      cta: '/kontakt',
    };
  }, [
    expressDelivery,
    extraRevision,
    fileFormat,
    musicStyle,
    socialVersion,
    songDuration,
    songLanguage,
    t,
    translatedSegmentData,
    vocals,
  ]);

  const contactBrief = useMemo(() => {
    if (activeService === 'aiMusic') {
      return [
        translate('home.configurator.aiMusic.brief.title', 'Brief from the AI Songs & Jingles configurator:'),
        translate('home.configurator.aiMusic.brief.package', 'Package: {{value}}', { value: aiMusicOffer.packageName }),
        translate('home.configurator.aiMusic.brief.duration', 'Duration: {{value}}', {
          value: getLabels(songDuration, translatedSegmentData.songDuration),
        }),
        translate('home.configurator.aiMusic.brief.language', 'Language: {{value}}', {
          value: getLabels(songLanguage, translatedSegmentData.songLanguage),
        }),
        translate('home.configurator.aiMusic.brief.style', 'Music style: {{value}}', {
          value: getLabels(musicStyle, translatedSegmentData.musicStyle),
        }),
        translate('home.configurator.aiMusic.brief.vocals', 'Vocals: {{value}}', {
          value: getLabels(vocals, translatedSegmentData.vocals),
        }),
        translate('home.configurator.aiMusic.brief.file_format', 'File format: {{value}}', {
          value: getLabels(fileFormat, translatedSegmentData.fileFormat),
        }),
        translate('home.configurator.aiMusic.brief.social', 'Social media version: {{value}}', {
          value: getLabels(socialVersion, translatedSegmentData.socialVersion),
        }),
        translate('home.configurator.aiMusic.brief.extra_revision', 'Additional revision: {{value}}', {
          value: getLabels(extraRevision, translatedSegmentData.extraRevision),
        }),
        translate('home.configurator.aiMusic.brief.express', 'Express delivery: {{value}}', {
          value: getLabels(expressDelivery, translatedSegmentData.expressDelivery),
        }),
        translate('home.configurator.aiMusic.brief.total', 'Estimated total: {{value}}', {
          value: `${aiMusicOffer.total} EUR`,
        }),
      ].join('\n');
    }

    if (!websiteOffer.isComplete) return '';

    const formatPrice =
      websiteOffer.totalFrom === websiteOffer.totalTo
        ? `${websiteOffer.totalFrom} EUR`
        : `${websiteOffer.totalFrom} - ${websiteOffer.totalTo} EUR`;

    return [
      translate('home.configurator.brief.title', 'Brief aus dem Angebots-Konfigurator:'),
      translate('home.configurator.brief.goal', 'Ziel: {{value}}', { value: getLabels(goal, translatedSegmentData.goal) }),
      translate('home.configurator.brief.integrations', 'Integrationen: {{value}}', {
        value: getLabels(integration, translatedSegmentData.integrations),
      }),
      translate('home.configurator.brief.ads', 'Werbung: {{value}}', { value: getLabels(ads, translatedSegmentData.ads) }),
      translate('home.configurator.brief.term', 'Zeitrahmen: {{value}}', { value: getLabels(term, translatedSegmentData.term) }),
      translate('home.configurator.brief.content', 'Content: {{value}}', { value: getLabels(content, translatedSegmentData.content) }),
      translate('home.configurator.brief.languages', 'Sprachen: {{value}}', {
        value: getLabels(languages, translatedSegmentData.languages),
      }),
      translate('home.configurator.brief.hosting', 'Hosting: {{value}}', {
        value: getLabels(hosting, translatedSegmentData.hosting),
      }),
      translate('home.configurator.brief.domain', 'Domain: {{value}}', { value: getLabels(domain, translatedSegmentData.domain) }),
      translate('home.configurator.brief.pages', 'Seiten: {{value}}', { value: getLabels(pages, translatedSegmentData.pages) }),
      translate('home.configurator.brief.seo', 'SEO: {{value}}', { value: getLabels(seo, translatedSegmentData.seo) }),
      translate('home.configurator.brief.launch_price', 'Startpreis: {{value}}', { value: formatPrice }),
      translate('home.configurator.brief.support_monthly', 'Support / Monat: {{value}}', {
        value: `${websiteOffer.supportMonthly} EUR`,
      }),
      translate('home.configurator.brief.support_yearly', 'Support / Jahr (-30%): {{value}}', {
        value: `${websiteOffer.supportYearly} EUR`,
      }),
    ].join('\n');
  }, [
    activeService,
    ads,
    aiMusicOffer,
    content,
    domain,
    expressDelivery,
    extraRevision,
    fileFormat,
    goal,
    hosting,
    integration,
    languages,
    musicStyle,
    pages,
    seo,
    socialVersion,
    songDuration,
    songLanguage,
    t,
    term,
    translatedSegmentData,
    vocals,
    websiteOffer,
  ]);

  return (
    <div className='card configurator-card'>
      <Segmented
        label={translate('home.configurator.labels.service', labelFallbacks.service)}
        value={service}
        options={translatedServiceOptions}
        onChange={next => setService(getLastSelection(next, activeService))}
      />

      {activeService === 'aiMusic' ? (
        <>
          <Segmented
            label={translate('home.configurator.labels.songDuration', labelFallbacks.songDuration)}
            value={songDuration}
            options={translatedSegmentData.songDuration}
            onChange={next => setSongDuration(getLastSelection(next, '15'))}
          />
          <Segmented
            label={translate('home.configurator.labels.songLanguage', labelFallbacks.songLanguage)}
            value={songLanguage}
            options={translatedSegmentData.songLanguage}
            onChange={next => setSongLanguage(getLastSelection(next, 'en'))}
          />
          <Segmented
            label={translate('home.configurator.labels.musicStyle', labelFallbacks.musicStyle)}
            value={musicStyle}
            options={translatedSegmentData.musicStyle}
            onChange={next => setMusicStyle(getLastSelection(next, 'pop'))}
          />
          <Segmented
            label={translate('home.configurator.labels.vocals', labelFallbacks.vocals)}
            value={vocals}
            options={translatedSegmentData.vocals}
            onChange={next => setVocals(getLastSelection(next, 'ai-vocal'))}
          />
          <Segmented
            label={translate('home.configurator.labels.fileFormat', labelFallbacks.fileFormat)}
            value={fileFormat}
            options={translatedSegmentData.fileFormat}
            onChange={next => setFileFormat(getLastSelection(next, 'mp3'))}
          />
          <Segmented
            label={translate('home.configurator.labels.socialVersion', labelFallbacks.socialVersion)}
            value={socialVersion}
            options={translatedSegmentData.socialVersion}
            onChange={next => setSocialVersion(getLastSelection(next, 'no'))}
          />
          <Segmented
            label={translate('home.configurator.labels.extraRevision', labelFallbacks.extraRevision)}
            value={extraRevision}
            options={translatedSegmentData.extraRevision}
            onChange={next => setExtraRevision(getLastSelection(next, 'no'))}
          />
          <Segmented
            label={translate('home.configurator.labels.expressDelivery', labelFallbacks.expressDelivery)}
            value={expressDelivery}
            options={translatedSegmentData.expressDelivery}
            onChange={next => setExpressDelivery(getLastSelection(next, 'no'))}
          />

          <div className='offer'>
            <button type='button' className='btn btn-secondary reset-btn' onClick={resetAll}>
              {translate('home.configurator.reset', 'Alles zuruecksetzen')}
            </button>
            <div className='offer-title'>
              {translate('home.configurator.recommended', 'Empfohlen:')}{' '}
              <strong>{aiMusicOffer.packageName}</strong>
            </div>
            <p className='offer-price'>
              {translate('home.configurator.aiMusic.totalPrice', 'Estimated total:')}{' '}
              <strong>{aiMusicOffer.total} EUR</strong>
            </p>
            <ul className='offer-list'>
              {aiMusicOffer.bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <NavLink to={aiMusicOffer.cta} state={{ prefillNeed: contactBrief }} className='btn btn-primary offer-cta'>
              {translate('home.configurator.cta', 'Kontaktanfrage und exakter Kostenvoranschlag')}
            </NavLink>
          </div>
        </>
      ) : (
        <>
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
              {translate('home.configurator.reset', 'Alles zuruecksetzen')}
            </button>
            {!websiteOffer.isComplete ? (
              <div className='offer-empty'>
                {translate(
                  'home.configurator.empty',
                  'Waehlen Sie mindestens eine Option in jedem Block. Mehrfachauswahl ist moeglich; bei "Andere" wird keine Zusatzgebuehr berechnet.'
                )}
              </div>
            ) : (
              <>
                <div className='offer-title'>
                  {translate('home.configurator.recommended', 'Empfohlen:')}{' '}
                  <strong>
                    {websiteOffer.pack === 'Business'
                      ? translate('home.configurator.pack.business', 'Business')
                      : translate('home.configurator.pack.starter', 'Starter')}
                  </strong>
                </div>
                <p className='offer-price'>
                  {translate('home.configurator.launchPrice', 'Startpreis:')}{' '}
                  <strong>
                    {websiteOffer.totalFrom === websiteOffer.totalTo
                      ? `${websiteOffer.totalFrom} EUR`
                      : `${websiteOffer.totalFrom} - ${websiteOffer.totalTo} EUR`}
                  </strong>
                </p>
                <ul className='offer-list'>
                  {websiteOffer.bullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className='support-grid'>
                  <article className='support-card'>
                    <h3>{translate('home.configurator.supportMonthly', 'Support / Monat')}</h3>
                    <p>
                      <strong>{websiteOffer.supportMonthly} EUR</strong>
                    </p>
                  </article>
                  <article className='support-card'>
                    <h3>{translate('home.configurator.supportYearly', 'Support / Jahr (-30%)')}</h3>
                    <p>
                      <strong>{websiteOffer.supportYearly} EUR</strong>{' '}
                      <span className='support-old'>{websiteOffer.supportYearlyRaw} EUR</span>
                    </p>
                  </article>
                </div>
                <NavLink to={websiteOffer.cta} state={{ prefillNeed: contactBrief }} className='btn btn-primary offer-cta'>
                  {translate('home.configurator.cta', 'Kontaktanfrage und exakter Kostenvoranschlag')}
                </NavLink>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Configurator;
