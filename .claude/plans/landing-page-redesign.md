# Landing Page Redesign Plan — v2 (Improved)

## Design Philosophy
Premium dark-mode landing page inspired by Linear, Vercel, and Raycast. Every section should feel intentional with generous spacing, subtle gradients, and refined micro-interactions. The page is a **showcase** — it must visually demonstrate the quality of the design system it promotes.

---

## Critical Fixes (Blocking Issues)

1. **Missing cover image** — `assets/images/landing/` folder is empty. The HeroSection references `finmori-cover.png` which doesn't exist → hero shows broken image. **Solution**: Remove dependency on cover image. Use a pure CSS gradient/mesh background instead — more reliable and more premium-looking.

2. **Emoji icons in FeaturesSection** — `⚡`, `◈`, `✓`, `✦` render inconsistently across platforms and look unprofessional. **Solution**: Replace with proper SVG icon components or styled unicode geometric shapes with consistent rendering.

3. **Hardcoded rgba() everywhere** — Components use raw `rgba(14, 16, 27, ...)` and `rgba(64, 73, 104, ...)` instead of design system tokens. **Solution**: Use semantic tokens from `global.css` dark theme where possible.

---

## 1. Header — Glassmorphism Nav

**Current**: Functional but basic. Logo is just a blue square with "F" letter.

**Improvements**:
- Use the actual `logo-glow.png` image in the header (currently only in hero)
- Add hover states on nav items (subtle background highlight)
- Smooth scroll behavior with active section indicator
- Mobile: Add a hamburger menu or at minimum show the logo image
- Slightly reduce border opacity for more subtlety

---

## 2. Hero Section — Gradient Mesh Background

**Current**: Depends on missing cover image. Stat badges are text-only.

**Complete Redesign**:
- **Background**: Replace broken cover image with a rich CSS gradient mesh:
  ```
  radial-gradient(ellipse at 20% 50%, rgba(47, 97, 243, 0.15) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
  radial-gradient(ellipse at 50% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
  #0e101b
  ```
- **Decorative grid**: Subtle CSS grid pattern overlay (like Linear's hero) at very low opacity
- **Headline**: Larger, bolder. Consider gradient text for "Finmori" word using brand colors
- **Subtitle**: Slightly larger, more breathing room
- **Stat badges**: Redesign with:
  - Glassmorphism background (blur + semi-transparent)
  - Small colored dot/icon before the number
  - Slightly larger, more padded
  - On mobile: Show as a horizontal pill row below subtitle (not hidden)
- **CTA buttons**: Larger touch targets, primary button gets subtle glow shadow
- **Bottom fade**: Gradient fade to bg-primary for seamless transition to next section

---

## 3. Features Section — Bento Grid

**Current**: Basic 4-card grid with emoji icons.

**Redesign as Bento Grid**:
- **Layout**: 2×2 grid on desktop, single column on mobile
- **Cards**: Each card gets a unique subtle gradient background tint based on its accent color
- **Icons**: Replace emojis with styled View-based icons (geometric shapes using the design system colors):
  - Cross-Platform → Two overlapping rounded squares
  - TypeScript → Angled brackets `</>` styled as a code icon
  - Production Ready → Checkmark in a shield shape
  - NativeWind → Wind/wave lines
- **Card hover**: Subtle border glow matching the card's accent color (web only)
- **Section header**: Add a small colored pill/badge "FEATURES" above the title
- **Spacing**: More generous padding (py-80 instead of py-64)

---

## 4. Screens Gallery — Showcase Carousel

**Current**: Mobile horizontal scroll works. Desktop split view is functional but flat.

**Improvements**:
- **Desktop**: 
  - Left panel: Add subtle hover states on list items, smooth transition on selection
  - Right panel: Richer gradient mesh background (not just flat dark)
  - Add a subtle glow/shadow around the phone frame matching brand color
  - Consider adding a "View all screens →" link
- **Mobile**:
  - Phone cards: Add subtle gradient overlay at bottom of each card for better label readability
  - Improve snap scrolling feel
  - Active dot indicator (highlight current card's dot)
- **Section header**: Add pill badge "SCREENS" + screen count
- **Separator**: Remove the inline `borderTopWidth` from parent — use proper section spacing instead

---

## 5. UI Kits Gallery — Component Showcase

**Current**: Functional but cramped. Cards are tiny.

**Improvements**:
- **Card size**: Increase minimum card width on mobile (from 3 columns to 2 columns on small screens for better previews)
- **Card hover**: Add border glow effect matching category accent color
- **Thumbnail area**: Increase height ratio for better preview visibility
- **Category headers**: Add subtle gradient background instead of flat dark
- **Section header**: Consistent with other sections — pill badge + title + description
- **Separator**: Remove inline border from parent

---

## 6. CTA Section — Premium Closing

**Current**: Minimal radial gradient, feels like afterthought.

**Redesign**:
- **Background**: Multi-layer gradient mesh (brand blue + purple tones)
- **Decorative**: Subtle grid pattern overlay (matching hero)
- **Content**: 
  - Larger headline with gradient text effect
  - Add "MIT Licensed · Free Forever" badge above headline
  - Two CTAs: "View on GitHub" (primary) + "Read Documentation" (secondary/outline)
- **Spacing**: More generous (py-96)

---

## 7. Footer — Clean & Informative

**Current**: Basic but acceptable.

**Improvements**:
- **Tech badges**: Add subtle hover effect (slight scale + brightness)
- **Layout**: On desktop, use a row layout (logo left, links center, GitHub right)
- **Separator line**: Use a gradient line (brand-500 → transparent) instead of solid border
- **Copyright**: Add year dynamically

---

## Animation Strategy

- **Scroll-triggered fade-in**: Each section fades in + translates up 20px when entering viewport (use IntersectionObserver on web, skip on native)
- **Floating badges**: Keep current float animation but make it smoother (6s duration, smaller amplitude ±6px)
- **Hover states**: All interactive elements get `transition: all 0.2s ease` on web
- **Gradient text**: Use `background-clip: text` for headline gradient effect (web only, fallback to solid color)
- **Grid pattern**: CSS background-image with repeating-linear-gradient for subtle grid lines

---

## Color System (Direct Colors Only — No Semantic Tokens)

**IMPORTANT**: The landing page is always dark-themed, but the app uses light theme by default.
Semantic tokens (`text-primary`, `bg-primary`, etc.) resolve to **light mode** values and will
break the landing page colors. Always use direct hex/rgba values in landing components.

| Role | Direct Value |
|---|---|
| Page background | `#0e101b` |
| Surface / card bg | `#111322` or `rgba(17, 19, 34, 0.6-0.8)` |
| Border | `rgba(64, 73, 104, 0.25-0.5)` |
| Text primary | `#f9f9fb` |
| Text secondary | `#b9c0d4` |
| Text tertiary | `#7d89b0` |
| Text muted | `#5d6b98` |
| Text faint | `#404968` |
| Brand blue | `#2f61f3` |
| Brand blue light | `#6895f8` |
| Accent green | `#10b981` |
| Accent purple | `#8b5cf6` |

The web tab bar (`app-tabs.web.tsx`) is replaced with a simple `<Slot />` passthrough
so the landing page's own `<Header />` handles navigation without conflict.

---

## Files to Modify

| File | Changes |
|---|---|
| `HeroSection.tsx` | Remove broken cover image, add gradient mesh bg, redesign stat badges, gradient text |
| `FeaturesSection.tsx` | Replace emoji icons, bento grid layout, card gradient tints, pill badge |
| `ScreensGallery.tsx` | Desktop glow effects, mobile improvements, remove parent border |
| `UIKitsGallery.tsx` | Larger cards on mobile, hover glow, better spacing |
| `CTASection.tsx` | Gradient mesh bg, gradient text, MIT badge, dual CTAs |
| `FooterSection.tsx` | Hover effects, gradient separator, dynamic year |
| `Header.tsx` | Logo image, hover states, mobile improvements |
| `index.tsx` (landing page) | Remove inline borders/margins, proper section spacing |

---

## Implementation Order

1. **index.tsx** — Remove inline borders, fix section spacing
2. **HeroSection.tsx** — Gradient mesh bg, fix broken image, redesign badges
3. **FeaturesSection.tsx** — Replace emojis, bento layout, card improvements
4. **Header.tsx** — Logo image, hover states
5. **ScreensGallery.tsx** — Desktop/mobile visual improvements
6. **UIKitsGallery.tsx** — Card sizing, hover effects
7. **CTASection.tsx** — Premium gradient treatment
8. **FooterSection.tsx** — Polish and hover effects

---

## Design References

- **Linear.app** — Gradient mesh backgrounds, grid patterns, generous spacing
- **Vercel.com** — Clean typography hierarchy, subtle animations
- **Raycast.com** — Dark theme showcase, glassmorphism, glow effects
- **ui.shadcn.com** — Component gallery layout, clean card design
