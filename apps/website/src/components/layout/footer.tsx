import Link from 'next/link';

import {
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from 'react-icons/sl';

import { NextNavLink } from '@packages/ui/components';

import Logo from '@website/components/common/logo';
import { IWebsiteNavLinks } from '@website/app/[locale]/layout';
import { Fragment } from 'react';

const socialMediaLinks = [
  {
    id: 'twitter',
    icon: SlSocialTwitter,
    link: 'https://twitter.com/unrion1_unrion',
  },
  {
    id: 'linkedin',
    icon: SlSocialLinkedin,
    link: 'https://www.linkedin.com/company/unrion/about',
  },
  {
    id: 'youtube',
    icon: SlSocialYoutube,
    link: 'https://www.youtube.com/@Unrion/featured',
  },
];

interface IFooter {
  title: string;
  websiteNavLinks: IWebsiteNavLinks[];
}

export default function Footer({ title, websiteNavLinks }: IFooter) {
  const footerLinkGroup = websiteNavLinks.reduce((acc, cur) => {
    acc[cur.footerGroup] = [...(acc[cur.footerGroup] || []), cur];
    return acc;
  }, {} as Record<string, IWebsiteNavLinks[]>);

  const footerLinkGroups = Object.values(footerLinkGroup);

  return (
    <Fragment>
      <nav className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-52 contained py-10'>
        <section className='flex flex-col gap-5'>
          <Logo variant='outline' />
          <p className='text-gray-700 max-w-[12rem]'>{title}</p>
          <ol className='flex items-center gap-5'>
            {socialMediaLinks.map(({ id, icon: Icon, link }) => (
              <li key={id}>
                <Link href={link} target='_blank'>
                  <Icon className='text-3xl text-rose-900 border border-rose-100 hover:border-rose-900 p-1 rounded-lg' />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className='flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between flex-1 w-full text-BodySM lg:max-w-[36rem]'>
          {footerLinkGroups.map((footerLinkGroup, index) => (
            <ol key={index} className='flex flex-col gap-2 lg:gap-5'>
              {footerLinkGroup.map(({ id, title, link }) => (
                <li key={id}>
                  <NextNavLink href={link}>{title}</NextNavLink>
                </li>
              ))}
            </ol>
          ))}
        </section>
      </nav>
      <div className='flex flex-col flex-center items-center bg-gray-100 text-BodyXS p-2'>
        <p>© Copyright 2023 - unrion</p>
        <p className='font-semibold'>
          A product of{' '}
          <span>
            <Link
              className='text-rose-900 hover:underline hover:text-blue-500 transition-colors'
              href='https://nobled.ca/'
              target='_blank'
            >
              Noble inc.
            </Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
}
