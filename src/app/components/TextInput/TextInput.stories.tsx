import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Component/TextInput',
  component: TextInput,
};

export const Name = (): JSX.Element => (
  <TextInput inputType="text" id="name">
    Name
  </TextInput>
);

export const Password = (): JSX.Element => (
  <TextInput inputType="password" id="password">
    Passwort
  </TextInput>
);
