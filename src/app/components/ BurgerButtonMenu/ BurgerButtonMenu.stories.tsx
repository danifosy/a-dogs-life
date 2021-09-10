import React from 'react';
import BurgerButtonMenu from './ BurgerButtonMenu';

export default {
  title: 'Component/BurgerButtonMenu',
  component: BurgerButtonMenu,
};

export const Home = (): JSX.Element => {
  return <BurgerButtonMenu>Home</BurgerButtonMenu>;
};
export const Suche = (): JSX.Element => {
  return <BurgerButtonMenu>Suche</BurgerButtonMenu>;
};
export const Favoriten = (): JSX.Element => {
  return <BurgerButtonMenu>Favoriten</BurgerButtonMenu>;
};
export const Einstellungen = (): JSX.Element => {
  return <BurgerButtonMenu>Einstellungen</BurgerButtonMenu>;
};
export const All = (): JSX.Element => {
  return (
    <>
      <BurgerButtonMenu>Home</BurgerButtonMenu>
      <BurgerButtonMenu>Suche</BurgerButtonMenu>
      <BurgerButtonMenu>Favoriten</BurgerButtonMenu>
      <BurgerButtonMenu>Einstellungen</BurgerButtonMenu>
    </>
  );
};
