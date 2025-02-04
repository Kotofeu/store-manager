import { MetadataRoute } from 'next';

import { Locale, getPathname, routing } from '@/shared/i18n';

const sitemap = (): MetadataRoute.Sitemap => [getEntry('/', 'always', 1), getEntry('/about', 'monthly', 0.7)];

type Href = Parameters<typeof getPathname>[0]['href'];

const getEntry = (
  href: Href,
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
  priority: number
) => ({
  url: getUrl(href, routing.defaultLocale),
  changeFrequency,
  priority,
  lastModified: new Date(),
  alternates: {
    languages: Object.fromEntries(routing.locales.map(locale => [locale, getUrl(href, locale)]))
  }
});

const getUrl = (href: Href, locale: Locale) => {
  const pathname = getPathname({ locale, href });
  return `${process.env.NEXT_PUBLIC_URL}${pathname}`;
};

export default sitemap;
