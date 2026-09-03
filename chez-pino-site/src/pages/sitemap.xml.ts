import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site.config';
import { LANGUAGES, localizedPath } from '../i18n/languages';

// Hand-written static sitemap — a fixed, small page count doesn't need a
// third-party integration. Update this list if pages are added or removed.
const ROUTES = ['/', '/menu', '/carte', '/a-propos', '/avis', '/club', '/reservation', '/faq', '/contact'];

export const GET: APIRoute = () => {
  const base = siteConfig.identity.siteUrl.replace(/\/$/, '');
  const urls = LANGUAGES.flatMap((lang) =>
    ROUTES.map((route) => `  <url>\n    <loc>${base}${localizedPath(route, lang)}</loc>\n  </url>`)
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
