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
  AccordionDetails,
  Accordion,
  Divider,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordion from '@mui/material/AccordionSummary';
import React from 'react';
import {useModal} from '../../hooks/useModal';
import Modal from '../Modals/Modal';
import useAuth from '../../hooks/useAuth';
import {useRequest} from '../../hooks/useRequest.hooks';
import {Link, useNavigate} from 'react-router-dom';
import apiSettings from '../../services/service';
import {useClassrooms} from '../../hooks/useClassrooms';
import DataTransform from '../../utilities/DataController/DataTransform';
import {
  ArrowForwardIosSharp,
  ContentPasteSearch,
  Delete,
  ExpandMore,
} from '@mui/icons-material';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{fontSize: '0.9rem'}} />}
    {...props}
  />
))(({theme}) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(0deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
function ClassroomsAssignation(props) {
  const {auth} = useAuth();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const navigate = useNavigate();
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
            <Box display="flex" justifyContent="start">
              <Box>
                <Typography>
                  <b>Fecha para la reserva: </b>
                  {response.reservation_date}
                </Typography>
                <Typography>
                  <b>Cantidad de estudiantes: </b>
                  {response.total_students}
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingLeft: '20px',
                }}
              >
                <Typography>
                  Son{' '}
                  <b>
                    {DataTransform.getQuantityPeriod(
                      response.horario_ini,
                      response.horario_end
                    )}{' '}
                  </b>
                  periodo(s)
                </Typography>
                <Typography>
                  <b>Hora inicio: </b>
                  {response.horario_ini}
                </Typography>
                <Typography>
                  <b>Hora fin: </b>
                  {response.horario_end}
                </Typography>
              </Box>
            </Box>
            <Accordion
              //quitar estilos
              sx={{
                boxShadow: 'none',
                border: 'none',
              }}
            >
              <AccordionSummary
                sx={{
                  pointerEvents: 'none',
                }}
                expandIcon={
                  <Button
                    sx={{
                      pointerEvents: 'auto',
                      fontSize: '0.6rem',
                    }}
                  >
                    Ver detalles
                  </Button>
                }
              ></AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Box>
                    <Typography>
                      <b>Motivo: </b>
                      {response.request_reason}
                    </Typography>
                    <Typography>
                      <b>Materia: </b>
                      {response.subject}
                    </Typography>
                    <Typography>
                      <b>Realizada en nombre de: </b>
                      {response.user}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      <b>Grupos: </b>
                    </Typography>
                    {response.group_list
                      ? response.group_list.map((group, index) => (
                          <Typography key={index}>
                            G{group.group} - {group.teacher}
                          </Typography>
                        ))
                      : null}
                    {response.other_groups
                      ? response.other_groups.map((group, index) => (
                          <Typography key={index}>
                            G{group.group} - {group.teacher}
                          </Typography>
                        ))
                      : null}
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Divider />
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
              <Button
                variant="outlined"
                color="error"
                onClick={() => navigate(-1)}
              >
                Cancelar
              </Button>
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
