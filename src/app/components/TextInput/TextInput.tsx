import React from 'react';
import type { ReactNode } from 'react';
import styles from './TextInput.module.css';
import Typography from '../Typography/Typography';

type TextInputProps = {
  inputType: 'text' | 'password';
  children: ReactNode;
};

export default function TextInput({
  inputType,
  children,
}: TextInputProps): JSX.Element {
  return (
    <div className={styles.inputField}>
      <input type={inputType} required className={styles.input} />
      <label className={styles.label}>
        <span className={styles.labelContent}>
          <Typography size="s">{children}</Typography>
        </span>
      </label>
    </div>
  );
}
