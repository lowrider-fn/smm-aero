import styled, { createGlobalStyle } from 'styled-components';

import FontsCSS from './assets/fonts/styles.css';
import NormalizeCSS from './assets/normalize.css';
import { innerCSS, scrollCSS } from './components/styled';

export const GlobalStyle = createGlobalStyle`
  ${FontsCSS}
  ${NormalizeCSS}
`;

export const MainStyled = styled.main`
  ${scrollCSS}

  height: calc(100vh - 11rem);
`;

export const InnerStyled = styled.main`
  ${innerCSS}
`;