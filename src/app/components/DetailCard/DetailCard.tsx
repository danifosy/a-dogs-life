import React from 'react';
import type { ReactNode } from 'react';
import styles from './DetailCard.module.css';
import HeartButton from '../HeartButton/HeartButton';
import Typography from '../Typography/Typography';
import SubmitButton from '../SubmitButton/SubmitButton';

type DetailCardProps = {
  children: ReactNode;
};

export default function DetailCard({ children }: DetailCardProps): JSX.Element {
  return (
    <section className={styles.container}>
      <HeartButton onButtonClick={() => console.log('')} isActive={true} />
      <p>
        <Typography size="m">{children}</Typography>
      </p>
      <ul>
        <li>
          <Typography size="s">{children}</Typography>
        </li>
        <li>
          <Typography size="s">{children}</Typography>
        </li>
        <li>
          <Typography size="s">{children}</Typography>
        </li>
      </ul>
      <p>
        <Typography size="m">{children}</Typography>
      </p>
      <SubmitButton icon="letter">Kontakt</SubmitButton>
    </section>
  );
}
