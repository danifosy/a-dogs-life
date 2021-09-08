import React from 'react';
import type { ReactNode } from 'react';
import styles from './SubmitButton.module.css';

type SubmitButtonProps = {
  children: ReactNode;
};

export default function submitButton({
  children,
}: SubmitButtonProps): JSX.Element {
  return <button className={styles.submitButton}>{children}</button>;
}
