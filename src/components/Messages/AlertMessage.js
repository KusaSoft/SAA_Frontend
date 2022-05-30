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

const AlertMessage = ({closeModal, message, onNext}, props) => {
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
          <AlertTitle>Exito</AlertTitle>
          {message}
          <Stack
            sx={{
              paddingTop: '1rem',
            }}
            direction="row"
            spacing={2}
          >
            <Button onClick={closeModal}>Cancelar</Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                onNext();
              }}
            >
              Continuar
            </Button>
          </Stack>
        </Alert>
      </Box>
    </div>
  );
};

export default AlertMessage;
