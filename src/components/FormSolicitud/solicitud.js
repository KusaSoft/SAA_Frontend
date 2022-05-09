import {
  Typography,
  Grid,
  Button,
  CardContent,
  Card,
  List,
  Stack,
  Box,
  Divider,
  Autocomplete,
  TextField,
  CircularProgress,
  CardHeader,
  Dialog,
  Alert,
  AlertTitle,
} from '@mui/material';
import React from 'react';
import {useReservationRequest} from '../../hooks/useReservationRequest.hooks';
import FormInputControl from '../inputs/input/input.js';
import DateController from '../../utilities/DateController';
import FormSelectControl from '../inputs/inputSelect/inputSelect';
import FormMultiselectControl from '../inputs/inputMultiselect/inputMultiselect';
import {useModal} from '../../hooks/useModal';
import Modal from '../Modals/Modal';
import AskReservationRequest from '../ask/askReservationRequest';
import {PERIODSRANGE} from '../../services/Constant';
import {MOTIVES, PATHS} from '../../services/Constant';
import useAuth from '../../hooks/useAuth';
import {useRequest} from '../../hooks/useRequest.hooks';
import {Link, useNavigate} from 'react-router-dom';
import {Save, Delete} from '@mui/icons-material';
import apiSettings from '../../services/service';
import RequestMessage from '../Messages/RequestMessage';
import ConfirmationMessage from '../Messages/ConfirmationMessage';
function Solicitud(props) {
  const {auth} = useAuth();
  const navigate = useNavigate();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal1, openModal1, closeModal1] = useModal(
    false
  );
  const [isOpenModal2, openModal2, closeModal2] = useModal(
    false
  );
  const [isOpenModal3, openModal3, closeModal3] = useModal(
    false
  );
  const [
    loadingR,
    errorR,
    messageR,
    responseR,
    statusR,
    handleRequestR,
  ] = useRequest({
    methodRequest: apiSettings.postReservationRequest,
  });
  const [
    loadingDel,
    errorDel,
    messageDel,
    responseDel,
    statusDel,
    handleRequestDel,
  ] = useRequest({
    methodRequest: apiSettings.deleteReservationRequest,
  });
  const [
    loadingUpd,
    errorUpd,
    messageUpd,
    responseUpd,
    statusUpd,
    handleRequestUpd,
  ] = useRequest({
    methodRequest: apiSettings.putReservationRequest,
  });

  const {
    teacher,
    subjectSelected,
    myGroupList,
    subjectList,
    sent,
    handleSubmit,
    handleChangeSubject,
    handleChangeGroup,
    totalStudents,
    handleChangeTotalStudents,
    periodIniSelected,
    periodEndSelected,
    handleChangePeriodIni,
    handleChangePeriodEnd,
    motiveRequest,
    handleMotiveRequest,
    otherGroupList,
    handleTeachersSelected,
    teachers,
    handleDeleteTeachersSelected,
    handleDeleteMyGroup,
    dateReservation,
    handleChangeDate,
    allFilled,
    reservationRequest,
    handleSaveSubmit,
    isLoading,
  } = useReservationRequest({
    request: `${props.reservationRequest}`,
    user: auth,
  });

  return (
    <div style={{backgroundColor: '#fafbfc'}}>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        sx={{paddingTop: '5px'}}
      >
        Solicitud de Reserva
      </Typography>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Card style={{maxWidth: 900}}>
          <CardHeader
            avatar={
              <Stack spacing={1} direction="row">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                    if (subjectSelected !== '') {
                      handleRequestR(handleSaveSubmit());
                    }
                  }}
                >
                  <Save />
                </Button>
                {props.reservationRequest !== 'new' ? (
                  <Button
                    variant="contained"
                    color="redDark"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal2();
                    }}
                  >
                    <Delete />
                  </Button>
                ) : null}
              </Stack>
            }
          />

          <CardContent style={{padding: '10px 2px'}}>
            <Typography
              gutterBottom
              variant="caption"
              color="textSecondary"
              align="left"
              padding="0 1rem"
            >
              Todos los campos con * son obligatorios.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="left"
              padding="0 1rem"
            >
              La solicitud de la reserva se realizará en nombre
              de <b>{teacher.name}</b>
            </Typography>
            <form>
              <List container spacing={1}>
                {/* todos los campos en * son obligatorios */}

                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <FormSelectControl
                      myLabel="Materia *"
                      myValue={subjectSelected}
                      setValue={handleChangeSubject}
                      list={
                        subjectList
                          ? [...subjectList.keys()]
                          : []
                      }
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <FormMultiselectControl
                      disabled={subjectSelected === ''}
                      myLabel="Mis grupos *"
                      value={myGroupList}
                      setValue={handleChangeGroup}
                      deleteT={handleDeleteMyGroup}
                      list={
                        subjectSelected !== ''
                          ? subjectList
                            ? [
                                ...subjectList.get(
                                  subjectSelected
                                ),
                              ]
                            : []
                          : []
                      }
                      stringJoin={false}
                    />
                  </Grid>
                </Grid>
                <Box>
                  <FormMultiselectControl
                    disabled={subjectSelected === ''}
                    myLabel="Agregar otro(s) grupo(s)"
                    value={otherGroupList}
                    setValue={handleTeachersSelected}
                    deleteT={handleDeleteTeachersSelected}
                    list={
                      subjectSelected !== ''
                        ? teachers
                          ? teachers.has(subjectSelected)
                            ? [...teachers.get(subjectSelected)]
                            : []
                          : []
                        : []
                    }
                    stringJoin={true}
                  />
                </Box>

                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <Autocomplete
                      freeSolo
                      options={MOTIVES}
                      value={motiveRequest}
                      inputValue={motiveRequest}
                      disableClearable={true}
                      onInputChange={(e, newValue) => {
                        handleMotiveRequest(newValue);
                      }}
                      onChange={(e, newValue) => {
                        handleMotiveRequest(newValue);
                      }}
                      sx={{minWidth: '200px', padding: '1rem'}}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Motivo de Solicitud *"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <FormInputControl
                      myLabel="Total estudiantes *"
                      myType="number"
                      myVariant="outlined"
                      value={totalStudents}
                      myInputProps={{
                        inputProps: {
                          pattern: '[0-9]+',
                          min: '1',
                          max: '1500',
                        },
                      }}
                      setValue={handleChangeTotalStudents}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <FormInputControl
                      myLabel="Fecha *"
                      myType="date"
                      setValue={handleChangeDate}
                      myInputProps={{
                        inputProps: {
                          min: DateController.getToday(),
                        },
                        value: dateReservation,
                      }}
                      myDefaultValue={dateReservation}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <FormSelectControl
                      myLabel="Hora Inicio *"
                      myValue={periodIniSelected}
                      setValue={handleChangePeriodIni}
                      list={[
                        ...PERIODSRANGE.slice(
                          0,
                          PERIODSRANGE.length - 1
                        ),
                      ]}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <FormSelectControl
                      myLabel="Hora Fin *"
                      myValue={periodEndSelected}
                      setValue={handleChangePeriodEnd}
                      list={[...PERIODSRANGE.slice(1)]}
                    />
                  </Grid>
                </Grid>
                <Box
                  container
                  columns={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Link
                      to={`/user/${PATHS.USERHOME}`}
                      style={{textDecoration: 'none'}}
                    >
                      <Button variant="outlined" color="error">
                        Cancelar
                      </Button>
                    </Link>
                    <Button
                      color="primary"
                      type="submit"
                      variant="contained"
                      onClick={async (e) => {
                        e.preventDefault();
                        openModal1();
                        handleRequestR(handleSubmit('sent'));
                      }}
                      disabled={!allFilled}
                    >
                      Enviar
                    </Button>
                  </Stack>
                </Box>
              </List>
            </form>
          </CardContent>
        </Card>
      )}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        {loadingR ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <AskReservationRequest
            action={closeModal1}
            reservation={responseR}
            error={errorR}
            message={messageR}
          ></AskReservationRequest>
        )}
      </Modal>
      <Dialog open={isOpenModal} onClose={closeModal}>
        <RequestMessage
          loading={loadingR}
          successMessage={
            'Su solicitud se ha guardado con éxito!!'
          }
          errorMessage={
            'Ha ocurrido un error al guardar su solicitud'
          }
          error={errorR}
          closeModal={closeModal}
          linkExit={`/user/${PATHS.DRAFTS}`}
          linkNext={`/user/${PATHS.RESERVATION_REQUESTS}/${responseR.id}`}
        />
      </Dialog>
      <Dialog open={isOpenModal2} onClose={closeModal2}>
        <ConfirmationMessage
          actions={(e) => {
            e.preventDefault();
            handleRequestDel(props.reservationRequest);
            closeModal2();
            openModal3();
          }}
          questionMessage={`¿Esta seguro que quiere borrar esta solicitud de reserva?`}
          closeModal={closeModal2}
        ></ConfirmationMessage>
      </Dialog>
      <Dialog open={isOpenModal3} onClose={closeModal3}>
        <RequestMessage
          loading={loadingDel}
          successMessage={'Se elimino con exito!!'}
          error={errorDel}
          errorMessage={
            'Lo sentimos, no se pudo eliminar la solicitud de reserva'
          }
          closeModal={closeModal3}
          linkExit={`/user/${PATHS.DRAFTS}`}
          onNext={() => {
            navigate(`/user/${PATHS.RESERVATION_REQUESTS}/new`);
            window.location.reload();
          }}
        ></RequestMessage>
      </Dialog>
    </div>
  );
}

export default Solicitud;
