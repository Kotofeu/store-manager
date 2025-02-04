'use client';

import { ChangeEvent, FC, ReactNode, useTransition } from 'react';
import { useParams } from 'next/navigation';

import { Locale, usePathname, useRouter } from '@/shared/i18n';

type SwitcherSelectProps = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export const LocaleSwitcherSelect: FC<SwitcherSelectProps> = ({ children, defaultValue, label }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace({ pathname, ...(params ? { params } : {}) }, { locale: nextLocale });
    });
  }

  return (
    <label>
      <p className='sr-only'>{label}</p>
      <select
        className='inline-flex appearance-none bg-transparent py-3 pl-2 pr-6'
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className='pointer-events-none absolute right-2 top-[8px]'>⌄</span>
    </label>
  );
};
