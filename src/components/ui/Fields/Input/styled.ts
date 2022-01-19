import styled, { css } from 'styled-components';

import { IconSide } from './interfaces';

import type { InputProps } from './interfaces';

export const BoxStyled = styled.div<Pick<InputProps<null>, 'iconSide' | 'onIconClick'>>`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  & button {
    position: absolute;
    pointer-events: none;
  }

  ${({ iconSide }) => (iconSide && iconSide === IconSide.left && css`
    & input {
      padding-left: 3.2rem;
    }

    & button {
      left: 1.3rem;
    }
  `) ||
  css`
    & input {
      padding-right: 3.2rem;
    }

    & button {
      right: 1.3rem;
    }
  `}

  ${({ onIconClick }) => onIconClick && css`
    & button {
      cursor: pointer;
      pointer-events: all;
    }
  `}
`;

