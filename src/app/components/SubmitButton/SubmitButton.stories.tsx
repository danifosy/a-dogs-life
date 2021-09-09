import React from 'react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Component/SubmitButton',
  Component: SubmitButton,
};

export const Signup = (): JSX.Element => (
  <SubmitButton icon="Signup">Anmelden</SubmitButton>
);

export const Next = (): JSX.Element => (
  <SubmitButton icon="ArrowRight">Weiter</SubmitButton>
);

export const Login = (): JSX.Element => (
  <SubmitButton icon="Signup">Einloggen</SubmitButton>
);

export const Save = (): JSX.Element => (
  <SubmitButton icon="Safe">Speichern</SubmitButton>
);

export const DetailSearch = (): JSX.Element => (
  <SubmitButton icon="Search">Detailsuche</SubmitButton>
);

export const Search = (): JSX.Element => (
  <SubmitButton icon="Search">Suchen</SubmitButton>
);

export const Upload = (): JSX.Element => (
  <SubmitButton icon="Upload">Hochladen</SubmitButton>
);

export const Pictures = (): JSX.Element => (
  <SubmitButton icon="Camera">Bilder</SubmitButton>
);

export const Contact = (): JSX.Element => (
  <SubmitButton icon="Letter">Kontakt</SubmitButton>
);

export const Submit = (): JSX.Element => (
  <SubmitButton icon="Send">Abschicken</SubmitButton>
);
