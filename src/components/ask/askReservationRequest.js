import React from "react";
import { Box, Button, List, TextField, Typography } from "@mui/material";
import { Wrapper } from "./askReservationRequest.styles";
import { Link } from "react-router-dom";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
export default function AskReservationRequest(props) {
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
      ) : (
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
            {/* {props.reservation.createdAt.toLocaleDateString()} */}a horas{" "}
            {/* {props.reservation.createdAt.toLocaleTimeString()} */}A nombre
            de
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
              horas{" "}
              {/* {props.reservation.reservationDate.toLocaleTimeString()} */}
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
      )}
    </Wrapper>
  );
}
