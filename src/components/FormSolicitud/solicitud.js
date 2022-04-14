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
} from "@mui/material";
import React from "react";
import { useReservationRequest } from "../../hooks/useReservationRequest.hooks";
import FormInputControl from "../inputs/input/input.js";
import DateController from "../../utilities/DateController";
import FormSelectControl from "../inputs/inputSelect/inputSelect";
import FormMultiselectControl from "../inputs/inputMultiselect/inputMultiselect";
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
      <Typography gutterBottom variant="h2" align="center">
        Solicitud de Reserva
      </Typography>
      <Card style={{ maxWidth: 700, padding: "20px 2px", margin: "auto" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                La solicitud de la reserva se realizará en nombre de:{" "}
                {teacher.name}
              </Typography>
              <div>
                <FormSelectControl
                  myLabel="Materia"
                  value={subjectSelected}
                  setValue={handleChangeSubject}
                  list={[...subject_list.keys()]}
                />

                {subjectSelected !== "" ? (
                  <FormMultiselectControl
                    myLabel="Grupo"
                    value={group_list}
                    setValue={handleChangeGroup}
                    list={[...subject_list.get(subjectSelected)]}
                  />
                ) : (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    Grupo
                  </Typography>
                )}
              </div>
              <FormInputControl
                myLabel="Total estudiantes"
                myType="number"
                myVariant="outlined"
                value={totalStudents}
                myInputProps={{
                  inputProps: { pattern: "[0-9]+" },
                }}
                setValue={handleChangeTotalStudents}
              />

              <FormInputControl
                myLabel="Motivo de solicitud"
                myMultiline={true}
                myRows={4}
              />
              <div>
                <FormInputControl
                  myLabel="Fecha"
                  myType="date"
                  myInputProps={{
                    inputProps: { min: DateController.getToday() },
                  }}
                  myDefaultValue={DateController.getToday()}
                />

                <FormSelectControl
                  myLabel="Hora"
                  value={periodSelected}
                  setValue={handleChangePeriod}
                  list={periods}
                />
              </div>
              <div>
                <FormInputControl
                  myLabel="Cantidad de periodos"
                  myType="number"
                  myVariant="outlined"
                ></FormInputControl>
              </div>
              <Grid item xs={11}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Enviar Solicitud
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Solicitud;
