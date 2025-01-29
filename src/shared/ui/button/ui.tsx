import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { classNames } from '@/shared/lib';

import styles from './styles.module.scss';

export type ButtonThemes = 'primary' | 'secondary' | 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonThemes;
  title: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = 'primary',
  children,
  title,
  type = 'button',
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={classNames(styles.button, {}, [className, styles[theme]])}
    type={type}
    aria-label={title}
  >
    {children}
  </button>
);
