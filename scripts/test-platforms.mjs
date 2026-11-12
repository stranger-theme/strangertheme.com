import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { createServer } from "vite"

// Vite loads the TypeScript sources with the app's aliases, JSON imports and JSX.
const vite = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false },
  appType: "custom",
  logLevel: "error",
})
const load = (path) => vite.ssrLoadModule(path)
const { platforms, searchPlatforms } = await load("/src/lib/platforms.ts")

for (const name of ["Helix", "tmux", "Warp", "macOS Terminal"]) {
  assert.ok(platforms.some((platform) => platform.name === name), `catalog lists ${name}`)
}
assert.equal(new Set(platforms.map(({ name }) => name)).size, platforms.length)
assert.deepEqual(searchPlatforms(platforms, "   "), platforms)
for (const [query, expected] of [
  ["  VSCODE ", "Visual Studio Code"],
  ["nvim", "Vim / Neovim"],
  ["PyCharm", "JetBrains IDEs"],
  ["ghostty", "Ghostty"],
  ["kitty", "Kitty"],
  ["wezterm", "WezTerm"],
  ["zed", "Zed"],
]) {
  assert.deepEqual(searchPlatforms(platforms, query).map(({ name }) => name), [expected])
}
assert.deepEqual(searchPlatforms(platforms, "no-such-client"), [])
for (const { href } of platforms) assert.equal(new URL(href).protocol, "https:")
console.log("Platform catalog: aliases, whitespace, case, empty state and links passed")

const palettes = JSON.parse(readFileSync(new URL("../client/src/data/palettes.json", import.meta.url), "utf8"))
const variants = Object.keys(palettes)
assert.equal(variants.length, 6)
const paletteHexes = new Set()
for (const [id, { base, ansi }] of Object.entries(palettes)) {
  assert.equal(Object.keys(base).length, 11, `${id}: 11 base colours`)
  assert.equal(Object.keys(ansi).length, 16, `${id}: 16 ANSI colours`)
  for (const hex of [...Object.values(base), ...Object.values(ansi)]) {
    assert.match(hex, /^#[0-9A-F]{6}$/i, `${id}: ${hex} is a hex colour`)
    paletteHexes.add(hex.toUpperCase())
  }
}
const themesSource = readFileSync(new URL("../client/src/lib/themes.ts", import.meta.url), "utf8")
const duplicated = (themesSource.match(/#[0-9A-F]{6}\b/gi) ?? []).filter((hex) => paletteHexes.has(hex.toUpperCase()))
assert.deepEqual(duplicated, [], "themes.ts reads colours from palettes.json instead of repeating them")
console.log("palettes.json: six variants with 11 base and 16 ANSI colours, none repeated in themes.ts passed")
const installers = platforms.filter(({ install }) => install)
assert.ok(installers.length > 0)
for (const { name, install } of installers) {
  const commands = variants.map((variant) => install(variant))
  const variantSpecific = new Set(commands).size > 1
  variants.forEach((variant, i) => {
    assert.ok(commands[i].trim() && !/[\r\n]/.test(commands[i]), `${name}: install is one line`)
    if (variantSpecific) assert.ok(commands[i].includes(variant), `${name}: install names ${variant}`)
  })
}
for (const { links = [] } of platforms) {
  for (const { label, href } of links) {
    assert.ok(label)
    assert.equal(new URL(href).protocol, "https:")
  }
}
console.log("Install commands: single line, variant ids and https links passed")

const slugs = platforms.map(({ slug }) => slug)
assert.deepEqual(slugs, [
  "visual-studio-code",
  "jetbrains-ides",
  "vim-neovim",
  "sublime-text",
  "alacritty",
  "iterm2",
  "windows-terminal",
  "hyper",
  "ghostty",
  "kitty",
  "wezterm",
  "zed",
  "helix",
  "tmux",
  "warp",
  "macos-terminal",
], "platform URLs are stable: renaming a platform changes its page URL")
assert.equal(new Set(slugs).size, slugs.length, "platform slugs are unique")
for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/)
console.log("Platform slugs: stable, unique and URL-safe passed")

const publicFile = (name) => new URL(`../client/public/${name}`, import.meta.url)
assert.match(readFileSync(publicFile("robots.txt"), "utf8"), /^Sitemap: https:\/\/www\.strangertheme\.com\/sitemap\.xml$/m)
assert.ok(!existsSync(publicFile("sitemap.xml")), "sitemap.xml is generated at build time, not kept by hand")
const { staticPaths, sitemapXml, pageMeta } = await load("/src/lib/routes.ts")
const sitemap = sitemapXml()
const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8")
const routes = [...app.matchAll(/<Route\s+path="([^"]+)"/g)].map(([, path]) => path)
assert.ok(routes.includes("/"))
assert.ok(routes.includes("/palette"))
assert.ok(routes.includes("/:slug"))
const literalRoutes = routes.filter((path) => !path.includes(":"))
for (const slug of slugs) assert.ok(!literalRoutes.includes(`/${slug}`), `/${slug} does not shadow a page`)
const expectedPaths = [...literalRoutes, ...slugs.map((slug) => `/${slug}`)]
assert.deepEqual([...staticPaths].sort(), [...expectedPaths].sort(), "every route is prerendered")
assert.equal((sitemap.match(/<loc>/g) ?? []).length, expectedPaths.length)
for (const path of expectedPaths) {
  assert.ok(sitemap.includes(`<loc>https://www.strangertheme.com${path}</loc>`), `sitemap lists ${path}`)
}
console.log("robots.txt and the generated sitemap.xml cover every route passed")

const titles = new Set()
for (const path of staticPaths) {
  const { title, description, jsonLd } = pageMeta(path)
  assert.ok(title && description, `${path} has a title and description`)
  titles.add(title)
  const type = path === "/" ? "WebSite" : slugs.includes(path.slice(1)) ? "SoftwareApplication" : undefined
  assert.equal(jsonLd?.["@type"], type, `${path} JSON-LD`)
}
assert.equal(titles.size, staticPaths.length, "every page has its own title")
assert.equal(pageMeta("/no-such-page").noindex, true)
console.log("Page metadata: unique titles, descriptions and JSON-LD passed")

const dictionaries = Object.fromEntries(
  await Promise.all(["en", "es", "fr", "pt"].map(async (lang) => [lang, (await load(`/src/lib/locales/${lang}.ts`)).default]))
)
const keys = Object.keys(dictionaries.en).sort()
for (const [lang, t] of Object.entries(dictionaries)) {
  assert.deepEqual(Object.keys(t).sort(), keys, `${lang} has every key`)
  assert.deepEqual(Object.keys(t.platforms).sort(), [...slugs].sort(), `${lang} describes every platform`)
  for (const { slug, install } of platforms) {
    const { about, steps } = t.platforms[slug]
    assert.ok(about, `${lang}/${slug}: about`)
    assert.equal(Boolean(steps), !install, `${lang}/${slug}: manual steps only when there is no install command`)
    assert.equal(steps?.length, dictionaries.en.platforms[slug].steps?.length, `${lang}/${slug}: same steps as English`)
    for (const step of steps ?? []) assert.equal(step.split("`").length % 2, 1, `${lang}/${slug}: balanced backticks`)
  }
}
console.log("Translations: every language covers every key, platform and step passed")

const { render } = await load("/src/entry-server.tsx")
for (const path of ["/", "/about", "/palette", "/visual-studio-code", "/jetbrains-ides"]) {
  assert.match(await render(path), /<h1[^>]*>(?!404)/, `${path} renders its page`)
}
const vscode = await render("/visual-studio-code")
assert.ok(vscode.includes("code --install-extension StrangerTheme.stranger-theme-vscode"), "install command")
assert.ok(vscode.includes("Open VSX"), "secondary links")
assert.ok(vscode.includes('href="/#platforms"'), "link back to the catalog")
assert.ok(!vscode.includes("<ol class=\"list-decimal"), "no manual steps when a command exists")
const jetbrains = await render("/jetbrains-ides")
assert.equal((jetbrains.match(/<li>/g) ?? []).length, dictionaries.en.platforms["jetbrains-ides"].steps.length)
assert.ok(jetbrains.includes("plugins.jetbrains.com"), "marketplace link on the platform page")
const home = await render("/")
for (const slug of slugs) assert.ok(home.includes(`href="/${slug}"`), `home links to /${slug}`)
assert.ok(!home.includes("plugins.jetbrains.com"), "marketplace links moved off the home page")
for (const path of ["/no-such-page", "/deep/unknown/path"]) {
  assert.ok((await render(path)).includes("404: Page not found"), `${path} renders the not-found page`)
}
console.log("Server rendering: pages, platform pages and not-found page passed")
await vite.close()
