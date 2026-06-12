// Improvements 2, 7, 8: Radix UI animated accordion, focus ring, smooth expand
import * as RadixAccordion from '@radix-ui/react-accordion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Icon, type IconName } from '../Icon/Icon'

export type AccordionItemDef = {
  id: string
  title: string
  icon?: IconName
  content: ReactNode
  defaultOpen?: boolean
}

export type AccordionProps = {
  items: AccordionItemDef[]
  className?: string
}

export function Accordion({ items, className = '' }: AccordionProps) {
  const defaultValues = items.filter((i) => i.defaultOpen).map((i) => i.id)

  return (
    <RadixAccordion.Root
      type="multiple"
      defaultValue={defaultValues}
      className={cn('flex flex-col w-full', className)}
    >
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.id}
          value={item.id}
          className="bg-surface-background border-t border-subtle first:border-t-0"
        >
          <RadixAccordion.Trigger
            className={cn(
              'flex items-center gap-small px-small py-xsmall w-full text-left group',
              // Improvement 7: keyboard focus ring
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai focus-visible:ring-inset',
              'hover:bg-[rgba(74,44,36,0.03)]',
            )}
          >
            {item.icon && <Icon name={item.icon} size="small" status="brown" />}
            <span className="flex-1 font-poppins font-bold text-label text-text-primary capitalize">
              {item.title}
            </span>
            {/* Improvement 8: smooth chevron rotation via Radix data attributes */}
            <span className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180">
              <Icon name="expandCarrot" size="small" status="black" />
            </span>
          </RadixAccordion.Trigger>

          {/* Improvement 2: Radix handles height animation via CSS */}
          <RadixAccordion.Content
            className={cn(
              'overflow-hidden',
              'data-[state=open]:animate-[accordion-open_300ms_ease-in-out]',
              'data-[state=closed]:animate-[accordion-close_300ms_ease-in-out]',
            )}
            style={
              {
                '--radix-accordion-content-height': 'var(--radix-accordion-content-height)',
              } as { [key: string]: string }
            }
          >
            <div className="flex flex-col gap-[16px] pb-medium pl-small pr-[48px] pt-xxsmall">
              <p className="font-poppins font-light text-caption text-text-primary leading-relaxed">
                {item.content}
              </p>
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}

// Re-export single item type for external use
export type { AccordionItemDef as AccordionItemProps }
