import 'styled-components';

declare module 'styled-components' {
  export type ThemeBreakpont = 'mobile' | 'tabletMini' | 'tablet' | 'laptop';

  export interface DefaultTheme {
    font: string;
    borderRadius: {
      l: string;
      s: string;
    };
    shadows: {
      base: string;
      grey: string;
      blue: string;
      blueDark: string;
      red: string;
      green: string;
    };
    zIndex: {
      min: number;
      medium: number;
      modal: number;
    };
    palette: {
      grey: {
        dark: string;
        light: string;
        base: string;
      };
      blue: {
        dark: string;
        light: string;
        base: string;
      };
      green: {
        light: string;
        base: string;
      };
      common: {
        black: string;
        white: string;
        red: string;
        mask: string;
      };
    };
    media: {
      min: (key: ThemeBreakpont) => string;
      max: (key: ThemeBreakpont) => string;
      mobile: string;
      tabletMini: string;
      tablet: string;
      laptop: string;
      hover: (css: string) => string;
      breakpoints: Record<ThemeBreakpont, string>;
    };
  }
}