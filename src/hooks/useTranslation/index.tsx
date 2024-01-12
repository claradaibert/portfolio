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
            '@home/subtitle': "I'm a front-end developer based in Rio de Janeiro, Brazil",
            '@aboutMe/textBody': "I’m Clara, a  front-end developer with over 2 years of experience, creating and improving digital products for consumers and businesses. I’m always striving to learn more and love a good challenge.",
        }
    },
    pt: {
        translation: {
            '@home/title': "Oi.\nEu sou a Clara Daibert",
            '@home/subtitle': "Eu sou uma desenvolvedora front-end do Rio de Janeiro",
            '@aboutMe/textBody': "Eu sou a Clara, uma desenvolvedora front-end com mais de 2 anos de experiência, criando e aprimorando produtos digitais para consumidores e empresas. Estou sempre buscando aprender cada vez mais e adoro um bom desafio",
        }
    }
  },
});

export default i18n;
