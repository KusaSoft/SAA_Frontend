import {Box, List, Divider, ListItem, Typography} from '@mui/material';
import React from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
export default function ContentDetail(props) {
  return (
    <Box sx={style}>
      <Typography variant="h4" align="center">
        Solicitud de reserva
      </Typography>
      <Typography variant="body1">
        Realizada en nombre de:
        <br />
        <b>Motivo de la solicitud:</b> {props.request.request_reason}
        <br />
        Materia: {/* {props.reservation.subject} */}
        <br />
        Cantidad de estudiantes: {/* {props.reservation.subject} */}
        <br />
        Grupo(s): <br />
        <List>
          <ListItem>
            {/* {` ${props.reservation.group_list[0]}`} */}
          </ListItem>
          {/* {props.reservation.group_list
                      .slice(1, props.reservation.group_list.length)
                      .map((group) => {
                        return <ListItem>{group}</ListItem>;
                      })} */}
        </List>
        <br />
        <Divider
          style={{
            color: 'white',
          }}
        />
        <br />
        Fecha para la reserva:{' '}
        {/* {props.reservation.reservation_date.split('T')[0]} <br /> */}
        <br />
        <b>Hora Inicio:</b>
        {props.request.horario_ini}
        <br />
        <b>Hora Fin:</b>
        {props.request.horario_end}
      </Typography>
    </Box>
  );
}
