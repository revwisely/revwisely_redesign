# RevWisely Brand Guide

---

## Logo

### Wordmark

The primary logo is a text-based wordmark. **Rev** is set in brand red; **Wisely** is set in graphite. Both use the primary typeface at bold weight with tight tracking.

```
RevWisely
^^^        — #C74634 (Brand Red)
   ^^^^^^  — #41424C (Graphite)
```

**Usage rules:**
- Always render as two colors — never all one color
- Minimum clear space: the width of the letter "R" on all sides
- Do not italicize, stretch, or add effects
- On dark`` backgrounds, "Wisely" switches to white (#FFFFFF)

### Favicon / App Icon

A rounded red squa```re with a white bold "R":

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#C74634"/>
  <text x="16" y="22.5" text-anchor="middle"
        font-family="Inter, Arial, sans-serif"
        font-weight="700" font-size="16" fill="white">R</text>
</svg>
```

Corner radius: 6px at 32x32 (scales proportionally)

---

## Color Palette

### Primary

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Brand Red | `#C74634` | `--brand-red` | Primary accent, CTAs, links, eyebrow labels |
| Brand Red Hover | `#A93A2B` | `--brand-red-hover` | Hover state for red elements |
| Brand Red Light | `rgba(199, 70, 52, 0.06)` | `--brand-red-light` | Subtle red tinted backgrounds |

### Neutrals

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| White | `#FFFFFF` | `--white` | Primary background |
| Off-White | `#F9F9F9` | `--off-white` | Alternating section backgrounds |
| Light Gray | `#F2F2F2` | `--light-gray` | Borders, dividers, card borders |
| Graphite | `#41424C` | `--graphite` | Body text, secondary text |
| Dark Graphite | `#1A1A1A` | `--dark-graphite` | Headlines, dark section backgrounds |

### Background Alternation Pattern

Sections alternate to create visual rhythm:

```
White → Dark Graphite (with SVG curve) → Off-White → White → Dark Graphite (CTA)
```

---

## Typography

### Typeface

**Primary:** PP Neue Montreal (bold, medium, regular)
**Fallback stack:** Inter, Arial, sans-serif

> Note: Currently using Inter via Google Fonts as a fallback. The CSS variable `--font-neue-montreal` is ready for the swap — just load the `.woff2` files and nothing else changes.

### Scale

| Element | Size | Weight | Leading | Tracking |
|---------|------|--------|---------|----------|
| H1 (Hero) | `clamp(2.25rem, 4.5vw, 3.5rem)` | 700 (Bold) | 1.08 | -0.02em |
| H2 (Section) | `clamp(2rem, 4vw, 3rem)` | 700 (Bold) | 1.1 | tight |
| H2 (CTA) | `clamp(2rem, 4vw, 3.25rem)` | 700 (Bold) | 1.15 | tight |
| H3 (Card) | `1.125rem` (18px) | 700 (Bold) | snug | — |
| Body | `1rem` (16px) | 400 (Regular) | relaxed | — |
| Body Large | `1.125rem` (18px) | 400 (Regular) | relaxed | — |
| Eyebrow | `0.75rem` (12px) | 600 (Semibold) | — | 0.2em |
| Small / Meta | `0.875rem` (14px) | 400–600 | relaxed | — |

### Headline Rules

- All headings use `text-wrap: balance` globally
- **No orphan words** — never a single word alone on the last line of a headline. Always 2+ words per line. Use `<br />` or `whitespace-nowrap` to control line breaks.
- Headlines are typically 1–3 lines

### Eyebrow Labels

Uppercase, semibold, 12px, letterspaced at `0.2em`, brand red. Always appears above the headline.

```
THE OLD WAY
WHAT WE BELIEVE
THE SOLUTION
```

---

## Spacing

### Layout

| Property | Value |
|----------|-------|
| Max content width | `1200px` |
| Horizontal padding | `px-6` (24px) / `lg:px-8` (32px) |
| Section vertical padding | `py-20` (80px) / `lg:py-28` (112px) |
| Grid gap | `gap-12` (48px) / `lg:gap-16` (64px) |

### Common Spacings

| Use | Class |
|-----|-------|
| Eyebrow → Headline | `mt-6` |
| Headline → Accent line | `mt-6` to `mt-8` |
| Accent line → Body | `mt-8` to `mt-10` |
| Body → CTA button | `mt-8` to `mt-12` |
| Between paragraphs | `space-y-5` |

---

## Components

### Accent Line

A thin horizontal rule below headlines:

```
h-[2px] w-16 origin-left bg-[var(--brand-red)] opacity-40–50
```

Animates in with `scaleX: 0 → 1`.

### Cards

```css
background: white
border: 1px solid var(--light-gray)
border-radius: 20px (rounded-2xl)
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06)
```

Hover: shadow deepens, card lifts `-2px`.

### Buttons

**Primary (Dark):**
```
rounded-full bg-[var(--dark-graphite)] px-8 py-4 text-base font-semibold text-white
hover: bg-[var(--brand-red)]
```

**Primary (Light / on dark bg):**
```
rounded-full bg-white px-10 py-4 text-base font-semibold text-[var(--dark-graphite)]
hover: bg-gray-100, shadow-2xl, scale-105
```

**Nav CTA:**
```
rounded-lg bg-[var(--brand-red)] px-5 py-2.5 text-sm font-medium text-white
hover: bg-[var(--brand-red-hover)]
```

### SVG Section Curves

Sections with dark backgrounds transition into lighter sections using organic SVG curves:

```html
<svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
  <path d="M0 120V60C240 0 480 0 720 30C960 60 1200 60 1440 30V120H0Z"
        fill="var(--off-white)" />
</svg>
```

---

## Animation

### Library

Framer Motion — all animations use `useInView` with `once: true` (or `once: false` for repeating sections).

### Standard Motion Values

| Pattern | Initial | Animate | Duration |
|---------|---------|---------|----------|
| Fade up | `opacity: 0, y: 40` | `opacity: 1, y: 0` | 0.7–0.8s |
| Fade in from left | `opacity: 0, x: -20` | `opacity: 1, x: 0` | 0.6s |
| Scale in | `opacity: 0, scale: 0.95` | `opacity: 1, scale: 1` | 0.9s |
| Line reveal | `scaleX: 0` | `scaleX: 1` | 0.8s |

### Stagger

Sequential items use incremental delay: `delay: base + i * 0.12`

### Easing

Default: Framer Motion default
Hero elements: `[0.25, 0.1, 0.25, 1]` (custom ease-out)

---

## Imagery

### Direction

People-focused. Consulting, collaboration, teams working together. AI-generated photography is acceptable when it conveys professionalism and warmth — avoid overly generic stock aesthetics.

### Treatment

- Rounded corners: `rounded-2xl` (16px)
- Light border: `border border-[var(--light-gray)]`
- Subtle shadow on light backgrounds: `shadow-lg`
- On dark backgrounds: `border border-white/10 bg-white/[0.04]`

### Aspect Ratios

- Hero images: `aspect-[4/3]`
- Video embeds: `aspect-video` (16:9)
- All media: `object-cover` with `absolute inset-0 h-full w-full`

---

## Voice & Tone

- **Direct.** Lead with the point. No filler.
- **Confident, not arrogant.** We know our work. We don't need to shout.
- **Operator language.** "Embed," "deploy," "run," "build" — not "leverage," "synergize," "empower."
- **Short paragraphs.** 2–3 sentences max. Let white space do the work.
- **Punctuation as rhythm.** Periods create pace. Use fragments intentionally.

### Examples

> "We don't hand over a strategy deck and wish you luck."
>
> "More people. More complexity. Same problems."
>
> "Not recommendations. A running operation."

---

## Trademarks

- **Maestro AI Revenue System** is always followed by ™ on first use per page
- HTML entity: `&#8482;` or `&trade;`
- Legal line: *© 2026 RevWisely LLC. Maestro AI Revenue System™ is a trademark of RevWisely.*
