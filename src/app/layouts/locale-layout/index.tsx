import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import { routing } from '@/shared/i18n';
import { getDefaultMetadata } from '@/shared/lib';
import { MainProvider } from '@/app/providers/main-provider';

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

  return <MainProvider locale={locale}>{children}</MainProvider>;
}
