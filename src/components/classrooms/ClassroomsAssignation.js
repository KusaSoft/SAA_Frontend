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
  FormControl,
  FormLabel,
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
import GroupOfClassrooms from './GroupsOfClassrooms';
import {STATUS} from '../../services/Constant';
import RequestMessage from '../Messages/RequestMessage';
import AlertMessage from '../Messages/AlertMessage';

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
  const [isOpenAlert, openAlert, closeAlert] = useModal(false);
  const [rejection_reason, setRejection_reason] = useState('');
  const [
    isOpenModalRejected,
    openModalRejected,
    closeModalRejected,
  ] = useModal(false);

  const [classroomsSelected, setClassroomsSelected] = useState([]);
  const [
    loadingR,
    errorR,
    messageR,
    responseR,
    statusR,
    handleRequestR,
  ] = useRequest({
    methodRequest: apiSettings.putReservationRequest,
  });
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
    setClassroomsSelected([]);
  };

  const handleSumbitReservation = (e) => {
    e.preventDefault();
    openModal();
    const newReservationStatus = {
      ...response,
      state: STATUS.ASSIGNED,
      classrooms: classroomsSelected.map((classroom) => classroom.id),
    };
    handleRequestR(newReservationStatus);
  };

  const handleSumbitRejection = (e) => {
    e.preventDefault();
    closeModalRejected();
    openModal();
    const newReservationStatus = {
      ...response,
      state: STATUS.REJECTED,
      rejection_reason: rejection_reason,
    };
    handleRequestR(newReservationStatus);
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Accordion
                //quitar estilos
                sx={{
                  flex: '3',
                  boxShadow: 'none',
                  border: 'none',
                }}
              >
                <AccordionSummary
                  sx={{
                    pointerEvents: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                }}
              >
                {DataTransform.isValidCapacity(
                  classroomsSelected,
                  response.total_students
                ) ? (
                  <Typography>
                    Capacidad:{' '}
                    {DataTransform.getCapacity(classroomsSelected)}
                  </Typography>
                ) : (
                  <Typography color="error">
                    Capacidad:{' '}
                    {DataTransform.getCapacity(classroomsSelected)}
                  </Typography>
                )}
              </div>
            </div>
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
                    {classrooms.filter((row) => {
                      return row.amount >= response.total_students;
                    }).length > 0 ? (
                      <TableClassrooms
                        classrooms={classrooms}
                        numberOfStudents={response.total_students}
                        setClassroomsSelected={setClassroomsSelected}
                      />
                    ) : (
                      <Typography>
                        No hay aulas disponibles para esta capacidad, por
                        favor intente con contigüas.
                      </Typography>
                    )}
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box>
                    <GroupOfClassrooms
                      classrooms={DataTransform.getClassroomsGroupByEdifice(
                        classrooms ? classrooms : []
                      )}
                      classroomsSelected={classroomsSelected}
                      setClassroomsSelected={setClassroomsSelected}
                    />
                  </Box>
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
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => openModalRejected()}
                >
                  Rechazar
                </Button>
                <Button
                  variant="contained"
                  style={{
                    marginLeft: '1rem',
                  }}
                  onClick={(e) => {
                    if (
                      DataTransform.isValidCapacity(
                        classroomsSelected,
                        response.total_students
                      )
                    ) {
                      handleSumbitReservation(e);
                    } else {
                      openAlert();
                    }
                  }}
                >
                  Asignar
                </Button>
              </Box>
            </Stack>
          </CardActions>
        </Card>
      )}
      <Dialog open={isOpenAlert} onClose={closeAlert}>
        <AlertMessage
          message={
            'La capacidad de la(s) aula(s) no es suficiente para asignar la solicitud.'
          }
          alertTitle={'Alerta!'}
        >
          <Button variant="contained" color="success" onClick={closeAlert}>
            Regresar
          </Button>
        </AlertMessage>
      </Dialog>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <RequestMessage
          loading={loadingR}
          successMessage={'Operacion realizada con exito!!'}
          error={errorR}
          closeModal={closeModal}
          linkExit={
            rejection_reason !== '' ? '/user/rejected' : `/user/assigned`
          }
          justLeave={false}
        ></RequestMessage>
      </Modal>
      <Modal isOpen={isOpenModalRejected} closeModal={closeModalRejected}>
        <div
          style={{
            margin: '20px',
          }}
        >
          <FormControl
            sx={{
              width: '100%',
            }}
          >
            <FormLabel>Motivo de rechazo</FormLabel>
            <TextField
              multiline
              rows={3}
              type="text"
              variant="outlined"
              value={rejection_reason}
              onChange={(e) => setRejection_reason(e.target.value)}
              sx={{
                width: '85%',
                padding: '1rem',
              }}
            />
          </FormControl>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setRejection_reason('');
                closeModalRejected();
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                handleSumbitRejection(e);
              }}
            >
              Enviar
            </Button>
          </Box>
        </div>
      </Modal>
    </Box>
  );
}

export default ClassroomsAssignation;
