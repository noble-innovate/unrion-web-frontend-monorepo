import ResumeUploadForm from '@website/components/common/resume-upload-form';
import { localeContents } from '@website/locale-contents/utils';

interface IUploadResumePage {}

export default async function UploadResumePage() {
  const { uploadResumePage, resumeUploadForm } = localeContents.en;

  return (
    <main className='contained flex flex-col items-center mt-20'>
      <h1 className='text-HeadingXS font-medium mb-10'>
        {uploadResumePage.title}
      </h1>

      <div className='w-[24rem]'>
        <ResumeUploadForm {...resumeUploadForm} />
      </div>
    </main>
  );
}
