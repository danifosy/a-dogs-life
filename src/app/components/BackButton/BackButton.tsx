import React from 'react';
import BackIcon from '../../../assets/BackIcon';
import styles from './Backbutton.module.css';

export default function BackButton(): JSX.Element {
  return (
    <button className={styles.icon}>
      <BackIcon />
    </button>
  );
}
