import Image from 'next/image';

import { IconType } from 'react-icons';
import { FiClock, FiInfo, FiPhoneForwarded } from 'react-icons/fi';

const engageInfoIconMap: Record<string, IconType> = {
  'book-a-call': FiPhoneForwarded,
  'send-reminders': FiClock,
  info: FiInfo,
};

interface IFeatureSection5 {
  title: string;
  description: string;
  imageUrl: string;
  services: Record<'id' | 'text', string>[];
}

export default function IFeatureSection({
  title,
  description,
  imageUrl,
  services,
}: IFeatureSection5) {
  return (
    <section className='contained flex py-20 items-center justify-between gap-10'>
      <div className='text-left'>
        <h2 className='text-HeadingBASE text-neutral-500'>
          {title.toUpperCase()}
        </h2>
        <h4 className='text-HeadingXL w-[38rem]'>{description}</h4>
      </div>

      <div className='flex items-center'>
        <div className='relative rounded-full h-[40rem] w-[30rem]'>
          <Image
            className='object-cover rounded-full'
            src={imageUrl}
            alt='Collage of international men and women working on their laptop'
            fill
          />
        </div>

        <div className='flex flex-col border-y border-neutral-200 divide-y divide-neutral-200'>
          {services.map(({ id, text }) => {
            const Icon = engageInfoIconMap[id];

            return (
              <div
                key={id}
                className='py-5 pl-20 pr-5 flex items-center justify-end gap-4 text-neutral-700'
              >
                <p className='whitespace-nowrap'>{text}</p>
                <Icon className='text-xl text-rose-900' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
