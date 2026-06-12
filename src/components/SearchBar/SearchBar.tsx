// Improvements 2, 7: focus-within ring, accessible search input
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '../Icon/Icon'

export type SearchBarProps = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  variant?: 'default' | 'ai'
  className?: string
}

export function SearchBar({
  placeholder = 'Search…',
  value,
  onChange,
  variant = 'default',
  className = '',
}: SearchBarProps) {
  const [internal, setInternal] = useState('')
  const controlled = value !== undefined
  const current = controlled ? value : internal

  const handleChange = (next: string) => {
    if (!controlled) setInternal(next)
    onChange?.(next)
  }

  const isAi = variant === 'ai'

  return (
    <div
      className={cn(
        'flex items-center gap-[8px] rounded-[8px] px-xxsmall py-[6px]',
        // Improvement 7: visible focus ring on the container
        'focus-within:ring-2 focus-within:ring-ai focus-within:ring-offset-0 focus-within:border-transparent',
        isAi
          ? 'border border-ai bg-surface-background'
          : 'border border-text-secondary bg-surface-background',
        className,
      )}
    >
      <Icon name={isAi ? 'ai' : 'search'} size="small" status={isAi ? 'brown' : 'black'} />
      <input
        type="text"
        placeholder={placeholder}
        value={current}
        onChange={(e) => handleChange(e.target.value)}
        aria-label={placeholder}
        className={cn(
          'flex-1 bg-transparent font-poppins text-label outline-none min-w-0',
          isAi ? 'text-ai placeholder:text-ai' : 'text-text-primary placeholder:text-text-secondary',
        )}
      />
      {current && (
        <button
          onClick={() => handleChange('')}
          className="shrink-0 p-[2px] rounded hover:bg-surface-base3"
          aria-label="Clear search"
        >
          <Icon name="minimize" size="small" status="black" />
        </button>
      )}
    </div>
  )
}
