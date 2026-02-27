import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      '\u041f\u0440\u043e\u0442\u043e\u0442\u0438\u043f \u0456 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u0456\u0434 \u0437\u0430\u044f\u0432\u043a\u0438',
      `\u0426\u0456\u043b\u0456: ${getLabels(goal, segmentData.goal)}`,
      `\u0406\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457: ${getLabels(integration, segmentData.integrations)}`,
      `\u0422\u0435\u0440\u043c\u0456\u043d\u0438: ${getLabels(term, segmentData.term)}`,
      `\u0425\u043e\u0441\u0442\u0438\u043d\u0433: ${getLabels(hosting, segmentData.hosting)}`,
      `\u0414\u043e\u043c\u0435\u043d: ${getLabels(domain, segmentData.domain)}`,
      `\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0438: ${getLabels(pages, segmentData.pages)}`,
      '\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f GA4 \u0442\u0430 \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043d\u043d\u044f \u0444\u043e\u0440\u043c/\u043f\u043e\u0434\u0456\u0439',
      content.includes('copy')
        ? '\u0414\u043e\u043f\u043e\u043c\u043e\u0433\u0430 \u0437 \u0442\u0435\u043a\u0441\u0442\u0430\u043c\u0438 \u0442\u0430 \u043e\u0444\u0435\u0440\u043e\u043c'
        : '\u041f\u0440\u0430\u0446\u044e\u0454\u043c\u043e \u0437 \u0432\u0430\u0448\u0438\u043c\u0438 \u0433\u043e\u0442\u043e\u0432\u0438\u043c\u0438 \u0442\u0435\u043a\u0441\u0442\u0430\u043c\u0438',
      '\u041e\u0440\u0456\u0454\u043d\u0442\u043e\u0432\u043d\u0430 \u0446\u0456\u043d\u0430 \u043d\u0438\u0436\u0447\u0435 \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0457 \u0440\u0438\u043d\u043a\u043e\u0432\u043e\u0457 \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u0431\u0456\u0437\u043d\u0435\u0441\u0443',
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
  }, [ads, content, domain, goal, hosting, integration, languages, pages, seo, term]);

  const contactBrief = useMemo(() => {
    if (!offer.isComplete) return '';

    const labels = (values: string[], options: readonly { value: string; title: string }[]) =>
      values.map(value => options.find(option => option.value === value)?.title || value).join(', ');

    const formatPrice =
      offer.totalFrom === offer.totalTo
        ? `${offer.totalFrom} EUR`
        : `${offer.totalFrom} - ${offer.totalTo} EUR`;

    return [
      'Бриф з Офер-конструктора:',
      `Ціль: ${labels(goal, segmentData.goal)}`,
      `Інтеграції: ${labels(integration, segmentData.integrations)}`,
      `Реклама: ${labels(ads, segmentData.ads)}`,
      `Терміни: ${labels(term, segmentData.term)}`,
      `Контент: ${labels(content, segmentData.content)}`,
      `Мови: ${labels(languages, segmentData.languages)}`,
      `Хостинг: ${labels(hosting, segmentData.hosting)}`,
      `Домен: ${labels(domain, segmentData.domain)}`,
      `Сторінки: ${labels(pages, segmentData.pages)}`,
      `SEO: ${labels(seo, segmentData.seo)}`,
      `Орієнтовна ціна запуску: ${formatPrice}`,
      `Підтримка / місяць: ${offer.supportMonthly} EUR`,
      `Підтримка / рік (-30%): ${offer.supportYearly} EUR`,
    ].join('\n');
  }, [ads, content, domain, goal, hosting, integration, languages, offer, pages, seo, term]);

  return (
    <div className='card configurator-card'>
      <Segmented label={'\u0426\u0456\u043b\u044c'} value={goal} options={segmentData.goal} onChange={setGoal} />
      <Segmented
        label={'\u0406\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457'}
        value={integration}
        options={segmentData.integrations}
        onChange={setIntegration}
      />
      <Segmented label={'\u0420\u0435\u043a\u043b\u0430\u043c\u0430'} value={ads} options={segmentData.ads} onChange={setAds} />
      <Segmented label={'\u0422\u0435\u0440\u043c\u0456\u043d'} value={term} options={segmentData.term} onChange={setTerm} />
      <Segmented
        label={'\u0420\u0456\u0432\u0435\u043d\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443'}
        value={content}
        options={segmentData.content}
        onChange={setContent}
      />
      <Segmented
        label={'\u041c\u043e\u0432\u0438'}
        value={languages}
        options={segmentData.languages}
        onChange={setLanguages}
      />
      <Segmented label={'\u0425\u043e\u0441\u0442\u0438\u043d\u0433'} value={hosting} options={segmentData.hosting} onChange={setHosting} />
      <Segmented label={'\u0414\u043e\u043c\u0435\u043d\u043d\u0435 \u0456\u043c\u2019\u044f'} value={domain} options={segmentData.domain} onChange={setDomain} />
      <Segmented label={'\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0438'} value={pages} options={segmentData.pages} onChange={setPages} />
      <Segmented label='SEO' value={seo} options={segmentData.seo} onChange={setSeo} />

      <div className='offer'>
        <button type='button' className='btn btn-secondary reset-btn' onClick={resetAll}>
          {'\u0421\u0442\u0435\u0440\u0442\u0438 \u0432\u0441\u0435 \u0456 \u043f\u043e\u0447\u0430\u0442\u0438 \u0437\u043d\u043e\u0432\u0443'}
        </button>
        {!offer.isComplete ? (
          <div className='offer-empty'>
            {
              '\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0445\u043e\u0447\u0430 \u0431 \u043e\u0434\u0438\u043d \u0432\u0430\u0440\u0456\u0430\u043d\u0442 \u0443 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043f\u0443\u043d\u043a\u0442\u0456. \u041c\u043e\u0436\u043d\u0430 \u043e\u0431\u0438\u0440\u0430\u0442\u0438 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043f\u043e\u0437\u0438\u0446\u0456\u0439; \u0434\u043b\u044f \u00ab\u0406\u043d\u0448\u0435\u00bb \u0434\u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435 \u0434\u043e\u0434\u0430\u0454\u0442\u044c\u0441\u044f.'
            }
          </div>
        ) : (
          <>
            <div className='offer-title'>
              {'\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043e:'} <strong>{offer.pack}</strong>
            </div>
            <p className='offer-price'>
              {'\u041e\u0440\u0456\u0454\u043d\u0442\u043e\u0432\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0437\u0430\u043f\u0443\u0441\u043a\u0443:'}{' '}
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
                <h3>{'\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0430 / \u043c\u0456\u0441\u044f\u0446\u044c'}</h3>
                <p>
                  <strong>{offer.supportMonthly} EUR</strong>
                </p>
              </article>
              <article className='support-card'>
                <h3>{'\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0430 / \u0440\u0456\u043a (-30%)'}</h3>
                <p>
                  <strong>{offer.supportYearly} EUR</strong> <span className='support-old'>{offer.supportYearlyRaw} EUR</span>
                </p>
              </article>
            </div>
            <NavLink to={offer.cta} state={{ prefillNeed: contactBrief }} className='btn btn-primary offer-cta'>
              {'\u0417\u0430\u043f\u0438\u0442 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0456 \u0442\u043e\u0447\u043d\u0438\u0439 \u043a\u043e\u0448\u0442\u043e\u0440\u0438\u0441'}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Configurator;
