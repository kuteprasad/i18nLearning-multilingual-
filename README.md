Building a Multi Lingual Sample Project 
using i18n library ... 
1) 
#npm package
$ npm install react-i18next i18next --save

then see i18n.js

import it in main.jsx

used the hook in  app.jsx ( can be used anywhere )

2)
#npm package
$ npm install translation-check

[
    import { i18nextPlugin } from 'translation-check'

i18next.use(i18nextPlugin).init({
  // ...your i18next options
})

] add this in i18n.js

see output at: http://localhost:5173?showtranslations


3)
# if you'd like to detect user language and load translation
$ npm install i18next-http-backend i18next-browser-languagedetector --save

>> add below code to backend/server.js

// Serve static files from the 'public/locales' directory
app.use('/locales', express.static(path.join(__dirname, 'public', 'locales')));

>> add below option while initializing i18next in frontend

i18n
  .use(Backend) // Here we use 'Backend'
  .use(LanguageDetector)
  .use(initReactI18next)
.init({
    lng: 'en',
    preload: ['en', 'mr'],
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'es', 'fr'], // Add your supported languages here
    backend: {
      // Point to your Express server
      loadPath: 'http://localhost:5000/locales/{{lng}}/{{ns}}.json',
    },
  }