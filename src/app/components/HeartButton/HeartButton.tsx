import React from 'react';
import HeartIcon from '../../assets/HeartIcon';
import styles from './HeartButton.module.css';

export type HeartButtonProps = {
  onButtonClick: () => void;
  isActive: boolean;
  className?: string;
};

export default function HeartButton({
  isActive,
  onButtonClick,
  className,
}: HeartButtonProps): JSX.Element {
  const activeStyles = {
    fill: 'var(--action-color)',
    stroke: 'var(--action-color)',
  };

  const inactiveStyles = {
    fill: 'var(--background-color)',
    stroke: 'var(--action-color)',
  };

  return (
    <button onClick={onButtonClick} className={styles.heartButton}>
      <HeartIcon
        {...(isActive ? activeStyles : inactiveStyles)}
        className={className}
      />
    </button>
  );
}
