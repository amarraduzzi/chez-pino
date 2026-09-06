// Shared, short, repeated-everywhere UI strings — navigation labels, button
// labels, common info labels. Page-specific prose lives next to each page
// instead of here (see the `copy` object at the top of each
// src/content-pages/*.astro file).
import type { LocalizedText } from './languages';

export const nav: Record<
  'accueil' | 'menu' | 'carte' | 'aPropos' | 'avis' | 'club' | 'reservation' | 'faq' | 'contact',
  LocalizedText
> = {
  accueil: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
  menu: { fr: 'Menu', en: 'Menu', ar: 'القائمة' },
  carte: { fr: 'La carte', en: 'Full menu', ar: 'القائمة الكاملة' },
  aPropos: { fr: 'À propos', en: 'About', ar: 'من نحن' },
  avis: { fr: 'Avis', en: 'Reviews', ar: 'التقييمات' },
  club: { fr: 'Privilège', en: 'Privilège', ar: 'بريفيليج' },
  reservation: { fr: 'Réserver', en: 'Reserve', ar: 'احجز طاولة' },
  faq: { fr: 'FAQ', en: 'FAQ', ar: 'الأسئلة الشائعة' },
  contact: { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
};

export const common = {
  reserverUneTable: { fr: 'Réserver une table', en: 'Reserve a table', ar: 'احجز طاولة' } satisfies LocalizedText,
  voirLaCarte: { fr: 'Voir la carte', en: 'View the menu', ar: 'شاهد القائمة' } satisfies LocalizedText,
  appelerLeRestaurant: { fr: 'Appeler le restaurant', en: 'Call the restaurant', ar: 'اتصل بالمطعم' } satisfies LocalizedText,
  menuComplet: { fr: 'Menu complet', en: 'Full menu', ar: 'القائمة الكاملة' } satisfies LocalizedText,
  decouvrirLeMenu: { fr: 'Découvrir le menu', en: 'Discover the menu', ar: 'اكتشف القائمة' } satisfies LocalizedText,
  voirLaCarteComplete: { fr: 'Voir la carte complète', en: 'See the full menu', ar: 'شاهد القائمة الكاملة' } satisfies LocalizedText,
  pretAReserver: { fr: 'Prêt·e à réserver ?', en: 'Ready to reserve?', ar: 'جاهزون للحجز؟' } satisfies LocalizedText,
  itineraire: { fr: 'Itinéraire', en: 'Directions', ar: 'الاتجاهات' } satisfies LocalizedText,
  retourAccueil: { fr: "Retour à l'accueil", en: 'Back to home', ar: 'العودة للرئيسية' } satisfies LocalizedText,

  adresse: { fr: 'Adresse', en: 'Address', ar: 'العنوان' } satisfies LocalizedText,
  telephone: { fr: 'Téléphone', en: 'Phone', ar: 'الهاتف' } satisfies LocalizedText,
  horaires: { fr: 'Horaires', en: 'Opening hours', ar: 'ساعات العمل' } satisfies LocalizedText,

  avisGoogle: { fr: 'Avis Google', en: 'Google reviews', ar: 'تقييمات Google' } satisfies LocalizedText,
  voirSurGoogle: { fr: 'Voir sur Google', en: 'View on Google', ar: 'شاهد على Google' } satisfies LocalizedText,
  ouvertMaintenant: { fr: 'Ouvert maintenant', en: 'Open now', ar: 'مفتوح الآن' } satisfies LocalizedText,
  fermeMaintenant: { fr: 'Fermé maintenant', en: 'Closed now', ar: 'مغلق الآن' } satisfies LocalizedText,
  fermeA: { fr: 'Ferme à', en: 'Closes at', ar: 'يغلق عند' } satisfies LocalizedText,
  ouvreA: { fr: 'Ouvre à', en: 'Opens at', ar: 'يفتح عند' } satisfies LocalizedText,
  prixSurDemande: { fr: 'Prix sur demande', en: 'Price on request', ar: 'السعر عند الطلب' } satisfies LocalizedText,
};

export const footer = {
  confidentialite: { fr: 'Confidentialité', en: 'Privacy', ar: 'الخصوصية' } satisfies LocalizedText,
  builtBy: { fr: 'Site réalisé pour Chez Pino', en: 'Site built for Chez Pino', ar: 'موقع تم إنجازه لـ Chez Pino' } satisfies LocalizedText,
};

export const place = {
  city: { fr: 'Rabat', en: 'Rabat', ar: 'الرباط' } satisfies LocalizedText,
  country: { fr: 'Maroc', en: 'Morocco', ar: 'المغرب' } satisfies LocalizedText,
};

export const seoDefaults = {
  legal: { fr: 'Légal', en: 'Legal', ar: 'قانوني' } satisfies LocalizedText,
};
