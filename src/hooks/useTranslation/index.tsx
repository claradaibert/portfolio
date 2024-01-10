import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
        translation: {
            '@home/title': "Hello.\nI'm Clara Daibert",
            '@home/subtitle': "I'm a front-end developer based in Rio de Janeiro, Brazil"
        }
    },
    pt: {
        translation: {
            '@home/title': "Oi.\nEu sou a Clara Daibert",
            '@home/subtitle': "Eu sou uma desenvolvedora front-end do Rio de Janeiro"
        }
    }
  },
});

export default i18n;
