import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SearchBar } from '@/components'
import { SharedTable } from './components/AgreementTable'
import { AGREEMENTS } from '@/data/mockData'
import type { AgreementType } from '@/data/mockData'
import { cn } from '@/lib/utils'

const TYPES: AgreementType[] = [
  'Service',
  'Partnership',
  'License',
  'Development',
  'Non-Disclosure',
  'Employment Contract',
  'Other',
]

export function TypePage() {
  const [active, setActive] = useState<AgreementType>('Service')
  const [query, setQuery] = useState('')

  const filtered = AGREEMENTS.filter(
    (a) => a.type === active && a.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="flex-1 px-medium py-medium flex flex-col gap-small">
      <div className="flex items-center justify-between gap-medium">
        <h1 className="font-atari text-[22px] tracking-[0.08em] uppercase text-accent-neutral flex-shrink-0">
          Agreement Type
        </h1>
        <div className="w-full max-w-[380px]">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search by type…"
          />
        </div>
      </div>

      {/* Type filter pills */}
      <div className="flex items-center gap-xxsmall flex-wrap">
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={cn(
              'px-small py-xxxsmall rounded-full text-[12px] font-poppins whitespace-nowrap border transition-colors',
              active === t
                ? 'bg-accent-neutral text-surface-background border-accent-neutral font-medium'
                : 'text-text-secondary border-surface-border hover:bg-surface-base hover:text-text-primary',
            )}
          >
            {t}
          </button>
        ))}

        {/* Sort */}
        <div className="flex-1" />
        <button className="flex items-center gap-xxxsmall px-small py-xxxsmall rounded-full text-[12px] font-poppins text-text-secondary border border-surface-border hover:bg-surface-base">
          Sort: Date Modified
          <ChevronDown size={13} strokeWidth={1.5} />
        </button>
      </div>

      <SharedTable rows={filtered} />

      {filtered.length === 0 && (
        <p className="text-center text-text-secondary font-poppins text-[13px] py-xxlarge">
          No {active} agreements found.
        </p>
      )}
    </main>
  )
}
