# Client Expansion Implementation Plan

**Goal:** Ship four client adapters and a usable installation catalog without changing existing themes.

**Architecture:** Existing shared palettes feed terminal adapters and a sibling Zed generator. The static React site renders a typed platform catalog linking to guides. Existing workflows build, validate and package the additions.

**Tech stack:** Node.js built-ins, React, TypeScript, Tailwind, existing Radix components, GitHub Actions.

## Tasks

- [x] Extend `stranger-theme/terminal/scripts/build.js` for Ghostty, Kitty and WezTerm; document exact local installation paths in `terminal/README.md`.
- [x] Add `stranger-theme/zed/scripts/build.js`, generated JSON, README and package metadata; register in root build scripts.
- [x] Add a Node assert-based validation script for six variants, ANSI color mappings and deterministic output; run it in CI.
- [x] Extend CI and release archives for all four clients. Repair JetBrains packaging, missing lockfile installation and publishing errors without exposing credentials.
- [x] Replace site platform cards with `client/src/lib/platforms.ts` and searchable catalog; add install anchor and translations.
- [x] Repair theme control labels, selection, persistence, focus and reduced-motion handling using existing components.
- [x] Run `npm run check`, `npm run build`, meaningful adapter checks and browser inspection; compare legacy output diff.
- [x] Review published VS Code, Open VSX, IntelliJ and Hyper channels and record evidence gaps.

## Ownership and models

GPT-6.1 Sol handles generator/schema work and distribution review. GPT-6 Luna handles the bounded site catalog and interaction updates with explicit requirements, followed by central review. The primary agent integrates workflows and verifies the result. No palette migration, new dependencies, backend or marketplace publication.

## Outcome (2026-10-27)

All tasks verified locally on branch `codex/client-expansion` in both repositories:

- `stranger-theme`: `npm run build` + `npm test` pass — six variants per new client, exact 16-color ANSI maps for Ghostty/Kitty/WezTerm, Zed family with editor/syntax/terminal/ANSI styles, deterministic output, legacy themes byte-identical (including the known legacy Tigers VS Code palette discrepancy, kept per scope). JetBrains scheme date stamps pinned so full builds are deterministic and leave the tree clean.
- Installable packages validated: VSIX (13 files, README asset URLs absolute, v1.0.2), JetBrains `buildPlugin verifyPlugin` zip contains the nested jar with all 12 theme files + plugin.xml 1.0.2, `actionlint` clean on all five workflows.
- Site: `check`, `lint`, `test`, `build` pass; catalog exposes 12 clients; search empty state verified in the browser for en/es/fr/pt; theme persistence, labeled controls, 44px targets, anchor offset and reduced motion verified in earlier browser runs (desktop + 320px mobile).
- Published channels checked: VS Code Marketplace 1.0.2 live, JetBrains Marketplace 1.0.2 live, Open VSX returns 404 (extension never published there — needs `OVSX_PAT` secret and a first publish), the six `hyper-stranger-theme-*` npm packages return 404 (need `NPM_TOKEN`; first tagged release publishes them).

Pending (account/credential actions outside this repo): add `OVSX_PAT` and `NPM_TOKEN` secrets, then tag the next release — the chained workflows handle the rest.
