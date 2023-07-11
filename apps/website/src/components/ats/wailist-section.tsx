'use client';

import { useForm } from 'react-hook-form';

import { Button, Input } from '@packages/ui/components';

interface IWaitListSection {
  waitlistSectionContent: any;
}

export default function WaitListSection({
  waitlistSectionContent,
}: IWaitListSection) {
  const {
    title,
    subTitle,
    subTitleSpotlightText,
    inputPlaceholder,
    inputSubmitButtonText,
  } = waitlistSectionContent;

  const { register, handleSubmit } = useForm();

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
        className='flex items-center gap-3 w-[28rem] mt-3'
        onSubmit={handleSubmit((d: any) => console.log(d.keyword, d.location))}
      >
        <Input
          id='email'
          placeholder={inputPlaceholder}
          type='email'
          {...register('email', { required: true })}
        />

        <Button className='whitespace-nowrap'>{inputSubmitButtonText}</Button>
      </form>
    </section>
  );
}
