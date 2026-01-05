export interface Theme {
  id: string
  name: string
  colors: {
    background: string
    foreground: string
    primary: string
    comment: string
    keywords: string
    strings: string
    functions: string
    classes: string
    variables: string
    numbers: string
    tags: string
  }
}

export const themes: Theme[] = [
  {
    id: "upside-down",
    name: "Upside Down",
    colors: {
      background: "#0D1117",
      foreground: "#F8F8F2",
      primary: "#C678DD",
      comment: "#5C6370",
      keywords: "#C678DD",
      strings: "#E5C07B",
      functions: "#98C379",
      classes: "#56B6C2",
      variables: "#F8F8F2",
      numbers: "#D19A66",
      tags: "#C678DD",
    },
  },
  {
    id: "starcourt",
    name: "Starcourt Mall",
    colors: {
      background: "#1A1A2E",
      foreground: "#EAEAEA",
      primary: "#FF1493",
      comment: "#6B5B95",
      keywords: "#FF1493",
      strings: "#FFD700",
      functions: "#00FA9A",
      classes: "#00CED1",
      variables: "#EAEAEA",
      numbers: "#FFB347",
      tags: "#FF1493",
    },
  },
  {
    id: "hawkins",
    name: "Hawkins",
    colors: {
      background: "#2C2218",
      foreground: "#E8DCC8",
      primary: "#D4A574",
      comment: "#6B5B45",
      keywords: "#D4A574",
      strings: "#EBCB8B",
      functions: "#A3BE8C",
      classes: "#88C0D0",
      variables: "#E8DCC8",
      numbers: "#D08770",
      tags: "#D4A574",
    },
  },
  {
    id: "the-lab",
    name: "The Lab",
    colors: {
      background: "#1A1D26",
      foreground: "#E0E5EC",
      primary: "#7FDBFF",
      comment: "#5D6D7E",
      keywords: "#7FDBFF",
      strings: "#FFDC00",
      functions: "#2ECC40",
      classes: "#39CCCC",
      variables: "#E0E5EC",
      numbers: "#FF851B",
      tags: "#7FDBFF",
    },
  },
  {
    id: "tigers",
    name: "Tigers",
    colors: {
      background: "#1A1A1A",
      foreground: "#F5F5F5",
      primary: "#FF7F2A",
      comment: "#5C5C5C",
      keywords: "#FF7F2A",
      strings: "#F0C674",
      functions: "#B5BD68",
      classes: "#81A2BE",
      variables: "#F5F5F5",
      numbers: "#DE935F",
      tags: "#FF7F2A",
    },
  },
  {
    id: "dimensionx",
    name: "Dimension X",
    colors: {
      background: "#1E1A1A",
      foreground: "#E8D5D5",
      primary: "#E06C75",
      comment: "#5C4A4A",
      keywords: "#E06C75",
      strings: "#BCA89F",
      functions: "#8B7355",
      classes: "#D19A66",
      variables: "#E8D5D5",
      numbers: "#FF6B6B",
      tags: "#E06C75",
    },
  },
]
