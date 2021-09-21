import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './Contactform.module.css';

export default function ContactForm(): JSX.Element {
  return (
    <>
      <form className={styles.contactForm}>
        <TextInput inputType="text" id="Vor-und-nachname">
          Vor- und Nachname
        </TextInput>
        <TextInput inputType="text" id="email">
          E-Mail Adresse
        </TextInput>
        <textarea>Deine Nachricht</textarea>
        <SubmitButton icon="send">Abschicken</SubmitButton>
      </form>
    </>
  );
}
