import Image from 'next/image';

export default function BrandSection({
  brandImageUrls,
}: {
  brandImageUrls: string[];
}) {
  return (
    <section className='contained flex items-center py-20 justify-center lg:justify-between flex-wrap gap-5'>
      {brandImageUrls.map((brandImageUrl, index) => (
        <Image
          key={index}
          className='h-8 w-auto grayscale opacity-80'
          src={brandImageUrl}
          alt={`Brand image ${index}`}
          width={162}
          height={24}
        />
      ))}
    </section>
  );
}
