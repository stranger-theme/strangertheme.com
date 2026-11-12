import type { Dictionary } from "@/lib/i18n"

const en: Dictionary = {
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
  darkThemes: "Dark Themes",
  darkThemesDesc: "Six dark color variants designed for comfortable contrast and readable code.",
  sixVariants: "6 Unique Variants",
  sixVariantsDesc:
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
  searchPlatforms: "Search clients...",
  noPlatformsFound: "No clients match your search.",
  installPlatform: "Installation guide",
  copy: "Copy",
  copyInstallCommand: "Copy install command",
  installCommandCopied: "Install command copied",
  copyFailed: "Could not copy. Select the command and copy it by hand.",
  selectLanguage: "Select language",
  about: "About",
  aboutTitle: "The Story Behind Stranger Theme",
  aboutStory:
    "Stranger Theme is a collection of dark IDE themes built for developers who care about two things: focus and vibe.\n\nI was born in 80's, and I've always loved the atmosphere of Stranger Things: neon in the darkness, mystery in the background, and that feeling that something big is about to happen. Inspired by the open-source spirit and craftsmanship behind Zeno Rocha's Dracula Theme, I built Stranger Theme to bring that same \"instant identity\" into the place where we spend most of our day: the editor.\n\nStranger Theme comes in multiple flavors—each one a different \"world\" you can code in:\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme is fan-inspired (not affiliated with Netflix). It's simply my way of turning a cultural vibe into a practical tool: a theme that looks cinematic, but stays readable when you're deep in real work.",
  backHome: "Back to Home",
  palette: "Palette",
  paletteTitle: "Color Palette",
  paletteIntro: "Every color of the six variants, read from the theme's palette. Click a swatch to copy its hex value.",
  baseColors: "Base colors",
  ansiColors: "Terminal ANSI colors",
  colorCopied: "Color copied",
  codePreview: "Code preview",
  latestVersion: "Latest version",
  changelog: "Changelog",
  slotRoles: {
    BG: "Editor and terminal background",
    FG: "Default text, identifiers and punctuation",
    SELECTION: "Selection and highlight surface",
    COMMENT: "Comments, line numbers and secondary text",
    CYAN: "Types, classes, links and built-ins",
    GREEN: "Functions, methods, attributes and decorators",
    ORANGE: "Parameters, changed and searched text",
    PINK: "Keywords, storage, operators and tags",
    PURPLE: "Constants, numbers, booleans and headings",
    RED: "Errors, invalid input and deletions",
    YELLOW: "Strings, characters, to-dos and warnings",
  },
  notFoundTitle: "404: Page not found",
  notFoundBody: "This page slipped into the Upside Down. Check the address or head back home.",
  install: "Install",
  openOn: "Open on",
  backToCatalog: "All clients",
  platforms: {
    "visual-studio-code": { about: "Microsoft's free code editor for Windows, macOS and Linux." },
    "jetbrains-ides": {
      about: "IntelliJ IDEA, PyCharm, WebStorm and the other JetBrains IDEs, all from one plugin.",
      steps: [
        "Open Settings (Preferences on macOS) → Plugins and select the Marketplace tab.",
        "Search for `Stranger Theme`, click Install and restart the IDE.",
        "Open Settings → Appearance & Behavior → Appearance and choose a Stranger Theme variant in the Theme list.",
      ],
    },
    "vim-neovim": {
      about: "The modal text editors that run in your terminal.",
      steps: [
        "Add `stranger-theme/stranger-theme` with your plugin manager, for example `Plug 'stranger-theme/stranger-theme'` with vim-plug.",
        "Turn on true colour with `set termguicolors` in Vim, or `vim.opt.termguicolors = true` in Neovim.",
        "Load a variant with `colorscheme stranger_starcourt`. The other variants are `stranger_upside_down`, `stranger_hawkins`, `stranger_the_lab`, `stranger_tigers` and `stranger_dimension_x`.",
      ],
    },
    "sublime-text": {
      about: "A fast, lightweight editor for code and prose.",
      steps: [
        "Open the Command Palette with `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS) and run `Package Control: Install Package`.",
        "Search for `Stranger Theme Color Schemes` and press Enter.",
        "Open Preferences → Color Scheme and choose a Stranger Theme variant.",
      ],
    },
    alacritty: { about: "A fast, GPU-accelerated terminal emulator." },
    iterm2: {
      about: "A terminal emulator for macOS.",
      steps: [
        "Download the iTerm2 files from the latest GitHub release (or the `terminal/iterm2/` folder of the repository).",
        "In iTerm2, open Settings → Profiles → Colors, click Color Presets → Import and select the `.itermcolors` file.",
        "Choose the imported Stranger Theme preset from Color Presets.",
      ],
    },
    "windows-terminal": {
      about: "Microsoft's terminal for PowerShell, Command Prompt and WSL.",
      steps: [
        "Download the Windows Terminal files from the latest GitHub release (or the `terminal/` folder of the repository) and open PowerShell in that folder.",
        "Copy the fragment that holds all six schemes: `$dir = \"$env:LOCALAPPDATA\\Microsoft\\Windows Terminal\\Fragments\\StrangerTheme\"; New-Item -ItemType Directory -Force $dir | Out-Null; Copy-Item windows-terminal\\fragment\\stranger-theme.json $dir`",
        "Restart Windows Terminal, then choose a Stranger Theme scheme under Settings → your profile → Appearance → Color scheme.",
      ],
    },
    hyper: { about: "A terminal built on web technologies and extended with plugins." },
    ghostty: { about: "A fast, native terminal emulator for macOS and Linux." },
    kitty: { about: "A fast, GPU-based terminal emulator for macOS and Linux." },
    wezterm: { about: "A GPU-accelerated terminal emulator and multiplexer configured in Lua." },
    zed: {
      about: "A fast, collaborative code editor.",
      steps: [
        "Open the extensions view with the `zed: extensions` command.",
        "Search for Stranger Theme and click Install.",
        "Run `theme selector: toggle` from the command palette and choose a Stranger Theme variant, such as Stranger Theme: Starcourt.",
      ],
    },
    helix: {
      about: "A modal terminal editor with language support built in.",
      steps: [
        "Download the Helix files from the latest GitHub release (or the `helix/` folder of the repository) and open a terminal in that folder.",
        "Copy the themes with `mkdir -p ~/.config/helix/themes && cp themes/stranger_*.toml ~/.config/helix/themes/`. On Windows, copy them to `%AppData%\\helix\\themes\\`.",
        "Set `theme = \"stranger_starcourt\"` in `config.toml`, or try a variant with `:theme stranger_starcourt`.",
      ],
    },
    tmux: {
      about: "A terminal multiplexer: many sessions, windows and panes in one terminal.",
      steps: [
        "Download the tmux files from the latest GitHub release (or the `tmux/` folder of the repository) and open a terminal in that folder.",
        "Copy a variant with `mkdir -p ~/.config/tmux && cp themes/stranger-theme-starcourt.conf ~/.config/tmux/`",
        "Add `source-file ~/.config/tmux/stranger-theme-starcourt.conf` to the end of `~/.tmux.conf`, then reload with `tmux source-file ~/.tmux.conf`.",
      ],
    },
    warp: {
      about: "A modern terminal for macOS, Linux and Windows.",
      steps: [
        "Download the Warp files from the latest GitHub release (or the `terminal/` folder of the repository) and open a terminal in that folder.",
        "On macOS, run `mkdir -p ~/.warp/themes && cp warp/stranger_theme_*.yaml ~/.warp/themes/`. On Linux, copy them to `${XDG_DATA_HOME:-$HOME/.local/share}/warp-terminal/themes`; on Windows, to `%APPDATA%\\warp\\Warp\\data\\themes\\`.",
        "Open Settings → Appearance → Themes and choose Stranger Theme: Starcourt or another variant.",
      ],
    },
    "macos-terminal": {
      about: "The terminal app built into macOS.",
      steps: [
        "Download the macOS Terminal profiles from the latest GitHub release (or the `terminal/terminal-app/` folder of the repository).",
        "Double-click `Stranger-Theme-Starcourt.terminal`, or open Terminal → Settings → Profiles, click ⋯ below the profile list and choose Import.",
        "Select the Stranger Theme: Starcourt profile and click Default to use it in new windows.",
      ],
    },
  },
}

export default en
