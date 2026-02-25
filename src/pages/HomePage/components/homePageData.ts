import previewVideo from '../../../assets/video/hero-main.webm';
import poster1 from '../../../assets/icons/cases/photo_2025-09-16_22-57-47.jpg';
import poster2 from '../../../assets/icons/cases/photo_2025-09-16_22-58-19.jpg';
import poster3 from '../../../assets/icons/cases/photo_2025-09-16_22-58-10.jpg';
import poster4 from '../../../assets/icons/cases/photo_2025-09-16_22-58-06.jpg';
import type { ProcessStep, ProjectCard, SegmentOption, TrustDeliverable } from './types';

export const revealUp = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Дзвінок 15 хв',
    text: 'Фіксуємо задачу, KPI і дедлайн. Одразу погоджуємо формат запуску.',
  },
  {
    step: '02',
    title: 'Прототип 48 год',
    text: 'Показуємо структуру сторінки, CTA і сценарій заявки до розробки.',
  },
  {
    step: '03',
    title: 'Розробка 7–14 днів',
    text: 'Верстка, SEO-база, інтеграції і підключення аналітики без зайвого шуму.',
  },
  {
    step: '04',
    title: 'Запуск + оптимізація',
    text: 'Запускаємо, перевіряємо конверсії і даємо план покращень на 30 днів.',
  },
];

export const projectCards: ProjectCard[] = [
  {
    title: 'Сайт під локальні заявки',
    description: 'Лендінг з акцентом на форму, дзвінок і швидкий контакт з мобільного.',
    tags: ['React', 'TypeScript', 'SEO', 'GA4'],
    goal: 'Ціль: більше заявок без збільшення бюджету',
    poster: poster1,
    video: previewVideo,
  },
  {
    title: 'Сторінка під рекламу',
    description: 'Окрема посадкова сторінка з трекінгом кампаній Meta/Google.',
    tags: ['Landing', 'Ads', 'Tracking'],
    goal: 'Очікуваний ефект: чистіші ліди з реклами',
    poster: poster2,
    video: previewVideo,
  },
  {
    title: 'Сайт для практики',
    description: 'Чітка структура послуг, FAQ та сценарій онлайн-запису.',
    tags: ['Forms', 'Analytics', 'UX'],
    goal: 'Ціль: більше записів без зайвих дзвінків',
    poster: poster3,
    video: previewVideo,
  },
  {
    title: 'Кабінет для заявок',
    description: 'Внутрішній інтерфейс для обробки лідів і контролю статусів.',
    tags: ['Firebase', 'React', 'Automation'],
    goal: 'Очікуваний ефект: швидша обробка запитів',
    poster: poster4,
    video: previewVideo,
  },
];

export const trustDeliverables: TrustDeliverable[] = [
  {
    title: 'Прототип за 48 год',
    text: 'Показуємо структуру і CTA ще до коду, щоб рішення було прогнозованим.',
  },
  {
    title: 'Готовий сайт під заявки',
    text: 'Форма, дзвінок, месенджер і мобільна версія для швидкого звернення.',
  },
  {
    title: 'Аналітика і трекінг',
    text: 'GA4 + події, щоб бачити, звідки приходять заявки і що реально працює.',
  },
  {
    title: 'План покращень на 30 днів',
    text: 'Чіткі наступні кроки для росту конверсії після запуску.',
  },
];

export const segmentData: Record<string, readonly SegmentOption[]> = {
  goal: [
    { value: 'leads', title: 'Leads' },
    { value: 'calls', title: 'Calls' },
    { value: 'booking', title: 'Booking' },
  ],
  integrations: [
    { value: 'booking', title: 'Booking' },
    { value: 'crm', title: 'CRM' },
    { value: 'chat', title: 'Chat' },
    { value: 'payments', title: 'Payments' },
  ],
  ads: [
    { value: 'none', title: 'Без реклами' },
    { value: 'meta', title: 'Meta' },
    { value: 'google', title: 'Google' },
  ],
  term: [
    { value: '7-14', title: '7–14 днів' },
    { value: '14-21', title: '14–21 днів' },
    { value: '21-30', title: '21–30 днів' },
  ],
  content: [
    { value: 'has', title: 'Є тексти' },
    { value: 'copy', title: 'Потрібен копірайт' },
  ],
  languages: [
    { value: 'basic', title: '1 мова' },
    { value: 'multi', title: '2+ мови' },
  ],
  pages: [
    { value: 'one', title: 'До 3 сторінок' },
    { value: 'multi', title: '4+ сторінок' },
  ],
  seo: [
    { value: 'base', title: 'SEO Base' },
    { value: 'extended', title: 'SEO Extended' },
  ],
};

export const marqueeItems = [
  'Handwerk',
  'Praxen',
  'Werkstätten',
  'Gastronomie',
  'Beauty',
  'Immobilien',
  'Kanzlei',
  'Fitness',
  'Reinigung',
  'Transport',
  'Coaching',
  'Bildung',
];
