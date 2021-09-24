import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Typography from '../../components/Typography/Typography';
import { Link } from 'react-router-dom';
import styles from './SignUpPage.module.css';

export default function SignUpPage(): JSX.Element {
  return (
    <main className={styles.signup}>
      <Typography size="l">Anmeldung</Typography>

      <TextInput id="name" inputType="text">
        Name
      </TextInput>
      <TextInput id="email" inputType="text">
        Email
      </TextInput>

      <TextInput id="password" inputType="password">
        Passwort
      </TextInput>
      <TextInput id="repeat_password" inputType="password">
        Passwort wiederholen
      </TextInput>
      <Link to="" className={styles.button}>
        <SubmitButton icon="signup">Anmelden</SubmitButton>
      </Link>
      <Link to="/login" className={styles.loginText}>
        <Typography size="s">
          Hast du bereits einen Account? <br />
          Hier geht's zum Login.
        </Typography>
      </Link>
    </main>
  );
}
