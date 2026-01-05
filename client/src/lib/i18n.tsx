import React, { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "es" | "fr" | "pt"

type Translations = {
  [key in Language]: {
    selectReality: string
    online: string
    title: string
    subtitle: string
    installNow: string
    viewDocs: string
    syntaxHighlighting: string
    syntaxHighlightingDesc: string
    neonGlows: string
    neonGlowsDesc: string
    sevenVariants: string
    sevenVariantsDesc: string
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
    about: string
    aboutTitle: string
    aboutStory: string
    backHome: string
  }
}

const translations: Translations = {
  en: {
    selectReality: "Select Reality",
    online: "ONLINE",
    title: "STRANGER THEME",
    subtitle:
      "Turn your coding environment upside down.\nA dark theme collection inspired by the famous Stranger Things series.",
    installNow: "INSTALL NOW",
    viewDocs: "VIEW DOCS",
    syntaxHighlighting: "Syntax Highlighting",
    syntaxHighlightingDesc:
      "Carefully selected colors for optimal contrast and readability in the Upside Down.",
    neonGlows: "Neon Glows",
    neonGlowsDesc:
      "Subtle glowing effects on keywords to bring that 80s synthwave aesthetic to your code.",
    sevenVariants: "6 Unique Variants",
    sevenVariantsDesc:
      "From Starcourt Mall to The Lab, switch between dimensions with a single click.",
    footer: "© 1986 Stranger Theme. Made in Hawkins.",
    supportCreator: "Support Creator",
    donateTitle: "Support the Strange",
    donateDesc:
      "Help us keep the gate to the Upside Down open. Your support fuels more neon and nostalgia.",
    supportNow: "Support Now",
    thankYou: "Friends don't lie, and they also support each other. Thank you!",
    supportedPlatforms: "Supported Platforms",
    oneThemeAllPlatforms: "One theme. All platforms.",
    available: "Available",
    comingSoon: "Coming Soon",
    about: "About",
    aboutTitle: "The Story Behind Stranger Theme",
    aboutStory:
      "Stranger Theme is a collection of dark IDE themes built for developers who care about two things: focus and vibe.\n\nI was born in 80's, and I've always loved the atmosphere of Stranger Things: neon in the darkness, mystery in the background, and that feeling that something big is about to happen. Inspired by the open-source spirit and craftsmanship behind Zeno Rocha's Dracula Theme, I built Stranger Theme to bring that same \"instant identity\" into the place where we spend most of our day: the editor.\n\nStranger Theme comes in multiple flavors—each one a different \"world\" you can code in:\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme is fan-inspired (not affiliated with Netflix). It's simply my way of turning a cultural vibe into a practical tool: a theme that looks cinematic, but stays readable when you're deep in real work.",
    backHome: "Back to Home",
  },
  es: {
    selectReality: "Seleccionar Realidad",
    online: "EN LÍNEA",
    title: "STRANGER THEME",
    subtitle:
      "Pon tu entorno de código al revés.\nUna colección de temas oscuros inspirada en la serie Stranger Things.",
    installNow: "INSTALAR AHORA",
    viewDocs: "VER DOCUMENTACIÓN",
    syntaxHighlighting: "Resaltado de Sintaxis",
    syntaxHighlightingDesc:
      "Colores cuidadosamente seleccionados para un contraste y legibilidad óptimos en el Mundo del Revés.",
    neonGlows: "Brillos de Neón",
    neonGlowsDesc:
      "Efectos de brillo sutiles en palabras clave para traer esa estética synthwave de los 80 a tu código.",
    sevenVariants: "6 Variantes Únicas",
    sevenVariantsDesc:
      "Desde el Centro Comercial Starcourt hasta El Laboratorio, cambia entre dimensiones con un solo clic.",
    footer: "© 1986 Stranger Theme. Hecho en Hawkins.",
    supportCreator: "Apoyar al Creador",
    donateTitle: "Apoya lo Extraño",
    donateDesc:
      "Ayúdanos a mantener abierta la puerta al Mundo del Revés. Tu apoyo alimenta más neón y nostalgia.",
    supportNow: "Apoyar Ahora",
    thankYou: "Los amigos no mienten, y también se apoyan mutuamente. ¡Gracias!",
    supportedPlatforms: "Plataformas Soportadas",
    oneThemeAllPlatforms: "Un tema. Todas las plataformas.",
    available: "Disponible",
    comingSoon: "Próximamente",
    about: "Acerca de",
    aboutTitle: "La Historia Detrás de Stranger Theme",
    aboutStory:
      "Stranger Theme es una colección de temas oscuros para IDE creada para desarrolladores que les importan dos cosas: enfoque y ambiente.\n\nNací en los años 80, y siempre me ha gustado la atmósfera de Stranger Things: neón en la oscuridad, misterio de fondo y esa sensación de que algo grande está por ocurrir. Inspirado por el espíritu de código abierto y la artesanía detrás del Dracula Theme de Zeno Rocha, construí Stranger Theme para traer esa misma \"identidad instantánea\" al lugar donde pasamos la mayor parte de nuestro día: el editor.\n\nStranger Theme viene en múltiples variantes—cada una un \"mundo\" diferente donde puedes programar:\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme está inspirado por fans (no afiliado con Netflix). Es simplemente mi manera de convertir una vibra cultural en una herramienta práctica: un tema que se ve cinematográfico, pero se mantiene legible cuando estás profundamente inmerso en trabajo real.",
    backHome: "Volver al Inicio",
  },
  fr: {
    selectReality: "Choisir la Réalité",
    online: "EN LIGNE",
    title: "STRANGER THEME",
    subtitle:
      "Renversez votre environnement de code.\nUne collection de thèmes sombres inspirée de la série Stranger Things.",
    installNow: "INSTALLER MAINTENANT",
    viewDocs: "VOIR LA DOC",
    syntaxHighlighting: "Coloration Syntaxique",
    syntaxHighlightingDesc:
      "Couleurs soigneusement sélectionnées pour un contraste et une lisibilité optimaux dans le Monde à l'Envers.",
    neonGlows: "Lueurs Néon",
    neonGlowsDesc:
      "Effets de lueur subtils sur les mots-clés pour apporter cette esthétique synthwave des années 80 à votre code.",
    sevenVariants: "6 Variantes Uniques",
    sevenVariantsDesc:
      "Du centre commercial Starcourt au Laboratoire, changez de dimension en un clic.",
    footer: "© 1986 Stranger Theme. Fait à Hawkins.",
    supportCreator: "Soutenir le Créateur",
    donateTitle: "Soutenez l'Étrange",
    donateDesc:
      "Aidez-nous à garder la porte du Monde à l'Envers ouverte. Votre soutien alimente plus de néon et de nostalgie.",
    supportNow: "Soutenir Maintenant",
    thankYou: "Les amis ne mentent pas, et ils se soutiennent aussi. Merci !",
    supportedPlatforms: "Plateformes Supportées",
    oneThemeAllPlatforms: "Un thème. Toutes les plateformes.",
    available: "Disponible",
    comingSoon: "Bientôt",
    about: "À Propos",
    aboutTitle: "L'Histoire Derrière Stranger Theme",
    aboutStory:
      "Stranger Theme est une collection de thèmes sombres pour IDE créée pour les développeurs qui se soucient de deux choses : concentration et ambiance.\n\nJe suis né dans les années 80, et j'ai toujours aimé l'atmosphère de Stranger Things : le néon dans l'obscurité, le mystère en arrière-plan, et cette sensation que quelque chose de grand est sur le point d'arriver. Inspiré par l'esprit open-source et le savoir-faire derrière le Dracula Theme de Zeno Rocha, j'ai construit Stranger Theme pour apporter cette même \"identité instantanée\" à l'endroit où nous passons la majeure partie de notre journée : l'éditeur.\n\nStranger Theme existe en plusieurs variantes—chacune un \"monde\" différent où vous pouvez coder :\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme est inspiré par les fans (non affilié à Netflix). C'est simplement ma façon de transformer une ambiance culturelle en un outil pratique : un thème qui a un aspect cinématographique, mais reste lisible lorsque vous êtes profondément plongé dans un vrai travail.",
    backHome: "Retour à l'Accueil",
  },
  pt: {
    selectReality: "Selecionar Realidade",
    online: "ONLINE",
    title: "STRANGER THEME",
    subtitle:
      "Vire seu ambiente de código de cabeça para baixo.\nUma coleção de temas escuros inspirada na famosa série Stranger Things.",
    installNow: "INSTALAR AGORA",
    viewDocs: "VER DOCS",
    syntaxHighlighting: "Realce de Sintaxe",
    syntaxHighlightingDesc:
      "Cores cuidadosamente selecionadas para contraste e legibilidade ideais no Mundo Invertido.",
    neonGlows: "Brilhos Neon",
    neonGlowsDesc:
      "Efeitos de brilho sutis em palavras-chave para trazer aquela estética synthwave dos anos 80 ao seu código.",
    sevenVariants: "6 Variantes Únicas",
    sevenVariantsDesc:
      "Do Shopping Starcourt ao Laboratório, alterne entre dimensões com um único clique.",
    footer: "© 1986 Stranger Theme. Feito em Hawkins.",
    supportCreator: "Apoiar Criador",
    donateTitle: "Apoie o Estranho",
    donateDesc:
      "Ajude-nos a manter o portal para o Mundo Invertido aberto. Seu apoio alimenta mais neon e nostalgia.",
    supportNow: "Apoiar Agora",
    thankYou: "Amigos não mentem, e também apoiam uns aos outros. Obrigado!",
    supportedPlatforms: "Plataformas Suportadas",
    oneThemeAllPlatforms: "Um tema. Todas as plataformas.",
    available: "Disponível",
    comingSoon: "Em Breve",
    about: "Sobre",
    aboutTitle: "A História Por Trás do Stranger Theme",
    aboutStory:
      "Stranger Theme é uma coleção de temas escuros para IDE criada para desenvolvedores que se preocupam com duas coisas: foco e vibe.\n\nNasci nos anos 80, e sempre amei a atmosfera de Stranger Things: neon na escuridão, mistério ao fundo, e aquela sensação de que algo grande está prestes a acontecer. Inspirado pelo espírito open-source e pelo trabalho por trás do Dracula Theme do Zeno Rocha, construí Stranger Theme para trazer aquela mesma \"identidade instantânea\" para o lugar onde passamos a maior parte do nosso dia: o editor.\n\nStranger Theme vem em múltiplas variantes—cada uma um \"mundo\" diferente onde você pode programar:\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme é inspirado por fãs (não afiliado à Netflix). É simplesmente minha maneira de transformar uma vibe cultural em uma ferramenta prática: um tema que parece cinematográfico, mas permanece legível quando você está profundamente imerso em trabalho real.",
    backHome: "Voltar ao Início",
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations["en"]
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.split("-")[0]
  const supportedLanguages: Language[] = ["en", "es", "fr", "pt"]
  return supportedLanguages.includes(browserLang as Language) ? (browserLang as Language) : "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectBrowserLanguage)

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
