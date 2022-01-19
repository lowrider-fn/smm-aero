import type { DefaultTheme, ThemeBreakpont } from 'styled-components';

export const breakpoints = {
  mobile    : '48rem',
  tabletMini: '76.8rem',
  tablet    : '102.4rem',
  laptop    : '120rem'
};

const min = (key: ThemeBreakpont)=> `@media screen and (min-width: ${breakpoints[key]})`;

const max = (key: ThemeBreakpont)=> `@media screen and (max-width: ${breakpoints[key]})`;

const mobile = max('mobile');
const tabletMini = max('tabletMini');
const tablet = max('tablet');
const laptop = max('laptop');

const hover = (css: string) => `
  ${min('tablet')}{  
    &:hover { 
      ${css} 
    } 
  }
`;

export const media: DefaultTheme['media'] = {
  min,
  max,
  mobile,
  tabletMini,
  tablet,
  laptop,
  hover,
  breakpoints
};