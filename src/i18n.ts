import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "en", // Si no encuentra el idioma, usará inglés
  interpolation: {
    escapeValue: false, // React ya protege contra XSS
  },
});

export default i18n;
