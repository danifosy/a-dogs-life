import React from 'react';
import type { ReactNode } from 'react';
import styles from './Typography.module.css';

type TyphographyProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  children: ReactNode;
};

export default function Typography({
  size,
  children,
}: TyphographyProps): JSX.Element {
  if (size === 'xs') {
    return <p className={styles.textExtraSmall}>{children}</p>;
  } else if (size === 's') {
    return <p className={styles.textSmall}>{children}</p>;
  } else if (size === 'm') {
    return <p className={styles.textMedium}>{children}</p>;
  } else if (size === 'l') {
    return <h3 className={styles.textLarge}>{children}</h3>;
  } else if (size === 'xl') {
    return <h2 className={styles.textExtraLarge}>{children}</h2>;
  } else {
    return <h1 className={styles.textExtraExtraLarge}>{children}</h1>;
  }
}
