import React from 'react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Component/SubmitButton',
  Component: SubmitButton,
};

export const Signup = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Signup.svg" />
    Anmelden
  </SubmitButton>
);

export const Next = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/ArrowRight.svg" />
    Weiter
  </SubmitButton>
);

export const Login = (): JSX.Element => (
  <SubmitButton>
    {' '}
    <img src="src/assets/SVGs/Signup.svg" />
    Einloggen
  </SubmitButton>
);

export const Save = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Safe.svg" />
    Speichern
  </SubmitButton>
);

export const DetailSearch = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Search.svg" />
    Detailsuche
  </SubmitButton>
);

export const Search = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Search.svg" />
    Suchen
  </SubmitButton>
);

export const Upload = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Upload.svg" />
    Hochladen
  </SubmitButton>
);

export const Pictures = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Camera.svg" />
    Bilder
  </SubmitButton>
);

export const Contact = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Letter.svg" />
    Kontakt
  </SubmitButton>
);

export const Submit = (): JSX.Element => (
  <SubmitButton>
    <img src="src/assets/SVGs/Send.svg" />
    Abschicken
  </SubmitButton>
);
