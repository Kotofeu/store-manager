import { useTranslations } from 'next-intl';
import { FC, use } from 'react';
import { setRequestLocale } from 'next-intl/server';

import { BasePageProps } from '@/shared/types';

const HomePage: FC<BasePageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('Metadata');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
};

export default HomePage;
