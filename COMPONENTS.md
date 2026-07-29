# Component Library

Complete documentation of all Atari Agreements Design System components with usage examples, props, and design specifications.

## Table of Contents
- [Button](#button)
- [Badge](#badge)
- [SearchBar](#searchbar)
- [Icon](#icon)
- [Checkbox](#checkbox)
- [Accordion](#accordion)
- [Header](#header)
- [EmptyState](#emptystate)
- [Skeleton](#skeleton)

---

## Button

**File:** `src/components/Button/Button.tsx`

Customizable button component with multiple colors, saliency levels, and sizes. Full accessibility support with focus-visible rings and keyboard navigation.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Button text or content |
| `color` | `'neutral' \| 'accent' \| 'ai' \| 'negative' \| 'warning' \| 'positive'` | `'neutral'` | Color variant |
| `saliency` | `'filled' \| 'outlined' \| 'transparent'` | `'filled'` | Prominence level |
| `size` | `'big' \| 'small'` | `'big'` | Button size |
| `icon` | `IconName` | — | Icon to display alongside text |
| `disabled` | `boolean` | `false` | Disable button |
| `onClick` | `() => void` | — | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

### Color × Saliency Grid

**Filled** (most prominent)
```tsx
// Primary action
<Button color="neutral" saliency="filled">Save</Button>

// Dangerous action
<Button color="negative" saliency="filled">Delete</Button>

// Success action
<Button color="positive" saliency="filled">Confirm</Button>
```

**Outlined** (secondary)
```tsx
// Secondary action
<Button color="neutral" saliency="outlined">Cancel</Button>

// AI feature
<Button color="ai" saliency="outlined">Generate with AI</Button>
```

**Transparent** (tertiary)
```tsx
// Low emphasis
<Button color="neutral" saliency="transparent">Learn More</Button>
```

### With Icon

```tsx
<Button icon="download" color="neutral">Export</Button>
<Button icon="lock" color="negative" saliency="outlined">Lock</Button>
```

### Disabled State

```tsx
<Button disabled>Processing...</Button>
```

### Button Sizes

- **Big** (`size="big"`): 16px padding × 16px vertical, 14px bold text — use for primary CTAs
- **Small** (`size="small"`): 12px padding × 6px vertical, 12px semibold text — use in tables, cards

---

## Badge

**File:** `src/components/Badge/Badge.tsx`

Status badge component with optional entrance animation. Use for status indicators, tags, or inline labels.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Badge text |
| `variant` | `'neutral' \| 'accent' \| 'ai' \| 'negative' \| 'warning' \| 'positive'` | `'neutral'` | Color variant |
| `style` | `'filled' \| 'subtle'` | `'subtle'` | Badge style |
| `animate` | `boolean` | `false` | Play entrance animation on mount |

### Variants

**Filled** (opaque background)
```tsx
<Badge variant="neutral" style="filled">Active</Badge>
<Badge variant="positive" style="filled">Complete</Badge>
<Badge variant="negative" style="filled">Blocked</Badge>
```

**Subtle** (low contrast background)
```tsx
<Badge variant="accent" style="subtle">In Review</Badge>
<Badge variant="ai" style="subtle">AI Processed</Badge>
<Badge variant="warning" style="subtle">Pending</Badge>
```

### With Animation

```tsx
// Entrance animation on mount
<Badge animate={true} variant="positive">New!</Badge>
```

---

## SearchBar

**File:** `src/components/SearchBar/SearchBar.tsx`

Searchable input field with optional AI variant. Supports debounced search and clear button.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Input value |
| `onChange` | `(value: string) => void` | — | Change handler (receives string directly, not event) |
| `placeholder` | `string` | `'Search...'` | Placeholder text |
| `variant` | `'default' \| 'ai'` | `'default'` | Visual variant |

### Basic Usage

```tsx
const [query, setQuery] = useState('')

<SearchBar 
  value={query}
  onChange={setQuery}
  placeholder="Search agreements..."
/>
```

### AI Variant

```tsx
<SearchBar 
  value={query}
  onChange={setQuery}
  variant="ai"
  placeholder="Ask AI to find..."
/>
```

**Key:** `onChange` receives a `string` directly, not `React.ChangeEvent`. Use `onChange={setQuery}`, not `onChange={(e) => setQuery(e.target.value)}`.

---

## Icon

**File:** `src/components/Icon/Icon.tsx`

Lucide React icon wrapper with predefined size and color variants. 42 named icons available.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | — | Icon name (see list below) |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Icon size |
| `status` | `'brown' \| 'black' \| 'white'` | `'black'` | Icon color |

### Available Icons (42 total)

**Document & File Icons**
- `file`, `fileText`, `download`, `upload`, `copy`, `trash`, `archiveRestore`

**Navigation & Interaction**
- `chevronRight`, `chevronDown`, `arrowRight`, `arrowLeft`, `expandCarrot`, `home`

**Organization & Tagging**
- `folder`, `folderOpen`, `tag`, `tags`

**Search & Communication**
- `search`, `messageCircle`, `mail`, `reply`

**Security & Status**
- `lock`, `key`, `shield`, `checkCircle`, `alertCircle`, `clock`

**UI & Controls**
- `plus`, `x`, `menu`, `settings`, `bell`, `user`, `mapPin`, `heart`, `star`

**Actions & Status**
- `edit`, `check`, `pause`, `zap`, `moreHorizontal`, `eye`, `eyeOff`, `helpCircle`

### Usage

```tsx
import { Icon } from '@/components'

// Document icon, medium, black
<Icon name="file" size="medium" status="black" />

// Download action, small, brown
<Icon name="download" size="small" status="brown" />

// Large white icon for dark backgrounds
<Icon name="check" size="large" status="white" />
```

### Size Scale

| Size | Dimension | Use Case |
|------|-----------|----------|
| `small` | 18px × 18px | Inline icons, dense layouts |
| `medium` | 24px × 24px | Default, most buttons and headers |
| `large` | 32px × 32px | Prominent calls-to-action, hero sections |

---

## Checkbox

**File:** `src/components/Checkbox/Checkbox.tsx`

Accessible checkbox built on Radix UI. Supports checked, unchecked, and indeterminate states.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean \| 'indeterminate'` | — | Checkbox state |
| `onCheckedChange` | `(checked: boolean) => void` | — | Change handler |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `aria-label` | `string` | — | Accessibility label |

### Basic Usage

```tsx
const [checked, setChecked] = useState(false)

<Checkbox 
  checked={checked}
  onCheckedChange={setChecked}
  aria-label="Agree to terms"
/>
```

### Indeterminate State

Used for "select all" where some (but not all) items are selected:

```tsx
<Checkbox 
  checked="indeterminate"
  onCheckedChange={() => selectAll()}
/>
```

---

## Accordion

**File:** `src/components/Accordion/Accordion.tsx`

Animated accordion built on Radix UI. Supports single or multiple open items.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{ id: string; title: string; content: ReactNode }>` | — | Accordion items |
| `collapsible` | `boolean` | `true` | Allow collapsing open items |

### Structure

```tsx
const items = [
  {
    id: 'section-1',
    title: 'Section Title',
    content: <p>Content goes here...</p>,
  },
  {
    id: 'section-2',
    title: 'Another Section',
    content: <p>More content...</p>,
  },
]

<Accordion items={items} collapsible={true} />
```

### Styling Notes

- Chevron rotates 180° when section opens (`data-[state=open]:rotate-180`)
- Title color: `--color-text-primary` (#2b2b2b)
- Content inherits from `--color-text-secondary`
- No borders between sections — rely on vertical spacing

---

## Header

**File:** `src/components/Header/Header.tsx`

App header with Atari branding, main navigation, and AI search integration. Responsive and fully keyboard accessible.

### Features

- Atari brand logo (clickable home link)
- Primary navigation links (Agreements, Files, Shared, etc.)
- AI-powered search bar
- User avatar / profile menu (placeholder)
- Upload button

### No Props

This is a layout component—customize routes via React Router integration in `App.tsx`.

### Responsive Behavior

- **Mobile** (below `md`): Logo only, menu icon (hamburger nav not yet implemented)
- **Tablet+** (md and up): Full nav links visible

---

## EmptyState

**File:** `src/components/EmptyState/EmptyState.tsx`

Empty state component with three contextual variants. Use when no data is available, no results found, or an error occurred.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'no-data' \| 'no-results' \| 'error'` | `'no-data'` | Empty state type |
| `onCta` | `() => void` | — | CTA button click handler |
| `title` | `string` | — | Override default title |
| `description` | `string` | — | Override default description |

### Variants

**No Data** — first-run state
```tsx
<EmptyState 
  variant="no-data"
  onCta={() => createNewAgreement()}
/>
```
Shows: "No agreements yet" + "Create your first agreement" button

**No Results** — after search/filter with zero matches
```tsx
<EmptyState 
  variant="no-results"
  onCta={() => clearFilters()}
/>
```
Shows: "No results found" + "Clear filters" button

**Error** — fetch or processing failure
```tsx
<EmptyState 
  variant="error"
  onCta={() => refetch()}
/>
```
Shows: "Something went wrong" + "Try again" button

---

## Skeleton

**File:** `src/components/Skeleton/Skeleton.tsx`

Loading skeleton with shimmer animation. Use `<SkeletonTable>` variant for table layouts.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `number` | `5` | Number of rows (for table variant) |

### Basic Usage

```tsx
{isLoading ? <Skeleton rows={3} /> : <ContentComponent />}
```

### Table Skeleton

```tsx
import { SkeletonTable } from '@/components'

{isLoading && <SkeletonTable rows={10} />}
```

Matches the real table's column layout and provides realistic loading feedback.

### Animation

Shimmer effect defined in `src/app.css`:
```css
.skeleton {
  background: linear-gradient(90deg, #e8dccb 25%, #f5f0e8 50%, #e8dccb 75%);
  background-size: 400px 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
```

---

## Usage Tips

### Composition Pattern

Combine components for common patterns:

```tsx
// Search + filter combo
<>
  <SearchBar value={query} onChange={setQuery} />
  <div className="flex gap-small">
    <Button saliency="outlined">Add Filter</Button>
    <Button saliency="transparent">Advanced</Button>
  </div>
</>

// Loading state fallback
{isLoading ? <SkeletonTable /> : <AgreementTable data={data} />}

// Error recovery
{error ? <EmptyState variant="error" onCta={refetch} /> : <Content />}
```

### Styling & Customization

All components accept an optional `className` prop for additional Tailwind classes:

```tsx
<Button className="w-full">Full Width Button</Button>
<Badge className="text-xs">Custom Size Badge</Badge>
```

Tokens are defined in `src/app.css` using Tailwind v4's `@theme {}` block. Override via the className prop.

### Accessibility

- All interactive components include `focus-visible` rings (2px solid `#88adbb`)
- Radix UI primitives (Checkbox, Accordion) provide ARIA semantics
- Use `aria-label` for icon-only buttons
- SearchBar and inputs include proper `aria-busy` during loading

---

## Design Tokens Reference

See `DESIGN_SYSTEM.md` for complete color palette, typography scale, spacing units, and border radius values.

### Quick Reference

**Colors** (in `src/app.css` `@theme {}`)
- `--color-accent-neutral`: #4a2c24 (brown)
- `--color-surface-background`: #fefef9 (cream)
- `--color-ai`: #88adbb (teal)
- `--color-accent`: #3a4a6a (blue)

**Spacing** (p-xxxsmall → p-xxxlarge)
- xxxsmall: 4px | xxsmall: 8px | xsmall: 12px | small: 16px
- medium: 24px | large: 32px | xlarge: 40px
- xxlarge: 64px | xxxlarge: 128px

**Typography**
- Font families: `font-atari`, `font-poppins`, `font-figtree`
- Sizes: text-xs (12px) → text-xl (32px)
- Use: Atari 1972 for headers, Poppins for UI, Figtree for body
