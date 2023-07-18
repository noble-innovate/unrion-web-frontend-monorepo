'use client';

import { Fragment } from 'react';

import { useRouter } from 'next/navigation';

import { formatDistanceToNowStrict } from 'date-fns';
import { FiChevronRight } from 'react-icons/fi';

import { Badge } from '@packages/ui/components';

import NoJobsError, {
  INoJobsError,
} from '@website/components/common/no-jobs-error';
import { IJob } from '@website/components/job-search/job-data';
import { contractMap } from '@website/components/job-search/job-description';

interface IJobList {
  jobs: IJob[];
  noJobsError: INoJobsError;
  userCountryCode: string;
}

export default function JobList({
  jobs,
  noJobsError,
  userCountryCode,
}: IJobList) {
  const router = useRouter();

  const hasJobs = jobs.length > 0;

  return (
    <Fragment>
      {!hasJobs && (
        <div className='mt-10'>
          <NoJobsError {...noJobsError} />
        </div>
      )}

      {hasJobs && (
        <div className='flex flex-col text-BodySM gap-3 w-full'>
          {jobs.map(
            (
              {
                id,
                title,
                company,
                contract_time,
                contract_type,
                location,
                created,
              },
              index
            ) => (
              <div
                key={id}
                className='flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-2 lg:gap-5 rounded-lg lg:rounded-full border border-neutral-100 p-2 lg:py-1 lg:px-5  hover:border-gray-300 cursor-pointer'
                onClick={() =>
                  router.push(`job-search?c=${userCountryCode}&ji=${index}`)
                }
              >
                <p className='text-neutral-400 lg:w-40'>
                  {formatDistanceToNowStrict(new Date(created), {
                    addSuffix: true,
                  })}
                </p>

                <div className='lg:flex-1 mb-2 lg:mb-0'>
                  <h1 className='font-semibold'>{title}</h1>
                  <p className='text-neutral-600'>{company.display_name}</p>
                </div>

                <div className='flex items-center gap-3 lg:w-2/12'>
                  {contract_time && (
                    <Badge
                      className='py-1 px-2 text-BodyXS  font-medium group-hover:text-neutral-900 whitespace-nowrap'
                      variant='secondary'
                    >
                      {contractMap[contract_time]}
                    </Badge>
                  )}

                  {contract_type && (
                    <Badge
                      className='py-1 px-2 text-BodyXS font-medium group-hover:text-neutral-900 whitespace-nowrap'
                      variant='secondary'
                    >
                      {contractMap[contract_type]}
                    </Badge>
                  )}
                </div>

                <p className='whitespace-nowrap w-3/12'>
                  {location.area.slice(0, 3).reverse().join(', ')}
                </p>

                <FiChevronRight className='hidden lg:flex items-end justify-end' />
              </div>
            )
          )}
        </div>
      )}
    </Fragment>
  );
}
