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

  const translatedSegmentData = useMemo(
    () => ({
      goal: segmentData.goal.map(option => ({ ...option, title: t(option.title) })),
      integrations: segmentData.integrations.map(option => ({ ...option, title: t(option.title) })),
      ads: segmentData.ads.map(option => ({ ...option, title: t(option.title) })),
      term: segmentData.term.map(option => ({ ...option, title: t(option.title) })),
      content: segmentData.content.map(option => ({ ...option, title: t(option.title) })),
      languages: segmentData.languages.map(option => ({ ...option, title: t(option.title) })),
      hosting: segmentData.hosting.map(option => ({ ...option, title: t(option.title) })),
      domain: segmentData.domain.map(option => ({ ...option, title: t(option.title) })),
      pages: segmentData.pages.map(option => ({ ...option, title: t(option.title) })),
      seo: segmentData.seo.map(option => ({ ...option, title: t(option.title) })),
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

    const totalFrom =
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
    const totalTo =
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

    const businessSignals =
      languages.includes('multi') ||
      pages.includes('five-plus') ||
      seo.includes('extended') ||
      ads.some(item => item !== 'none' && item !== 'other') ||
      integration.includes('crm') ||
      integration.includes('payments');

    const pack: 'Starter' | 'Business' = totalTo > 980 || businessSignals ? 'Business' : 'Starter';
    const supportMonthly = pack === 'Business' ? 86 : 62;
    const supportYearlyRaw = supportMonthly * 12;
    const supportYearly = Math.round(supportYearlyRaw * 0.7);

    const bullets = [
      t('home.configurator.bullets.prototype'),
      t('home.configurator.bullets.goal', { value: getLabels(goal, translatedSegmentData.goal) }),
      t('home.configurator.bullets.integrations', { value: getLabels(integration, translatedSegmentData.integrations) }),
      t('home.configurator.bullets.term', { value: getLabels(term, translatedSegmentData.term) }),
      t('home.configurator.bullets.hosting', { value: getLabels(hosting, translatedSegmentData.hosting) }),
      t('home.configurator.bullets.domain', { value: getLabels(domain, translatedSegmentData.domain) }),
      t('home.configurator.bullets.pages', { value: getLabels(pages, translatedSegmentData.pages) }),
      t('home.configurator.bullets.analytics'),
      content.includes('copy') ? t('home.configurator.bullets.copy_true') : t('home.configurator.bullets.copy_false'),
      t('home.configurator.bullets.market_note'),
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
      t('home.configurator.brief.title'),
      t('home.configurator.brief.goal', { value: labels(goal, translatedSegmentData.goal) }),
      t('home.configurator.brief.integrations', { value: labels(integration, translatedSegmentData.integrations) }),
      t('home.configurator.brief.ads', { value: labels(ads, translatedSegmentData.ads) }),
      t('home.configurator.brief.term', { value: labels(term, translatedSegmentData.term) }),
      t('home.configurator.brief.content', { value: labels(content, translatedSegmentData.content) }),
      t('home.configurator.brief.languages', { value: labels(languages, translatedSegmentData.languages) }),
      t('home.configurator.brief.hosting', { value: labels(hosting, translatedSegmentData.hosting) }),
      t('home.configurator.brief.domain', { value: labels(domain, translatedSegmentData.domain) }),
      t('home.configurator.brief.pages', { value: labels(pages, translatedSegmentData.pages) }),
      t('home.configurator.brief.seo', { value: labels(seo, translatedSegmentData.seo) }),
      t('home.configurator.brief.launch_price', { value: formatPrice }),
      t('home.configurator.brief.support_monthly', { value: `${offer.supportMonthly} EUR` }),
      t('home.configurator.brief.support_yearly', { value: `${offer.supportYearly} EUR` }),
    ].join('\n');
  }, [ads, content, domain, goal, hosting, integration, languages, offer, pages, seo, t, term, translatedSegmentData]);

  return (
    <div className='card configurator-card'>
      <Segmented label={t('home.configurator.labels.goal')} value={goal} options={translatedSegmentData.goal} onChange={setGoal} />
      <Segmented
        label={t('home.configurator.labels.integrations')}
        value={integration}
        options={translatedSegmentData.integrations}
        onChange={setIntegration}
      />
      <Segmented label={t('home.configurator.labels.ads')} value={ads} options={translatedSegmentData.ads} onChange={setAds} />
      <Segmented label={t('home.configurator.labels.term')} value={term} options={translatedSegmentData.term} onChange={setTerm} />
      <Segmented
        label={t('home.configurator.labels.content')}
        value={content}
        options={translatedSegmentData.content}
        onChange={setContent}
      />
      <Segmented
        label={t('home.configurator.labels.languages')}
        value={languages}
        options={translatedSegmentData.languages}
        onChange={setLanguages}
      />
      <Segmented
        label={t('home.configurator.labels.hosting')}
        value={hosting}
        options={translatedSegmentData.hosting}
        onChange={setHosting}
      />
      <Segmented
        label={t('home.configurator.labels.domain')}
        value={domain}
        options={translatedSegmentData.domain}
        onChange={setDomain}
      />
      <Segmented label={t('home.configurator.labels.pages')} value={pages} options={translatedSegmentData.pages} onChange={setPages} />
      <Segmented label={t('home.configurator.labels.seo')} value={seo} options={translatedSegmentData.seo} onChange={setSeo} />

      <div className='offer'>
        <button type='button' className='btn btn-secondary reset-btn' onClick={resetAll}>
          {t('home.configurator.reset')}
        </button>
        {!offer.isComplete ? (
          <div className='offer-empty'>{t('home.configurator.empty')}</div>
        ) : (
          <>
            <div className='offer-title'>
              {t('home.configurator.recommended')}{' '}
              <strong>{offer.pack === 'Business' ? t('home.configurator.pack.business') : t('home.configurator.pack.starter')}</strong>
            </div>
            <p className='offer-price'>
              {t('home.configurator.launchPrice')}{' '}
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
                <h3>{t('home.configurator.supportMonthly')}</h3>
                <p>
                  <strong>{offer.supportMonthly} EUR</strong>
                </p>
              </article>
              <article className='support-card'>
                <h3>{t('home.configurator.supportYearly')}</h3>
                <p>
                  <strong>{offer.supportYearly} EUR</strong> <span className='support-old'>{offer.supportYearlyRaw} EUR</span>
                </p>
              </article>
            </div>
            <NavLink to={offer.cta} state={{ prefillNeed: contactBrief }} className='btn btn-primary offer-cta'>
              {t('home.configurator.cta')}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Configurator;
