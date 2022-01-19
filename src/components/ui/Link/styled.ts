import styled, { css } from 'styled-components';

export const LinkStyled = styled.a`
  text-decoration: underline;

  ${({ theme }) => {
    const { palette, media } = theme;

    const { blue } = palette;

    return css`
      color: ${blue.base};

      ${media.hover(`
        color: ${blue.light};
      `)}

      &:visited {
        color: ${blue.dark};
      }
    `;
  }}
`;