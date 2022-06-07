import {CheckCircleOutline} from '@mui/icons-material';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

const AlertMessage = (props) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Alert severity="warning">
          <AlertTitle>{props.alertTitle}</AlertTitle>
          {props.message}
          <Stack
            sx={{
              paddingTop: '1rem',
            }}
            direction="row"
            spacing={2}
          >
            {props.children}
          </Stack>
        </Alert>
      </Box>
    </div>
  );
};

export default AlertMessage;
