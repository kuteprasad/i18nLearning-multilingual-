import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend

  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    preload: ['en', 'mr'],
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackLng: 'en',
    debug: true,
    returnObjects: true,
    interpolation:{
        escapeValue: false,
    },
    supportedLngs: ['en', 'mr'], // Add your supported languages here
    // backend: {
    //   // Point to your Express server
    //   loadPath: 'http://localhost:3000/locales/{{lng}}/{{ns}}.json',
        // crossDomain: true, // Enable cross-origin requests
    // },
  }, (err, t) => {
    // if (err) {
    //   i18next.options.backend.loadPath = 'http://localhost:8080/locales/{{lng}}/{{ns}}.json'
    //   i18next.services.backendConnector.backend.options.loadPath = 'http://localhost:8080/locales/{{lng}}/{{ns}}.json'
    //   i18next.reloadResources(['en', 'de'], null, (e) => {
    //     if (e) return console.error('after reload', e)
    //     console.log(t('welcome'))
    //     console.log(t('welcome', { lng: 'de' }))
    //   })
    //   return
    // }
    if (err) return console.error(err)
    // console.log(t('greeting'))
    // console.log(t('greeting', { lng: 'mr' }))
  });


export default i18n;




/* 
// this code was implemented first... then i tried more advanced this... 
import i18n from 'i18next'; //base
import { initReactI18next } from 'react-i18next'; // glues i18next to react

import { i18nextPlugin } from 'translation-check'; // for that GUI

import  Backend  from 'i18next-http-backend'; // for loading translations
import LanguageDetector from 'i18next-browser-languagedetector';  // to detect user language

const resources = {
    en: {
        translation: {
            greeting: "Hello, Welcome",
        },
    },
    mr: {
        translation: {
            greeting: "नमस्कार, सुस्वागतम",
        },
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "mr",
    interpolation: {
        escapevalue: false,
    }
});

i18n.use(i18nextPlugin).init({
  translationStats: { // optional options, if not provided it will guess based on your i18next config
    // queryStringParam: 'showtranslations',
    // sourceLng: 'en',
    // targetLngs: ['de', 'it'],
    // preserveEmptyStrings: false
  }
})


// http://localhost:3000?showtranslations

// use this link to see locize


export default i18n;

*/