import type { Meta, StoryObj } from '@storybook/react';
import { robotoSlab } from '../../utilities/fonts';

import ButtonMain from './ButtonMain';

const meta: Meta<typeof ButtonMain> = {
  title: 'Button Main',
  component: ButtonMain
};

export default meta;
type Story = StoryObj<typeof ButtonMain>;

export const Primary: Story = {
  args: {
    label: 'Button',
    disabled: false,
    font: robotoSlab,
  }
};