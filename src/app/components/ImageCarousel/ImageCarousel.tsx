import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from '../Image/Image';
import styles from './ImageCarousel.styles.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

type imageCarouselProps = {
  showArrows: boolean;
  image: string[];
};

export default function ImageCarousel({
  showArrows,
  image,
}: imageCarouselProps): JSX.Element {
  return (
    <Carousel showArrows={showArrows}>
      {image.map((URL) => (
        <Image imageURL={URL} />
      ))}
    </Carousel>
  );
}
