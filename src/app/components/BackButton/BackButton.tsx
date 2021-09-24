import React from 'react';
import BackIcon from '../../assets/BackIcon';
import styles from './BackButton.module.css';

export default function BackButton(): JSX.Element {
  function goBack() {
    history.back();
  }
  return (
mainPage
    <button className={styles.icon} onClick={() => history.back()}>

    <button className={styles.icon} onClick={goBack}>

      <BackIcon />
    </button>
  );
}
