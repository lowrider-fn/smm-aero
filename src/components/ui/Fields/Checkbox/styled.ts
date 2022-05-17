import styled, { css } from 'styled-components';

import { Icon } from '../../Icon';

import type { CheckboxProps } from './types';

export const CheckboxStyled = styled.div`
  position: relative;
  display: flex;
  width: 2.3rem;
  height: 2.3rem;
  align-items: center;
  justify-content: center;
  margin-right: 1.2rem;
`;

export const IconStyled = styled(Icon) <Pick<CheckboxProps<null>, 'checked'>>`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  visibility: visible;
  ${({ theme, checked }) => {
    const { palette, zIndex } = theme;

    return css`
      z-index: ${zIndex.medium};
      color: ${palette.common.white};

      ${(checked && css`opacity: 1;`)
      || css`
        color: transparent;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
      `}
    `;
  }}
`;

export const LabelStyled = styled.label<Pick<CheckboxProps<null>, 'disabled'>>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    opacity: 0.6;
  `}
`;
