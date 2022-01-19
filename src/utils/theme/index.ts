import { palette } from './colors';
import { shadows } from './shadows';
import { media } from './media';

import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  font        : 'Ubuntu, Arial, sans-serif',
  borderRadius: {
    s: '.4rem',
    l: '4rem'
  },
  zIndex: {
    min   : 1,
    medium: 3,
    modal : 10
  },
  shadows,
  palette,
  media
};

