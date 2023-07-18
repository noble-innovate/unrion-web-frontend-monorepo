import { BsBookmarks } from 'react-icons/bs';

import { localeContents } from '@website/locale-contents/utils';

const { savedJobPage } = localeContents.en;

export default function SavedJobPage() {
  return (
    <main className='contained'>
      <div className='flex flex-col justify-center items-center my-20 gap-2 text-neutral-700'>
        <BsBookmarks className='text-6xl text-neutral-300' />
        <p>{savedJobPage.noSavedJobs}</p>
      </div>
    </main>
  );
}
