# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A single-page, six-locale marketing site for Kembang Bali Home Spa Service (mobile massage/spa, booked entirely via WhatsApp). Next.js 16 App Router, React 19, TypeScript, no backend, no database, no auth. See `README.md` for the full feature/structure overview — this file is about how to work in the codebase, not what it does.

## Architecture in one paragraph

`app/page.tsx` is the entire site: a `content` object (English + Indonesian, written in full) and `localizedContent` (Chinese/French/Korean/Japanese, spreading `content.en` and overriding translated fields) hold every string, price, and locale-specific list. The JSX below only maps over `t = getCopy(locale)` — it never hardcodes copy. `app/globals.css` holds every style as plain CSS (no CSS-in-JS, no Tailwind) with design tokens as CSS custom properties in `:root`.

## Before committing anything

Run all three — this project has caught real regressions in each:

```bash
npm run typecheck
npm run lint
npm run build
```

All three must exit clean (zero errors, and for lint, zero warnings). If a UI change touches layout, also start `npm run dev` and check it in a browser — the CSS is hand-written per-breakpoint (991px / 767px / 680px / 479px), and grid/flex layout bugs at intermediate widths won't show up in typecheck or lint.

## Dependency version pins — read before running "update deps"

Two dev dependencies are **intentionally** held back from the newest major, because the newest major breaks the lint pipeline. If you update dependencies, re-verify these before assuming "latest is best":

- **`typescript` is pinned to `^6.0.3`, not the TS 7.x line.** `typescript-eslint` (pulled in by `eslint-config-next`) does not yet support TypeScript 7's new compiler API and throws at lint time (`typescript-eslint does not support TS 7.0`). Check `npm view typescript-eslint peerDependencies` before bumping — only move past 6.x once that range includes TS 7.
- **`eslint` is pinned to `^9.39.5`, not the ESLint 10.x line.** `eslint-config-next`'s bundled `eslint-plugin-react` (7.37.5, itself already latest) still calls the legacy `context.getFilename()` API that ESLint 10 removed, and crashes (`contextOrFilename.getFilename is not a function`). Re-check once `eslint-plugin-react` ships a fix.

If `npm run lint` starts crashing with a stack trace instead of printing results, this class of issue is the first thing to suspect — check what actually changed underneath `eslint-config-next`, don't just chase the top-level version number.

`npm audit` will report high-severity issues in `postcss`/`sharp` (bundled inside `next` itself) and `brace-expansion`/`minimatch` (bundled inside `eslint-config-next`). The suggested `npm audit fix --force` downgrades `next` to `9.3.3` and `eslint-config-next` to `0.2.4` — both are severe regressions, not fixes, since the flagged code is transitively bundled by the already-latest top-level package. Don't run `--force` here; wait for upstream to publish a patched bundle.

## ESLint config

`eslint.config.mjs` (flat config, required since ESLint 9) imports the flat-config arrays directly from `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` rather than using `FlatCompat` — that package now ships native flat-config exports, so the compat shim isn't needed. There is no `.eslintrc.json` in this repo; if one reappears, delete it, it will not be read by ESLint 9+.

## Content edits

Never hardcode a string in JSX. Every user-facing string, including button labels and aria-labels, comes from the locale's content object. When adding a new field, add it to `content.en` and `content.id` fully, then to each entry in `localizedContent` (or let it inherit via the `...content.en` spread if it isn't worth translating yet).

## Design tokens

Colors, radii, and layout constants are CSS custom properties at the top of `globals.css` (`--dark`, `--secondary-skin-color`, `--grey-color`, `--border-radius-20`, `--container`, `--section-y`, etc.). Reuse these rather than hardcoding hex values or pixel widths — the palette and spacing scale were deliberately matched to a reference design system.

## Known intentional decisions (don't "fix" these without checking with the user first)

- The hero's left/right carousel-style arrows are decorative (`aria-hidden`, `pointer-events: none`) — the hero is a single photo, not a real slideshow. Don't wire them to a click handler under the assumption they're a bug.
- Locale switching is client-side state only (`useState`), not routed (`/id`, `/zh`, etc.). `<html lang>` is hardcoded to `en`. This is a known SEO/accessibility limitation, documented in the README, not an oversight.
- `NEXT_PUBLIC_SITE_URL` defaults to a placeholder `.example.com` domain in `app/site-config.ts`. It feeds `metadataBase`, `sitemap.ts`, and `robots.ts`. Don't hardcode a guessed real domain into the source — it's meant to be set via environment variable per deployment.
