import { useRef, useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { processSteps } from './homePageData';
import { ProcessSectionScope } from './styles/ProcessSection.styles';
import { fadeInUp, scaleIn, staggerContainer } from '../../../components/Motion/reveal';
import 'swiper/css';
import 'swiper/css/effect-fade';

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goTo = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <ProcessSectionScope>
      <motion.section
        className='section sticky-process'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.18 }}
        variants={fadeInUp}
      >
        <div className='section-header'>
          <h2>{t('home.process.title')}</h2>
          <p className='section-description'>{t('home.process.desc')}</p>
        </div>
        <div className='sticky-process-grid'>
          <motion.div className='sticky-steps' role='tablist' aria-label={t('home.process.aria')} variants={staggerContainer}>
            {processSteps.map((item, index) => (
              <motion.button
                key={item.step}
                className={`sticky-step ${activeStep === index ? 'active' : ''}`}
                onClick={() => goTo(index)}
                type='button'
                role='tab'
                aria-selected={activeStep === index}
                variants={scaleIn}
              >
                <span>{item.step}</span>
                <p>{t(`home.process.steps.s${index + 1}.title`)}</p>
              </motion.button>
            ))}
          </motion.div>
          <motion.article
            className='sticky-process-card card'
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.32, ease: easeOut }}
          >
            <Swiper
              modules={[Keyboard, A11y, EffectFade, Autoplay]}
              effect='fade'
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              speed={420}
              keyboard={{ enabled: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              onSwiper={swiper => {
                swiperRef.current = swiper;
                setActiveStep(swiper.activeIndex);
              }}
              onSlideChange={swiper => setActiveStep(swiper.activeIndex)}
              className='process-swiper'
            >
              {processSteps.map((item, index) => (
                <SwiperSlide key={`${item.step}-${index}`}>
                  <div
                    className='process-slide'
                    style={{ '--process-bg': `url(${item.image})` } as React.CSSProperties}
                  >
                    <div className='process-content'>
                      <div className='process-kicker'>
                        <span className='process-chip'>{item.step}</span>
                        <span className='process-chip subtle'>{t('home.process.stage')}</span>
                      </div>
                      <h3>{t(`home.process.steps.s${index + 1}.title`)}</h3>
                      <p>{t(`home.process.steps.s${index + 1}.text`)}</p>
                      <div className='process-nav'>
                        <button
                          type='button'
                          className='nav-btn'
                          onClick={() => swiperRef.current?.slidePrev()}
                          disabled={activeStep === 0}
                        >
                          {t('home.process.nav.prev')}
                        </button>
                        <button
                          type='button'
                          className='nav-btn primary'
                          onClick={() => swiperRef.current?.slideNext()}
                          disabled={activeStep === processSteps.length - 1}
                        >
                          {t('home.process.nav.next')}
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.article>
        </div>
      </motion.section>
    </ProcessSectionScope>
  );
};

export default ProcessSection;
