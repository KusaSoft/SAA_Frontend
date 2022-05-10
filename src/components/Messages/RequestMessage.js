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

const RequestMessage = (
  {
    loading,
    error,
    linkExit,
    linkNext,
    closeModal,
    errorMessage,
    successMessage,
    onNext,
  },
  props
) => {
  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {error ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <Typography variant="h6">
                {errorMessage}
              </Typography>
              <Button
                onClick={closeModal}
                autoFocus
                variant="contained"
              >
                Continuar
              </Button>
            </Alert>
          ) : (
            <Alert severity="success">
              <AlertTitle>Exito</AlertTitle>
              {successMessage}
              <Stack
                sx={{
                  paddingTop: '1rem',
                }}
                direction="row"
                spacing={2}
              >
                <Link
                  to={linkExit}
                  style={{textDecoration: 'none'}}
                >
                  <Button>Salir</Button>
                </Link>
                {linkNext ? (
                  <Link
                    to={linkNext}
                    style={{textDecoration: 'none'}}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      onClick={closeModal}
                    >
                      Continuar
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={onNext}
                  >
                    Continuar
                  </Button>
                )}
              </Stack>
            </Alert>
          )}
        </Box>
      )}
    </div>
  );
};

export default RequestMessage;
