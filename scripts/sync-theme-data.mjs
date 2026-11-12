// Refresh the theme data the site bundles: palettes.json from the theme repo
// and release.json from its latest GitHub release.
import { writeFileSync } from "node:fs"

const repo = "stranger-theme/stranger-theme"
const out = (name) => new URL(`../client/src/data/${name}`, import.meta.url)
const save = (name, data) => writeFileSync(out(name), `${JSON.stringify(data, null, 2)}\n`)

const palettes = await fetch(`https://raw.githubusercontent.com/${repo}/main/docs/palettes.json`)
if (palettes.ok) {
  save("palettes.json", await palettes.json())
  console.log("palettes.json updated")
} else {
  console.warn(`palettes.json: HTTP ${palettes.status}, keeping the local copy`)
}

const release = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
  headers: { Accept: "application/vnd.github+json" },
})
if (!release.ok) throw new Error(`releases/latest: HTTP ${release.status}`)
const { tag_name, published_at, html_url } = await release.json()
save("release.json", { version: tag_name.replace(/^v/, ""), publishedAt: published_at, url: html_url })
console.log(`release.json updated to ${tag_name}`)
