import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { FC, ReactNode } from 'react';

import { LocaleSwitcher } from '@/shared/ui/locale-switcher';
import { textFont, titleFont } from '@/app/fonts';

interface RootProviderProps {
  locale: string;
  children: ReactNode;
}

export const RootProvider: FC<RootProviderProps> = async ({ locale, children }) => {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${titleFont.variable} ${textFont.variable}`}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <LocaleSwitcher />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
