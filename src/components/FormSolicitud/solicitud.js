import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Button,
  CardContent,
  Card,
  List,
  Stack,
  Box,
  Divider
} from "@mui/material";
import React from "react";
import { useReservationRequest } from "../../hooks/useReservationRequest.hooks";
import FormInputControl from "../inputs/input/input.js";
import DateController from "../../utilities/DateController";
import FormSelectControl from "../inputs/inputSelect/inputSelect";
import FormMultiselectControl from "../inputs/inputMultiselect/inputMultiselect";
import { GifBoxSharp } from "@mui/icons-material";

const periodsIni = ["06:45", "08:15", "09:45", "11:15", "12:45", "14:15", "15:45", "17:15", "18:45", "20:15"];
const periodsEnd = ["08:15", "09:45", "11:15", "12:45", "14:15", "15:45", "17:15", "18:45", "20:15", "21:45"];
const motive= ["Examen","Exposición","Capacitación","Otro"]

function Solicitud() {
  // const [age, setAge] = React.useState("");
  // const [value, setValue] = React.useState("Controlled");
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
    // teachersSelected,
    // handleTeachersSelected,
    // teachers,
    motiveRequest,
    handleMotiveRequest,
  } = useReservationRequest();

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Solicitud de Reserva
      </Typography>
      <Card style={{ maxWidth: 700, padding: "10px 2px", margin: "auto" }}>
        <CardContent>
          <form>
            <List container spacing={0}>
              <div>
                <Typography
                  padding="0px 16px"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                  align="left"
                >
                  La solicitud de la reserva se realizará en nombre de:{" "}
                  <b>{teacher.name}</b>
                </Typography>
              </div>

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
                    list={subjectSelected !== "" ? [...subject_list.get(subjectSelected)] : []}
                  />
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="flex-end">
                <Grid item sm={6} xs={12}>
                  <FormMultiselectControl
                    disabled={subjectSelected === ""}
                    myLabel="Agregar otro grupo(s)"
                    value={group_list}
                    setValue={handleChangeGroup}
                    list={subjectSelected !== "" ? [...subject_list.get(subjectSelected)] : []}
                  />
                </Grid>
              </Box>

              <Grid container spacing={2} columns={12}>
                <Grid item sm={6} xs={12}>
                  <FormSelectControl
                    myLabel="Motivo de Solicitud"
                    value={motiveRequest}
                    setValue={handleMotiveRequest}
                    list={motive}
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
                      inputProps: { min: DateController.getToday() }
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
                    list={periodsIni}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormSelectControl
                    myLabel="Hora Fin"
                    value={periodEndSelected}
                    setValue={handleChangePeriodEnd}
                    list={periodsEnd}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} columns={12}>
                <Grid item sm={6} xs={12}>
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
                <Grid item sm={6} xs={12}>
                  <Button
                    color="primary"
                    // disabled={!formik.isValid || formik.isSubmitting}
                    // fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    padding="1rem"
                  >
                    Enviar Solicitud
                  </Button>
                </Grid>
              </Grid>

              {/* <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                }} padding="1rem"
              >
                <Button variant="contained" type="submit"
                  color="primary">
                  Enviar Solicitud
                </Button>
              </Box> */}
            </List>
          </form>
        </CardContent>
      </Card>
    </div >
  );
}

export default Solicitud;
