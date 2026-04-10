import { ShaderHeroShowcase } from '@/components/ui/shaders-hero-section'
import { ClientsSection } from '@/components/sections/clients-section'
import { CtaSection } from '@/components/sections/cta-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { ProcessSection } from '@/components/sections/process-section'
import { SelectedWorkSection } from '@/components/sections/selected-work-section'
import { ServicesSection } from '@/components/sections/services-section'
import { SiteFooterSection } from '@/components/sections/site-footer'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

export function Home() {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      <main>
        <section
          id={SITE_SECTION_IDS.hero}
          className="scroll-mt-[var(--site-header-height)]"
        >
          <ShaderHeroShowcase />
        </section>

        <SelectedWorkSection />
        <ServicesSection />
        <ProcessSection />
        <ClientsSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
        <SiteFooterSection />
      </main>
    </div>
  )
}
