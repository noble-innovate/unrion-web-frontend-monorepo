import JobSearchForm from '@website/components/common/job-search-form';
import { localeContents } from '@website/locale-contents/utils';
import JobFilters from '@website/components/common/job-filters';
import JobData from '@website/components/job-search/job-data';

interface IJobSearchPage {}

export default async function JobSearchPage() {
  const {
    jobSearchPage,
    jobFilterTexts,
    jobFilters,
    noJobsError,
    jobDescriptionTexts,
    resumeUploadForm,
  } = localeContents.en;

  return (
    <main>
      <section className='py-2 border-y border-gray-200'>
        <div className='flex items-center justify-between contained'>
          <div className='w-[55rem]'>
            <JobSearchForm {...jobFilters.search} />
          </div>

          <JobFilters jobFilters={jobFilters} {...jobFilterTexts} />
        </div>
      </section>

      <section className='contained h-screen'>
        <JobData
          noJobsError={noJobsError}
          jobDescriptionTexts={jobDescriptionTexts}
          resumeUploadForm={resumeUploadForm}
          {...jobSearchPage}
        />
      </section>
    </main>
  );
}
