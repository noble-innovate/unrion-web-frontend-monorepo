'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import useJob from '@website/hooks/use-job';
import { Loader } from '@packages/ui/components';
import NoJobsError, {
  INoJobsError,
} from '@website/components/common/no-jobs-error';
import JobCard from '@website/components/job-search/job-card';
import JobDescription, {
  IJobDescriptionTexts,
} from '@website/components/job-search/job-description';
import { IResumeUploadForm } from '@website/components/common/resume-upload-form';

export type TContractTime = 'part_time' | 'full_time';
export type TContractType = 'permanent' | 'contract';

export interface IJob {
  id: string;
  title: string;
  redirect_url: string;
  company: { display_name: string };
  description: string;
  contract_time?: TContractTime;
  contract_type?: TContractType;
  location: { area: string[]; display_name: string };
  created: string;
  salary_max?: number;
  salary_min?: number;
}

interface IJobData {
  jobDescriptionTexts: IJobDescriptionTexts;
  noJobsError: INoJobsError;
  jobApplicationTitle: string;
  jobApplicationBtnTxt: string;
  resumeUploadForm: IResumeUploadForm;
  applyingForJobTxt: string;
  jobApplicationSuccessTxt: string;
  jobApplicationErrorTxt: string;
  savedJobIds: string[];
}

export default function JobData({
  jobDescriptionTexts,
  noJobsError,
  jobApplicationTitle,
  jobApplicationBtnTxt,
  resumeUploadForm,
  applyingForJobTxt,
  jobApplicationSuccessTxt,
  jobApplicationErrorTxt,
  savedJobIds,
}: IJobData) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const countryCode = searchParams.get('c');
  const jobIndex = parseInt(searchParams.get('ji') ?? '');

  const [activeJobIndex, setActiveJobIndex] = useState(jobIndex ?? 0);

  const {
    isLoadingJobs,
    getJobsError,
    jobs,
    fetchJobs,
    jobDescription,
    getJobDescriptionError,
    isLoadingJobDescription,
    getFullJobDescription,
  } = useJob();

  useEffect(() => {
    if (!countryCode) return router.push('/');

    setActiveJobIndex(jobIndex);

    const query = searchParams.toString();

    fetchJobs(countryCode, query);
  }, [searchParams]);

  useEffect(() => {
    if (jobs?.[activeJobIndex])
      getFullJobDescription(jobs?.[activeJobIndex]?.redirect_url);
  }, [jobs]);

  if (isLoadingJobs)
    return (
      <div className='py-20 flex items-center justify-center'>
        <Loader />
      </div>
    );

  if (!jobs || jobs?.length < 1 || (!isLoadingJobs && getJobsError))
    return (
      <div className='py-20'>
        <NoJobsError {...noJobsError} />
      </div>
    );

  return (
    <div className='flex py-2 gap-2 h-full'>
      <div className='flex flex-col text-BodySM w-full lg:w-[28rem] gap-2 h-full overflow-scroll pb-72'>
        {jobs?.map((job, index) => (
          <JobCard
            key={job.id}
            job={job}
            active={index === activeJobIndex}
            bookmarked={savedJobIds?.includes(job.id)}
            moreDetailsBtnTxt={jobDescriptionTexts?.moreDetailsBtnTxt}
            onSelect={() => {
              setActiveJobIndex(index);

              const newQueryParams = new URLSearchParams(searchParams);
              newQueryParams.set('ji', `${index}`);
              router.push(`${pathname}?${newQueryParams}`);

              getFullJobDescription(job?.redirect_url ?? '');
            }}
          />
        ))}
      </div>

      <div className='hidden lg:block border border-neutral-500 rounded-lg h-fit max-h-full flex-1 p-5 overflow-scroll'>
        {isLoadingJobDescription && (
          <div className='py-20 flex items-center justify-center'>
            <Loader />
          </div>
        )}

        {!isLoadingJobDescription && getJobDescriptionError && (
          <div className='py-20 flex items-center justify-center'>
            <p>{jobDescriptionTexts?.noDescriptionTxt}</p>
          </div>
        )}

        {!isLoadingJobDescription && !getJobDescriptionError && (
          <JobDescription
            job={jobs?.[activeJobIndex]}
            descriptionRichText={jobDescription}
            jobDescriptionTexts={jobDescriptionTexts}
            jobApplicationTitle={jobApplicationTitle}
            jobApplicationBtnTxt={jobApplicationBtnTxt}
            resumeUploadForm={resumeUploadForm}
            applyingForJobTxt={applyingForJobTxt}
            jobApplicationSuccessTxt={jobApplicationSuccessTxt}
            jobApplicationErrorTxt={jobApplicationErrorTxt}
            bookmarked={savedJobIds?.includes(jobs?.[activeJobIndex]?.id)}
          />
        )}
      </div>
    </div>
  );
}
