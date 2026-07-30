# Kembang Bali Home Spa Service

A bilingual (six-locale) marketing site for **Kembang Bali Home Spa Service** — a mobile massage and spa business that brings therapeutic treatments to villas, hotels, and homes across Bali. Every booking flows through a single channel: WhatsApp.

Built with [Next.js](https://nextjs.org) (App Router), React, and TypeScript.

## Features

- **Six languages, no routing.** English, Indonesian, Simplified Chinese, French, Korean, and Japanese copy live side by side in `app/page.tsx`; a client-side toggle swaps the active locale instantly, no page reload.
- **WhatsApp-first booking.** Every CTA — the hero button, the quick-booking strip, each treatment card, the footer — deep-links to `wa.me` with a pre-filled message in the visitor's active language, including the specific treatment and price when booking a package.
- **Content-driven sections.** Hero, treatment menu, "how it works," service policy, coverage areas, testimonial, FAQ, and footer are all rendered from one typed content object per locale — editing copy never touches JSX.
- **Design system.** Adapted from the Spavilla reference: Noto Serif Display + Lexend type, a navy/coral/periwinkle palette, pill buttons, and blush service cards. Tokens live at the top of `app/globals.css`.
- **Production-ready metadata.** Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`, a branded SVG favicon, and optimized images via `next/image`.

## Getting started

Requires Node.js `>=20.9.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack). |
| `npm run build` | Production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | ESLint (flat config, via `eslint-config-next`). |
| `npm run typecheck` | `tsc --noEmit`. |

Before pushing, run `npm run typecheck && npm run lint && npm run build` — all three should complete with zero errors.

## Project structure

```
app/
  layout.tsx      Root layout: fonts, metadata, Open Graph/Twitter tags, viewport
  page.tsx         The entire site: locale content, WhatsApp link builders, all sections
  globals.css      Design tokens + every component style, in one file
  site-config.ts   Site name and the site URL used for metadata/sitemap/robots
  robots.ts        Generates /robots.txt
  sitemap.ts       Generates /sitemap.xml
  icon.svg         Favicon (auto-served by Next's file convention)
public/
  images/          Static image assets (treatment photos)
```

This is intentionally a single-route, single-page site — there is no `app/(routes)` split. All in-page navigation (`Services`, `How it works`, `Policy`, `Areas`, `FAQ`) is anchor-based scrolling within `page.tsx`.

## Editing content

All copy lives in `content` (English and Indonesian, written out in full) and `localizedContent` (Chinese, French, Korean, Japanese, which spread `content.en` and override only what's translated) near the top of `app/page.tsx`. To add a treatment, edit a price, or change any section's copy, edit the relevant locale's object — the JSX below only maps over these objects and never needs to change for content edits.

To add a new locale: add its `Locale` union member, add an entry to `locales` (the toggle list), and add a full translation object to `localizedContent`.

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute base URL used for Open Graph images, `sitemap.xml`, and `robots.txt`. | `https://kembangbalihomespa.example.com` (placeholder) |

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real production domain once one is assigned — the placeholder keeps builds and metadata valid until then, but should not go live as-is.

## Images

Local images (`public/images/`) and the remote Unsplash stock photos used in the hero and "how it works" section are both served through `next/image`. Remote image domains must be allow-listed in `next.config.mjs` under `images.remotePatterns` — currently just `images.unsplash.com`.

## Known limitations

- **Locale switching is client-side only.** There's no per-locale URL (e.g. `/id`, `/zh`), so each language isn't independently indexable by search engines or directly linkable. The `<html lang>` attribute is fixed to `en`. Moving to Next.js's built-in i18n routing would fix this but is a larger structural change than this project currently needs.
- **The hero's carousel-style arrows are decorative.** The hero is a single photo, not a real slideshow — the arrows exist for visual parity with the reference design and carry no click handler (`aria-hidden`, `pointer-events: none`).
- **`NEXT_PUBLIC_SITE_URL` defaults to a placeholder `.example.com` domain.** Set it before relying on Open Graph previews, the sitemap, or robots.txt pointing at the real production URL.

## License

Unlicensed / proprietary — all rights reserved. This repository contains the brand assets and content of a specific business and is not intended for reuse.
