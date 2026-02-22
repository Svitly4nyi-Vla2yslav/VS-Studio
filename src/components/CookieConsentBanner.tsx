import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type ConsentState = {
  essential: true;
  statistics: boolean;
  marketing: boolean;
};

const KEY = 'cookie_consent_v2';

const CookieConsentBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ConsentState;
        setStatistics(Boolean(parsed.statistics));
        setMarketing(Boolean(parsed.marketing));
      } catch {
        // ignore malformed localStorage
      }
    }
    setIsOpen(!saved);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const saved = window.localStorage.getItem(KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as ConsentState;
          setStatistics(Boolean(parsed.statistics));
          setMarketing(Boolean(parsed.marketing));
        } catch {
          // ignore malformed localStorage
        }
      }
      setIsOpen(true);
      setShowSettings(true);
    };

    window.addEventListener('open-cookie-settings', openSettings);
    return () => window.removeEventListener('open-cookie-settings', openSettings);
  }, []);

  const payload: ConsentState = useMemo(
    () => ({ essential: true, statistics, marketing }),
    [statistics, marketing]
  );

  const save = (state: ConsentState) => {
    window.localStorage.setItem(KEY, JSON.stringify(state));
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isLoaded || !isOpen) return null;

  return (
    <>
      <motion.div
        className='cookie-banner'
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        role='dialog'
        aria-live='polite'
        aria-label={t('cookie.aria')}
      >
        <div className='cookie-text'>
          {t('cookie.bannerText')}{' '}
          <a href='/datenschutz'>{t('footer.datenschutz')}</a>,{' '}
          <a href='/cookies'>{t('footer.cookies')}</a>,{' '}
          <a href='/impressum'>{t('footer.impressum')}</a>.
        </div>
        <div className='cookie-actions'>
          <button className='btn btn-secondary cookie-btn' onClick={() => save({ essential: true, statistics: false, marketing: false })}>
            {t('cookie.onlyEssential')}
          </button>
          <button className='btn btn-secondary cookie-btn' onClick={() => setShowSettings(true)}>
            {t('cookie.settings')}
          </button>
          <button className='btn btn-primary cookie-btn' onClick={() => save({ essential: true, statistics: true, marketing: true })}>
            {t('cookie.acceptAll')}
          </button>
        </div>
      </motion.div>

      {showSettings ? (
        <motion.div className='cookie-modal-backdrop' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className='cookie-modal' initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h3>{t('cookie.modalTitle')}</h3>
            <p className='muted'>{t('cookie.modalText')}</p>

            <label className='cookie-option'>
              <input type='checkbox' checked disabled />
              <span>{t('cookie.essential')}</span>
            </label>
            <label className='cookie-option'>
              <input type='checkbox' checked={statistics} onChange={e => setStatistics(e.target.checked)} />
              <span>{t('cookie.statistics')}</span>
            </label>
            <label className='cookie-option'>
              <input type='checkbox' checked={marketing} onChange={e => setMarketing(e.target.checked)} />
              <span>{t('cookie.marketing')}</span>
            </label>

            <div className='cookie-actions'>
              <button className='btn btn-secondary cookie-btn' onClick={() => setShowSettings(false)}>{t('common.cancel')}</button>
              <button className='btn btn-primary cookie-btn' onClick={() => save(payload)}>{t('cookie.saveSelection')}</button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default CookieConsentBanner;
