import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
// eslint-disable-next-line no-restricted-imports
import { notFound } from 'next/navigation';

export const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      ru: '/about'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
export { notFound };
