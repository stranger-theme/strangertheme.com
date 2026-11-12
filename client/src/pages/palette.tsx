import { RetroGrid } from "@/components/retro-grid"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { useI18n } from "@/lib/i18n"
import { themes, type Slot } from "@/lib/themes"
import { copyWithToast } from "@/lib/utils"

function Swatch({ name, hex, role }: { name: string; hex: string; role?: string }) {
  const { t } = useI18n()
  return (
    <button
      type="button"
      onClick={() => copyWithToast(hex, `${t.colorCopied}: ${name}`, t.copyFailed)}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card/70 text-left backdrop-blur-sm transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span aria-hidden="true" className="h-14 w-full border-b border-border" style={{ backgroundColor: hex }} />
      <span className="flex flex-col gap-0.5 p-3 font-mono text-xs">
        <span className="font-bold text-foreground">{name}</span>
        <span className="text-muted-foreground group-hover:text-primary">{hex}</span>
        {role && <span className="text-muted-foreground">{role}</span>}
      </span>
    </button>
  )
}

const grid = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"

export default function Palette() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-clip transition-colors duration-700 relative">
      <RetroGrid />
      <ThemeSwitcher />

      <main className="container mx-auto px-4 pt-12 pb-12 relative z-10 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-center mb-4">
          {t.paletteTitle}
        </h1>
        <p className="text-muted-foreground font-mono text-sm text-center mb-16">{t.paletteIntro}</p>

        {themes.map(({ id, name, palette }) => (
          <section key={id} aria-labelledby={`palette-${id}`} className="mb-16">
            <h2 id={`palette-${id}`} className="text-2xl md:text-3xl font-display font-bold mb-6">
              {name}
            </h2>
            <h3 className="font-mono text-sm text-muted-foreground mb-3">{t.baseColors}</h3>
            <div className={`${grid} mb-8`}>
              {Object.entries(palette.base).map(([slot, hex]) => (
                <Swatch key={slot} name={slot} hex={hex} role={t.slotRoles[slot as Slot]} />
              ))}
            </div>
            <h3 className="font-mono text-sm text-muted-foreground mb-3">{t.ansiColors}</h3>
            <div className={grid}>
              {Object.entries(palette.ansi).map(([key, hex], i) => (
                <Swatch key={key} name={`${i} ${key}`} hex={hex} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
