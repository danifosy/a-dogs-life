import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import Typography from '../../components/Typography/Typography';
import Checkbox from '../../components/Checkbox/Checkbox';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import styles from './UploadPage.module.css';

export default function UploadPage(): JSX.Element {
  return (
    <main>
      <TextInput id="dogname" inputType="text">
        Name des Hundes
      </TextInput>
      <div className={styles.sex}>
        <Checkbox>Rüde</Checkbox>
        <Checkbox>Hündin</Checkbox>
      </div>
      <div className={styles.neutered}>
        <Typography size="s">Kastriert</Typography>
        <Checkbox>ja</Checkbox>
        <Checkbox>Nein</Checkbox>
      </div>
      <div className={styles.weight}>
        <label htmlFor="weight">
          <Typography size="s">Gewichtseingabe</Typography>
        </label>
        <input type="number" id="weight" />
        <Typography size="s">kg</Typography>
      </div>
      <div className={styles.age}>
        <label htmlFor="age">
          <Typography size="s">Alterseingabe</Typography>
        </label>
        <input type="number" id="age" />
        <Typography size="s">Jahre</Typography>
      </div>
      <div className={styles.tolerance}>
        <Typography size="m">Verträgt sich mit</Typography>
        <Checkbox>Hündin</Checkbox>
        <Checkbox>Rüde</Checkbox>
        <Checkbox>Kindern</Checkbox>
        <Checkbox>Katzen</Checkbox>
      </div>
      <div className={styles.buttons}>
        <SubmitButton icon="camera">Bilder</SubmitButton>
        <SubmitButton icon="safe">Speichern</SubmitButton>
      </div>
    </main>
  );
}
