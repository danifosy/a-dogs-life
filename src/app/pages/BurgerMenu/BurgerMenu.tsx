import React from 'react';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import BurgerButtonMenu from '../../components/BurgerButtonMenu/BurgerButtonMenu';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu(): JSX.Element {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerButton}>
        <BurgerButton isActive={true} />
      </div>
      <BurgerButtonMenu>Home</BurgerButtonMenu>
      <BurgerButtonMenu>Suche</BurgerButtonMenu>
      <BurgerButtonMenu>Favoriten</BurgerButtonMenu>
      <BurgerButtonMenu>Einstellungen</BurgerButtonMenu>
    </div>
  );
}
