import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Ця версія додається до URL файлів перекладів, щоб браузер не тримав старі pricing-тексти в кеші.
const TRANSLATION_ASSET_VERSION = "20260522-portfolio-translations";

export const SUPPORTED_LANGUAGES = [
  "de",
  "en",
  "uk",
  "tr",
  "ar",
  "pl",
  "ku",
  "fa",
  "it",
  "es",
  "el",
  "ro",
  "bg",
] as const;

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: [...SUPPORTED_LANGUAGES],
    fallbackLng: "de",
    debug: process.env.NODE_ENV === 'development',
    interpolation: { 
      escapeValue: false 
    },
    backend: {
      // Оновлюємо кеш перекладів після правок pricing-секції.
      loadPath: `/locales/{{lng}}/translation.json?v=${TRANSLATION_ASSET_VERSION}`,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    }
  });

export default i18n;

