import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HTTPBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { BackendService } from './BackendService';
import HTTPService from 'i18next-http-backend';
/* eslint-disable no-unused-vars */

const fallbackLng = ["ru"];
const availableLanguages = ["ru", "en", "de", "fr"];
// const loadPath = 'https://app.phrase.com/';
const projectID = "a00ceabd177690370bd25ed0d65906a8";
const accessToken =
  "c6d2729ce9b2fb3e64a38d05d73871c0867dd5894cb849b2c9270b5b27f2f422";
const engLocale = "acc74a056640a9a38ef7ae0ca9435f3a";
const ruLocale = "a89e78357d1c576c32c493df765d6a75";
const deLocale = "d959f4c7145b3c7c039c7e5d706a13b5";
const frLocale = "13b92b5d3dd7aa718b5176cca396960c";
// const languageDetector = new LanguageDetector();
// const curLng = languageDetector.detect();
// console.log(curLng);
let lng = localStorage.getItem("i18nextLng");
console.log(lng);

i18n
  .use(HTTPService) // load translations using http (default public/assets/locals/en/translations)
  // .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng, // fallback language is english.
    lng: localStorage.getItem("i18nextLng"),

    detection: {
      checkWhitelist: true, // options for language detection
      order: [
        "localStorage",
        "querystring",
        "cookie",
        "sessionStorage",
        "htmlTag",
      ],
    },
    ns: projectID,
    backend: {
      loadPath:
        // "https://github.com/shamilabdullin/wave-access-test-project/tree/master/public/locales/{{lng}}/translation.json", // locale id - a89e78357d1c576c32c493df765d6a75
        //`https://api.phrase.com/v2/projects/{{ns}}/locales/{{lng}}/download?file_format=i18next`, // /a89e78357d1c576c32c493df765d6a75/translations
      "locales/{{lng}}/translation.json",
      crossDomain: true,
      customHeaders: {
        authorization: `token ${accessToken}`, // "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",
      },
    },

    react: {
      useSuspense: false,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;
/* eslint-disable no-unused-vars */
