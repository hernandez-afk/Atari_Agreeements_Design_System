import { Link, useLocation } from 'react-router'
import { FileText, Folder, SlidersHorizontal, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Tab {
  label: string
  to: string
  icon?: React.ReactNode
}

const TABS: Tab[] = [
  { label: 'My Agreements', to: '/',            icon: <FileText size={14} strokeWidth={1.5} /> },
  { label: 'My Files',      to: '/files',        icon: <Folder   size={14} strokeWidth={1.5} /> },
  { label: 'Shared with me',  to: '/shared' },
  { label: 'Agreement Type',  to: '/type' },
  { label: 'Counterparty',    to: '/counterparty' },
  { label: 'Tags',            to: '/tags' },
]

const SEPARATOR_AFTER = 1 // insert a divider after index 1 (My Files)

export function PageSubHeader() {
  const { pathname } = useLocation()

  return (
    <div className="w-full bg-surface-background border-b border-surface-border">
      <div className="flex items-center gap-xxxsmall px-medium overflow-x-auto">
        {TABS.map((tab, i) => {
          const isActive = tab.to === '/'
            ? pathname === '/'
            : pathname === tab.to || pathname.startsWith(tab.to + '/')

          return (
            <div key={tab.to} className="flex items-center gap-xxxsmall flex-shrink-0">
              {/* Separator after My Files */}
              {i === SEPARATOR_AFTER + 1 && (
                <div className="h-5 w-px bg-surface-border mx-xxsmall flex-shrink-0" />
              )}

              <Link
                to={tab.to}
                className={cn(
                  'flex items-center gap-xxxsmall px-small py-xxsmall my-xxsmall rounded-full text-[13px] font-poppins whitespace-nowrap transition-colors',
                  isActive
                    ? 'bg-accent-neutral text-surface-background font-medium'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-base',
                )}
              >
                {tab.icon && <span className={isActive ? 'opacity-100' : 'opacity-60'}>{tab.icon}</span>}
                {tab.label}
              </Link>
            </div>
          )
        })}

        {/* Push right */}
        <div className="flex-1" />

        {/* Custom Filters */}
        <Link
          to="/filters"
          className="flex items-center gap-xxxsmall px-small py-xxsmall my-xxsmall rounded-full text-[13px] font-poppins text-text-secondary border border-surface-border hover:bg-surface-base whitespace-nowrap flex-shrink-0"
        >
          <SlidersHorizontal size={13} strokeWidth={1.5} />
          Custom Filters
        </Link>

        {/* Add */}
        <button
          aria-label="Add"
          className="w-[30px] h-[30px] flex-shrink-0 flex items-center justify-center rounded-full bg-accent-neutral text-surface-background hover:bg-accent-neutral/90 my-xxsmall ml-xxsmall"
        >
          <Plus size={14} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
