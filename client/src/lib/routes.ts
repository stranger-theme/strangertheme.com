import release from "@/data/release.json"
import en from "@/lib/locales/en"
import { platforms } from "@/lib/platforms"

export const siteUrl = "https://www.strangertheme.com"
const siteName = "Stranger Theme"

export type PageMeta = {
  title: string
  description: string
  jsonLd?: Record<string, unknown>
  noindex?: boolean
}

const homeDescription =
  "Stranger Theme: six dark color themes inspired by Stranger Things for code editors, IDEs and terminals, built for focus, readability and long coding sessions."

/** Head metadata for every prerendered path; the build writes one HTML file and one sitemap entry per key. */
const pages: Record<string, PageMeta> = {
  "/": {
    title: "Stranger Theme - Six Dark Themes for Editors and Terminals",
    description: homeDescription,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: `${siteUrl}/`,
      description: homeDescription,
    },
  },
  "/about": { title: `About - ${siteName}`, description: en.aboutStory.split("\n\n")[0] },
  "/palette": { title: `${en.paletteTitle} - ${siteName}`, description: en.paletteIntro },
  ...Object.fromEntries(
    platforms.map(({ name, slug, href }) => {
      const description = `Install Stranger Theme, six dark themes inspired by Stranger Things, in ${name}. ${en.platforms[slug].about}`
      const meta: PageMeta = {
        title: `Stranger Theme for ${name}`,
        description,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: `Stranger Theme for ${name}`,
          description,
          url: `${siteUrl}/${slug}`,
          downloadUrl: href,
          applicationCategory: "DeveloperApplication",
          softwareVersion: release.version,
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      }
      return [`/${slug}`, meta]
    })
  ),
}

export const notFoundMeta: PageMeta = {
  title: `${en.notFoundTitle} - ${siteName}`,
  description: en.notFoundBody,
  noindex: true,
}

export const staticPaths = Object.keys(pages)

export const pageMeta = (path: string): PageMeta => pages[path] ?? notFoundMeta

export const sitemapXml = () =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticPaths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`),
    "</urlset>",
    "",
  ].join("\n")
