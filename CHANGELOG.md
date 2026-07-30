# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-07-30

Initial release.

### Added

- Single-page marketing site for Kembang Bali Home Spa Service, built on Next.js 16 (App Router) with TypeScript and React 19.
- Client-side language switcher covering six locales (English, Indonesian, Simplified Chinese, French, Korean, Japanese), with per-locale copy for every section.
- Hero section with a WhatsApp booking CTA, a compact proof-point grid (pricing, transport, certification, availability), and a quick-booking summary strip.
- Treatment menu (8 services) with per-package WhatsApp deep links that pre-fill the treatment name, price, and a booking template in the visitor's active locale.
- "How it works" 3-step guide, a trust band, and an explicit service policy section stating what is and is not offered.
- Coverage area list across 8 Bali locations, a guest testimonial with CTA panel, an FAQ accordion, and a footer with WhatsApp, menu, and area links.
- Design system adapted from the Spavilla reference: Noto Serif Display + Lexend typography, a navy/coral/periwinkle palette, pill buttons, and blush service cards.
- Transparent-on-hero navbar that solidifies on scroll, with decorative carousel-style chrome on the hero image.
- `next/image` optimization for both the local treatment photo and the remote hero/how-it-works photos (via configured `images.remotePatterns`).
- SEO and sharing metadata: Open Graph and Twitter card tags, `sitemap.xml`, `robots.txt`, a branded SVG favicon, and a navy `theme-color`.
- ESLint flat config (`eslint-config-next`) and strict TypeScript, both passing with zero errors and zero warnings.

[Unreleased]: https://github.com/prayoga-cpu/kembang-bali/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/prayoga-cpu/kembang-bali/releases/tag/v1.0.0
