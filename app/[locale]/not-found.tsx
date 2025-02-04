import { useTranslations } from 'next-intl';
import { FC } from 'react';

const NotFoundPage: FC = () => {
  const t = useTranslations('Metadata');

  return <p className='max-w-[460px]'>{t('description')}</p>;
};

export default NotFoundPage;
