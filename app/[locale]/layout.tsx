import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import { notFound, routing } from '@/shared/i18n';
import { titleFont, textFont } from '@/app/fonts';

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
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://localhost:4000'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`,
      siteName: t('siteName'),
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/preview-image.jpg',
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
          url: '/preview-image.jpg',
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
      url: `/${locale}`
    },
    alternateUrls: {
      ru: '/ru',
      en: '/en'
    }
  };
}
export default async function RootLayout({ children, params }: Readonly<Props>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning className={`${titleFont.variable} ${textFont.variable}`}>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
