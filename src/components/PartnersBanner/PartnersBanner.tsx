import React from 'react';
import { easeOut, motion } from 'framer-motion';
import {
  SectionWrap,
  RowWrap,
  RowTitle,
  MarqueeViewport,
  MarqueeTrack,
  Badge,
  BadgeIcon,
  BadgeGroup,
  BadgeText,
  BadgeDesc,
} from './Partners.styled';

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
};

type PartnersProps = {
  rows?: PartnerRow[];
};

const defaultRows: PartnerRow[] = [
  {
    title: 'Trusted Technologies',
    direction: 'left',
    speed: 60,
    items: [
      { label: 'React', description: 'UI', group: 'Tech' },
      { label: 'TypeScript', description: 'Typing', group: 'Tech' },
      { label: 'SEO', description: 'Visibility', group: 'Growth' },
      { label: 'Analytics', description: 'Data', group: 'Growth' },
      { label: 'Automation', description: 'Ops', group: 'AI' },
    ],
  },
];

const Partners: React.FC<PartnersProps> = ({ rows = defaultRows }) => {
  return (
    <SectionWrap>
      {rows.map((row, idx) => {
        const speed = row.speed ?? 60;
        const tripled = [...row.items, ...row.items, ...row.items];

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

            <MarqueeViewport>
              <MarqueeTrack
                as={motion.div}
                animate={{
                  x:
                    row.direction === 'right'
                      ? ['-33.3333%', '0%']
                      : ['0%', '-33.3333%'],
                }}
                transition={{
                  duration: speed,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                {tripled.map((item, i) => (
                  <Badge key={`${item.group ?? 'group'}-${item.label}-${i}`} $backgroundImage={item.backgroundImage}>
                    <div className='badge-top'>
                      {item.icon ? <BadgeIcon style={{ color: item.iconColor ?? '#fff', background: item.iconBg ?? 'rgba(255,255,255,.18)' }}>{item.icon}</BadgeIcon> : null}
                      {item.group ? <BadgeGroup>{item.group}</BadgeGroup> : null}
                    </div>
                    <BadgeText>{item.label}</BadgeText>
                    {item.description ? <BadgeDesc>{item.description}</BadgeDesc> : null}
                  </Badge>
                ))}
              </MarqueeTrack>
            </MarqueeViewport>
          </RowWrap>
        );
      })}
    </SectionWrap>
  );
};

export default Partners;
