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
  Stack
} from "@mui/material";
import React from "react";
import { useReservationRequest } from "../../hooks/useReservationRequest.hooks";
import FormInputControl from "../inputs/input/input.js";
import DateController from "../../utilities/DateController";
import FormSelectControl from "../inputs/inputSelect/inputSelect";
import FormMultiselectControl from "../inputs/inputMultiselect/inputMultiselect";
import { Grid4x4, PropaneSharp } from "@mui/icons-material";
const periods = ["6:45", "8:15", "9:45"];

function Solicitud() {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState("Controlled");
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
    periodSelected,
    handleChangePeriod,
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

              <Grid container spacing={2}>
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
              <Grid container spacing={2}>
                <Grid item sm={2} xs={6}>
                  <FormInputControl
                    maxWidth="500px"
                    myLabel="Total estudiantes"
                    myType="number"
                    myVariant="outlined"
                    value={totalStudents}
                    myInputProps={{
                      inputProps: { pattern: "[0-9]+", min:"1"},
                    }}
                    setValue={handleChangeTotalStudents}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
                  <FormInputControl
                    myLabel="Motivo de solicitud"
                    myMultiline={true}
                    myRows={4}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
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
                <Grid item sm={6} xs={12}>
                  <FormSelectControl
                    myLabel="Hora"
                    value={periodSelected}
                    setValue={handleChangePeriod}
                    list={periods}
                  />
                </Grid>
              </Grid>
              <Grid>
                <FormInputControl
                  maxWidth="300px"
                  myLabel="Cantidad de periodos"
                  myType="number"
                  myVariant="outlined"
                  myInputProps={{
                    inputProps: { pattern:"[0-9]*",min:"1", max:"5" ,step:"1" },
                  }}
                ></FormInputControl>
              </Grid>
              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Enviar Solicitud
                </Button>
              </Grid>
            </List>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Solicitud;
