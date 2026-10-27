import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import { readFileSync } from "node:fs"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

export default compat.config(
  JSON.parse(readFileSync(new URL("./.eslintrc.json", import.meta.url), "utf8"))
)
