export type ShowcaseCategory =
  | "screen"
  | "foundation"
  | "basic"
  | "form"
  | "navigation"
  | "data"
  | "finance"

export type ShowcaseItem = {
  title: string
  route: string
  description: string
  category: ShowcaseCategory
  previewImage?: string
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  // Screens
  {
    title: "Home Screen",
    route: "/screens/home",
    description: "Home screen with income and outcome trend cards, recent transactions, and bottom navigation",
    category: "screen",
    previewImage: "Homescreen.png",
  },
  {
    title: "Profile & Settings Screen",
    route: "/screens/profile_settings",
    description:
      "Profile and settings screen with header background image, user avatar, and grouped settings sections",
    category: "screen",
    previewImage: "Profile and Settings.png",
  },
  {
    title: "Goals Screen",
    route: "/screens/goals",
    description:
      "Full-screen goals dashboard with mini goal cards, all-goals list with progress, and bottom navigation",
    category: "screen",
    previewImage: "Goals screen.png",
  },
  {
    title: "Goals Details Screen",
    route: "/screens/goals_details",
    description:
      "Goal detail screen with header background image, avatar, goal stats, progress card, recap cards, and recent transactions list",
    category: "screen",
    previewImage: "Goals Details.png",
  },
  {
    title: "Analytics Overview",
    route: "/screens/analytics_overview",
    description:
      "Full-screen analytics dashboard with income/expense cards, 3-month bar chart, spending trend line chart, and tab navigation",
    category: "screen",
    previewImage: "AnalyticOverview.png",
  },
  {
    title: "Analytics Breakdown",
    route: "/screens/analytics_breakdown",
    description:
      "Full-screen expense breakdown with donut chart, category icons, and itemized list of spending by category",
    category: "screen",
    previewImage: "Analytic Breakdown screen.png",
  },
  {
    title: "Transaction History",
    route: "/screens/transaction_history",
    description:
      "Full-screen transaction history with search, filter chips, grouped day sections, and bottom navigation",
    category: "screen",
    previewImage: "Transaction History.png",
  },
  {
    title: "Add Transaction",
    route: "/screens/add_transaction",
    description:
      "Full-screen form to add an expense or income transaction with amount, note, date, and category selection",
    category: "screen",
    previewImage: "Add transaction.png",
  },
  // Foundation
  { title: "Typography", route: "/showcase/typography", description: "Headings, body text, and UI type scale", category: "foundation" },
  { title: "Colors", route: "/showcase/colors", description: "Semantic color tokens for light & dark", category: "foundation" },
  { title: "Primitive Colors", route: "/showcase/primitive-colors", description: "Full primitive color palette", category: "foundation" },
  { title: "Spacing", route: "/showcase/spacing", description: "Spacing scale for margins & padding", category: "foundation" },
  { title: "Shadows", route: "/showcase/shadows", description: "Elevation and shadow tokens", category: "foundation" },
  { title: "Radius", route: "/showcase/radius", description: "Border radius tokens", category: "foundation" },
  { title: "Gradients", route: "/showcase/gradients", description: "System & decorative gradient tokens", category: "foundation" },
  { title: "Containers", route: "/showcase/containers", description: "Layout container tokens", category: "foundation" },
  { title: "Widths", route: "/showcase/widths", description: "Width constraint tokens", category: "foundation" },
  // Basic Components
  {
    title: "Buttons",
    route: "/showcase/buttons",
    description: "Interactive controls with multiple variants and states",
    category: "basic",
    previewImage: "Buttons.png",
  },
  { title: "Avatar", route: "/showcase/avatar", description: "Image container with circle and square form variants", category: "basic", previewImage: "Avatar.png" },
  {
    title: "Avatar with Icon",
    route: "/showcase/avatar-with-icon",
    description:
      "Avatar with a camera action badge anchored to the bottom-right corner, used in profile photo upload flows",
    category: "basic",
    previewImage: "Avatar with Icon.png",
  },
  { title: "Chip", route: "/showcase/chip", description: "Tendancy indicator chip with positive/negative variants", category: "basic", previewImage: "chip.png" },
  { title: "Icon Frame", route: "/showcase/icon-frame", description: "Circular icon container with border", category: "basic", previewImage: "Icon Frame.png" },
  {
    title: "Media Slot",
    route: "/showcase/media-slot",
    description: "Scalable media container with image, letter, and icon variants",
    category: "basic",
    previewImage: "Media Slot.png",
  },
  {
    title: "Text Divider",
    route: "/showcase/text-divider",
    description: "Section header with text label, available as line divider or colored background variant",
    category: "basic",
    previewImage: "Text Divider.png",
  },
  {
    title: "Section Title",
    route: "/showcase/section-title",
    description: "Compact section header with standard or uppercase title and optional action link",
    category: "basic",
    previewImage: "Section title.png",
  },
  {
    title: "Tag",
    route: "/showcase/tag",
    description:
      "Compact label pill with 8 color variants (black, red, yellow, green, blue, purple, cyan, pink) and optional dismiss action",
    category: "basic",
    previewImage: "Tag.jpg",
  },
  // Forms & Inputs
  {
    title: "Amount Input",
    route: "/showcase/amount-input",
    description: "Large numeric input with display font, blinking cursor, and automatic thousand-separator formatting",
    category: "form",
    previewImage: "Amount input.jpg",
  },
  {
    title: "Transaction Text Input",
    route: "/showcase/transaction-text-input",
    description: "Inline text input for naming a transaction with placeholder, focussed, typing, and active states",
    category: "form",
    previewImage: "Transaction Text Input.jpg",
  },
  {
    title: "Search Field",
    route: "/showcase/search-field",
    description:
      "Search input with placeholder, focused, typing, and active states, plus optional Cancel button and clear action",
    category: "form",
    previewImage: "Search Field.jpg",
  },
  {
    title: "List Item",
    route: "/showcase/list-item",
    description: "Settings-style row with optional leading icon, label, help text, trailing value, and chevron",
    category: "form",
    previewImage: "List Item.png",
  },
  {
    title: "Card Menu Item",
    route: "/showcase/card-menu-item",
    description: "Category menu card with illustrative icon, label, and default/selected states",
    category: "form",
    previewImage: "Card Menu Item.png",
  },
  {
    title: "Filter Chip",
    route: "/showcase/filter-chip",
    description:
      "Compact interactive chip for filtering content, available in label and icon variants with selected/unselected states",
    category: "form",
    previewImage: "Filter Chip.jpg",
  },
  {
    title: "Tab Item",
    route: "/showcase/tab-item",
    description:
      "Selectable tab with box (pill) and line (underline) type variants across default, selected, and disabled states",
    category: "form",
    previewImage: "Tab Item.jpg",
  },
  {
    title: "Tab Bar",
    route: "/showcase/tab-bar",
    description:
      "Horizontal tab container with box (segmented control) and line (underline) type variants supporting 2–4 tabs",
    category: "form",
    previewImage: "Tab Bar.jpg",
  },
  {
    title: "Setting Single",
    route: "/showcase/setting-single",
    description:
      "Settings row with a branded icon badge, label, and trailing navigation chevron or activation toggle",
    category: "form",
    previewImage: "Setting Single.png",
  },
  // Navigation
  {
    title: "Bottom Nav Bar",
    route: "/showcase/bottom-nav-bar",
    description:
      "Pill-shaped bottom navigation with gradient icons, active/inactive tab states, and add-transaction button",
    category: "navigation",
    previewImage: "BottomNavBar.png",
  },
  {
    title: "Navigation Bar",
    route: "/showcase/navigation-bar",
    description: "Top navigation bar with back button, center content, and optional right action across five variants",
    category: "navigation",
    previewImage: "NavigationBar.jpg",
  },
  {
    title: "Home Indicator Bar",
    route: "/showcase/home-indicator-bar",
    description:
      "Bottom bar with iOS home indicator pill and optional button layouts: single, horizontal pair, vertical pair, three buttons, or action sheet",
    category: "navigation",
    previewImage: "HomeIndicatorBar.png",
  },
  // Data Display
  {
    title: "Balance Card",
    route: "/showcase/balance-card",
    description: "Balance display with gradient text and visibility toggle",
    category: "data",
    previewImage: "BalanceCard.png",
  },
  {
    title: "Activity Item",
    route: "/showcase/activity-item",
    description: "Transaction activity row with avatar, label, and trailing amount or action button",
    category: "data",
    previewImage: "ActivityItem.png",
  },
  {
    title: "Billing Item",
    route: "/showcase/billing-item",
    description: "Compact billing card with service icon, invoice label, price, and remaining time",
    category: "data",
    previewImage: "BillingItem.png",
  },
  {
    title: "Recap Card",
    route: "/showcase/recap-card",
    description: "Compact stat card showing a label and a value, with default, success, and critical status variants",
    category: "data",
    previewImage: "Recap Card New.png",
  },
  {
    title: "Income & Outcome Trend Card",
    route: "/showcase/income-outcome-trend-card",
    description: "Compact summary card with title, amount, and tendancy chip",
    category: "data",
    previewImage: "Income Outcome Trend Card.png",
  },
  {
    title: "Income & Expense Card",
    route: "/showcase/income-expense-card",
    description:
      "Compact summary card showing income or expense totals with illustrative icon, amount, and menu action",
    category: "data",
    previewImage: "Income Expense Card.jpg",
  },
  {
    title: "Tooltip",
    route: "/showcase/tooltip",
    description:
      "Dark tooltip bubble with directional arrow, supporting top-center, bottom-center, left, and right placements",
    category: "data",
    previewImage: "Tooltip.jpg",
  },
  {
    title: "Indicator Dots",
    route: "/showcase/indicator-dots",
    description:
      "Dot-based position indicator for carousels and pagers, with an active dot showing a halo ring and inactive dots as smaller dimmed circles",
    category: "data",
  },
  // Finance Specific
  {
    title: "Card Element",
    route: "/showcase/card-element",
    description: "Payment card with gradient background, balance, chip icons, masked number, and expiry date",
    previewImage: "Card.png",
    category: "finance",
  },
  {
    title: "Card Type Icon",
    route: "/showcase/icon-card-type",
    description: "Card network brand icons (Visa, Mastercard, AMEX) with sm, md, and lg size variants",
    category: "finance",
    previewImage: "Card Type Icon.png",
  },
  {
    title: "Payment Method Icon",
    route: "/showcase/icon-payment-method",
    description: "Branded payment method icons with sm, md, and lg size variants",
    category: "finance",
    previewImage: "Payment method icon.png",
  },
  {
    title: "Goals Card Default",
    route: "/showcase/goals-card-default",
    description:
      "Full savings goal card with category, illustration, time remaining, progress bar with controller dot, amounts, and motivational message",
    category: "finance",
    previewImage: "Version=Default.png",
  },
  {
    title: "Goals Card Minimize",
    route: "/showcase/goals-card-minimize",
    description: "Compact savings goal card showing title, current/target amounts, progress bar, and time remaining",
    category: "finance",
    previewImage: "Version=Minimize.png",
  },
  {
    title: "Goals Card Details",
    route: "/showcase/goals-card-details",
    description:
      "Detailed savings goal card with target illustration, saved amount, remaining amount, progress bar, actual saving vs target, time remaining, and end date",
    category: "finance",
    previewImage: "Version=Detailed.png",
  },
  {
    title: "Progress Bar with Controller",
    route: "/showcase/progress-bar-with-controller",
    description:
      "A progress bar with a controller dot indicator, showing fill progress from 0% to 100% with a green dot at the current position",
    category: "finance",
    previewImage: "ProgressBarWithController.png",
  },
  {
    title: "Category Icon",
    route: "/showcase/category-icon",
    description:
      "Circular 32px container with white background and subtle border for displaying illustrative category icons",
    category: "finance",
    previewImage: "Category Icon.png",
  },
  {
    title: "Category Breakdown Item",
    route: "/showcase/category-breakdown-item",
    description:
      "List row showing a category icon, percentage share, category name, and amount — used in expense breakdown views",
    category: "finance",
    previewImage: "Category Breakdown Item.jpg",
  },
  {
    title: "Expense Chart",
    route: "/showcase/expense-chart",
    description:
      "Donut chart showing expense breakdown by category with gradient arcs, indicator lines, and illustrative category icons",
    category: "finance",
    previewImage: "Expense Chart.jpg",
  },
  {
    title: "Spending Chart",
    route: "/showcase/spending-chart",
    description:
      "Line chart showing spending over time with dashed grid lines, Y-axis value labels, interactive SVG polyline, tooltip, and indicator dot",
    category: "finance",
    previewImage: "SpendingChart.jpg",
  },
  {
    title: "Income & Expense Chart",
    route: "/showcase/income-expense-chart",
    description:
      "Bar chart comparing income and expense values over time with Y-axis grid lines, date labels, and a color-coded legend",
    category: "finance",
    previewImage: "IncomeExpenseChart.jpg",
  },
] as const
