'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/button';

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const t = useTranslations('MainPage');
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      <div style={{ width: 300, overflowX: 'scroll', backgroundColor: 'var(--secondary-color)' }}>
        {theme ? (
          <div style={{ width: 600 }}>
            {t('a')} {theme}
            <Button onClick={() => setTheme('light')} title='Light' theme='primary'>
              {t('lmode')}
            </Button>
            <Button onClick={() => setTheme('dark')} title='Dark' theme='secondary'>
              {t('dmode')}
            </Button>
            <Button onClick={() => setTheme('system')} title='System' theme='clear'>
              {t('smode')}
            </Button>
          </div>
        ) : (
          <div>Loading theme...</div> // Add loading indication until theme is determined
        )}
      </div>
      <Button onClick={() => setTheme('light')} title='Light' theme='primary' disabled>
        Light Mode
      </Button>
      <Button onClick={() => setTheme('dark')} title='Dark' theme='secondary' disabled>
        Dark Mode
      </Button>
      <Button onClick={() => setTheme('system')} title='System' theme='clear' disabled>
        System Mode
      </Button>
    </main>
  );
}
