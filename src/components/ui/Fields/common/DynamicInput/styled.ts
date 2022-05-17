import styled, { css, keyframes } from 'styled-components';

import { DynamicInputType } from './types';

import type { DynamicInputProps } from './types';

const snakeAnimation = keyframes`
  10%,
  90% {
    transform: translate3d(-0.08rem, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(0.15rem, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-0.08rem, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(0.08rem, 0, 0);
  }
`;

export const DynamicInputStyled = styled.input<DynamicInputProps>`
  ${({ type, hasError, theme }) => {
    const {
      palette, borderRadius, shadows, zIndex
    } = theme;

    const errColor = hasError && shadows.red;

    return css`
      width: 100%;
      background: ${palette.grey.light};

      ${(type === DynamicInputType.checkbox && css`
          position: absolute;
          z-index: ${zIndex.min};
          top: 0;
          left: 0;
          height: 100%;

          
          border-radius: ${borderRadius.s};
          box-shadow: ${errColor || shadows.grey};
          cursor: pointer;

          &:checked {
            background: ${palette.blue.base};
            box-shadow: ${shadows.blue};
          }
        `)
          || css`
          padding: 1.3rem 2rem;
          border-radius: ${borderRadius.l};
          box-shadow: ${errColor};
          color: ${palette.grey.dark};
          font-size: 1.3rem;
          line-height: 1;
          outline: none;

          &:focus {
            box-shadow: ${errColor || shadows.grey};
          }

          ${hasError && css`
            animation: ${snakeAnimation} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            backface-visibility: hidden;
            perspective: 100rem;
            transform: translate3d(0, 0, 0);
          `}
      `}
    `;
  }}
`;
