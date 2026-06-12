// Improvement 5: Empty state templates for no-data, no-results, and error conditions
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../Button/Button'

export type EmptyStateVariant = 'no-data' | 'no-results' | 'error'

export type EmptyStateProps = {
  variant?: EmptyStateVariant
  title?: string
  description?: string
  ctaLabel?: string
  onCta?: () => void
  secondaryLabel?: string
  onSecondary?: () => void
  className?: string
  children?: ReactNode
}

const ILLUSTRATIONS: Record<EmptyStateVariant, ReactNode> = {
  'no-data': (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="24" fill="rgba(74,44,36,0.06)" />
      <circle cx="28" cy="28" r="16" fill="rgba(74,44,36,0.10)" />
      <rect x="20" y="17" width="16" height="20" rx="2" fill="#4a2c24" opacity="0.55" />
      <rect x="23" y="22" width="10" height="2" rx="1" fill="#fefef9" />
      <rect x="23" y="27" width="10" height="2" rx="1" fill="#fefef9" />
      <rect x="23" y="32" width="6" height="2" rx="1" fill="#fefef9" />
    </svg>
  ),
  'no-results': (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="24" fill="rgba(74,44,36,0.06)" />
      <circle cx="26" cy="25" r="10" stroke="#4a2c24" strokeWidth="2" opacity="0.45" fill="none" />
      <line x1="34" y1="33" x2="42" y2="41" stroke="#4a2c24" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <line x1="22" y1="25" x2="30" y2="25" stroke="#4a2c24" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <line x1="26" y1="21" x2="26" y2="29" stroke="#4a2c24" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  'error': (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="24" fill="rgba(220,0,50,0.06)" />
      <circle cx="28" cy="28" r="16" fill="rgba(220,0,50,0.08)" />
      <line x1="21" y1="21" x2="35" y2="35" stroke="#dc0032" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="35" y1="21" x2="21" y2="35" stroke="#dc0032" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
}

const DEFAULTS: Record<EmptyStateVariant, { title: string; description: string; ctaLabel: string }> = {
  'no-data': {
    title: 'No agreements yet',
    description: 'Create your first agreement to start managing contracts, NDAs, and vendor deals in one place.',
    ctaLabel: 'New Agreement',
  },
  'no-results': {
    title: 'No matching results',
    description: "Try adjusting your search or filters to find what you're looking for.",
    ctaLabel: 'Clear filters',
  },
  'error': {
    title: 'Something went wrong',
    description: "We couldn't load your agreements. Please try again or contact support if the issue persists.",
    ctaLabel: 'Try again',
  },
}

export function EmptyState({
  variant = 'no-data',
  title,
  description,
  ctaLabel,
  onCta,
  secondaryLabel,
  onSecondary,
  className = '',
  children,
}: EmptyStateProps) {
  const defaults = DEFAULTS[variant]

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-medium py-xxlarge px-large text-center',
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-small">
        {ILLUSTRATIONS[variant]}
        <h3 className="font-figtree font-semibold text-h3 text-text-primary mt-xxsmall">
          {title ?? defaults.title}
        </h3>
        <p className="font-poppins text-label text-text-secondary max-w-[320px]">
          {description ?? defaults.description}
        </p>
      </div>

      {children}

      {(onCta || onSecondary) && (
        <div className="flex flex-col sm:flex-row items-center gap-xsmall mt-xxsmall">
          {onCta && (
            <Button
              color={variant === 'error' ? 'negative' : 'accent'}
              saliency="filled"
              icon="add"
              onClick={onCta}
            >
              {ctaLabel ?? defaults.ctaLabel}
            </Button>
          )}
          {onSecondary && secondaryLabel && (
            <Button color="neutral" saliency="transparent" onClick={onSecondary}>
              {secondaryLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
