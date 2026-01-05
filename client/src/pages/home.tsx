import { motion } from "framer-motion"
import { RetroGrid } from "@/components/retro-grid"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Terminal, Code, Cpu, Activity, Zap } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Home() {
  const { t } = useI18n()

  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: t.syntaxHighlighting,
      desc: t.syntaxHighlightingDesc,
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t.neonGlows,
      desc: t.neonGlowsDesc,
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: t.sevenVariants,
      desc: t.sevenVariantsDesc,
    },
  ]

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden transition-colors duration-700 relative">
      <RetroGrid />

      <ThemeSwitcher />

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)] whitespace-pre-line"
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
            className="flex justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 shadow-[0_0_10px_hsl(var(--primary)/0.2)] font-mono h-14 px-8 backdrop-blur-sm"
              onClick={() => window.open("https://github.com/stranger-theme/stranger-theme", "_blank")}
            >
              {t.viewDocs}
            </Button>
          </motion.div>
        </section>

        {/* Supported IDEs Section */}
        <section className="mb-24">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* VS Code - Available */}
            <motion.a
              href="https://marketplace.visualstudio.com/items?itemName=StrangerTheme.stranger-theme-vscode"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 h-full backdrop-blur-sm cursor-pointer group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#007ACC] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    VS
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground truncate">
                      Visual Studio Code
                    </h3>
                    <span className="text-xs font-mono text-green-500">{t.available}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.a>

            {/* JetBrains - Available */}
            <motion.a
              href="https://plugins.jetbrains.com/plugin/29608-stranger-theme"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 h-full backdrop-blur-sm cursor-pointer group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FE315D] to-[#F97A12] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    JB
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground truncate">
                      JetBrains IDEs
                    </h3>
                    <span className="text-xs font-mono text-green-500">{t.available}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.a>

            {/* Vim - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-card/50 border-border/50 h-full backdrop-blur-sm opacity-60">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#019833] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    Vi
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground/70 truncate">Vim</h3>
                    <span className="text-xs font-mono text-yellow-500">{t.comingSoon}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sublime - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-card/50 border-border/50 h-full backdrop-blur-sm opacity-60">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FF9800] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    ST
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground/70 truncate">
                      Sublime Text
                    </h3>
                    <span className="text-xs font-mono text-yellow-500">{t.comingSoon}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* iTerm2 - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-card/50 border-border/50 h-full backdrop-blur-sm opacity-60">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#000000] flex items-center justify-center text-green-400 font-bold text-xl shrink-0">
                    iT
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground/70 truncate">iTerm2</h3>
                    <span className="text-xs font-mono text-yellow-500">{t.comingSoon}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hyper - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-card/50 border-border/50 h-full backdrop-blur-sm opacity-60">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#50E3C2] to-[#7B61FF] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    Hy
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground/70 truncate">Hyper</h3>
                    <span className="text-xs font-mono text-yellow-500">{t.comingSoon}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Windows Terminal - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="bg-card/50 border-border/50 h-full backdrop-blur-sm opacity-60">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0078D4] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    WT
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground/70 truncate">
                      Windows Terminal
                    </h3>
                    <span className="text-xs font-mono text-yellow-500">{t.comingSoon}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Alacritty - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="bg-card/50 border-border/50 h-full backdrop-blur-sm opacity-60">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F46D01] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    Al
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground/70 truncate">
                      Alacritty
                    </h3>
                    <span className="text-xs font-mono text-yellow-500">{t.comingSoon}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
                    <span style={{ color: "hsl(var(--syntax-string))" }}>'@hawkins/lab'</span>;
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
                    <span style={{ color: "hsl(var(--syntax-string))" }}>"The Upside Down"</span>;
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
