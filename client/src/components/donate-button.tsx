import { forwardRef, type ComponentProps } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

/** Eager so the header keeps its layout while the donation dialog loads. */
export const DonateButton = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>((props, ref) => {
  const { t } = useI18n()
  return (
    <Button
      ref={ref}
      variant="outline"
      size="sm"
      className="bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:text-primary shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
      {...props}
    >
      <Heart className="w-4 h-4 mr-2 animate-pulse" />
      <span className="hidden sm:inline font-mono uppercase text-xs">{t.supportCreator}</span>
    </Button>
  )
})
DonateButton.displayName = "DonateButton"
