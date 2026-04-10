import {
  Compass,
  PenLine,
  Hammer,
  Rocket,
  LifeBuoy,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

import { PageSection } from '@/components/layout/page-section'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

type Step = {
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const steps: Step[] = [
  {
    title: 'اكتشاف',
    description:
      'نوحّد الأهداف والمستخدمين والقيود—ورش عمل، مراجعة، وخارطة طريق قبل أول شاشة.',
    icon: Compass,
  },
  {
    title: 'تصميم',
    description:
      'مسارات تجربة، واجهات، ودراسات حركة. تحصل على نماذج أولية واتجاه يقدر عليه المطوّرون.',
    icon: PenLine,
  },
  {
    title: 'بناء',
    description: 'تنفيذ واجهة أمامية مع اهتمام بالأداء والإتاحة ووفاء التصميم.',
    icon: Hammer,
  },
  {
    title: 'إطلاق',
    description: 'تثبيت، تسليم، ودعم يوم الإطلاق—مع توثيق يملك فريقكم ما نسلّمه.',
    icon: Rocket,
  },
  {
    title: 'تطوّر',
    description:
      'شراكات شهرية اختيارية للتكرار، أسطح جديدة، وصيانة نظام التصميم مع نموكم.',
    icon: LifeBuoy,
  },
]

export function ProcessSection() {
  return (
    <PageSection
      sectionId={SITE_SECTION_IDS.process}
      className="section-shell border-border/50 border-y bg-muted/20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">
            كيف <span className="instrument font-semibold not-italic">نعمل</span>
          </h2>
          <p className="section-lede mx-auto">
            إيقاع واضح من أول اتصال إلى الإطلاق—نقاط تفتيش شفافة، تعاون يناسب العمل غير المتزامن،
            ولا مرحلة تصميم «صندوق أسود».
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li key={step.title} className="relative flex gap-4 text-start">
                <span
                  className="text-muted-foreground mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-medium tabular-nums"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="text-foreground/80 size-5" strokeWidth={1.25} aria-hidden />
                    <h3 className="text-base font-medium tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </PageSection>
  )
}
