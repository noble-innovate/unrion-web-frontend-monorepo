'use client';

import { Fragment, ReactNode, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { FiArrowUpRight, FiCheckCircle, FiEdit2 } from 'react-icons/fi';

import { Button, Input, Loader, Textarea } from '@packages/ui/components';

import useJob from '@website/hooks/use-job';
import useMessage from '@website/hooks/use-message';

export interface IContactUsFormValues {
  fullName: string;
  email: string;
  message: string;
}

export interface IContactUsForm {
  nameInputPlaceholder: string;
  nameInputErrorMsg: string;
  emailInputPlaceholder: string;
  emailInputErrorMsg: string;
  messageInputPlaceholder: string;
  messageInputErrorMsg: string;
  submitBtnTxt: string;
  sendingMessageTxt: string;
  contactUsSuccessTxt: string;
  contactUsErrorTxt: string;
}

export default function ContactUsForm({
  nameInputPlaceholder,
  nameInputErrorMsg,
  emailInputPlaceholder,
  emailInputErrorMsg,
  messageInputPlaceholder,
  messageInputErrorMsg,
  submitBtnTxt,
  sendingMessageTxt,
  contactUsSuccessTxt,
  contactUsErrorTxt,
}: IContactUsForm) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IContactUsFormValues>();

  const {
    handleSaveContactUsMessage,
    savingContactUsMessage,
    saveContactUsMessageResponse,
  } = useMessage();

  useEffect(() => {
    if (saveContactUsMessageResponse.success) reset();
  }, [saveContactUsMessageResponse]);

  return (
    <Fragment>
      <form
        className='w-full flex flex-col items-end gap-4'
        noValidate
        onSubmit={handleSubmit(handleSaveContactUsMessage)}
      >
        <div className='flex flex-col lg:flex-row items-center gap-4 w-full'>
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
            {errors.fullName && (
              <ErrorText>{errors.fullName?.message}</ErrorText>
            )}
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
        </div>

        <div className='w-full'>
          <Textarea
            id='message'
            rows={8}
            placeholder={messageInputPlaceholder}
            {...register('message', {
              required: messageInputErrorMsg,
            })}
          />
          {errors.email && <ErrorText>{errors.message?.message}</ErrorText>}
        </div>

        {saveContactUsMessageResponse.error && (
          <ErrorText>{contactUsErrorTxt}</ErrorText>
        )}

        <Button className='px-12 gap-2'>
          <span>{submitBtnTxt}</span>
          <FiArrowUpRight className='text-xl' />
        </Button>
      </form>
      {savingContactUsMessage && (
        <div className='fixed inset-0 flex flex-col justify-center items-center gap-5 z-50 bg-white/90'>
          <Loader />
          <p>{sendingMessageTxt}</p>
        </div>
      )}

      {saveContactUsMessageResponse.success && (
        <div className='fixed inset-0 flex flex-col justify-center items-center gap-5 z-50 bg-white/90 text-green-600 text-BodyLG'>
          <FiCheckCircle className='text-5xl' />
          <p>{contactUsSuccessTxt}</p>
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
