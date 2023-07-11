'use client';

import { ReactNode, useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { LuSettings2 } from 'react-icons/lu';
import { getAllInfoByISO } from 'iso-country-currency';

import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  RadioGroup,
  RadioGroupItem,
} from '@packages/ui/components';
import { cn } from '@packages/utils';

export interface IFilters {
  p: string; //Page
  lm: string; //Limit
  k: string; //Keyword
  c: string; //Country code
  l: string; //City
  mxa: string; //Max age old
  cy: string; //Category
  smn: string; //Salary min
  smx: string; //Salary max
  ft: string; //Full time
  pt: string; //Part time
  ct: string; //Contract
  pm: string; //Permanent
  ji: string; //Active job index
}

interface IJobFilterKeyCommon {
  id: string;
  title: string;
}

type TJobFilterValueCommon = Record<'id' | 'name', string>;

interface IJobFilterCommon extends IJobFilterKeyCommon {
  values: TJobFilterValueCommon[];
}

interface IJobFilterDatePosted extends IJobFilterKeyCommon {
  values: { id: string; name: string; mxa: number }[];
}

interface IJobFilterCategory extends IJobFilterKeyCommon {
  values: { tag: string; label: string }[];
}

export interface IJobFilterTexts {
  title: string;
  moreFiltersBtnTxt: string;
  filterSubmitBtnTxt: string;
}

export interface IJobFilters {
  datePosted: IJobFilterDatePosted;
  type: IJobFilterCommon;
  salary: IJobFilterCommon;
  category: IJobFilterCategory;
}

export interface IJobFiltersProps {
  title: string;
  moreFiltersBtnTxt: string;
  filterSubmitBtnTxt: string;
  jobFilters: IJobFilters;
  userCountryCode?: string;
}

export default function JobFilters({
  title,
  moreFiltersBtnTxt,
  filterSubmitBtnTxt,
  jobFilters,
  userCountryCode,
}: IJobFiltersProps) {
  const [open, setOpen] = useState<boolean>();
  const [filters, setFilters] = useState<Partial<IFilters>>({
    c: userCountryCode,
    ji: '0',
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const currentFilters = structuredClone(filters);

    searchParams.forEach((v, k) => {
      currentFilters[k as keyof IFilters] = v;
    });

    setFilters(currentFilters);
  }, [searchParams]);

  const countryCode = searchParams.get('c')?.toUpperCase();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='w-fit flex items-center gap-2 text-rose-900 whitespace-nowrap'>
        <LuSettings2 className='text-xl' />
        <p>{moreFiltersBtnTxt}</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className='max-h-[32rem] flex flex-col gap-5 overflow-scroll'>
          <FilterCard title={jobFilters?.datePosted?.title}>
            <div className='flex items-center flex-wrap gap-2'>
              {jobFilters?.datePosted?.values.map(({ id, name, mxa }) => {
                const isActive = `${mxa}` === `${filters.mxa}`;

                return (
                  <FilterBadge
                    key={id}
                    active={isActive}
                    onClick={() =>
                      setFilters((f) =>
                        !isActive
                          ? { ...f, mxa }
                          : Object.keys(f).reduce(
                              (acc, fk) =>
                                fk !== 'mxa'
                                  ? { ...acc, [fk]: f[fk as keyof IFilters] }
                                  : { ...acc },
                              {}
                            )
                      )
                    }
                  >
                    {name}
                  </FilterBadge>
                );
              })}
            </div>
          </FilterCard>

          <FilterCard title={jobFilters?.type?.title}>
            <div className='flex items-center flex-wrap gap-2'>
              {jobFilters?.type?.values?.map(({ id, name }) => {
                const isActive = Object.keys(filters).includes(id);

                return (
                  <FilterBadge
                    key={id}
                    active={isActive}
                    onClick={() =>
                      setFilters((f) =>
                        !isActive
                          ? { ...f, [id]: '1' }
                          : Object.keys(f).reduce(
                              (acc, fk) =>
                                fk !== id
                                  ? { ...acc, [fk]: f[fk as keyof IFilters] }
                                  : { ...acc },
                              {}
                            )
                      )
                    }
                  >
                    {name}
                  </FilterBadge>
                );
              })}
            </div>
          </FilterCard>

          <FilterCard
            title={`${jobFilters?.salary?.title} ${
              countryCode ? getAllInfoByISO(countryCode) : ''
            }`}
          >
            <div className='flex items-center flex-wrap gap-2'>
              {jobFilters?.salary?.values.map(({ id, name }) => (
                <Input
                  key={id}
                  className='flex-1'
                  type='number'
                  placeholder={name}
                  onChange={(e) =>
                    setFilters((f) =>
                      e.target.value
                        ? {
                            ...f,
                            [id]: parseFloat(e.target.value),
                          }
                        : Object.keys(f).reduce(
                            (acc, fk) =>
                              fk !== id
                                ? { ...acc, [fk]: f[fk as keyof IFilters] }
                                : { ...acc },
                            {}
                          )
                    )
                  }
                />
              ))}
            </div>
          </FilterCard>

          <FilterCard title={jobFilters?.category?.title}>
            <RadioGroup
              className='flex flex-col gap-2 pb-5'
              defaultValue={filters.cy ?? 'unknown'}
              onValueChange={(v) =>
                setFilters((f) =>
                  v !== 'unknown'
                    ? { ...f, ...{ cy: v } }
                    : Object.keys(f).reduce(
                        (acc, fk) =>
                          fk !== 'cy'
                            ? { ...acc, [fk]: f[fk as keyof IFilters] }
                            : { ...acc },
                        {}
                      )
                )
              }
            >
              {jobFilters?.category?.values?.map(({ tag, label }) => (
                <div key={tag} className='flex items-center gap-2'>
                  <RadioGroupItem value={tag} id={tag} />
                  <label htmlFor={tag} className='text-BodySM'>
                    {label}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </FilterCard>
        </div>

        <Button
          onClick={() => {
            router.push(
              `/job-search?${Object.keys(filters)
                .reduce(
                  (queryArr, filterKey) => [
                    ...queryArr,
                    `${filterKey}=${filters[filterKey as keyof IFilters]}`,
                  ],
                  [] as any
                )
                .join('&')}`
            );

            setOpen(false);
          }}
        >
          {filterSubmitBtnTxt}
        </Button>
      </DialogContent>
    </Dialog>
  );
}

/////////////////////////////////////////////////////////////////////////////
//Filter card component
/////////////////////////////////////////////////////////////////////////////
interface IFilterCard {
  title: string;
  children: ReactNode;
}

const FilterCard = ({ title, children }: IFilterCard) => (
  <div className='border border-neutral-200 p-2 rounded-lg'>
    <h4 className='mb-3 text-neutral-500 text-BodySM'>{title}</h4>
    <div className='max-h-[24rem] overflow-scroll'>{children}</div>
  </div>
);

/////////////////////////////////////////////////////////////////////////////
//Filter badge component
/////////////////////////////////////////////////////////////////////////////

interface IFilterBadge {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterBadge = ({ children, active, onClick }: IFilterBadge) => (
  <Badge
    className={cn(
      'border-neutral-100 shadow-none text-BodySM px-10 py-2 rounded-full font-normal cursor-pointer hover:font-medium',
      active && 'border-neutral-200'
    )}
    variant={active ? 'default' : 'secondary'}
    onClick={onClick}
  >
    {children}
  </Badge>
);
