import React from 'react';
import { motion, useScroll, useTransform, easeOut, backOut } from 'framer-motion';
import {
  Container,
  Subtitle,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ContentWrapper,
  HeaderWrapper,
  MainContent,
} from './Professional.styled';
import {
  SwiperContainer,
  SwiperWrapper,
  SwiperTrack,
  SwiperSlide,
  SlideContent,
} from './Professional.styled';

interface ServiceCard {
  title: string;
  description: string;
  price: string;
}

interface VerticalSwiperProps {
  services: ServiceCard[];
}

const Professional: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'NOT HEATING / NO HEAT',
      description:
        'If your oven isn’t heating, not getting hot at all, or loses heat during cooking, the issue could be a faulty heating element, igniter, or thermostat. We’ll restore proper heating so your meals cook evenly',
      price: 'from <span>$250</span>',
    },
    {
      title: 'WRONG OR INCONSISTENT TEMPERATURE',
      description:
        'When your oven shows the wrong temperature, doesn’t reach the set heat, or cooks unevenly, it may be due to a malfunctioning sensor, thermostat, or control board. We’ll fix calibration and bring accuracy back.',
      price: 'from <span>$250</span>',
    },
    {
      title: 'OVEN WON’T TURN ON',
      description:
        'If your oven won’t power on at all, common causes include wiring issues, blown fuses, or failed control boards. Our technicians will troubleshoot and get it working again.',
      price: 'from <span>$250</span>',
    },
    {
      title: 'IGNITER OR BURNER ISSUES',
      description:
        'Gas ovens often fail to heat because of a broken igniter or faulty burner. We’ll replace defective parts and restore safe, reliable cooking performance.',
      price: 'from <span>$250</span>',
    },
    {
      title: 'STRANGE SMELLS OR NOISES',
      description:
        'Burning smells, buzzing, or unusual noises can signal electrical issues, worn parts, or motor problems. We’ll eliminate hazards and restore safe, quiet operation.',
      price: 'from <span>$250</span>',
    },
  ];

  // Анімаційні варіанти для заголовків
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotate: -2,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <Container>
      <ContentWrapper>
        <HeaderWrapper>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <Subtitle>Common Oven Problems We Repair</Subtitle>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
            transition={{ delay: 0.1 }}
          >
            <Title>
              Professional Oven Repair <span>& Installation Services</span>
            </Title>
          </motion.div>
        </HeaderWrapper>

        <MainContent>
          <VerticalSwiper services={services} />

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            <Description>
              Having issues with your oven? Call us today — we'll fix it and restore normal
              operation fast.
            </Description>

            <ButtonGroup>
              <motion.div variants={buttonVariants} whileHover='hover' whileTap='tap'>
                <PrimaryButton to='/contact'>Request Service</PrimaryButton>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
                transition={{ delay: 0.1 }}
              >
                <a href='tel:+18055002705'>
                  <SecondaryButton>📞 (805) 500-2705</SecondaryButton>
                </a>
              </motion.div>
            </ButtonGroup>
          </motion.div>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ services }) => {
  const { scrollY } = useScroll();

  // Паралакс ефект для слайдера
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const rotate = useTransform(scrollY, [0, 800], [0, 1]);

  // Подвоюємо масив для безперервної прокрутки
  const duplicatedServices = [...services, ...services];

  // Анімаційні варіанти для слайдів
  const slideVariants = {
    hidden: (_index: number) => ({
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: -45,
      filter: 'blur(5px)',
    }),
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay: index * 0.1,
        ease: backOut,
      },
    }),
    hover: {
      scale: 1.02,
      y: -5,
      rotateY: 3,
      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div style={{ y, rotate }}>
      <SwiperContainer>
        <SwiperWrapper>
          <SwiperTrack>
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={slideVariants}
                whileHover='hover'
              >
                <SwiperSlide>
                  <motion.div variants={contentVariants}>
                    <SlideContent>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <p dangerouslySetInnerHTML={{ __html: service.price }} />
                    </SlideContent>
                  </motion.div>
                </SwiperSlide>
              </motion.div>
            ))}
          </SwiperTrack>
        </SwiperWrapper>
      </SwiperContainer>
    </motion.div>
  );
};

export default Professional;
