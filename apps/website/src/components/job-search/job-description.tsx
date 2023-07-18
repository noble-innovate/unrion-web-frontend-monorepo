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
import JobApplicationForm from '@website/components/job-search/job-application-form';
import { IResumeUploadForm } from '@website/components/common/resume-upload-form';
import BookmarkButton from '@website/components/job-search/bookmark-button';

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
  jobApplicationTitle: string;
  jobApplicationBtnTxt: string;
  resumeUploadForm: IResumeUploadForm;
  applyingForJobTxt: string;
  jobApplicationSuccessTxt: string;
  jobApplicationErrorTxt: string;
  bookmarked: boolean;
}

export default function JobDescription({
  job,
  descriptionRichText,
  jobDescriptionTexts,
  jobApplicationTitle,
  jobApplicationBtnTxt,
  resumeUploadForm,
  applyingForJobTxt,
  jobApplicationSuccessTxt,
  jobApplicationErrorTxt,
  bookmarked,
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
        <div className='flex items-center justify-between mb-5'>
          <span className='font-medium flex items-center gap-1 text-BodyXS text-neutral-500'>
            {created && (
              <Fragment>
                <FaRegClock />
                {formatDistanceToNowStrict(new Date(created), {
                  addSuffix: true,
                })}
              </Fragment>
            )}
          </span>

          <BookmarkButton bookmarked={bookmarked} />
        </div>

        <h1 className='font-semibold text-HeadingSM'>{title}</h1>
        <h3 className='text-rose-900 font-medium'>
          {company?.display_name?.toUpperCase()}
        </h3>
        <p className='text-neutral-600 mt-2'>
          {location?.area?.slice(0, 3)?.reverse()?.join(', ')}
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

        <CTAButtons
          job={job}
          applyBtnTxt={applyBtnTxt}
          saveBtnTxt={saveBtnTxt}
          jobApplicationTitle={jobApplicationTitle}
          jobApplicationBtnTxt={jobApplicationBtnTxt}
          resumeUploadForm={resumeUploadForm}
          applyingForJobTxt={applyingForJobTxt}
          jobApplicationSuccessTxt={jobApplicationSuccessTxt}
          jobApplicationErrorTxt={jobApplicationErrorTxt}
        />
      </div>

      <div className='job-description-box pb-72'>
        {descriptionRichText && (
          <Fragment>
            {parse(descriptionRichText)}
            <div className='flex justify-end'>
              <CTAButtons
                job={job}
                applyBtnTxt={applyBtnTxt}
                saveBtnTxt={saveBtnTxt}
                jobApplicationTitle={jobApplicationTitle}
                jobApplicationBtnTxt={jobApplicationBtnTxt}
                resumeUploadForm={resumeUploadForm}
                applyingForJobTxt={applyingForJobTxt}
                jobApplicationSuccessTxt={jobApplicationSuccessTxt}
                jobApplicationErrorTxt={jobApplicationErrorTxt}
              />
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
  job: IJob;
  applyBtnTxt: string;
  saveBtnTxt: string;
  jobApplicationTitle: string;
  jobApplicationBtnTxt: string;
  resumeUploadForm: IResumeUploadForm;
  applyingForJobTxt: string;
  jobApplicationSuccessTxt: string;
  jobApplicationErrorTxt: string;
}

export const CTAButtons = ({
  job,
  applyBtnTxt,
  saveBtnTxt,
  resumeUploadForm,
  jobApplicationBtnTxt,
  jobApplicationTitle,
  applyingForJobTxt,
  jobApplicationSuccessTxt,
  jobApplicationErrorTxt,
}: ICTAButtons) => (
  <div className='flex items-center gap-5 mt-5 sticky top-0'>
    <Link
      className='w-fit flex items-center gap-2 h-9 px-4 py-2 rounded-md text-sm whitespace-nowrap bg-rose-900 text-white shadow hover:bg-rose-900/90'
      href={job.redirect_url ?? '#'}
      target='_blank'
    >
      <span>{applyBtnTxt}</span>
      <BsBoxArrowInUpRight className='text-lg' />
    </Link>
    {/* <JobApplicationForm
      job={job}
      applyBtnTxt={applyBtnTxt}
      jobApplicationTitle={jobApplicationTitle}
      resumeUploadForm={resumeUploadForm}
      jobApplicationBtnTxt={jobApplicationBtnTxt}
      applyingForJobTxt={applyingForJobTxt}
      jobApplicationSuccessTxt={jobApplicationSuccessTxt}
      jobApplicationErrorTxt={jobApplicationErrorTxt}
    /> */}

    {/* <Button variant='outline'>{saveBtnTxt}</Button> */}
  </div>
);
