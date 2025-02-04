import { useLocale } from 'next-intl';
import { FC } from 'react';

import { routing } from '@/shared/i18n';

import { LocaleSwitcherSelect } from './client-select';

export const LocaleSwitcher: FC = () => {
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={'Локаль'}>
      {routing.locales.map(cur => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};
