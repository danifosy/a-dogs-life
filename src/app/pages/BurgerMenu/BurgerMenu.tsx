import React, { useState } from 'react';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import BurgerButtonMenu from '../../components/BurgerButtonMenu/BurgerButtonMenu';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu(): JSX.Element {
  const [opened, setOpened] = useState(false);

  function handleOpened() {
    setOpened(!opened);
  }

  return (
    <>
      <div className={styles.burgerButton}>
        <BurgerButton isActive={opened} onButtonClick={handleOpened} />
      </div>
      {opened === true && (
        <div className={styles.burgerMenu}>
          <BurgerButtonMenu>Home</BurgerButtonMenu>
          <BurgerButtonMenu>Suche</BurgerButtonMenu>
          <BurgerButtonMenu>Favoriten</BurgerButtonMenu>
          <BurgerButtonMenu link="/settings">Einstellungen</BurgerButtonMenu>
        </div>
      )}
    </>
  );
}
