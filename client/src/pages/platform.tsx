import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Background } from "@/components/background"
import { InstallCommand } from "@/components/install-command"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import type { Platform } from "@/lib/platforms"

/** Renders the parts of a translated step written between backticks as code. */
const withCode = (text: string) =>
  text.split("`").map((part, i) =>
    i % 2 ? (
      <code key={i} className="break-all rounded bg-background/60 px-1 py-0.5 text-foreground">
        {part}
      </code>
    ) : (
      part
    )
  )

const linkClass =
  "text-muted-foreground underline-offset-2 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"

export default function PlatformPage({ platform }: { platform: Platform }) {
  const { t } = useI18n()
  const [variant, setVariant] = useState("upside-down")
  const { about, steps } = t.platforms[platform.slug]
  const command = platform.install?.(variant)

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-clip transition-colors duration-700 relative">
      <Background />
      <ThemeSwitcher onThemeChange={setVariant} />

      <main className="container mx-auto px-4 pt-12 pb-12 relative z-10 max-w-3xl">
        <a href="/#platforms" className={`inline-flex items-center gap-2 mb-8 font-mono text-sm ${linkClass}`}>
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />
          {t.backToCatalog}
        </a>

        <header className="flex items-center gap-4 mb-10">
          <div
            aria-hidden="true"
            className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-display font-bold text-2xl shrink-0"
          >
            {platform.mark}
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Stranger Theme</p>
            <h1 className="text-3xl md:text-5xl font-display font-black tracking-tighter">{platform.name}</h1>
            <p className="mt-2 font-mono text-sm text-muted-foreground">{about}</p>
          </div>
        </header>

        <Card className="bg-card/70 border-border backdrop-blur-sm">
          <CardContent className="p-6 flex flex-col gap-6">
            <section aria-labelledby="install" className="flex flex-col gap-3">
              <h2 id="install" className="font-display font-bold text-xl">
                {t.install}
              </h2>
              {command && <InstallCommand command={command} name={platform.name} />}
              {steps && (
                <ol className="list-decimal pl-6 space-y-3 font-mono text-sm leading-relaxed text-foreground/90">
                  {steps.map((step, i) => (
                    <li key={i}>{withCode(step)}</li>
                  ))}
                </ol>
              )}
            </section>

            <nav aria-label={platform.name} className="flex flex-wrap gap-4 font-mono text-sm">
              <a href={platform.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {t.openOn} {new URL(platform.href).hostname} ↗
              </a>
              {platform.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {link.label} ↗
                </a>
              ))}
            </nav>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
