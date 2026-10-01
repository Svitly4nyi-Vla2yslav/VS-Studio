import { useEffect, useState } from 'react';
import { useLanguage } from '../../../components/LanguageSwitcher/LanguageContext';
import { ASSISTANT_SUPPORTED_LANGUAGES } from '../constants';
import { coerceAssistantLanguage, detectAssistantLanguage } from '../helpers';
import type { AssistantLanguage } from '../types';

/**
 * Нормалізує мову сайту до формату асистента та повертає її, якщо вона підтримується.
 * Інакше використовує мову браузера, а поза браузером — німецьку як стабільний fallback.
 */
const resolvePreferredLanguage = (siteLanguage: string): AssistantLanguage => {
  const normalized = coerceAssistantLanguage(siteLanguage);
  if ((ASSISTANT_SUPPORTED_LANGUAGES as string[]).includes(normalized)) {
    return normalized;
  }

  return typeof navigator !== 'undefined' ? coerceAssistantLanguage(navigator.language) : 'de';
};

/**
 * Зберігає активну мову асистента й надає визначення мови з тексту користувача.
 * Початкове значення походить із мови сайту; зміна сайту автоматично замінює лише
 * початкову німецьку, щоб не перезаписати мову, вже визначену з діалогу.
 */
export const useLanguageDetection = () => {
  const { language: siteLanguage } = useLanguage();
  const [assistantLanguage, setAssistantLanguage] = useState<AssistantLanguage>(() => resolvePreferredLanguage(siteLanguage));

  useEffect(() => {
    setAssistantLanguage(previous => (previous === 'de' && siteLanguage !== 'de' ? resolvePreferredLanguage(siteLanguage) : previous));
  }, [siteLanguage]);

  /**
   * Визначає мову переданого тексту з урахуванням поточної мови як fallback,
   * оновлює стан і повертає те саме значення для негайного використання викликачем.
   */
  const updateLanguageFromText = (text: string) => {
    const detected = detectAssistantLanguage(text, assistantLanguage);
    setAssistantLanguage(detected);
    return detected;
  };

  return { assistantLanguage, setAssistantLanguage, updateLanguageFromText };
};
