import React from "react";
import { Box, Button, List, TextField, Typography } from "@mui/material";
import { Wrapper } from "./askReservationRequest.styles";
import { Link } from "react-router-dom";
export default function AskReservationRequest(props) {
  return (
    <Wrapper>
      <Typography variant="h3">Acuse de recibo</Typography>
      <Typography variant="body1">
        La solicitud de reserva se recibio con exito en fecha{" "}
        {/* {props.reservation.createdAt.toLocaleDateString()} */}a horas{" "}
        {/* {props.reservation.createdAt.toLocaleTimeString()} */}A nombre de
        {/* {props.reservation.name} */}
      </Typography>
      <Typography variant="body1">Materia:</Typography>
      <Typography variant="body1">
        Grupo(s):
        <List>
          {/* {props.reservation.groups.map((group) => (
            <ListItem key={group.id}>
                <ListItemText primary={group.name} />
            </ListItem>
        ))} */}
        </List>
        <Typography variant="body1">
          Fecha de reserva{" "}
          {/* {props.reservation.reservationDate.toLocaleDateString()} */}a
          horas {/* {props.reservation.reservationDate.toLocaleTimeString()} */}
        </Typography>
      </Typography>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Aceptar
          </Button>
        </Link>
      </Box>
    </Wrapper>
  );
}
