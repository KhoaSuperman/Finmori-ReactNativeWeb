# gen-ui-for-component

Let generate ReactNative UI kit for component from design specs exported located at input folder.

# In design specs folder includes

- `<specs-folder>/specs_document/` : contains technical document of component. _MUST READ_
- `<specs-folder>/previews/`: contains preview png of component.
- `<specs-folder>/icons/`: contains svg icons.
- `<specs-folder>/images/`: contains jpeg/png images.
- `<specs-folder>/vectors/`: contains vector shapes that need to draw custom shape.
- `<specs-folder>/eclipses/` - Extracted ellipse arc data (startingAngle, endingAngle, innerRadius)

# Token Resolution (CRITICAL)

Every value in the spec's **Style Definitions** tables has a `Token` column. Always resolve tokens to the existing design system — **never hardcode raw values** (hex colors, px sizes, font names, etc.).

## General rule

1. **Read the token name** from the spec table.
2. **Verify the token exists** in `tailwind.config.js` before using it.
3. **If a token is missing** from `tailwind.config.js` but its CSS variable exists in `global.css`, add it to the correct section in `tailwind.config.js` first, then use the class.
4. **Never fall back to hardcoded values** — always fix the config gap instead.

## Colors

| Spec token prefix        | Tailwind usage                                                                 |
| ------------------------ | ------------------------------------------------------------------------------ |
| `Colors/Background/bg-*` | `bg-*` (e.g. `bg-success-primary`)                                             |
| `Colors/Foreground/fg-*` | `bg-fg-*` for fill, `text-fg-*` for icon tint (e.g. `bg-fg-success-secondary`) |
| `Colors/Text/text-*`     | `text-*` (e.g. `text-success-primary`)                                         |
| `Colors/Border/border-*` | `border-*` (e.g. `border-tertiary`)                                            |

Check `backgroundColor`, `textColor`, `borderColor` sections in `tailwind.config.js`.

## Typography

| Spec field                      | Tailwind usage                                                                                                                      |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Font family `Plus Jakarta Sans` | `font-body`                                                                                                                         |
| Font family `Literata`          | `font-display`                                                                                                                      |
| Font family `Iceland`           | `font-number`                                                                                                                       |
| Font size / line height         | Map to semantic scale: `text-tiny`, `text-caption`, `text-body-small`, `text-body`, `text-h3`, `text-h2`, `text-h1`, `text-display` |
| Font weight                     | `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700)                                                  |
| Letter spacing `tighter`        | `tracking-tighter`                                                                                                                  |

Prefer `<Typography size="..." weight="...">` over raw `<Text>` with inline styles. Only use inline `style` for sizes that have no matching semantic scale entry.

## Spacing & Padding

| Spec token         | Tailwind class      |
| ------------------ | ------------------- |
| `spacing-xxs` / 2  | `gap-xxs` / `p-xxs` |
| `spacing-xs` / 4   | `gap-xs` / `p-xs`   |
| `spacing-sm` / 6   | `gap-sm` / `p-sm`   |
| `spacing-md` / 8   | `gap-md` / `p-md`   |
| `spacing-lg` / 12  | `gap-lg` / `p-lg`   |
| `spacing-xl` / 16  | `gap-xl` / `p-xl`   |
| `spacing-2xl` / 20 | `gap-2xl` / `p-2xl` |
| `spacing-3xl` / 24 | `gap-3xl` / `p-3xl` |

Check the `spacing` / `gap` / `padding` sections in `tailwind.config.js` for exact keys.

## Border Radius

| Spec token    | Tailwind class |
| ------------- | -------------- |
| `radius-sm`   | `rounded-sm`   |
| `radius-md`   | `rounded-md`   |
| `radius-lg`   | `rounded-lg`   |
| `radius-xl`   | `rounded-xl`   |
| `radius-2xl`  | `rounded-2xl`  |
| `radius-full` | `rounded-full` |

## Borders & Strokes

- Stroke color token → `border-*` class (same mapping as Colors/Border above).
- Stroke weight → `border` (1px default) or `border-2`, `border-4`, etc.

## Shadows

Map shadow tokens to the existing shadow scale in `tailwind.config.js` (`shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`). Check the `boxShadow` section for exact keys.

# Code Component

- Check variant is need to use `Code Component` or not. If yes, access via `Code File Path` and examine the usage of code component.
- Examine `Code Component` usecases (properties and behaviors) before use them in component.

# Component Showcase

- Let implement component showcase following existing showcase pattern
- Update the home screen to display latest showcase of component. In the menu items, it should be first of `SHOWCASE_ITEMS` `(src\lib\showcase-items.ts)` list.

# Important Reminders

- Following existing css design system (typography, colors, gradients, padding, spacing, ...)
- Always check `tailwind.config.js` for the exact token keys before writing className strings.

This command will be available in chat with /gen-ui-for-component
