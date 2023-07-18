import FAQs, { TFAQs } from '@website/components/common/faqs';

interface IFAQSection {
  titleQ: string;
  titleA: string;
  faqs: TFAQs;
}

export default function FAQSection({ titleQ, titleA, faqs }: IFAQSection) {
  return (
    <section className='contained flex justify-center py-10 items-center gap-10'>
      <p className='hidden lg:block text-rose-50 text-[36rem] leading-none text-stroke-1-rose-300'>
        ?
      </p>

      <div className='w-full lg:w-2/3 flex flex-col gap-10'>
        <div className='flex flex-col gap-2 justify-center items-center text-center text-HeadingSM lg:text-HeadingXL'>
          <h1>{titleQ}</h1>
          <h1>{titleA}</h1>
        </div>

        <FAQs faqs={faqs} />
      </div>
    </section>
  );
}
