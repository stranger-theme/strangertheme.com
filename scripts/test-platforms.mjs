import assert from "node:assert/strict"
import { Buffer } from "node:buffer"
import { readFileSync } from "node:fs"
import ts from "typescript"

const source = readFileSync(new URL("../client/src/lib/platforms.ts", import.meta.url), "utf8")
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
})
const { platforms, searchPlatforms } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
)

assert.equal(platforms.length, 12)
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

const themesSource = readFileSync(new URL("../client/src/lib/themes.ts", import.meta.url), "utf8")
const variants = [...themesSource.matchAll(/^\s+id: "([^"]+)"/gm)].map(([, id]) => id)
assert.ok(variants.length > 1)
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

const publicFile = (name) => new URL(`../client/public/${name}`, import.meta.url)
assert.match(readFileSync(publicFile("robots.txt"), "utf8"), /^Sitemap: https:\/\/www\.strangertheme\.com\/sitemap\.xml$/m)
const sitemap = readFileSync(publicFile("sitemap.xml"), "utf8")
const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8")
const routes = [...app.matchAll(/<Route\s+path="([^"]+)"/g)].map(([, path]) => path)
assert.ok(routes.includes("/"))
for (const path of routes) {
  assert.ok(sitemap.includes(`<loc>https://www.strangertheme.com${path}</loc>`), `sitemap lists ${path}`)
}
console.log("robots.txt and sitemap.xml cover every route passed")
