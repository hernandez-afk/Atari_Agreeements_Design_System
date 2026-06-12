import { Link, useLocation } from 'react-router'
import { Sparkles, Search, Inbox, Upload } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: '/home' },
  { label: 'Agreements', to: '/' },
  { label: 'Alerts', to: '/alerts' },
  { label: 'Action Items', to: '/action-items' },
]

export function AppHeader() {
  const { pathname } = useLocation()

  return (
    <header className="w-full bg-surface-background border-b border-surface-border sticky top-0 z-30">
      <div className="flex items-center gap-medium px-medium h-[70px]">
        {/* Brand */}
        <div className="flex-shrink-0 flex items-center gap-xsmall">
          <div className="flex flex-col leading-none">
            <span
              className="font-atari text-[15px] tracking-[0.12em] uppercase"
              style={{ color: '#e31e24' }}
            >
              ATARI
            </span>
            <span className="font-poppins text-[11px] font-light text-text-secondary tracking-wide uppercase">
              Agreements
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-surface-border flex-shrink-0" />

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-xsmall flex-shrink-0">
          {NAV_LINKS.map((link) => {
            const isActive = link.to === '/'
              ? pathname === '/'
              : pathname.startsWith(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                className={[
                  'px-xsmall py-xxxsmall rounded-box text-[13px] font-poppins transition-colors',
                  isActive
                    ? 'text-text-primary font-semibold'
                    : 'text-text-secondary hover:text-text-primary',
                ].join(' ')}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* AI Search — center */}
        <div className="flex-1 flex items-center gap-xxsmall bg-surface-base border border-surface-border rounded-box px-small h-[38px] min-w-0">
          <Sparkles size={15} strokeWidth={1.5} className="flex-shrink-0 text-ai" style={{ color: '#88adbb' }} />
          <span className="flex-1 text-[13px] font-poppins text-text-secondary truncate">
            Do you have any questions? I can help.
          </span>
          <Search size={15} strokeWidth={1.5} className="flex-shrink-0 text-text-secondary" />
          <span className="hidden sm:inline flex-shrink-0 text-[12px] font-poppins font-medium px-xxsmall py-xxxsmall rounded text-ai" style={{ color: '#88adbb' }}>
            Ask AI
          </span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-xsmall flex-shrink-0">
          <button
            aria-label="Inbox"
            className="w-[34px] h-[34px] flex items-center justify-center rounded-box hover:bg-surface-base"
          >
            <Inbox size={18} strokeWidth={1.5} className="text-text-primary" />
          </button>

          {/* Avatar */}
          <button
            aria-label="Profile"
            className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[12px] font-bold font-poppins text-white flex-shrink-0"
            style={{ backgroundColor: '#e31e24' }}
          >
            U
          </button>

          {/* Upload */}
          <button
            aria-label="Upload"
            className="w-[34px] h-[34px] flex items-center justify-center rounded-full text-surface-background"
            style={{ backgroundColor: '#1a2030' }}
          >
            <Upload size={15} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  )
}
