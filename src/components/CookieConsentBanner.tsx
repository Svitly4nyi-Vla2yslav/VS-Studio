import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type ConsentState = {
  essential: true;
  statistics: boolean;
  marketing: boolean;
};

const KEY = 'cookie_consent_v2';

const CookieConsentBanner: React.FC = () => {
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
        aria-label='Cookie consent'
      >
        <div className='cookie-text'>
          Wir nutzen Cookies nach DSGVO/TTDSG: notwendige Cookies sind aktiv, optionale Cookies
          (Statistik/Marketing) nur mit Einwilligung. Mehr Infos in
          {' '}<a href='/datenschutz'>Datenschutz</a>, <a href='/cookies'>Cookies</a>, <a href='/impressum'>Impressum</a>.
        </div>
        <div className='cookie-actions'>
          <button className='btn btn-secondary cookie-btn' onClick={() => save({ essential: true, statistics: false, marketing: false })}>
            Nur essenziell
          </button>
          <button className='btn btn-secondary cookie-btn' onClick={() => setShowSettings(true)}>
            Einstellungen
          </button>
          <button className='btn btn-primary cookie-btn' onClick={() => save({ essential: true, statistics: true, marketing: true })}>
            Alle akzeptieren
          </button>
        </div>
      </motion.div>

      {showSettings ? (
        <motion.div className='cookie-modal-backdrop' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className='cookie-modal' initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h3>Datenschutz-Einstellungen</h3>
            <p className='muted'>Du kannst deine Einwilligung jederzeit in den Cookie-Einstellungen ändern.</p>

            <label className='cookie-option'>
              <input type='checkbox' checked disabled />
              <span>Essenzielle Cookies (immer aktiv)</span>
            </label>
            <label className='cookie-option'>
              <input type='checkbox' checked={statistics} onChange={e => setStatistics(e.target.checked)} />
              <span>Statistik (z. B. Reichweite, Nutzung)</span>
            </label>
            <label className='cookie-option'>
              <input type='checkbox' checked={marketing} onChange={e => setMarketing(e.target.checked)} />
              <span>Marketing (z. B. Social/Ads Tracking)</span>
            </label>

            <div className='cookie-actions'>
              <button className='btn btn-secondary cookie-btn' onClick={() => setShowSettings(false)}>Abbrechen</button>
              <button className='btn btn-primary cookie-btn' onClick={() => save(payload)}>Auswahl speichern</button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default CookieConsentBanner;
