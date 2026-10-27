# Distribution status

Verified on 2026-10-27 against local files, the Hermes export and read-only GitHub API queries. The export is historical evidence, not authorization to publish.

## Implemented

- Theme commit `8881983`: Ghostty, Kitty and WezTerm each have six generated variants; Zed has one JSON family containing six themes. Installation guides, assertions, CI and release archives are included.
- Website commit `98284e3`: twelve-client catalog, search aliases, four languages, install anchor, saved preferences, accessible controls and reduced motion.
- Distribution repairs: installable JetBrains ZIP, public channel mapping, explicit publishing failures, reusable publication workflows and one validated VSIX for both registries.
- JetBrains generation uses the existing fixed scheme metadata date and leaves tracked outputs unchanged after a full build.
- Follow-up: added website CI and corrected documentation that claimed an absent Cloudflare workflow existed.

## Evidence refreshed

- Theme build and assertions passed; full generation left the tracked tree unchanged.
- Website TypeScript, lint, catalog assertions and production build passed. The existing 538 kB JavaScript bundle warning remains.
- Existing JetBrains ZIP contains the nested plugin JAR, `META-INF/plugin.xml` and twelve theme/scheme files. Hermes recorded `buildPlugin verifyPlugin` passing; this follow-up inspected the resulting archive.
- No remote `codex/client-expansion` branches or matching pull requests were found in either repository.
- Latest GitHub release is `v1.0.2`, published on 2026-01-04. Its asset list does not contain the four new client archives.
- Theme repository secret names include `NPM_TOKEN`, `VSCE_PAT`, and `JETBRAINS_MARKETPLACE_TOKEN`; `OVSX_PAT` is absent. Token validity and account permissions remain unverified.
- Website repository has `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` secret names, no repository variables and no remote Actions workflows. This does not establish whether Cloudflare has a separate Git integration.
- Previous direct registry checks returned 404 for the expected Open VSX extension and six Hyper packages. Those earlier results do not prove the current tokens are missing or invalid.

## Remaining work, in order

1. Push the branches and open pull requests; run the repository checks remotely.
2. Add `OVSX_PAT` and verify publisher ownership and token permissions for each registry. Do not expose token values in logs.
3. Select a release version and update package versions together, including generated Hyper package metadata. The current root, VS Code, JetBrains and Hyper packages are 1.0.2; a `v1.0.3` tag without a version update fails the release gate.
4. Install the generated themes in the four native clients and check appearance, syntax and selection rendering. Schema and color assertions do not replace this check.
5. Confirm the Cloudflare Pages project, production branch, domain and existing Git integration before enabling or changing deployment. Ship theme guides and artifacts before the website links to their new paths.
6. Publish the approved release and verify each registry version, asset download and installation path. A successful local build does not prove publication.

No release tag, registry publication, secret update or production deployment was performed during this follow-up.
