import { en } from './locales/en';
import { pt } from './locales/pt';

export type Language = 'pt' | 'en';
export type TranslationKey = keyof typeof pt;

export const i18n = {
  pt,
  en,
};

export function getTranslations(lang: Language) {
  return i18n[lang];
}

export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'pt' ? 'pt' : 'en';
}

export function getSavedLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  
  return (localStorage.getItem('language') as Language) || getBrowserLanguage();
} 