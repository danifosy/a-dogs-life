import React from 'react';
import DetailCard from './DetailCard';

export default {
  title: 'Component/DetailCard',
  component: DetailCard,
};

export const DogDetails = (): JSX.Element => {
  return <DetailCard>Hi, ich bin Mino</DetailCard>;
};
