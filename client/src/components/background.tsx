import { lazy, Suspense, useEffect, useState } from "react"

const RetroGrid = lazy(() => import("./retro-grid"))

/**
 * Loads the animated grid after the first paint. It is fixed, aria-hidden and behind the page,
 * so mounting it later cannot shift the layout; prerendered HTML ships without it.
 */
export function Background() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? (
    <Suspense fallback={null}>
      <RetroGrid />
    </Suspense>
  ) : null
}
