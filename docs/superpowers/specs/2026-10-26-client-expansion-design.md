# Client expansion and installation experience

Approved in chat on 2026-10-26: Ghostty, Kitty, WezTerm and Zed, six existing variants, installation guides, distribution checks, searchable site catalog and accessibility improvements while retaining the neon identity.

## Scope

Reuse `stranger-theme/shared/palettes.js` unchanged for new clients. Extend the terminal generator for Ghostty, Kitty and WezTerm. Add a sibling Zed generator emitting a theme family JSON with six variants. Preserve all existing generated themes, including the legacy VS Code Tigers palette discrepancy.

The website keeps its typography, colors and code preview. Replace repeated unavailable platform cards with one typed catalog, search and direct installation guide links. Add a primary install anchor. Label theme controls on mobile, expose selection state and keyboard focus, preserve preference across navigation and respect reduced motion. Correct unsupported glow claims.

## Distribution

Build and validate every new variant, create individual release archives with installation instructions, and include them in CI artifacts. Repair existing false-success publishing and JetBrains installation packaging. Review VS Code Marketplace, Open VSX, IntelliJ Marketplace and npm/Hyper delivery separately from local generation. Do not publish or mutate account settings during verification.

## Acceptance

- Existing palettes and outputs are unchanged after generation.
- New terminal files preserve background, foreground, selection and all 16 derived ANSI colors.
- Zed output has six dark themes with editor, syntax and terminal mappings.
- Site catalog exposes all 12 clients and search has a clear empty state in all four languages.
- Site passes type checking and production build; inspect desktop/mobile and reduced-motion behavior in a browser.
- Record unavailable native client and marketplace verification explicitly.

## Alternatives considered

1. Recommended: extend existing generators and catalog, with individual downloadable archives.
2. Separate repositories/packages for every client: more release and version maintenance without a current need.
3. Website-only links: smaller, but does not implement the requested clients.
