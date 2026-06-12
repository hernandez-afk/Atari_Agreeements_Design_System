import { useState } from 'react'
import { ChevronRight, Building } from 'lucide-react'
import { COUNTERPARTIES } from '@/data/mockData'
import { cn } from '@/lib/utils'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export function CounterpartyPage() {
  const availableLetters = Object.keys(COUNTERPARTIES)
  const [active, setActive] = useState<string>(availableLetters[0] ?? 'A')

  const names = COUNTERPARTIES[active] ?? []

  return (
    <main className="flex-1 px-medium py-medium flex flex-col gap-small">
      <h1 className="font-atari text-[22px] tracking-[0.08em] uppercase text-accent-neutral">
        Counterparty
      </h1>

      {/* Alphabet filter */}
      <div className="flex items-center gap-xxxsmall flex-wrap">
        {ALPHABET.map((letter) => {
          const hasData = availableLetters.includes(letter)
          const isActive = active === letter
          return (
            <button
              key={letter}
              disabled={!hasData}
              onClick={() => hasData && setActive(letter)}
              className={cn(
                'w-[30px] h-[30px] flex items-center justify-center rounded-full text-[13px] font-poppins font-medium transition-colors',
                isActive
                  ? 'bg-accent-neutral text-surface-background'
                  : hasData
                    ? 'text-text-primary hover:bg-surface-base'
                    : 'text-surface-border cursor-default',
              )}
            >
              {letter}
            </button>
          )
        })}
      </div>

      {/* Accordion rows */}
      <div className="bg-surface-background rounded-card border border-surface-border overflow-hidden">
        {names.length === 0 && (
          <p className="text-center text-text-secondary font-poppins text-[13px] py-xxlarge">
            No counterparties under "{active}".
          </p>
        )}
        {names.map((name, i) => (
          <button
            key={name}
            className={cn(
              'w-full flex items-center gap-small px-small py-small row-hover text-left',
              i < names.length - 1 && 'border-b border-surface-border/40',
            )}
          >
            <span className="flex-shrink-0 w-[32px] h-[32px] rounded-box bg-surface-base flex items-center justify-center">
              <Building size={16} strokeWidth={1.5} className="text-text-secondary" />
            </span>
            <span className="flex-1 text-[14px] font-poppins text-text-primary">{name}</span>
            <ChevronRight size={16} strokeWidth={1.5} className="text-text-secondary flex-shrink-0" />
          </button>
        ))}
      </div>
    </main>
  )
}
