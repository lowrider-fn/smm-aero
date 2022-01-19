import { palette } from './colors';

import type { DefaultTheme } from 'styled-components';

const shadowsPositionBottom = 'inset 0-0.2rem 0 '; 
const shadowsPositionTop = 'inset 0 .2rem 0 '; 

export const shadows: DefaultTheme['shadows'] = {
  base    : '0 .6rem 1.6rem .4rem #8f8d8d80',
  grey    : `${shadowsPositionTop} #d3dae1`,
  blue    : `${shadowsPositionTop} ${palette.blue.base}`,
  blueDark: `${shadowsPositionBottom} ${palette.blue.dark}`,
  red     : `${shadowsPositionTop} ${palette.common.red}`,
  green   : `${shadowsPositionBottom} ${palette.green.base}`
};
