import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Heart, CreditCard, QrCode } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const DONATION_LINKS = {
  international: "https://donate.stripe.com/eVq4gz2mE1CqcXy0V6bo400",
  ptCard: "https://donate.stripe.com/8x228r7GY2GubTu1Zabo401",
  ptPix: "https://cobranca.c6pix.com.br/01KE5KW190F4THPMTJH5TS7ZWP",
}

export function DonationModal() {
  const { t, language } = useI18n()
  const isPt = language === "pt"

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:text-primary shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
        >
          <Heart className="w-4 h-4 mr-2 animate-pulse" />
          <span className="hidden sm:inline font-mono uppercase text-xs">{t.supportCreator}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card/90 backdrop-blur-md border-primary/20 text-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
            {t.donateTitle}
          </DialogTitle>
          <DialogDescription className="text-center font-mono text-muted-foreground pt-2">
            {t.donateDesc}
          </DialogDescription>
        </DialogHeader>

        {isPt ? (
          <div className="flex flex-col sm:flex-row gap-3 justify-center py-4">
            <Button
              className="h-auto py-4 px-6 flex flex-col gap-2 bg-primary hover:bg-primary/90 text-primary-foreground group shadow-[0_0_20px_hsl(var(--primary)/0.4)] flex-1"
              onClick={() => window.open(DONATION_LINKS.ptCard, "_blank")}
            >
              <CreditCard className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-lg">Cartão</span>
            </Button>
            <Button
              className="h-auto py-4 px-6 flex flex-col gap-2 bg-primary hover:bg-primary/90 text-primary-foreground group shadow-[0_0_20px_hsl(var(--primary)/0.4)] flex-1"
              onClick={() => window.open(DONATION_LINKS.ptPix, "_blank")}
            >
              <QrCode className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-lg">PIX</span>
            </Button>
          </div>
        ) : (
          <div className="flex justify-center py-4">
            <Button
              className="h-auto py-4 px-8 flex flex-col gap-2 bg-primary hover:bg-primary/90 text-primary-foreground group shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              onClick={() => window.open(DONATION_LINKS.international, "_blank")}
            >
              <CreditCard className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-lg">{t.supportNow}</span>
            </Button>
          </div>
        )}

        <div className="text-center text-xs text-muted-foreground font-mono italic border-t border-border/50 pt-4 mt-2">
          "{t.thankYou}"
        </div>
      </DialogContent>
    </Dialog>
  )
}
