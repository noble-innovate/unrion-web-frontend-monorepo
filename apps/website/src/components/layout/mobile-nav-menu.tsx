'use client';

import { FiMenu } from 'react-icons/fi';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NextNavLink,
} from '@packages/ui/components';

import { IWebsiteNavLinks } from '@website/app/[locale]/layout';

export default function MobileNavMenu({
  navLinks,
}: {
  navLinks: IWebsiteNavLinks[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <FiMenu className='text-2xl' />
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-rose-50 p-5 '>
            <ol className='flex flex-col gap-5'>
              {navLinks.map(({ id, title, link }) => (
                <li key={id}>
                  <NavigationMenuLink asChild>
                    <NextNavLink className='whitespace-nowrap' href={link}>
                      {title}
                    </NextNavLink>
                  </NavigationMenuLink>
                </li>
              ))}
            </ol>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
