import React from 'react';
import type { ReactNode } from 'react';
import styles from './SubmitButton.module.css';

type SubmitButtonProps = {
  icon:
    | 'ArrowRight'
    | 'Camera'
    | 'Letter'
    | 'Safe'
    | 'Search'
    | 'Send'
    | 'Signup'
    | 'Upload';
  children: ReactNode;
};

export default function submitButton({
  icon,
  children,
}: SubmitButtonProps): JSX.Element {
  return (
    <button className={styles.submitButton}>
      <img src={`src/assets/SVGs/${icon}.svg`} className={styles.icon} />
      {children}
    </button>
  );
}
