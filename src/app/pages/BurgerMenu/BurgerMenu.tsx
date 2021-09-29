import type { MouseEventHandler } from 'react';
import React, { useState } from 'react';
import { AuthContext } from '../../App';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import BurgerButtonMenu from '../../components/BurgerButtonMenu/BurgerButtonMenu';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu(): JSX.Element {
  const [opened, setOpened] = useState(false);

  function handleOpened() {
    setOpened(!opened);
  }

  const { dispatch } = React.useContext(AuthContext);

  const logout: MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGOUT' });
    setOpened(false);
    return true;
  };

  return (
    <>
      <div className={styles.burgerButton}>
        <BurgerButton isActive={opened} onButtonClick={handleOpened} />
      </div>
      {opened === true && (
        <div className={styles.burgerMenu}>
          <BurgerButtonMenu link="/home">Home</BurgerButtonMenu>
          <BurgerButtonMenu link="/search">Suche</BurgerButtonMenu>
          <BurgerButtonMenu link="/favorites">Favoriten</BurgerButtonMenu>
          <BurgerButtonMenu link="/settings">Einstellungen</BurgerButtonMenu>
          <BurgerButtonMenu link="" onClick={logout}>
            Ausloggen
          </BurgerButtonMenu>
        </div>
      )}
    </>
  );
}
