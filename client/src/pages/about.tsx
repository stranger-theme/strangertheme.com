import { motion } from "framer-motion"
import { RetroGrid } from "@/components/retro-grid"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Link } from "wouter"

export default function About() {
  const { t } = useI18n()

  const paragraphs = t.aboutStory.split("\n\n")

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden transition-colors duration-700 relative">
      <RetroGrid />

      <ThemeSwitcher />

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-primary"
              data-testid="button-back-home"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backHome}
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
              {t.aboutTitle}
            </h1>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-card/80 border-border backdrop-blur-sm shadow-[0_0_50px_hsl(var(--primary)/0.1)]">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-lg md:text-xl text-foreground/90 font-mono leading-relaxed"
                    data-testid={`text-story-paragraph-${index}`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-12 pt-8 border-t border-border/50 text-center"
              >
                <p className="text-muted-foreground font-mono text-sm italic">
                  "Friends don't lie." — Eleven
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
