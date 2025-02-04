import { useTranslations } from 'next-intl';
import { FC } from 'react';

const HomePage: FC = () => {
  const t = useTranslations('Metadata');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
};

export default HomePage;
