import { css } from 'styled-components';
import breakpoints from './variables/breakpoints';

export const maxWidth = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label] - 1}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {},
);

export const minWidth = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {},
);
