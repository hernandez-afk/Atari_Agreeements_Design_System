// Improvement 8: badge-in animation on mount
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type BadgeVariant = 'neutral' | 'accent' | 'ai' | 'negative' | 'warning' | 'positive'
export type BadgeStyle   = 'filled' | 'subtle'

export type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  style?: BadgeStyle
  animate?: boolean
  className?: string
}

const FILLED: Record<BadgeVariant, string> = {
  neutral:  'bg-accent-neutral text-surface-background',
  accent:   'bg-accent text-surface-background',
  ai:       'bg-ai text-surface-background',
  negative: 'bg-negative text-surface-background',
  warning:  'bg-warning text-text-primary',
  positive: 'bg-positive text-text-primary',
}

const SUBTLE: Record<BadgeVariant, string> = {
  neutral:  'bg-[rgba(74,44,36,0.1)] text-accent-neutral',
  accent:   'bg-[rgba(58,74,106,0.1)] text-accent',
  ai:       'bg-[rgba(136,173,187,0.1)] text-ai',
  negative: 'bg-[rgba(220,0,50,0.1)] text-negative',
  warning:  'bg-[rgba(193,160,99,0.1)] text-warning-hover',
  positive: 'bg-[rgba(175,195,162,0.1)] text-positive-hover',
}

export function Badge({
  children, variant = 'neutral', style = 'subtle', animate = false, className = '',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-[8px] py-[2px] rounded-full font-poppins font-bold text-caption whitespace-nowrap',
        style === 'filled' ? FILLED[variant] : SUBTLE[variant],
        animate && 'badge-in',
        className,
      )}
    >
      {children}
    </span>
  )
}
