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

## Design Improvements

### Recommended Enhancements

1. **Visual Hierarchy**: Increase contrast between header and body text. Use the Atari 1972 font more prominently for section headers.

2. **Interactive States**: Add clear hover, focus, and active states for all clickable elements with subtle transitions.

3. **Icon Consistency**: Replace mixed icon styles with a unified icon set (recommended: Lucide React).

4. **Responsive Behavior**: Add mobile-friendly table views with card-based layouts for smaller screens.

5. **Empty States**: Design placeholder states for empty tables with helpful call-to-action.

6. **Loading States**: Add skeleton loaders for table rows during data fetching.

7. **Accessibility**: 
   - Ensure color contrast meets WCAG AA standards
   - Add focus indicators for keyboard navigation
   - Include proper ARIA labels for interactive elements

8. **Micro-interactions**: 
   - Smooth transitions on button hover (200ms ease)
   - Row highlight on table hover
   - Filter badge animations

9. **Typography Refinement**: Use optical sizing for better readability at different scales.

10. **Border Treatment**: Reduce border opacity slightly for a softer, more refined appearance.
