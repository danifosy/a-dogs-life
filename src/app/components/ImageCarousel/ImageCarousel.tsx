import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from '../Image/Image';
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
      {image.map((url) => (
        <Image imageURL={url} />
      ))}
    </Carousel>
  );
}
