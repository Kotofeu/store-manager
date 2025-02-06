'use client';
import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react';

export const ThemeSwitcher: FC = () => {
  const { setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => setTheme('light')} title='Light'>
        l
      </button>
      <button onClick={() => setTheme('dark')} title='Dark'>
        d
      </button>
      <button onClick={() => setTheme('system')} title='System'>
        s
      </button>
    </div>
  );
};
