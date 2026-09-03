// Shared language plumbing for the trilingual site.
export type Language = 'fr' | 'en' | 'ar';

export const LANGUAGES: Language[] = ['fr', 'en', 'ar'];

export const LANGUAGE_LABEL: Record<Language, string> = {
  fr: 'FR',
  en: 'EN',
  ar: 'AR',
};

export const LANGUAGE_NATIVE_NAME: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
};

export interface LocalizedText {
  fr: string;
  en: string;
  ar: string;
}

export function t(text: LocalizedText, lang: Language): string {
  return text[lang] ?? text.fr;
}

export function isRTL(lang: Language): boolean {
  return lang === 'ar';
}

// Plain-text "→" used inline in link labels — flips direction on RTL pages.
export function arrow(lang: Language): string {
  return lang === 'ar' ? '←' : '→';
}

// Given the current URL path and a target language, return the equivalent
// path in that language. FR is unprefixed (the default locale), EN/AR live
// under /en/ and /ar/.
export function localizedPath(pathname: string, lang: Language): string {
  const stripped = pathname.replace(/^\/(en|ar)(\/|$)/, '/');
  if (lang === 'fr') return stripped;
  return `/${lang}${stripped === '/' ? '' : stripped}`;
}

export function currentLanguage(pathname: string): Language {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  if (pathname.startsWith('/ar/') || pathname === '/ar') return 'ar';
  return 'fr';
}
