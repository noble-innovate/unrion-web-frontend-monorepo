import React, { Fragment } from 'react';

import Link from 'next/link';

import parse from 'html-react-parser';
import { formatDistanceToNowStrict } from 'date-fns';
import { FaRegClock } from 'react-icons/fa';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

import { Badge, Button } from '@packages/ui/components';

import {
  IJob,
  TContractTime,
  TContractType,
} from '@website/components/job-search/job-data';

export const contractMap: Record<TContractTime | TContractType, string> = {
  part_time: 'Part time',
  full_time: 'Full time',
  permanent: 'Permanent',
  contract: 'Contract',
};

export interface IJobDescriptionTexts {
  noDescriptionTxt: string;
  moreDetailsBtnTxt: string;
  applyBtnTxt: string;
  saveBtnTxt: string;
}

interface IJobDescription {
  job: IJob;
  descriptionRichText?: string;
  jobDescriptionTexts: IJobDescriptionTexts;
}

export default function JobDescription({
  job,
  descriptionRichText,
  jobDescriptionTexts,
}: IJobDescription) {
  const { moreDetailsBtnTxt, applyBtnTxt, saveBtnTxt } = jobDescriptionTexts;

  const {
    title,
    company,
    description,
    redirect_url,
    contract_time,
    contract_type,
    location,
    created,
  } = job ?? {};

  return (
    <div className='p-2 text-BodySM'>
      <div className='border-b border-rose-900 p-2 mb-5'>
        {created && (
          <span className='font-medium flex items-center gap-1 text-BodyXS mb-2 text-neutral-500'>
            <FaRegClock />
            {formatDistanceToNowStrict(new Date(created), {
              addSuffix: true,
            })}
          </span>
        )}
        <h1 className='font-semibold text-HeadingSM'>{title}</h1>
        <h3 className='text-rose-900 font-medium'>
          {company?.display_name?.toUpperCase()}
        </h3>
        <p className='text-neutral-600 mt-2'>
          {location?.area?.slice(0, 2)?.reverse()?.join(', ')}
        </p>

        <div className='flex items-center flex-wrap mt-3 mb-1 gap-5'>
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

        <CTAButtons applyBtnTxt={applyBtnTxt} saveBtnTxt={saveBtnTxt} />
      </div>

      <div className='job-description-box pb-72'>
        {descriptionRichText && (
          <Fragment>
            {parse(descriptionRichText)}
            <div className='flex justify-end'>
              <CTAButtons applyBtnTxt={applyBtnTxt} saveBtnTxt={saveBtnTxt} />
            </div>
          </Fragment>
        )}

        {!descriptionRichText && (
          <div className='flex flex-col items-end w-full gap-5'>
            <p>
              {description}
              <span>
                {' '}
                <Link
                  className='gap-2 w-fit items-center text-rose-900 inline-flex'
                  href={redirect_url ?? '#'}
                  target='_blank'
                >
                  <span>{moreDetailsBtnTxt}</span>
                  <BsBoxArrowInUpRight className='text-lg' />
                </Link>
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////
//CTA Buttons component
/////////////////////////////////////////////////////////////////////////////

interface ICTAButtons {
  applyBtnTxt: string;
  saveBtnTxt: string;
}

const CTAButtons = ({ applyBtnTxt, saveBtnTxt }: ICTAButtons) => (
  <div className='flex items-center gap-5 mt-5 sticky top-0'>
    <Button className='gap-2'>
      <span>{applyBtnTxt}</span>
      <BsBoxArrowInUpRight className='text-lg' />
    </Button>

    <Button variant='outline'>{saveBtnTxt}</Button>
  </div>
);