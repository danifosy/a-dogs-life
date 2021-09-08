import React from 'react';
import type { ReactNode } from 'react';
import styles from './Typography.module.css';

type TyphographyProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  children: ReactNode;
};

const sizeMap = {
  xs: styles.textExtraSmall,
  s: styles.textSmall,
  m: styles.textMedium,
  l: styles.textLarge,
  xl: styles.textExtraLarge,
  xxl: styles.textExtraExtraLarge,
};

export default function Typography({
  size,
  children,
}: TyphographyProps): JSX.Element {
  switch (size) {
    case 'xs':
    case 's':
    case 'm':
      return <p className={sizeMap[size]}>{children}</p>;
    case 'l':
      return <h3 className={sizeMap[size]}>{children}</h3>;
    case 'xl':
      return <h2 className={sizeMap[size]}>{children}</h2>;
    case 'xxl':
      return <h1 className={sizeMap[size]}>{children}</h1>;
  }
}
