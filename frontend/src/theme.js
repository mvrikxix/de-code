import { theme } from '@chakra-ui/react';

export const customTheme = {
  ...theme,
  fonts: {
    heading:
      'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body:
      'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
  colors: {
    ...theme.colors,
    green: {
      50: '#4EDFBD',
      100: '#42D8B4',
      200: '#36D2AB',
      300: '#2BCBA2',
      400: '#1FC59A',
      500: '#13BE91',
      600: '#11AE83',
      700: '#0F9E74',
      800: '#0D8D66',
      900: '#0B7D57',
    },
    blueGray: {
      50: '#efeffc',
      100: '#d3d2e1',
      200: '#b6b4ca',
      300: '#9997b4',
      400: '#7c799e',
      500: '#625f84',
      600: '#4d4a67',
      700: '#37354b',
      800: '#21202f',
      900: '#0a0a16',
    },
  },
  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '22px',
    '3xl': '26px',
    '4xl': '34px',
    '5xl': '40px',
    '6xl': '56px',
  },
  shadows: {
    ...theme.shadows,
    lg: '0 5px 15px 0 rgba(0, 0, 0, 0.1), 0 2px 6px 0 rgba(0, 0, 0, 0.05)',
    outline: '0 0 0 3px rgba(19, 190, 145, 0.6)',
  },
};