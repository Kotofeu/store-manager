import { FC, use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { Link } from '@/shared/i18n';
import { BasePageProps } from '@/shared/types';
import { ThemeSwitcher } from '@/shared/ui/theme-switcher';

const HomePage: FC<BasePageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('MainPage');
  return (
    <main>
      <Link href={'/about'}>ABOUT</Link>
      <div style={{ width: 300, overflowX: 'scroll', backgroundColor: 'var(--secondary-color)' }}>
        <div style={{ width: 600 }}></div>
      </div>
      <Link href={'/'} locale='ru'>
        Ru
      </Link>
      <Link href={'/'} locale='en'>
        En
      </Link>
      {t('a')}
      <ThemeSwitcher />
    </main>
  );
};

export default HomePage;
