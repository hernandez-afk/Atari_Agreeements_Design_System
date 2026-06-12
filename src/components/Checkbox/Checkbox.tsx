// Improvements 7, 10: Radix UI base, WCAG focus ring, subtle border
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export type CheckboxProps = {
  checked?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  className?: string
  id?: string
}

export function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  disabled = false,
  className = '',
  id,
}: CheckboxProps) {
  const checkboxId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={cn('flex items-center gap-xxsmall', className)}>
      <RadixCheckbox.Root
        id={checkboxId}
        checked={indeterminate ? 'indeterminate' : checked}
        onCheckedChange={(val) => {
          if (!disabled) onChange?.(val === true)
        }}
        disabled={disabled}
        className={cn(
          'flex items-center justify-center size-[20px] rounded-[3px] border shrink-0',
          // Improvement 7: accessible focus ring
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai focus-visible:ring-offset-1',
          checked || indeterminate
            ? 'bg-accent-neutral border-accent-neutral'
            // Improvement 10: subtle border on unchecked state
            : 'border-[rgba(107,98,87,0.6)] bg-transparent hover:border-accent-neutral',
          disabled && 'opacity-40 cursor-not-allowed',
        )}
        aria-label={label}
      >
        <RadixCheckbox.Indicator>
          {indeterminate
            ? <Minus size={12} color="#fefef9" strokeWidth={2.5} />
            : <Check size={13} color="#fefef9" strokeWidth={2.5} />
          }
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      {label && (
        <label
          htmlFor={checkboxId}
          className={cn(
            'font-poppins text-label text-text-primary cursor-pointer select-none',
            disabled && 'opacity-40 cursor-not-allowed',
          )}
        >
          {label}
        </label>
      )}
    </div>
  )
}
