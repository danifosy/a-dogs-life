import React from 'react';

export type ImagesProps = {
  imageURL: string;
  className?: string;
};
export default function Images({
  imageURL,
  className,
}: ImagesProps): JSX.Element {
  return <img src={imageURL} className={className} />;
}
