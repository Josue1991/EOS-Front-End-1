// src/framework/ui-library/MaterialUIProvider.tsx

import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../components/theme';

interface MaterialUIProviderProps {
  children: React.ReactNode;
}

const MaterialUIProvider: React.FC<MaterialUIProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUIProvider;
