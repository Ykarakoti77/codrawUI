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
      fontWeight: 'bold'
    },
  },
}

export const theme = createTheme(themeOptions)
