import i18next from 'i18next';
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'


i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(Backend)
.init({
    debug:true,
    lng:'en',
    fallbackLng:'en',
    supportedLngs:['en','fr','tel'],
    detection:{
        order:['querystring','localStorage'],
        lookupQuerystring:'lang'
    },
    backend:{
        loadPath:'./locales/{{lng}}/{{ns}}.json'
    }
    



})
// debouncing
// throtlling
