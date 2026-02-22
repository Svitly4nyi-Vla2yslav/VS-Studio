import { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../i18n';

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  const getSafeLanguage = (input?: string): Language => {
    const base = (input || '').toLowerCase().split('-')[0];
    if ((SUPPORTED_LANGUAGES as readonly string[]).includes(base)) {
      return base as Language;
    }
    return 'de';
  };

  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang).then(() => {
      window.location.reload();
    });
  };

  return (
    <LanguageContext.Provider
      value={{ language: getSafeLanguage(i18n.resolvedLanguage || i18n.language), setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
