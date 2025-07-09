// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzbek from './locales/uzbek.json';
import russian from './locales/russian.json';
import english from './locales/english.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uzbek },
      ru: { translation: russian },
      en: { translation: english },
    },
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;