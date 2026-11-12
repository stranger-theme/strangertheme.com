import type { Dictionary } from "@/lib/i18n"

const es: Dictionary = {
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
  darkThemes: "Temas Oscuros",
  darkThemesDesc:
    "Seis variantes oscuras diseñadas para ofrecer buen contraste y código legible.",
  sixVariants: "6 Variantes Únicas",
  sixVariantsDesc:
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
  searchPlatforms: "Buscar clientes...",
  noPlatformsFound: "Ningún cliente coincide con tu búsqueda.",
  installPlatform: "Guía de instalación",
  copy: "Copiar",
  copyInstallCommand: "Copiar comando de instalación",
  installCommandCopied: "Comando de instalación copiado",
  copyFailed: "No se pudo copiar. Selecciona el comando y cópialo a mano.",
  selectLanguage: "Seleccionar idioma",
  about: "Acerca de",
  aboutTitle: "La Historia Detrás de Stranger Theme",
  aboutStory:
    'Stranger Theme es una colección de temas oscuros para IDE creada para desarrolladores que les importan dos cosas: enfoque y ambiente.\n\nNací en los años 80, y siempre me ha gustado la atmósfera de Stranger Things: neón en la oscuridad, misterio de fondo y esa sensación de que algo grande está por ocurrir. Inspirado por el espíritu de código abierto y la artesanía detrás del Dracula Theme de Zeno Rocha, construí Stranger Theme para traer esa misma "identidad instantánea" al lugar donde pasamos la mayor parte de nuestro día: el editor.\n\nStranger Theme viene en múltiples variantes—cada una un "mundo" diferente donde puedes programar:\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme está inspirado por fans (no afiliado con Netflix). Es simplemente mi manera de convertir una vibra cultural en una herramienta práctica: un tema que se ve cinematográfico, pero se mantiene legible cuando estás profundamente inmerso en trabajo real.',
  backHome: "Volver al Inicio",
  palette: "Paleta",
  paletteTitle: "Paleta de Colores",
  paletteIntro: "Todos los colores de las seis variantes, tomados de la paleta del tema. Haz clic en una muestra para copiar su valor hexadecimal.",
  baseColors: "Colores base",
  ansiColors: "Colores ANSI de terminal",
  colorCopied: "Color copiado",
  codePreview: "Vista previa del código",
  latestVersion: "Última versión",
  changelog: "Registro de cambios",
  slotRoles: {
    BG: "Fondo del editor y de la terminal",
    FG: "Texto por defecto, identificadores y puntuación",
    SELECTION: "Fondo de selección y resaltado",
    COMMENT: "Comentarios, números de línea y texto secundario",
    CYAN: "Tipos, clases, enlaces y elementos integrados",
    GREEN: "Funciones, métodos, atributos y decoradores",
    ORANGE: "Parámetros, texto modificado y buscado",
    PINK: "Palabras clave, almacenamiento, operadores y etiquetas",
    PURPLE: "Constantes, números, booleanos y encabezados",
    RED: "Errores, entradas no válidas y eliminaciones",
    YELLOW: "Cadenas, caracteres, tareas pendientes y advertencias",
  },
  notFoundTitle: "404: Página no encontrada",
  notFoundBody: "Esta página se perdió en el Mundo del Revés. Revisa la dirección o vuelve al inicio.",
  install: "Instalación",
  openOn: "Abrir en",
  backToCatalog: "Todos los clientes",
  platforms: {
    "visual-studio-code": { about: "El editor de código gratuito de Microsoft para Windows, macOS y Linux." },
    "jetbrains-ides": {
      about: "IntelliJ IDEA, PyCharm, WebStorm y los demás IDE de JetBrains, todos con un solo plugin.",
      steps: [
        "Abre Configuración (Preferencias en macOS) → Plugins y selecciona la pestaña Marketplace.",
        "Busca `Stranger Theme`, haz clic en Instalar y reinicia el IDE.",
        "Abre Configuración → Apariencia y comportamiento → Apariencia y elige una variante de Stranger Theme en la lista Tema.",
      ],
    },
    "vim-neovim": {
      about: "Los editores de texto modales que funcionan en tu terminal.",
      steps: [
        "Añade `stranger-theme/stranger-theme` con tu gestor de plugins, por ejemplo `Plug 'stranger-theme/stranger-theme'` con vim-plug.",
        "Activa el color verdadero con `set termguicolors` en Vim, o `vim.opt.termguicolors = true` en Neovim.",
        "Carga una variante con `colorscheme stranger_starcourt`. Las demás variantes son `stranger_upside_down`, `stranger_hawkins`, `stranger_the_lab`, `stranger_tigers` y `stranger_dimension_x`.",
      ],
    },
    "sublime-text": {
      about: "Un editor rápido y ligero para código y texto.",
      steps: [
        "Abre la paleta de comandos con `Ctrl+Shift+P` (`Cmd+Shift+P` en macOS) y ejecuta `Package Control: Install Package`.",
        "Busca `Stranger Theme Color Schemes` y pulsa Intro.",
        "Abre Preferencias → Esquema de color y elige una variante de Stranger Theme.",
      ],
    },
    alacritty: { about: "Un emulador de terminal rápido, acelerado por GPU." },
    iterm2: {
      about: "Un emulador de terminal para macOS.",
      steps: [
        "Descarga los archivos de iTerm2 de la última versión en GitHub (o de la carpeta `terminal/iterm2/` del repositorio).",
        "En iTerm2, abre Ajustes → Perfiles → Colores, haz clic en Ajustes de color predefinidos → Importar y selecciona el archivo `.itermcolors`.",
        "Elige el ajuste de Stranger Theme importado en Ajustes de color predefinidos.",
      ],
    },
    "windows-terminal": {
      about: "La terminal de Microsoft para PowerShell, Símbolo del sistema y WSL.",
      steps: [
        "Descarga los archivos de Windows Terminal de la última versión en GitHub (o de la carpeta `terminal/` del repositorio) y abre PowerShell en esa carpeta.",
        "Copia el fragmento que contiene los seis esquemas: `$dir = \"$env:LOCALAPPDATA\\Microsoft\\Windows Terminal\\Fragments\\StrangerTheme\"; New-Item -ItemType Directory -Force $dir | Out-Null; Copy-Item windows-terminal\\fragment\\stranger-theme.json $dir`",
        "Reinicia Windows Terminal y elige un esquema de Stranger Theme en Configuración → tu perfil → Apariencia → Esquema de colores.",
      ],
    },
    hyper: { about: "Una terminal construida con tecnologías web y ampliable con plugins." },
    ghostty: { about: "Un emulador de terminal rápido y nativo para macOS y Linux." },
    kitty: { about: "Un emulador de terminal rápido, basado en GPU, para macOS y Linux." },
    wezterm: { about: "Un emulador y multiplexor de terminal acelerado por GPU que se configura en Lua." },
    zed: {
      about: "Un editor de código rápido y colaborativo.",
      steps: [
        "Abre la vista de extensiones con el comando `zed: extensions`.",
        "Busca Stranger Theme y haz clic en Instalar.",
        "Ejecuta `theme selector: toggle` desde la paleta de comandos y elige una variante de Stranger Theme, como Stranger Theme: Starcourt.",
      ],
    },
    helix: {
      about: "Un editor modal para la terminal con soporte de lenguajes integrado.",
      steps: [
        "Descarga los archivos de Helix de la última versión en GitHub (o de la carpeta `helix/` del repositorio) y abre una terminal en esa carpeta.",
        "Copia los temas con `mkdir -p ~/.config/helix/themes && cp themes/stranger_*.toml ~/.config/helix/themes/`. En Windows, cópialos a `%AppData%\\helix\\themes\\`.",
        "Define `theme = \"stranger_starcourt\"` en `config.toml`, o prueba una variante con `:theme stranger_starcourt`.",
      ],
    },
    tmux: {
      about: "Un multiplexor de terminal: varias sesiones, ventanas y paneles en una sola terminal.",
      steps: [
        "Descarga los archivos de tmux de la última versión en GitHub (o de la carpeta `tmux/` del repositorio) y abre una terminal en esa carpeta.",
        "Copia una variante con `mkdir -p ~/.config/tmux && cp themes/stranger-theme-starcourt.conf ~/.config/tmux/`",
        "Añade `source-file ~/.config/tmux/stranger-theme-starcourt.conf` al final de `~/.tmux.conf` y recarga con `tmux source-file ~/.tmux.conf`.",
      ],
    },
    warp: {
      about: "Una terminal moderna para macOS, Linux y Windows.",
      steps: [
        "Descarga los archivos de Warp de la última versión en GitHub (o de la carpeta `terminal/` del repositorio) y abre una terminal en esa carpeta.",
        "En macOS, ejecuta `mkdir -p ~/.warp/themes && cp warp/stranger_theme_*.yaml ~/.warp/themes/`. En Linux, cópialos a `${XDG_DATA_HOME:-$HOME/.local/share}/warp-terminal/themes`; en Windows, a `%APPDATA%\\warp\\Warp\\data\\themes\\`.",
        "Abre Configuración → Apariencia → Temas y elige Stranger Theme: Starcourt u otra variante.",
      ],
    },
    "macos-terminal": {
      about: "La app de terminal incluida en macOS.",
      steps: [
        "Descarga los perfiles de Terminal de macOS de la última versión en GitHub (o de la carpeta `terminal/terminal-app/` del repositorio).",
        "Haz doble clic en `Stranger-Theme-Starcourt.terminal`, o abre Terminal → Ajustes → Perfiles, haz clic en ⋯ debajo de la lista de perfiles y elige Importar.",
        "Selecciona el perfil Stranger Theme: Starcourt y haz clic en Por omisión para usarlo en las ventanas nuevas.",
      ],
    },
  },
}

export default es
