import { ChevronRight } from 'lucide-react'

import { PageSection } from '@/components/layout/page-section'
import { FlickeringGrid, useMediaQuery } from '@/components/ui/flickering-grid'
import { cn } from '@/lib/utils'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="42"
      height="24"
      viewBox="0 0 42 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4 fill-[var(--secondary)]', className)}
    >
      <g clipPath="url(#clip0_footer_logo)">
        <path
          d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
          fill="currentColor"
        />
        <path
          d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_footer_logo">
          <rect width="42" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const footerLinks = [
  {
    title: 'الاستوديو',
    links: [
      { id: 1, title: 'أعمال مختارة', url: `#${SITE_SECTION_IDS.work}` },
      { id: 2, title: 'الخدمات', url: `#${SITE_SECTION_IDS.services}` },
      { id: 3, title: 'آلية العمل', url: `#${SITE_SECTION_IDS.process}` },
      { id: 4, title: 'الشراكات', url: `#${SITE_SECTION_IDS.pricing}` },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { id: 5, title: 'تواصل', url: `#${SITE_SECTION_IDS.cta}` },
      { id: 6, title: 'العملاء', url: `#${SITE_SECTION_IDS.clients}` },
      { id: 7, title: 'آراء', url: `#${SITE_SECTION_IDS.testimonials}` },
      { id: 8, title: 'الرئيسية', url: `#${SITE_SECTION_IDS.hero}` },
    ],
  },
  {
    title: 'اجتماعي',
    links: [
      { id: 9, title: 'لينكدإن', url: 'https://www.linkedin.com' },
      { id: 10, title: 'دريبل', url: 'https://dribbble.com' },
      { id: 11, title: 'جيت هب', url: 'https://github.com' },
    ],
  },
] as const

const description =
  'فيلفت أوبس استوديو منتجات رقمية—تخطيط، وتصميم واجهات بعناية، وتسليم واجهات أمامية لفرق تريد إطلاقًا هادئًا ومدروسًا.'

export function SiteFooterSection() {
  const tablet = useMediaQuery('(max-width: 1024px)')
  const narrow = useMediaQuery('(max-width: 480px)')

  return (
    <PageSection
      sectionId={SITE_SECTION_IDS.footer}
      className="w-full overflow-x-hidden pb-[max(0px,env(safe-area-inset-bottom,0px))] pt-10 md:pt-14"
    >
      <footer className="w-full min-w-0 pb-0">
        <div className="flex flex-col gap-10 px-4 pb-2 pt-0 sm:px-6 md:flex-row md:items-start md:justify-between md:gap-12 md:px-8 lg:gap-16 lg:px-10">
          <div className="mx-0 flex min-w-0 w-full max-w-md flex-col items-start justify-start gap-y-5 md:max-w-sm lg:max-w-xs lg:shrink-0">
            <a
              href={`#${SITE_SECTION_IDS.hero}`}
              className="hover:text-foreground/90 flex items-center gap-2 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <LogoIcon className="size-8 shrink-0" />
              <p className="text-foreground text-xl font-light tracking-tight">فيلفت أوبس</p>
            </a>
            <p className="text-muted-foreground text-pretty font-light tracking-tight">{description}</p>
            <div className="flex flex-wrap gap-2">
              {['عن بُعد', 'سرية وNDA', 'أوروبا والولايات المتحدة'].map((label) => (
                <span
                  key={label}
                  className="border-border bg-muted/40 text-muted-foreground rounded-lg border px-2.5 py-1 text-xs font-light"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="min-w-0 w-full md:flex-1 md:pt-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 md:gap-x-10 lg:grid-cols-3 lg:gap-x-8 xl:gap-10">
              {footerLinks.map((column, columnIndex) => (
                <div key={columnIndex} className="min-w-0">
                  <p className="text-foreground mb-3 text-sm font-medium tracking-tight">
                    {column.title}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1 sm:flex sm:flex-col sm:gap-x-0 sm:gap-y-2">
                    {column.links.map((link) => (
                      <li
                        key={link.id}
                        className="group text-muted-foreground flex min-w-0 cursor-pointer items-center justify-start gap-1 text-[15px]/snug"
                      >
                        <a
                          href={link.url}
                          className="inline-flex min-h-9 min-w-0 flex-1 items-center rounded-sm py-1 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:min-h-0 sm:py-0"
                        >
                          <span className="min-w-0 break-words sm:break-normal">{link.title}</span>
                        </a>
                        <div className="border-border flex size-4 shrink-0 translate-x-0 transform items-center justify-center self-center rounded border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rtl:group-hover:-translate-x-1">
                          <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-0 mt-8 h-40 w-full min-w-0 overflow-hidden sm:mt-10 sm:h-48 md:mt-12 md:h-64">
          <div className="from-40% absolute inset-0 z-10 bg-gradient-to-t from-transparent to-background" />
          <div className="absolute inset-y-0 start-4 end-4 sm:start-6 sm:end-6 md:start-8 md:end-8">
            <FlickeringGrid
              text={tablet ? 'فيلفت أوبس' : 'منتجات بذوقٍ راقٍ.'}
              fontSize={narrow ? 48 : tablet ? 70 : 90}
              className="h-full w-full min-w-0"
              squareSize={2}
              gridGap={narrow ? 2 : tablet ? 2 : 3}
              color="var(--muted-foreground)"
              maxOpacity={0.3}
              flickerChance={0.1}
            />
          </div>
        </div>
      </footer>
    </PageSection>
  )
}
