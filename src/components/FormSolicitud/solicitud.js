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
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";
import { useReservationRequest } from "../../hooks/useReservationRequest.hooks";
//import './FormSol.Styled';

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
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <TextField
                    label="Total Estudiantes"
                    type="number"
                    variant="outlined"
                  ></TextField>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Motivo de solicitud"
                    multiline
                    rows={4}
                  />
                </FormControl>
              </div>
              <div>
                <TextField
                  id="date"
                  label="Fecha"
                  type="date"
                  defaultValue="2017-05-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                <TextField
                  sx={{ m: 1, width: 300 }}
                  label="Cantidad de periodos"
                  type="number"
                  variant="outlined"
                ></TextField>
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
