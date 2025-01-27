import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { routing } from '@/i18n/routing';

export default async function GlobalNotFound() {
  const messages = await getMessages();
  return (
    <html lang={routing.defaultLocale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>эывфы</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
