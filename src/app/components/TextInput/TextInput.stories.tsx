import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Component/TextInput',
  component: TextInput,
};

export const Name = (): JSX.Element => (
  <TextInput inputType="text">Name</TextInput>
);

export const Password = (): JSX.Element => (
  <TextInput inputType="password">Passwort</TextInput>
);
