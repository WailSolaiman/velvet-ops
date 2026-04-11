import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { PageSection } from '@/components/layout/page-section'
import {
  fadeUpVariants,
  revealViewport,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/motion-reveal'
import { cn } from '@/lib/utils'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

type Project = {
  title: string
  tag: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: 'نورثلَين أناليتكس',
    tag: 'واجهة منتج · React',
    description:
      'لوحة تحكم وتقارير لمنصة بيانات B2B—وضوح رغم كثافة المعلومات.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'هاربر هيلث',
    tag: 'نظام تصميم · سهولة استخدام',
    description:
      'مسارات للمرضى ومعايير بصرية موحّدة تسهّل على فريق الهندسة الإطلاق بثبات.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'ريلاي ميرشنت',
    tag: 'هوية · موقع تسويقي',
    description:
      'تموضع، وهوية بصرية، وموقع سريع يعرض المنتج بشكل راقٍ وواضح.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
]

function WorkCard({ project, className }: { project: Project; className?: string }) {
  return (
    <article
      className={cn(
        'section-card group relative flex flex-col overflow-hidden transition-shadow hover:shadow-md',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <span className="bg-background/80 text-foreground absolute top-3 start-3 rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium tracking-wide backdrop-blur-sm">
          {project.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 text-start">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-light tracking-tight">{project.title}</h3>
          <ArrowUpRight
            className="text-muted-foreground size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 rtl:-rotate-90"
            aria-hidden
          />
        </div>
        <p className="text-muted-foreground mt-2 text-sm font-light leading-relaxed">{project.description}</p>
      </div>
    </article>
  )
}

export function SelectedWorkSection() {
  const reduceMotion = useReducedMotion()

  return (
    <PageSection sectionId={SITE_SECTION_IDS.work} className="section-shell bg-background">
      <div className="mx-auto max-w-6xl px-4">
        {reduceMotion ? (
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">
              <span className="instrument font-semibold not-italic">أعمال</span> مختارة
            </h2>
            <p className="section-lede mx-auto">
              مشاريع حديثة في واجهات المنتجات وأنظمة التصميم ومواقع الإطلاق—صُمّمت لفرق تهتم بجودة
              التجربة.
            </p>
          </div>
        ) : (
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            <h2 className="section-title">
              <span className="instrument font-semibold not-italic">أعمال</span> مختارة
            </h2>
            <p className="section-lede mx-auto">
              مشاريع حديثة في واجهات المنتجات وأنظمة التصميم ومواقع الإطلاق—صُمّمت لفرق تهتم بجودة
              التجربة.
            </p>
          </motion.div>
        )}

        {reduceMotion ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <WorkCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={staggerItemVariants} className="min-w-0">
                <WorkCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </PageSection>
  )
}
