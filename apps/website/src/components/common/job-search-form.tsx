'use client';

import { FormEvent, useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { FiGlobe, FiMapPin, FiSearch } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { getAllInfoByISO, getAllISOCodes } from 'iso-country-currency';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  InputProps,
  Loader,
} from '@packages/ui/components';
import { cn } from '@packages/utils';

import useCityPrediction from '@website/hooks/use-city-prediction';
import { IFilters } from '@website/components/common/job-filters';

interface IJobSearchForm {
  keywordInputPlaceholder: string;
  cityInputPlaceholder: string;
  citySearchInputPlaceholder: string;
  countrySearchInputPlaceholder: string;
  countryInputPlaceholder: string;
  jobSearchSubmitButtonText: string;
  userCountryCode?: string;
}

export default function JobSearchForm({
  keywordInputPlaceholder,
  cityInputPlaceholder,
  citySearchInputPlaceholder,
  countrySearchInputPlaceholder,
  countryInputPlaceholder,
  jobSearchSubmitButtonText,
  userCountryCode,
}: IJobSearchForm) {
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
  }, []);

  const handleSubmit = (
    event: FormEvent,
    currentFilters: Partial<IFilters>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    router.push(
      `/job-search?${Object.keys(currentFilters)
        .reduce(
          (queryArr, filterKey) => [
            ...queryArr,
            `${filterKey}=${currentFilters[filterKey as keyof IFilters]}`,
          ],
          [] as string[]
        )
        .join('&')}`
    );
  };

  return (
    <form
      className='bg-white rounded-full w-full flex items-center p-2 pl-4 gap-5 border border-rose-50'
      onSubmit={(e) => handleSubmit(e, filters)}
    >
      <JobSearchInput
        id='keyword'
        className='w-[50%]'
        name='keyword'
        placeholder={keywordInputPlaceholder}
        value={filters.k}
        icon={FiSearch}
        onChange={(e) => setFilters((f) => ({ ...f, k: e.target.value }))}
      />

      <div className='min-h-full min-w-[1px] bg-neutral-300' />

      <JobCitySearchInput
        placeholder={cityInputPlaceholder}
        searchPlaceholder={citySearchInputPlaceholder}
        value={filters.l ?? ''}
        onSearchComplete={(prediction) =>
          setFilters((f) => ({
            ...f,
            l: prediction.city,
            c: prediction.countryCode?.toLowerCase(),
          }))
        }
      />

      <div className='min-h-full min-w-[1px] bg-neutral-300' />

      <JobCountrySearchInput
        placeholder={countryInputPlaceholder}
        searchPlaceholder={countrySearchInputPlaceholder}
        value={filters.c ? getAllInfoByISO(filters.c).countryName : ''}
        onSelect={(isoData) =>
          setFilters((f) => ({
            ...Object.keys(f).reduce(
              (acc, fk) =>
                fk !== 'l'
                  ? { ...acc, [fk]: filters[fk as keyof IFilters] }
                  : acc,
              {}
            ),
            c: isoData?.iso?.toLowerCase(),
          }))
        }
      />
      <Button className='rounded-full px-5 whitespace-nowrap'>
        {jobSearchSubmitButtonText}
      </Button>
    </form>
  );
}

/////////////////////////////////////////////////////////////////////////////
//Job search input component
/////////////////////////////////////////////////////////////////////////////

export interface IJobSearchInput extends InputProps {
  className?: string;
  icon: IconType;
}

const JobSearchInput = ({
  className,
  icon: Icon,
  ...inputProps
}: IJobSearchInput) => (
  <div className={cn('flex items-center h-full gap-2 rounded-lg', className)}>
    <Icon className='text-BodyLG text-neutral-500' />
    <Input className='border-none shadow-none p-1' {...inputProps} />
  </div>
);

/////////////////////////////////////////////////////////////////////////////
//Job city search input component
/////////////////////////////////////////////////////////////////////////////

interface IJobCitySearchInput {
  placeholder: string;
  searchPlaceholder: string;
  value?: string;
  onSearchComplete: (data: any) => void;
}

const JobCitySearchInput = ({
  value,
  placeholder,
  searchPlaceholder,
  onSearchComplete = () => {},
}: IJobCitySearchInput) => {
  const { isLoading, predictions, getPredictions, clearPredictions } =
    useCityPrediction();

  return (
    <DropdownMenu onOpenChange={(v) => !v && clearPredictions()}>
      <DropdownMenuTrigger className='bg-white'>
        <JobSearchInput
          id='city'
          className='flex-1'
          name='city'
          icon={FiMapPin}
          placeholder={placeholder}
          value={value}
          readOnly
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='w-full bg-white'>
        <JobSearchInput
          className='border p-1 mb-2'
          id='city'
          name='city'
          icon={FiSearch}
          placeholder={searchPlaceholder}
          autoComplete='off'
          onChange={(e) => getPredictions(e.target.value)}
        />

        <div className='flex flex-col items-center gap-2'>
          {isLoading ? (
            <Loader />
          ) : (
            predictions?.map((prediction: any, index) => (
              <DropdownMenuItem key={index} className='w-full p-0'>
                <Button
                  className='text-BodySM border-none shadow-none hover:bg-neutral-100 w-full justify-start'
                  variant='outline'
                  onClick={() => onSearchComplete(prediction)}
                >
                  {prediction.formattedAddress}
                </Button>
              </DropdownMenuItem>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/////////////////////////////////////////////////////////////////////////////
//Job country search input component
/////////////////////////////////////////////////////////////////////////////

interface IJobCountrySearchInput {
  placeholder: string;
  searchPlaceholder: string;
  value?: string;
  onSelect: (data: any) => void;
}

const JobCountrySearchInput = ({
  value,
  placeholder,
  searchPlaceholder,
  onSelect = () => {},
}: IJobCountrySearchInput) => {
  const [countryData, setCountryData] = useState<any[]>([]);

  useEffect(() => {
    setCountryData(getAllISOCodes());
  }, []);

  return (
    <DropdownMenu onOpenChange={(v) => !v && setCountryData(getAllISOCodes())}>
      <DropdownMenuTrigger className='bg-white'>
        <JobSearchInput
          id='country'
          className='flex-1'
          name='country'
          icon={FiGlobe}
          placeholder={placeholder}
          value={value}
          readOnly
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='w-full bg-white'>
        <JobSearchInput
          className='border p-1 mb-2'
          id='city'
          name='city'
          icon={FiSearch}
          placeholder={searchPlaceholder}
          autoComplete='off'
          onChange={(e) =>
            setCountryData(
              countryData.filter((isoData) =>
                isoData.countryName?.toLowerCase()?.startsWith(e.target.value)
              )
            )
          }
        />

        <div className='flex flex-col items-center gap-2 max-h-[24rem] overflow-scroll'>
          {countryData?.map((isoData, index) => (
            <DropdownMenuItem key={index} className='w-full p-0'>
              <Button
                className='text-BodySM border-none shadow-none hover:bg-neutral-100 w-full justify-start'
                variant='outline'
                onClick={() => onSelect(isoData)}
              >
                {isoData.countryName}
              </Button>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
