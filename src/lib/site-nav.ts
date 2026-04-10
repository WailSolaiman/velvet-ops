/** أهداف الروابط داخل الصفحة — فيلفت أوبس */
export const SITE_SECTION_IDS = {
  hero: 'hero',
  work: 'work',
  services: 'services',
  process: 'process',
  clients: 'clients',
  pricing: 'pricing',
  testimonials: 'testimonials',
  cta: 'cta',
  footer: 'footer',
} as const

export type SiteSectionId = (typeof SITE_SECTION_IDS)[keyof typeof SITE_SECTION_IDS]

/** شريط تنقل ثانوي (إن وُجد) */
export const shellNavItems = [
  { label: 'الأعمال', hash: `#${SITE_SECTION_IDS.work}` },
  { label: 'الخدمات', hash: `#${SITE_SECTION_IDS.services}` },
  { label: 'آلية العمل', hash: `#${SITE_SECTION_IDS.process}` },
  { label: 'الشراكات', hash: `#${SITE_SECTION_IDS.pricing}` },
] as const
