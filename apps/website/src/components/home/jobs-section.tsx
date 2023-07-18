'use client';

import { useEffect, useState } from 'react';

import JobFilters, {
  IJobFilterTexts,
  IJobFilters,
} from '@website/components/common/job-filters';
import { IJob } from '@website/components/job-search/job-data';
import JobList from '@website/components/home/jobs-list';
import { INoJobsError } from '@website/components/common/no-jobs-error';

interface IJobsSection {
  jobs: IJob[];
  userCountryCode: string;
  jobFilterTexts: IJobFilterTexts;
  jobFilters: IJobFilters;
  noJobsError: INoJobsError;
}

export default function JobsSection({
  jobs,
  userCountryCode,
  jobFilterTexts,
  jobFilters,
  noJobsError,
}: IJobsSection) {
  const [currentJobs, setCurrentJobs] = useState<IJob[]>([]);

  useEffect(() => {
    setCurrentJobs(jobs);
  }, []);

  return (
    <div className='flex flex-col items-end w-full py-5 gap-2'>
      <JobFilters
        {...jobFilterTexts}
        jobFilters={jobFilters}
        userCountryCode={userCountryCode}
      />

      <JobList
        jobs={currentJobs}
        noJobsError={noJobsError}
        userCountryCode={userCountryCode}
      />
    </div>
  );
}
