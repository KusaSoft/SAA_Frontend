import {Alert, AlertTitle, Box, Button, Typography} from '@mui/material';
import React from 'react';
import {BoxColumn} from '../../emotion/GlobalComponents';
const ConfirmationMessage = (
  {actions, closeModal, questionMessage},
  props
) => {
  return (
    <BoxColumn>
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
    </BoxColumn>
  );
};

export default ConfirmationMessage;
