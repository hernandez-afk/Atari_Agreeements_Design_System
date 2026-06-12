import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
  current: number
  total: number
  pageSize?: number
  totalItems: number
  onPrev: () => void
  onNext: () => void
  onPage: (page: number) => void
  className?: string
}

export function Pagination({
  current,
  total,
  pageSize = 10,
  totalItems,
  onPrev,
  onNext,
  onPage,
  className,
}: PaginationProps) {
  const start = (current - 1) * pageSize + 1
  const end = Math.min(current * pageSize, totalItems)

  return (
    <div className={cn('flex items-center justify-between px-small py-xsmall text-label text-text-secondary font-poppins', className)}>
      <span className="text-[13px]">
        Viewing {start}–{end} of {totalItems}
      </span>

      <div className="flex items-center gap-xxsmall">
        <button
          onClick={onPrev}
          disabled={current <= 1}
          className="flex items-center gap-xxxsmall px-xsmall py-xxxsmall rounded-box text-[13px] text-text-primary border border-surface-border hover:bg-surface-base disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={14} strokeWidth={1.5} />
          Previous
        </button>

        {Array.from({ length: Math.min(total, 5) }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPage(page)}
            className={cn(
              'w-[32px] h-[32px] rounded-box text-[13px] font-poppins border',
              current === page
                ? 'bg-accent-neutral text-surface-background border-accent-neutral font-bold'
                : 'text-text-primary border-surface-border hover:bg-surface-base',
            )}
          >
            {page}
          </button>
        ))}

        <button
          onClick={onNext}
          disabled={current >= total}
          className="flex items-center gap-xxxsmall px-xsmall py-xxxsmall rounded-box text-[13px] text-text-primary border border-surface-border hover:bg-surface-base disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
