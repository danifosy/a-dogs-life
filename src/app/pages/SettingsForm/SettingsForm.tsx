import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './SettingsForm.module.css';
import Typography from '../../components/Typography/Typography';

export default function SettingsForm(): JSX.Element {
  return (
    <main>
      <form className={styles.settings}>
        <Typography size="l">Einstellungen</Typography>
        <TextInput inputType="text" id="new-name">
          Neuer Name
        </TextInput>
        <TextInput inputType="text" id="new-mail">
          Neue Email
        </TextInput>
        <TextInput inputType="password" id="new-password1">
          Neues Passwort
        </TextInput>
        <TextInput inputType="password" id="new-password2">
          Neues Passwort bestätigen
        </TextInput>
        <TextInput inputType="password" id="old-password">
          Altes Passwort
        </TextInput>
        <SubmitButton icon="safe">Speichern</SubmitButton>
      </form>
    </main>
  );
}
