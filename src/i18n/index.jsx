import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/i18n/locales/en.json';
import pt from '@/i18n/locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
