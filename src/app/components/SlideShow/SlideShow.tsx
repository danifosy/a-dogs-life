import React from 'react';
import styles from './SlideShow.module.css';
import Images from '../Images/Images';
import type { ImagesProps } from '../Images/Images';

export default function SlideShow({ image }: ImagesProps): JSX.Element {
  return (
    <>
      <div className={styles.Slider}>
        <Images image={`${image}`} />
      </div>
    </>
  );
}
