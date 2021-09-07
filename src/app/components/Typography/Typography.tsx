import React from 'react';
import type { ReactNode } from 'react';
import styles from './Typhography.module.css';

type TyphographyProps = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  children: ReactNode;
};

export default function Typhography({
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
    return <p className={styles.textLarge}>{children}</p>;
  } else if (size === 'xl') {
    return <p className={styles.textExtraLarge}>{children}</p>;
  } else {
    return <p className={styles.textExtraExtraLarge}>{children}</p>;
  }
}
