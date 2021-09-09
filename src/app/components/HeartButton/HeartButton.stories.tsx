import React from 'react';
import HeartButton from './HeartButton';
import type { HeartButtonProps } from './HeartButton';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/HeartButton',
  component: HeartButton,
  argTypes: {
    control: { types: 'select' },
  },
};

const Template: Story<HeartButtonProps> = (args) => <HeartButton {...args} />;

export const HeartButtonIcon = Template.bind({});
HeartButtonIcon.args = {
  isActive: true,
};
