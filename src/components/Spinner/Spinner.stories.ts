import type { Meta, StoryObj } from '@storybook/react';
import SpinnerRoot from './SpinnerRoot';


const meta: Meta<typeof SpinnerRoot> = {
  title: 'Spinners',
  component: SpinnerRoot,
  parameters: {
    controls: {
      exclude: ['spinner', 'args']
    }
  }
};

export default meta;
type Story = StoryObj<typeof SpinnerRoot>;

export const BumpSpinner: Story = {
  args: {
    spinner: 'bump',
    duration: 1000,
    dotRadius: 3,
    color: '#000000'
  },
};

export const CircleDotSpinner: Story = {
  args: {
    spinner: 'circleDot',
    radius: 2,
    spinnerRadius: 10,
    points: 4,
    color: '#000000',
    duration: 2500,
  },
};

export const MaterialSpinnerVariable: Story = {
  args: {
    spinner: 'material',
    radius: 18 ,
    strokeWidth: 4,
    rotationDuration: 900,
    pathAnimationDuration: 2400,
    pathLimits: { min: 0.01, max: 0.99 },
    staticPathLength: 0.10,
    showTrack: true,
    trackColor: '#edf3de',
    pathColor: '#3e884c',
  }
};

export const MaterialSpinnerStatic: Story = {
  args: {
    spinner: 'material',
    radius: 30,
    strokeWidth: 3,
    rotationDuration: 600,
    pathLimits: { min: 0.02, max: 0.98 },
    staticPath: true,
    staticPathLength: 0.33,
    showTrack: true,
    trackColor: '#e1eef7',
    pathColor: '#5792c0',
  }
};
