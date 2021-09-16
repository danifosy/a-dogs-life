import React from 'react';
import DropDownMenu from './DropDownMenu';

export default {
  title: 'Component/DropDownMenu',
  component: DropDownMenu,
};

const dropDownOptions = [
  { value: 'lab', displayText: 'Labrador' },
  { value: 'gold', displayText: 'Golden Retriever' },
];

export const Breed = (): JSX.Element => (
  <DropDownMenu options={dropDownOptions} />
);
