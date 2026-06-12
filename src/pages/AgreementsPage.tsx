import { useState } from 'react'
import { SearchBar } from '@/components'
import { AgreementTable } from './components/AgreementTable'
import { AGREEMENTS } from '@/data/mockData'

export function AgreementsPage() {
  const [query, setQuery] = useState('')

  const filtered = AGREEMENTS.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="flex-1 px-medium py-medium flex flex-col gap-small">
      {/* Page title + search */}
      <div className="flex items-center justify-between gap-medium">
        <h1 className="font-atari text-[22px] tracking-[0.08em] uppercase text-accent-neutral flex-shrink-0">
          My Agreements
        </h1>
        <div className="w-full max-w-[380px]">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search agreements…"
          />
        </div>
      </div>

      {/* Table */}
      <AgreementTable rows={filtered} />

      {filtered.length === 0 && (
        <p className="text-center text-text-secondary font-poppins text-[13px] py-xxlarge">
          No agreements match your search.
        </p>
      )}
    </main>
  )
}
