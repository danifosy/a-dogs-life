import React from 'react';
import BurgerButtonMenu from './ BurgerButtonMenu';

export default {
  title: 'Component/BurgerButtonMenu',
  component: BurgerButtonMenu,
};

export const Home = (): JSX.Element => {
  return (
    <>
      <BurgerButtonMenu>Home</BurgerButtonMenu>
      <BurgerButtonMenu>Suche</BurgerButtonMenu>
      <BurgerButtonMenu>Favoriten</BurgerButtonMenu>
      <BurgerButtonMenu>Einstellungen</BurgerButtonMenu>
    </>
  );
};
