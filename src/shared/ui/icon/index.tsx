/* eslint-disable react/jsx-key */
import { FC, HTMLAttributes, JSX } from 'react';

import { classNames } from '@/shared/lib';

import { DarkMode, LightMode, SystemMode } from './icons-assets';
import styles from './styles.module.scss';

export type IconType = 'lightMode' | 'darkMode' | 'systemMode';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
  color?: string;
}

const getIcons = (color?: string) =>
  new Map<IconType, JSX.Element>([
    // themes icons
    ['lightMode', <LightMode color={color} />],
    ['darkMode', <DarkMode color={color} />],
    ['systemMode', <SystemMode color={color} />]
  ]);

export const Icon: FC<IconProps> = ({ type, className, color, ...rest }) => {
  const getIcon = (type: IconType) => getIcons(color).get(type);

  return (
    <div className={classNames(styles.container, {}, [className])} {...rest}>
      {getIcon(type)}
    </div>
  );
};
