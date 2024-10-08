// src/presentation/components/MyButton.tsx

import React from 'react';
import Button from '@mui/material/Button';

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default MyButton;
