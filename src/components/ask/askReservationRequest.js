import React from "react";
import {
  Box,
  Button,
  List,
  ListItemText,
  TextField,
  Typography,
  ListItem,
} from "@mui/material";
import { Wrapper } from "./askReservationRequest.styles";
import { Link } from "react-router-dom";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
export default function AskReservationRequest(props) {
  console.log("AskReservationRequest", props.reservation);
  return (
    <Wrapper>
      {props.error !== "" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h6" color="error">
            {props.message}
            {props.error}
          </Typography>
          <ErrorOutline color="error" sx={{ fontSize: 70 }} />
        </Box>
      ) : props.reservation ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h3">Acuse de recibo</Typography>
          <Box>
            <Typography variant="h6" color="primary">
              {props.message}
            </Typography>
            <CheckCircleOutline color="success" sx={{ fontSize: 70 }} />
          </Box>
          <Typography variant="body1">
            La solicitud de reserva se recibio con exito en fecha{" "}
            {props.reservation.register_date.split(" ")[0]} a horas{" "}
            {props.reservation.register_date.split(" ")[1]} A nombre de{" "}
            {props.reservation.name}
          </Typography>
          <Typography variant="body1">
            Materia: {props.reservation.subject}
          </Typography>
          <Typography variant="body1">
            Grupo(s):
            <List>
              {props.reservation.group_list.split(" ").map((group) => (
                <ListItem key={group.id}>
                  <ListItemText primary={group.name} />
                </ListItem>
              ))}
              {props.reservation.other_group_list.split(" ").map((group) => (
                <ListItem key={group.id}>
                  <ListItemText primary={group.name} />
                </ListItem>
              ))}
            </List>
            <Typography variant="body1">
              Fecha de reserva {Date.parse(props.reservation.reservation_date).
              }a
              horas {Date.parse(props.reservation.reservation_date)}
            </Typography>
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Link to="/user/home" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Continuar
              </Button>
            </Link>
          </Box>
        </Box>
      ) : null}
    </Wrapper>
  );
}
