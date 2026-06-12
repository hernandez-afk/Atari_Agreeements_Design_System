import { useState } from 'react'
import { useNavigate } from 'react-router'
import { SearchBar } from '@/components'
import { FilesTable } from './components/AgreementTable'
import { FILES } from '@/data/mockData'

export function FilesPage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filtered = FILES.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <main className="flex-1 px-medium py-medium flex flex-col gap-small">
      <div className="flex items-center justify-between gap-medium">
        <h1 className="font-atari text-[22px] tracking-[0.08em] uppercase text-accent-neutral flex-shrink-0">
          My Files
        </h1>
        <div className="w-full max-w-[380px]">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search files…"
          />
        </div>
      </div>

      <FilesTable
        rows={filtered}
        onFolderClick={(id) => navigate(`/folder/${id}`)}
      />

      {filtered.length === 0 && (
        <p className="text-center text-text-secondary font-poppins text-[13px] py-xxlarge">
          No files match your search.
        </p>
      )}
    </main>
  )
}
