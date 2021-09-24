import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './ContactForm.module.css';
import Typography from '../../components/Typography/Typography';

export default function ContactForm(): JSX.Element {
  return (
    <main>
      <form className={styles.contactForm}>
        <Typography size="l">Kontaktanfrage</Typography>

        <TextInput inputType="text" id="name">
          Vor- und Nachname
        </TextInput>
        <TextInput inputType="text" id="email">
          E-Mail Adresse
        </TextInput>
        <textarea
          className={styles.message}
          placeholder="Deine Nachricht"
        ></textarea>
        <div className={styles.button}>
          <SubmitButton icon="send">Abschicken</SubmitButton>
        </div>
      </form>
    </main>
  );
}
