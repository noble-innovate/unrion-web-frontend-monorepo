import FAQs from '@website/components/common/faqs';
import { localeContents } from '@website/locale-contents/utils';

export default function FAQPage() {
  const { faqSection } = localeContents.en;

  return (
    <main className='bg-rose-50'>
      <section className='contained flex gap-20 py-20'>
        <p className='hidden lg:block text-rose-50 text-[36rem] leading-none text-stroke-1-rose-300'>
          ?
        </p>

        <div className='w-full lg:w-2/3 flex flex-col gap-10'>
          <div className='flex flex-col gap-2 justify-center items-center text-center text-HeadingSM lg:text-HeadingXL'>
            <h1>{faqSection.titleQ}</h1>
            <h1>{faqSection.titleA}</h1>
          </div>

          <FAQs faqs={faqSection.faqs} />
        </div>
      </section>
    </main>
  );
}
