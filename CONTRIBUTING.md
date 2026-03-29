# Contributing to Finmori React Native Web

Thank you for your interest in contributing! This document outlines how to get started and the conventions to follow.

---

## Getting Started

1. Fork the repository and clone your fork.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run web       # Web app at http://localhost:8081
   npm run storybook # Storybook at http://localhost:6006
   ```

---

## Development Workflow

### Branching

- Branch from `main` for new features or fixes.
- Use descriptive branch names: `feat/add-modal-component`, `fix/button-disabled-state`.

### Commits

- Write clear, concise commit messages in the imperative mood: `Add Modal component`, `Fix Button disabled opacity`.
- Keep commits focused — one logical change per commit.

### Pull Requests

- Open a PR against `main`.
- Describe what changed and why.
- Include screenshots or Storybook story links for visual changes.

---

## Code Conventions

### Styling

- Use **NativeWind `className`** — do **not** use `StyleSheet.create`.
- Use `cn()` from `@/lib/cn` for conditional/merged class names.
- Follow the two-layer color architecture (see README). Do not use Tailwind opacity modifiers on semantic tokens.

### Components

- All UI kit components live in `src/components/ui-kit/`.
- Every new component **must** have a colocated `.stories.tsx` file.
- Use `<Typography>` for all text — never use `<Text>` directly.
- Use `class-variance-authority (cva)` for component variants.

### TypeScript

- Strict mode is enabled. All props must be typed.
- Prefer explicit return types on exported functions.

### Formatting

Run Prettier before committing:

```bash
npm run format
```

Check formatting without writing:

```bash
npm run format:check
```

---

## Adding a New UI Kit Component

1. Create `src/components/ui-kit/MyComponent.tsx`.
2. Create `src/components/ui-kit/MyComponent.stories.tsx`.
3. Export it from `src/components/ui-kit/index.ts`.
4. Optionally add a showcase entry in `src/lib/showcase-items.ts`.

---

## Reporting Issues

- Search existing issues before opening a new one.
- Include steps to reproduce, expected vs. actual behavior, and your environment (OS, Node version, browser).

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
