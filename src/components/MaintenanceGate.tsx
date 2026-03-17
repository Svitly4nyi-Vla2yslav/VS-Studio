import { ReactNode, useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'vs-studio-maintenance-bypass';
const REQUIRED_TAPS = 5;
const TAP_RESET_MS = 3200;

const readStoredAccess = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(STORAGE_KEY) === 'true';
};

type MaintenanceGateProps = {
  children: ReactNode;
};

export const MaintenanceGate = ({ children }: MaintenanceGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(readStoredAccess);
  const [tapCount, setTapCount] = useState(0);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const unlockSite = () => {
    window.localStorage.setItem(STORAGE_KEY, 'true');
    setIsUnlocked(true);
    setTapCount(0);

    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const handleGhostTrigger = () => {
    const nextTapCount = tapCount + 1;

    if (nextTapCount >= REQUIRED_TAPS) {
      unlockSite();
      return;
    }

    setTapCount(nextTapCount);

    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      setTapCount(0);
      resetTimerRef.current = null;
    }, TAP_RESET_MS);
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className='maintenance-screen'>
      <button
        type='button'
        className='maintenance-ghost-trigger'
        aria-label='Open internal preview access'
        onClick={handleGhostTrigger}
      />

      <div className='maintenance-shell'>
        <div className='maintenance-badge'>VS Web Studio</div>
        <p className='maintenance-kicker'>Website update in progress</p>
        <h1>We are building something sharper.</h1>
        <p className='maintenance-copy'>
          Our website is currently under development. We are preparing the new
          experience and will be back online soon.
        </p>
        <div className='maintenance-meta'>
          <span>Design</span>
          <span>Development</span>
          <span>Launch soon</span>
        </div>
      </div>
    </div>
  );
};
