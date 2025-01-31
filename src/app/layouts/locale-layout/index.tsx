import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import { notFound, routing } from '@/shared/i18n';
import { titleFont, textFont } from '@/app/fonts';
import { getDefaultMetadata } from '@/shared/lib';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  return getDefaultMetadata(
    '/',
    locale,
    routing.locales.map(loc => loc)
  );
}

export async function LocateLayout({ children, params }: Props) {
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
