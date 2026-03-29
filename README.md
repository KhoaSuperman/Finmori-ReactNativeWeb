# Finmori — React Native Web Design System

A **mobile-first fintech design system** built with React Native for Web, featuring a full component library, screen templates, and interactive Storybook showcase.

> Built with Expo SDK 55, NativeWind v4, and Storybook 10.

---

## Preview

The app includes a landing page that showcases all screens and UI kit components. You can explore it live or run it locally.

---

## Tech Stack

| Technology       | Version | Purpose                       |
| ---------------- | ------- | ----------------------------- |
| Expo SDK         | ~55     | Framework & tooling           |
| React Native     | 0.83    | Core UI framework             |
| React Native Web | ~0.21   | Web rendering                 |
| React            | 19.2    | UI library                    |
| NativeWind       | ^4.2    | TailwindCSS for React Native  |
| TailwindCSS      | ^3.4    | Utility-first CSS             |
| Storybook        | ^10     | Component development & docs  |
| TypeScript       | ~5.9    | Type safety                   |
| Expo Router      | ~55     | File-based routing            |
| Vite             | ^7      | Storybook build tool          |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install

```bash
npm install
```

### Run the Web App

```bash
npm run web
```

Opens at `http://localhost:8081`.

### Run Storybook

```bash
npm run storybook
```

Opens at `http://localhost:6006` with a mobile viewport by default.

### Build for Production

```bash
npm run build:web           # Build the web app (outputs to /dist)
npm run build-storybook     # Build static Storybook
```

---

## Project Structure

```
├── .storybook/              # Storybook configuration
│   ├── main.ts              # Framework & story discovery
│   └── preview.ts           # Global decorators & viewport
├── assets/                  # Static assets (images, fonts)
├── scripts/                 # Utility scripts
├── src/
│   ├── app/                 # Expo Router pages (file-based routing)
│   │   ├── (tabs)/          # Tab navigator root (landing page)
│   │   ├── screens/         # Full-screen app templates
│   │   └── showcase/        # Component showcase routes
│   ├── components/
│   │   ├── ui-kit/          # Design system components + stories
│   │   ├── icons/           # React Native SVG icon components
│   │   ├── landing/         # Landing page section components
│   │   └── ...              # App-level components
│   ├── constants/           # Theme constants (colors, fonts)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities (cn, showcase registry, etc.)
│   └── global.css           # Tailwind directives & CSS variables
├── tailwind.config.js       # Tailwind + NativeWind config (design tokens)
├── babel.config.js          # Babel with NativeWind preset
├── metro.config.js          # Metro bundler config
└── app.json                 # Expo app configuration
```

---

## UI Kit Components

All design system components live in `src/components/ui-kit/`. Each component has a colocated `.stories.tsx` file for Storybook.

| Component                  | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| `Button`                   | Primary, secondary, outline, ghost, danger — sm/md/lg    |
| `Typography`               | Heading, body, caption variants with semantic tokens     |
| `Avatar` / `AvatarWithIcon`| Image or initials-based avatar with icon overlay        |
| `Badge` / `Tag`            | Status indicators and category tags                      |
| `Card`                     | Container with elevated, outlined, filled variants       |
| `Chip` / `FilterChip`      | Selectable chips and filter controls                     |
| `BalanceCard`              | Financial balance display card                           |
| `ActivityItem`             | Transaction/activity list row                            |
| `BottomNavBar`             | Mobile bottom navigation bar                             |
| `NavigationBar`            | Top navigation bar with back/action support              |
| `TabBar` / `TabItem`       | Horizontal tab navigation                                |
| `SearchField`              | Search input with icon and clear action                  |
| `AmountInput`              | Numeric amount input for transactions                    |
| `ExpenseChart`             | Expense breakdown donut/bar chart                        |
| `SpendingChart`            | Spending trend line chart                                |
| `IncomeExpenseChart`       | Income vs. expense comparison chart                      |
| `GoalsCardDefault/Details` | Savings goal progress cards                              |
| `CategoryIcon`             | Icon with category color coding                          |
| `IconFrame`                | Framed icon container                                    |
| `IconPaymentMethod`        | Payment method brand icons                               |
| `ListItem`                 | Generic list row with leading/trailing slots             |
| `MediaSlot`                | Image/media placeholder with aspect ratio               |
| `SectionTitle`             | Section header with optional action link                 |
| `SettingSingle`            | Settings row with toggle/chevron                         |
| `Tooltip`                  | Floating tooltip                                         |
| `TextDivider`              | Horizontal divider with centered label                   |
| `IndicatorDots`            | Pagination dot indicator                                 |
| `HomeIndicatorBar`         | iOS-style home indicator                                 |
| `ProgressBarWithController`| Progress bar with increment/decrement controls           |
| `RecapCard`                | Summary/recap stat card                                  |

---

## Screen Templates

Full-screen app templates in `src/app/screens/`:

| Screen                  | Description                              |
| ----------------------- | ---------------------------------------- |
| `home`                  | Dashboard with balance, activity feed    |
| `analytics_overview`    | Spending overview with charts            |
| `analytics_breakdown`   | Category-level expense breakdown         |
| `transaction_history`   | Paginated transaction list               |
| `add_transaction`       | Transaction entry form                   |
| `goals`                 | Savings goals list                       |
| `goals_details`         | Individual goal detail & progress        |
| `profile_settings`      | User profile and app settings            |

---

## Design System

### Color Architecture

Colors use a two-layer architecture:

1. **Primitive colors** — literal hex/rgba values defined in `tailwind.config.js`
   - Examples: `base-white`, `brand-500`, `gray-light-800`, `gray-dark-alpha-300`

2. **Semantic tokens** — CSS variables in `global.css`, mapped in `tailwind.config.js`
   - Examples: `text-primary`, `bg-surface`, `border-brand`

> **Note:** Tailwind's `/80` opacity modifier only works with primitive colors, not semantic tokens (CSS variables). Use primitive colors like `text-base-white/80` or pre-defined alpha primitives like `text-gray-dark-alpha-300`.

### Typography

Use the `<Typography>` component from `@/components/ui-kit/Typography` for all text rendering. Do not use React Native's `<Text>` directly.

### Styling

- Use `className` with NativeWind — do **not** use `StyleSheet.create` for new components.
- Use `cn()` from `@/lib/cn` (clsx + tailwind-merge) to merge conditional class names.

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

---

## License

[MIT](./LICENSE)
