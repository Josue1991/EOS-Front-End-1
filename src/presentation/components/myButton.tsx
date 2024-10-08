// src/presentation/components/MyButton.tsx

import React from 'react';
import Button from '@mui/material/Button';

interface MyButtonProps {
  text: string;
  isDisabled?: boolean | false;
  tipe?: string;
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
}

const MyButton = ({ text, onClick, isDisabled, tipe, size }: MyButtonProps) => {
  const variant = (() => {
    switch (tipe) {
      case '1':
        return 'text';
      case '2':
        return 'contained';
      case '3':
        return 'outlined';
      default:
        return 'contained';
    }
  })();
  

  return (
    isDisabled ?
      <Button 
        variant={variant}
        color="primary"
        size={size}
        disabled
        onClick={onClick}
      >
        {text}
      </Button>
      :
      <Button 
        variant={variant} 
        color="primary"
        size={size}
        onClick={onClick}
      >
        {text}
      </Button>
  );
};

export default MyButton;
