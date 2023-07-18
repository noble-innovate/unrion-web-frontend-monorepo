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
import MobileNavMenu from '@website/components/layout/mobile-nav-menu';

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
        <div className='bg-rose-900 py-2 text-white'>
          <div className='contained w-fit text-BodyXS lg:text-BodySM flex items-center justify-center'>
            <p className='text-center w-[85%] lg:flex-1'>
              {`${infoBar.message} - `}{' '}
              <Link className='border-b' href='/ats'>
                {infoBar.ctaButtonText}
              </Link>
            </p>
          </div>
        </div>
      )}

      <nav className='flex items-center justify-between contained h-12'>
        <section className='flex items-center gap-12'>
          <div className='flex items-center'>
            <div className='lg:hidden'>
              <MobileNavMenu navLinks={navLinks} />
            </div>

            <Logo />
          </div>

          {!isATSPage && (
            <ol className='hidden lg:flex items-center gap-10'>
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
