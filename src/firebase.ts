// Публічні параметри Firebase надходять із Vite env і не містять серверних секретів.
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

/** Ініціалізує єдиний Firebase App для браузерних сервісів цього застосунку. */
export const app = initializeApp(firebaseConfig);

/**
 * Ліниво повертає Analytics лише у підтримуваному браузері.
 * Під час SSR або в несумісному середовищі Promise завершується значенням null,
 * тому імпорт модуля не звертається до browser API без window.
 */
export const analyticsPromise =
  typeof window === "undefined" ? Promise.resolve(null) : isSupported().then((supported) => (supported ? getAnalytics(app) : null));
