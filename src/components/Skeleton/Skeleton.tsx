// Improvement 6: Skeleton loaders with shimmer animation — prevents layout shift during loading
import { cn } from '@/lib/utils'

export type SkeletonProps = {
  width?: string | number
  height?: string | number
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  className?: string
}

const ROUNDED = { sm: 'rounded', md: 'rounded-lg', lg: 'rounded-xl', full: 'rounded-full' }

export function Skeleton({ width = '100%', height = 16, rounded = 'sm', className = '' }: SkeletonProps) {
  return (
    <div
      className={cn('skeleton', ROUNDED[rounded], className)}
      style={{ width, height }}
      role="presentation"
      aria-hidden="true"
    />
  )
}

export type SkeletonRowProps = {
  columns?: Array<{ width?: string | number; height?: number; rounded?: SkeletonProps['rounded'] }>
  className?: string
}

export function SkeletonRow({ columns, className = '' }: SkeletonRowProps) {
  const cols = columns ?? [
    { width: '40%', height: 14 },
    { width: '15%', height: 20, rounded: 'full' as const },
    { width: '25%', height: 14 },
    { width: '12%', height: 14 },
  ]
  return (
    <div
      className={cn('flex items-center gap-large px-large py-xsmall border-b border-subtle', className)}
      role="presentation"
    >
      {cols.map((col, i) => (
        <Skeleton key={i} width={col.width} height={col.height ?? 14} rounded={col.rounded ?? 'sm'} />
      ))}
    </div>
  )
}

export type SkeletonTableProps = {
  rows?: number
  columns?: SkeletonRowProps['columns']
  className?: string
}

export function SkeletonTable({ rows = 5, columns, className = '' }: SkeletonTableProps) {
  return (
    <div
      className={cn('bg-surface-background rounded-box border border-subtle overflow-hidden', className)}
      aria-busy="true"
      aria-label="Loading table data"
    >
      {/* Header row */}
      <div className="flex items-center gap-large px-large py-xsmall bg-surface-base border-b border-subtle">
        {(columns ?? [{ width: '40%' }, { width: '15%' }, { width: '25%' }, { width: '12%' }]).map((col, i) => (
          <Skeleton key={i} width={col.width} height={10} className="opacity-50" />
        ))}
      </div>
      {Array.from({ length: rows }, (_, i) => (
        <SkeletonRow
          key={i}
          columns={columns}
          className={i % 2 === 1 ? 'bg-[rgba(248,245,238,0.5)]' : ''}
        />
      ))}
    </div>
  )
}
