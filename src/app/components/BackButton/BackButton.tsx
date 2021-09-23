import React from 'react';
import BackIcon from '../../assets/BackIcon';
import styles from './BackButton.module.css';

export default function BackButton(): JSX.Element {
  function goBack() {
    history.back();
  }
  return (
    <button className={styles.icon} onClick={goBack}>
      <BackIcon />
    </button>
  );
}
