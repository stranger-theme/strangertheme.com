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
