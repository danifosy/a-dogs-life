import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ImageCarousel from './ImageCarousel';
import MockImage1 from '....//../assets/MockImages/Mino1.png';
import MockImage2 from '../../../assets/MockImages/Mino2.png';
import MockImage3 from '../../../assets/MockImages/Mino4.png';

export default {
  title: 'Component/Carousel',
  component: Carousel,
};

const MockImageGallery = [MockImage1, MockImage2, MockImage3];

export const DogSlideCarousel = (): JSX.Element => (
  <ImageCarousel showArrows={true} image={MockImageGallery} />
);
