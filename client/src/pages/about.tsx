import { Background } from "@/components/background"
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
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-clip transition-colors duration-700 relative">
      <Background />

      <ThemeSwitcher />

      <main className="container mx-auto px-4 pt-12 pb-12 relative z-10 max-w-4xl">
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-600 fill-mode-both">
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
        </div>

        <div className="animate-in fade-in zoom-in-95 duration-800 delay-200 fill-mode-both text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
              {t.aboutTitle}
            </h1>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-800 delay-400 fill-mode-both">
          <Card className="bg-card/80 border-border backdrop-blur-sm shadow-[0_0_50px_hsl(var(--primary)/0.1)]">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                    className="animate-in fade-in slide-in-from-bottom-5 duration-500 fill-mode-both text-lg md:text-xl text-foreground/90 font-mono leading-relaxed"
                    data-testid={`text-story-paragraph-${index}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="animate-in fade-in duration-500 delay-1000 fill-mode-both mt-12 pt-8 border-t border-border/50 text-center"
              >
                <p className="text-muted-foreground font-mono text-sm italic">
                  &quot;Friends don&apos;t lie.&quot;: Eleven
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
