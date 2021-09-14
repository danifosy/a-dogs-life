import React from 'react';
import BurgerButton from './BurgerButton';
import type { BurgerButtonProps } from './BurgerButton';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/BurgerButton',
  component: BurgerButton,
  parameters: { layout: 'centered' },
};

const Template: Story<BurgerButtonProps> = (args) => <BurgerButton {...args} />;

export const Burger = Template.bind({});
Burger.args = {
  isActive: false,
};
