import { ColorType } from '@/utilities/types';
import * as React from 'react';

export interface CircleDotProps {
  /** Radius of the dots @default 2 */
  radius?: number;
  /** Radius of the spinner @default 10 */
  spinnerRadius?: number;
  /** Number of spinner points @default 4 */
  points?: number;
  /** Color of spinner @default black */
  color?: ColorType;
  /** Duration of 1 rotation in milliseconds @default 2500 */
  duration?: number;
}

export default function CircleDotSpinner({ radius = 2, spinnerRadius = 10, points = 4, color = 'black', duration = 2500 }: CircleDotProps) {
  const start = 0;
  const step = 360 / points;
  const stop = 360 - step;

  const degSlices = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  const circleXY = [];

  const degrees = degSlices(start, stop, step);
  for (let i = 0; i < degrees.length; i += 1) {
    const x = spinnerRadius * Math.sin(Math.PI * 2 * degrees[i] / 360);
    const y = spinnerRadius * Math.cos(Math.PI * 2 * degrees[i] / 360);
    circleXY[i] = { x, y };
  }

  const stylesheet = document.styleSheets[0];
  const animationName = 'circleSpin';
  const keyframes = `
    @keyframes ${animationName} {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
  `;

  stylesheet.insertRule(keyframes, stylesheet.cssRules.length);
  const groupStyle = {
    animationName,
    animationTimingFunction: 'linear',
    animationDuration: `${duration}ms`,
    animationIterationCount: 'infinite',
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  };


  return (
    <div style={{ backgroundColor: '#00000000', display: "inline-block" }}>
      <svg x="0" y="0" height={(spinnerRadius * 2) + (radius * 2)} width={(spinnerRadius * 2) + (radius * 2)}>
        <g style={{ ...groupStyle, transformOrigin: 'center' }} fill={color} >
          {circleXY.map(({ x, y }, index) => (
            <circle cx={x + spinnerRadius + radius} cy={y + spinnerRadius + radius} r={radius} key={index} />
          ))}
        </g>
      </svg>
    </div>
  );
}