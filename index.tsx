import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import Demo from './Demo';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

ReactDOM.render(
  <StyledEngineProvider>
    <ThemeProvider theme={theme}>
      <Demo />
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);
