import { FC } from 'react';

import { routing } from '@/shared/i18n';
import { MainProvider } from '@/app/providers/main-provider';

const GlobalNotFound: FC = async () => <MainProvider locale={routing.defaultLocale}>404</MainProvider>;

export default GlobalNotFound;
