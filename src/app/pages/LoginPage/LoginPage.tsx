import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Typography from '../../components/Typography/Typography';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

export default function LoginPage(): JSX.Element {
  return (
    <main className={styles.login}>
      <Typography size="l">Einloggen</Typography>

      <TextInput id="name" inputType="text">
        Name
      </TextInput>
      <TextInput id="password" inputType="password">
        Passwort
      </TextInput>
      <Link to="" className={styles.button}>
        <SubmitButton icon="signup">Einloggen</SubmitButton>
      </Link>
      <Link to="/signupselection" className={styles.signupLink}>
        <Typography size="s">
          Noch keinen Account? <br />
          Hier anmelden!
        </Typography>
      </Link>
    </main>
  );
}
