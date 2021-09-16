import React from 'react';
import styles from './SlideShow.module.css';
import Images from '../Image/Image';
import type { ImagesProps } from '../Image/Image';

export default function SlideShow({ imageURL }: ImagesProps): JSX.Element {
  return (
    <>
      <div className={styles.Slider}>
        <Images imageURL={`${imageURL}`} />
      </div>
    </>
  );
}
