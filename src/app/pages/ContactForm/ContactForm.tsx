import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './ContactForm.module.css';

export default function ContactForm(): JSX.Element {
  return (
    <main>
      {/* <h2>
        <Typography size="l">Kontaktanfrage</Typography>
      </h2> */}
      <form className={styles.contactForm}>
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
