# Atari Agreements Design System

A warm, professional design system for document management interfaces. This repository combines a fully implemented React component library with Figma design specifications, enabling design-to-code synchronization.

**Status:** Production-ready (7 HiFi app pages, 9 core components, full Tailwind v4 integration)

## 🔗 Quick Links

- **[Component Library](./COMPONENTS.md)** — Complete documentation of all 9 components with examples and props
- **[Design System Reference](./DESIGN_SYSTEM.md)** — Colors, typography, spacing, tokens, and visual guidelines
- **[Figma Design System](https://www.figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System)** — Live design source
- **[Code Connect Mappings](./figma.config.ts)** — Figma-to-code component links

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Opens http://localhost:5173 with hot module reloading.

### Build for Production
```bash
npm run build
```

Outputs optimized bundle to `dist/`.

## Architecture

### Tech Stack
| Concern | Technology |
|---------|-----------|
| Build | Vite 6.3.5 |
| Framework | React + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first, `@theme {}` in `src/app.css`) |
| Primitives | Radix UI (Accordion, Checkbox) |
| Icons | Lucide React (42 named icons) |
| Utilities | `clsx` + `tailwind-merge` → `cn()` |

### Project Structure
```
src/
├── components/          # 9 core components (Button, Badge, SearchBar, etc.)
├── pages/              # 7 HiFi app pages (Agreements, Files, Shared, etc.)
├── pages/components/   # Page-specific layouts (AppHeader, AgreementTable, etc.)
├── data/              # Mock data for development
├── lib/               # Utilities (cn, tokens)
├── app.css            # Design tokens + global styles
├── App.tsx            # Router setup
└── main.tsx           # Entry point
```

## Components

| Component | File | Description |
|-----------|------|-------------|
| `<Button>` | `src/components/Button/Button.tsx` | Multi-color, multi-saliency button with icon support |
| `<Badge>` | `src/components/Badge/Badge.tsx` | Status badge with entrance animation |
| `<SearchBar>` | `src/components/SearchBar/SearchBar.tsx` | Search input with AI variant |
| `<Icon>` | `src/components/Icon/Icon.tsx` | Lucide wrapper with 42 named icons |
| `<Checkbox>` | `src/components/Checkbox/Checkbox.tsx` | Radix-based checkbox with indeterminate state |
| `<Accordion>` | `src/components/Accordion/Accordion.tsx` | Animated accordion from Radix UI |
| `<Header>` | `src/components/Header/Header.tsx` | App header with branding and search |
| `<EmptyState>` | `src/components/EmptyState/EmptyState.tsx` | Empty/no-results/error state variants |
| `<Skeleton>` | `src/components/Skeleton/Skeleton.tsx` | Shimmer loader with table variant |

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | AgreementsPage | Main table of agreements with NAME/DATE/AI/STATUS/TYPE/LOCATION columns |
| `/files` | FilesPage | Folder browser with avatar stacks |
| `/shared` | SharedPage | Shared agreements with collaborator avatars |
| `/type` | TypePage | Type filter (Service/Partnership/License/etc.) |
| `/counterparty` | CounterpartyPage | A–Z alphabet filter with accordion rows |
| `/tags` | TagsPage | Color-coded tag filter view |
| `/folder/:id` | FolderPage | Breadcrumb navigation + pagination |

## Design Tokens

All tokens defined in `src/app.css` using Tailwind v4 `@theme {}`:

### Colors
```css
--color-accent-neutral:     #4a2c24  /* Brown — primary actions */
--color-surface-background: #fefef9  /* Cream — main bg */
--color-text-primary:       #2b2b2b  /* Dark text */
--color-ai:                 #88adbb  /* Teal — AI features */
```

### Spacing Scale (8px base)
- xxxsmall: 4px
- xxsmall: 8px
- xsmall: 12px
- small: 16px
- medium: 24px
- large: 32px
- xlarge: 40px
- xxlarge: 64px
- xxxlarge: 128px

### Radius
- box: 16px (buttons, cards)
- card: 24px (containers)
- page: 32px (page padding)

### Typography
- `font-atari` — "Atari 1972" for page titles
- `font-poppins` — "Poppins" for UI/buttons
- `font-figtree` — "Figtree" for body text

## Code Connect / Design-to-Code

This project supports Figma Code Connect mappings. The `figma.config.ts` file defines component-to-code links, enabling:

- 🔗 Linked Figma designs → React source
- 📋 Automatic component documentation in Figma
- 🔄 Synchronized updates between design and code

To view mappings in Figma, open the [Design System file](https://www.figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System) and check component Code Connect tabs.

## Development Workflow

### Add a New Component

1. Create component file in `src/components/{Name}/{Name}.tsx`
2. Export from `src/components/index.ts`
3. Document in `COMPONENTS.md` with examples
4. Add Code Connect mapping to `figma.config.ts`
5. Create Figma component, link via Code Connect

### Modify Design Tokens

1. Edit `src/app.css` `@theme {}` block
2. Tokens auto-update in all components via Tailwind
3. Update `DESIGN_SYSTEM.md` reference

### Test Components

Run dev server and navigate pages to verify all components:
```bash
npm run dev
```

## Known Patterns

### SearchBar `onChange`
SearchBar's `onChange` prop receives a **string directly**, not a React event:
```tsx
// ✅ Correct
<SearchBar onChange={setQuery} />

// ❌ Wrong
<SearchBar onChange={(e) => setQuery(e.target.value)} />
```

### Icon Color Mapping
Icon colors map to text colors for consistency:
```tsx
<Icon name="download" status="brown" />   // #4a2c24
<Icon name="check" status="white" />      // For dark backgrounds
```

### Button Icon Labels
Icon-only buttons should include `aria-label`:
```tsx
<Button icon="settings" aria-label="Settings" />
```

## Attribution

- **Figma Design System:** Original at https://www.figma.com/design/kZut30JeJxBt6fsG5O1EIQ/Create-Design-System
- **Lucide Icons:** https://lucide.dev
- **Radix UI:** https://radix-ui.com

See `ATTRIBUTIONS.md` for full credits.

## License

MIT
