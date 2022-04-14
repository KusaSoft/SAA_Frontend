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
const periodos = ["6:45", "8:15", "9:45"];

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
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-simple-select-label">Materia</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subjectSelected}
                    label="Materia"
                    onChange={handleChangeSubject}
                  >
                    {[...subject_list].map((subject) => {
                      return (
                        <MenuItem value={subject[0]}>{subject[0]}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {subjectSelected !== "" ? (
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-simple-select-label">Grupo</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value="dsd"
                      label="Grupo"
                      onChange={handleChangeGroup}
                    >
                      {group_list.map((group) => {
                        return <MenuItem value={group}>{group}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
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
                  myInputProps={{ inputProps: { min: DateController.getToday() } }}
                  myDefaultValue={DateController.getToday()}
                />
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-simple-select-label">Hora</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Grupo"
                    onChange={handleChangeGroup}
                  >
                    {periodos.map((periodo) => {
                      return <MenuItem value={periodo}>{periodo}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
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
