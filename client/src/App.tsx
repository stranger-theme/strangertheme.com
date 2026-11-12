import { useEffect } from "react"
import { Switch, Route, useLocation } from "wouter"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { queryClient } from "./lib/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { I18nProvider } from "@/lib/i18n"
import { platforms } from "@/lib/platforms"
import { pageMeta } from "@/lib/routes"
import NotFound from "@/pages/not-found"
import Home from "@/pages/home"
import About from "@/pages/about"
import Palette from "@/pages/palette"
import PlatformPage from "@/pages/platform"

// Routes stay eager: every page is prerendered and hydrated, and a lazy route would have to finish
// loading before hydration or React drops the server HTML when the saved language arrives first.
function Router() {
  const [location] = useLocation()
  useEffect(() => {
    document.title = pageMeta(location).title
  }, [location])

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/palette" component={Palette} />
      <Route path="/:slug">
        {({ slug }) => {
          const platform = platforms.find((p) => p.slug === slug)
          return platform ? <PlatformPage platform={platform} /> : <NotFound />
        }}
      </Route>
      <Route component={NotFound} />
    </Switch>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <SpeedInsights />
          <Analytics />
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  )
}

export default App
