import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@packages/utils';
import { HTMLAttributes } from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-grey-500 bg-neutral-100 text-neutral-900 shadow hover:bg-neutral-50',
        secondary:
          'border-grey-500 bg-transparent text-neutral-900 hover:bg-neutral-50',
        destructive:
          'border-transparent bg-red-200 text-neutral-900 shadow hover:bg-red-50',
        outline: 'text-neutral-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
