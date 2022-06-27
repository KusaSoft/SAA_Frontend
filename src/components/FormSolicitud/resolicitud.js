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
import DataTransform from '../../utilities/DataController/DataTransform';
import RedBar from '../Div/RedBar';
import AlertMessage from '../Messages/AlertMessage';
import {MyBox} from '../../emotion/GlobalComponents';
function Forward(props) {
  const {auth} = useAuth();
  const navigate = useNavigate();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenAlert, openAlert, closeAlert] = useModal(false);
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
    <MyBox>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card
          sx={{
            backgroundColor: 'forms.main',
            maxWidth: 1400,
            width: '100%',
          }}
        >
          <CardContent style={{padding: '10px 2px'}}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="left"
              padding="0 1rem"
            >
              <Typography
                gutterBottom
                variant="caption"
                color="textSecondary"
              >
                Todos los campos con * son obligatorios.
              </Typography>
              <br />
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
                      myDisabled={true}
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
                      myDisabled={true}
                      setValue={handleReservationRequest}
                      deleteT={() => {}}
                      labelActive={true}
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
                    myDisabled={true}
                    labelActive={true}
                    setValue={handleReservationRequest}
                    deleteT={() => {}}
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
                      options={MOTIVES.slice(0, MOTIVES.length - 1)}
                      value={reservationRequest.motiveRequest}
                      inputValue={reservationRequest.motiveRequest}
                      disableClearable={true}
                      disabled={true}
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
                    <div
                      style={{
                        padding: '0rem 1rem 0rem 1rem',
                      }}
                    >
                      {errors.motive.isEmpty ? (
                        <RedBar>{errors.emptyMessage}</RedBar>
                      ) : errors.motive.isUnsaveable ? (
                        <RedBar>{errors.saveMessage}</RedBar>
                      ) : null}
                    </div>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <FormInputControl
                      myLabel="Cantidad de estudiantes 1-500*"
                      myType="number"
                      myVariant="outlined"
                      myName="totalStudents"
                      value={reservationRequest.totalStudents}
                      myDisabled={true}
                      myInputProps={{
                        inputProps: {
                          min: '1',
                          max: '500',
                        },
                      }}
                      myMaxLength="3"
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
                  <Stack spacing={1} direction="row">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => navigate(-1)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        if (validateAllFilled()) {
                          if (
                            DataTransform.getQuantityPeriod(
                              reservationRequest.periodIniSelected,
                              reservationRequest.periodEndSelected
                            ) > 3
                          ) {
                            openAlert();
                          } else {
                            handleRequestR(
                              getReservationRequest(STATUS.SENT)
                            );
                            openModal1();
                          }
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
      <Dialog open={isOpenAlert} onClose={closeAlert}>
        <AlertMessage
          message={
            'Esta seguro que quiere realizar la reserva con mas de 3 periodos?'
          }
          alertTitle={'Cuidado'}
        >
          <Box>
            <Button onClick={closeAlert}>Cancelar</Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                closeAlert();
                handleRequestR(getReservationRequest(STATUS.SENT));
                openModal1();
              }}
            >
              Continuar
            </Button>
          </Box>
        </AlertMessage>
      </Dialog>
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
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <RequestMessage
          loading={loadingR}
          successMessage={'Su solicitud se ha guardado con éxito!!'}
          errorMessage={'Ha ocurrido un error al guardar su solicitud'}
          error={errorR}
          closeModal={closeModal}
          justLeave={true}
          linkExit={`/user/${PATHS.DRAFTS}`}
          linkNext={`/user/${PATHS.RESERVATION_REQUESTS}/${responseR.id}`}
        />
      </Modal>
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
    </MyBox>
  );
}

export default Forward;
