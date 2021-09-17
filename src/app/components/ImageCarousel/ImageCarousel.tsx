import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from '../Image/Image';
import styles from './ImageCarousel.styles.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

type imageCarouselProps = {
  image: string[];
  showArrows: boolean;
};

export default function ImageCarousel({
  image,
}: imageCarouselProps): JSX.Element {
  return (
    <Carousel showArrows={true}>
      {image.map((imgURL) => (
        <Image imageURL={imgURL} />
      ))}
    </Carousel>
  );
}
