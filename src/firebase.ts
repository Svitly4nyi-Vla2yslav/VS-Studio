// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9zD79gr5OMNXM-Hl0Mxcd0i6L25q-u3M",
  authDomain: "vs-web-studio.firebaseapp.com",
  projectId: "vs-web-studio",
  storageBucket: "vs-web-studio.firebasestorage.app",
  messagingSenderId: "775581499549",
  appId: "1:775581499549:web:f891390f0322b4c4f95474",
  measurementId: "G-7MBJHSMV37"
};

export const app = initializeApp(firebaseConfig);

export const analyticsPromise =
  typeof window === "undefined" ? Promise.resolve(null) : isSupported().then((supported) => (supported ? getAnalytics(app) : null));
