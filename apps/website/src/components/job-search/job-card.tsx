import { useEffect, useRef } from 'react';

import { FaRegClock } from 'react-icons/fa';
import { formatDistanceToNowStrict } from 'date-fns';

import { Badge, Button } from '@packages/ui/components';
import { cn } from '@packages/utils';

import { IJob } from '@website/components/job-search/job-data';
import { contractMap } from '@website/components/job-search/job-description';
import BookmarkButton from '@website/components/job-search/bookmark-button';

interface IJobCard {
  job: IJob;
  active: boolean;
  bookmarked: boolean;
  onSelect: () => void;
}

export default function JobCard({
  job,
  active,
  bookmarked,
  onSelect,
}: IJobCard) {
  const jobCardRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active && jobCardRef.current)
      jobCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
  }, []);

  const {
    id,
    title,
    description,
    company,
    contract_time,
    contract_type,
    location,
    created,
  } = job ?? {};

  return (
    <Button
      ref={jobCardRef}
      key={id}
      className={cn(
        'p-3 flex flex-col items-start gap-1 border border-neutral-200 rounded-lg h-auto text-neutral-900 text-left hover:bg-neutral-50',
        active && 'border-neutral-500 bg-neutral-100'
      )}
      variant='outline'
      onClick={onSelect}
    >
      <div className='flex justify-between items-center w-full mb-2'>
        {created && (
          <span className='font-medium flex items-center gap-1 text-BodyXS text-neutral-500'>
            <FaRegClock />
            {formatDistanceToNowStrict(new Date(created), {
              addSuffix: true,
            })}
          </span>
        )}

        <BookmarkButton bookmarked={bookmarked} />
      </div>

      <h1 className='font-semibold text-BodyBASE'>{title}</h1>
      <h3 className='text-rose-900 font-medium'>
        {company.display_name?.toUpperCase()}
      </h3>
      <p className='text-neutral-600'>
        {location.area.slice(0, 2).reverse().join(', ')}
      </p>

      <div className='flex items-center flex-wrap mt-3 mb-1'>
        {contract_time && (
          <Badge className='py-1 px-2 text-BodyXS  font-medium group-hover:text-neutral-900 whitespace-nowrap'>
            {contractMap[contract_time]}
          </Badge>
        )}

        {contract_type && (
          <Badge className='py-1 px-2 text-BodyXS font-medium group-hover:text-neutral-900 whitespace-nowrap'>
            {contractMap[contract_type]}
          </Badge>
        )}
      </div>

      <p className='font-light w-full max-h-[8rem]'>
        {`${description.slice(0, 320)} ...`}
      </p>
    </Button>
  );
}
