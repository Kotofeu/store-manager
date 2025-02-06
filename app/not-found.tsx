import { FC } from 'react';

import { RootProvider } from '@/app/providers/root-provider';
import { routing } from '@/shared/i18n';

const GlobalNotFound: FC = () => <RootProvider locale={routing.defaultLocale}>404</RootProvider>;

export default GlobalNotFound;
