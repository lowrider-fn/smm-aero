import styled, { css } from 'styled-components';

import { innerCSS } from '@/components/styled';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 11.5rem;
  align-items: center;

  ${({ theme }) => {
    const { zIndex, palette, shadows } = theme;

    return css`
      z-index: ${zIndex.min};
      background: ${palette.common.white};
      box-shadow: ${shadows.base};
    `;
  }}
`;

export const NavStyled = styled.nav`
  ${innerCSS}

  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
`;

export const ControlsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button:first-child {
    margin-bottom: 1.5rem;
  }
`;
