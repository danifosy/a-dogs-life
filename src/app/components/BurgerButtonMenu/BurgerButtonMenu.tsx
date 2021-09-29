import React from 'react';
import styles from './BurgerButtonMenu.module.css';
import Navigation from '../Navigation/Navigation';
import type { NavigationProps } from '../Navigation/Navigation';

export default function BurgerButtonMenu({
  link,
  onClick,
  children,
}: NavigationProps): JSX.Element {
  return (
    <nav onClick={onClick}>
      <div className={styles.burgerButton_container}>
        <div className={styles.burgerButton_overlay}>
          <Navigation link={link}>{children}</Navigation>
        </div>
      </div>
    </nav>
  );
}
