import React from 'react';
import DetailCard from './DetailCard';

export default {
  title: 'Component/DetailCard',
  component: DetailCard,
};

export const DogDetails = (): JSX.Element => {
  return (
    <DetailCard
      name="Hallo, ich bin Mino!"
      breed="Golden Retriever"
      age="10 Jahre"
      weight="40kg"
      description="Mino ist lebhaft, freundlich und spielt gerne. Als Retriever schwimmt er natürlich für sein Leben gerne und möchte gerne morgens lange kuscheln. Er wurde 2x gebissen und verträgt sich deswegen nicht mit allen Rüden. Leinenführung ist schwierig, daher nicht als Stadthund geeignet."
    />
  );
};
