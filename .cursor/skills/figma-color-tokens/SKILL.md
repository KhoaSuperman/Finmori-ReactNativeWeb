---
name: figma-color-tokens
description: Analyzes and processes Figma primitive color token JSON exports into Tailwind CSS config and showcase pages. Use when the user provides Figma color token files, mentions primitive colors from Figma, or asks to import a color palette. Handles nested color groups, alpha transparency values, and large token sets (300+).
---

# Figma Color Tokens

Specialized workflow for importing Figma **color** variable exports into this project's Tailwind + NativeWind design system.

## Input Format

Figma exports color primitives as `.tokens.json` (often `Style.tokens.json`) with nested groups:

```json
{
  "Colors": {
    "Group Name": {
      "step": {
        "$type": "color",
        "$value": {
          "colorSpace": "srgb",
          "components": [0.98, 0.12, 0.45],
          "alpha": 1,
          "hex": "#FA1F73"
        }
      }
    }
  }
}
```

Key extraction rules:
- Use `$value.hex` for the color value
- Use `$value.alpha` to detect transparency (< 1 means alpha channel)
- Ignore `$extensions`, `colorSpace`, and `components`
- The file may contain **non-color tokens** (e.g. `Spacing`) at the top level — only process `Colors`

## Workflow

```
- [ ] Step 1: Analyze token JSON (write temp script)
- [ ] Step 2: Map to Tailwind config
- [ ] Step 3: Create showcase page
- [ ] Step 4: Add to home navigation
- [ ] Step 5: Clean up temp files
```

### Step 1: Analyze Token JSON

**Critical**: Large token files (>100KB) cannot be read in one pass. Write a temporary Node.js script to parse the JSON.

Create `scripts/parse-colors.js`:

```js
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('PATH_TO_FILE', 'utf8'));
const colors = data.Colors;

// Count ALL token types to verify totals
function findAllTokens(obj, path) {
  path = path || '';
  let results = [];
  for (const [key, val] of Object.entries(obj)) {
    if (key === '$extensions') continue;
    const p = path ? path + '/' + key : key;
    if (val && typeof val === 'object') {
      if (val['$type']) results.push({ path: p, type: val['$type'] });
      else results = results.concat(findAllTokens(val, p));
    }
  }
  return results;
}

const all = findAllTokens(data);
const byType = {};
all.forEach(t => { byType[t.type] = (byType[t.type] || 0) + 1; });
console.log('Token counts by type:', byType);
console.log('Total:', all.length);

// Extract color groups
Object.entries(colors).forEach(([group, tokens]) => {
  console.log('---', group, '---');
  Object.entries(tokens).forEach(([name, token]) => {
    const v = token['$value'];
    const alpha = v.alpha;
    const hex = v.hex;
    if (alpha < 1) {
      console.log(name + ': rgba (alpha:' + alpha + ')');
    } else {
      console.log(name + ': ' + hex);
    }
  });
});
```

**Verification**: Compare total token count against the user's expected count. The Figma UI may show a total that includes non-color tokens (spacing, numbers, etc.) in the same collection.

**Delete the script** after extraction is complete.

### Step 2: Map to Tailwind Config

**File**: `tailwind.config.js` → `theme.extend.colors`

**Placement**: Always `theme.extend.colors` (adds alongside existing semantic tokens, never replaces).

**Group naming** — convert Figma group names to Tailwind keys:

| Figma group name | Tailwind key | Rule |
|---|---|---|
| `Base` | `base` | lowercase |
| `Brand` | `brand` | lowercase |
| `Gray (light mode)` | `gray-light` | kebab-case, drop parenthetical |
| `Gray (dark mode alpha)` | `gray-dark-alpha` | kebab-case, drop parenthetical |
| `Blue light` | `blue-light` | kebab-case |
| `Orange dark` | `orange-dark` | kebab-case |
| `Rosé` | `rose` | ASCII-safe |

**Step keys**: Use the numeric step directly (25, 50, 100...950). For Base group, use descriptive keys (white, black, transparent).

**Alpha colors**: Convert to `rgba()` format:

```js
// Token: alpha = 0.56, hex = #FFFFFF
// Output: "rgba(255, 255, 255, 0.56)"
```

**Structure example**:

```js
colors: {
  brand: {
    25: "#F8FAFF",
    50: "#EDF2FF",
    // ... 100-900
    950: "#161C49",
  },
  "gray-dark-alpha": {
    25: "rgba(255, 255, 255, 0.98)",
    // ...
  },
  // ... existing semantic tokens (fg, focus, etc.) remain untouched
}
```

**Ordering**: Place primitive palette entries BEFORE existing semantic token entries (fg, focus, etc.) in the config for readability.

### Step 3: Create Showcase Page

Create `src/app/showcase/primitive-colors.tsx`.

**Data structure** — define all groups as a typed array:

```tsx
type ColorStep = { step: string; hex: string }
type ColorGroup = { name: string; tailwindPrefix: string; steps: ColorStep[] }
const COLOR_PALETTE: ColorGroup[] = [ /* ... */ ] as const
```

For alpha colors, store the `rgba()` string as the `hex` value.

**Organize groups** into categories for collapsible sections:

```tsx
const CORE_GROUPS = ["Brand", "Error", "Warning", "Success"]
const GRAY_GROUPS = ["Gray (light mode)", "Gray (dark mode)", "Gray (dark mode alpha)", ...]
// Everything else → Extended Palette
```

**Required sections**:

1. **Full palette overview** — stacked horizontal strips showing all scales at a glance
2. **Base colors** — separate section for white/black/transparent
3. **Collapsible sections** — Core Colors (open by default), Gray Scales, Extended Palette
4. **Token reference** — collapsible lists with swatch + Tailwind class + hex value
5. **Applied examples** — status indicators, gradient cards, temperature comparisons

**Helper functions needed**:

- `isLightColor(hex)` — determines text contrast; must handle both `#hex` and `rgba()` formats
- `CollapsibleSection` — toggle visibility for large groups (critical for 300+ tokens)

**Conventions** (same as figma-design-tokens skill):
- `<Typography>` for all text
- NativeWind `className` for styling
- `ShowcasePage` wrapper
- Semantic tokens for chrome (bg-primary, bg-secondary, border-tertiary, text-tertiary)
- Inline `style={{ backgroundColor: hex }}` for the actual color swatches

### Step 4: Add to Home Navigation

In `src/app/(tabs)/index.tsx`, add to `CORE_COMPONENTS`:

```tsx
{
  title: "Primitive Colors",
  description: "The foundational N-token color palette across M scales that underpins all semantic tokens.",
  route: "/showcase/primitive-colors",
},
```

### Step 5: Clean Up

Delete any temporary scripts created in Step 1.

## Common Pitfalls

- **PowerShell escaping**: `$type` and `$value` are interpreted as PS variables. Always write Node scripts to files instead of using inline `-e` evaluation.
- **File size**: Token files can be 200KB+. Use the script approach, never try to read the full file in the tool.
- **Alpha group**: The "Gray (dark mode alpha)" group is easy to miss — it uses the same `#FFFFFF` hex for all steps with varying alpha. Always check for `alpha < 1`.
- **Token count mismatch**: Figma UI may show a total that includes non-color tokens (spacing, numbers) in the same collection. Verify by counting all `$type` values.
- **Duplicate values**: Some groups may have identical hex values (e.g. Gray Blue = Gray light mode). This is intentional in Figma — keep them as separate Tailwind keys.

## Reference Files

- **Tailwind config**: `tailwind.config.js`
- **Showcase page**: `src/app/showcase/primitive-colors.tsx`
- **Home navigation**: `src/app/(tabs)/index.tsx`
- **ShowcasePage component**: `src/components/showcase-page.tsx`
- **Typography component**: `src/components/ui-kit/Typography.tsx`
- **Existing semantic colors showcase**: `src/app/showcase/colors.tsx`
