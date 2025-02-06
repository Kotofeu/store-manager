import { ReactNode } from 'react';

export interface BasePageProps {
  params: Promise<{ locale: string }>;
}

export interface BaseLayoutProps {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}
