import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { FC, ReactNode } from 'react';

import { textFont, titleFont } from '@/app/fonts';
import { Header } from '@/widgets/header';

interface RootProviderProps {
  locale: string;
  children: ReactNode;
}

export const RootProvider: FC<RootProviderProps> = async ({ locale, children }) => {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${titleFont.variable} ${textFont.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
