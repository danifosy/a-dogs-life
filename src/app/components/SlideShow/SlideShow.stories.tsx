import React from 'react';
import SlideShow from './SlideShow';

export default {
  title: 'Component/Slideshow',
  component: SlideShow,
};

export const SlideShowGallery = (): JSX.Element => {
  return (
    <>
      <SlideShow image="Mino1"></SlideShow>
      <SlideShow image="Mino2"></SlideShow>
      <SlideShow image="Mino3"></SlideShow>
    </>
  );
};
