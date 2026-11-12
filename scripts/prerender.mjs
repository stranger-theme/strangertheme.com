// Runs after `vite build` and `vite build --ssr`: writes one HTML file per route with its rendered
// markup and head tags, a prerendered 404.html for unknown paths, and sitemap.xml from the same route list.
import { readFile, rm, writeFile } from "node:fs/promises"

const dist = new URL("../dist/", import.meta.url)
const ssr = new URL("../dist-ssr/", import.meta.url)
const { render, pageMeta, siteUrl, sitemapXml, staticPaths } = await import(new URL("entry-server.js", ssr).href)
const template = await readFile(new URL("index.html", dist), "utf8")

const escape = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

function replaceOnce(html, search, replacement) {
  if (!html.includes(search)) throw new Error(`index.html no longer contains ${search}`)
  return html.replace(search, () => replacement)
}

async function prerender(path, file) {
  const { title, description, jsonLd, noindex } = pageMeta(path)
  const url = `${siteUrl}${path}`
  const tags = [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta name="twitter:title" content="${escape(title)}" />`,
    `<meta name="twitter:description" content="${escape(description)}" />`,
    ...(noindex
      ? ['<meta name="robots" content="noindex" />']
      : [`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`]),
    ...(jsonLd ? [`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`] : []),
  ]
  let html = replaceOnce(template, "<title>Stranger Theme</title>", tags.join("\n    "))
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${await render(path)}</div>`)
  await writeFile(new URL(file, dist), html)
}

for (const path of staticPaths) await prerender(path, path === "/" ? "index.html" : `${path.slice(1)}.html`)
// No route matches /404, so this renders the not-found page that vercel.json serves for unknown paths.
await prerender("/404", "404.html")
await writeFile(new URL("sitemap.xml", dist), sitemapXml())
await rm(ssr, { recursive: true })
console.log(`Prerendered ${staticPaths.length} pages, 404.html and sitemap.xml`)
