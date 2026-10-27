import { motion } from "framer-motion"
import { useState } from "react"
import { RetroGrid } from "@/components/retro-grid"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Terminal, Code, Cpu, Activity, Zap, Github, Search } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { platforms, searchPlatforms } from "@/lib/platforms"
import { Input } from "@/components/ui/input"

export default function Home() {
  const { t } = useI18n()
  const [query, setQuery] = useState("")
  const visiblePlatforms = searchPlatforms(platforms, query)

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: t.syntaxHighlighting,
      desc: t.syntaxHighlightingDesc,
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t.darkThemes,
      desc: t.darkThemesDesc,
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: t.sevenVariants,
      desc: t.sevenVariantsDesc,
    },
  ]

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-clip transition-colors duration-700 relative">
      <RetroGrid />

      <ThemeSwitcher />

      <main className="container mx-auto px-4 pt-12 pb-12 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/80 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)] whitespace-pre-line"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mx-auto font-mono mb-10 whitespace-pre-line"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button asChild
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 shadow-[0_0_10px_hsl(var(--primary)/0.2)] font-mono h-14 px-8 backdrop-blur-sm gap-2"
            >
              <a href="https://github.com/stranger-theme/stranger-theme" target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" className="w-5 h-5" />
                {t.viewDocs}
              </a>
            </Button>
            <a
              href="#platforms"
              className="inline-flex h-14 items-center gap-2 rounded-md bg-primary px-8 font-mono font-bold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {t.installNow}
            </a>
            <a
              href="https://www.producthunt.com/products/stranger-theme?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-stranger-theme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                alt="Stranger Theme - Turn your coding environment upside down | Product Hunt"
                width="250"
                height="54"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1059824&theme=neutral&t=1767823358022"
              />
            </a>
          </motion.div>
        </section>

        {/* Supported IDEs Section */}
        <section id="platforms" className="mb-24 scroll-mt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              {t.supportedPlatforms}
            </h2>
            <p className="text-muted-foreground font-mono text-sm">{t.oneThemeAllPlatforms}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-6 relative">
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            />
            <Input
              aria-label={t.searchPlatforms}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlatforms}
              className="pl-10 bg-card/70 border-border font-mono"
            />
          </div>
          {visiblePlatforms.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {visiblePlatforms.map((platform, i) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Card className="bg-card/70 border-border group-hover:border-primary/50 transition-all duration-300 h-full backdrop-blur-sm group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-display font-bold text-lg shrink-0"
                      >
                        {platform.mark}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-foreground break-words leading-tight">
                          {platform.name}
                        </h3>
                        <span className="text-xs font-mono text-muted-foreground">
                          {t.installPlatform}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          ) : (
            <p role="status" className="text-center text-muted-foreground font-mono text-sm">
              {t.noPlatformsFound}
            </p>
          )}
        </section>

        {/* Editor Preview Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card border-border shadow-[0_0_50px_hsl(var(--primary)/0.15)] overflow-hidden backdrop-blur-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex text-xs text-muted-foreground font-mono bg-background/50 px-3 py-1 rounded-md border border-border/50">
                  <Terminal className="w-3 h-3 mr-2" />
                  ~/projects/upside-down/main.tsx
                </div>
              </div>
              <CardContent className="p-0 font-mono text-sm md:text-base overflow-x-auto">
                <div className="p-6 md:p-8 flex flex-col gap-1">
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      1
                    </span>
                    <span style={{ color: "hsl(var(--syntax-comment))" }}>
                      {"// Welcome to the Upside Down"}
                    </span>
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      2
                    </span>
                    <span style={{ color: "hsl(var(--syntax-keyword))" }}>import</span> {"{"}{" "}
                    <span style={{ color: "hsl(var(--syntax-variable))" }}>Portal</span>,{" "}
                    <span style={{ color: "hsl(var(--syntax-variable))" }}>Dimension</span> {"}"}{" "}
                    <span style={{ color: "hsl(var(--syntax-keyword))" }}>from</span>{" "}
                    <span style={{ color: "hsl(var(--syntax-string))" }}>&apos;@hawkins/lab&apos;</span>;
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      3
                    </span>
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      4
                    </span>
                    <span style={{ color: "hsl(var(--syntax-keyword))" }}>class</span>{" "}
                    <span style={{ color: "hsl(var(--syntax-class))" }}>UpsideDown</span>{" "}
                    <span style={{ color: "hsl(var(--syntax-keyword))" }}>extends</span>{" "}
                    <span style={{ color: "hsl(var(--syntax-class))" }}>Dimension</span> {"{"}
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      5
                    </span>{" "}
                    <span style={{ color: "hsl(var(--syntax-variable))" }}>dangerLevel</span> ={" "}
                    <span style={{ color: "hsl(var(--syntax-number))" }}>11</span>;
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      6
                    </span>{" "}
                    <span style={{ color: "hsl(var(--syntax-variable))" }}>name</span> ={" "}
                    <span style={{ color: "hsl(var(--syntax-string))" }}>&quot;The Upside Down&quot;</span>;
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      7
                    </span>
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      8
                    </span>{" "}
                    <span style={{ color: "hsl(var(--syntax-function))" }}>openGate</span>(
                    <span style={{ color: "hsl(var(--syntax-param))" }}>location</span>) {"{"}
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      {" "}
                      9
                    </span>{" "}
                    <span style={{ color: "hsl(var(--syntax-keyword))" }}>return</span> &lt;
                    <span style={{ color: "hsl(var(--syntax-class))" }}>Portal</span>{" "}
                    <span style={{ color: "hsl(var(--syntax-function))" }}>to</span>=
                    <span style={{ color: "hsl(var(--syntax-class))" }}>{"{"}</span>
                    <span style={{ color: "hsl(var(--syntax-param))" }}>location</span>
                    <span style={{ color: "hsl(var(--syntax-class))" }}>{"}"}</span> /&gt;;
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      10
                    </span>{" "}
                    {"}"}
                  </code>
                  <code className="whitespace-pre">
                    <span className="text-muted-foreground select-none w-6 inline-block text-right mr-4">
                      11
                    </span>
                    {"}"}
                  </code>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors h-full backdrop-blur-sm group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-display tracking-wide">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center pb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-border w-12" />
            <Cpu className="text-muted-foreground w-6 h-6 animate-pulse" />
            <div className="h-px bg-border w-12" />
          </div>
          <p className="text-muted-foreground font-mono text-sm">{t.footer}</p>
        </footer>
      </main>
    </div>
  )
}
