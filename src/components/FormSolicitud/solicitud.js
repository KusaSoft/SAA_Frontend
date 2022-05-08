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
} from "@mui/material";
import React from "react";
import { useReservationRequest } from "../../hooks/useReservationRequest.hooks";
import FormInputControl from "../inputs/input/input.js";
import DateController from "../../utilities/DateController";
import FormSelectControl from "../inputs/inputSelect/inputSelect";
import FormMultiselectControl from "../inputs/inputMultiselect/inputMultiselect";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modals/Modal";
import AskReservationRequest from "../ask/askReservationRequest";
import { PERIODSRANGE } from "../../services/Constant";
import { MOTIVES, PATHS } from "../../services/Constant";
import useAuth from "../../hooks/useAuth";
import { useRequest } from "../../hooks/useRequest.hooks";
import { Link } from "react-router-dom";
import { Save, Delete } from "@mui/icons-material";
import apiSettings from "../../services/service";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
function Solicitud(props) {
  const { auth } = useAuth();
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
  ] = useRequest({ methodRequest: apiSettings.postReservationRequest });
  const [
    loadingDel,
    errorDel,
    messageDel,
    responseDel,
    statusDel,
    handleRequestDel,
  ] = useRequest({ methodRequest: apiSettings.deleteReservationRequest });
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
  } = useReservationRequest({
    request: `${props.reservationRequest}`,
    user: auth,
  });

  return (
    <div style={{ backgroundColor: "#fafbfc" }}>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        sx={{ paddingTop: "5px" }}
      >
        Solicitud de Reserva
      </Typography>
      <Card style={{ maxWidth: 900 }}>
        <CardHeader
          avatar={
            <Stack spacing={1} direction="row">
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                  if (subjectSelected !== "") {
                    handleRequestR(handleSaveSubmit());
                  }
                }}
              >
                <Save />
              </Button>
              {props.reservationRequest !== "new" ? (
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

        <CardContent style={{ padding: "10px 2px" }}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="left"
              padding="0 1rem"
            >
              La solicitud de la reserva se realizará en nombre de {" "}
              <b>{teacher.name}</b>
            </Typography>
          <Divider />
          <Typography gutterBottom variant="caption" color="textSecondary" align="left"
              padding="0 1rem">
            Todos los campos con * son obligatorios.
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
                    helperText="Este campo es obligatorio para guardar la solicitud"
                    list={subjectList ? [...subjectList.keys()] : []}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormMultiselectControl
                    disabled={subjectSelected === ""}
                    myLabel="Mis grupos *"
                    value={myGroupList}
                    setValue={handleChangeGroup}
                    deleteT={handleDeleteMyGroup}
                    list={
                      subjectSelected !== ""
                        ? subjectList
                          ? [...subjectList.get(subjectSelected)]
                          : []
                        : []
                    }
                  />
                </Grid>
              </Grid>
              <Box
              >

                  <FormMultiselectControl
                    disabled={subjectSelected === ""}
                    myLabel="Agregar otro(s) grupo(s)"
                    value={otherGroupList}
                    setValue={handleTeachersSelected}
                    deleteT={handleDeleteTeachersSelected}
                    list={
                      subjectSelected !== ""
                        ? teachers
                          ? teachers.has(subjectSelected)
                            ? [...teachers.get(subjectSelected)]
                            : []
                          : []
                        : []
                    }
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
                    sx={{ minWidth: "200px", padding: "1rem" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Motivo de Solicitud *" />
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
                      inputProps: { pattern: "[0-9]+", min: "1", max: "1500" },
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
                      inputProps: { min: DateController.getToday() },
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
                    list={[...PERIODSRANGE.slice(0, PERIODSRANGE.length - 1)]}
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
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Link
                    to={`/user/${PATHS.USERHOME}`}
                    style={{ textDecoration: "none" }}
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
                      handleRequestR(handleSubmit("sent"));
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
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        {loadingR ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
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
        {loadingR ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : subjectSelected === "" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Para guardar debe llenar minimamente el campo obligatorio de{" "}
              <strong>Materia</strong>
              <Button onClick={closeModal} autoFocus>
                Continuar
              </Button>
            </Alert>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Alert severity="success">
              <AlertTitle>Exito</AlertTitle>
              Su solicitud se ha guardado con éxito!!
              <Stack
                sx={{
                  paddingTop: "1rem",
                }}
                direction="row"
                spacing={2}
              >
                <Link
                  to={`/user/${PATHS.DRAFTS}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button>Salir</Button>
                </Link>
                <Link
                  to={`/user/${PATHS.RESERVATION_REQUESTS}/${responseR.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    onClick={closeModal}
                  >
                    Continuar
                  </Button>
                </Link>
              </Stack>
            </Alert>
          </Box>
        )}
      </Dialog>
      <Dialog open={isOpenModal2} onClose={closeModal2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Alert severity="warning">
            <AlertTitle>Atencion!</AlertTitle>
            ¿Esta seguro que quiere borrar esta solicitud de reserva?{" "}
            <Button onClick={closeModal2} autoFocus>
              No
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleRequestDel(props.reservationRequest);
                closeModal2();
                openModal3();
              }}
              autoFocus
            >
              Si
            </Button>
          </Alert>
        </Box>
      </Dialog>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        {loadingDel ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CheckCircleOutline color="success" sx={{ fontSize: 70 }} />
            <Typography variant="h6">Se elimino con exito!!</Typography>

            <Link
              to={`/user/${PATHS.DRAFTS}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" color="primary">
                Salir
              </Button>
            </Link>
          </Box>
        )}
      </Modal>
    </div>
  );
}

export default Solicitud;
