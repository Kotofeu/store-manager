import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { routing } from '@/shared/i18n';
import { titleFont, textFont } from '@/app/fonts';

export default async function GlobalNotFound() {
  const messages = await getMessages();
  return (
    <html
      lang={routing.defaultLocale}
      suppressHydrationWarning
      className={`${titleFont.variable} ${textFont.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider></ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
