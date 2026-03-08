export type ShowcaseItem = {
  title: string
  route: string
  description: string
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  { title: "Typography", route: "/showcase/typography", description: "Headings, body text, and UI type scale" },
  { title: "Colors", route: "/showcase/colors", description: "Semantic color tokens for light & dark" },
  { title: "Primitive Colors", route: "/showcase/primitive-colors", description: "Full primitive color palette" },
  { title: "Cards", route: "/showcase/card", description: "Versatile content containers" },
  { title: "Radius", route: "/showcase/radius", description: "Border radius tokens" },
  { title: "Shadows", route: "/showcase/shadows", description: "Elevation and shadow tokens" },
  { title: "Spacing", route: "/showcase/spacing", description: "Spacing scale for margins & padding" },
  { title: "Widths", route: "/showcase/widths", description: "Width constraint tokens" },
  { title: "Gradients", route: "/showcase/gradients", description: "System & decorative gradient tokens" },
  { title: "Containers", route: "/showcase/containers", description: "Layout container tokens" },
] as const
