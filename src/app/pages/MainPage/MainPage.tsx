import React from 'react';
import Typography from '../../components/Typography/Typography';
import DogCard from '../../components/DogCard/DogCard';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './MainPage.module.css';
import { Link } from 'react-router-dom';

export default function MainPage(): JSX.Element {
  return (
    <main>
      <Typography size="l">Hallo Vanessa!</Typography>
      <Typography size="s">Diese Hunde suchen noch...</Typography>
      <section className={styles.dogCards}>
        <Link to="/detailcard">
          <DogCard isLiked={true} image="src/assets/MockImages/Mino3.png" />
        </Link>
        <DogCard
          isLiked={false}
          image="src/assets/MockImages/white_ger_sheperd.jpg"
        />
        <DogCard isLiked={false} image="src/assets/MockImages/dachshund.jpg" />
        <DogCard isLiked={false} image="src/assets/MockImages/brown_lab.jpg" />
      </section>
      <Link to="/search" className={styles.button}>
        <SubmitButton icon="search">Detailsuche</SubmitButton>
      </Link>
    </main>
  );
}
