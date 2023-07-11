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
        <table className='w-full border-separate border-spacing-y-3 text-BodySM'>
          <tbody>
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
                <tr
                  key={id}
                  className='bg-white group cursor-pointer'
                  onClick={() =>
                    router.push(`job-search?c=${userCountryCode}&ji=${index}`)
                  }
                >
                  <td className='py-1 px-5 border-y border-l border-neutral-100 rounded-l-full text-neutral-400  group-hover:border-gray-300'>
                    {formatDistanceToNowStrict(new Date(created), {
                      addSuffix: true,
                    })}
                  </td>
                  <td className='py-1 px-5 border-y border-neutral-100 group-hover:border-gray-300'>
                    <h1 className='font-semibold'>{title}</h1>
                    <p className='text-neutral-600'>{company.display_name}</p>
                  </td>
                  <td className='py-1 px-5 pr-2 border-y border-neutral-100 group-hover:border-gray-300'>
                    {contract_time && (
                      <Badge
                        className='py-1 px-2 text-BodyXS  font-medium group-hover:text-neutral-900 whitespace-nowrap'
                        variant='secondary'
                      >
                        {contractMap[contract_time]}
                      </Badge>
                    )}
                  </td>
                  <td className='py-1 px-5 pl-2 border-y border-neutral-100 group-hover:border-gray-300'>
                    {contract_type && (
                      <Badge
                        className='py-1 px-2 text-BodyXS font-medium group-hover:text-neutral-900 whitespace-nowrap'
                        variant='secondary'
                      >
                        {contractMap[contract_type]}
                      </Badge>
                    )}
                  </td>
                  <td className='py-1 px-5 border-y border-neutral-100 whitespace-nowrap group-hover:border-gray-300'>
                    {location.area.slice(0, 2).reverse().join(', ')}
                  </td>
                  <td className='py-1 px-5 border-y border-r border-neutral-100 rounded-r-full text-neutral-300 group-hover:text-neutral-600 group-hover:border-gray-300'>
                    <span className='flex items-end justify-end'>
                      <FiChevronRight />
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </Fragment>
  );
}
