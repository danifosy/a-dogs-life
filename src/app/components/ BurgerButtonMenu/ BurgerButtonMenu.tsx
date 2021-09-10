import React from 'react';
import type { ReactNode } from 'react';
import styles from './ BurgerButtonMenu.module.css';
import Typography from '../Typography/Typography';

type BurgerButtonMenuProps = {
  children: ReactNode;
};

export default function BurgerButtonMenu({
  children,
}: BurgerButtonMenuProps): JSX.Element {
  return (
    <nav>
      <div className={styles.BurgerButton_Container}>
        <div id={styles.BurgerButton_overlay}>
          <ul>
            <li>
              <Typography size="l">
                <a href="">{children}</a>
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
