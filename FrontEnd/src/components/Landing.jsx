import React from 'react';
import NormalBox from './reusable/NormalBox';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const Landing = ({ children }) => {
  const { title } = useParams();

  return (
    <NormalBox sx={{ width: '90vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography sx={{ textAlign: 'start', fontSize: '2vw' }}>
        {title ? title : 'Countries'}
      </Typography>
      <Box sx={{ borderTop: '1px solid black', padding: '1vw' }}>
        {children}
      </Box>
    </NormalBox>
  );
};

export default Landing;