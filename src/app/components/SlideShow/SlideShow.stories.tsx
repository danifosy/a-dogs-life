import React from 'react';
import SlideShow from './SlideShow';
import MockImage1 from '../../../assets/MockImages/Mino1.png';
import MockImage2 from '../../../assets/MockImages/Mino2.png';
import MockImage3 from '../../../assets/MockImages/Mino4.png';

export default {
  title: 'Component/Slideshow',
  component: SlideShow,
};

export const SlideShowGallery = (): JSX.Element => {
  return (
    <>
      <SlideShow imageURL={MockImage1}></SlideShow>
      <SlideShow imageURL={MockImage2}></SlideShow>
      <SlideShow imageURL={MockImage3}></SlideShow>
    </>
  );
};
