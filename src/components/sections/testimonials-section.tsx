import type { Testimonial } from '@/components/ui/testimonials'
import { TestimonialSection } from '@/components/ui/testimonials'
import { PageSection } from '@/components/layout/page-section'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

/** صور بورتريه 3:4 — الملفات في public/testimonials/ بصيغة .jpeg */
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      'أدخلت فيلفت أوبس هيكلًا وذوقًا إلى خارطة طريق مليئة بالفوضى. سلّموا نسخة أولى جديرة بالثقة وتركوا فريقنا بنظام ما زلنا نوسّعه.',
    name: 'نورة السعد',
    role: 'نائبة المنتج، شركة أفق البيانات',
    imageSrc: '/testimonials/noura-al-saad.jpeg',
  },
  {
    id: 2,
    quote:
      'أخيرًا موقع إطلاق يعكس المنتج. فهمت فيلفت أوبس السرد والتنفيذ، لا مجرد شاشات جميلة.',
    name: 'ليان المطيري',
    role: 'المؤسسة المشاركة، سِلمى للتجارة',
    imageSrc: '/testimonials/layan-almutairi.jpeg',
  },
  {
    id: 3,
    quote:
      'جودة التصميم واضحة—لكن الأهم أنهم انسجموا مع الهندسة. مفاجآت أقل ودمج أسرع في كل إصدار.',
    name: 'خالد الرشيد',
    role: 'رئيس التقنية، مجمع نُور الطبي',
    imageSrc: '/testimonials/khaled-alrashid.jpeg',
  },
]

export function TestimonialsSection() {
  return (
    <PageSection sectionId={SITE_SECTION_IDS.testimonials} className="section-shell bg-background">
      <TestimonialSection
        title={
          <>
            <span className="instrument font-semibold not-italic">آراء</span> العملاء
          </>
        }
        subtitle="شهادات من فرق تعاونّا معها في المنتج والهندسة—كلام واقعي عن التعاون، لا أرقام مُصطنعة."
        testimonials={testimonialsData}
      />
    </PageSection>
  )
}
