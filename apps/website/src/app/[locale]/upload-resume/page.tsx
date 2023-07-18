import ResumeUploadForm from '@website/components/common/resume-upload-form';
import { localeContents } from '@website/locale-contents/utils';

export default async function UploadResumePage() {
  const { uploadResumePage, resumeUploadForm } = localeContents.en;

  return (
    <main className='contained flex flex-col items-center mt-10 lg:mt-20'>
      <h1 className='text-HeadingXS font-medium mb-10'>
        {uploadResumePage.title}
      </h1>

      <div className='w-full lg:w-[24rem] mb-10'>
        <ResumeUploadForm {...resumeUploadForm} />
      </div>
    </main>
  );
}
