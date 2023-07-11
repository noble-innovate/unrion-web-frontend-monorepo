'use client';

import { Fragment } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { FaUserCircle } from 'react-icons/fa';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  NextNavLink,
} from '@packages/ui/components';

import Logo from '@website/components/common/logo';
import { IWebsiteNavLinks } from '@website/app/[locale]/layout';

interface INavBar {
  websiteNavLinks: IWebsiteNavLinks[];
  infoBar: { message: string; ctaButtonText: string };
}

export default function NavBar({ websiteNavLinks, infoBar }: INavBar) {
  const navLinks = websiteNavLinks?.filter(({ nav }) => nav === true);

  const pathname = usePathname();

  const isATSPage = pathname.includes('ats');

  return (
    <Fragment>
      {!isATSPage && (
        <div className='bg-rose-900 flex items-center justify-center py-2 text-white'>
          <p>{`${infoBar.message} - `}</p>
          <Link className='ml-2 border-b' href='/ats'>
            {infoBar.ctaButtonText}
          </Link>
        </div>
      )}

      <nav className='flex items-center justify-between contained h-12'>
        <section className='flex items-center gap-12'>
          <Logo />

          {!isATSPage && (
            <ol className='flex items-center gap-10'>
              {navLinks.map(({ id, title, link }) => (
                <li key={id}>
                  <NextNavLink href={link}>{title}</NextNavLink>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section>
          <Avatar>
            <AvatarImage src='https://github.com/shadcnw.png' />
            <AvatarFallback>
              <FaUserCircle className='h-full w-full text-neutral-500' />
            </AvatarFallback>
          </Avatar>
        </section>
      </nav>
    </Fragment>
  );
}
