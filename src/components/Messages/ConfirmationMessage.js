import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Typography,
} from '@mui/material';
import React from 'react';
const ConfirmationMessage = (
  {actions, closeModal, questionMessage},
  props
) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Alert severity="warning">
        <AlertTitle>Atencion!</AlertTitle>
        <Typography variant="h6">{questionMessage}</Typography>
        <Button onClick={closeModal} autoFocus>
          No
        </Button>
        <Button onClick={(e) => actions(e)} autoFocus>
          Si
        </Button>
      </Alert>
    </Box>
  );
};

export default ConfirmationMessage;
