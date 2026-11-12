import type { Slot } from "@/lib/themes"
import en from "@/lib/locales/en"
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react"

export type Language = "en" | "es" | "fr" | "pt"

/** Translated copy for one client page; backticks mark literal commands and paths. */
export type PlatformText = { about: string; steps?: string[] }

export type Dictionary = {
  selectReality: string
  online: string
  title: string
  subtitle: string
  installNow: string
  viewDocs: string
  syntaxHighlighting: string
  syntaxHighlightingDesc: string
  darkThemes: string
  darkThemesDesc: string
  sixVariants: string
  sixVariantsDesc: string
  footer: string
  supportCreator: string
  donateTitle: string
  donateDesc: string
  supportNow: string
  thankYou: string
  supportedPlatforms: string
  oneThemeAllPlatforms: string
  available: string
  comingSoon: string
  searchPlatforms: string
  noPlatformsFound: string
  installPlatform: string
  copy: string
  copyInstallCommand: string
  installCommandCopied: string
  copyFailed: string
  selectLanguage: string
  about: string
  aboutTitle: string
  aboutStory: string
  backHome: string
  palette: string
  paletteTitle: string
  paletteIntro: string
  baseColors: string
  ansiColors: string
  colorCopied: string
  codePreview: string
  latestVersion: string
  changelog: string
  slotRoles: Record<Slot, string>
  notFoundTitle: string
  notFoundBody: string
  install: string
  openOn: string
  backToCatalog: string
  platforms: Record<string, PlatformText>
}

/** English ships in the main bundle; the other languages load when chosen. */
const loaders: Record<Exclude<Language, "en">, () => Promise<{ default: Dictionary }>> = {
  es: () => import("@/lib/locales/es"),
  fr: () => import("@/lib/locales/fr"),
  pt: () => import("@/lib/locales/pt"),
}

const storageKey = "stranger-language"
const isLanguage = (value: unknown): value is Language =>
  value === "en" || (typeof value === "string" && value in loaders)

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  // Prerendered pages are English, so the first render is too; the saved choice applies after hydration.
  const [state, setState] = useState<{ language: Language; t: Dictionary }>({ language: "en", t: en })
  const requested = useRef<Language>("en")

  const setLanguage = useCallback(async (language: Language) => {
    requested.current = language
    try {
      localStorage.setItem(storageKey, language)
    } catch {
      // Keep the in-memory selection when browser storage is unavailable.
    }
    const t = language === "en" ? en : (await loaders[language]()).default
    if (requested.current === language) setState({ language, t })
  }, [])

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(storageKey)
    } catch {
      // Fall back to the browser language when storage is unavailable.
    }
    const preferred = [saved, navigator.language.split("-")[0]].find(isLanguage) ?? "en"
    if (preferred !== "en") setLanguage(preferred)
  }, [setLanguage])

  return <I18nContext.Provider value={{ ...state, setLanguage }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
