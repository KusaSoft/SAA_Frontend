import {
  Typography,
  Grid,
  Button,
  CardContent,
  Card,
  List,
  Stack,
  Box,
  Autocomplete,
  TextField,
  CircularProgress,
  CardHeader,
  Dialog,
  CardActions,
  Fab,
} from '@mui/material';
import React from 'react';
import {useModal} from '../../hooks/useModal';
import Modal from '../Modals/Modal';
import useAuth from '../../hooks/useAuth';
import {useRequest} from '../../hooks/useRequest.hooks';
import {Link, useNavigate} from 'react-router-dom';
import apiSettings from '../../services/service';
import {useClassrooms} from '../../hooks/useClassrooms';
import DataTransform from '../../utilities/DataController/DataTransform';
import {ContentPasteSearch, Delete} from '@mui/icons-material';
function ClassroomsAssignation(props) {
  const {auth} = useAuth();
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const [
    loading,
    error,
    message,
    response,
    status,
    handleRequest,
  ] = useClassrooms({
    requestID: props.request,
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="90%"
      padding={2}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Card
          sx={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Typography>ID: {response.id}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography>
                  Fecha para la reserva: {response.reservation_date}
                </Typography>
                <Typography>
                  Cantidad de estudiantes: {response.total_students}
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Son{' '}
                  {DataTransform.getQuantityPeriod(
                    response.horario_ini,
                    response.horario_end
                  )}{' '}
                  periodo(s)
                </Typography>
                <Typography>
                  Hora inicio: {response.horario_ini}
                </Typography>
                <Typography>Hora fin: {response.horario_end}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="caption">
                Las aulas estan agrupadas por contiguidad
              </Typography>
            </Box>
          </CardContent>
          <CardActions
            disableSpacing
            style={{
              display: 'flex',
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Link
                  to={`/user/home`}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Button variant="outlined" color="error">
                    Cancelar
                  </Button>
                </Link>
              </Box>
              <Box>
                <Button variant="contained" color="error">
                  Rechazar
                </Button>
                <Button
                  variant="contained"
                  style={{
                    marginLeft: '1rem',
                  }}
                >
                  Aceptar
                </Button>
              </Box>
            </Stack>
          </CardActions>
        </Card>
      )}
    </Box>
  );
}

export default ClassroomsAssignation;
