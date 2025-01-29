import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';
import { ReactNode } from 'react';

import { titleFont, textFont } from '@/app/fonts';
import { getMetadata } from '@/shared/lib';
import '@/app/styles/index.scss';

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata();
}

export async function RootLayout(params: { children: ReactNode }) {
  return (
    <html lang={'en'} suppressHydrationWarning className={`${titleFont.variable} ${textFont.variable}`}>
      <body>
        <ThemeProvider>{params.children}</ThemeProvider>
      </body>
    </html>
  );
}
