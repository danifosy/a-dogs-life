import React from 'react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Component/SubmitButton',
  Component: SubmitButton,
};

export const Signup = (): JSX.Element => (
  <SubmitButton icon="signup">Anmelden</SubmitButton>
);

export const Next = (): JSX.Element => (
  <SubmitButton icon="arrowRight">Weiter</SubmitButton>
);

export const Login = (): JSX.Element => (
  <SubmitButton icon="signup">Einloggen</SubmitButton>
);

export const Save = (): JSX.Element => (
  <SubmitButton icon="safe">Speichern</SubmitButton>
);

export const DetailSearch = (): JSX.Element => (
  <SubmitButton icon="search">Detailsuche</SubmitButton>
);

export const Search = (): JSX.Element => (
  <SubmitButton icon="search">Suchen</SubmitButton>
);

export const Upload = (): JSX.Element => (
  <SubmitButton icon="upload">Hochladen</SubmitButton>
);

export const Pictures = (): JSX.Element => (
  <SubmitButton icon="camera">Bilder</SubmitButton>
);

export const Contact = (): JSX.Element => (
  <SubmitButton icon="letter">Kontakt</SubmitButton>
);

export const Submit = (): JSX.Element => (
  <SubmitButton icon="send">Abschicken</SubmitButton>
);
