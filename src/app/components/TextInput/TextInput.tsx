import React from 'react';
import type { ReactNode } from 'react';
import styles from './TextInput.module.css';
import Typography from '../Typography/Typography';

type TextInputProps = {
  id: string;
  inputType: 'text' | 'password';
  children: ReactNode;
};

export default function TextInput({
  id,
  inputType,
  children,
}: TextInputProps): JSX.Element {
  return (
    <div className={styles.inputField}>
      <input id={id} type={inputType} required className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.labelContent}>
          <Typography size="s">{children}</Typography>
        </span>
      </label>
    </div>
  );
}
