export type Platform = {
  name: string
  aliases: string[]
  href: string
  mark: string
}

const repository = "https://github.com/stranger-theme/stranger-theme/tree/main"

export const platforms: Platform[] = [
  {
    name: "Visual Studio Code",
    aliases: ["vscode", "vs code"],
    href: "https://marketplace.visualstudio.com/items?itemName=StrangerTheme.stranger-theme-vscode",
    mark: "VS",
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
  { name: "Alacritty", aliases: [], href: `${repository}/terminal#alacritty`, mark: "A" },
  { name: "iTerm2", aliases: ["iterm"], href: `${repository}/terminal#iterm2`, mark: "iT" },
  {
    name: "Windows Terminal",
    aliases: ["windows"],
    href: `${repository}/terminal#windows-terminal`,
    mark: "WT",
  },
  { name: "Hyper", aliases: [], href: `${repository}/hyper`, mark: "Hy" },
  { name: "Ghostty", aliases: [], href: `${repository}/terminal#ghostty`, mark: "G" },
  { name: "Kitty", aliases: [], href: `${repository}/terminal#kitty`, mark: "K" },
  { name: "WezTerm", aliases: ["wezterm"], href: `${repository}/terminal#wezterm`, mark: "W" },
  { name: "Zed", aliases: [], href: `${repository}/zed`, mark: "Z" },
]

export function searchPlatforms(platforms: Platform[], query: string): Platform[] {
  const normalized = query.trim().toLocaleLowerCase()
  if (!normalized) return platforms
  return platforms.filter(({ name, aliases }) =>
    [name, ...aliases].some((term) => term.toLocaleLowerCase().includes(normalized))
  )
}
