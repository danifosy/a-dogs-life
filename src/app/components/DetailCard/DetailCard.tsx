import React from 'react';
import type { ReactNode } from 'react';
import styles from './DetailCard.module.css';
import HeartButton from '../HeartButton/HeartButton';
import Typography from '../Typography/Typography';
import SubmitButton from '../SubmitButton/SubmitButton';

type DetailCardProps = {
  name: string;
  breed: string;
  age: string;
  weight: string;
  textfield: string;
};

export default function DetailCard({
  name,
  breed,
  age,
  weight,
  textfield,
}: DetailCardProps): JSX.Element {
  return (
    <section className={styles.container}>
      <HeartButton onButtonClick={() => console.log('')} isActive={true} />
      <p>
        <Typography size="m">{name}</Typography>
      </p>
      <ul>
        <li>
          <Typography size="s">{breed}</Typography>
        </li>
        <li>
          <Typography size="s">{age}</Typography>
        </li>
        <li>
          <Typography size="s">{weight}</Typography>
        </li>
      </ul>
      <p>
        <Typography size="m">{textfield}</Typography>
      </p>
      <SubmitButton icon="letter">Kontakt</SubmitButton>
    </section>
  );
}
