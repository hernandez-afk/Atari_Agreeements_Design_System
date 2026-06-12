import type { Person } from '@/data/mockData'
import { cn } from '@/lib/utils'

interface AvatarStackProps {
  people: Person[]
  max?: number
  className?: string
}

export function AvatarStack({ people, max = 4, className }: AvatarStackProps) {
  const visible = people.slice(0, max)
  const overflow = people.length - visible.length

  return (
    <div className={cn('flex items-center', className)}>
      {visible.map((p, i) => (
        <span
          key={i}
          title={p.name}
          style={{ backgroundColor: p.bgColor, marginLeft: i === 0 ? 0 : '-6px' }}
          className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full border-2 border-surface-background text-[10px] font-bold text-white font-poppins select-none"
        >
          {p.initial}
        </span>
      ))}
      {overflow > 0 && (
        <span
          style={{ marginLeft: '-6px' }}
          className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-full border-2 border-surface-background text-[10px] font-bold text-text-secondary bg-surface-border font-poppins select-none"
        >
          +{overflow}
        </span>
      )}
    </div>
  )
}
