# Design-to-Code Synchronization Guide

This guide explains how the Atari Agreements Design System maintains synchronization between Figma designs and React code through Code Connect mappings.

## Overview

Code Connect is a Figma feature that links design components to source code files. It enables:

- **Design-aware code**: Figma shows which React file implements a design component
- **Code-aware design**: Developers can jump from Figma directly to source
- **Synchronized documentation**: Component props and usage examples live in Figma, synced from code
- **Design system integrity**: Single source of truth for component specifications

## Architecture

### Files Involved

1. **`figma.config.ts`** — Metadata and prop definitions for all components
2. **React components** — `src/components/{Name}/{Name}.tsx` (single source of truth for implementation)
3. **Figma design system** — `https://figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System`

### Component Mapping Pattern

Each component has:
```
Figma Component (design)
    ↓ Code Connect link
src/components/{Name}/{Name}.tsx (implementation)
    ↓ type exports
figma.config.ts (prop definitions)
```

## Component Reference

### Button
- **Figma location**: Design System → Components → Button
- **Code file**: `src/components/Button/Button.tsx`
- **Props**: color, saliency, size, icon, disabled, onClick, type
- **Example**: `<Button color="neutral" saliency="filled">Save</Button>`

### Badge
- **Figma location**: Design System → Components → Badge
- **Code file**: `src/components/Badge/Badge.tsx`
- **Props**: variant, style, animate, children
- **Example**: `<Badge variant="positive" style="filled" animate>Complete</Badge>`

### SearchBar
- **Figma location**: Design System → Components → SearchBar
- **Code file**: `src/components/SearchBar/SearchBar.tsx`
- **Props**: value, onChange, placeholder, variant
- **Note**: onChange receives `string`, not `React.ChangeEvent`
- **Example**: `<SearchBar value={query} onChange={setQuery} />`

### Icon
- **Figma location**: Design System → Components → Icon
- **Code file**: `src/components/Icon/Icon.tsx`
- **Props**: name (42 icons), size, status
- **Example**: `<Icon name="download" size="medium" status="brown" />`

### Checkbox
- **Figma location**: Design System → Components → Checkbox
- **Code file**: `src/components/Checkbox/Checkbox.tsx`
- **Props**: checked, onCheckedChange, disabled
- **Note**: Built on Radix UI, supports indeterminate state
- **Example**: `<Checkbox checked={val} onCheckedChange={setVal} />`

### Accordion
- **Figma location**: Design System → Components → Accordion
- **Code file**: `src/components/Accordion/Accordion.tsx`
- **Props**: items, collapsible
- **Note**: Built on Radix UI with animated chevron
- **Example**: `<Accordion items={items} collapsible />`

### Header
- **Figma location**: Design System → Components → Header
- **Code file**: `src/components/Header/Header.tsx`
- **Props**: None (layout component)
- **Features**: Branding, nav links, search, avatar
- **Responsive**: Nav hidden on mobile

### EmptyState
- **Figma location**: Design System → Components → EmptyState
- **Code file**: `src/components/EmptyState/EmptyState.tsx`
- **Props**: variant, onCta, title, description
- **Variants**: no-data, no-results, error
- **Example**: `<EmptyState variant="error" onCta={refetch} />`

### Skeleton
- **Figma location**: Design System → Components → Skeleton
- **Code file**: `src/components/Skeleton/Skeleton.tsx`
- **Props**: rows (for table variant)
- **Variant**: SkeletonTable for loading table layouts
- **Example**: `<SkeletonTable rows={10} />`

## Workflow: Adding a New Component

### Step 1: Design in Figma

1. Create a new component frame in the Design System file
2. Define all states (default, hover, active, disabled)
3. Add annotations for spacing, colors, and typography
4. Export as a reusable component in Figma's library

### Step 2: Implement in React

1. Create `src/components/{Name}/{Name}.tsx`
2. Export types (e.g., `ButtonProps`, `ButtonColor`)
3. Implement all prop combinations from Figma design
4. Add `className` prop for customization
5. Include `aria-label` for icon-only components
6. Add Tailwind classes (no inline styles)

Example template:
```tsx
// src/components/NewComponent/NewComponent.tsx
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type NewComponentProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
}

export function NewComponent({ 
  children, 
  variant = 'primary', 
  disabled = false, 
  onClick 
}: NewComponentProps) {
  return (
    <button
      className={cn(
        'px-small py-xsmall rounded-box font-poppins font-bold',
        variant === 'primary' ? 'bg-accent-neutral text-surface-background' : 'bg-surface-light text-text-primary',
        disabled && 'opacity-50 cursor-not-allowed',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Step 3: Add Code Connect Mapping

1. Add entry to `figma.config.ts` components array:
```typescript
{
  name: 'NewComponent',
  figmaId: 'NewComponent',
  source: 'src/components/NewComponent/NewComponent.tsx',
  description: 'Brief description of what this component does',
  props: [
    {
      name: 'variant',
      type: "'primary' | 'secondary'",
      description: 'Component style variant',
      default: 'primary',
    },
    // ... other props
  ],
}
```

### Step 4: Link in Figma

1. Open component in Figma Design System
2. Go to Code Connect tab
3. Select "Link code" → choose your component's source file
4. Verify all props are documented

### Step 5: Document

1. Add section to `COMPONENTS.md` with:
   - File location
   - Props table
   - Usage examples
   - Visual variants
   - Accessibility notes

## Design Tokens Synchronization

Tokens are the single source of truth for consistent design. Located in `src/app.css`:

```css
@theme {
  --color-accent-neutral:     #4a2c24;
  --color-surface-background: #fefef9;
  --spacing-small:            16px;
  --radius-box:              16px;
  /* ... more tokens */
}
```

**Principle**: Components reference tokens via Tailwind utilities, not hardcoded colors:

```tsx
// ✅ Correct — uses token
className="bg-accent-neutral text-surface-background"

// ❌ Wrong — hardcoded color
className="bg-[#4a2c24]"
```

When updating a token:
1. Change value in `src/app.css`
2. All components auto-update via Tailwind
3. Update Figma color palette to match
4. Update color reference in `DESIGN_SYSTEM.md`

## Maintaining Consistency

### Between Figma and Code

- **Figma is design reference**: All visual decisions originate here
- **React is implementation source**: Code is what ships
- **Code Connect is the link**: Props in figma.config.ts must match React component types exactly
- **Documentation is secondary**: COMPONENTS.md and DESIGN_SYSTEM.md derive from Figma + code

### Between Components

- All components use the same spacing scale (xxxsmall, xxsmall, ... xxxlarge)
- All interactive components have focus-visible ring: `outline 2px solid #88adbb`
- All animations use 200ms ease transition
- All text colors come from `--color-text-*` tokens
- All borders use `--color-surface-border` at 45% opacity

### Version Control

Use Git to track:
- `figma.config.ts` changes (component additions/props)
- `src/components/` changes (implementations)
- `COMPONENTS.md` changes (documentation)
- `DESIGN_SYSTEM.md` changes (token updates)

**Don't commit**:
- Generated Figma exports (use `/figma-generate-design` CLI when needed)
- node_modules/ (already in .gitignore)

## Workflow: Updating an Existing Component

### Scenario: Add new prop to Button

1. **Update React component**:
   ```tsx
   // In src/components/Button/Button.tsx
   export type ButtonProps = {
     // ... existing props
     loading?: boolean  // NEW
   }
   ```

2. **Update Code Connect mapping**:
   ```typescript
   // In figma.config.ts, Button entry
   props: [
     // ... existing props
     {
       name: 'loading',
       type: 'boolean',
       description: 'Show loading spinner in button',
       default: false,
     },
   ]
   ```

3. **Document in guide**:
   ```markdown
   // In COMPONENTS.md, Button section
   | `loading` | `boolean` | `false` | Show loading state |
   ```

4. **Update Figma design**:
   - Create a "Loading" state variant in Figma
   - Check Code Connect tab—loading prop should now appear

5. **Commit**:
   ```bash
   git add src/components/Button/Button.tsx figma.config.ts COMPONENTS.md
   git commit -m "feat(Button): add loading state prop"
   ```

## Troubleshooting

### Code Connect not showing props

**Cause**: `figma.config.ts` entry doesn't match actual component types

**Fix**: 
1. Open React component file
2. Check exact prop names and types
3. Update figma.config.ts to match exactly
4. Reload Figma

### Prop type mismatch between Figma and code

**Cause**: figma.config.ts prop type string doesn't match TypeScript type

**Example**:
```typescript
// figma.config.ts — WRONG
type: 'primary | secondary'

// Should be
type: "'primary' | 'secondary'"  // Quoted strings for union types
```

### Component looks different in code vs. Figma

**Cause**: Tailwind class name mismatch or token value changed

**Debug**:
1. Check Figma design tokens against `src/app.css` values
2. Run `npm run dev` and inspect element styles
3. Check for any CSS overrides in `src/components/{Name}/` or `src/app.css`

## Resources

- **Figma Code Connect docs**: https://www.figma.com/developers/guides/code-connect/
- **Project repo**: https://github.com/hernandez-afk/Atari_Agreeements_Design_System
- **Design System**: https://figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System
- **Component Storybook** (future): Would show interactive examples of all components

## Best Practices

1. **Keep props minimal** — only expose what's semantically necessary
2. **Use tokens** — never hardcode colors, spacing, or sizing
3. **Document with examples** — include 3–4 usage patterns in COMPONENTS.md
4. **Test accessibility** — keyboard nav, screen reader, focus states
5. **Update both places** — if you change code, update figma.config.ts
6. **Review Code Connect** — before shipping, verify all props are linked in Figma
7. **Version your components** — semantic versioning in package.json or docs
