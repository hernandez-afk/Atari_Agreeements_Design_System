import { FileText, Folder, Users, MoreHorizontal } from 'lucide-react'
import { AvatarStack } from './AvatarStack'
import type { Agreement, FileItem } from '@/data/mockData'
import { cn } from '@/lib/utils'

// ──────────────────────────────────────────────────────────────────
// Agreement table (My Agreements + Agreement Type)
// ──────────────────────────────────────────────────────────────────

interface AgreementTableProps {
  rows: Agreement[]
  className?: string
}

const AI_COLOR: Record<string, string> = {
  Complete:   'text-text-primary font-bold',
  Processing: 'text-warning font-bold',
  Pending:    'text-text-secondary',
  Failed:     'text-negative font-bold',
}

const STATUS_COLOR: Record<string, string> = {
  Active:    'text-text-primary font-bold',
  Pending:   'text-warning font-semibold',
  Draft:     'text-text-secondary font-semibold',
  Expired:   'text-negative font-semibold',
  'In Review': 'text-ai font-semibold',
}

export function AgreementTable({ rows, className }: AgreementTableProps) {
  return (
    <div className={cn('w-full bg-surface-background rounded-card border border-surface-border overflow-hidden', className)}>
      {/* Header */}
      <div className="grid grid-cols-[1fr_180px_130px_100px_170px_56px_40px] bg-surface-base border-b border-surface-border px-small py-xxsmall gap-xxsmall">
        {['Name', 'Date Modified', 'AI Processing', 'Status', 'Type', 'Location', ''].map((col) => (
          <span key={col} className="text-[11px] font-poppins font-medium text-text-secondary uppercase tracking-widest">
            {col}
          </span>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={row.id}
          className={cn(
            'grid grid-cols-[1fr_180px_130px_100px_170px_56px_40px] items-center px-small py-xxsmall gap-xxsmall row-hover cursor-pointer',
            i < rows.length - 1 && 'border-b border-surface-border/40',
          )}
        >
          {/* Name */}
          <div className="flex items-center gap-xxsmall min-w-0">
            <FileText size={16} strokeWidth={1.5} className="flex-shrink-0 text-text-secondary" />
            <span className="text-[13px] font-poppins text-text-primary truncate">{row.name}</span>
          </div>

          {/* Date */}
          <span className="text-[13px] font-poppins text-text-secondary">{row.dateModified}</span>

          {/* AI */}
          <span className={cn('text-[13px] font-poppins', AI_COLOR[row.aiStatus])}>
            {row.aiStatus}
          </span>

          {/* Status */}
          <span className={cn('text-[13px] font-poppins', STATUS_COLOR[row.status])}>
            {row.status}
          </span>

          {/* Type */}
          <span className="text-[13px] font-poppins text-text-primary truncate">{row.type}</span>

          {/* Location */}
          <span className="flex items-center">
            {row.locationIsFolder
              ? <Folder   size={16} strokeWidth={1.5} className="text-text-secondary" />
              : <Users    size={16} strokeWidth={1.5} className="text-text-secondary" />
            }
          </span>

          {/* 3-dot */}
          <button aria-label="More options" className="flex items-center justify-center w-[28px] h-[28px] rounded-box hover:bg-surface-base text-text-secondary">
            <MoreHorizontal size={16} strokeWidth={1.5} />
          </button>
        </div>
      ))}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────
// Files table (My Files)
// ──────────────────────────────────────────────────────────────────

interface FilesTableProps {
  rows: FileItem[]
  onFolderClick?: (id: string) => void
  className?: string
}

export function FilesTable({ rows, onFolderClick, className }: FilesTableProps) {
  return (
    <div className={cn('w-full bg-surface-background rounded-card border border-surface-border overflow-hidden', className)}>
      {/* Header */}
      <div className="grid grid-cols-[1fr_200px_160px_40px] bg-surface-base border-b border-surface-border px-small py-xxsmall gap-xxsmall">
        {['Name', 'Date Modified', 'Shared By', ''].map((col) => (
          <span key={col} className="text-[11px] font-poppins font-medium text-text-secondary uppercase tracking-widest">
            {col}
          </span>
        ))}
      </div>

      {rows.map((row, i) => (
        <div
          key={row.id}
          className={cn(
            'grid grid-cols-[1fr_200px_160px_40px] items-center px-small py-xxsmall gap-xxsmall row-hover cursor-pointer',
            i < rows.length - 1 && 'border-b border-surface-border/40',
          )}
          onClick={() => row.isFolder && onFolderClick?.(row.id)}
        >
          {/* Name */}
          <div className="flex items-center gap-xxsmall min-w-0">
            {row.isFolder
              ? <Folder   size={16} strokeWidth={1.5} className="flex-shrink-0 text-text-secondary" />
              : <FileText size={16} strokeWidth={1.5} className="flex-shrink-0 text-text-secondary" />
            }
            <span className="text-[13px] font-poppins text-text-primary truncate">{row.name}</span>
          </div>

          {/* Date */}
          <span className="text-[13px] font-poppins text-text-secondary">{row.dateModified}</span>

          {/* Shared By */}
          <AvatarStack people={row.sharedBy} />

          {/* 3-dot */}
          <button aria-label="More options" className="flex items-center justify-center w-[28px] h-[28px] rounded-box hover:bg-surface-base text-text-secondary">
            <MoreHorizontal size={16} strokeWidth={1.5} />
          </button>
        </div>
      ))}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────────
// Shared / Type table (Shared with me + Agreement Type)
// ──────────────────────────────────────────────────────────────────

interface SharedTableProps {
  rows: Agreement[]
  className?: string
}

export function SharedTable({ rows, className }: SharedTableProps) {
  return (
    <div className={cn('w-full bg-surface-background rounded-card border border-surface-border overflow-hidden', className)}>
      {/* Header */}
      <div className="grid grid-cols-[1fr_180px_160px_56px_40px] bg-surface-base border-b border-surface-border px-small py-xxsmall gap-xxsmall">
        {['Name', 'Date Modified', 'Shared By', 'Location', ''].map((col) => (
          <span key={col} className="text-[11px] font-poppins font-medium text-text-secondary uppercase tracking-widest">
            {col}
          </span>
        ))}
      </div>

      {rows.map((row, i) => (
        <div
          key={row.id}
          className={cn(
            'grid grid-cols-[1fr_180px_160px_56px_40px] items-center px-small py-xxsmall gap-xxsmall row-hover cursor-pointer',
            i < rows.length - 1 && 'border-b border-surface-border/40',
          )}
        >
          {/* Name */}
          <div className="flex items-center gap-xxsmall min-w-0">
            <FileText size={16} strokeWidth={1.5} className="flex-shrink-0 text-text-secondary" />
            <span className="text-[13px] font-poppins text-text-primary truncate">{row.name}</span>
          </div>

          {/* Date */}
          <span className="text-[13px] font-poppins text-text-secondary">{row.dateModified}</span>

          {/* Shared By */}
          <AvatarStack people={row.sharedBy} />

          {/* Location */}
          <span className="flex items-center">
            {row.locationIsFolder
              ? <Folder size={16} strokeWidth={1.5} className="text-text-secondary" />
              : <Users  size={16} strokeWidth={1.5} className="text-text-secondary" />
            }
          </span>

          {/* 3-dot */}
          <button aria-label="More options" className="flex items-center justify-center w-[28px] h-[28px] rounded-box hover:bg-surface-base text-text-secondary">
            <MoreHorizontal size={16} strokeWidth={1.5} />
          </button>
        </div>
      ))}
    </div>
  )
}
