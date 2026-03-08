---
name: figma-design-tokens
description: Imports Figma design token JSON exports and applies them to the Tailwind CSS config and design system. Use when the user provides Figma token files, mentions design tokens from Figma, or asks to implement a token category (radius, spacing, colors, typography, shadows, etc.).
---

# Figma Design Tokens

Workflow for importing Figma variable exports (JSON) into this project's Tailwind-based design system.

## Input Format

Figma exports tokens as `Mode 1.tokens.json` inside a named folder (e.g. `2. Radius/`, `3. Spacing/`). Each token entry has:

```json
{
  "token-name": {
    "$type": "number",
    "$value": 8,
    "$extensions": { "com.figma.scopes": ["CORNER_RADIUS"] }
  }
}
```

Key fields: `$value` (the design value), `$extensions.com.figma.scopes` (usage hint like `GAP`, `CORNER_RADIUS`).

## Workflow

```
- [ ] Step 1: Read the Figma token JSON
- [ ] Step 2: Map tokens to Tailwind config
- [ ] Step 3: Create showcase page
- [ ] Step 4: Add to home navigation
```

### Step 1: Read the Figma token JSON

Read all `.tokens.json` files in the provided directory. Extract token names and `$value` fields. Ignore `$extensions` metadata (it's for Figma internal use).

### Step 2: Map tokens to Tailwind config

**Config file**: `tailwind.config.js`

Determine the Tailwind property from the token name prefix:

| Token prefix | Tailwind property | Placement |
|---|---|---|
| `radius-*` | `borderRadius` | Top-level `theme` (replaces defaults) |
| `spacing-*` | `spacing` | `theme.extend` (adds to defaults) |
| `shadow-*` | `boxShadow` | `theme.extend` |
| `font-size-*` | `fontSize` | `theme.extend` |
| `font-weight-*` | `fontWeight` | `theme.extend` |

**Placement rules**:
- Use top-level `theme.{property}` when the Figma scale **completely replaces** the Tailwind defaults (e.g. `borderRadius` — Figma values differ from TW defaults at most sizes).
- Use `theme.extend.{property}` when adding **semantic aliases** alongside Tailwind's numeric defaults (e.g. `spacing` — Figma values map 1:1 to existing TW numeric keys, so we add named aliases).
- Never remove existing config entries unless they conflict with the new tokens.

**Naming**: Strip the prefix (`radius-`, `spacing-`) to get the Tailwind key. Token `radius-xl` becomes key `xl` with value from `$value` as `"Npx"`.

**Special keys**:
- Add `DEFAULT` entry for the `md` value when defining `borderRadius` (enables bare `rounded` class).
- Add `full: "9999px"` for radius if present in tokens.

### Step 3: Create showcase page

Create `src/app/showcase/{token-category}.tsx` following the established pattern.

**Required imports**:
```tsx
import { View } from "react-native"
import { ShowcasePage } from "@/components/showcase-page"
import { Typography } from "@/components/ui-kit/Typography"
```

**Page structure** (3 sections minimum):

1. **Visual comparison** — visual representation of all tokens (bars for spacing, squares for radius, swatches for colors).
2. **Token reference** — table/list with: token name, pixel value, Tailwind class name.
3. **Applied examples** — real-world usage patterns showing tokens in context (cards, badges, layouts).

**Conventions**:
- Use `<Typography>` for all text (never raw `<Text>`).
- Use NativeWind `className` for styling (never `StyleSheet.create`).
- Use `as const` on the token data array for type safety.
- Use the `ShowcasePage` wrapper with `title` and `description` props.
- Style with existing design tokens (bg-primary, bg-secondary, border-tertiary, text-tertiary, etc.).

### Step 4: Add to home navigation

In `src/app/(tabs)/index.tsx`, add an entry to the `CORE_COMPONENTS` array:

```tsx
{
  title: "Token Category",
  description: "Brief description of the token category.",
  route: "/showcase/token-category",
},
```

## Reference Files

- **Tailwind config**: `tailwind.config.js`
- **Showcase pages**: `src/app/showcase/*.tsx`
- **Home navigation**: `src/app/(tabs)/index.tsx`
- **ShowcasePage component**: `src/components/showcase-page.tsx`
- **Typography component**: `src/components/ui-kit/Typography.tsx`
