import React from 'react';
import Typography from '../../components/Typography/Typography';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import DogIcon from '../../../assets/Dog';

export default function LandingPage(): JSX.Element {
  return (
    <main className={styles.landingPage}>
      <Typography size="xxl">A Dog's Life</Typography>
      <Typography size="s">
        Finde deinen neuen besten Freund und startet gemeinsam in ein
        großartiges Abenteuer! Wir helfen dir, den perfekten Hund für deine
        Ansprüche zu finden, damit ihr zusammen viele schöne Stunden verbringen
        könnt.
      </Typography>
      <Link to="/signupselection " className={styles.button}>
        <SubmitButton icon="signup">Anmelden</SubmitButton>
      </Link>
      <Link to="/login" className={styles.loginText}>
        <Typography size="s">
          Hast du bereits einen Account? <br />
          Hier geht's zum Login.
        </Typography>
      </Link>
      <DogIcon className={styles.dogSVG} />
    </main>
  );
}
