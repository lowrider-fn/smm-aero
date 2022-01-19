import styled, { css } from 'styled-components';

import { scrollCSS } from '../../styled';
import { Button } from '../Button';
import { Text } from '../Text';

export const ModalMaskStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${({ theme }) => {
    const { zIndex, palette } = theme;

    return css`
      z-index: ${zIndex.modal};
      background-color: ${palette.common.mask};
    `;
  }}
`;

export const ModalStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  max-height: 80vh;
  padding: 4.4rem 5.6rem;

  ${scrollCSS}

  ${({ theme })=> {
    const { media, palette } = theme;

    return css`
      background-color: ${palette.common.white};

      ${media.mobile} {
        max-height: 100vh;
        padding: 3rem 4rem;
      }
    `;
  }}
`;

export const ButtonStyled = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const TitleStyled = styled(Text)`
  margin: 0 0 1.5rem;
  text-align: center;
`;