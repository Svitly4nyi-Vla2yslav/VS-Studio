import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, easeOut } from 'framer-motion';
import {
  HeroContainer,
  VideoBackground,
  ContentWrapper,
  TextBlock,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  VideoOverlay,
  VideoPlaceholder,
} from './Hero.styled';
import HeroVideo from '../../assets/video/Sub_Zero_Refrigerator_Cinematic_Reveal.mov';
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

// Функция для кэширования видео в localStorage
const cacheVideoInLocalStorage = async (videoUrl: string, cacheKey: string): Promise<string> => {
  // Проверяем, есть ли уже кэшированное видео
  const cachedVideo = localStorage.getItem(cacheKey);

  if (cachedVideo) {
    return cachedVideo; // Возвращаем data URL из кэша
  }

  try {
    // Загружаем видео и кэшируем его
    const response = await fetch(videoUrl);
    const blob = await response.blob();

    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        // Сохраняем в localStorage с ограничением по размеру
        try {
          localStorage.setItem(cacheKey, dataUrl);
          resolve(dataUrl);
        } catch (error) {
          console.warn('LocalStorage quota exceeded, using original URL');
          resolve(videoUrl); // Возвращаем оригинальный URL если localStorage переполнен
        }
      };
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Failed to cache video:', error);
    return videoUrl; // Возвращаем оригинальный URL в случае ошибки
  }
};

export const Hero: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [, setIsVideoLoading] = useState(false);
  const [, setShowFallback] = useState(false);
  const [cachedVideoUrl, setCachedVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: '-10%' });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Кэшируем видео при монтировании компонента
  useEffect(() => {
    const cacheVideo = async () => {
      try {
        const videoCacheKey = 'cached_hero_video';
        const cachedUrl = await cacheVideoInLocalStorage(HeroVideo, videoCacheKey);
        setCachedVideoUrl(cachedUrl);
      } catch (error) {
        console.error('Video caching failed:', error);
        setCachedVideoUrl(HeroVideo); // Используем оригинальный URL в случае ошибки
      }
    };

    cacheVideo();
  }, []);

  // Оптимізований паралакс для мобільних пристроїв
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, isDesktop ? 80 : isTablet ? 20 : 40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Ленивая загрузка видео при появлении в viewport
  useEffect(() => {
    if (isInView && videoRef.current && cachedVideoUrl) {
      setIsVideoLoading(true);

      // Таймаут для отображения загрузки
      const loadingTimer = setTimeout(() => {
        if (!isVideoLoaded) {
          videoRef.current?.load();
        }
      }, 100);

      return () => clearTimeout(loadingTimer);
    }
  }, [isInView, isVideoLoaded, cachedVideoUrl]);

  // Функція для обробки завантаження відео
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    setIsVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        // В случае ошибки автовоспроизведения, показываем кнопку play
        setShowFallback(true);
      });
    }
  };

  // Функція для обробки помилок відео
  const handleVideoError = () => {
    setIsVideoLoading(false);
    setShowFallback(true);
    console.error('Video loading failed');

    // Если кэшированное видео не работает, пробуем загрузить оригинальное
    if (cachedVideoUrl && cachedVideoUrl !== HeroVideo) {
      setCachedVideoUrl(HeroVideo);
    }
  };



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
          {!isVideoLoaded && <VideoPlaceholder></VideoPlaceholder>}

          {cachedVideoUrl && (
            <VideoBackground
              ref={videoRef}
              muted
              loop
              playsInline
              preload='none' // Ленивая загрузка
              onLoadedData={handleVideoLoaded}
              onError={handleVideoError}
              style={{ opacity: isVideoLoaded ? 1 : 0 }}
            >
              <source src={cachedVideoUrl} type='video/mp4' />
              {/* Додайте альтернативні формати для кращої сумісності */}
              <source src={cachedVideoUrl.replace('.mov', '.webm')} type='video/webm' />
              Video loading failed.
            </VideoBackground>
          )}

  
          <VideoOverlay />
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
