import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

export const languagesList = {
  en: {
    shortCode: 'en',
    key: 'en',
    title: 'English',
  },
  tr: {
    shortCode: 'tr',
    key: 'tr',
    title: 'Turkish',
  },
};

i18n
  .use(initReactI18next)
  .use(Backend) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    initImmediate: false,
    defaultNS: 'common',
    fallbackNS: 'common',
    ns: ['common'],
    load: 'languageOnly',
    fallbackLng: languagesList.en.shortCode,
    partialBundledLanguages: true,
    saveMissing: false,
    debug: false,

    detection: {
      order: ['localStorage', 'htmlTag', 'querystring', 'cookie', 'navigator', 'path', 'subdomain'],
    },

    react: {
      wait: true,
      nsMode: 'default',
      useSuspense: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // addPath: '/locales/missing.json',
    },

    /*
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      */
  });

export default i18n;
