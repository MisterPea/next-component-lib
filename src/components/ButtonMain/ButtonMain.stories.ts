import type { Meta, StoryObj } from '@storybook/react';
import { ibmPlexSans, robotoSlab, interMed, interLight, sourceSansReg } from '../../utilities/fonts';
import { FiPaperclip } from 'react-icons/fi';
import { GoRepo } from 'react-icons/go';
import { MdOutlineFileDownload, MdOutlineEmojiSymbols } from 'react-icons/md';
import { ButtonMainProps, ColorGroup } from './ButtonMain';
import ButtonMain from './ButtonMain';

const meta: Meta<typeof ButtonMain> = {
  title: 'Button Main',
  component: ButtonMain
};

export default meta;
type Story = StoryObj<typeof ButtonMain>;

const primaryArgs: ButtonMainProps = {
  label: 'Primary Button',
  size: 'medium',
  borderRadius: 'r4',
  border: 0,
  primaryColor: {
    main: '#000000',
    text: '#ffffff',
    border: '',

  },
  hoverColor: {
    main: '#4c4c4c',
    text: '#bebebe',
    border: ''
  },
  disabledColor: {
    main: 'grey',
    text: 'lightgrey',
    border: '',
  },
  disabled: false,
  fullWidth: false,
  font: ibmPlexSans,
  props: { 'aria-label': 'super-cool-button' }
};

const outlineArgs: ButtonMainProps = {
  label: 'Outline Button',
  size: 'medium',
  borderRadius: 'full',
  border: 1,
  primaryColor: {
    main: '#ffffff',
    text: '#303030',
    border: '#707070',
    shadow: 's2',
  },
  hoverColor: {
    main: '#ffffff',
    text: '#707070',
    border: '#909090',
    shadow: 's0',
  },
  disabledColor: {
    main: '#d8d8d8',
    text: '#c7c7c7',
    border: '#bcbcbc',
    shadow: 's0',
  },
  disabled: false,
  fullWidth: false,
  font: ibmPlexSans,
};

const rightIconArgs: ButtonMainProps = {
  label: 'Single Icon',
  size: 'medium',
  borderRadius: 'r4',
  border: 0,
  primaryColor: {
    main: '#5b995b',
    text: '#ffffff',
    border: '#00000000',
    iconRight: '#fffdb5'
  },
  hoverColor: {
    main: '#5bac97',
    text: '#ffffff',
    border: '#00000000',
    iconRight: '#ffffff'
  },
  iconRight: FiPaperclip
};

const leftIconArgs: ButtonMainProps = {
  label: 'New Repo',
  size: 'medium',
  borderRadius: 'r4',
  border: 0,
  primaryColor: {
    main: 'rgb(32,136,61)',
    text: '#ffffff',
    border: '#00000000',
    iconLeft: '#ffffff'
  },
  hoverColor: {
    main: 'rgb(26, 116, 51)',
    text: '#ffffff',
    border: '#00000000',
    iconRight: '#ffffff'
  },
  iconLeft: GoRepo,
  font: interMed,
};

const leftIconOutlineArgs: ButtonMainProps = {
  label: 'Download family',
  size: 'small',
  borderRadius: 'full',
  border: 1,
  primaryColor: {
    main: '#ffffff',
    text: 'rgb(25, 103, 210)',
    border: 'rgb(25, 103, 210)',

  },
  hoverColor: {
    main: '#e6eaef',
    text: 'rgb(25, 103, 210)',
    border: 'rgb(25, 103, 210)',
  },
  activeColor: {
    main: 'rgb(158, 186, 226)',
    text: 'rgb(25, 103, 210)',
    border: 'rgb(25, 103, 210)',
  },
  disabledColor: {
    main: '#d8d8d8',
    text: '#c7c7c7',
    border: '#bcbcbc',
    shadow: 's0',
  },
  iconLeft: MdOutlineFileDownload,
  disabled: false,
  fullWidth: false,
  font: sourceSansReg,
};

const leftIconMatching: ButtonMainProps = {
  label: 'Symbols',
  size: 'medium',
  borderRadius: 'full',
  border: 0,
  primaryColor: {
    main: '#ffffff',
    text: 'rgb(95,99,104)',
    border: 'rgb(95,99,104)',

  },
  hoverColor: {
    main: '#e6eaef',
    text: 'rgb(25, 103, 210)',
    border: 'rgb(95,99,104)',
  },
  activeColor: {
    main: 'rgb(158, 186, 226)',
    text: 'rgb(25, 103, 210)',
    border: 'rgb(25, 103, 210)',
  },
  disabledColor: {
    main: '#d8d8d8',
    text: '#c7c7c7',
    border: '#bcbcbc',
    shadow: 's0',
  },
  iconLeft: MdOutlineEmojiSymbols,
  disabled: false,
  fullWidth: false,
  font: sourceSansReg,
};



export const Primary: Story = {
  args: primaryArgs,
};

export const Outline: Story = {
  args: outlineArgs
};

export const RightIconSolid: Story = {
  args: rightIconArgs
};

export const LeftIconSolid: Story = {
  args: leftIconArgs
};

export const LeftIconOutline: Story = {
  args: leftIconOutlineArgs
};

export const LeftIconMatching: Story = {
  args: leftIconMatching
};