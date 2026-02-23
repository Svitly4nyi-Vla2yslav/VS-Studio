import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { backOut, easeOut, motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaArrowRight,
  FaBolt,
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaEuroSign,
  FaGlobe,
  FaHammer,
  FaHandsHelping,
  FaHeartbeat,
  FaIndustry,
  FaMapMarkerAlt,
  FaRobot,
  FaShareAlt,
} from 'react-icons/fa';
import TerminalType from '../../components/Motion/TerminalType';
import HeroVideo from '../../components/Motion/HeroVideo';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import { useCursorSpotlight } from '../../hooks/useCursorSpotlight';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import previewVideo from '../../assets/video/hero-main.webm';
import poster1 from '../../assets/icons/cases/photo_2025-09-16_22-57-47.jpg';
import poster2 from '../../assets/icons/cases/photo_2025-09-16_22-58-19.jpg';
import poster3 from '../../assets/icons/cases/photo_2025-09-16_22-58-10.jpg';
import poster4 from '../../assets/icons/cases/photo_2025-09-16_22-58-06.jpg';

const revealUp = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const processSteps = [
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

const projectCards = [
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

const trustDeliverables = [
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

const segmentData = {
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
} as const;

type SegmentOption = { value: string; title: string; hint?: string };

const Segmented: React.FC<{
  label: string;
  value: string;
  options: readonly SegmentOption[];
  onChange: (v: string) => void;
}> = ({ label, value, options, onChange }) => (
  <div className='seg'>
    <div className='seg-label'>{label}</div>
    <div className='seg-row' role='radiogroup' aria-label={label}>
      {options.map(opt => (
        <button
          key={opt.value}
          type='button'
          className={`seg-btn ${value === opt.value ? 'active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          <span className='seg-title'>{opt.title}</span>
          {opt.hint ? <span className='seg-hint'>{opt.hint}</span> : null}
        </button>
      ))}
    </div>
  </div>
);

const HoverVideoPreview: React.FC<{ poster: string; video: string; title: string }> = ({
  poster,
  video,
  title,
}) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  const play = async () => {
    const v = ref.current;
    if (!v) return;
    try {
      v.currentTime = 0;
      await v.play();
    } catch {
      // ignore autoplay restrictions
    }
  };

  const stop = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      className='project-preview'
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      tabIndex={0}
      aria-label={title}
    >
      <img src={poster} alt='' loading='lazy' />
      <video ref={ref} muted loop playsInline preload='none'>
        <source src={video} type='video/webm' />
      </video>
      <div className='preview-overlay' />
    </div>
  );
};

const Configurator: React.FC = () => {
  const [goal, setGoal] = useState('leads');
  const [integration, setIntegration] = useState('booking');
  const [ads, setAds] = useState('none');
  const [term, setTerm] = useState('7-14');
  const [content, setContent] = useState('has');
  const [languages, setLanguages] = useState('basic');
  const [pages, setPages] = useState('one');
  const [seo, setSeo] = useState('base');

  const offer = useMemo(() => {
    const businessSignals =
      languages === 'multi' ||
      pages === 'multi' ||
      seo === 'extended' ||
      ads !== 'none' ||
      integration === 'crm' ||
      integration === 'payments';

    const pack = businessSignals ? 'Business' : 'Starter';
    const bullets = [
      'Прототип + структура під заявки',
      `Фокус: ${goal === 'leads' ? 'заявки' : goal === 'calls' ? 'дзвінки' : 'онлайн-запис'}`,
      'Підключення GA4 та відстеження форм/подій',
      `Термін запуску: ${term} днів`,
      content === 'copy' ? 'Допомога з текстами і оффером' : 'Працюємо з вашими готовими текстами',
    ];
    return { pack, bullets, cta: '/preise' };
  }, [ads, content, goal, integration, languages, pages, seo, term]);

  return (
    <div className='card configurator-card'>
      <Segmented label='Ціль' value={goal} options={segmentData.goal} onChange={setGoal} />
      <Segmented
        label='Інтеграції'
        value={integration}
        options={segmentData.integrations}
        onChange={setIntegration}
      />
      <Segmented label='Реклама' value={ads} options={segmentData.ads} onChange={setAds} />
      <Segmented label='Термін' value={term} options={segmentData.term} onChange={setTerm} />
      <Segmented
        label='Рівень контенту'
        value={content}
        options={segmentData.content}
        onChange={setContent}
      />
      <Segmented
        label='Мови'
        value={languages}
        options={segmentData.languages}
        onChange={setLanguages}
      />
      <Segmented
        label='Сторінки'
        value={pages}
        options={segmentData.pages}
        onChange={setPages}
      />
      <Segmented label='SEO' value={seo} options={segmentData.seo} onChange={setSeo} />

      <div className='offer'>
        <div className='offer-title'>
          Рекомендовано: <strong>{offer.pack}</strong>
        </div>
        <ul className='offer-list'>
          {offer.bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <NavLink to={offer.cta} className='btn btn-primary'>
          Отримати ціну
        </NavLink>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const reducedMotion = usePrefersReducedMotion();
  useCursorSpotlight(reducedMotion);

  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -24]);
  const videoY = useTransform(scrollYProgress, [0, 0.4], [0, 30]);
  const [activeStep, setActiveStep] = useState(0);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-step-index') || 0);
            setActiveStep(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const onMagneticMove: React.MouseEventHandler<HTMLAnchorElement> = event => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 12;
    const y = (event.clientY - rect.top - rect.height / 2) / 12;
    setMagnet({ x: Math.max(-8, Math.min(8, x)), y: Math.max(-8, Math.min(8, y)) });
  };
  const resetMagnet = () => setMagnet({ x: 0, y: 0 });

  const marqueeItems = [
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
  const marquee = [...marqueeItems, ...marqueeItems];

  return (
    <div className='page'>
   

      <div className='container'>
        <motion.section
          className='hero hero-with-video'
          initial='hidden'
          animate='show'
          variants={revealUp}
          transition={{ duration: 0.85, ease: backOut }}
        >
          <motion.div className='hero-video-parallax' style={{ y: videoY }}>
            <HeroVideo />
          </motion.div>

          <motion.div
            className='hero-content'
            style={{ y: contentY }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <h1>
              <TerminalType text={t('home.heroTitle')} durationMs={6200} storageKey='hero_terminal_once' />
            </h1>
            <p>{t('home.heroSubtitle')}</p>
            <div className='btn-row'>
              <NavLink
                to='/kontakt'
                className='btn btn-primary btn-magnetic'
                onMouseMove={onMagneticMove}
                onMouseLeave={resetMagnet}
                style={{ transform: `translate(${magnet.x}px, ${magnet.y}px)` }}
              >
                <FaArrowRight /> {t('common.projectRequest')}
              </NavLink>
              <NavLink to='/preise' className='btn btn-secondary'>
                <FaEuroSign /> {t('common.viewPrices')}
              </NavLink>
              <a href='#faq' className='btn btn-secondary'>
                <FaArrowRight /> {t('home.toFaq')}
              </a>
            </div>
          </motion.div>

          <aside className='hero-bento'>
            <article className='bento-tile'>
              <span>Швидкість</span>
              <strong>90+ Lighthouse</strong>
            </article>
            <article className='bento-tile'>
              <span>SEO</span>
              <strong>Технічний фундамент</strong>
            </article>
            <article className='bento-tile'>
              <span>Заявки</span>
              <strong>Чіткі CTA і форми</strong>
            </article>
            <article className='bento-tile'>
              <span>Підтримка</span>
              <strong>Після запуску</strong>
            </article>
          </aside>
        </motion.section>

        <section className='section marquee-wrap' aria-label='Nischen'>
          <div className='marquee-row row-a'>
            {marquee.map((item, index) => (
              <span key={`a-${item}-${index}`}>{item} •</span>
            ))}
          </div>
          <div className='marquee-row row-b'>
            {marquee.map((item, index) => (
              <span key={`b-${item}-${index}`}>{item} •</span>
            ))}
          </div>
        </section>

        <div className='section-divider' />

        <section className='section'>
          <Partners
            rows={[
              {
                title: t('home.partnersTitle'),
                direction: 'right',
                speed: 58,
                items: [
                  { group: t('home.groups.highlights'), label: t('home.partners.fastLoad.title'), description: t('home.partners.fastLoad.desc'), icon: <FaBolt />, iconColor: '#FFD25F', iconBg: 'rgba(255,210,95,.2)' },
                  { group: t('home.groups.highlights'), label: t('home.partners.moreLeads.title'), description: t('home.partners.moreLeads.desc'), icon: <FaChartLine />, iconColor: '#58D68D', iconBg: 'rgba(88,214,141,.2)' },
                  { group: t('home.groups.highlights'), label: t('home.partners.clearPrices.title'), description: t('home.partners.clearPrices.desc'), icon: <FaEuroSign />, iconColor: '#5DADE2', iconBg: 'rgba(93,173,226,.2)' },
                  { group: t('home.groups.highlights'), label: t('home.partners.personalHelp.title'), description: t('home.partners.personalHelp.desc'), icon: <FaHandsHelping />, iconColor: '#F5B7B1', iconBg: 'rgba(245,183,177,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.handwerker.title'), description: t('home.partners.handwerker.desc'), icon: <FaHammer />, iconColor: '#F8C471', iconBg: 'rgba(248,196,113,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.praxen.title'), description: t('home.partners.praxen.desc'), icon: <FaHeartbeat />, iconColor: '#EC7063', iconBg: 'rgba(236,112,99,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.werkstaetten.title'), description: t('home.partners.werkstaetten.desc'), icon: <FaIndustry />, iconColor: '#AF7AC5', iconBg: 'rgba(175,122,197,.2)' },
                  { group: t('home.groups.forWhom'), label: t('home.partners.localServices.title'), description: t('home.partners.localServices.desc'), icon: <FaMapMarkerAlt />, iconColor: '#E74C3C', iconBg: 'rgba(231,76,60,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.websites.title'), description: t('home.partners.websites.desc'), icon: <FaGlobe />, iconColor: '#48C9B0', iconBg: 'rgba(72,201,176,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.webApps.title'), description: t('home.partners.webApps.desc'), icon: <FaCode />, iconColor: '#85C1E9', iconBg: 'rgba(133,193,233,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.aiIntegration.title'), description: t('home.partners.aiIntegration.desc'), icon: <FaRobot />, iconColor: '#F7DC6F', iconBg: 'rgba(247,220,111,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.socialMedia.title'), description: t('home.partners.socialMedia.desc'), icon: <FaShareAlt />, iconColor: '#5DADE2', iconBg: 'rgba(93,173,226,.2)' },
                  { group: t('home.groups.services'), label: t('home.partners.socialAds.title'), description: t('home.partners.socialAds.desc'), icon: <FaBullhorn />, iconColor: '#F1948A', iconBg: 'rgba(241,148,138,.2)' },
                ],
              },
            ]}
          />
        </section>

        <div className='section-divider' />

        <section className='section sticky-process'>
          <h2>Як ми працюємо</h2>
          <div className='sticky-process-grid'>
            <div className='sticky-steps'>
              {processSteps.map((item, index) => (
                <div
                  key={item.step}
                  className={`sticky-step ${activeStep === index ? 'active' : ''}`}
                  ref={el => {
                    stepRefs.current[index] = el;
                  }}
                  data-step-index={index}
                >
                  <span>{item.step}</span>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <motion.article
              className='sticky-process-card card'
              key={activeStep}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.32, ease: easeOut }}
            >
              <h3>{processSteps[activeStep].title}</h3>
              <p>{processSteps[activeStep].text}</p>
            </motion.article>
          </div>
        </section>

        <div className='section-divider' />

        <section className='section'>
          <h2>Projects / Case Studies</h2>
          <p className='muted'>
            Цілі та очікуваний ефект, без фейкових цифр. Наведіть курсор, щоб побачити live preview.
          </p>
          <div className='grid-2 projects-grid'>
            {projectCards.map((project, index) => (
              <article className='card project-card' key={project.title}>
                <HoverVideoPreview poster={project.poster} video={project.video} title={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='project-tags'>
                  {project.tags.map(tag => (
                    <span key={`${tag}-${index}`}>{tag}</span>
                  ))}
                </div>
                <p className='muted'>{project.goal}</p>
              </article>
            ))}
          </div>
        </section>

        <div className='section-divider' />

        <section className='section configurator'>
          <h2>Офер-конструктор</h2>
          <Configurator />
        </section>

        <div className='section-divider' />

        <section className='section'>
          <h2>Що ви отримаєте за 14 днів</h2>
          <div className='grid-2 trust-grid'>
            {trustDeliverables.map(item => (
              <article className='card' key={item.title}>
                <h3>{item.title}</h3>
                <p className='muted'>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='faq' className='section'>
          <h2>
            <TerminalType text={t('home.faqTitle')} durationMs={2200} storageKey='faq_title_v2' />
          </h2>
          <div className='faq'>
            <details>
              <summary>{t('home.faq.q1')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a1')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q2')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a2')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q3')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a3')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q4')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a4')}</p>
              </div>
            </details>
            <details>
              <summary>{t('home.faq.q5')}</summary>
              <div className='faq-answer'>
                <p>{t('home.faq.a5')}</p>
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
