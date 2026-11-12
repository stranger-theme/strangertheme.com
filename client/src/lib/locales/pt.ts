import type { Dictionary } from "@/lib/i18n"

const pt: Dictionary = {
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
  darkThemes: "Temas Escuros",
  darkThemesDesc:
    "Seis variantes escuras projetadas para oferecer contraste confortável e código legível.",
  sixVariants: "6 Variantes Únicas",
  sixVariantsDesc:
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
  searchPlatforms: "Buscar clientes...",
  noPlatformsFound: "Nenhum cliente corresponde à sua busca.",
  installPlatform: "Guia de instalação",
  copy: "Copiar",
  copyInstallCommand: "Copiar comando de instalação",
  installCommandCopied: "Comando de instalação copiado",
  copyFailed: "Não foi possível copiar. Selecione o comando e copie manualmente.",
  selectLanguage: "Selecionar idioma",
  about: "Sobre",
  aboutTitle: "A História Por Trás do Stranger Theme",
  aboutStory:
    'Stranger Theme é uma coleção de temas escuros para IDE criada para desenvolvedores que se preocupam com duas coisas: foco e vibe.\n\nNasci nos anos 80, e sempre amei a atmosfera de Stranger Things: neon na escuridão, mistério ao fundo, e aquela sensação de que algo grande está prestes a acontecer. Inspirado pelo espírito open-source e pelo trabalho por trás do Dracula Theme do Zeno Rocha, construí Stranger Theme para trazer aquela mesma "identidade instantânea" para o lugar onde passamos a maior parte do nosso dia: o editor.\n\nStranger Theme vem em múltiplas variantes—cada uma um "mundo" diferente onde você pode programar:\n\nUpside Down\n\nStarcourt Mall\n\nHawkins\n\nThe Lab\n\nTigers\n\nDimension X\n\nStranger Theme é inspirado por fãs (não afiliado à Netflix). É simplesmente minha maneira de transformar uma vibe cultural em uma ferramenta prática: um tema que parece cinematográfico, mas permanece legível quando você está profundamente imerso em trabalho real.',
  backHome: "Voltar ao Início",
  palette: "Paleta",
  paletteTitle: "Paleta de Cores",
  paletteIntro: "Todas as cores das seis variantes, lidas da paleta do tema. Clique em uma amostra para copiar o valor hexadecimal.",
  baseColors: "Cores base",
  ansiColors: "Cores ANSI do terminal",
  colorCopied: "Cor copiada",
  codePreview: "Prévia do código",
  latestVersion: "Última versão",
  changelog: "Histórico de alterações",
  slotRoles: {
    BG: "Fundo do editor e do terminal",
    FG: "Texto padrão, identificadores e pontuação",
    SELECTION: "Fundo de seleção e destaque",
    COMMENT: "Comentários, números de linha e texto secundário",
    CYAN: "Tipos, classes, links e recursos nativos",
    GREEN: "Funções, métodos, atributos e decoradores",
    ORANGE: "Parâmetros, texto alterado e buscado",
    PINK: "Palavras-chave, armazenamento, operadores e tags",
    PURPLE: "Constantes, números, booleanos e títulos",
    RED: "Erros, entradas inválidas e remoções",
    YELLOW: "Strings, caracteres, tarefas pendentes e avisos",
  },
  notFoundTitle: "404: Página não encontrada",
  notFoundBody: "Esta página escorregou para o Mundo Invertido. Confira o endereço ou volte ao início.",
  install: "Instalação",
  openOn: "Abrir em",
  backToCatalog: "Todos os clientes",
  platforms: {
    "visual-studio-code": { about: "O editor de código gratuito da Microsoft para Windows, macOS e Linux." },
    "jetbrains-ides": {
      about: "IntelliJ IDEA, PyCharm, WebStorm e os demais IDEs da JetBrains, com um único plugin.",
      steps: [
        "Abra Configurações (Preferências no macOS) → Plugins e selecione a aba Marketplace.",
        "Busque `Stranger Theme`, clique em Instalar e reinicie o IDE.",
        "Abra Configurações → Aparência e comportamento → Aparência e escolha uma variante do Stranger Theme na lista Tema.",
      ],
    },
    "vim-neovim": {
      about: "Os editores de texto modais que rodam no seu terminal.",
      steps: [
        "Adicione `stranger-theme/stranger-theme` com seu gerenciador de plugins, por exemplo `Plug 'stranger-theme/stranger-theme'` com o vim-plug.",
        "Ative cores verdadeiras com `set termguicolors` no Vim, ou `vim.opt.termguicolors = true` no Neovim.",
        "Carregue uma variante com `colorscheme stranger_starcourt`. As outras variantes são `stranger_upside_down`, `stranger_hawkins`, `stranger_the_lab`, `stranger_tigers` e `stranger_dimension_x`.",
      ],
    },
    "sublime-text": {
      about: "Um editor rápido e leve para código e texto.",
      steps: [
        "Abra a paleta de comandos com `Ctrl+Shift+P` (`Cmd+Shift+P` no macOS) e execute `Package Control: Install Package`.",
        "Busque `Stranger Theme Color Schemes` e pressione Enter.",
        "Abra Preferências → Esquema de cores e escolha uma variante do Stranger Theme.",
      ],
    },
    alacritty: { about: "Um emulador de terminal rápido, acelerado por GPU." },
    iterm2: {
      about: "Um emulador de terminal para macOS.",
      steps: [
        "Baixe os arquivos do iTerm2 da versão mais recente no GitHub (ou da pasta `terminal/iterm2/` do repositório).",
        "No iTerm2, abra Ajustes → Perfis → Cores, clique em Predefinições de cores → Importar e selecione o arquivo `.itermcolors`.",
        "Escolha a predefinição do Stranger Theme importada em Predefinições de cores.",
      ],
    },
    "windows-terminal": {
      about: "O terminal da Microsoft para PowerShell, Prompt de Comando e WSL.",
      steps: [
        "Baixe os arquivos do Windows Terminal da versão mais recente no GitHub (ou da pasta `terminal/` do repositório) e abra o PowerShell nessa pasta.",
        "Copie o fragmento que reúne os seis esquemas: `$dir = \"$env:LOCALAPPDATA\\Microsoft\\Windows Terminal\\Fragments\\StrangerTheme\"; New-Item -ItemType Directory -Force $dir | Out-Null; Copy-Item windows-terminal\\fragment\\stranger-theme.json $dir`",
        "Reinicie o Windows Terminal e escolha um esquema do Stranger Theme em Configurações → seu perfil → Aparência → Esquema de cores.",
      ],
    },
    hyper: { about: "Um terminal construído com tecnologias web e extensível por plugins." },
    ghostty: { about: "Um emulador de terminal rápido e nativo para macOS e Linux." },
    kitty: { about: "Um emulador de terminal rápido, baseado em GPU, para macOS e Linux." },
    wezterm: { about: "Um emulador e multiplexador de terminal acelerado por GPU, configurado em Lua." },
    zed: {
      about: "Um editor de código rápido e colaborativo.",
      steps: [
        "Abra a tela de extensões com o comando `zed: extensions`.",
        "Busque Stranger Theme e clique em Instalar.",
        "Execute `theme selector: toggle` pela paleta de comandos e escolha uma variante do Stranger Theme, como Stranger Theme: Starcourt.",
      ],
    },
    helix: {
      about: "Um editor modal para o terminal com suporte a linguagens embutido.",
      steps: [
        "Baixe os arquivos do Helix da versão mais recente no GitHub (ou da pasta `helix/` do repositório) e abra um terminal nessa pasta.",
        "Copie os temas com `mkdir -p ~/.config/helix/themes && cp themes/stranger_*.toml ~/.config/helix/themes/`. No Windows, copie-os para `%AppData%\\helix\\themes\\`.",
        "Defina `theme = \"stranger_starcourt\"` no `config.toml`, ou experimente uma variante com `:theme stranger_starcourt`.",
      ],
    },
    tmux: {
      about: "Um multiplexador de terminal: várias sessões, janelas e painéis em um só terminal.",
      steps: [
        "Baixe os arquivos do tmux da versão mais recente no GitHub (ou da pasta `tmux/` do repositório) e abra um terminal nessa pasta.",
        "Copie uma variante com `mkdir -p ~/.config/tmux && cp themes/stranger-theme-starcourt.conf ~/.config/tmux/`",
        "Adicione `source-file ~/.config/tmux/stranger-theme-starcourt.conf` ao final do `~/.tmux.conf` e recarregue com `tmux source-file ~/.tmux.conf`.",
      ],
    },
    warp: {
      about: "Um terminal moderno para macOS, Linux e Windows.",
      steps: [
        "Baixe os arquivos do Warp da versão mais recente no GitHub (ou da pasta `terminal/` do repositório) e abra um terminal nessa pasta.",
        "No macOS, execute `mkdir -p ~/.warp/themes && cp warp/stranger_theme_*.yaml ~/.warp/themes/`. No Linux, copie-os para `${XDG_DATA_HOME:-$HOME/.local/share}/warp-terminal/themes`; no Windows, para `%APPDATA%\\warp\\Warp\\data\\themes\\`.",
        "Abra Configurações → Aparência → Temas e escolha Stranger Theme: Starcourt ou outra variante.",
      ],
    },
    "macos-terminal": {
      about: "O app de terminal que vem com o macOS.",
      steps: [
        "Baixe os perfis do Terminal do macOS da versão mais recente no GitHub (ou da pasta `terminal/terminal-app/` do repositório).",
        "Clique duas vezes em `Stranger-Theme-Starcourt.terminal`, ou abra Terminal → Ajustes → Perfis, clique em ⋯ abaixo da lista de perfis e escolha Importar.",
        "Selecione o perfil Stranger Theme: Starcourt e clique em Padrão para usá-lo nas novas janelas.",
      ],
    },
  },
}

export default pt
