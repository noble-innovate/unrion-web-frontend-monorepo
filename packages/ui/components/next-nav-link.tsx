'use client';

import { ReactNode, Ref, forwardRef } from 'react';

import Link, { LinkProps } from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { cn } from '@packages/utils';

export interface INextNavLink extends LinkProps {
  children: ReactNode;
  className?: string;
}

export const NextNavLink = forwardRef(
  (
    { children, className, ...props }: INextNavLink,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const params = useParams();
    const pathname = usePathname();
    const link = pathname.replace(
      `/${params.lang}`,
      pathname === `/${params.lang}` ? '/' : ''
    );

    return (
      <Link
        ref={ref}
        className={cn(
          'block text-BodySM pb-[2px] w-fit',
          props.href === link
            ? 'border-b border-neutral-800 font-semibold'
            : '',
          className ?? ''
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NextNavLink.displayName = 'anchor';
