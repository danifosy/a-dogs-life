import React from 'react';
import Typhography from './Typography';

export default {
  title: 'Component/Typography',
  component: Typhography,
};

export const ExtraSmall = (): JSX.Element => (
  <Typhography size="xs">this is very small text</Typhography>
);

export const Small = (): JSX.Element => (
  <Typhography size="s">this is small text</Typhography>
);

export const Medium = (): JSX.Element => (
  <Typhography size="m">this is regular size text</Typhography>
);

export const Large = (): JSX.Element => (
  <Typhography size="l">this is large text</Typhography>
);

export const ExtraLarge = (): JSX.Element => (
  <Typhography size="xl">this is very large text</Typhography>
);

export const textExtraExtraLarge = (): JSX.Element => (
  <Typhography size="xxl">this is very very large text</Typhography>
);

export const All = (): JSX.Element => (
  <>
    <Typhography size="xs">this is very small text</Typhography>
    <Typhography size="s">this is small text</Typhography>
    <Typhography size="m">this is regular size text</Typhography>
    <Typhography size="l">this is large text</Typhography>
    <Typhography size="xl">this is very large text</Typhography>
    <Typhography size="xxl">this is very very large text</Typhography>
  </>
);
