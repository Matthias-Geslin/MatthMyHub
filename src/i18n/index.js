import { createI18n } from 'vue-i18n'
import en from "./locales/en.json"

export default createI18n({
    legacy: false, 
    globalInjection: true, 
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    messages: {
        en
    }
})