import { getMessages, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { FC, ReactNode } from 'react';

import { titleFont, textFont } from '@/app/fonts';
import { LocaleSwitcher } from '@/shared/ui/locale-switcher';

interface Props {
  locale: string;
  children: ReactNode;
}

export const MainProvider: FC<Props> = async ({ locale, children }) => {
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning className={`${titleFont.variable} ${textFont.variable}`}>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <LocaleSwitcher></LocaleSwitcher>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
