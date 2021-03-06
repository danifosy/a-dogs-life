import React from 'react';
import DogCard from './DogCard';

export default {
  title: 'Component/DogCard',
  component: DogCard,
};

export const DogProfileCard = (): JSX.Element => (
  <DogCard isLiked={true} image="src/app/assets/MockImages/Mino3.png" />
);
