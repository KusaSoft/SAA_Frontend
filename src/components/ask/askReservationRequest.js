import React from "react";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
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
          <Typography
            variant="body1"
            sx={{
              paddingBottom: "1rem",
            }}
          >
            La solicitud de reserva se recibio con exito en fecha{" "}
            <b>{props.reservation.register_date.split(" ")[0]} </b>a horas{" "}
            <b>{props.reservation.register_date.split(" ")[1]}</b> a nombre de{" "}
            <b>{props.reservation.name}</b>.
          </Typography>
          <Typography variant="body1">
            Materia: {props.reservation.subject}
            <br />
            <br />
            Grupo(s): {` G${props.reservation.group_list.split(" ")[0]}`}
            {props.reservation.group_list
              .split(" ")
              .slice(1, props.reservation.group_list.split(" ").length)
              .map((group) => (group !== "" ? `, G${group}` : ""))}
            {props.reservation.other_group_list
              .split(" ")
              .map((group) => (group !== "" ? `, G${group}` : ""))}
            <br />
            <br />
            Fecha solicitada para la reserva{" "}
            {props.reservation.reservation_date.split("T")[0]} a horas{" "}
            {props.reservation.horario_ini} hasta{" "}
            {props.reservation.horario_end}
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Link to="/user/Pendientes" style={{ textDecoration: "none" }}>
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
