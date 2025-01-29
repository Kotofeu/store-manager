import { Open_Sans, Montserrat } from 'next/font/google';

export const textFont = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  variable: '--text-font',
  display: 'swap'
});

export const titleFont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '800'],
  variable: '--title-font',
  display: 'swap'
});
