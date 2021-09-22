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
          <Checkbox checked={true}>Rüde</Checkbox>
          <Checkbox checked={true}>Hündin</Checkbox>
          <Checkbox checked={true}>beides</Checkbox>
        </div>
        <div className={styles.neutered}>
          <p>
            <Typography size="s">kastriert</Typography>
          </p>
          <Checkbox checked={true}>ja</Checkbox>
          <Checkbox checked={true}>nein</Checkbox>
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
            <Checkbox checked={true}>Rüde</Checkbox>
            <Checkbox checked={true}>Hündin</Checkbox>
            <Checkbox checked={true}>Katzen</Checkbox>
            <Checkbox checked={true}>Kindern</Checkbox>
          </div>
        </div>
        <SubmitButton icon="search">Suchen</SubmitButton>
      </form>
    </main>
  );
}
