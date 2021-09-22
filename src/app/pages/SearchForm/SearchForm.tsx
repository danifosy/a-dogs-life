import React from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import SettingsForm from '../SettingsForm/SettingsForm';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import Typography from '../../components/Typography/Typography';
import styles from './SearchForm.module.css';

export default function SearchForm(): JSX.Element {
  return (
    <main>
      <form>
        <h2>
          <Typography size="l">Suche</Typography>
        </h2>
      </form>
    </main>
  );
}
