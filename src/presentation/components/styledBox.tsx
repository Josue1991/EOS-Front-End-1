// src/presentation/components/StyledBox.tsx

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface StyledBoxProps {
  children: React.ReactNode;
}

const StyledBox: React.FC<StyledBoxProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {children}
    </Box>
  );
};

export default StyledBox;
