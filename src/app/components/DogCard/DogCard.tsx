import React from 'react';
import HeartButton from '../HeartButton/HeartButton';
import Images from '../Images/Images';
import styles from './DogCard.module.css';

type DogCardProps = {
  image: string | null;
  isLiked: boolean;
};

export default function DogCard({ image, isLiked }: DogCardProps): JSX.Element {
  return (
    <section className={styles.card}>
      <div className={styles.heartButton}>
        <HeartButton onButtonClick={() => console.log('')} isActive={isLiked} />
      </div>
      <Images image={`${image}`} className={styles.image} />
    </section>
  );
}
