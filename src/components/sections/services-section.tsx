import {
  Boxes,
  Code2,
  Layout,
  Palette,
  Sparkles,
  Users,
} from 'lucide-react'
import type { ComponentProps } from 'react'
import { motion, useReducedMotion } from 'motion/react'

import { FeatureCard, type FeatureItem } from '@/components/ui/grid-feature-cards'
import { PageSection } from '@/components/layout/page-section'
import { revealViewport, staggerContainerVariants, staggerItemVariants } from '@/lib/motion-reveal'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

const services: FeatureItem[] = [
  {
    title: 'المنتج وتجربة الاستخدام',
    icon: Layout,
    description:
      'مسارات استخدام، وتنظيم للمحتوى، وواجهات تفصيلية لتطبيقات الويب—وضوح حتى مع التعقيد.',
  },
  {
    title: 'الهوية والمرئيات',
    icon: Palette,
    description: 'إخراج فني، خطوط، وحركة بإحساس مخصّص—بعيدًا عن القوالب الجاهزة.',
  },
  {
    title: 'تطوير الواجهة الأمامية',
    icon: Code2,
    description: 'React، ومكوّنات ومعايير بصرية، وأداء قريب من التصميم المتفق عليه.',
  },
  {
    title: 'أنظمة التصميم',
    icon: Boxes,
    description: 'مكوّنات وتوثيق، وقواعد استخدام موحّدة، لإطلاق متناسق بين الفرق.',
  },
  {
    title: 'الإطلاق والتسويق',
    icon: Sparkles,
    description: 'صفحة المنتج وحملات تروّج لقصة واحدة عبر القنوات.',
  },
  {
    title: 'شراكة مدمجة',
    icon: Users,
    description: 'وقت مخصّص شهريًا للتصميم وتطوير الواجهة بجانب فريقك—إيقاع أسبوعي واضح.',
  },
]

type AnimatedProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>['className']
  children: React.ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedProps) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ServicesSection() {
  const reduce = useReducedMotion()

  return (
    <PageSection sectionId={SITE_SECTION_IDS.services} className="section-shell">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">
            <span className="instrument font-semibold not-italic">الخدمات</span>
          </h2>
          <p className="section-lede mx-auto">
            من الاكتشاف إلى الإطلاق—وما بعده—نجمع حرفية المنتج، اللمسة البصرية، وتنفيذ الواجهة في
            مكان واحد.
          </p>
        </AnimatedContainer>

        {reduce ? (
          <div className="grid grid-cols-1 divide-x divide-y divide-dashed overflow-hidden rounded-xl border border-dashed sm:grid-cols-2 md:grid-cols-3">
            {services.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 divide-x divide-y divide-dashed overflow-hidden rounded-xl border border-dashed sm:grid-cols-2 md:grid-cols-3"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            {services.map((feature) => (
              <motion.div key={feature.title} variants={staggerItemVariants} className="min-w-0">
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </PageSection>
  )
}
