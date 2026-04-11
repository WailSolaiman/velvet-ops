import type { ReactNode } from 'react'
import { Quote } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  imageSrc: string
}

export interface TestimonialSectionProps {
  title: ReactNode
  subtitle: ReactNode
  testimonials: Testimonial[]
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

export function TestimonialSection({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) {
  const reduceMotion = useReducedMotion()
  const Grid = reduceMotion ? 'div' : motion.div
  const gridProps = reduceMotion
    ? { className: 'mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3' }
    : {
        className: 'mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3',
        variants: containerVariants,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.2 },
      }

  return (
    <div className="w-full">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="section-title">{title}</h2>
        <p className="section-lede mx-auto mt-1">{subtitle}</p>

        <Grid {...gridProps}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              reduceMotion={reduceMotion}
            />
          ))}
        </Grid>
      </div>
    </div>
  )
}

function TestimonialCard({
  testimonial,
  reduceMotion,
}: {
  testimonial: Testimonial
  reduceMotion: boolean | null
}) {
  const Card = reduceMotion ? 'div' : motion.div
  const cardProps = reduceMotion
    ? {
        className: 'section-card relative overflow-hidden',
      }
    : {
        className: 'section-card relative overflow-hidden',
        variants: itemVariants,
      }

  return (
    <Card {...cardProps}>
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={testimonial.imageSrc}
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-start text-white">
        <Quote className="mb-4 h-8 w-8 text-white/40" aria-hidden />
        <blockquote className="text-base leading-relaxed font-light">{testimonial.quote}</blockquote>
        <figcaption className="mt-4">
          <p className="font-medium text-white">
            — {testimonial.name}{' '}
            <span className="text-white/60">{testimonial.role}</span>
          </p>
        </figcaption>
      </div>
    </Card>
  )
}
