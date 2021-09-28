import React from 'react';
import Typography from '../../components/Typography/Typography';
import DogCard from '../../components/DogCard/DogCard';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './MainPageARA.module.css';
import { Link } from 'react-router-dom';

export default function MainPageARA(): JSX.Element {
  return (
    <main>
      <Typography size="l">Hallo Maria!</Typography>
      <Typography size="s">Deine Schützlinge:</Typography>
      <section className={styles.dogCards}>
        <DogCard isLiked={true} image="src/assets/MockImages/Mino3.png" />
        <DogCard
          isLiked={false}
          image="src/assets/MockImages/white_ger_sheperd.jpg"
        />
        <DogCard isLiked={false} image="src/assets/MockImages/dachshund.jpg" />
        <DogCard isLiked={false} image="src/assets/MockImages/brown_lab.jpg" />
      </section>
      <Link to="/search" className={styles.button}>
        <SubmitButton icon="upload">Hochladen</SubmitButton>
      </Link>
    </main>
  );
}
