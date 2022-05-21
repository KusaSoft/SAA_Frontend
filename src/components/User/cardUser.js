import React, {useState} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Snackbar,
} from '@mui/material';
import apiSettings from '../../services/service';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CardUser = (props) => {
  const [open, setOpen] = React.useState({open: false, status: false});
  const [nombreM, setNombreM] = useState({statusT: true});
  const handleClick = (statusT) => {
    setOpen({open: true, status: statusT});
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen({open: false, status: false});
  };

  return (
    <TableRow>
      <TableCell>{props.request.name}</TableCell>
      <TableCell>{props.request.email}</TableCell>
      <TableCell>{props.request.role.name}</TableCell>
      <TableCell>
        {props.request.enabled == true ? (
          <Stack spacing={2} sx={{width: '100%'}}>
            <input
              type="checkbox"
              defaultChecked
              onClick={async () => {
                const response = await apiSettings.enable(
                  props.request.id,
                  {
                    id: props.request.id,
                    role: props.request.role,
                    enabled: !props.request.enabled,
                  }
                );
                setNombreM({statusT: !props.request.enabled});
                //alert(nombreM.statusT);
                handleClick(!props.request.enabled);
              }}
            />
            <Snackbar
              open={open.open}
              autoHideDuration={2000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{width: '100%'}}
              >
                Operación exitosa!
                {/* {open.status === true ? 'habilitado' : 'deshabilitado'} */}
              </Alert>
            </Snackbar>
          </Stack>
        ) : (
          <Stack spacing={2} sx={{width: '100%'}}>
            <input
              type="checkbox"
              onClick={async () => {
                const response = await apiSettings.enable(
                  props.request.id,
                  {
                    id: props.request.id,
                    role: props.request.role,
                    enabled: !props.request.enabled,
                  }
                );
                setNombreM({statusT: !props.request.enabled});
                handleClick(!props.request.enabled);
              }}
            />
            <Snackbar
              open={open.open}
              autoHideDuration={2000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{width: '100%'}}
              >
                Operación exitosa!
                {/* {open.status === true ? 'habilitado' : 'deshabilitado'} */}
              </Alert>
            </Snackbar>
          </Stack>
        )}
      </TableCell>
    </TableRow>
  );
};
export default CardUser;
