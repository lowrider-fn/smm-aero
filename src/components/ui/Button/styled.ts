import styled, { css } from 'styled-components';

import { ButtonIconPosition, ButtonMode } from './types';

import type { ButtonProps } from './types';

const ButtonCSS = css`
  width: fit-content;
  text-transform: capitalize;
  user-select: none;

  & span {
    font-weight: 200;
  }

  /* stylelint-disable-next-line order/properties-order */
  ${({ theme }) => {
    const { borderRadius, palette } = theme;

    return css`
      border-radius: ${borderRadius.l};
      color: ${palette.common.white};
    `;
  }}
`;

const LinkCSS = css`
  width: fit-content;
  border-bottom-width: 0.1rem;
  border-radius: 0;
  text-transform: capitalize;
  user-select: none;
  /* stylelint-disable-next-line order/properties-order */
  ${({ theme }) => {
    const { palette, media } = theme;

    const { base, dark, light } = palette.blue;

    return css`
      border-color: ${base};

      
      color: ${base};

      ${media.hover(`
        border-color: ${light};
        color: ${light};
      `)}

      &:active {
        border-color: ${dark};
        color: ${dark};
      }
    `;
  }}
`;

export const ButtonStyled = styled.button<Pick<ButtonProps, 'size' | 'mode' | 'position'>>`
  ${({ theme, mode }) => {
    const { palette, media, shadows } = theme;

    const { blue, green } = palette;

    switch (mode) {
      case ButtonMode.success:
        return css`
          ${ButtonCSS}

          background: ${green.light};

          ${media.hover(`
            box-shadow: ${shadows.green};
          `)}

          &:active {
            background: ${green.base};
          }
        `;

      case ButtonMode['link-dashed']:
        return css`
          ${LinkCSS}

          border-bottom-style: dashed;
        `;

      case ButtonMode['link-dotted']:
        return css`
          ${LinkCSS}

          border-bottom-style: dotted;
        `;

      case ButtonMode.icon:
        return css`

          ${media.hover(`
            opacity: 0.5;
          `)}

          &:active {
            opacity: 0.3;
          }
        `;

      default:
        return css`
    ${ButtonCSS}

    background: ${blue.base};

    ${media.hover(`
      box-shadow: ${shadows.blueDark};
    `)}

    &:active {
      background: ${blue.dark};
    }
  `;
    }
  }}

  ${({ position }) => {
    if (position) {
      return (position === ButtonIconPosition.left && css`
          flex-direction: row-reverse;

          & svg {
            margin-right: 0.7rem;
          }
        `)
        || css`
          & svg {
            margin-left: 0.7rem;
          }
        `;
    }
  }}

  ${({ size, mode }) => {
    if (mode && [ButtonMode.success, ButtonMode.info].includes(mode as ButtonMode)) {
      switch (size) {
        case 's':
          return css`
            padding: 1rem 1.5rem;
          `;

        case 'l':
          return css`
            width: 100%;
            padding: 1rem 1.5rem;
          `;

        default:
          return css`
            padding: 1.15rem 2.5rem;
          `;
      }
    }
  }}
`;
