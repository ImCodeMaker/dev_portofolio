import { siteConfig } from "@app/config/site";
import { localePaths, locales } from "@app/i18n/locales";

const routes = locales.map((locale) => ({
  locale,
  url: `${siteConfig.url}${localePaths[locale] === "/" ? "" : localePaths[locale]}`,
}));

export function GET() {
  const updatedAt = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.locale === "en" ? "1.0" : "0.8"}</priority>
${routes
  .map(
    (alternate) =>
      `    <xhtml:link rel="alternate" hreflang="${alternate.locale}" href="${alternate.url}" />`,
  )
  .join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteConfig.url}" />
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
