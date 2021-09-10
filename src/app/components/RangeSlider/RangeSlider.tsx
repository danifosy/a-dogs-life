import React from 'react';
import styles from './RangeSlider.module.css';

export default function RangeSlider(): JSX.Element {
  return <input type="range" min="2" max="50" className={styles.Range} />;
}
