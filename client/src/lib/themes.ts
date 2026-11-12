import palettes from "@/data/palettes.json"

export type Palette = (typeof palettes)[keyof typeof palettes]
export type Slot = keyof Palette["base"]

/** Site labels that differ from the palette's displayName. */
const siteNames: Partial<Record<string, string>> = { starcourt: "Starcourt Mall" }

/** Every colour comes from palettes.json; the roles follow docs/SPEC.md in the theme repo. */
export const themes = Object.values(palettes).map((palette) => {
  const { BG, FG, COMMENT, CYAN, GREEN, ORANGE, PINK, PURPLE, YELLOW } = palette.base
  return {
    id: palette.id,
    name: siteNames[palette.id] ?? palette.displayName,
    palette,
    colors: {
      background: BG,
      foreground: FG,
      primary: PINK,
      comment: COMMENT,
      keywords: PINK,
      strings: YELLOW,
      functions: GREEN,
      classes: CYAN,
      variables: FG,
      numbers: PURPLE,
      parameters: ORANGE,
      tags: PINK,
    },
  }
})

export type Theme = (typeof themes)[number]
