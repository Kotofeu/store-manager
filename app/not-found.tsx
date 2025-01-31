import { ThemeProvider } from 'next-themes';

import { routing } from '@/shared/i18n';
import { titleFont, textFont } from '@/app/fonts';

export default async function GlobalNotFound() {
  return (
    <html
      lang={routing.defaultLocale}
      suppressHydrationWarning
      className={`${titleFont.variable} ${textFont.variable}`}
    >
      <body>
        <ThemeProvider>error 404</ThemeProvider>
      </body>
    </html>
  );
}
