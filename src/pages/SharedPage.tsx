import { useState } from 'react'
import { SearchBar } from '@/components'
import { SharedTable } from './components/AgreementTable'
import { SHARED_WITH_ME } from '@/data/mockData'

export function SharedPage() {
  const [query, setQuery] = useState('')

  const filtered = SHARED_WITH_ME.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="flex-1 px-medium py-medium flex flex-col gap-small">
      <div className="flex items-center justify-between gap-medium">
        <h1 className="font-atari text-[22px] tracking-[0.08em] uppercase text-accent-neutral flex-shrink-0">
          Shared with Me
        </h1>
        <div className="w-full max-w-[380px]">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search shared agreements…"
          />
        </div>
      </div>

      <SharedTable rows={filtered} />

      {filtered.length === 0 && (
        <p className="text-center text-text-secondary font-poppins text-[13px] py-xxlarge">
          No shared agreements match your search.
        </p>
      )}
    </main>
  )
}
