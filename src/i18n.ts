import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const TRANSLATION_ASSET_VERSION = "20260309-contact-hero-refresh";

export const SUPPORTED_LANGUAGES = [
  "de",
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
      // Bust cached locale payloads after translation repairs.
      loadPath: `/locales/{{lng}}/translation.json?v=${TRANSLATION_ASSET_VERSION}`,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    }
  });

export default i18n;
