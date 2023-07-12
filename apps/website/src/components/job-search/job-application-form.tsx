'use client';

import { useState } from 'react';

import { BsBoxArrowInUpRight } from 'react-icons/bs';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@packages/ui/components';

import ResumeUploadForm, {
  IResumeUploadForm,
} from '@website/components/common/resume-upload-form';
import { IJob } from '@website/components/job-search/job-data';

export interface IJobApplicationForm {
  job: IJob;
  jobApplicationTitle: string;
  applyBtnTxt: string;
  resumeUploadForm: IResumeUploadForm;
  jobApplicationBtnTxt: string;
  applyingForJobTxt: string;
  jobApplicationSuccessTxt: string;
  jobApplicationErrorTxt: string;
}

export default function JobApplicationForm({
  job,
  jobApplicationTitle,
  applyBtnTxt,
  resumeUploadForm,
  jobApplicationBtnTxt,
  applyingForJobTxt,
  jobApplicationSuccessTxt,
  jobApplicationErrorTxt,
}: IJobApplicationForm) {
  const [open, setOpen] = useState<boolean>();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='w-fit flex items-center gap-2 h-9 px-4 py-2 rounded-md text-sm whitespace-nowrap bg-rose-900 text-white shadow hover:bg-rose-900/90'>
        <span>{applyBtnTxt}</span>
        <BsBoxArrowInUpRight className='text-lg' />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{jobApplicationTitle}</DialogTitle>
        </DialogHeader>

        <hr />
        <div className='my-2'>
          <h1 className='font-semibold'>{job?.title}</h1>
          <h3 className='text-rose-900 text-BodyXS'>
            {job?.company?.display_name}
          </h3>
          <p className='text-neutral-500 text-BodyXS'>
            {job?.location?.display_name}
          </p>
        </div>

        <ResumeUploadForm
          {...resumeUploadForm}
          uploadingResumeTxt={applyingForJobTxt}
          resumeUploadSuccessTxt={jobApplicationSuccessTxt}
          resumeUploadErrorTxt={jobApplicationErrorTxt}
          submitBtnTxt={jobApplicationBtnTxt}
          job={job}
        />
      </DialogContent>
    </Dialog>
  );
}
