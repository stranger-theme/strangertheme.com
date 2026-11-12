import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import type { Theme } from "@/lib/themes"

type Role = keyof Theme["colors"] | "ok" | "error"
type Line = [Role, string][]

const k = (text: string): [Role, string] => ["keywords", text]
const _ = (text: string): [Role, string] => ["foreground", text]

// Hand-tokenised so the preview needs no highlighter; roles follow docs/SPEC.md.
const code: Line[] = [
  [["comment", "// Close the gate before anything gets through"]],
  [k("import"), _(" { "), ["classes", "Portal"], _(" } "), k("from"), _(" "), ["strings", '"@hawkins/lab"']],
  [],
  [k("const"), _(" MAX_DEPTH = "), ["numbers", "11"]],
  [k("const"), _(" sealed = "), ["numbers", "true"]],
  [],
  [k("export class"), _(" "), ["classes", "UpsideDown"], _(" "), k("extends"), _(" "), ["classes", "Dimension"], _(" {")],
  [_("  "), k("private readonly"), _(" name = "), ["strings", '"The Upside Down"']],
  [],
  [_("  "), ["functions", "openGate"], _("("), ["parameters", "location"], _(": "), ["classes", "string"], _(", "), ["parameters", "depth"], _(" = "), ["numbers", "3"], _("): "), ["classes", "Portal"], _(" {")],
  [_("    "), k("if"), _(" ("), ["parameters", "depth"], _(" > MAX_DEPTH) "), k("throw new"), _(" "), ["classes", "Error"], _("("), ["strings", '"Too deep"'], _(")")],
  [_("    "), k("return new"), _(" "), ["classes", "Portal"], _("("), ["parameters", "location"], _(", { "), ["parameters", "depth"], _(", sealed })")],
  [_("  }")],
  [_("}")],
]

const terminal: Line[] = [
  [["ok", "❯"], _(" npm test")],
  [["ok", "✓ 11 gates sealed"]],
  [["error", "✗ 1 gate left open in Hawkins Lab"]],
]

export function CodePreview({ theme }: { theme: Theme }) {
  const { t } = useI18n()
  const { colors, palette } = theme
  const color = (role: Role) =>
    role === "ok" ? palette.ansi.GREEN : role === "error" ? palette.ansi.RED : colors[role]
  const render = (lines: Line[]) =>
    lines.map((line, i) => (
      <span key={i} className="block min-h-[1.5em]">
        {line.map(([role, text], j) => (
          <span key={j} style={{ color: color(role) }} className="transition-colors duration-300">
            {text}
          </span>
        ))}
      </span>
    ))

  return (
    <figure aria-label={t.codePreview} className="max-w-4xl mx-auto">
      <Card
        className="overflow-hidden border-border shadow-[0_0_50px_hsl(var(--primary)/0.15)] transition-colors duration-300"
        style={{ backgroundColor: colors.background }}
      >
        <figcaption
          className="flex items-center gap-2 px-4 py-2 border-b font-mono text-xs"
          style={{ color: colors.comment, borderColor: palette.base.SELECTION }}
        >
          <span aria-hidden="true" className="flex gap-1.5">
            {[palette.base.RED, palette.base.YELLOW, palette.base.GREEN].map((dot) => (
              <span key={dot} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dot }} />
            ))}
          </span>
          <span className="ml-2">{theme.name}</span>
        </figcaption>
        <pre className="overflow-x-auto p-4 md:p-6 font-mono text-xs sm:text-sm leading-6 text-left">
          <code>{render(code)}</code>
        </pre>
        <pre
          className="overflow-x-auto px-4 md:px-6 py-3 border-t font-mono text-xs sm:text-sm leading-6 text-left"
          style={{ borderColor: palette.base.SELECTION }}
        >
          <code>{render(terminal)}</code>
        </pre>
      </Card>
    </figure>
  )
}
