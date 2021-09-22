import React from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Typography from '../../components/Typography/Typography';
import styles from './SearchForm.module.css';

export default function SearchForm(): JSX.Element {
  return (
    <main>
      <form className={styles.searchForm}>
        <h2>
          <Typography size="l">Suche</Typography>
        </h2>
        <div className={styles.sex}>
          <Checkbox>Rüde</Checkbox>
          <Checkbox>Hündin</Checkbox>
          <Checkbox>beides</Checkbox>
        </div>
        <div className={styles.neutered}>
          <p>
            <Typography size="s">kastriert</Typography>
          </p>
          <Checkbox>ja</Checkbox>
          <Checkbox>nein</Checkbox>
        </div>
        <p>
          <Typography size="m">Gewicht</Typography>
        </p>
        <RangeSlider></RangeSlider>
        <p>
          <Typography size="m">Alter</Typography>
        </p>
        <RangeSlider></RangeSlider>
        <div className={styles.tolerate}>
          <p>
            <Typography size="m">Verträgt sich mit:</Typography>
          </p>
          <div className={styles.tolerateCheckboxes}>
            <Checkbox>Rüde</Checkbox>
            <Checkbox>Hündin</Checkbox>
            <Checkbox>Katzen</Checkbox>
            <Checkbox>Kindern</Checkbox>
          </div>
        </div>
        <SubmitButton icon="search">Suchen</SubmitButton>
      </form>
    </main>
  );
}
