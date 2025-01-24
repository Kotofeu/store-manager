import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import { notFound, routing } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: {
      name: t('authorName'),
      url: t('authorUrl')
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: t('url'),
      siteName: t('siteName'),
      locale: locale,
      type: 'website',
      images: [
        {
          url: t('previewImageUrl'),
          alt: t('description')
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: t('previewImageUrl'),
          alt: t('description')
        }
      ]
    },
    robots: 'index, follow',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: t('authorName'),
      jobTitle: t('jobTitle'),
      address: {
        '@type': 'PostalAddress',
        addressLocality: t('addressLocality'),
        addressCountry: t('addressCountry')
      },
      email: t('email'),
      url: t('url')
    },
    alternateUrls: {
      ru: t('alternateUrlRu'),
      en: t('alternateUrlEn')
    }
  };
}
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
