import React from 'react';
import styles from './DropDownMenu.module.css';
import DropDownItem from '../DropDownItem/DropDownItem';

type DropDownEntry = {
  value: string;
  displayText: string;
};

type DropDownMenuProps = {
  options: DropDownEntry[];
};

export default function DropDownMenu({
  options,
}: DropDownMenuProps): JSX.Element {
  return (
    <select className={styles.dropDown}>
      <DropDownItem value="Rasse auswählen..."> </DropDownItem>
      {options.map((option) => (
        <DropDownItem value={option.value}>{option.displayText}</DropDownItem>
      ))}
    </select>
  );
}
