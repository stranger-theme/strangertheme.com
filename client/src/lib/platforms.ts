export type Platform = {
  name: string
  aliases: string[]
  href: string
  mark: string
  /** One shell line that installs the given variant id. */
  install?: (variant: string) => string
  links?: { label: string; href: string }[]
}

const repository = "https://github.com/stranger-theme/stranger-theme/tree/main"
const raw = "https://raw.githubusercontent.com/stranger-theme/stranger-theme/main/terminal"
const config = '"${XDG_CONFIG_HOME:-$HOME/.config}"'

const download = (source: string, destination: string) =>
  `curl -fsSL --create-dirs -o ${destination} ${raw}/${source}`

export const platforms: Platform[] = [
  {
    name: "Visual Studio Code",
    aliases: ["vscode", "vs code"],
    href: "https://marketplace.visualstudio.com/items?itemName=StrangerTheme.stranger-theme-vscode",
    mark: "VS",
    install: () => "code --install-extension StrangerTheme.stranger-theme-vscode",
    links: [{ label: "Open VSX", href: "https://open-vsx.org/extension/StrangerTheme/stranger-theme-vscode" }],
  },
  {
    name: "JetBrains IDEs",
    aliases: ["intellij", "idea", "pycharm", "webstorm", "phpstorm", "rider", "goland", "clion", "datagrip"],
    href: "https://plugins.jetbrains.com/plugin/29608-stranger-theme",
    mark: "JB",
  },
  {
    name: "Vim / Neovim",
    aliases: ["vim", "vi", "neovim", "nvim"],
    href: `${repository}/vim`,
    mark: "Vi",
  },
  { name: "Sublime Text", aliases: ["sublime"], href: `${repository}/sublime-text`, mark: "ST" },
  {
    name: "Alacritty",
    aliases: [],
    href: `${repository}/terminal#alacritty`,
    mark: "A",
    install: (v) =>
      download(`alacritty/stranger-theme-${v}.toml`, `~/.config/alacritty/themes/stranger-theme-${v}.toml`),
  },
  { name: "iTerm2", aliases: ["iterm"], href: `${repository}/terminal#iterm2`, mark: "iT" },
  {
    name: "Windows Terminal",
    aliases: ["windows"],
    href: `${repository}/terminal#windows-terminal`,
    mark: "WT",
  },
  {
    name: "Hyper",
    aliases: [],
    href: `${repository}/hyper`,
    mark: "Hy",
    install: (v) => `hyper i hyper-stranger-theme-${v}`,
    links: [{ label: "npm", href: "https://www.npmjs.com/search?q=hyper-stranger-theme" }],
  },
  {
    name: "Ghostty",
    aliases: [],
    href: `${repository}/terminal#ghostty`,
    mark: "G",
    install: (v) => download(`ghostty/stranger-theme-${v}`, `${config}/ghostty/themes/stranger-theme-${v}`),
  },
  {
    name: "Kitty",
    aliases: [],
    href: `${repository}/terminal#kitty`,
    mark: "K",
    install: (v) => download(`kitty/stranger-theme-${v}.conf`, `${config}/kitty/themes/stranger-theme-${v}.conf`),
  },
  {
    name: "WezTerm",
    aliases: ["wezterm"],
    href: `${repository}/terminal#wezterm`,
    mark: "W",
    install: (v) =>
      download(`wezterm/stranger-theme-${v}.toml`, `~/.config/wezterm/colors/stranger-theme-${v}.toml`),
  },
  { name: "Zed", aliases: [], href: `${repository}/zed`, mark: "Z" },
]

export function searchPlatforms(platforms: Platform[], query: string): Platform[] {
  const normalized = query.trim().toLocaleLowerCase()
  if (!normalized) return platforms
  return platforms.filter(({ name, aliases }) =>
    [name, ...aliases].some((term) => term.toLocaleLowerCase().includes(normalized))
  )
}
