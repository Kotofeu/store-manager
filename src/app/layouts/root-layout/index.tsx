import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import { getDefaultMetadata } from '@/shared/lib';

import '@/app/styles/index.scss';

type RootLayoutProps = {
  children: ReactNode;
};

export const generateMetadata = async (): Promise<Metadata> => getDefaultMetadata();

export const RootLayout: FC<RootLayoutProps> = async ({ children }) => children;
