import parse from 'html-react-parser';

import { localeContents } from '@website/locale-contents/utils';

export default function TermsOfServicePage() {
  const { terms } = localeContents.en;

  return (
    <main className='contained flex flex-col lg:flex-row justify-center lg:gap-20'>
      <h1 className='text-HeadingSM lg:text-HeadingBASE py-10 lg:py-20'>
        {terms.title}
      </h1>

      <section className='legal-doc w-full max-w-[800px] h-screen overflow-scroll lg:py-20'>
        {parse(terms.document)}
      </section>
    </main>
  );
}
