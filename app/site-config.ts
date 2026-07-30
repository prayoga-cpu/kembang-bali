export const siteName = "Kembang Bali Home Spa Service";

// Set NEXT_PUBLIC_SITE_URL in your deployment environment to the real
// production domain once one is assigned; this placeholder keeps metadata
// (Open Graph, robots.txt, sitemap.xml) valid in the meantime.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kembangbalihomespa.example.com"
).replace(/\/$/, "");
