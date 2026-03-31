import React from 'react';
import { easeOut, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard } from 'swiper/modules';
import {
  SectionWrap,
  RowWrap,
  RowTitle,
  MarqueeViewport,
  CardsGrid,
  Badge,
  CardBg,
  CardOverlay,
  CardContent,
  CardTop,
  CardBottom,
  BadgeIcon,
  BadgeGroup,
  BadgeText,
  BadgeDesc,
} from './Partners.styled';
import 'swiper/css';

export type PartnerBadgeItem = {
  label: string;
  description?: string;
  group?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  iconBg?: string;
  backgroundImage?: string;
};

export type PartnerRow = {
  title?: string;
  items: PartnerBadgeItem[];
  direction: 'left' | 'right';
  speed?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  spaceBetween?: number;
  breakpoints?: Record<number, { slidesPerView: number }>;
  transitionSpeed?: number;
};

type PartnersProps = {
  rows?: PartnerRow[];
  variant?: 'carousel' | 'grid';
};

const defaultRows: PartnerRow[] = [
  {
    title: 'Trusted Technologies',
    direction: 'left',
    speed: 68,
    autoplay: true,
    items: [
      { label: 'React', description: 'UI', group: 'Tech' },
      { label: 'TypeScript', description: 'Typing', group: 'Tech' },
      { label: 'SEO', description: 'Visibility', group: 'Growth' },
      { label: 'Analytics', description: 'Data', group: 'Growth' },
      { label: 'Automation', description: 'Ops', group: 'AI' },
    ],
  },
];

const Partners: React.FC<PartnersProps> = ({ rows = defaultRows, variant = 'carousel' }) => {
  const defaultBreakpoints = {
    0: { slidesPerView: 1.08 },
    560: { slidesPerView: 1.35 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 3.45 },
  };

  const renderCard = (item: PartnerBadgeItem, key: string) => (
    <Badge key={key}>
      <CardBg className='card-bg' $backgroundImage={item.backgroundImage} />
      <CardOverlay className='card-overlay' />
      <CardContent className='card-content'>
        <CardTop>
          {item.icon ? (
            <BadgeIcon
              className='badge-icon'
              style={{
                color: item.iconColor ?? '#fff',
                background: item.iconBg ?? 'rgba(255,255,255,.18)',
              }}
            >
              {item.icon}
            </BadgeIcon>
          ) : null}
          {item.group ? <BadgeGroup>{item.group}</BadgeGroup> : null}
        </CardTop>
        <CardBottom>
          <BadgeText className='badge-title'>{item.label}</BadgeText>
          {item.description ? <BadgeDesc className='badge-desc'>{item.description}</BadgeDesc> : null}
        </CardBottom>
      </CardContent>
    </Badge>
  );

  return (
    <SectionWrap>
      {rows.map((row, idx) => {
        const autoplayDelay = Math.max((row.speed ?? 60) * 54, 3200);
        const shouldAutoplay = row.autoplay ?? true;
        const transitionSpeed = row.transitionSpeed ?? 1400;

        return (
          <RowWrap key={`${row.title ?? 'row'}-${idx}`}>
            {row.title ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <RowTitle>{row.title}</RowTitle>
              </motion.div>
            ) : null}

            {variant === 'grid' ? (
              <CardsGrid>
                {row.items.map((item, i) =>
                  renderCard(item, `${item.group ?? 'group'}-${item.label}-${i}`)
                )}
              </CardsGrid>
            ) : (
              <MarqueeViewport>
                <Swiper
                  modules={[A11y, Autoplay, Keyboard]}
                  className='partners-swiper'
                  spaceBetween={row.spaceBetween ?? 16}
                  speed={transitionSpeed}
                  loop={row.items.length > 3}
                  loopAdditionalSlides={row.items.length}
                  watchSlidesProgress
                  allowTouchMove
                  grabCursor
                  keyboard={{ enabled: true }}
                  autoplay={
                    shouldAutoplay
                      ? {
                          delay: row.autoplayDelay ?? autoplayDelay,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                          reverseDirection: row.direction === 'right',
                        }
                      : false
                  }
                  breakpoints={row.breakpoints ?? defaultBreakpoints}
                >
                  {row.items.map((item, i) => (
                    <SwiperSlide key={`${item.group ?? 'group'}-${item.label}-${i}`}>
                      {renderCard(item, `${item.group ?? 'group'}-${item.label}-${i}-card`)}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </MarqueeViewport>
            )}
          </RowWrap>
        );
      })}
    </SectionWrap>
  );
};

export default Partners;
