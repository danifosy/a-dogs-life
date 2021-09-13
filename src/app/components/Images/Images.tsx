import React from 'react';

export type ImagesProps = {
  image: string;
  className: string | undefined;
};
export default function Images({ image, className }: ImagesProps): JSX.Element {
  return (
    <img src={`src/assets/MockImages/${image}.png`} className={className} />
  );
}
