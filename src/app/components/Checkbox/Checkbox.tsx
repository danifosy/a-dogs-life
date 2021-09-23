import React from 'react';
import type { ReactNode } from 'react';
import styles from './Checkbox.module.css';
import Typography from '../Typography/Typography';

type CheckboxProps = {
  checked?: boolean;
  children: ReactNode;
};

export default function Checkbox({
  checked,
  children,
}: CheckboxProps): JSX.Element {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.checkbox}
        defaultChecked={checked}
      />
      <div className={styles.design}></div>
      <Typography size="s">{children}</Typography>
    </label>
  );
}
