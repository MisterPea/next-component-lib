import type { Meta, StoryObj } from '@storybook/react';
import { ibmPlexSans, robotoSlab } from '../../utilities/fonts';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ButtonMainProps, ColorGroup } from './ButtonMain';

import ButtonMain from './ButtonMain';

const meta: Meta<typeof ButtonMain> = {
  title: 'Button Main',
  component: ButtonMain
};

export default meta;
type Story = StoryObj<typeof ButtonMain>;

const primaryColor: ColorGroup = {
  main: '#001122',
  text: '#ffffca',
  border: '#f61919',
  shadow: 's2',
  iconRight: 'grey'
};

const hoverColor: ColorGroup = {
  main: '#00eeff',
  text: '#474d5b',
  border: 'blue',
  shadow: 's0',
  iconRight: 'yellow'
};

const disabledColor: ColorGroup = {
  main: '#9d9b9b',
  text: '#6d6d6d',
  border: '',
  shadow: 's0',
  iconRight: '#4e5e5e'
};

const args: ButtonMainProps = {
  label: 'Button',
  size: 'medium',
  borderRadius: 'r4',
  border: 0,
  primaryColor,
  hoverColor,
  disabledColor,
  disabled: false,
  fullWidth: false,
  onClick: () => console.log('main-click'),
  iconRight: RiCloseCircleLine,
  iconOnRightClick: () => console.log('iconRight'),
  font: ibmPlexSans,
  props: { 'aria-label': 'super-cool-button' }
};

export const Primary: Story = {
  args: args,
};

