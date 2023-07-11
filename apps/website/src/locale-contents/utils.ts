import enLocale from '@website/locale-contents/en';

export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en';

export type TLocale = (typeof locales)[number];

export const localeContents = {
  en: enLocale,
};
