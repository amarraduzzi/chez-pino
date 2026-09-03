import { siteConfig } from '../config/site.config';
import { common } from '../i18n/ui';
import { t, localizedPath, type Language } from '../i18n/languages';

// Single source of truth for the "Réserver une table" CTA that appears in
// the header, footer, and every page's primary CTA button. There is no
// order-ahead platform for Chez Pino (unlike some reference templates) —
// every primary CTA here points at the reservation page, in whichever
// language is asking.
export function getReserveCtaLabel(lang: Language = 'fr') {
  return {
    label: t(common.reserverUneTable, lang),
    href: localizedPath('/reservation', lang),
  };
}

export function getCallCtaLabel(lang: Language = 'fr') {
  return {
    label: t(common.appelerLeRestaurant, lang),
    href: siteConfig.contact.phoneHref,
  };
}
