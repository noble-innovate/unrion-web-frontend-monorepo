import Image from 'next/image';

interface IFeatureSection2 {
  title: string;
  description: string;
  imageUrl: string;
}

export default function FeatureSection2({
  title,
  description,
  imageUrl,
}: IFeatureSection2) {
  return (
    <section className='contained flex flex-col py-20 gap-10'>
      <div className='max-w-[44%]'>
        <h2 className='text-HeadingBASE text-neutral-500'>
          {title.toUpperCase()}
        </h2>
        <h4 className='text-HeadingXL'>{description}</h4>
      </div>

      <Image
        className='w-full'
        src={imageUrl}
        alt='Collage of different proffesionals doing their job'
        width={1442}
        height={480}
      />
    </section>
  );
}
