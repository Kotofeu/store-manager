'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      <div style={{ width: 300, overflowX: 'scroll' }}>
        {theme ? (
          <div style={{ width: 600 }}>
            The current theme is:The current theme is:The current theme is:The current theme is:The current theme is:The
            current theme is:The current theme is:The current theme is: {theme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
          </div>
        ) : (
          <div>Loading theme...</div> // Add loading indication until theme is determined
        )}
      </div>
    </main>
  );
}
