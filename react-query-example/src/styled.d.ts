import 'styled-components';

interface IPalette {
  main: string;
  dark: string;
  light: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: IPalette;
      secondary: IPalette;
      gray: IPalette;
      common: {
        white: string;
        black: string;
        success: string;
        warning: string;
        danger: string;
      };
    };
  }
}
