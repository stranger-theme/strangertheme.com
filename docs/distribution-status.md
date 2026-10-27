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
- Both branches were pushed. [Theme PR #2](https://github.com/stranger-theme/stranger-theme/pull/2) passed CI and was merged as `096373f`; [website PR #1](https://github.com/stranger-theme/strangertheme.com/pull/1) passed website CI and Vercel preview checks.
- Version 1.0.3 is synchronized across package metadata, generated Hyper packages and JetBrains XML. [GitHub release 1.0.3](https://github.com/stranger-theme/stranger-theme/releases/tag/v1.0.3) is published with twelve assets. Downloaded Ghostty, Kitty, WezTerm and Zed archives match the tested source byte for byte; the downloaded VSIX contains six unchanged themes and the installable JetBrains ZIP contains its nested plugin JAR and twelve theme/scheme files.
- The [release workflow](https://github.com/stranger-theme/stranger-theme/actions/runs/40509829058) created the release and successfully submitted JetBrains 1.0.3. VS Code publication failed because its PAT expired, npm publication failed with the rejected credentials, and Open VSX was skipped because its secret is absent. The aggregate workflow status is therefore failure, despite successful GitHub and JetBrains delivery. Submission does not prove Marketplace approval or public availability.
- [Read-only credential diagnostics](https://github.com/stranger-theme/stranger-theme/actions/runs/40509481006) confirmed an expired `VSCE_PAT` and HTTP 401 for `NPM_TOKEN`. `OVSX_PAT` is absent. The presence of a secret name did not prove it was usable.
- Live HTTP headers and GitHub deployment statuses confirmed that production is on Vercel. The existing Vercel Git integration creates previews. Historical Cloudflare secrets are retained without enabling a second deployment path.
- Direct production navigation to `/about` returned HTTP 404 before the update. The website PR includes Vercel's SPA rewrite to serve the client router on direct navigation and reload.
- Previous direct registry checks returned 404 for the expected Open VSX extension and six Hyper packages. Those earlier results do not prove the current tokens are missing or invalid.

## Remaining work, in order

1. Merge the verified website PR now that release assets exist, then check the Vercel production deployment, client links and direct `/about` route.
2. Renew `VSCE_PAT` and `NPM_TOKEN`, add `OVSX_PAT`, rerun credential diagnostics, and publish the channels requiring those credentials. Check publisher ownership and token permissions without exposing values in logs.
3. Check public JetBrains approval and availability independently of the successful submission.
4. Install the generated themes in the four native clients and check appearance, syntax and selection rendering. No Ghostty, Kitty, WezTerm or Zed app is installed on this machine. Schema and color assertions do not replace this check.

Open VSX is skipped with a visible workflow warning when its secret is absent. Actual publication errors on configured registries still fail their jobs. A successful local build or authenticated username does not prove publication rights or marketplace availability.
