import { PageSection } from '@/components/layout/page-section'
import { PricingCard } from '@/components/ui/pricing'
import { SITE_SECTION_IDS } from '@/lib/site-nav'

export function PricingSection() {
  return (
    <PageSection
      sectionId={SITE_SECTION_IDS.pricing}
      className="section-shell pt-6 pb-20 md:pt-8 md:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col text-start md:text-center">
          <h2 className="section-title mb-3 md:mb-4 lg:mb-6">
            <span className="instrument font-semibold not-italic">الشراكات</span>
          </h2>
          <p className="section-lede mx-auto mb-6 md:mb-8 lg:mb-12">
            طريقتان للعمل معنا—مشاريع بمدى محدد أو شراكة مستمرة. تُحدَّد النطاقات والتقديرات بعد
            مكالمة اكتشاف قصيرة.
          </p>
        </div>

        <div className="bg-card flex flex-col justify-between rounded-xl border p-1 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row">
            <PricingCard
              title="الاستوديو"
              price="من ١٨ ألف دولار"
              description="مشاريع بحدود واضحة: اكتشاف، تصميم، وبناء واجهة—مناسبة لنسخة أولى، إعادة تصميم، أو شاشة جديدة في المنتج."
              buttonVariant="outline"
              ctaLabel="ناقش النطاق"
              features={[
                'ورشة اكتشاف وموجز مكتوب',
                'مسارات تجربة وواجهات عالية الدقة',
                'تنفيذ React ضمن بيئتكم',
                'مراجعة جودة التصميم حتى الإطلاق',
                'توثيق التسليم والمكوّنات',
              ]}
            />

            <PricingCard
              title="الدمج"
              price="اشتراك شهري"
              description="جزء مخصّص من التصميم والواجهة الأمامية كل شهر—دعم خارطة الطريق والتكرار، وبناء متناسق على المدى الطويل."
              buttonVariant="default"
              highlight
              ctaLabel="خطّط لشراكة"
              highlightLeadIn="كل ما في باقة الاستوديو، إضافةً إلى:"
              features={[
                'قائمة انتظار مرنة ومسار أولوية',
                'صيانة نظام التصميم والتوثيق',
                'تنسيق عمل منتظم بين الفرق (مناسب للعمل عن بُعد وبأوقات مختلفة)',
                'نماذج أولية ودعم حملات',
                'مراجعة استراتيجية وشهرية للمؤشرات',
                'أولوية في الإطلاق والمعالجات العاجلة',
                'قناة Slack أو ما يعادلها',
                'ساعات مرنة مع حد أدنى للمدة',
                'ورش مكثفة في الموقع (اختياري)',
              ]}
            />
          </div>
        </div>
      </div>
    </PageSection>
  )
}
