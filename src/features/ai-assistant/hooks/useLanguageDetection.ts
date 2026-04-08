import { useEffect, useState } from 'react';
import { useLanguage } from '../../../components/LanguageSwitcher/LanguageContext';
import { ASSISTANT_SUPPORTED_LANGUAGES } from '../constants';
import { coerceAssistantLanguage, detectAssistantLanguage } from '../helpers';
import type { AssistantLanguage } from '../types';

const resolvePreferredLanguage = (siteLanguage: string): AssistantLanguage => {
  const normalized = coerceAssistantLanguage(siteLanguage);
  if ((ASSISTANT_SUPPORTED_LANGUAGES as string[]).includes(normalized)) {
    return normalized;
  }

  return typeof navigator !== 'undefined' ? coerceAssistantLanguage(navigator.language) : 'de';
};

export const useLanguageDetection = () => {
  const { language: siteLanguage } = useLanguage();
  const [assistantLanguage, setAssistantLanguage] = useState<AssistantLanguage>(() => resolvePreferredLanguage(siteLanguage));

  useEffect(() => {
    setAssistantLanguage(previous => (previous === 'de' && siteLanguage !== 'de' ? resolvePreferredLanguage(siteLanguage) : previous));
  }, [siteLanguage]);

  const updateLanguageFromText = (text: string) => {
    const detected = detectAssistantLanguage(text, assistantLanguage);
    setAssistantLanguage(detected);
    return detected;
  };

  return { assistantLanguage, setAssistantLanguage, updateLanguageFromText };
};
