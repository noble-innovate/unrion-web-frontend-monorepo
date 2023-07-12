'use client';

import { Fragment, ReactNode, useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { FiCheckCircle, FiEdit2 } from 'react-icons/fi';

import {
  Button,
  FileUploadInput,
  IFile,
  Input,
  Loader,
} from '@packages/ui/components';
import { cn } from '@packages/utils';

import useJob from '@website/hooks/use-job';
import { IJob } from '@website/components/job-search/job-data';

export interface IResumeUploadFormValues {
  fullName: string;
  email: string;
  resume: IFile;
}

export interface IResumeUploadForm {
  nameInputPlaceholder: string;
  nameInputErrorMsg: string;
  emailInputPlaceholder: string;
  emailInputErrorMsg: string;
  uploadBtnTxt: string;
  submitBtnTxt: string;
  uploadingResumeTxt: string;
  resumeUploadSuccessTxt: string;
  resumeUploadErrorTxt: string;
  job?: IJob;
}

export default function ResumeUploadForm({
  nameInputPlaceholder,
  nameInputErrorMsg,
  emailInputPlaceholder,
  emailInputErrorMsg,
  uploadBtnTxt,
  submitBtnTxt,
  uploadingResumeTxt,
  resumeUploadSuccessTxt,
  resumeUploadErrorTxt,
  job,
}: IResumeUploadForm) {
  const [uploadedFileName, setUploadedFileName] = useState<string>();

  const {
    register,
    formState: { errors },
    control,
    watch,
    handleSubmit,
  } = useForm<IResumeUploadFormValues>();

  useEffect(() => {
    const watchUploadedFile = watch(({ resume }) =>
      setUploadedFileName(resume?.file?.name)
    );
    return () => watchUploadedFile.unsubscribe();
  }, [watch]);

  const {
    handleUploadResume,
    uploadingResume,
    resumeUploadResponse,
    handleJobApplication,
  } = useJob();

  return (
    <Fragment>
      <form
        className='w-full flex flex-col items-end gap-4'
        noValidate
        onSubmit={handleSubmit(
          job ? (d) => handleJobApplication(d, job) : handleUploadResume
        )}
      >
        <div className='w-full'>
          <Input
            id='fullName'
            placeholder={nameInputPlaceholder}
            type='text'
            {...register('fullName', {
              required: nameInputErrorMsg,
              pattern: {
                value: /^[A-Za-z]+( [A-Za-z]+)+$/,
                message: nameInputErrorMsg,
              },
            })}
          />
          {errors.fullName && <ErrorText>{errors.fullName?.message}</ErrorText>}
        </div>

        <div className='w-full'>
          <Input
            id='email'
            placeholder={emailInputPlaceholder}
            type='email'
            {...register('email', {
              required: emailInputErrorMsg,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: emailInputErrorMsg,
              },
            })}
          />
          {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
        </div>

        <Controller
          control={control}
          name='resume'
          render={({ field: { onChange } }) => (
            <div
              className={cn(
                'relative border-2 border-dashed w-full rounded-md flex flex-col justify-center items-center',
                uploadedFileName ? 'border-neutral-500' : 'border-gray-300'
              )}
            >
              <FileUploadInput
                className='absolute inset-0 h-full w-full opacity-0 cursor-pointer'
                accept='.pdf, .doc, .docx'
                onUpload={(files) => onChange(files?.[0])}
              />

              {uploadedFileName && (
                <div className='flex items-center justify-between gap-2 w-full p-5'>
                  <p className='flex-1'>{uploadedFileName}</p>
                  <FiEdit2 />
                </div>
              )}

              {!uploadedFileName && (
                <p className='text-neutral-300 text-center px-20 py-10'>
                  {uploadBtnTxt}
                  <br />
                  <span className='text-BodySM text-neutral-400'>
                    .pdf | .doc | .docx
                  </span>
                </p>
              )}
            </div>
          )}
        />

        {resumeUploadResponse.error && (
          <ErrorText>{resumeUploadErrorTxt}</ErrorText>
        )}

        <Button className='px-12'>{submitBtnTxt}</Button>
      </form>
      {uploadingResume && (
        <div className='fixed inset-0 flex flex-col justify-center items-center gap-5 z-50 bg-white/90'>
          <Loader />
          <p>{uploadingResumeTxt}</p>
        </div>
      )}

      {resumeUploadResponse.success && (
        <div className='fixed inset-0 flex flex-col justify-center items-center gap-5 z-50 bg-white/90 text-green-600 text-BodyLG'>
          <FiCheckCircle className='text-5xl' />
          <p>{resumeUploadSuccessTxt}</p>
        </div>
      )}
    </Fragment>
  );
}

/////////////////////////////////////////////////////////////////////////////
//Error text component
/////////////////////////////////////////////////////////////////////////////

const ErrorText = ({ children }: { children: ReactNode }) => (
  <p className='w-full text-left text-BodyXS text-red-500'>{children}</p>
);
