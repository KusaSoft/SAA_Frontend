import React from 'react';
import {Box, Typography} from '@mui/material';

const RedBar = ({children}) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 0, 0, 0.1)'
            : 'rgb(255 132 132 / 25%)',
      }}
    >
      <Typography variant="caption" color="error">
        {children}
      </Typography>
    </Box>
  );
};

export default RedBar;
