import styled, { css } from 'styled-components';

import { TextSize } from './types';

import type { TextProps } from './types';

export const TextStyled = styled.p<Pick<TextProps, 'weight' | 'margin' | 'size'>>`
  line-height: 1.2;
  ${({ margin, theme }) => css`
    margin: ${margin};
    font-family: ${theme.font};
  `}

  ${({ size, weight }) => {
    switch (size) {
      case TextSize.h1:
        return css`
          font-size: 3.8rem;
          font-weight: ${weight || 400};
        `;

      case TextSize.h2:
        return css`
          font-size: 3rem;
          font-weight: ${weight || 200};
        `;

      case TextSize.xs:
        return css`
          font-size: 1rem;
          font-weight: ${weight || 300};
        `;

      case TextSize.s:
        return css`
          font-size: 1.3rem;
          font-weight: ${weight || 400};
        `;

      case TextSize.l:
        return css`
          font-size: 2rem;
          font-weight: ${weight || 300};
        `;

      default:
        return css`
          font-size: 1.6rem;
          font-weight: ${weight || 300};
        `;
    }
  }}
`;
