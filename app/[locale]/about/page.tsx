import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Metadata');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
