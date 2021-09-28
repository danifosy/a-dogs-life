import React from 'react';
import Typography from '../../components/Typography/Typography';
import DogCard from '../../components/DogCard/DogCard';
import styles from './FavoritesPage.module.css';

export default function FavoritesPage(): JSX.Element {
  return (
    <main>
      <Typography size="l">Favoriten</Typography>
      <section className={styles.dogCards}>
        <DogCard isLiked={true} image="src/assets/MockImages/Mino3.png" />
        <DogCard
          isLiked={false}
          image="src/assets/MockImages/white_ger_sheperd.jpg"
        />
        <DogCard isLiked={false} image="src/assets/MockImages/dachshund.jpg" />
        <DogCard isLiked={false} image="src/assets/MockImages/brown_lab.jpg" />
      </section>
    </main>
  );
}
