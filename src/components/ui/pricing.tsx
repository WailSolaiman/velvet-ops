import { Check } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  highlight?: boolean
  buttonVariant?: 'default' | 'outline'
  /** CTA label on the button (e.g. agency engagements). */
  ctaLabel?: string
  /** When `highlight`, label above the extended bullet list. */
  highlightLeadIn?: string
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlight = false,
  buttonVariant = 'outline',
  ctaLabel = 'ابدأ محادثة',
  highlightLeadIn = 'كل ما في باقة الاستوديو، إضافةً إلى:',
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between space-y-4 p-6',
        highlight ? 'bg-secondary w-full space-y-8 rounded-xl md:w-1/2' : 'flex-1',
      )}
    >
      <div className={highlight ? 'grid gap-6 sm:grid-cols-2' : ''}>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-light tracking-tight">{title}</h2>
            <span className="my-3 block text-2xl font-light tabular-nums tracking-tight">{price}</span>
            <p className="text-muted-foreground text-sm font-light">{description}</p>
          </div>

          <a
            href={`#${SITE_SECTION_IDS.cta}`}
            className={cn(
              buttonVariants({ variant: buttonVariant }),
              'inline-flex w-full items-center justify-center no-underline',
            )}
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      {highlight ? (
        <div className="text-sm font-light tracking-tight">{highlightLeadIn}</div>
      ) : null}

      <ul
        className={cn(
          'list-outside space-y-3 text-sm',
          highlight ? 'mt-4' : 'border-t pt-4',
        )}
      >
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="size-3" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
