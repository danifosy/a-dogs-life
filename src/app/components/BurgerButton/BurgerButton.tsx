import React from 'react';
import BurgerIcon from '../../assets/BurgerButtonIcon';
import XIcon from '../../assets/XIcon';
import styles from './BurgerButton.module.css';

export type BurgerButtonProps = {
  onButtonClick?: () => void;
  isActive: boolean;
};

export default function BurgerButton({
  isActive,
  onButtonClick,
}: BurgerButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onButtonClick}>
      {isActive ? <XIcon /> : <BurgerIcon />}
    </button>
  );
}
