import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, easeOut } from 'framer-motion';
import {
  HeroContainer,
  ContentWrapper,
  TextBlock,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from './Hero.styled';
import AutoVerticalSwiper from './Swipper';
import { useMediaQuery } from 'react-responsive';
import { ReviewsWidget } from '../ReviewsWidget/ReviewsWidget';

// Анімаційні варіанти для тексту - оптимізовані
const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// Анімаційні варіанти для кнопок
const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};




export const Hero: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [hasAnimated, setHasAnimated] = useState(false);


  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-10%' });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);



  // Оптимізований паралакс для мобільних пристроїв
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, isDesktop ? 80 : isTablet ? 20 : 40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.95]);


  return (
    <>
      <HeroContainer id='header' ref={heroRef}>
        <motion.div
          style={{
            y: y,
            opacity: opacity,
          }}
        >
          {/* Плейсхолдер во время загрузки */}



        </motion.div>

        {isDesktop && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <AutoVerticalSwiper />
          </motion.div>
        )}

        <ContentWrapper>
          <motion.div
            initial='hidden'
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <ReviewsWidget />
          </motion.div>

          <TextBlock>
            <motion.div
              initial='hidden'
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={textVariants}
              transition={{ delay: 0.1 }}
            >
              <HeroTitle>THOUSAND OAKS APPLIANCE REPAIR</HeroTitle>
            </motion.div>

            <motion.div
              initial='hidden'
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              <HeroSubtitle>
                We provide reliable appliance repair services, so your fridge, oven, or washer works
                like new — and you can get back to your day.
              </HeroSubtitle>
            </motion.div>
          </TextBlock>

          <ButtonGroup>
            <motion.div
              initial='hidden'
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={buttonVariants}
              transition={{ delay: 0.3 }}
            >
              <PrimaryButton to='/contact'>Request Service</PrimaryButton>
            </motion.div>

            {isMobile && (
              <motion.div
                initial='hidden'
                animate={hasAnimated ? 'visible' : 'hidden'}
                variants={buttonVariants}
                transition={{ delay: 0.35 }}
              >
                <SecondaryButton>
                  <a href='tel:+18055002705'>📞 (805) 500-2705</a>
                </SecondaryButton>
              </motion.div>
            )}
          </ButtonGroup>
        </ContentWrapper>
      </HeroContainer>
    </>
  );
};
