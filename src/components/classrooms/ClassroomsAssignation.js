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
  Tab,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {styled} from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordion from '@mui/material/AccordionSummary';
import React, {useState} from 'react';
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
import TableClassrooms from './TableClassrooms';

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
  const [value, setValue] = useState('1');

  const {auth} = useAuth();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [oculto, setOculto] = useState(false);
  const navigate = useNavigate();
  const [
    loading,
    error,
    message,
    response,
    status,
    handleRequest,
    classrooms,
  ] = useClassrooms({
    requestID: props.request,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="95%"
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
                    onClick={() => setOculto(!oculto)}
                  >
                    {oculto ? 'Ocultar detalles' : 'Ver detalles'}
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
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
              }}
            >
              <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Por capacidad" value="1" />
                    <Tab label="Por contigüidad" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Box>
                    <TableClassrooms
                      classrooms={classrooms}
                      numberOfStudents={response.total_students}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box></Box>
                </TabPanel>
              </TabContext>
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
