'use client'

import { ThemeOptions, createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}

export const colors = {
  greyAccent: {
    0: '#ffffff',
    20: '#fafafa',
    50: '#f5f5f5',
    100: '#e9e9e9',
    200: '#d9d9d9',
    300: '#c4c4c4',
    400: '#9d9d9d',
    500: '#7b7b7b',
    600: '#555555',
    700: '#434343',
    800: '#262626',
    900: '#000000',
  },
  greenAccent: {
    50: '##e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb69',
    500: '#4caf4f',
    600: '#43a046',
    700: '#388e3b',
    800: '#2e7d31',
    900: '#1b5e1f',
  },
  purpleAccent: {
    50: '#f2e7ff',
    100: '#dcc3ff',
    200: '#c59aff',
    300: '#ac6cff',
    400: '#9744ff',
    500: '#8000ff',
    600: '#7300f8',
    700: '#6100f0',
    800: '#4d00ec',
    900: '#382e73',
  },
  babyPink: {
    50: '#ffe3eb',
    100: '#ffb7ce',
    200: '#fc89ad',
    300: '#f6598c',
    400: '#f13273',
    500: '#ed005a',
    600: '#dc0058',
    700: '#c60054',
    800: '#b10051',
    900: '#8d004b',
  },
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#434343',
    },
    secondary: {
      main: '#546677',
    },
    // background: {},
  },
  typography: {
    subtitle2: {
      color: colors.greyAccent[600],
      fontSize: '10px',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '18px',
    },
  },
}

export const theme = createTheme(themeOptions)
