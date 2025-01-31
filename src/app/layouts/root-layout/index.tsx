import { Metadata } from 'next';
import { ReactNode } from 'react';

import { getDefaultMetadata } from '@/shared/lib';

import '@/app/styles/index.scss';

type Props = {
  children: ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  return getDefaultMetadata();
}

export async function RootLayout({ children }: Props) {
  return children;
}
