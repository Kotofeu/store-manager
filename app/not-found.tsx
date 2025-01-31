import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

import { routing } from '@/shared/i18n';
import { titleFont, textFont } from '@/app/fonts';
import { LocaleSwitcher } from '@/shared/ui/locale-switcher';

export default async function GlobalNotFound() {
  setRequestLocale(routing.defaultLocale);
  const messages = await getMessages({ locale: routing.defaultLocale });
  return (
    <html
      lang={routing.defaultLocale}
      suppressHydrationWarning
      className={`${titleFont.variable} ${textFont.variable}`}
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <LocaleSwitcher></LocaleSwitcher>
            404
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
