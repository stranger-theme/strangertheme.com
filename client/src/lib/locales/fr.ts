import type { Dictionary } from "@/lib/i18n"

const fr: Dictionary = {
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
  darkThemes: "Thèmes Sombres",
  darkThemesDesc:
    "Six variantes sombres conçues pour un contraste confortable et un code lisible.",
  sixVariants: "6 Variantes Uniques",
  sixVariantsDesc:
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
  searchPlatforms: "Rechercher un client...",
  noPlatformsFound: "Aucun client ne correspond à votre recherche.",
  installPlatform: "Guide d'installation",
  copy: "Copier",
  copyInstallCommand: "Copier la commande d'installation",
  installCommandCopied: "Commande d'installation copiée",
  copyFailed: "Copie impossible. Sélectionnez la commande et copiez-la à la main.",
  selectLanguage: "Choisir la langue",
  about: "À Propos",
  aboutTitle: "L'Histoire Derrière Stranger Theme",
  aboutStory:
    "Stranger Theme est une collection de thèmes sombres pour IDE créée pour les développeurs qui se soucient de deux choses : concentration et ambiance.\n\nJe suis né dans les années 80, et j'ai toujours aimé l'atmosphère de Stranger Things : le néon dans l'obscurité, le mystère en arrière-plan, et cette sensation que quelque chose de grand est sur le point d'arriver. Inspiré par l'esprit open-source et le savoir-faire derrière le Dracula Theme de Zeno Rocha, j'ai construit Stranger Theme pour apporter cette même \"identité instantanée\" à l'endroit où nous passons la majeure partie de notre journée : l'éditeur.\n\nStranger Theme existe en plusieurs variantes—chacune un \"monde\" différent où vous pouvez coder :\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme est inspiré par les fans (non affilié à Netflix). C'est simplement ma façon de transformer une ambiance culturelle en un outil pratique : un thème qui a un aspect cinématographique, mais reste lisible lorsque vous êtes profondément plongé dans un vrai travail.",
  backHome: "Retour à l'Accueil",
  palette: "Palette",
  paletteTitle: "Palette de Couleurs",
  paletteIntro: "Toutes les couleurs des six variantes, issues de la palette du thème. Cliquez sur une pastille pour copier sa valeur hexadécimale.",
  baseColors: "Couleurs de base",
  ansiColors: "Couleurs ANSI du terminal",
  colorCopied: "Couleur copiée",
  codePreview: "Aperçu du code",
  latestVersion: "Dernière version",
  changelog: "Journal des modifications",
  slotRoles: {
    BG: "Fond de l'éditeur et du terminal",
    FG: "Texte par défaut, identifiants et ponctuation",
    SELECTION: "Fond de sélection et de surlignage",
    COMMENT: "Commentaires, numéros de ligne et texte secondaire",
    CYAN: "Types, classes, liens et éléments intégrés",
    GREEN: "Fonctions, méthodes, attributs et décorateurs",
    ORANGE: "Paramètres, texte modifié et recherché",
    PINK: "Mots-clés, stockage, opérateurs et balises",
    PURPLE: "Constantes, nombres, booléens et titres",
    RED: "Erreurs, saisies invalides et suppressions",
    YELLOW: "Chaînes, caractères, tâches à faire et avertissements",
  },
  notFoundTitle: "404 : page introuvable",
  notFoundBody: "Cette page a glissé dans le Monde à l'Envers. Vérifiez l'adresse ou revenez à l'accueil.",
  install: "Installation",
  openOn: "Ouvrir sur",
  backToCatalog: "Tous les clients",
  platforms: {
    "visual-studio-code": { about: "L'éditeur de code gratuit de Microsoft pour Windows, macOS et Linux." },
    "jetbrains-ides": {
      about: "IntelliJ IDEA, PyCharm, WebStorm et les autres IDE JetBrains, avec un seul plugin.",
      steps: [
        "Ouvrez Paramètres (Préférences sur macOS) → Plugins et sélectionnez l'onglet Marketplace.",
        "Recherchez `Stranger Theme`, cliquez sur Installer et redémarrez l'IDE.",
        "Ouvrez Paramètres → Apparence et comportement → Apparence et choisissez une variante Stranger Theme dans la liste Thème.",
      ],
    },
    "vim-neovim": {
      about: "Les éditeurs de texte modaux qui tournent dans votre terminal.",
      steps: [
        "Ajoutez `stranger-theme/stranger-theme` avec votre gestionnaire de plugins, par exemple `Plug 'stranger-theme/stranger-theme'` avec vim-plug.",
        "Activez les vraies couleurs avec `set termguicolors` dans Vim, ou `vim.opt.termguicolors = true` dans Neovim.",
        "Chargez une variante avec `colorscheme stranger_starcourt`. Les autres variantes sont `stranger_upside_down`, `stranger_hawkins`, `stranger_the_lab`, `stranger_tigers` et `stranger_dimension_x`.",
      ],
    },
    "sublime-text": {
      about: "Un éditeur rapide et léger pour le code et le texte.",
      steps: [
        "Ouvrez la palette de commandes avec `Ctrl+Shift+P` (`Cmd+Shift+P` sur macOS) et lancez `Package Control: Install Package`.",
        "Recherchez `Stranger Theme Color Schemes` et appuyez sur Entrée.",
        "Ouvrez Préférences → Schéma de couleurs et choisissez une variante Stranger Theme.",
      ],
    },
    alacritty: { about: "Un émulateur de terminal rapide, accéléré par GPU." },
    iterm2: {
      about: "Un émulateur de terminal pour macOS.",
      steps: [
        "Téléchargez les fichiers iTerm2 de la dernière version sur GitHub (ou du dossier `terminal/iterm2/` du dépôt).",
        "Dans iTerm2, ouvrez Réglages → Profils → Couleurs, cliquez sur Préréglages de couleurs → Importer et sélectionnez le fichier `.itermcolors`.",
        "Choisissez le préréglage Stranger Theme importé dans Préréglages de couleurs.",
      ],
    },
    "windows-terminal": {
      about: "Le terminal de Microsoft pour PowerShell, l'invite de commandes et WSL.",
      steps: [
        "Téléchargez les fichiers Windows Terminal de la dernière version sur GitHub (ou du dossier `terminal/` du dépôt) et ouvrez PowerShell dans ce dossier.",
        "Copiez le fragment qui contient les six schémas : `$dir = \"$env:LOCALAPPDATA\\Microsoft\\Windows Terminal\\Fragments\\StrangerTheme\"; New-Item -ItemType Directory -Force $dir | Out-Null; Copy-Item windows-terminal\\fragment\\stranger-theme.json $dir`",
        "Redémarrez Windows Terminal, puis choisissez un schéma Stranger Theme dans Paramètres → votre profil → Apparence → Jeu de couleurs.",
      ],
    },
    hyper: { about: "Un terminal construit avec des technologies web et extensible par plugins." },
    ghostty: { about: "Un émulateur de terminal rapide et natif pour macOS et Linux." },
    kitty: { about: "Un émulateur de terminal rapide, basé sur le GPU, pour macOS et Linux." },
    wezterm: { about: "Un émulateur et multiplexeur de terminal accéléré par GPU, configuré en Lua." },
    zed: {
      about: "Un éditeur de code rapide et collaboratif.",
      steps: [
        "Ouvrez la vue des extensions avec la commande `zed: extensions`.",
        "Recherchez Stranger Theme et cliquez sur Installer.",
        "Lancez `theme selector: toggle` depuis la palette de commandes et choisissez une variante Stranger Theme, par exemple Stranger Theme: Starcourt.",
      ],
    },
    helix: {
      about: "Un éditeur modal pour le terminal, avec la prise en charge des langages intégrée.",
      steps: [
        "Téléchargez les fichiers Helix de la dernière version sur GitHub (ou du dossier `helix/` du dépôt) et ouvrez un terminal dans ce dossier.",
        "Copiez les thèmes avec `mkdir -p ~/.config/helix/themes && cp themes/stranger_*.toml ~/.config/helix/themes/`. Sous Windows, copiez-les dans `%AppData%\\helix\\themes\\`.",
        "Définissez `theme = \"stranger_starcourt\"` dans `config.toml`, ou essayez une variante avec `:theme stranger_starcourt`.",
      ],
    },
    tmux: {
      about: "Un multiplexeur de terminal : plusieurs sessions, fenêtres et panneaux dans un seul terminal.",
      steps: [
        "Téléchargez les fichiers tmux de la dernière version sur GitHub (ou du dossier `tmux/` du dépôt) et ouvrez un terminal dans ce dossier.",
        "Copiez une variante avec `mkdir -p ~/.config/tmux && cp themes/stranger-theme-starcourt.conf ~/.config/tmux/`",
        "Ajoutez `source-file ~/.config/tmux/stranger-theme-starcourt.conf` à la fin de `~/.tmux.conf`, puis rechargez avec `tmux source-file ~/.tmux.conf`.",
      ],
    },
    warp: {
      about: "Un terminal moderne pour macOS, Linux et Windows.",
      steps: [
        "Téléchargez les fichiers Warp de la dernière version sur GitHub (ou du dossier `terminal/` du dépôt) et ouvrez un terminal dans ce dossier.",
        "Sur macOS, lancez `mkdir -p ~/.warp/themes && cp warp/stranger_theme_*.yaml ~/.warp/themes/`. Sous Linux, copiez-les dans `${XDG_DATA_HOME:-$HOME/.local/share}/warp-terminal/themes` ; sous Windows, dans `%APPDATA%\\warp\\Warp\\data\\themes\\`.",
        "Ouvrez Paramètres → Apparence → Thèmes et choisissez Stranger Theme: Starcourt ou une autre variante.",
      ],
    },
    "macos-terminal": {
      about: "L'application de terminal intégrée à macOS.",
      steps: [
        "Téléchargez les profils Terminal de macOS de la dernière version sur GitHub (ou du dossier `terminal/terminal-app/` du dépôt).",
        "Double-cliquez sur `Stranger-Theme-Starcourt.terminal`, ou ouvrez Terminal → Réglages → Profils, cliquez sur ⋯ sous la liste des profils et choisissez Importer.",
        "Sélectionnez le profil Stranger Theme: Starcourt et cliquez sur Par défaut pour l'utiliser dans les nouvelles fenêtres.",
      ],
    },
  },
}

export default fr
