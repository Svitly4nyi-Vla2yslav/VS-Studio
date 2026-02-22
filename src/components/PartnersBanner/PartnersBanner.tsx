import React from 'react';
import { easeOut, motion } from 'framer-motion';
import {
  SectionWrap,
  RowWrap,
  RowTitle,
  MarqueeViewport,
  MarqueeTrack,
  Badge,
} from './Partners.styled';

export type PartnerRow = {
  title?: string;
  items: string[];
  direction: 'left' | 'right';
  speed?: number;
};

type PartnersProps = {
  rows?: PartnerRow[];
};

const defaultRows: PartnerRow[] = [
  {
    title: 'Trusted Technologies',
    direction: 'right',
    items: ['React', 'TypeScript', 'SEO', 'Analytics', 'Automation'],
  },
  {
    title: 'Growth Focus',
    direction: 'left',
    items: ['Leads', 'Funnels', 'Ads', 'CRO', 'Performance'],
  },
];

const Partners: React.FC<PartnersProps> = ({ rows = defaultRows }) => {
  return (
    <SectionWrap>
      {rows.map((row, idx) => {
        const speed = row.speed ?? 22;
        const duplicated = [...row.items, ...row.items];

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
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <MarqueeTrack
                  as={motion.div}
                  animate={{
                    x:
                      row.direction === 'right'
                        ? ['-50%', '0%']
                        : ['0%', '-50%'],
                  }}
                  transition={{
                    duration: speed,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                >
                  {duplicated.map((item, i) => (
                    <Badge key={`${item}-${i}`}>{item}</Badge>
                  ))}
                </MarqueeTrack>
              </motion.div>
            </MarqueeViewport>
          </RowWrap>
        );
      })}
    </SectionWrap>
  );
};

export default Partners;
