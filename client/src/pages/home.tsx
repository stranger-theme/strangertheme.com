import { useState } from "react"
import { Background } from "@/components/background"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Cpu, Activity, Zap, Github, Search, ScrollText, Tag } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { platforms, searchPlatforms } from "@/lib/platforms"
import { Input } from "@/components/ui/input"
import { CodePreview } from "@/components/code-preview"
import { InstallCommand } from "@/components/install-command"
import { themes } from "@/lib/themes"
import release from "@/data/release.json"

export default function Home() {
  const { t } = useI18n()
  const [query, setQuery] = useState("")
  const [variant, setVariant] = useState("upside-down")
  const visiblePlatforms = searchPlatforms(platforms, query)

  const theme = themes.find(({ id }) => id === variant) ?? themes[0]

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: t.syntaxHighlighting,
      desc: t.syntaxHighlightingDesc,
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t.darkThemes,
      desc: t.darkThemesDesc,
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: t.sixVariants,
      desc: t.sixVariantsDesc,
    },
  ]

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-clip transition-colors duration-700 relative">
      <Background />

      <ThemeSwitcher onThemeChange={setVariant} />

      <main className="container mx-auto px-4 pt-12 pb-12 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <h1
            className="animate-in fade-in zoom-in-90 duration-1000 delay-200 fill-mode-both text-5xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/80 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)] whitespace-pre-line"
          >
            {t.title}
          </h1>

          <p className="animate-in fade-in duration-1000 delay-500 fill-mode-both text-xl md:text-2xl text-muted-foreground mx-auto font-mono mb-10 whitespace-pre-line"
          >
            {t.subtitle}
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-5 duration-800 delay-800 fill-mode-both flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 shadow-[0_0_10px_hsl(var(--primary)/0.2)] font-mono h-14 px-8 backdrop-blur-sm gap-2"
            >
              <a href="https://github.com/stranger-theme/stranger-theme" target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" className="w-5 h-5" />
                {t.viewDocs}
              </a>
            </Button>
            <a
              href="#platforms"
              className="inline-flex h-14 items-center gap-2 rounded-md bg-primary px-8 font-mono font-bold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {t.installNow}
            </a>
            <a
              href="https://www.producthunt.com/products/stranger-theme?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-stranger-theme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                alt="Stranger Theme - Turn your coding environment upside down | Product Hunt"
                width="250"
                height="54"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1059824&theme=neutral&t=1767823358022"
              />
            </a>
          </div>
        </section>

        {/* Live preview of the selected variant */}
        <section className="animate-in fade-in slide-in-from-bottom-5 duration-800 delay-1000 fill-mode-both mb-24">
          <CodePreview theme={theme} />
        </section>

        {/* Supported IDEs Section */}
        <section id="platforms" className="mb-24 scroll-mt-36">
          <div className="reveal text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              {t.supportedPlatforms}
            </h2>
            <p className="text-muted-foreground font-mono text-sm">{t.oneThemeAllPlatforms}</p>
          </div>

          <div className="max-w-4xl mx-auto mb-6 relative">
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            />
            <Input
              aria-label={t.searchPlatforms}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlatforms}
              className="pl-10 bg-card/70 border-border font-mono"
            />
          </div>
          {visiblePlatforms.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {visiblePlatforms.map((platform) => {
                const command = platform.install?.(variant)
                return (
                  <div key={platform.name} className="reveal group relative rounded-xl">
                    <Card className="bg-card/70 border-border group-hover:border-primary/50 transition-all duration-300 h-full backdrop-blur-sm group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                      <CardContent className="p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <div
                            aria-hidden="true"
                            className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-display font-bold text-lg shrink-0"
                          >
                            {platform.mark}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display font-bold text-foreground break-words leading-tight">
                              <a
                                href={`/${platform.slug}`}
                                className="focus-visible:outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
                              >
                                {platform.name}
                              </a>
                            </h3>
                            <span className="text-xs font-mono text-muted-foreground">
                              {t.installPlatform}
                            </span>
                          </div>
                        </div>
                        {command && <InstallCommand command={command} name={platform.name} />}
                        {platform.links && (
                          <div className="relative z-10 flex flex-wrap gap-3 font-mono text-xs">
                            {platform.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground underline-offset-2 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                              >
                                {link.label} ↗
                              </a>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          ) : (
            <p role="status" className="text-center text-muted-foreground font-mono text-sm">
              {t.noPlatformsFound}
            </p>
          )}
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, i) => (
            <div key={i} className="reveal">
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors h-full backdrop-blur-sm group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-display tracking-wide">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center pb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-border w-12" />
            <Cpu className="text-muted-foreground w-6 h-6 animate-pulse" />
            <div className="h-px bg-border w-12" />
          </div>
          <p className="text-muted-foreground font-mono text-sm">{t.footer}</p>
          <nav aria-label="Social" className="mt-4 flex flex-wrap items-center justify-center gap-6 font-mono text-sm">
            <a
              href="https://x.com/stranger_theme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @stranger_theme
            </a>
            <a
              href="https://github.com/stranger-theme/stranger-theme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github aria-hidden="true" className="w-4 h-4" />
              GitHub
            </a>
            <a href={release.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
              <Tag aria-hidden="true" className="w-4 h-4" />
              <span>
                <span className="sr-only">{t.latestVersion}: </span>v{release.version}
              </span>
            </a>
            <a
              href="https://github.com/stranger-theme/stranger-theme/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <ScrollText aria-hidden="true" className="w-4 h-4" />
              {t.changelog}
            </a>
          </nav>
        </footer>
      </main>
    </div>
  )
}
