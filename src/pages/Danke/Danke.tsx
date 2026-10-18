import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import StarfieldBackground from '../../components/StarfieldBackground/StarfieldBackground';
import './Danke.css';

type DankeLocationState = { confirmedSubmission?: boolean };

const Danke = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const confirmed = useRef(Boolean((location.state as DankeLocationState | null)?.confirmedSubmission)).current;

  useEffect(() => {
    if (confirmed) navigate(location.pathname, { replace: true, state: null });
  }, [confirmed, location.pathname, navigate]);

  const entrance = reduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className={`danke-page${confirmed ? ' is-confirmed' : ' is-neutral'}`}>
      <StarfieldBackground className='danke-page__starfield' density={0.58} maxFps={24} />
      <div className='danke-page__ambient' aria-hidden='true' />
      <motion.div
        className='danke-page__content'
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={entrance}
      >
        <motion.div
          className='danke-page__status-mark'
          initial={reduceMotion ? false : { opacity: 0, scale: 0.72, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.12, duration: 0.62, ease: 'easeOut' }}
          aria-hidden='true'
        >
          <span className='danke-page__status-ring' />
          {confirmed ? (
            <svg viewBox='0 0 48 48' role='presentation'>
              <motion.path
                d='M14 25.5 21 32l13-16'
                fill='none'
                stroke='currentColor'
                strokeWidth='3.2'
                strokeLinecap='round'
                strokeLinejoin='round'
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={reduceMotion ? { duration: 0 } : { delay: 0.42, duration: 0.52, ease: 'easeOut' }}
              />
            </svg>
          ) : <span className='danke-page__monogram'>VS</span>}
        </motion.div>

        <div className='danke-page__glass'>
          <span className='danke-page__eyebrow'>VS Web Studio</span>
          <h1>{confirmed ? t('danke.title') : t('danke.directTitle')}</h1>
          <p className='danke-page__lead' role='status' aria-live='polite'>
            {confirmed ? t('danke.confirmed') : t('danke.direct')}
          </p>
          <p className='danke-page__subtitle'>
            {confirmed ? t('danke.subtitle') : t('danke.directSubtitle')}
          </p>
          <div className='danke-page__divider' aria-hidden='true'><span /></div>
          <div className='danke-page__actions'>
            <Link className='btn btn-primary' to='/'><span>{t('danke.home')}</span></Link>
            <Link className='btn btn-secondary' to='/services'><span>{t('danke.services')}</span></Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Danke;
