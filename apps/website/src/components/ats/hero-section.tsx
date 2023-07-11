import Image from 'next/image';

import ATSPageHeroImage from '@website/root/public/images/ats-page-hero-image.png';
import AIText from '@website/root/public/icons/ai-text.svg';
import SemiClock from '@website/root/public/icons/semi-clock.svg';

type TBenefits = Record<
  'aiPowered' | 'reducedCost' | 'easySetup',
  Record<'id' | 'display', string>
>;

interface IHeroSection {
  heroIntroText: string;
  heroTitle: string;
  benefits: TBenefits;
  benefitsInfoTitle: string;
  benefitsInfo1: string;
  benefitsInfo2: string;
  applicantImageUrls: string[];
}

export default function HeroSection({
  heroIntroText,
  heroTitle,
  benefits,
  benefitsInfoTitle,
  benefitsInfo1,
  benefitsInfo2,
  applicantImageUrls,
}: IHeroSection) {
  return (
    <section className='contained flex flex-col items-center py-8'>
      <h5 className='pt-12 pb-5 text-HeadingXS text-rose-900'>
        {heroIntroText}
      </h5>
      <h1 className='text-Heading2XL text-center font-medium max-w-[76rem] pb-12'>
        {heroTitle}
      </h1>

      <div className='w-full flex items-center justify-between gap-5'>
        <div className='flex flex-col gap-14 text-rose-900'>
          <div className='flex items-center gap-4'>
            <Image
              className='w-14'
              src={AIText}
              alt='Articial intelligence (AI) text'
              width={86}
              height={81}
            />
            <p>
              {benefits.aiPowered?.display} <sup className=''>✨</sup>
            </p>
          </div>

          <div>
            <h5 className='text-HeadingLG text-neutral-900'>40%</h5>
            <p>{benefits.reducedCost?.display}</p>
          </div>

          <div className='flex items-center'>
            <Image
              className='w-20'
              src={SemiClock}
              alt='A minimal clock with only the minute and hour hand'
              width={95}
              height={100}
            />

            <p className='leading-none -ml-5'>{benefits.easySetup?.display}</p>
          </div>
        </div>

        <Image
          className=''
          src={ATSPageHeroImage}
          alt='Hand of a lady typing on a macbook, wearing rings on both hands, bangles on the right hand and a wrist watch on the left'
          width={540}
          height={746.81}
        />

        <div className='flex flex-col gap-6 max-w-[14rem] text-rose-900'>
          <h5 className='text-BodyLG font-medium text-neutral-900'>
            {benefitsInfoTitle}
          </h5>

          <div className='flex items-center gap-2'>
            {applicantImageUrls.map((applicantImageUrl, index) => (
              <div key={index} className='relative rounded-full h-10 w-10'>
                <Image
                  className='object-cover rounded-full'
                  src={applicantImageUrl}
                  alt={`Applicant image ${index}`}
                  fill
                />
              </div>
            ))}
            <p className='text-neutral-900'>10+</p>
          </div>
          <hr />

          <p>{benefitsInfo1}</p>

          <p>{benefitsInfo2}</p>
        </div>
      </div>
    </section>
  );
}
