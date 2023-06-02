import { ColorType } from '@/utilities/types';
import * as React from 'react';

interface SpinnerProps {
  /** Animation duration in milliseconds - @default 1000 */
  duration?: number;
  /** Radius of the dots in pixels - @default 3 */
  dotRadius?: number;
  /** Dot color @default black */
  color?: ColorType;
}

export default function BumpSpinner({ duration = 800, dotRadius = 3, color = "black" }: SpinnerProps) {

  const stylesheet = document.styleSheets[0];
  const animationName = 'bumpLoader';
  const keyframes = `
    @keyframes ${animationName} {
      0% {transform: translateY(0px)}
      30% {transform: translateY(-${dotRadius * 2}px)}
      70% {transform: translateY(0px)}
    }
  `;

  stylesheet.insertRule(keyframes, stylesheet.cssRules.length);
  const bumpLoaderStyle = {
    animationName,
    animationTimingFunction: 'ease-in-out',
    animationDuration: `${duration}ms`,
    animationIterationCount: 'infinite',
    animationDirection: 'normal',
    animationFillMode: 'forwards'
  };

  return (
    <svg width={(dotRadius * 8)} height={dotRadius * 5}>
      <g fill={color}>
        <circle style={{ ...bumpLoaderStyle, 'animationDelay': `${duration}ms` }} cx={dotRadius} cy={dotRadius * 4} r={dotRadius} />
        <circle style={{ ...bumpLoaderStyle, 'animationDelay': `${duration * 0.3}ms` }} cx={dotRadius * 4} cy={dotRadius * 4} r={dotRadius} />
        <circle style={{ ...bumpLoaderStyle, 'animationDelay': `${duration * 0.6}ms` }} cx={dotRadius * 7} cy={dotRadius * 4} r={dotRadius} />
      </g>
    </svg>
  );
}