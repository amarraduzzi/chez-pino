import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Site URL is read from src/config/site.config.ts at content-authoring time,
// but astro.config needs it too (for sitemap + canonical generation). Kept
// as a plain constant here — update this AND site.config.ts's identity.siteUrl
// together once the client has a real domain (see the checklist at the top
// of site.config.ts). Placeholder until then.
const SITE_URL = 'https://chez-pino.ma';

export default defineConfig({
  site: SITE_URL,
  // @astrojs/sitemap is skipped in favour of a hand-written static sitemap
  // endpoint (src/pages/sitemap.xml.ts) — a fixed, small page count doesn't
  // need a third-party integration, and it removes a dependency-drift risk.
  integrations: [tailwind({ applyBaseStyles: false })],
  // Static output: every page ships as pre-rendered HTML, readable by
  // non-JS crawlers, with no client-side render step needed to see content.
  output: 'static',
  // FR primary (unprefixed), EN and AR as translations under /en/ and /ar/.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
});
