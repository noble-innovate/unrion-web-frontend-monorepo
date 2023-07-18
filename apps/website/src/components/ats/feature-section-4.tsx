import Image from 'next/image';

interface IFeatureSection4 {
  title: string;
  description: string;
  imageUrl: string;
}

export default function FeatureSection4({
  title,
  description,
  imageUrl,
}: IFeatureSection4) {
  return (
    <section className='contained flex flex-col py-10 lg:py-20 items-end justify-between gap-10'>
      <div className='w-full lg:max-w-[70%] lg:text-right'>
        <h2 className='text-HeadingXS lg:text-HeadingBASE text-neutral-500'>
          {title.toUpperCase()}
        </h2>
        <h4 className='text-HeadingSM lg:text-HeadingXL'>{description}</h4>
      </div>

      <div className='border border-rose-200 p-1 lg:p-5 rounded-lg'>
        <Image
          className='rounded-lg'
          src={imageUrl}
          alt='Collage of international men and women working on their laptop'
          width={1400}
          height={560.97}
        />
      </div>
    </section>
  );
}
