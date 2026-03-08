export type ShowcaseItem = {
  title: string
  route: string
  description: string
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    title: "Billing Item",
    route: "/showcase/billing-item",
    description: "Compact billing card with service icon, invoice label, price, and remaining time",
  },
  { title: "Avatar", route: "/showcase/avatar", description: "Image container with circle and square form variants" },
  {
    title: "Media Slot",
    route: "/showcase/media-slot",
    description: "Scalable media container with image, letter, and icon variants",
  },
  {
    title: "Recap Card",
    route: "/showcase/recap-card",
    description: "Compact summary card with title, amount, and tendancy chip",
  },
  {
    title: "Buttons",
    route: "/showcase/buttons",
    description: "Interactive controls with multiple variants and states",
  },
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
  { title: "Icon Frame", route: "/showcase/icon-frame", description: "Circular icon container with border" },
  {
    title: "Balance Card",
    route: "/showcase/balance-card",
    description: "Balance display with gradient text and visibility toggle",
  },
  { title: "Chip", route: "/showcase/chip", description: "Tendancy indicator chip with positive/negative variants" },
] as const
