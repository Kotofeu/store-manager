import { FC, ReactNode } from 'react';
import { notFound } from 'next/navigation';

import { routing } from '@/shared/i18n';
import { getDefaultMetadata } from '@/shared/lib';
import { MainProvider } from '@/app/providers/main-provider';

type LocateLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateStaticParams = () => routing.locales.map(locale => ({ locale }));

export const generateMetadata = async ({ params }: Omit<LocateLayoutProps, 'children'>) => {
  const { locale } = await params;
  return getDefaultMetadata(
    '/',
    locale,
    routing.locales.map(loc => loc)
  );
};

export const LocateLayout: FC<LocateLayoutProps> = async ({ children, params }) => {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return <MainProvider locale={locale}>{children}</MainProvider>;
};
