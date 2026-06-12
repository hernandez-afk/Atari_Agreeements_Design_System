import { useState } from 'react'
import { Bookmark, ChevronDown } from 'lucide-react'
import { TAG_GROUPS } from '@/data/mockData'
import type { TagColor } from '@/data/mockData'
import { cn } from '@/lib/utils'

interface ColorOption {
  key: TagColor | 'all'
  label: string
  swatch: string
}

const COLOR_OPTIONS: ColorOption[] = [
  { key: 'all',        label: 'All',        swatch: '' },
  { key: 'red',        label: 'Red',        swatch: '#dc2626' },
  { key: 'yellow',     label: 'Yellow',     swatch: '#ca8a04' },
  { key: 'orange',     label: 'Orange',     swatch: '#ea580c' },
  { key: 'light-green', label: 'Light Green', swatch: '#4ade80' },
  { key: 'dark-green',  label: 'Dark Green',  swatch: '#15803d' },
  { key: 'light-blue',  label: 'Light Blue',  swatch: '#38bdf8' },
  { key: 'dark-blue',   label: 'Dark Blue',   swatch: '#1d4ed8' },
]

const TAG_SWATCHES: Record<TagColor, string> = {
  'red':        '#dc2626',
  'yellow':     '#ca8a04',
  'orange':     '#ea580c',
  'light-green': '#4ade80',
  'dark-green':  '#15803d',
  'light-blue':  '#38bdf8',
  'dark-blue':   '#1d4ed8',
}

export function TagsPage() {
  const [activeColor, setActiveColor] = useState<TagColor | 'all'>('all')

  const filtered = activeColor === 'all'
    ? TAG_GROUPS
    : TAG_GROUPS.filter((t) => t.color === activeColor)

  return (
    <main className="flex-1 px-medium py-medium flex flex-col gap-small">
      <h1 className="font-atari text-[22px] tracking-[0.08em] uppercase text-accent-neutral">
        Tags
      </h1>

      {/* Color filter */}
      <div className="flex items-center gap-xxsmall flex-wrap">
        {COLOR_OPTIONS.map((opt) => {
          const isActive = activeColor === opt.key
          return (
            <button
              key={opt.key}
              onClick={() => setActiveColor(opt.key)}
              className={cn(
                'flex items-center gap-xxxsmall px-small py-xxxsmall rounded-full text-[12px] font-poppins border transition-colors whitespace-nowrap',
                isActive
                  ? 'bg-accent-neutral text-surface-background border-accent-neutral font-medium'
                  : 'text-text-secondary border-surface-border hover:bg-surface-base hover:text-text-primary',
              )}
            >
              {opt.swatch && (
                <span
                  className="w-[10px] h-[10px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: opt.swatch }}
                />
              )}
              {opt.label}
            </button>
          )
        })}

        <div className="flex-1" />
        <button className="flex items-center gap-xxxsmall px-small py-xxxsmall rounded-full text-[12px] font-poppins text-text-secondary border border-surface-border hover:bg-surface-base">
          Sort: Date Modified
          <ChevronDown size={13} strokeWidth={1.5} />
        </button>
      </div>

      {/* Tag cards grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-text-secondary font-poppins text-[13px] py-xxlarge">
          No tags with this color.
        </p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-small">
          {filtered.map((tag) => (
            <div
              key={tag.id}
              className="bg-surface-background rounded-card border border-surface-border p-medium flex flex-col gap-xsmall hover:shadow-sm cursor-pointer row-hover"
            >
              {/* Icon */}
              <span
                className="w-[36px] h-[36px] rounded-box flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: TAG_SWATCHES[tag.color] + '22' }}
              >
                <Bookmark
                  size={18}
                  strokeWidth={1.5}
                  style={{ color: TAG_SWATCHES[tag.color] }}
                />
              </span>

              {/* Title */}
              <p className="text-[14px] font-poppins font-semibold text-text-primary leading-tight">
                {tag.name}
              </p>

              {/* Description */}
              <p className="text-[12px] font-poppins text-text-secondary leading-relaxed">
                {tag.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-xsmall border-t border-surface-border/40 mt-auto">
                <span className="text-[11px] font-poppins text-text-secondary">
                  {tag.docCount} doc{tag.docCount !== 1 ? 's' : ''}
                </span>
                <span className="text-[11px] font-poppins text-text-secondary">
                  Created {tag.createdOn}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
