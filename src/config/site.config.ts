// ============================================================================
// CHEZ PINO — site.config.ts
//
// THIS IS THE ONLY FILE YOU EDIT PER CLIENT (together with src/content/*.ts
// for longer lists — the full menu and the FAQ). One config object, real
// content, nothing hardcoded in the page templates.
//
// STILL TO CONFIRM WITH THE CLIENT BEFORE GOING LIVE (see README.md for the
// full list):
//   - exact opening time (only "closes at 23:00" is confirmed on Google;
//     `contact.hours.open` below is a reasonable placeholder, not verified)
//   - a real Instagram/Facebook/WhatsApp business number, if any
//   - the final domain name (update `identity.siteUrl` AND astro.config.mjs's
//     SITE_URL together, plus the Sitemap: line in public/robots.txt)
// ============================================================================

interface LocalizedString {
  fr: string;
  en: string;
  ar: string;
}

export interface SiteConfig {
  identity: {
    name: string;
    tagline: LocalizedString;
    city: string;
    country: string;
    siteUrl: string; // must match astro.config.mjs's SITE_URL exactly
    // The primary SERVICE keyword, deliberately without the city baked in —
    // every page composes it with `city` explicitly, exactly once per
    // sentence, to match what the local market actually searches.
    primaryKeyword: LocalizedString;
  };
  colors: {
    primary: string;
    accent: string;
    background: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string; // tel: link, digits only with country code
    address: string;
    mapsUrl?: string;
    openingHours: LocalizedString;
    // Structured hours for the live "open now / closed" badge. Restaurant
    // is open every day, same hours (until told otherwise).
    hours: { open: number; close: number };
    // ⚠ No verified Instagram/Facebook/WhatsApp business number exists yet
    // for Chez Pino — deliberately left undefined rather than invented.
    // Fill these in the day the client supplies real, confirmed links; the
    // header/footer already know how to render them once set (see
    // Header.astro / Footer.astro's `siteConfig.contact.xUrl &&` guards).
    instagramUrl?: string;
    facebookUrl?: string;
    whatsappNumber?: string; // digits only, country code, no + or spaces
  };
  reservations: {
    // No real booking backend exists for this client yet (no Supabase
    // project, no server). The reservation page's form is wired to a
    // mailto: fallback — see the TODO comment in
    // src/content-pages/ReservationContent.astro for exactly where a real
    // backend should be plugged in before this goes live.
    contactEmail?: string;
  };
  social: {
    googleReviewsUrl?: string;
    // Real, confirmed figures from the client's Google Business Profile —
    // not computed or guessed.
    googleRating?: string;
    googleReviewCount?: string;
  };
}

export const siteConfig: SiteConfig = {
  identity: {
    name: 'Chez Pino',
    tagline: {
      fr: 'Pizza, pasta & lounge au cœur de Rabat',
      en: 'Pizza, pasta & lounge in the heart of Rabat',
      ar: 'بيتزا وباستا وأجواء لاونج في قلب الرباط',
    },
    city: 'Rabat',
    country: 'Maroc',
    siteUrl: 'https://chez-pino.ma', // placeholder — update once a real domain is chosen
    primaryKeyword: {
      fr: 'restaurant italien',
      en: 'italian restaurant',
      ar: 'مطعم إيطالي',
    },
  },
  colors: {
    primary: '#F5C518',
    accent: '#D9A441',
    background: '#0B0B0C',
  },
  contact: {
    phoneDisplay: '05 37 71 70 70',
    phoneHref: 'tel:+212537717070',
    address: 'Imm 60, magasin n°4, Prestigia — Riyad Al Andalous, Rabat',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+PINO+Rabat',
    // ⚠ ASSUMPTION TO VERIFY: Google only confirms "closes at 23:00" — the
    // opening time of 12:00 is a reasonable placeholder, not verified with
    // the restaurant. Update the moment the real hours are confirmed.
    openingHours: {
      fr: 'Ouvert tous les jours : 12:00 - 23:00 (horaire d\'ouverture à confirmer)',
      en: 'Open every day: 12:00 PM – 11:00 PM (opening time to confirm)',
      ar: 'مفتوح كل يوم: 12:00 - 23:00 (وقت الفتح قيد التأكيد)',
    },
    hours: { open: 12, close: 23 },
    // instagramUrl / facebookUrl / whatsappNumber: intentionally omitted —
    // no verified links exist yet. See the TODO above.
  },
  reservations: {
    // TODO: connect to a real backend (e.g. a Supabase project, or a small
    // serverless function) before going live. For now the form on
    // /reservation falls back to a mailto: draft plus a prominent
    // "réservez par téléphone" call-to-action.
    contactEmail: undefined,
  },
  social: {
    // Cleaned Google Maps search link — opens the real Google Business
    // Profile listing for "Chez PINO Rabat".
    googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Chez+PINO+Rabat',
    googleRating: '4.1',
    googleReviewCount: '87',
  },
};

// ----------------------------------------------------------------------------
// STANDING SEO NOTES — read before editing page copy or adding new pages.
// 1. Keyword realism: use the term the local market actually types into
//    Google in the H1, body copy, meta title AND meta description of a
//    page — all four, not just one.
// 2. FAQ sections are structural, not decorative: AI answer engines pull
//    directly from clearly-formatted question/answer pairs.
// 3. Real photos beat every on-page trick combined — only one authentic
//    photo exists today (public/brand/storefront-hero.png). Everywhere
//    else a real photo is missing, this build uses typography-led layout
//    or a clearly-labelled placeholder block instead of a stock photo
//    pretending to be Chez Pino. See README.md for the full list of real
//    photos still needed from the client.
// ----------------------------------------------------------------------------
