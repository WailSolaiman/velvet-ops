import { ArrowRight } from 'lucide-react'

import { PageSection } from '@/components/layout/page-section'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

const mailSubject = encodeURIComponent('استفسار مشروع')
const mailHref = `mailto:hello@velvetops.studio?subject=${mailSubject}`

export function CtaSection() {
  return (
    <PageSection
      sectionId={SITE_SECTION_IDS.cta}
      className="section-shell border-border/60 bg-muted/30 border-y"
    >
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="section-title">
          <span className="instrument font-semibold not-italic">جاهز</span> لبناء منتج يدوم؟
        </h2>
        <p className="section-lede mx-auto mt-1">
          صِفْ منتجك وجدولك وقيودك. نرد بصدق حول الملاءمة، والخطوات التالية، وشكل تعاون محتمل.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={mailHref}
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'inline-flex gap-2 no-underline',
            )}
          >
            hello@velvetops.studio
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </a>
          <a
            href={`#${SITE_SECTION_IDS.pricing}`}
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'no-underline')}
          >
            عرض الشراكات
          </a>
        </div>
      </div>
    </PageSection>
  )
}
