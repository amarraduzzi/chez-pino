# Chez Pino — site web

Site vitrine pour Chez Pino (pizza, pasta, burgers, lounge — Rabat), construit avec
[Astro](https://astro.build) + Tailwind CSS. Rendu 100% statique, trilingue (FR par défaut, EN, AR).

## Lancer le projet

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # génère le site statique dans dist/
npm run preview    # sert le build de dist/ en local
```

## Structure

- `src/config/site.config.ts` — le seul fichier à éditer pour changer les
  coordonnées, couleurs, horaires, etc. du restaurant.
- `src/content/full-menu.ts` — la carte complète (plats + boissons), reprise
  telle quelle de `MENU_DATA.md`.
- `src/content/faq.ts` — les questions fréquentes.
- `src/content-pages/*.astro` — le contenu de chaque page.
- `src/pages/*.astro`, `src/pages/en/*`, `src/pages/ar/*` — les routes,
  chacune important simplement le content-page correspondant.
- `src/i18n/` — le système de traduction (fr/en/ar).

## Pages / routes créées

`/`, `/menu` (sélection), `/carte` (carte complète + boissons), `/a-propos`,
`/avis`, `/club` ("Chez Pino Privilège"), `/reservation`, `/faq`, `/contact`,
`/confidentialite`, `/404`, `/sitemap.xml` — chacune aussi sous `/en/...` et
`/ar/...`.

---

## À VÉRIFIER / À FOURNIR avant mise en ligne

- **Horaires d'ouverture** : seule l'heure de fermeture (23h00) est confirmée
  sur la fiche Google du restaurant. L'heure d'ouverture (12h00) affichée sur
  le site est une **hypothèse raisonnable, à confirmer** avec le restaurant —
  voir le commentaire ⚠ dans `src/config/site.config.ts`.
- **Réseaux sociaux** : aucun lien Instagram/Facebook/WhatsApp vérifié
  n'existe pour Chez Pino. Ils sont volontairement absents du site plutôt
  qu'inventés. Une fois les vrais liens obtenus, il suffit de les renseigner
  dans `siteConfig.contact.instagramUrl` / `facebookUrl` / `whatsappNumber` —
  les icônes s'affichent automatiquement dès qu'ils sont définis.
- **Réservation** : il n'existe pas encore de backend réel (pas de projet
  Supabase, pas de serveur). Le formulaire de `/reservation` ouvre un
  brouillon d'e-mail pré-rempli (mailto:) dans l'application mail du visiteur
  — aucune donnée n'est stockée par le site. Un CTA "Réserver par téléphone"
  reste la solution la plus fiable en attendant. **TODO avant mise en
  ligne réelle** : brancher ce formulaire sur un vrai backend (voir le
  commentaire en haut de `src/content-pages/ReservationContent.astro`).
- **Photos** : la seule photo authentique disponible aujourd'hui est
  `public/brand/storefront-hero.png` (la devanture de nuit). Elle est utilisée
  en hero sur l'accueil, l'à-propos, la réservation et le contact. Partout
  ailleurs où une photo serait normalement attendue (galerie de plats,
  intérieur en plein jour...), le site utilise volontairement une mise en
  page typographique ou un bloc dégradé stylisé plutôt qu'une fausse photo —
  aucune image ne pointe vers un fichier inexistant. **Photos réelles encore
  à fournir par le client** : plats (pizza, burger, pasta...), intérieur de
  jour, équipe en cuisine/salle, autres angles de la devanture.
- **Nom de domaine** : `identity.siteUrl` dans `site.config.ts` et `SITE_URL`
  dans `astro.config.mjs` utilisent un placeholder (`https://chez-pino.ma`).
  À mettre à jour ensemble, plus la ligne `Sitemap:` de `public/robots.txt`,
  une fois le vrai domaine choisi.
- **Avis clients** : aucune citation d'avis n'a été inventée. La page `/avis`
  affiche uniquement la note Google réelle et vérifiée (4.1★, 87 avis) avec
  un lien vers la fiche Google du restaurant.
- **"La Marmite du Pêcheur"** : affichée avec "Prix sur demande" (prix non
  confirmé dans le menu fourni), jamais un prix inventé.
