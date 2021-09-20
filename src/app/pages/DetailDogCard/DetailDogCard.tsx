import React from 'react';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import DetailCard from '../../components/DetailCard/DetailCard';
import styles from './DetailDogCard.module.css';
import MockImage1 from '../../assets/MockImages/Mino1.png';
import MockImage2 from '../../assets/MockImages/Mino2.png';
import MockImage3 from '../../assets/MockImages/Mino4.png';

const MockImageGallery = [MockImage1, MockImage2, MockImage3];

export default function DetailDogCard(): JSX.Element {
  return (
    <main className={styles.card}>
      <div className={styles.carousel}>
        <ImageCarousel
          image={MockImageGallery}
          showArrows={true}
          dynamicHeight={true}
        />
      </div>
      <div className={styles.info}>
        <DetailCard
          name="Hallo, ich bin Mino!"
          breed="Golden Retriever"
          age="10 Jahre"
          weight="40kg"
          description="Mino ist lebhaft, freundlich und spielt gerne. Als Retriever schwimmt er natürlich für sein Leben gerne und möchte gerne morgens lange kuscheln. Er wurde 2x gebissen und verträgt sich deswegen nicht mit allen Rüden. Leinenführung ist schwierig, daher nicht als Stadthund geeignet."
        />
      </div>
    </main>
  );
}
