import React from 'react';
import {Box, Typography} from '@mui/material';

const StatusBar = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: `${props.color}`,
        paddingLeft: '5px',
        paddingRight: '5px',
      }}
    >
      <b>{props.children}</b>
    </Box>
  );
};

export default StatusBar;
