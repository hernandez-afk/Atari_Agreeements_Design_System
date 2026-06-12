import { useState } from 'react'
import {
  Header, Button, Accordion, SearchBar, Checkbox, Badge, Icon,
  EmptyState, SkeletonTable,
} from '@/components'
import type { IconName } from '@/components'
import { colors } from '@/tokens'
import { cn } from '@/lib/utils'

const ALL_ICONS: IconName[] = [
  'key', 'finance', 'dates', 'business', 'technical', 'legal',
  'status', 'menu', 'folder', 'document', 'addFolder', 'download',
  'people', 'share', 'expand', 'expandCarrot', 'trash', 'relocate',
  'pin', 'pinned', 'counterparty', 'text', 'home', 'clock', 'info',
  'save', 'export', 'syncDocs', 'actionItems', 'edit', 'editHistory',
  'search', 'add', 'checkbox', 'tag', 'number', 'minimize', 'ai',
  'inbox', 'upload', 'logOut', 'gmailUser',
]

// Improvement 1: Atari 1972 font at full display prominence for section headers
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-xxlarge">
      <h2 className="font-atari text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-accent-neutral mb-large border-b-[3px] border-accent-neutral pb-small">
        {title}
      </h2>
      {children}
    </section>
  )
}

function ColorSwatch({ name, hex, description }: { name: string; hex: string; description: string }) {
  return (
    <div className="flex flex-col gap-[8px] shrink-0">
      {/* Improvement 10: subtle border on swatches */}
      <div className="size-[80px] rounded-card border border-subtle" style={{ background: hex }} />
      <div className="flex flex-col gap-[2px]">
        <p className="font-poppins text-label text-text-primary">{name}</p>
        <p className="font-poppins font-light text-caption text-text-secondary">{description}</p>
        <p className="font-poppins font-light text-caption text-text-secondary opacity-60">{hex}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [checked, setChecked] = useState(false)
  const [search, setSearch] = useState('')
  const [showSkeleton, setShowSkeleton] = useState(true)

  return (
    <div className="min-h-screen bg-surface-base">
      <Header />

      {/* Improvement 4: Responsive horizontal padding */}
      <main className="px-medium sm:px-large md:px-xxlarge lg:px-xxxlarge py-xxlarge max-w-[1440px] mx-auto">

        {/* Improvement 9: Typography with optical sizing */}
        <Section title="Typography">
          <div className="flex flex-col gap-medium">
            {[
              { meta: 'Display / H1 — Atari 1972, 64px, ls −0.02em', cls: 'font-atari text-display text-text-primary', text: 'Agreements' },
              { meta: 'H2 — Figtree SemiBold, 24px, ls −0.01em', cls: 'font-figtree font-semibold text-h2 text-text-primary', text: 'Agreement Details' },
              { meta: 'H3 — Figtree SemiBold, 18px', cls: 'font-figtree font-semibold text-h3 text-text-primary', text: 'Section Header' },
              { meta: 'Body Large — Figtree 400, 32px', cls: 'font-figtree text-body-lg text-text-secondary', text: 'Supporting body text' },
              { meta: 'Label — Poppins 400, 14px, ls +0.01em', cls: 'font-poppins text-label text-text-primary', text: 'Default label text' },
              { meta: 'Label Bold — Poppins 700, 14px', cls: 'font-poppins font-bold text-label-bold text-text-primary', text: 'Bold label text' },
              { meta: 'Caption — Poppins Light, 12px, ls +0.02em', cls: 'font-poppins font-light text-caption text-text-secondary', text: 'Caption / metadata text' },
            ].map(({ meta, cls, text }) => (
              <div key={meta}>
                <p className="font-poppins text-caption text-text-secondary mb-xxsmall">{meta}</p>
                <p className={cls}>{text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Colors — Improvement 10: subtle borders on swatch panels */}
        <Section title="Color Scheme">
          <div className="flex flex-col gap-xxlarge">
            {[
              {
                label: 'Neutrals',
                swatches: [
                  { name: 'Background', hex: colors.surface.background, description: 'Page background' },
                  { name: 'Surface Base', hex: colors.surface.base, description: 'Primary UI components' },
                  { name: 'Surface Base 3', hex: colors.surface.base3, description: 'Borders / dividers' },
                  { name: 'Border', hex: colors.surface.border, description: 'Component borders' },
                ],
              },
              {
                label: 'Text',
                swatches: [
                  { name: 'Primary', hex: colors.text.primary, description: 'Main text' },
                  { name: 'Secondary', hex: colors.text.secondary, description: 'Supporting / inactive' },
                ],
              },
              {
                label: 'Accents',
                swatches: [
                  { name: 'Accent Neutral', hex: colors.accent.neutral, description: 'General accent / buttons' },
                  { name: 'Accent', hex: colors.accent.default, description: 'Primary accent' },
                  { name: 'Accent 2', hex: colors.accent.secondary, description: 'Shading for accent' },
                  { name: 'AI', hex: colors.ai.default, description: 'AI feature indicator' },
                ],
              },
              {
                label: 'Severity',
                swatches: [
                  { name: 'Negative', hex: colors.severity.negative, description: 'Error / delete' },
                  { name: 'Negative Hover', hex: colors.severity.negativeHover, description: 'Hover state' },
                  { name: 'Warning', hex: colors.severity.warning, description: 'Warning labels' },
                  { name: 'Warning Hover', hex: colors.severity.warningHover, description: 'Warning hover' },
                  { name: 'Positive', hex: colors.severity.positive, description: 'Success labels' },
                  { name: 'Positive Hover', hex: colors.severity.positiveHover, description: 'Positive hover' },
                ],
              },
            ].map(({ label, swatches }) => (
              <div key={label}>
                <h3 className="font-figtree font-semibold text-h3 text-text-primary mb-medium">{label}</h3>
                <div className="flex flex-wrap gap-large bg-surface-background rounded-card p-xxlarge border border-subtle">
                  {swatches.map((s) => <ColorSwatch key={s.name} {...s} />)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Buttons — Improvements 2, 8 */}
        <Section title="Buttons">
          <div className="flex flex-col gap-large">
            {[
              { label: 'Filled', saliency: 'filled' as const, bg: '' },
              { label: 'Outlined', saliency: 'outlined' as const, bg: '' },
              { label: 'Transparent', saliency: 'transparent' as const, bg: 'bg-surface-background p-medium rounded-card' },
            ].map(({ label, saliency, bg }) => (
              <div key={label}>
                <p className="font-poppins font-bold text-label-bold text-text-primary mb-medium">{label}</p>
                <div className={cn('flex flex-wrap gap-medium items-center', bg)}>
                  {(['neutral', 'accent', 'ai', 'negative', 'warning', 'positive'] as const)
                    .filter((c) => saliency === 'transparent' ? ['neutral', 'accent', 'negative'].includes(c) : true)
                    .map((color) => (
                      <Button key={color} color={color} saliency={saliency} icon="key">
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </Button>
                    ))}
                </div>
              </div>
            ))}
            <div>
              <p className="font-poppins font-bold text-label-bold text-text-primary mb-medium">Sizes & States</p>
              <div className="flex flex-wrap gap-medium items-center">
                <Button color="neutral" saliency="filled" size="big" icon="key">Big</Button>
                <Button color="neutral" saliency="filled" size="small" icon="key">Small</Button>
                <Button color="neutral" saliency="filled" disabled icon="key">Disabled</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Badges — Improvement 8: badge-in animation */}
        <Section title="Badges">
          <div className="flex flex-col gap-medium">
            <div className="flex flex-wrap gap-medium items-center">
              {(['neutral', 'accent', 'ai', 'negative', 'warning', 'positive'] as const).map((v) => (
                <Badge key={v} variant={v} animate>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-medium items-center">
              {(['neutral', 'accent', 'negative', 'warning', 'positive'] as const).map((v) => (
                <Badge key={v} variant={v} style="filled" animate>
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </Section>

        {/* Search Bars — Improvement 7 */}
        <Section title="Search Bar">
          <div className="flex flex-col gap-medium max-w-[480px]">
            <SearchBar placeholder="Search agreements…" value={search} onChange={setSearch} />
            <SearchBar placeholder="Do you have any questions? I can help." variant="ai" />
          </div>
        </Section>

        {/* Checkbox — Improvements 7, 10 */}
        <Section title="Checkbox">
          <div className="flex flex-col gap-medium">
            <Checkbox label="Unchecked" checked={checked} onChange={setChecked} />
            <Checkbox label="Checked" checked={true} />
            <Checkbox label="Indeterminate" indeterminate={true} />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Disabled checked" checked disabled />
          </div>
        </Section>

        {/* Accordion — Improvements 2, 7, 8 */}
        <Section title="Accordion">
          <div className="max-w-[600px] bg-surface-background rounded-card overflow-hidden border border-subtle">
            <Accordion
              items={[
                { id: 'key', title: 'Key Terms', icon: 'key', defaultOpen: true, content: 'This section covers the key terms including parties involved, effective date, and the subject matter of the contract.' },
                { id: 'finance', title: 'Financial Details', icon: 'finance', content: 'Payment schedules, amounts, currency, invoicing terms and any applicable taxes.' },
                { id: 'dates', title: 'Important Dates', icon: 'dates', content: 'Start date, end date, renewal windows, and any milestone dates relevant to this agreement.' },
                { id: 'legal', title: 'Legal Provisions', icon: 'legal', content: 'Governing law, dispute resolution, indemnification, and liability limitations.' },
              ]}
            />
          </div>
        </Section>

        {/* Empty States — Improvement 5 */}
        <Section title="Empty States">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-large">
            {(['no-data', 'no-results', 'error'] as const).map((variant) => (
              <div key={variant} className="bg-surface-background rounded-box border border-subtle overflow-hidden">
                <div className="bg-surface-base px-medium py-xsmall border-b border-subtle">
                  <span className="font-poppins font-bold text-caption text-text-secondary uppercase tracking-[0.08em]">
                    {variant === 'no-data' ? 'No Data' : variant === 'no-results' ? 'No Results' : 'Error State'}
                  </span>
                </div>
                <EmptyState
                  variant={variant}
                  onCta={() => {}}
                  secondaryLabel={variant !== 'error' ? 'Learn more' : undefined}
                  onSecondary={variant !== 'error' ? () => {} : undefined}
                />
              </div>
            ))}
          </div>
        </Section>

        {/* Loading States — Improvement 6 */}
        <Section title="Loading States">
          <div className="flex flex-col gap-medium">
            <div className="flex items-center gap-medium">
              <p className="font-poppins font-bold text-label-bold text-text-primary">
                {showSkeleton ? 'Skeleton loading…' : 'Data loaded'}
              </p>
              <Button
                color="neutral" saliency="outlined" size="small"
                icon={showSkeleton ? 'status' : 'syncDocs'}
                onClick={() => setShowSkeleton(!showSkeleton)}
              >
                {showSkeleton ? 'Show data' : 'Show skeleton'}
              </Button>
            </div>
            {showSkeleton ? (
              <SkeletonTable rows={5} />
            ) : (
              <div className="bg-surface-background rounded-box border border-subtle overflow-hidden">
                {[
                  { name: 'Vendor Agreement 2026', status: 'Active', party: 'Acme Corp' },
                  { name: 'NDA — Q1 2026', status: 'Pending', party: 'BetaCo' },
                  { name: 'License Deal', status: 'Expired', party: 'GammaSoft' },
                  { name: 'Service Agreement', status: 'Active', party: 'Delta Inc' },
                  { name: 'Consulting Contract', status: 'Pending', party: 'Epsilon Ltd' },
                ].map((row, i) => (
                  // Improvement 8: row-hover highlight
                  <div
                    key={i}
                    className={cn(
                      'row-hover flex items-center gap-large px-large py-xsmall border-b border-subtle last:border-0',
                      i % 2 === 1 && 'bg-[rgba(248,245,238,0.5)]',
                    )}
                  >
                    <span className="font-poppins font-bold text-label text-text-primary flex-1">{row.name}</span>
                    <Badge
                      variant={row.status === 'Active' ? 'positive' : row.status === 'Pending' ? 'warning' : 'negative'}
                      animate
                    >
                      {row.status}
                    </Badge>
                    <span className="font-poppins text-label text-text-secondary w-[120px]">{row.party}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Section>

        {/* Icons — Improvement 3: Lucide React unified icon set */}
        <Section title="Icons">
          <div className="flex flex-col gap-large">
            {(['brown', 'black', 'white'] as const).map((status) => (
              <div key={status}>
                <p className="font-poppins font-bold text-label-bold text-text-primary mb-medium capitalize">
                  {status === 'brown' ? 'Brown (accent neutral)' : status === 'black' ? 'Black (primary text)' : 'White (on dark)'}
                </p>
                <div className={cn(
                  'flex flex-wrap gap-[20px] p-medium rounded-card border border-subtle',
                  status === 'white' ? 'bg-accent-2' : 'bg-surface-background',
                )}>
                  {ALL_ICONS.map((name) => (
                    <div key={name} className="flex flex-col items-center gap-[6px]" title={name}>
                      <Icon name={name} size="small" status={status} />
                      <span className={cn('font-poppins text-[9px]', status === 'white' ? 'text-surface-background' : 'text-text-secondary')}>
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Spacing — Improvement 10: subtle row dividers */}
        <Section title="Spacing System">
          <div className="bg-surface-background rounded-card overflow-hidden border border-subtle">
            {[
              { name: 'XXXSmall', px: 4, desc: 'Tight internal component gaps' },
              { name: 'XXSmall', px: 8, desc: 'Small component padding' },
              { name: 'XSmall', px: 12, desc: 'Medium component padding' },
              { name: 'Small', px: 16, desc: 'Standard component padding' },
              { name: 'Medium', px: 24, desc: 'Component group spacing' },
              { name: 'Large', px: 32, desc: 'Section spacing / layout' },
              { name: 'XLarge', px: 40, desc: 'Generous layout spacing' },
              { name: 'XXLarge', px: 64, desc: 'Page-level spacing' },
              { name: 'XXXLarge', px: 128, desc: 'Hero / large page sections' },
            ].map(({ name, px, desc }, i, arr) => (
              // Improvement 8: row-hover on spacing rows
              <div
                key={name}
                className={cn(
                  'row-hover flex items-center px-[40px] py-[8px]',
                  i < arr.length - 1 && 'border-b border-subtle',
                )}
              >
                <span className="font-poppins font-light text-caption text-text-primary w-[120px]">{name}</span>
                <div className="flex items-center gap-[8px] w-[200px]">
                  <div className="h-[24px] bg-accent rounded-[2px]" style={{ width: `${Math.min(px, 160)}px` }} />
                  <span className="font-poppins text-label text-text-primary">{px}px</span>
                </div>
                <span className="font-poppins text-label text-text-secondary flex-1">{desc}</span>
              </div>
            ))}
          </div>
        </Section>

      </main>
    </div>
  )
}
