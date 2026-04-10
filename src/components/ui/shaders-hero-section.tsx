import { MeshGradient, PulsingBorder } from '@paper-design/shaders-react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { ThemeToggle } from '@/components/layout/theme-toggle'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

interface ShaderBackgroundProps {
  children: ReactNode
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <svg className="absolute inset-0 h-0 w-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-black" aria-hidden />
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={['#000000', '#8B4513', '#ffffff', '#3E2723', '#5D4037']}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-60 mix-blend-screen"
        colors={['#000000', '#ffffff', '#8B4513', '#000000']}
        speed={0.2}
        distortion={0.4}
        swirl={0.15}
      />

      {children}
    </div>
  )
}

export function PulsingCircle() {
  return (
    <div className="absolute end-8 bottom-8 z-30">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <PulsingBorder
          colors={['#BEECFF', '#E77EDC', '#FF4C3E', '#00FF88', '#FFD700', '#FF6B35', '#8A2BE2']}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={1}
          spots={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={0.6}
          scale={0.65}
          rotation={0}
          frame={9161408.251009725}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
          }}
        />

        <motion.svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          style={{ transform: 'scale(1.6)' }}
        >
          <defs>
            <path
              id="hero-circle-text"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text className="instrument fill-white/80 text-sm">
            <textPath href="#hero-circle-text" startOffset="0%">
              فيلفت أوبس • استوديو منتجات رقمية • فيلفت أوبس • استوديو منتجات رقمية •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}

export function HeroContent() {
  return (
    <div className="absolute bottom-8 start-8 z-20 max-w-lg">
      <div className="text-start">
        <div
          className="relative mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 backdrop-blur-sm"
          style={{
            filter: 'url(#glass-effect)',
          }}
        >
          <div className="absolute top-0 end-1 start-1 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="relative z-10 text-xs font-light text-white/90">
            استوديو منتجات رقمية
          </span>
        </div>

        <h1 className="mb-4 text-5xl font-light tracking-tight text-white md:text-6xl md:leading-[1.25]">
          <span className="instrument font-semibold not-italic">فيلفت</span> أوبس
          <br />
          <span className="font-light tracking-tight text-white">منتجات بذوقٍ راقٍ.</span>
        </h1>

        <p className="mb-4 text-xs leading-relaxed font-light text-white/70">
          نعمل مع فرقٍ طموحة لتصميم وإطلاق واجهات ومنتجات وواجهات أمامية تُحسّن تجربة الاستخدام—استراتيجية
          وحرفية وبرمجة في استوديو واحد.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`#${SITE_SECTION_IDS.work}`}
            className="hero-focus cursor-pointer rounded-full border border-white/30 bg-transparent px-8 py-3 text-xs font-normal text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
          >
            أعمالنا
          </a>
          <a
            href={`#${SITE_SECTION_IDS.cta}`}
            className="hero-focus cursor-pointer rounded-full bg-white px-8 py-3 text-xs font-normal text-black transition-all duration-200 hover:bg-white/90"
          >
            ابدأ مشروعًا
          </a>
        </div>
      </div>
    </div>
  )
}

export function HeroHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <a
        href={`#${SITE_SECTION_IDS.hero}`}
        className="hero-focus flex items-center rounded-sm"
        aria-label="الصفحة الرئيسية"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M358.333 0C381.345 0 400 18.6548 400 41.6667V295.833C400 298.135 398.134 300 395.833 300H270.833C268.532 300 266.667 301.865 266.667 304.167V395.833C266.667 398.134 264.801 400 262.5 400H41.6667C18.6548 400 0 381.345 0 358.333V304.72C0 301.793 1.54269 299.081 4.05273 297.575L153.76 207.747C157.159 205.708 156.02 200.679 152.376 200.065L151.628 200H4.16667C1.86548 200 6.71103e-08 198.135 0 195.833V104.167C1.07376e-06 101.865 1.86548 100 4.16667 100H162.5C164.801 100 166.667 98.1345 166.667 95.8333V4.16667C166.667 1.86548 168.532 1.00666e-07 170.833 0H358.333ZM170.833 100C168.532 100 166.667 101.865 166.667 104.167V295.833C166.667 298.135 168.532 300 170.833 300H262.5C264.801 300 266.667 298.135 266.667 295.833V104.167C266.667 101.865 264.801 100 262.5 100H170.833Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <nav
        className="flex flex-wrap items-center justify-end gap-1 sm:gap-2"
        aria-label="التنقل الرئيسي"
      >
        <a
          href={`#${SITE_SECTION_IDS.work}`}
          className="hero-focus rounded-full px-3 py-2 text-xs font-light text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          الأعمال
        </a>
        <a
          href={`#${SITE_SECTION_IDS.services}`}
          className="hero-focus rounded-full px-3 py-2 text-xs font-light text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          الخدمات
        </a>
        <a
          href={`#${SITE_SECTION_IDS.process}`}
          className="hero-focus rounded-full px-3 py-2 text-xs font-light text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          آلية العمل
        </a>
        <a
          href={`#${SITE_SECTION_IDS.pricing}`}
          className="hero-focus rounded-full px-3 py-2 text-xs font-light text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          الشراكات
        </a>
        <a
          href={`#${SITE_SECTION_IDS.cta}`}
          className="hero-focus rounded-full px-3 py-2 text-xs font-light text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
        >
          تواصل
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <div
          id="gooey-btn"
          className="group relative flex items-center"
          style={{ filter: 'url(#gooey-filter)' }}
        >
          <button
            type="button"
            className="hero-focus absolute end-0 z-0 flex h-8 -translate-x-10 cursor-pointer items-center justify-center rounded-full bg-white px-2.5 py-2 text-xs font-normal text-black transition-all duration-300 hover:bg-white/90 group-hover:-translate-x-[4.75rem] rtl:translate-x-10 rtl:group-hover:translate-x-[4.75rem]"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </button>
          <a
            href={`#${SITE_SECTION_IDS.cta}`}
            className="hero-focus z-10 flex h-8 cursor-pointer items-center rounded-full bg-white px-6 py-2 text-xs font-normal text-black transition-all duration-300 hover:bg-white/90"
          >
            احجز مكالمة
          </a>
        </div>
        <div className="text-white [&_button]:border-white/20 [&_button]:text-white [&_button]:hover:bg-white/10">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export function ShaderHeroShowcase() {
  return (
    <ShaderBackground>
      <HeroHeader />
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
  )
}
