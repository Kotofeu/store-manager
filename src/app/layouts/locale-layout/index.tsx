import { FC } from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { routing } from '@/shared/i18n';
import { RootProvider } from '@/app/providers/root-provider';
import { BaseLayoutProps } from '@/shared/types';
import { getDefaultMetadata } from '@/shared/lib';

export const generateStaticParams = () => routing.locales.map(locale => ({ locale }));

export const generateMetadata = async ({ params }: Omit<BaseLayoutProps, 'children'>) => {
  const { locale } = await params;
  return getDefaultMetadata(
    '/',
    locale,
    routing.locales.map(loc => loc)
  );
};

export const LocateLayout: FC<BaseLayoutProps> = async ({ children, params }) => {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  return <RootProvider locale={locale}>{children}</RootProvider>;
};
