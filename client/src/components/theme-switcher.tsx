import { useState, useEffect } from "react"
import { themes, Theme } from "@/lib/themes"
import { cn } from "@/lib/utils"
import { Globe, Info } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { DonationModal } from "./donation-modal"
import { Link } from "wouter"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("upside-down")
  const { language, setLanguage, t } = useI18n()

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-theme", theme)
  }, [theme])

  const currentTheme = themes.find((t) => t.id === theme) || themes[0]

  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "fr", label: "FR" },
    { code: "pt", label: "PT" },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 justify-between items-center backdrop-blur-md bg-background/80 border-b border-border/50 fixed top-0 left-0 right-0 z-50 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
      {/* Theme Selection */}
      <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start flex-1">
        <div className="flex flex-wrap justify-center gap-2">
          {themes
            .filter((t) => t.id !== "vecna")
            .map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={cn(
                  "relative group px-2 sm:px-3 py-1.5 rounded-sm border transition-all duration-300 overflow-hidden",
                  theme === t.id
                    ? "border-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] scale-105"
                    : "border-border hover:border-primary/50 opacity-70 hover:opacity-100"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 sm:w-3 h-2 sm:h-3 rounded-full shadow-[0_0_5px_currentColor]"
                    style={{ backgroundColor: t.colors.primary }}
                  />
                  <span
                    className={cn(
                      "text-[10px] sm:text-xs font-mono uppercase tracking-wider hidden md:inline-block",
                      theme === t.id
                        ? "text-primary font-bold text-shadow-glow"
                        : "text-muted-foreground"
                    )}
                  >
                    {t.name}
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* Right Actions: About + Lang + Donate */}
      <div className="flex items-center gap-3">
        <Link href="/about">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 font-mono text-muted-foreground hover:text-primary hover:bg-primary/10"
            data-testid="link-about"
          >
            <Info className="w-4 h-4 mr-1" />
            <span className="text-xs hidden sm:inline">{t.about}</span>
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-12 px-0 font-mono text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="uppercase text-xs">{language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card border-primary/20 min-w-[4rem]">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                className={cn(
                  "font-mono text-xs cursor-pointer justify-center",
                  language === lang.code
                    ? "text-primary font-bold bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DonationModal />
      </div>
    </div>
  )
}
