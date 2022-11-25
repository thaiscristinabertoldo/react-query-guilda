import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#13335F',
      dark: '#061C39',
      light: '#D6F3F9',
    },
    secondary: {
      main: '#16A5D6',
      dark: '#137596',
      light: '#D0EDF7',
    },
    gray: {
      main: '#A7A7A7',
      dark: '#4A4A4A',
      light: '#EEEEEE',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
      success: '#13CE8B',
      warning: '#FFB72C',
      danger: '#FF5449',
    },
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    min-height: 100vh;
  }

  main {
    min-height: calc(100vh - 90px);
  }
`;
