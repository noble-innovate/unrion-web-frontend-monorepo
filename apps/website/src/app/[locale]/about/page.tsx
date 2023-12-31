import Image from 'next/image';
import Link from 'next/link';

import parse from 'html-react-parser';

import { localeContents } from '@website/locale-contents/utils';

export default function AboutUsPage() {
  const { aboutUs, contactUs } = localeContents.en;

  return (
    <main>
      <section className='bg-rose-50'>
        <div className='contained flex flex-col lg:flex-row items-end gap-5 lg:gap-24 py-10 lg:py-20'>
          <div className='text-HeadingSM lg:text-HeadingXL w-full lg:w-1/2'>
            <h1>{aboutUs.title}</h1>
            <h2 className='text-rose-800'>{aboutUs.subTitle}</h2>
          </div>

          <p className='w-full lg:w-1/2 text-gray-800 lg:text-BodyLG'>
            {aboutUs.titleText}
          </p>
        </div>

        <div className='relative w-full h-[20rem] lg:h-[32rem]'>
          <Image
            className='object-cover'
            src='https://unrion-website-mages.s3.us-east-2.amazonaws.com/about-us-hero.jpg'
            alt='Festive holiday office party in #WindowsUglySweater Softwear by @Windows'
            fill
          />
        </div>
      </section>

      <section className='contained py-10 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-40 border-t-2 border-rose-100 py-5 lg:py-10'>
          <h2 className='text-HeadingSM lg:text-HeadingLG'>
            {aboutUs.employerInfo.title}
          </h2>

          <p className='text-BodySM lg:text-BodyLG w-full lg:w-1/2'>
            {parse(aboutUs.employerInfo.description)}
          </p>
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-end gap-5 lg:gap-40 border-t-2 border-rose-100 py-5 lg:py-10'>
          <h2 className='text-HeadingSM lg:text-HeadingLG'>
            {aboutUs.jobSeekersInfo.title}
          </h2>

          <p className='text-BodySM lg:text-BodyLG w-full lg:w-1/2'>
            {parse(aboutUs.jobSeekersInfo.description)}
          </p>
        </div>
      </section>

      <section className='contained flex justify-center py-5 lg:py-10 mb-10 lg:mb-20'>
        <div className='text-BodyXL lg:text-HeadingSM'>
          <Link
            className='w-fit flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-md text-BodyXL  lg:text-Body2XL whitespace-nowrap bg-rose-900 text-white shadow hover:bg-rose-900/90'
            href={'/contact'}
          >
            <span>{contactUs.subTitle}</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
