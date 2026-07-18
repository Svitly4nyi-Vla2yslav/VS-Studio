import type { AssistantService } from '../../features/ai-assistant/types';
import { CONFIGURATOR_PRICING, WEBSITE_PRICING_PACKAGES, getPackageRange } from '../pricingCatalog';

export const servicesUk: AssistantService[] = [
  {
    id: 'website',
    title: 'Створення сайту',
    shortDescription:
      'Швидкий і зрозумілий сайт з акцентом на довіру, заявки та вимірювані точки контакту.',
    businessValue:
      'Підійде бізнесу, який хоче виглядати професійно онлайн та стабільно отримувати якісні звернення.',
    pricingFrom: `від EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('starter'),
    timeline: 'приблизно 2-4 тижні',
    estimateHint:
      `На сторінці Pricing пакет Starter зазвичай EUR ${WEBSITE_PRICING_PACKAGES.starter.rangeFrom}-${WEBSITE_PRICING_PACKAGES.starter.rangeTo}; для більшого обсягу підходить Business від EUR ${WEBSITE_PRICING_PACKAGES.business.priceFrom}. Configurator після вибору параметрів показує EUR ${CONFIGURATOR_PRICING.launchMin}-${CONFIGURATOR_PRICING.launchMax}.`,
    keywords: ['сайт', 'вебсайт', 'сторінка', 'лендинг', 'створити', 'новий сайт'],
  },
  {
    id: 'redesign',
    title: 'Редизайн',
    shortDescription:
      'Оновлення існуючого сайту зі зрозумілішою структурою, сильнішою довірою та кращими шляхами до заявки.',
    businessValue:
      'Корисно, коли трафік уже є, але сайт виглядає застаріло або слабко конвертує.',
    pricingFrom: `від EUR ${WEBSITE_PRICING_PACKAGES.business.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.business.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('business'),
    timeline: 'приблизно 1-3 тижні',
    estimateHint:
      `Обсяг залежить насамперед від кількості сторінок, контенту та технічних обмежень поточного сайту. Діапазон Business на Pricing зазвичай EUR ${WEBSITE_PRICING_PACKAGES.business.rangeFrom}-${WEBSITE_PRICING_PACKAGES.business.rangeTo}.`,
    keywords: ['редизайн', 'оновити сайт', 'оновити', 'поточний сайт', 'існуючий сайт', 'оновлення сайту', 'перезапуск', 'покращити сайт'],
  },
  {
    id: 'ads',
    title: 'Реклама',
    shortDescription:
      'Google Ads, Meta Ads або локальні кампанії з коректним трекінгом і фокусом на якісних лідах.',
    businessValue:
      'Добрий варіант, коли потрібно отримувати прогнозований попит або прискорити поточну воронку.',
    pricingFrom: `від EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom} плюс рекламний бюджет`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.pro.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('pro'),
    timeline: 'запуск зазвичай 5-10 робочих днів',
    estimateHint:
      `Для реклами потрібні і налаштування, і адекватний рекламний бюджет, і чіткі цілі конверсій. На Pricing налаштування реклами входить у Pro від EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom}.`,
    keywords: ['реклама', 'ads', 'google ads', 'meta ads', 'кампанія', 'кампанії'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI-чатбот',
    shortDescription:
      'AI-асистент для питань на сайті, кваліфікації лідів, запитів на дзвінок і первинного збору заявки.',
    businessValue:
      'Особливо корисно, коли потенційні клієнти мають отримувати швидку відповідь і наступний крок навіть поза робочим часом.',
    pricingFrom: `від EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.pro.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('pro'),
    timeline: 'приблизно 2-5 тижнів',
    estimateHint:
      `Рамка залежить від обсягу бази знань, логіки лідів, мультимовності та передачі до команди. На Pricing AI-кваліфікація лідів входить у Pro від EUR ${WEBSITE_PRICING_PACKAGES.pro.priceFrom}.`,
    keywords: ['ai', 'чатбот', 'асистент', 'автоматизація', 'ліди'],
  },
  {
    id: 'tracking',
    title: 'Трекінг',
    shortDescription:
      'Коректний event-tracking для форм, дзвінків, бронювань і оцінки кампаній.',
    businessValue:
      'Важливо, коли рішення мають базуватися не на відчуттях, а на зрозумілих даних.',
    pricingFrom: `від EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.priceFrom,
    pricingModel: 'one_time',
    estimateRange: getPackageRange('starter'),
    timeline: 'приблизно 3-7 робочих днів',
    estimateHint:
      `Базовий tracking входить у Starter від EUR ${WEBSITE_PRICING_PACKAGES.starter.priceFrom}; CRM або marketing dashboard частіше належать до Business чи Pro.`,
    keywords: ['трекінг', 'аналітика', 'ga4', 'піксель', 'події', 'вимірювання'],
  },
  {
    id: 'support',
    title: 'Підтримка',
    shortDescription:
      'Постійний супровід для дрібних змін, технічного догляду, моніторингу й пріоритетних оновлень.',
    businessValue:
      'Підходить, коли сайт має залишатися актуальним, а зміни потрібно вносити без затримок.',
    pricingFrom: `від EUR ${WEBSITE_PRICING_PACKAGES.starter.supportMonthly}/місяць`,
    pricingNumericFrom: WEBSITE_PRICING_PACKAGES.starter.supportMonthly,
    pricingModel: 'monthly',
    estimateRange: {
      from: WEBSITE_PRICING_PACKAGES.starter.supportMonthly,
      to: WEBSITE_PRICING_PACKAGES.pro.supportMonthly,
    },
    timeline: 'постійно',
    estimateHint:
      `Відповідний тариф залежить від частоти оновлень: Starter EUR ${WEBSITE_PRICING_PACKAGES.starter.supportMonthly}/місяць, Business EUR ${WEBSITE_PRICING_PACKAGES.business.supportMonthly}/місяць, Pro EUR ${WEBSITE_PRICING_PACKAGES.pro.supportMonthly}/місяць.`,
    keywords: ['підтримка', 'підтримку', 'постійна підтримка', 'шукаю підтримку', 'супровід', 'догляд', 'оновлення', 'допомога'],
  },
];
