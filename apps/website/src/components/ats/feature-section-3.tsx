import Image from 'next/image';

interface IFeatureSection3 {
  title: string;
  description: string;
  imageUrl: string;
  processes: string[];
}

export default function FeatureSection3({
  title,
  description,
  imageUrl,
  processes,
}: IFeatureSection3) {
  return (
    <section className='contained flex flex-col items-center py-20 gap-10'>
      <div className='text-center'>
        <h2 className='text-HeadingBASE text-neutral-500'>
          {title.toUpperCase()}
        </h2>
        <h4 className='text-HeadingXL'>{description}</h4>
      </div>

      <div className='relative w-full h-[24rem]'>
        <Image
          className='object-cover object-top'
          src={imageUrl}
          alt='Collage of international men and women working on their laptop'
          fill
        />
      </div>

      <div className='flex gap-28 justify-center w-[72rem]'>
        {processes.map((process, index) => (
          <div key={index} className='w-fit'>
            <div className='flex items-end justify-between'>
              <h5 className='text-rose-50 text-[12rem] leading-none font-serif text-stroke-1-rose-300'>
                {index + 1}
              </h5>
              <hr className='border-t-0 border-b border-rose-300 w-20' />
            </div>

            <p className='text-HeadingBASE font-extralight text-neutral-800'>
              {process}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
