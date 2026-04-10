import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

type PageSectionProps = ComponentPropsWithoutRef<'section'> & {
  /** Section id for in-page anchors, e.g. `services` → `#services` */
  sectionId: string
}

/**
 * Full-width section with scroll margin so sticky/fixed headers do not cover headings.
 */
export function PageSection({
  sectionId,
  className,
  children,
  ...props
}: PageSectionProps) {
  return (
    <section
      id={sectionId}
      className={cn('scroll-mt-[var(--site-header-height)]', className)}
      {...props}
    >
      {children}
    </section>
  )
}
