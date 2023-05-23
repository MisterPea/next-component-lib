import * as React from 'react';
import './ButtonMain.scss';
import { classNames } from '../../utilities/css';
import { NextFont } from 'next/dist/compiled/@next/font';
import { ColorType } from '@/utilities/types';


export interface ButtonMainProps {
  /** String to be displayed inside button */
  label: string;
  /** Button Size - @default 'medium' */
  size?: 'micro' | 'small' | 'medium' | 'large';
  /** Border radius in percent @default 0%  */
  borderRadius?: 'r0' | 'r5' | 'r10' | 'r20';
  /** Adds an outline to button in the selected color @default none */
  outline?: ColorType;
  /** Color of the background fill @default black */
  bgColor?: ColorType;
  /** Color of the label text @default white */
  labelColor?: ColorType;
  /** onClick handler */
  onClick?: () => void;
  /** Boolean operated prop to disable the button @default false */
  disabled?: boolean;
  /** Font to be displayed in the button */
  font?: NextFont;
}

export default function ButtonMain({
  label,
  size = 'medium',
  borderRadius = 'r0',
  onClick,
  disabled = false,
  font,
  ...props
}: ButtonMainProps) {

  const className = classNames(
    "mp_button_main",
    font?.className || "",
    size,
    borderRadius
  );

  return (
    <>
      <button
        className={className}
        onClick={onClick}
        disabled={disabled}
        {...props}>
        {label}
      </button>
    </>
  );
}