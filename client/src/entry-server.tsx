import { prerenderToNodeStream } from "react-dom/static"
import { Router } from "wouter"
import App from "./App"

export { pageMeta, siteUrl, sitemapXml, staticPaths } from "./lib/routes"

/** Renders the app at `path` to HTML, waiting for everything to load. Used by scripts/prerender.mjs. */
export async function render(path: string) {
  const { prelude } = await prerenderToNodeStream(
    <Router ssrPath={path}>
      <App />
    </Router>
  )
  let html = ""
  for await (const chunk of prelude) html += chunk
  return html
}
