import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { copyWithToast } from "@/lib/utils"

export function InstallCommand({ command, name }: { command: string; name: string }) {
  const { t } = useI18n()
  return (
    <div className="relative z-10 flex items-stretch gap-2">
      <code className="flex-1 min-w-0 overflow-x-auto whitespace-nowrap rounded-md border border-border bg-background/60 px-2 py-1.5 font-mono text-xs text-foreground">
        {command}
      </code>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => copyWithToast(command, t.installCommandCopied, t.copyFailed)}
        aria-label={`${t.copyInstallCommand}: ${name}`}
        className="h-auto shrink-0 gap-1 border-primary/50 px-2 font-mono text-xs text-primary hover:bg-primary/10"
      >
        <Copy aria-hidden="true" className="w-3 h-3" />
        {t.copy}
      </Button>
    </div>
  )
}
