// src/ui/providers/materialUIProvider.tsx

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme'; // Importa tu tema personalizado

interface MaterialUIProviderProps {
  children: React.ReactNode;
}

const MaterialUIProvider: React.FC<MaterialUIProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MaterialUIProvider;
