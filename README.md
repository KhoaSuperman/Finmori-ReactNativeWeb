# Super Design System Mobile — React Native Web

A React Native Web design system targeting mobile screen sizes, with Storybook for component showcase and TailwindCSS (via NativeWind) for styling.

## Tech Stack

| Technology       | Version | Purpose              |
| ---------------- | ------- | -------------------- |
| Expo SDK         | 55      | Framework & tooling  |
| React Native     | 0.83    | Core UI framework    |
| React Native Web | 0.21    | Web rendering        |
| React            | 19.2    | UI library           |
| NativeWind       | 4.x     | TailwindCSS for RN   |
| TailwindCSS      | 3.4     | Utility-first CSS    |
| Storybook        | 10.x    | Component showcase   |
| TypeScript       | 5.9     | Type safety          |
| Vite             | 7.x     | Storybook build tool |

## Getting Started

```bash
cd reactnative_web
npm install
```

### Run the Web App

```bash
npm run web
```

### Run Storybook

```bash
npm run storybook
```

Storybook opens at `http://localhost:6006` with mobile viewport by default.

### Build for Production

```bash
npm run build:web           # Build the web app
npm run build-storybook     # Build static Storybook
```

## Project Structure

```
reactnative_web/
├── .storybook/              # Storybook configuration
│   ├── main.ts              # Framework & story discovery
│   └── preview.ts           # Global decorators & viewport
├── src/
│   ├── app/                 # Expo Router pages
│   ├── components/
│   │   ├── ui-kit/          # Design system components
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Chip.tsx
│   │   │   ├── Divider.tsx
│   │   │   └── index.ts     # Barrel export
│   │   └── ...              # App-level components
│   ├── constants/
│   ├── hooks/
│   └── global.css            # Tailwind directives
├── tailwind.config.js        # Tailwind + NativeWind config
├── babel.config.js           # Babel with NativeWind preset
├── metro.config.js           # Metro with NativeWind
└── app.json                  # Expo configuration
```

## UI Kit Components

All design system components live in `src/components/ui-kit/` and each has a corresponding `.stories.tsx` file.

| Component | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| `Button`  | Primary, secondary, outline, ghost, danger variants with sm/md/lg sizes |
| `Badge`   | Status badges: default, success, warning, error, info                   |
| `Card`    | Container with elevated, outlined, filled variants                      |
| `Avatar`  | Image or initials-based avatar with size options                        |
| `Input`   | Text input with label, error, and hint states                           |
| `Chip`    | Selectable filter chips                                                 |
| `Divider` | Horizontal separator with spacing options                               |

## Mono Repo

This project is part of a mono repo alongside the `android` native project:

```
SuperDesignSystemMobile/
├── android/          # Native Android design system
└── reactnative_web/  # React Native Web design system (this project)
```
