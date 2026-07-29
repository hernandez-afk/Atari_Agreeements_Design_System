# Atari Agreements Design System — Documentation Index

Complete guide to the Atari Agreements Design System, including component library, design tokens, design-to-code workflow, and development guidelines.

## 📚 Documentation Map

### Getting Started
- **[README.md](./README.md)** — Project overview, installation, architecture, and quick start

### Component Library
- **[COMPONENTS.md](./COMPONENTS.md)** — Comprehensive documentation of all 9 components
  - Button (color × saliency × size grid)
  - Badge (filled & subtle variants)
  - SearchBar (default & AI variants)
  - Icon (42 named icons)
  - Checkbox (Radix UI, indeterminate state)
  - Accordion (animated, Radix UI)
  - Header (app branding & nav)
  - EmptyState (3 variants: no-data, no-results, error)
  - Skeleton (with SkeletonTable)
  - Each section includes: props table, usage examples, accessibility notes

### Design System Reference
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** — Design tokens, color palette, typography scale
  - Colors (primary, surface, brand)
  - Typography (fonts, sizes, weights)
  - Spacing scale (xxxsmall → xxxlarge)
  - Border radius (box, card, page)
  - Layout principles & grid system
  - Micro-interactions & animations
  - WCAG AA accessibility specs

### Design-to-Code Sync
- **[CODE_CONNECT_GUIDE.md](./CODE_CONNECT_GUIDE.md)** — Figma Code Connect workflow
  - How Code Connect links design to code
  - Component mapping pattern (Figma → React → figma.config.ts)
  - Full component reference with locations
  - Workflow for adding new components
  - Design token synchronization
  - Maintaining consistency
  - Troubleshooting

### Technical Config
- **[figma.config.ts](./figma.config.ts)** — Code Connect metadata
  - Component-to-code mappings
  - Prop definitions for all components
  - Figma file references

---

## 🎯 Quick Navigation by Role

### I'm a Designer
1. Start with [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for design tokens and guidelines
2. Reference [COMPONENTS.md](./COMPONENTS.md) for component specs
3. Check [Figma Design System](https://www.figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System) for source of truth
4. Use [CODE_CONNECT_GUIDE.md](./CODE_CONNECT_GUIDE.md) when creating new components

### I'm a Developer
1. Start with [README.md](./README.md) for setup and architecture
2. Reference [COMPONENTS.md](./COMPONENTS.md) for component APIs
3. Check [CODE_CONNECT_GUIDE.md](./CODE_CONNECT_GUIDE.md) for design-code workflow
4. Use [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for design token values

### I'm Adding a New Component
1. Design in Figma using [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) tokens
2. Implement in React following patterns in [COMPONENTS.md](./COMPONENTS.md)
3. Add Code Connect mapping to [figma.config.ts](./figma.config.ts)
4. Document in [COMPONENTS.md](./COMPONENTS.md) with examples
5. Follow [CODE_CONNECT_GUIDE.md](./CODE_CONNECT_GUIDE.md) step-by-step

### I'm Updating Design Tokens
1. Edit values in `src/app.css` `@theme {}` block
2. Update references in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
3. Verify all components reflect new tokens (npm run dev)
4. Update Figma palette to match

---

## 📋 File Structure

```
Atari_Agreeements_Design_System/
│
├── README.md                  # Project overview, setup, architecture
├── DOCUMENTATION.md           # This file — navigation guide
├── COMPONENTS.md              # Component library docs (all 9 components)
├── DESIGN_SYSTEM.md           # Design tokens, colors, typography
├── CODE_CONNECT_GUIDE.md      # Design-to-code workflow & patterns
├── figma.config.ts            # Code Connect metadata
│
├── src/
│   ├── components/            # 9 core components
│   │   ├── Button/
│   │   ├── Badge/
│   │   ├── SearchBar/
│   │   ├── Icon/
│   │   ├── Checkbox/
│   │   ├── Accordion/
│   │   ├── Header/
│   │   ├── EmptyState/
│   │   └── Skeleton/
│   │
│   ├── pages/                 # 7 HiFi app pages
│   │   ├── AgreementsPage
│   │   ├── FilesPage
│   │   ├── SharedPage
│   │   ├── TypePage
│   │   ├── CounterpartyPage
│   │   ├── TagsPage
│   │   └── FolderPage
│   │
│   ├── pages/components/      # Page layouts
│   │   ├── AppHeader
│   │   ├── PageSubHeader
│   │   ├── AgreementTable
│   │   ├── AvatarStack
│   │   └── Pagination
│   │
│   ├── data/
│   │   └── mockData.ts        # Mock agreements, files, users, etc.
│   │
│   ├── lib/
│   │   ├── utils.ts           # cn() utility
│   │   └── tokens.ts          # Token references
│   │
│   ├── app.css                # Design tokens + global styles
│   ├── App.tsx                # Router setup
│   └── main.tsx               # Entry point
│
└── package.json               # Dependencies, scripts
```

---

## 🔗 External Resources

- **[Figma Design System](https://www.figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System)** — Live design source of truth
- **[GitHub Repository](https://github.com/hernandez-afk/Atari_Agreeements_Design_System)** — Source code
- **[Lucide Icons](https://lucide.dev)** — Icon library (42 icons available)
- **[Radix UI](https://radix-ui.com)** — Accessible primitives (Accordion, Checkbox)
- **[Tailwind CSS v4](https://tailwindcss.com)** — Styling framework with CSS-first `@theme {}`
- **[Figma Code Connect](https://www.figma.com/developers/guides/code-connect/)** — Design-code linking docs

---

## 🚀 Development Workflow

### 1. Start Dev Server
```bash
npm install
npm run dev
```

### 2. Make Changes
- **Component changes**: Edit `src/components/{Name}/`
- **Design token changes**: Edit `src/app.css` `@theme {}`
- **Page changes**: Edit `src/pages/`

### 3. Hot Reload
Vite automatically reloads on file save. No manual rebuild needed.

### 4. Test in Browser
```
http://localhost:5173
```

Navigate all 7 pages and test component interactions.

### 5. Build for Production
```bash
npm run build
```

Outputs optimized bundle to `dist/` (Vite/Rollup).

### 6. Commit & Push
```bash
git add .
git commit -m "feat(Button): add loading state"
git push
```

---

## 💡 Key Concepts

### Design Tokens (Single Source of Truth)
All colors, spacing, sizing, and typography live in `src/app.css` `@theme {}`. Components reference tokens via Tailwind utilities, not hardcoded values.

**Example**:
```tsx
// ✅ Correct — uses token
className="bg-accent-neutral text-surface-background"

// ❌ Wrong — hardcoded color
className="bg-[#4a2c24] text-[#fefef9]"
```

### Code Connect (Design-Code Link)
`figma.config.ts` defines how React components map to Figma designs. Enables jumping between design and code, synced prop documentation, and design integrity checks.

### Component Composition
Combine small, focused components for common patterns:
```tsx
<>
  <SearchBar value={query} onChange={setQuery} />
  <Button icon="filter">Advanced</Button>
</>
```

### Accessibility First
- All interactive components support keyboard navigation
- Radix UI primitives provide ARIA semantics automatically
- Global focus ring on all `*:focus-visible` elements
- WCAG AA color contrast verified on all text/background pairs

---

## 📞 Support & Contribution

### Reporting Issues
- **Bug in component**: Open issue on [GitHub](https://github.com/hernandez-afk/Atari_Agreeements_Design_System)
- **Design discrepancy**: Check [CODE_CONNECT_GUIDE.md](./CODE_CONNECT_GUIDE.md) troubleshooting
- **Documentation unclear**: Suggest improvements in issues

### Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feat/new-component`)
3. Follow patterns in [CODE_CONNECT_GUIDE.md](./CODE_CONNECT_GUIDE.md)
4. Add tests for new components (future: Storybook)
5. Document in [COMPONENTS.md](./COMPONENTS.md)
6. Update [figma.config.ts](./figma.config.ts) with Code Connect mapping
7. Submit PR with design and code changes

---

## ✅ Checklist: Adding a New Component

Use this checklist when adding a component to the design system:

- [ ] **Design**: Create component frame(s) in Figma with all states
- [ ] **Implement**: Create `src/components/{Name}/{Name}.tsx`
  - [ ] TypeScript types exported (Props, enums)
  - [ ] Tailwind utilities used (no inline styles)
  - [ ] Accessibility features (aria-label, focus ring, etc.)
  - [ ] `className` prop for customization
- [ ] **Configure**: Add entry to `figma.config.ts` with props
- [ ] **Document**: Add section to `COMPONENTS.md`
  - [ ] Props table
  - [ ] 3–4 usage examples
  - [ ] Design notes / visual variants
  - [ ] Accessibility notes
- [ ] **Test**: `npm run dev` and test all props & states
- [ ] **Code Connect**: Link in Figma (Code Connect tab)
- [ ] **Commit**: Git commit with all files updated

---

## 🎯 Next Steps

1. **Read [README.md](./README.md)** for project overview
2. **Check [COMPONENTS.md](./COMPONENTS.md)** for component you want to use
3. **Reference [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** for design token values
4. **Follow [CODE_CONNECT_GUIDE.md](./CODE_CONNECT_GUIDE.md)** for adding/updating components
5. **Open [Figma Design System](https://www.figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System)** for source of truth

---

**Last Updated**: 2026-07-29  
**Design System Version**: 2.0 (Tailwind v4, React 19)  
**Status**: Production-ready ✅
