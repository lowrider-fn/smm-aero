import styled, { css } from 'styled-components';

import { Button } from '../../Button';

import { IconSide } from './types';

import type { ButtonProps } from '../../Button';
import type { InputProps } from './types';

export const ButtonStyled = styled(Button)<Pick<ButtonProps, 'onClick'>>`
  position: absolute;
  pointer-events: none;

  ${({ onClick }) => onClick && css`
      pointer-events: all;
  `}
`;

export const BoxStyled = styled.div<Pick<InputProps<null>, 'iconSide' >>`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  ${({ iconSide }) => (iconSide && iconSide === IconSide.left && css`
    & input {
      padding-left: 3.2rem;
    }

    ${ButtonStyled} {
      left: 1.3rem;
    }
  `)
  || css`
    & input {
      padding-right: 3.2rem;
    }

    ${ButtonStyled} {
      right: 1.3rem;
    }
  `}

`;
