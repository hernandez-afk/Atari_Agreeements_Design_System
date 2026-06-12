# Agreements Design System

A warm, professional design system for document management interfaces. Inspired by boutique business tools with a retro-modern aesthetic featuring Atari branding.

## Color Palette

### Primary Colors
```css
--primary-cream: #FEFEF9;       /* Main background, cards */
--primary-brown: #4A2C24;       /* Primary actions, active states */
--primary-dark: #2B2B2B;        /* Text, headings */
--primary-muted: #6B6257;       /* Secondary text, icons */
```

### Surface Colors
```css
--surface-light: #F7F7F7;       /* Table rows, secondary surfaces */
--surface-tan: #D6C8B4;         /* Borders, dividers */
--surface-accent: #88ADBB;      /* AI features, subtle accents */
```

### Atari Brand
```css
--atari-red: #E31E24;           /* Brand logo, primary brand color */
```

## Typography

### Font Families
```css
--font-display: 'Atari 1972', sans-serif;     /* Page titles, branding */
--font-ui: 'Poppins', sans-serif;             /* Buttons, labels, UI elements */
--font-body: 'Figtree', sans-serif;           /* Body text, descriptions */
```

### Font Sizes
```css
--text-xs: 12px;                /* Status badges */
--text-sm: 14px;                /* Table cells, buttons */
--text-base: 18px;              /* Body text */
--text-lg: 24px;                /* Section headings */
--text-xl: 32px;                /* Page titles */
```

### Font Weights
```css
--weight-light: 300;
--weight-regular: 400;
--weight-bold: 700;
```

## Spacing Scale
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-8: 64px;
```

## Border Radius
```css
--radius-sm: 8px;               /* Cards, inputs */
--radius-md: 16px;              /* Buttons, containers */
--radius-lg: 30px;              /* Pills, status badges */
```

## Components

### Buttons

**Primary Button**
- Background: `var(--primary-brown)`
- Text: `var(--primary-cream)`
- Padding: `12px 16px`
- Border radius: `var(--radius-md)`
- Font: Poppins Bold, 14px

**Secondary Button**
- Background: transparent
- Text: `var(--primary-dark)`
- Padding: `8px 12px`
- Border radius: `var(--radius-md)`
- Font: Poppins Light, 14px
- Hover: `background: rgba(74, 44, 36, 0.05)`

**AI Button**
- Background: transparent
- Text: `var(--surface-accent)`
- Border: 0.8px solid `var(--surface-accent)`
- Padding: `8px 16px`
- Border radius: `var(--radius-md)`
- Icon: AI sparkle icon

### Status Badges

**Pill Badge**
- Background: `var(--primary-cream)`
- Text: `var(--primary-dark)`
- Padding: `8px 16px`
- Border radius: `var(--radius-lg)`
- Font: Poppins Bold, 12px
- States: Complete, Active, Pending, etc.

### Tables

**Header Row**
- Background: `var(--primary-cream)`
- Border: 0.8px solid `var(--surface-tan)`
- Padding: `8px`
- Font: Poppins Light, 14px
- Sortable indicators: optional arrow icons

**Data Row**
- Background: `var(--surface-light)` (alternating)
- Border right: 0.8px solid `var(--surface-tan)`
- Padding: `4px 8px`
- Font: Poppins Regular, 14px
- Hover: slight opacity change

### Icons

**Size Scale**
- Small: 18px × 18px
- Medium: 25px × 25px
- Large: 32px × 32px

**Icon Colors**
- Active: `var(--primary-dark)`
- Inactive: `var(--primary-muted)`

### Search & Inputs

**Search Bar**
- Background: `var(--primary-cream)`
- Border: 2px solid `rgba(74, 44, 36, 0.1)`
- Border radius: `var(--radius-sm)`
- Padding: `8px 24px`
- Height: 45px
- Placeholder: Poppins Regular, 14px, `var(--primary-muted)`

### Filters

**Filter Tabs**
- Active: Dark brown background, cream text
- Inactive: Transparent background, dark text
- Padding: `12px 16px`
- Border radius: `var(--radius-md)`
- Gap: `var(--space-4)`

**Custom Filter Button**
- Background: `var(--surface-light)`
- Text: `var(--primary-muted)`
- Padding: `8px 12px`
- Border radius: `var(--radius-sm)`
- Icon: Plus icon

## Layout Principles

### Container Spacing
- Page padding: `64px` horizontal, `32px` vertical
- Section gaps: `16px` vertical
- Component gaps: `8px` internal

### Grid System
- Table columns: Fixed widths for consistent alignment
- Name: 250px
- Date Modified: 220px
- AI Processing: 100px
- Status: 100px
- Type: 190px
- Location: 85px

## Design System v2 — Implementation

This repository now ships a fully implemented `src/` directory built with **Vite 6 + Tailwind CSS v4 + Radix UI + shadcn conventions**.

### Tech Stack

| Concern | Tool |
|---|---|
| Build | Vite 6.3.5 |
| Styling | Tailwind CSS 4 (CSS-first `@theme {}` in `src/app.css`) |
| Primitives | Radix UI (`@radix-ui/react-accordion`, `@radix-ui/react-checkbox`) |
| Icons | Lucide React 0.487 |
| Utilities | `clsx` + `tailwind-merge` → `cn()` in `src/lib/utils.ts` |

### Design Tokens (Tailwind v4)

All tokens live in `src/app.css` inside a `@theme {}` block — no `tailwind.config.ts` required:

```css
@theme {
  --font-atari:   "Atari 1972", serif;
  --font-figtree: "Figtree", sans-serif;
  --font-poppins: "Poppins", sans-serif;

  --color-surface-background: #fefef9;
  --color-surface-base:       #f8f5ee;
  --color-surface-border:     #d6c8b4;
  --color-text-primary:       #2b2b2b;
  --color-text-secondary:     #6b6257;
  --color-accent:             #3a4a6a;
  --color-accent-neutral:     #4a2c24;
  --color-ai:                 #88adbb;

  --spacing-xxxsmall: 4px;   /* → p-xxxsmall, gap-xxxsmall … */
  --spacing-xxsmall:  8px;
  --spacing-xsmall:   12px;
  --spacing-small:    16px;
  --spacing-medium:   24px;
  --spacing-large:    32px;
  --spacing-xlarge:   40px;
  --spacing-xxlarge:  64px;
  --spacing-xxxlarge: 128px;

  --radius-box:  16px;   /* → rounded-box  */
  --radius-card: 24px;   /* → rounded-card */
  --radius-page: 32px;   /* → rounded-page */
}
```

### Components

| Component | File | Notes |
|---|---|---|
| `<Button>` | `src/components/Button/Button.tsx` | color × saliency × size grid, full a11y |
| `<Badge>` | `src/components/Badge/Badge.tsx` | `animate` prop triggers entrance animation |
| `<SearchBar>` | `src/components/SearchBar/SearchBar.tsx` | default + ai variants |
| `<Checkbox>` | `src/components/Checkbox/Checkbox.tsx` | Radix primitive, indeterminate support |
| `<Accordion>` | `src/components/Accordion/Accordion.tsx` | Radix animated accordion |
| `<Header>` | `src/components/Header/Header.tsx` | Responsive, keyboard accessible |
| `<Icon>` | `src/components/Icon/Icon.tsx` | Lucide React wrapper, 42 named icons |
| `<EmptyState>` | `src/components/EmptyState/EmptyState.tsx` | 3 variants: no-data, no-results, error |
| `<Skeleton>` | `src/components/Skeleton/Skeleton.tsx` | Shimmer loaders + `<SkeletonTable>` |

---

## Design Improvements (Implemented)

### 1. Visual Hierarchy

Atari 1972 at full display size for every section header:

```tsx
<h2 className="font-atari text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-accent-neutral">
  Section Title
</h2>
```

### 2. Interactive States

All interactive elements include hover, focus, and active states with `200ms ease` transitions:

```tsx
// Button — example of explicit per-state classes
className="hover:bg-accent/90 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-ai focus-visible:ring-offset-2"
```

Global transition applied via `@layer base`:

```css
* {
  transition-property: color, background-color, border-color, opacity, transform, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: ease;
}
```

### 3. Icon Consistency

All 42 icons are rendered through a single `<Icon>` wrapper backed by Lucide React — no more inline SVG paths scattered across components:

```tsx
import { Icon } from '@/components'
<Icon name="key" size="small" status="brown" />
<Icon name="finance" size="medium" status="black" />
```

### 4. Responsive Behavior

Responsive padding on every layout container; header nav collapses on mobile:

```tsx
// Mobile-first horizontal padding
<main className="px-medium sm:px-large md:px-xxlarge lg:px-xxxlarge">

// Nav hidden below md breakpoint
<nav className="hidden md:flex items-center gap-xsmall">
```

### 5. Empty States

Three ready-made variants with illustrations, contextual copy, and CTA:

```tsx
// No data — first-run state
<EmptyState variant="no-data" onCta={() => createAgreement()} />

// No results — after search/filter
<EmptyState variant="no-results" onCta={() => clearFilters()} />

// Error — fetch failure
<EmptyState variant="error" onCta={() => refetch()} />
```

### 6. Loading States

Shimmer skeleton loaders that match the real table layout:

```tsx
import { SkeletonTable } from '@/components'

{isLoading ? <SkeletonTable rows={5} /> : <AgreementsTable data={agreements} />}
```

Defined in `src/app.css`:

```css
.skeleton {
  background: linear-gradient(90deg, #e8dccb 25%, #f5f0e8 50%, #e8dccb 75%);
  background-size: 400px 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
```

### 7. Accessibility

- **WCAG AA contrast** on all text/background pairings (verified against palette)
- **Global focus indicator** on every `*:focus-visible` element:

```css
*:focus-visible {
  outline: 2px solid var(--color-ai);   /* #88adbb */
  outline-offset: 2px;
  border-radius: 4px;
}
```

- **Radix primitives** for Accordion and Checkbox provide keyboard navigation and ARIA state for free
- `aria-label`, `aria-busy`, `aria-live="polite"` on relevant elements

### 8. Micro-interactions

Badge entrance, row hover highlight, and chevron rotation:

```css
/* Badge entrance */
@keyframes badge-in {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}

/* Row hover — applied via .row-hover class */
.row-hover:hover { background-color: rgba(74, 44, 36, 0.04); }
```

Accordion chevron via Radix `data-[state=open]`:

```tsx
<span className="transition-transform duration-300 group-data-[state=open]:rotate-180">
  <Icon name="expandCarrot" size="small" status="black" />
</span>
```

### 9. Typography Refinement

Optical letter-spacing per size step in the `@theme` block:

| Step | Size | Letter-spacing | Notes |
|---|---|---|---|
| Display | 64px | −0.02em | Tighter — large letterforms are wide |
| H2 | 24px | −0.01em | Slightly tight |
| H3 | 18px | 0em | Neutral |
| Label | 14px | +0.01em | Slightly open for UI clarity |
| Caption | 12px | +0.02em | Looser — small type needs air |

Combined with `font-optical-sizing: auto` on `body` for sub-pixel hinting.

### 10. Border Treatment

Borders reduced to 45% opacity for a softer, more refined appearance:

```css
/* Utility class */
.border-subtle { border-color: rgba(214, 200, 180, 0.45); }

/* Used in Tailwind as an inline value */
className="border border-subtle"
```

Replaces all `border-surface-border` (100% opacity) in table rows, cards, and dividers.
