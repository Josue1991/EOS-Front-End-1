// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Color azul personalizado
    },
    secondary: {
      main: '#dc004e', // Color rojo personalizado
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    // Otras personalizaciones de tipografía
  },
});

export default theme;
