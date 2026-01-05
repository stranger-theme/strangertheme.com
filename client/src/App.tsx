import { Switch, Route } from "wouter"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { queryClient } from "./lib/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { I18nProvider } from "@/lib/i18n"
import NotFound from "@/pages/not-found"
import Home from "@/pages/home"
import About from "@/pages/about"

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
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
