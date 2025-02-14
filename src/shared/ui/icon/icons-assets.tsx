import { FC } from 'react';

interface IconsAssetsProps {
  color?: string;
}

export const LightMode: FC<IconsAssetsProps> = ({ color = 'var(--icon)' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='5' />
    <line x1='12' y1='1' x2='12' y2='4' />
    <line x1='12' y1='20' x2='12' y2='23' />
    <line x1='4.22' y1='4.22' x2='6.34' y2='6.34' />
    <line x1='17.66' y1='17.66' x2='19.78' y2='19.78' />
    <line x1='1' y1='12' x2='4' y2='12' />
    <line x1='20' y1='12' x2='23' y2='12' />
    <line x1='4.22' y1='19.78' x2='6.34' y2='17.66' />
    <line x1='17.66' y1='6.34' x2='19.78' y2='4.22' />
  </svg>
);

export const DarkMode: FC<IconsAssetsProps> = ({ color = 'var(--icon)' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
  </svg>
);

export const SystemMode: FC<IconsAssetsProps> = ({ color = 'var(--icon)' }) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke={color} strokeWidth='2'>
    <circle cx='12' cy='12' r='11' />
    <text x='12' y='18' textAnchor='middle' fill={color} fontSize='17' strokeWidth='1' fontFamily='Arial'>
      S
    </text>
  </svg>
);
