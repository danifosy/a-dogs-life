import React from 'react';
import Typography from './Typography';

export default {
  title: 'Component/Typography',
  component: Typography,
};

export const ExtraSmall = (): JSX.Element => (
  <Typography size="xs">this is very small text</Typography>
);

export const Small = (): JSX.Element => (
  <Typography size="s">this is small text</Typography>
);

export const Medium = (): JSX.Element => (
  <Typography size="m">this is regular size text</Typography>
);

export const Large = (): JSX.Element => (
  <Typography size="l">this is large text</Typography>
);

export const ExtraLarge = (): JSX.Element => (
  <Typography size="xl">this is very large text</Typography>
);

export const textExtraExtraLarge = (): JSX.Element => (
  <Typography size="xxl">this is very very large text</Typography>
);

export const All = (): JSX.Element => (
  <>
    <Typography size="xs">this is very small text</Typography>
    <Typography size="s">this is small text</Typography>
    <Typography size="m">this is regular size text</Typography>
    <Typography size="l">this is large text</Typography>
    <Typography size="xl">this is very large text</Typography>
    <Typography size="xxl">this is very very large text</Typography>
  </>
);
