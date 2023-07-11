import Image from 'next/image';
import Link from 'next/link';

import unrionLogoBlack from '@packages/assets/logos/unrion-logo-black.svg';
import unrionLogoWhite from '@packages/assets/logos/unrion-logo-white.svg';
import unrionLogoOutline from '@packages/assets/logos/unrion-logo-outline.svg';

const logoVariant = {
  black: unrionLogoBlack,
  white: unrionLogoWhite,
  outline: unrionLogoOutline,
};

export default function Logo({
  variant = 'black',
}: {
  variant?: 'black' | 'white' | 'outline';
}) {
  return (
    <Link href='/' className='w-fit'>
      <Image
        className='h-4 w-fit'
        src={logoVariant[variant]}
        alt='unriʘn logo'
        width={142}
        height={28}
      />
    </Link>
  );
}
