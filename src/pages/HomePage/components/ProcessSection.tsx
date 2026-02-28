import { useRef, useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { processSteps } from './homePageData';
import { ProcessSectionScope } from './styles/ProcessSection.styles';
import 'swiper/css';
import 'swiper/css/effect-fade';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goTo = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <ProcessSectionScope>
      <section className='section sticky-process'>
        <div className='section-header'>
          <h2>{'\u042f\u043a \u043c\u0438 \u043f\u0440\u0430\u0446\u044e\u0454\u043c\u043e'}</h2>
          <p className='section-description'>
            {
              '\u041f\u0440\u043e\u0437\u043e\u0440\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441 \u0431\u0435\u0437 \u0437\u0430\u0439\u0432\u0438\u0445 \u0435\u0442\u0430\u043f\u0456\u0432: \u0432\u0456\u0434 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0433\u043e \u0431\u0440\u0438\u0444\u0443 \u0434\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0442\u0430 \u043e\u043f\u0442\u0438\u043c\u0456\u0437\u0430\u0446\u0456\u0457 \u0437 \u0447\u0456\u0442\u043a\u0438\u043c\u0438 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430\u043c\u0438.'
            }
          </p>
        </div>
        <div className='sticky-process-grid'>
          <div className='sticky-steps' role='tablist' aria-label={'\u0415\u0442\u0430\u043f\u0438 \u0440\u043e\u0431\u043e\u0442\u0438'}>
            {processSteps.map((item, index) => (
              <button
                key={item.step}
                className={`sticky-step ${activeStep === index ? 'active' : ''}`}
                onClick={() => goTo(index)}
                type='button'
                role='tab'
                aria-selected={activeStep === index}
              >
                <span>{item.step}</span>
                <p>{item.title}</p>
              </button>
            ))}
          </div>
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
                        <span className='process-chip subtle'>{'\u0415\u0442\u0430\u043f'}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div className='process-nav'>
                        <button
                          type='button'
                          className='nav-btn'
                          onClick={() => swiperRef.current?.slidePrev()}
                          disabled={activeStep === 0}
                        >
                          {'\u041d\u0430\u0437\u0430\u0434'}
                        </button>
                        <button
                          type='button'
                          className='nav-btn primary'
                          onClick={() => swiperRef.current?.slideNext()}
                          disabled={activeStep === processSteps.length - 1}
                        >
                          {'\u0414\u0430\u043b\u0456'}
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.article>
        </div>
      </section>
    </ProcessSectionScope>
  );
};

export default ProcessSection;
