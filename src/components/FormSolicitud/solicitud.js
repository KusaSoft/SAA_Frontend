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
import { MOTIVES } from "../../services/Constant";
function Solicitud() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const {
    teacher,
    subjectSelected,
    group_list,
    subject_list,
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
  } = useReservationRequest();

  return (
    <div style={{ backgroundColor: "#fafbfc" }}>
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        sx={{ paddingTop: "10px" }}
      >
        Solicitud de Reserva
      </Typography>
      <Card style={{ maxWidth: 700, padding: "10px 2px" }}>
        <CardContent>
          <form>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="left"
            >
              La solicitud de la reserva se realizará en nombre de:{" "}
              <b>{teacher.name}</b>
            </Typography>
            <List container spacing={1}>
              <Grid container spacing={2} columns={12}>
                <Grid item sm={6} xs={12}>
                  <FormSelectControl
                    myLabel="Materia"
                    value={subjectSelected}
                    setValue={handleChangeSubject}
                    list={[...subject_list.keys()]}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormMultiselectControl
                    disabled={subjectSelected === ""}
                    myLabel="Grupo"
                    value={group_list}
                    setValue={handleChangeGroup}
                    list={
                      subjectSelected !== ""
                        ? [...subject_list.get(subjectSelected)]
                        : []
                    }
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                columns={12}
                justifyContent="flex-end"
              >
                <Grid item sm={6} xs={12}>
                  <FormMultiselectControl
                    disabled={subjectSelected === ""}
                    myLabel="Agregar otro grupo(s)"
                    value={group_list}
                    setValue={handleChangeGroup}
                    list={
                      subjectSelected !== ""
                        ? [...subject_list.get(subjectSelected)]
                        : []
                    }
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} columns={12}>
                <Grid item sm={6} xs={12}>
                  <FormSelectControl
                    myLabel="Motivo de Solicitud"
                    value={motiveRequest}
                    setValue={handleMotiveRequest}
                    list={MOTIVES}
                  />
                </Grid>
                {/* <Grid item sm={6} xs={12}>
                  <FormInputControl
                    myLabel="Motivo de solicitud"
                    myMultiline={true}
                    myRows={2}
                  />
                </Grid> */}
                <Grid item sm={6} xs={12}>
                  <FormInputControl
                    myLabel="Total estudiantes"
                    myType="number"
                    myVariant="outlined"
                    value={totalStudents}
                    myInputProps={{
                      inputProps: { pattern: "[0-9]+", min: "1" },
                    }}
                    setValue={handleChangeTotalStudents}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} columns={12}>
                <Grid item sm={6} xs={12}>
                  <FormInputControl
                    myLabel="Fecha"
                    myType="date"
                    myInputProps={{
                      inputProps: { min: DateController.getToday() },
                    }}
                    myDefaultValue={DateController.getToday()}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} columns={12}>
                <Grid item sm={6} xs={12}>
                  <FormSelectControl
                    myLabel="Hora Inicio"
                    value={periodIniSelected}
                    setValue={handleChangePeriodIni}
                    list={[...PERIODSRANGE.slice(0, PERIODSRANGE.length - 1)]}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormSelectControl
                    myLabel="Hora Fin"
                    value={periodEndSelected}
                    setValue={handleChangePeriodEnd}
                    list={[...PERIODSRANGE.slice(1)]}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} columns={12}>
                <Grid
                  item
                  sm={6}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    color="primary"
                    // disabled={!formik.isValid || formik.isSubmitting}
                    // fullWidth
                    size="large"
                    type="button"
                    variant="contained"
                    padding="1rem"
                  >
                    Guardar Cambios
                  </Button>
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    color="primary"
                    // disabled={!formik.isValid || formik.isSubmitting}
                    // fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    padding="1rem"
                    // sx={{ alignSelf: "flex-end", justifySelf: "flex-end" }}
                    onClick={openModal1}
                  >
                    Enviar Solicitud
                  </Button>
                </Grid>
              </Grid>
            </List>
          </form>
        </CardContent>
      </Card>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <AskReservationRequest action={closeModal1}></AskReservationRequest>
      </Modal>
    </div>
  );
}

export default Solicitud;
