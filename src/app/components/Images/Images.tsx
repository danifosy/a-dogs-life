import React from 'react';
import styles from './Images.module.css';

export type ImagesProps = {
  image: 'Mino1' | 'Mino2' | 'Mino3' | 'Mino4';
};
export default function Images({ image }: ImagesProps): JSX.Element {
  return (
    <img src={`src/assets/MockImages/${image}.png`} className={styles.Images} />
  );
}
