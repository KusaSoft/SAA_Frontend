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
import {useReservationRequest} from '../../hooks/useReservationRequest';
import FormInputControl from '../inputs/input/input.js';
import DateController from '../../utilities/DateController';
import FormSelectControl from '../inputs/inputSelect/inputSelect';
import FormMultiselectControl from '../inputs/inputMultiselect/inputMultiselect';
import {useModal} from '../../hooks/useModal';
import Modal from '../Modals/Modal';
import AskReservationRequest from '../ask/askReservationRequest';
import {PERIODSRANGE} from '../../services/Constant';
import {MOTIVES, PATHS, STATUS} from '../../services/Constant';
import useAuth from '../../hooks/useAuth';
import {useRequest} from '../../hooks/useRequest.hooks';
import {Link, useNavigate} from 'react-router-dom';
import {Save, Delete} from '@mui/icons-material';
import apiSettings from '../../services/service';
import RequestMessage from '../Messages/RequestMessage';
import ConfirmationMessage from '../Messages/ConfirmationMessage';
import RedBar from '../Div/RedBar';
function Solicitud(props) {
  const {auth} = useAuth();
  const navigate = useNavigate();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
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
    subjectList,
    teachers,
    reservationRequest,
    isLoading,
    errors,
    handleReservationRequest,
    deleteElementFromMyGroup,
    deleteElementFromOtherGroup,
    validateAllFilled,
    validateSaveFilled,
    getReservationRequest,
  } = useReservationRequest({
    request: `${props.reservationRequest}`,
    user: auth,
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={2}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card sx={{backgroundColor: 'forms.main', maxWidth: 900}}>
          <CardHeader
            avatar={
              <Stack spacing={1} direction="row">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    if (validateSaveFilled()) {
                      handleRequestR(getReservationRequest(STATUS.DRAFT));
                      openModal();
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
              La solicitud de la reserva se realizará en nombre de{' '}
              <b>{reservationRequest.teacher}</b>
            </Typography>
            <form>
              <List container spacing={1}>
                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <FormSelectControl
                      myLabel="Materia *"
                      myValue={reservationRequest.subject}
                      myName="subject"
                      setValue={handleReservationRequest}
                      list={subjectList ? [...subjectList.keys()] : []}
                    >
                      {errors.subject.isEmpty ? (
                        <RedBar>{errors.emptyMessage}</RedBar>
                      ) : errors.subject.isUnsaveable ? (
                        <RedBar>{errors.saveMessage}</RedBar>
                      ) : null}
                    </FormSelectControl>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <FormMultiselectControl
                      disabled={reservationRequest.subject === ''}
                      myLabel="Mis grupos *"
                      value={reservationRequest.myGroupList}
                      myName="myGroupList"
                      setValue={handleReservationRequest}
                      deleteT={deleteElementFromMyGroup}
                      list={
                        reservationRequest.subject !== ''
                          ? subjectList
                            ? [
                                ...subjectList.get(
                                  reservationRequest.subject
                                ),
                              ]
                            : []
                          : []
                      }
                      stringJoin={false}
                    >
                      {errors.mygroup.isEmpty ? (
                        <RedBar>{errors.emptyMessage}</RedBar>
                      ) : null}
                    </FormMultiselectControl>
                  </Grid>
                </Grid>

                <Box>
                  <FormMultiselectControl
                    disabled={reservationRequest.subject === ''}
                    myLabel="Agregar otro(s) grupo(s)"
                    value={reservationRequest.otherGroupList}
                    myName="otherGroupList"
                    setValue={handleReservationRequest}
                    deleteT={deleteElementFromOtherGroup}
                    list={
                      reservationRequest.subject !== ''
                        ? teachers
                          ? teachers.has(reservationRequest.subject)
                            ? [...teachers.get(reservationRequest.subject)]
                            : []
                          : []
                        : []
                    }
                    stringJoin={true}
                  ></FormMultiselectControl>
                </Box>

                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <Autocomplete
                      freeSolo
                      options={MOTIVES.slice(0)}
                      value={reservationRequest.motiveRequest}
                      inputValue={reservationRequest.motiveRequest}
                      disableClearable={true}
                      onInputChange={(e, newValue) => {
                        handleReservationRequest(
                          e,
                          newValue,
                          'motiveRequest'
                        );
                      }}
                      name="motiveRequest"
                      sx={{
                        minWidth: '200px',
                        padding: '1rem 1rem 0rem 1rem',
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="motiveRequest"
                          label="Motivo de Solicitud *"
                        />
                      )}
                    />
                    {errors.motive.isEmpty ? (
                      <RedBar>{errors.emptyMessage}</RedBar>
                    ) : errors.motive.isUnsaveable ? (
                      <RedBar>{errors.saveMessage}</RedBar>
                    ) : null}
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <FormInputControl
                      myLabel="Cantidad de estudiantes *"
                      myType="number"
                      myVariant="outlined"
                      myName="totalStudents"
                      value={reservationRequest.totalStudents}
                      myInputProps={{
                        inputProps: {
                          min: '1',
                          max: '1500',
                        },
                      }}
                      myMaxLength="4"
                      setValue={handleReservationRequest}
                    >
                      {errors.totalStudents.isEmpty ? (
                        <RedBar>{errors.emptyMessage}</RedBar>
                      ) : null}
                    </FormInputControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <FormInputControl
                      myLabel="Fecha *"
                      myType="date"
                      setValue={handleReservationRequest}
                      myName="dateReservation"
                      myInputProps={{
                        inputProps: {
                          min: DateController.getToday(),
                        },
                        value: reservationRequest.dateReservation,
                      }}
                      myDefaultValue={reservationRequest.dateReservation}
                    >
                      {errors.date.isEmpty ? (
                        <RedBar>{errors.emptyMessage}</RedBar>
                      ) : errors.date.isError ? (
                        <RedBar>{errors.date.message}</RedBar>
                      ) : null}
                    </FormInputControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2} columns={12}>
                  <Grid item sm={6} xs={12}>
                    <FormSelectControl
                      myLabel="Hora Inicio *"
                      myValue={reservationRequest.periodIniSelected}
                      setValue={handleReservationRequest}
                      myName="periodIniSelected"
                      list={[
                        ...PERIODSRANGE.slice(0, PERIODSRANGE.length - 1),
                      ]}
                    >
                      {errors.iniPeriod.isEmpty ? (
                        <RedBar>{errors.emptyMessage}</RedBar>
                      ) : errors.iniPeriod.isError ? (
                        <RedBar>{errors.iniPeriod.message}</RedBar>
                      ) : null}
                    </FormSelectControl>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <FormSelectControl
                      myLabel="Hora Fin *"
                      myValue={reservationRequest.periodEndSelected}
                      myName="periodEndSelected"
                      setValue={handleReservationRequest}
                      list={[...PERIODSRANGE.slice(1)]}
                    >
                      {errors.endPeriod.isEmpty ? (
                        <RedBar>{errors.emptyMessage}</RedBar>
                      ) : errors.endPeriod.isError ? (
                        <RedBar>{errors.endPeriod.message}</RedBar>
                      ) : null}
                    </FormSelectControl>
                  </Grid>
                </Grid>
                <Box
                  container
                  columns={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '0 1rem',
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
                      onClick={(e) => {
                        e.preventDefault();
                        if (validateAllFilled()) {
                          handleRequestR(
                            getReservationRequest(STATUS.SENT)
                          );
                          openModal1();
                        }
                      }}
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
            reservation={
              responseR
                ? {
                    ...responseR,
                    group_list: [
                      ...reservationRequest.myGroupList.map((group) => {
                        return `${group}  ${reservationRequest.teacher}`;
                      }),
                      ...reservationRequest.otherGroupList,
                    ],
                  }
                : null
            }
            error={errorR}
            message={messageR}
          ></AskReservationRequest>
        )}
      </Modal>
      <Dialog open={isOpenModal} onClose={closeModal}>
        <RequestMessage
          loading={loadingR}
          successMessage={'Su solicitud se ha guardado con éxito!!'}
          errorMessage={'Ha ocurrido un error al guardar su solicitud'}
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
    </Box>
  );
}

export default Solicitud;
