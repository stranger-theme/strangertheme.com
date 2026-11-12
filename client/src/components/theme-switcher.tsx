import { lazy, Suspense, useState, useEffect } from "react"
import { themes } from "@/lib/themes"
import { cn } from "@/lib/utils"
import { Globe, Info, Palette } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Language, useI18n } from "@/lib/i18n"
import { DonateButton } from "./donate-button"
import { Link } from "wouter"

const DonationModal = lazy(() => import("./donation-modal"))

const themeStorageKey = "stranger-theme"
const defaultTheme = "upside-down"

export function ThemeSwitcher({ onThemeChange }: { onThemeChange?: (id: string) => void } = {}) {
  // Prerendered pages show the default variant; the inline script in index.html has already applied the
  // saved one to <html data-theme>, so the switcher only catches up after hydration.
  const [theme, setTheme] = useState(defaultTheme)
  const [donating, setDonating] = useState(false)
  const { language, setLanguage, t } = useI18n()

  useEffect(() => {
    const applied = document.documentElement.dataset.theme
    if (themes.some(({ id }) => id === applied)) setTheme(applied!)
  }, [])

  useEffect(() => {
    onThemeChange?.(theme)
  }, [theme, onThemeChange])

  const chooseTheme = (id: string) => {
    setTheme(id)
    document.documentElement.dataset.theme = id
    try {
      localStorage.setItem(themeStorageKey, id)
    } catch {
      // Keep the in-memory selection when browser storage is unavailable.
    }
  }

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "fr", label: "FR" },
    { code: "pt", label: "PT" },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-3 p-4 justify-between items-center backdrop-blur-md bg-background/80 border-b border-border/50 sticky top-0 z-50 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
      {/* Theme Selection */}
      <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start flex-1">
        <div className="flex flex-wrap justify-center gap-2">
          {themes
            .filter((t) => t.id !== "vecna")
            .map((option) => (
              <button
                key={option.id}
                onClick={() => chooseTheme(option.id)}
                aria-label={`${t.selectReality}: ${option.name}`}
                aria-pressed={theme === option.id}
                className={cn(
                  "relative group min-h-11 min-w-11 px-2 sm:px-3 py-1.5 rounded-sm border transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  theme === option.id
                    ? "border-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] scale-105"
                    : "border-border hover:border-primary/50 opacity-70 hover:opacity-100"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 sm:w-3 h-2 sm:h-3 rounded-full shadow-[0_0_5px_currentColor]"
                    style={{ backgroundColor: option.colors.primary }}
                  />
                  <span
                    className={cn(
                      "text-[10px] sm:text-xs font-mono uppercase tracking-wider hidden md:inline-block",
                      theme === option.id
                        ? "text-primary font-bold text-shadow-glow"
                        : "text-muted-foreground"
                    )}
                  >
                    {option.name}
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* Right Actions: About + Lang + Donate */}
      <div className="flex items-center gap-3">
        <Link
          href="/palette"
          aria-label={t.palette}
          className="inline-flex h-11 min-w-11 justify-center items-center rounded-md px-3 font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-testid="link-palette"
        >
          <Palette className="w-4 h-4 mr-1" />
          <span className="text-xs hidden sm:inline">{t.palette}</span>
        </Link>
        <Link
          href="/about"
          aria-label={t.about}
          className="inline-flex h-11 min-w-11 justify-center items-center rounded-md px-3 font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          data-testid="link-about"
        >
          <Info className="w-4 h-4 mr-1" />
          <span className="text-xs hidden sm:inline">{t.about}</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-11 w-12 px-0 font-mono text-muted-foreground hover:text-primary hover:bg-primary/10"
              aria-label={`${t.selectLanguage}: ${language.toUpperCase()}`}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="uppercase text-xs">{language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card border-primary/20 min-w-[4rem]">
            <DropdownMenuRadioGroup
              value={language}
              onValueChange={(value) => setLanguage(value as Language)}
            >
              {languages.map((lang) => (
                <DropdownMenuRadioItem
                  key={lang.code}
                  value={lang.code}
                  className={cn(
                    "font-mono text-xs cursor-pointer justify-center",
                    language === lang.code
                      ? "text-primary font-bold bg-primary/10"
                      : "text-muted-foreground"
                  )}
                >
                  {lang.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {donating ? (
          <Suspense fallback={<DonateButton disabled />}>
            <DonationModal />
          </Suspense>
        ) : (
          <DonateButton onClick={() => setDonating(true)} />
        )}
      </div>
    </div>
  )
}
