import { useTheme } from 'next-themes'
import { motion, useReducedMotion } from 'motion/react'

import { PageSection } from '@/components/layout/page-section'
import { Sparkles } from '@/components/ui/sparkles'
import {
  fadeUpVariants,
  revealViewport,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/motion-reveal'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

import {
  LogoArc,
  LogoRaycast,
  LogoRemote,
  LogoRetool,
  LogoVercel,
} from './clients-logos'

export function ClientsSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const reduceMotion = useReducedMotion()

  return (
    <PageSection
      sectionId={SITE_SECTION_IDS.clients}
      className="section-shell overflow-hidden bg-background pb-6 md:pb-8"
    >
      <div className="relative h-auto w-full min-h-[20vh]">
        <div className="mx-auto w-full max-w-2xl px-4">
          {reduceMotion ? (
            <div className="section-title text-center">
              <span className="instrument font-semibold not-italic text-foreground">شركاء</span>{' '}
              <span className="text-foreground">نفتخر بالعمل معهم.</span>
              <br />
              <span className="text-muted-foreground mt-2 block text-xl font-light tracking-tight md:text-2xl">
                من شركات ناشئة إلى مؤسسات منتجات ناضجة.
              </span>
            </div>
          ) : (
            <motion.div
              className="section-title text-center"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
            >
              <span className="instrument font-semibold not-italic text-foreground">شركاء</span>{' '}
              <span className="text-foreground">نفتخر بالعمل معهم.</span>
              <br />
              <span className="text-muted-foreground mt-2 block text-xl font-light tracking-tight md:text-2xl">
                من شركات ناشئة إلى مؤسسات منتجات ناضجة.
              </span>
            </motion.div>
          )}
        </div>

        <div className="mx-auto mt-10 w-full max-w-5xl px-4 sm:px-6">
          {reduceMotion ? (
            <div className="grid grid-cols-2 gap-8 text-zinc-900 sm:grid-cols-5 sm:gap-10 dark:text-white">
              <LogoRetool />
              <LogoVercel />
              <LogoRemote />
              <LogoArc />
              <div className="col-span-2 flex justify-center sm:col-span-1 sm:block">
                <div className="w-full max-w-[calc(50%-1rem)] sm:max-w-none">
                  <LogoRaycast />
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-2 gap-8 text-zinc-900 sm:grid-cols-5 sm:gap-10 dark:text-white"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
            >
              <motion.div variants={staggerItemVariants} className="flex items-center justify-center">
                <LogoRetool />
              </motion.div>
              <motion.div variants={staggerItemVariants} className="flex items-center justify-center">
                <LogoVercel />
              </motion.div>
              <motion.div variants={staggerItemVariants} className="flex items-center justify-center">
                <LogoRemote />
              </motion.div>
              <motion.div variants={staggerItemVariants} className="flex items-center justify-center">
                <LogoArc />
              </motion.div>
              <motion.div
                variants={staggerItemVariants}
                className="col-span-2 flex justify-center sm:col-span-1 sm:block"
              >
                <div className="flex w-full max-w-[calc(50%-1rem)] justify-center sm:max-w-none">
                  <LogoRaycast />
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        <div className="relative -mt-16 h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] md:-mt-32 md:h-96">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] opacity-40" />
          <div className="absolute top-1/2 start-1/2 z-10 aspect-[1/0.7] w-[200%] -translate-x-1/2 rounded-[100%] border-t border-zinc-900/20 bg-white dark:border-white/20 dark:bg-zinc-900" />
          <Sparkles
            density={420}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color={isDark ? '#ffffff' : '#000000'}
          />
        </div>
      </div>
    </PageSection>
  )
}
