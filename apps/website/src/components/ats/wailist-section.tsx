'use client';

import { useForm } from 'react-hook-form';

import { Button, Input, Loader } from '@packages/ui/components';
import useATS from '@website/hooks/use-ats';
import { ReactNode } from 'react';

interface IWaitListSection {
  title: string;
  subTitle: string;
  subTitleSpotlightText: string;
  inputPlaceholder: string;
  inputSubmitButtonText: string;
  waitListEmailValidationErrorMessage: string;
  addToWaitListSuccessMessage: string;
  addToWaitListErrorMessage: string;
}

export default function WaitListSection({
  title,
  subTitle,
  subTitleSpotlightText,
  inputPlaceholder,
  inputSubmitButtonText,
  waitListEmailValidationErrorMessage,
  addToWaitListSuccessMessage,
  addToWaitListErrorMessage,
}: IWaitListSection) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>();
  const {
    handleAddToATSWaitList,
    addingToATSWaitList,
    addToATSWaitListResponse,
  } = useATS();

  return (
    <section className='contained flex flex-col justify-center py-20 items-center gap-10'>
      <h1 className='text-center text-HeadingXL'>{title}</h1>

      <p className='text-center text-HeadingBASE text-neutral-600 max-w-[48rem] font-light'>
        {subTitle}{' '}
        <span className='text-rose-900 font-normal'>
          {subTitleSpotlightText}
        </span>
      </p>

      <form
        className='w-[28rem] mt-3'
        noValidate
        onSubmit={handleSubmit((d) => handleAddToATSWaitList(d.email))}
      >
        <div className='flex items-center gap-3 mb-2'>
          <Input
            id='email'
            placeholder={inputPlaceholder}
            type='email'
            {...register('email', {
              required: waitListEmailValidationErrorMessage,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: waitListEmailValidationErrorMessage,
              },
            })}
          />

          {addingToATSWaitList ? (
            <Loader />
          ) : (
            <Button className='whitespace-nowrap'>
              {inputSubmitButtonText}
            </Button>
          )}
        </div>

        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        {addToATSWaitListResponse.error && (
          <ErrorText>{addToWaitListErrorMessage}</ErrorText>
        )}

        {addToATSWaitListResponse.success && (
          <p className='w-full text-left text-BodyXS text-green-500'>
            {addToWaitListSuccessMessage}
          </p>
        )}
      </form>
    </section>
  );
}

/////////////////////////////////////////////////////////////////////////////
//Error text component
/////////////////////////////////////////////////////////////////////////////

const ErrorText = ({ children }: { children: ReactNode }) => (
  <p className='w-full text-left text-BodyXS text-red-500'>{children}</p>
);
