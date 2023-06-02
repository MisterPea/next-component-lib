import type { Meta, StoryObj } from '@storybook/react';
import BumpSpinner from './BumpSpinner';
import CircleDotSpinner from './CircleDotSpinner';

// const meta: Meta<typeof BumpSpinner> = {
//   title: 'Spinner',
//   component: BumpSpinner
// };

// export default meta;
// type Story = StoryObj<typeof BumpSpinner>;

// export const Bump_Spinner: Story = {
//   args: {}
// };

const meta: Meta<typeof CircleDotSpinner> = {
  title: 'Spinner',
  component: CircleDotSpinner
};

export default meta;
type Story = StoryObj<typeof CircleDotSpinner>;

export const Bump_Spinner: Story = {
  args: {}
};