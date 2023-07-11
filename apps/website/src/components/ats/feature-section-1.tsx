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
    <section className='contained flex py-20 items-center justify-between gap-10'>
      <Image
        className='flex-1 max-w-[50%]'
        src={imageUrl}
        alt='Resumes stacked and spread a little appart joined at the bottom sorrounded by 3 dashed outline circles'
        width={830}
        height={800}
      />

      <div className='max-w-[44%] text-right'>
        <h2 className='text-HeadingBASE text-neutral-500'>
          {title.toUpperCase()}
        </h2>
        <h4 className='text-HeadingXL'>{description}</h4>
      </div>
    </section>
  );
}
