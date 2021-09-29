import React from 'react';
import type { ReactNode } from 'react';
import styles from './Navigation.module.css';
import Typography from '../Typography/Typography';

export type NavigationProps = {
  link?: string;
  onClick?: React.MouseEventHandler;
  children: ReactNode;
};

export default function Navigation({
  link,
  children,
}: NavigationProps): JSX.Element {
  return (
    <>
      <ul className={styles.Navigation_List}>
        <li className={styles.Navigation_ListItem}>
          <Typography size="l">
            <a href={link} className={styles.Navigation_ListItem_Text}>
              {children}
            </a>
          </Typography>
        </li>
      </ul>
    </>
  );
}
