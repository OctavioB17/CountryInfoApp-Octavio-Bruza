import { Box } from '@mui/material';
import React from 'react';

const NormalBox = ({ children, sx }) => {
  return (
    <Box sx={{padding: '1vw', border: '2px solid black', borderRadius: '10px', ...sx}}>
      {children}
    </Box>
  );
}

export default NormalBox;