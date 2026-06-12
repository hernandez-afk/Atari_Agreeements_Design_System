// Improvements 1, 2, 4, 7: Atari brand prominence, interactive states, responsive, focus rings
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '../Icon/Icon'

export type NavItem = {
  label: string
  href?: string
  active?: boolean
}

export type HeaderProps = {
  navItems?: NavItem[]
  userName?: string
  onSearch?: (query: string) => void
}

const DEFAULT_NAV: NavItem[] = [
  { label: 'Home' },
  { label: 'Agreements', active: true },
  { label: 'Alerts' },
  { label: 'Action Items' },
]

export function Header({ navItems = DEFAULT_NAV, userName = 'U', onSearch }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('')

  return (
    // Improvement 10: subtle border
    <header className="bg-surface-background border-b-2 border-surface-border flex items-center gap-xxlarge w-full h-[90px]">

      {/* Logo — Improvement 1: Atari 1972 at full brand prominence */}
      <div className="flex flex-col items-center justify-center pl-xxlarge pr-[40px] py-medium shrink-0">
        <div className="flex flex-col gap-[4px] items-center">
          <div className="h-[24px] w-[104px] bg-text-primary rounded-sm flex items-center justify-center">
            <span className="font-atari text-[10px] text-surface-background tracking-widest">ATARI</span>
          </div>
          <span className="font-atari text-[21px] text-text-secondary tracking-[0.05em] whitespace-nowrap leading-normal">
            Agreements
          </span>
        </div>
      </div>

      {/* Nav — Improvement 4: hidden on small screens */}
      <nav className="hidden md:flex items-center gap-xsmall shrink-0">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href ?? '#'}
            className={cn(
              'font-poppins font-bold text-label px-xsmall py-xxsmall rounded-box whitespace-nowrap',
              // Improvement 7: focus ring
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai focus-visible:ring-offset-1',
              item.active
                ? 'text-text-primary bg-[rgba(74,44,36,0.08)]'
                : 'text-text-secondary hover:text-text-primary hover:bg-[rgba(74,44,36,0.05)]',
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Search bar — Improvement 7: focus-within ring */}
      <div className="flex-1 min-w-0 max-w-[430px]">
        <div
          className={cn(
            'flex items-center border border-text-secondary rounded-[8px] px-xxsmall py-[6px] gap-[8px] bg-surface-background',
            'focus-within:ring-2 focus-within:ring-ai focus-within:border-transparent',
          )}
        >
          <Icon name="ai" size="small" status="brown" />
          <input
            type="text"
            placeholder="Do you have any questions? I can help."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value)
              onSearch?.(e.target.value)
            }}
            aria-label="AI search"
            className="flex-1 bg-transparent font-poppins text-label text-text-secondary placeholder:text-ai outline-none min-w-0"
          />
          <Icon name="search" size="small" status="black" />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-medium ml-auto pr-xxlarge shrink-0">
        <button
          className="p-[5px] hover:bg-surface-base rounded-box focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai focus-visible:ring-offset-1"
          aria-label="Inbox"
        >
          <Icon name="inbox" size="small" status="black" />
        </button>

        <div
          className="size-[40px] rounded-full bg-accent flex items-center justify-center shrink-0"
          role="img"
          aria-label={`User ${userName}`}
        >
          <span className="font-figtree font-semibold text-[18px] text-surface-background leading-none">
            {userName.charAt(0).toUpperCase()}
          </span>
        </div>

        <button
          className="size-[40px] rounded-full bg-accent-2 flex items-center justify-center hover:bg-[#2e333a] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai focus-visible:ring-offset-1"
          aria-label="Upload"
        >
          <Icon name="upload" size="small" status="white" />
        </button>
      </div>
    </header>
  )
}
