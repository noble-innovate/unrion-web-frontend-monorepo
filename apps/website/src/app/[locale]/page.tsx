import Image from 'next/image';

import HomePageHeroImage from '@website/root/public/images/home-page-hero-image.png';
import { getUserCountryCode, getUserJobs } from '@website/app/data';
import JobsSection from '@website/components/home/jobs-section';

import JobSearchForm from '@website/components/common/job-search-form';
import { localeContents } from '@website/locale-contents/utils';

interface IHomePage {
  params: any;
}

export default async function HomePage({ params }: IHomePage) {
  const { homePage, jobFilterTexts, jobFilters, noJobsError } =
    localeContents.en;

  // const userCountryCode = await getUserCountryCode();
  const userCountryCode = 'ca';
  const jobs = await getUserJobs(userCountryCode);

  return (
    <main>
      <section className='lg:h-60 bg-rose-50 pb-5 lg:pb-0 border-b border-rose-200'>
        <div className='h-full contained flex'>
          <div className='h-full flex flex-col justify-center items-center lg:items-start w-full lg:w-[55rem] relative z-10'>
            <h1 className='text-BodyXL lg:text-HeadingBASE font-medium my-5 text-center lg:text-left lg:my-0 lg:mb-5'>
              {homePage.title}
            </h1>

            <JobSearchForm
              keywordInputPlaceholder={
                jobFilters.search?.keywordInputPlaceholder
              }
              cityInputPlaceholder={jobFilters.search?.cityInputPlaceholder}
              citySearchInputPlaceholder={
                jobFilters.search?.citySearchInputPlaceholder
              }
              countrySearchInputPlaceholder={
                jobFilters.search?.countrySearchInputPlaceholder
              }
              countryInputPlaceholder={
                jobFilters.search?.countryInputPlaceholder
              }
              jobSearchSubmitButtonText={
                jobFilters.search?.jobSearchSubmitButtonText
              }
              userCountryCode={userCountryCode}
            />
          </div>

          <div className='hidden lg:block relative w-[20rem] -ml-5'>
            <Image
              className='object-cover object-top'
              src={HomePageHeroImage}
              alt='Collage of different people portrait embedded in the U shape'
              fill
            />
          </div>
        </div>
      </section>

      <section className='contained relative z-10 bg-white'>
        <JobsSection
          jobs={jobs}
          userCountryCode={userCountryCode}
          jobFilterTexts={jobFilterTexts}
          jobFilters={jobFilters}
          noJobsError={noJobsError}
        />
      </section>
    </main>
  );
}
