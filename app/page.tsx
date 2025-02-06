import { redirect } from 'next/navigation';
import { FC } from 'react';

import { routing } from '@/shared/i18n';

const RootPage: FC = () => {
  redirect(routing.defaultLocale);
};

export default RootPage;
