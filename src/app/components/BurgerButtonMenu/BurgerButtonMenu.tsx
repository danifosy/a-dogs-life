import React from 'react';
import styles from './BurgerButtonMenu.module.css';
import Navigation from '../Navigation/Navigation';
import type { NavigationProps } from '../Navigation/Navigation';

export default function BurgerButtonMenu({
  children,
}: NavigationProps): JSX.Element {
  return (
    <nav>
      <div className={styles.burgerButton_container}>
        <div className={styles.burgerButton_overlay}>
          <Navigation>{children}</Navigation>
        </div>
      </div>
    </nav>
  );
}
