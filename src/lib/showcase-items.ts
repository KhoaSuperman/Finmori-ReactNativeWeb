export type ShowcaseItem = {
  title: string
  route: string
  description: string
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    title: "Transaction Text Input",
    route: "/showcase/transaction-text-input",
    description: "Inline text input for naming a transaction with placeholder, focussed, typing, and active states",
  },
  {
    title: "Amount Input",
    route: "/showcase/amount-input",
    description: "Large numeric input with display font, blinking cursor, and automatic thousand-separator formatting",
  },
  {
    title: "Tab Bar",
    route: "/showcase/tab-bar",
    description: "Horizontal tab container with box (segmented control) and line (underline) type variants supporting 2–4 tabs",
  },
  {
    title: "Tab Item",
    route: "/showcase/tab-item",
    description: "Selectable tab with box (pill) and line (underline) type variants across default, selected, and disabled states",
  },
  {
    title: "Navigation Bar",
    route: "/showcase/navigation-bar",
    description: "Top navigation bar with back button, center content, and optional right action across five variants",
  },
  {
    title: "Activity Item",
    route: "/showcase/activity-item",
    description: "Transaction activity row with avatar, label, and trailing amount or action button",
  },
  {
    title: "Section Title",
    route: "/showcase/section-title",
    description: "Compact section header with standard or uppercase title and optional action link",
  },
  {
    title: "Text Divider",
    route: "/showcase/text-divider",
    description: "Section header with text label, available as line divider or colored background variant",
  },
  {
    title: "Bottom Nav Bar",
    route: "/showcase/bottom-nav-bar",
    description: "Pill-shaped bottom navigation with gradient icons, active/inactive tab states, and add-transaction button",
  },
  {
    title: "Card Element",
    route: "/showcase/card-element",
    description: "Payment card with gradient background, balance, chip icons, masked number, and expiry date",
  },
  {
    title: "Card Type Icon",
    route: "/showcase/icon-card-type",
    description: "Card network brand icons (Visa, Mastercard, AMEX) with sm, md, and lg size variants",
  },
  {
    title: "Payment Method Icon",
    route: "/showcase/icon-payment-method",
    description: "Branded payment method icons with sm, md, and lg size variants",
  },
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
