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
  console.log(params);

  const { atsPage: pageContents, faqSection } =
    localeContents[params.local as keyof localeContents];
  const {
    heroIntroText,
    heroTitle,
    benefits,
    benefitsInfoTitle,
    benefitsInfo1,
    benefitsInfo2,
    applicantImageUrls,
  } = pageContents;

  return (
    <main className='bg-rose-50 pb-20'>
      <HeroSection
        // heroIntroText={heroIntroText}
        // heroTitle={heroTitle}
        // benefits={benefits}
        // benefitsInfoTitle={benefitsInfoTitle}
        // benefitsInfo1={benefitsInfo1}
        // benefitsInfo2={benefitsInfo2}
        // applicantImageUrls={applicantImageUrls}
        {...pageContents}
      />
      <BrandSection {...pageContents} />
      <FeatureSection1
        // title={pageContents.features?.saveCost?.title}
        // description={pageContents.features?.saveCost?.description}
        // imageUrl={pageContents.features?.saveCost?.imageUrl}
        {...pageContents.features?.saveCost}
      />
      <FeatureSection2
        // title={pageContents.features?.bias?.title}
        // description={pageContents.features?.bias?.description}
        // imageUrl={pageContents.features?.bias?.imageUrl}
        {...pageContents.features?.bias}
      />
      <FeatureSection3
        // title={pageContents.features?.powerful?.title}
        // description={pageContents.features?.powerful?.description}
        // imageUrl={pageContents.features?.powerful?.imageUrl}
        // processes={pageContents.features?.powerful?.processes}
        {...pageContents.features?.powerful}
      />
      <FeatureSection4
        // title={pageContents.features?.schedule?.title}
        // description={pageContents.features?.schedule?.description}
        // imageUrl={pageContents.features?.schedule?.imageUrl}
        {...pageContents.features?.schedule}
      />
      <FeatureSection5
        // title={pageContents.features?.engage?.title}
        // description={pageContents.features?.engage?.description}
        // imageUrl={pageContents.features?.engage?.imageUrl}
        // services={pageContents.features?.engage?.services}
        {...pageContents.features?.engage}
      />
      <FAQSection
        // titleQ={faqSection.titleQ}
        // titleA={faqSection.titleA}
        // faqs={faqSection.faqs}
        {...faqSection}
      />
      <WaitListSection
        waitlistSectionContent={pageContents.waitingListSection}
      />
    </main>
  );
}
