import Image from 'next/image';

interface IFeatureSection1 {
  title: string;
  description: string;
  imageUrl: string;
}

export default function FeatureSection1({
  title,
  description,
  imageUrl,
}: IFeatureSection1) {
  return (
    <section className='contained flex flex-col-reverse lg:flex-row py-10 lg:py-20 items-center justify-between gap-10'>
      <Image
        className='flex-1 w-full lg:max-w-[50%]'
        src={imageUrl}
        alt='Resumes stacked and spread a little appart joined at the bottom sorrounded by 3 dashed outline circles'
        width={830}
        height={800}
      />

      <div className='w-full lg:max-w-[44%] lg:text-right'>
        <h2 className='text-HeadingXS lg:text-HeadingBASE  text-neutral-500'>
          {title.toUpperCase()}
        </h2>
        <h4 className='text-HeadingSM lg:text-HeadingXL'>{description}</h4>
      </div>
    </section>
  );
}
