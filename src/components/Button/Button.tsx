// Improvements 1, 2, 7, 8: visual hierarchy, interactive states, focus rings, transitions
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Icon, type IconName } from '../Icon/Icon'

export type ButtonColor    = 'neutral' | 'accent' | 'ai' | 'negative' | 'warning' | 'positive'
export type ButtonSaliency = 'filled' | 'outlined' | 'transparent'
export type ButtonSize     = 'big' | 'small'

export type ButtonProps = {
  children?: ReactNode
  icon?: IconName
  color?: ButtonColor
  saliency?: ButtonSaliency
  size?: ButtonSize
  dotted?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

// Improvement 2: all states explicit (default, hover, active)
const FILLED: Record<ButtonColor, string> = {
  neutral:  'bg-accent-neutral text-surface-background hover:bg-[#3b1e16] active:bg-[#2e1710]',
  accent:   'bg-accent text-surface-background hover:bg-accent-2 active:bg-[#2e3238]',
  ai:       'bg-ai text-surface-background hover:bg-[#6d9dae] active:bg-[#5a8a9b]',
  negative: 'bg-negative text-surface-background hover:bg-negative-hover active:bg-[#6e2315]',
  warning:  'bg-warning text-text-primary hover:bg-warning-hover active:bg-[#a65a3a]',
  positive: 'bg-positive text-text-primary hover:bg-positive-hover hover:text-surface-background active:bg-[#3e3926]',
}

const OUTLINED: Record<ButtonColor, string> = {
  neutral:  'border border-accent-neutral text-accent-neutral hover:bg-[rgba(74,44,36,0.08)] active:bg-[rgba(74,44,36,0.14)]',
  accent:   'border border-accent text-accent hover:bg-[rgba(58,74,106,0.08)] active:bg-[rgba(58,74,106,0.14)]',
  ai:       'border border-ai text-ai hover:bg-[rgba(136,173,187,0.1)] active:bg-[rgba(136,173,187,0.18)]',
  negative: 'border border-negative text-negative hover:bg-[rgba(220,0,50,0.08)] active:bg-[rgba(220,0,50,0.14)]',
  warning:  'border border-warning text-warning hover:bg-[rgba(193,160,99,0.1)] active:bg-[rgba(193,160,99,0.18)]',
  positive: 'border border-positive-hover text-positive-hover hover:bg-[rgba(175,195,162,0.1)] active:bg-[rgba(175,195,162,0.18)]',
}

const TRANSPARENT: Record<ButtonColor, string> = {
  neutral:  'text-accent-neutral hover:bg-[rgba(74,44,36,0.08)] active:bg-[rgba(74,44,36,0.14)]',
  accent:   'text-accent hover:bg-[rgba(58,74,106,0.08)] active:bg-[rgba(58,74,106,0.14)]',
  ai:       'text-ai hover:bg-[rgba(136,173,187,0.1)] active:bg-[rgba(136,173,187,0.18)]',
  negative: 'text-negative hover:bg-[rgba(220,0,50,0.08)] active:bg-[rgba(220,0,50,0.14)]',
  warning:  'text-warning hover:bg-[rgba(193,160,99,0.1)] active:bg-[rgba(193,160,99,0.18)]',
  positive: 'text-positive-hover hover:bg-[rgba(175,195,162,0.1)] active:bg-[rgba(175,195,162,0.18)]',
}

const SIZES: Record<ButtonSize, string> = {
  big:   'px-xsmall py-xsmall text-label gap-xxsmall font-bold',
  small: 'px-xxsmall py-[6px] text-caption gap-[6px] font-semibold',
}

const ICON_STATUS: Record<ButtonColor, 'brown' | 'black' | 'white'> = {
  neutral: 'white', accent: 'white', ai: 'white',
  negative: 'white', warning: 'black', positive: 'black',
}

export function Button({
  children, icon, color = 'neutral', saliency = 'filled',
  size = 'big', dotted = false, disabled = false,
  onClick, className = '', type = 'button',
}: ButtonProps) {
  const saliencyClass = saliency === 'filled' ? FILLED[color]
    : saliency === 'outlined' ? OUTLINED[color]
    : TRANSPARENT[color]

  const iconStatus = saliency === 'filled' ? ICON_STATUS[color]
    : color === 'neutral' ? 'brown' : 'black'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-box font-poppins select-none cursor-pointer',
        // Improvement 7: focus-visible ring
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai focus-visible:ring-offset-2',
        SIZES[size],
        saliencyClass,
        dotted && 'border-dashed',
        disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
        className,
      )}
    >
      {icon && <Icon name={icon} size="small" status={iconStatus} />}
      {children && <span>{children}</span>}
    </button>
  )
}
