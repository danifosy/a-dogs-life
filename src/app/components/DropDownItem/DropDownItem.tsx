import React from 'react';
import type { ReactNode } from 'react';

export type DropDownItemProps = {
  value: string;
  children: ReactNode;
};

export default function ({ value, children }: DropDownItemProps): JSX.Element {
  return <option value={value}>{children}</option>;
}
