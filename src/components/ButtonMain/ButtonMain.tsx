import * as React from 'react';
import { useRef } from 'react';
import './ButtonMain.scss';
import { classNames } from '../../utilities/css';
import { NextFont } from 'next/dist/compiled/@next/font';
import { ColorType } from '@/utilities/types';
import { IconType, IconBaseProps } from 'react-icons';

export interface ColorGroup {
  main: ColorType;
  text: ColorType;
  border: ColorType;
  shadow?: 's0' | 's1' | 's2' | 's3' | 's4' | 's5';
  iconLeft?: ColorType;
  iconRight?: ColorType;
}

/* To Do:
  • Ability to inject/override style in a repeatable fashion.
    This should be for icons and text. We need to have the capacity
    to adjust font-size, letter-spacing etc.
  • Selectable transition times.
*/

export interface ButtonMainProps {
  /** Button Size - @default 'medium' */
  size?: 'micro' | 'small' | 'medium' | 'large' | 'xlarge';
  /** Border radius in percent @default 4px  */
  borderRadius?: 'r0' | 'r4' | 'r8' | 'full';
  /** String to be displayed inside button */
  label: string;
  /** Title text to be shown on mouseover */
  title?: string;
  /** onClick handler */
  onClick?: () => void;
  /** ColorGroup applied as default */
  primaryColor: ColorGroup;
  /** ColorGroup applied on hover state */
  hoverColor?: ColorGroup;
  /** ColorGroup applied on active state */
  activeColor?: ColorGroup;
  /** ColorGroup applied on disabled state */
  disabledColor?: ColorGroup;
  /** Adds a border to button @default 0 - color is derived from ColorGroup:border */
  border?: number;
  /** Allow button to fill its container @default false */
  fullWidth?: boolean;
  /** Font to be displayed in the button */
  font?: NextFont;
  /** Define icon for left side of the button */
  iconLeft?: IconType;
  /** Define a clickable function for the left icon  */
  iconOnLeftClick?: () => void;
  /** Define icon for right side of the button */
  iconRight?: IconType;
  /** Define a clickable function for the right icon  */
  iconOnRightClick?: () => void;
  /** Boolean operated prop to disable the button @default false */
  disabled?: boolean;
  /** Ad Hoc Props */
  props?: { [key in string]: string };
}

export default function ButtonMain({
  label,
  primaryColor,
  hoverColor,
  activeColor,
  disabledColor,
  border = 0,
  title,
  fullWidth = false,
  size = 'medium',
  borderRadius = 'r4',
  onClick,
  disabled = false,
  font,
  iconLeft,
  iconOnLeftClick = undefined,
  iconRight,
  iconOnRightClick = undefined,
  props
}: ButtonMainProps) {

  const mainBtnRef = useRef<HTMLButtonElement>(null);
  const shadows = {
    s0: 'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0) 0px 1px 2px',
    s1: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    s2: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    s3: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    s4: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
    s5: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
  };

  // Consolidate classNames
  const className = classNames(
    "mp_button_main",
    font?.className || "",
    size,
    borderRadius,
    onClick && 'main-clk',
    iconOnLeftClick && 'lft-clk',
    iconOnRightClick && 'rgt-clk',
    fullWidth && 'full-width',
  );

  interface MainStyle {
    borderStyle?: string;
    borderWidth?: string;
    borderColor?: string;
    boxShadow?: string;
    backgroundColor?: string;
    color?: ColorType;
  }

  /* Conditions for initial inline styling and disabled styling */
  const mainStyle: MainStyle = {};
  const textStyle: MainStyle = {};
  let currentPrimary = primaryColor;
  if (disabled && disabledColor) currentPrimary = disabledColor;
  if (border > 0) mainStyle['borderWidth'] = `${border}px`;
  if (border > 0) mainStyle['borderStyle'] = 'solid';
  if (border > 0) mainStyle['borderColor'] = currentPrimary.border;
  mainStyle['backgroundColor'] = currentPrimary.main;
  if (currentPrimary.shadow) mainStyle['boxShadow'] = shadows[currentPrimary.shadow];
  textStyle['color'] = currentPrimary.text;


  /* Private function to handle onMouse/Over/Out/Down calls */
  function onMouseEvent(colors: ColorGroup | undefined) {
    if (mainBtnRef.current && !disabled) {
      const centerText = mainBtnRef.current.querySelector('.-btn_center') as HTMLDivElement;
      const leftIcon = mainBtnRef.current.querySelector('.-btn_left svg') as SVGElement;
      const rightIcon = mainBtnRef.current.querySelector('.-btn_right svg') as SVGElement;
      if (colors) {
        mainBtnRef.current.style.backgroundColor = colors.main;
        mainBtnRef.current.style.borderColor = colors.border;
        centerText.style.color = colors.text;
        if (colors.shadow) mainBtnRef.current.style.boxShadow = shadows[colors.shadow];
        if (leftIcon) leftIcon.style.color = colors.iconLeft || colors.text;
        if (rightIcon) rightIcon.style.color = colors.iconRight || colors.text;
      }
    }
  }

  /* Private function to conditionally render an icon on either left or right */
  function _wingElement(element: IconType | undefined, className: string, color: ColorType | undefined, onClick: (() => void) | undefined) {
    if (element) {
      const iconColor = color || primaryColor.text;
      const iconProps: IconBaseProps = { color: iconColor };
      return <div onClick={(e) => {
        e.stopPropagation(); // b/c of button overlap, need to stop capture/bubbling
        onClick && onClick();
      }} className={className}>{element(iconProps)}</div>;
    }
    return;
  }

  return (
    <>
      <button
        className={className}
        onClick={onClick}
        onMouseOver={() => onMouseEvent(hoverColor)}
        onMouseOut={() => onMouseEvent(primaryColor)}
        onMouseDown={() => onMouseEvent(activeColor)}
        onMouseUp={() => onMouseEvent(primaryColor)}
        disabled={disabled}
        style={mainStyle}
        ref={mainBtnRef}
        aria-disabled={disabled}
        tabIndex={0}
        title={title}
        type='button'
        {...props}>
        {_wingElement(iconLeft, '-btn_left', primaryColor.iconLeft, iconOnLeftClick)}
        <div className='-btn_center' style={textStyle}>{label}</div>
        {_wingElement(iconRight, '-btn_right', primaryColor.iconRight, iconOnRightClick)}
      </button>
    </>
  );
}

