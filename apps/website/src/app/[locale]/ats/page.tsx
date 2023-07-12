import BrandSection from '@website/components/ats/brand-section';
import FAQSection from '@website/components/ats/faq-section';
import FeatureSection1 from '@website/components/ats/feature-section-1';
import FeatureSection2 from '@website/components/ats/feature-section-2';
import FeatureSection3 from '@website/components/ats/feature-section-3';
import FeatureSection4 from '@website/components/ats/feature-section-4';
import FeatureSection5 from '@website/components/ats/feature-section-5';
import HeroSection from '@website/components/ats/hero-section';
import WaitListSection from '@website/components/ats/wailist-section';
import { TLocale, localeContents } from '@website/locale-contents/utils';

interface IATSPage {
  params: { local: TLocale };
}

export default async function ATSPage({ params }: IATSPage) {
  const { atsPage: pageContents, faqSection } = localeContents.en;

  return (
    <main className='bg-rose-50 pb-20'>
      <HeroSection {...pageContents} />
      <BrandSection {...pageContents} />
      <FeatureSection1 {...pageContents.features?.saveCost} />
      <FeatureSection2 {...pageContents.features?.bias} />
      <FeatureSection3 {...pageContents.features?.powerful} />
      <FeatureSection4 {...pageContents.features?.schedule} />
      <FeatureSection5 {...pageContents.features?.engage} />
      <FAQSection {...faqSection} />
      <WaitListSection {...pageContents.waitingListSection} />
    </main>
  );
}
