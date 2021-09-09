import React from 'react';
import type { ReactNode } from 'react';
import styles from './SubmitButton.module.css';
import Typography from '../Typography/Typography';

type SubmitButtonProps = {
  icon:
    | 'arrowRight'
    | 'camera'
    | 'letter'
    | 'safe'
    | 'search'
    | 'send'
    | 'signup'
    | 'upload';
  children: ReactNode;
};

export default function SubmitButton({
  icon,
  children,
}: SubmitButtonProps): JSX.Element {
  return (
    <button className={styles.submitButton}>
      <img src={`src/assets/SVGs/${icon}.svg`} className={styles.icon} />
      <Typography size="s">{children}</Typography>
    </button>
  );
}
