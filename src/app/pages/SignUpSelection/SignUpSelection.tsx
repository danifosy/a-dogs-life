import React from 'react';
import Typography from '../../components/Typography/Typography';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';
import styles from './SignUpSelection.module.css';

export default function SignUpSelection(): JSX.Element {
  return (
    <main className={styles.selection}>
      <h2>
        <Typography size="l">Anmeldung</Typography>
      </h2>
      <p>
        <Typography size="m">Ich melde mich an als</Typography>
      </p>
      <label className={styles.label}>
        <input type="checkbox" className={styles.checkbox} />
        <Typography size="s">Tierschützer*in</Typography>
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.checkbox} />
        <Typography size="s">Interessent</Typography>
      </label>
      <Link to="/signup" className={styles.button}>
        <SubmitButton icon="arrowRight">Weiter</SubmitButton>
      </Link>
      <Link to="/" className={styles.loginText}>
        <p>
          <Typography size="s">
            Hast du bereits einen Account? <br />
            Hier geht's zum Login.
          </Typography>
        </p>
      </Link>
    </main>
  );
}
