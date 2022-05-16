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
        Realizada en nombre de: {props.request.name}
        <br />
        <b>Motivo de la solicitud:</b> {props.request.request_reason}
        <br />
        <b>Materia:</b> {props.request.subject}
        <br />
        <b>Cantidad de estudiantes:</b> {props.request.total_students}
        <br />
        <b>Grupo(s):</b> <br />
        <List>
          {/* {response.group_list.split(' ').map((group) => (
            <ListItem>
              {...DataTransform.getMyGroupById(
                response.group_list,
                subjectListMapF
              )}
            </ListItem>
          ))} */}
          {/* {props.request.group_list
            .slice(1, props.request.group_list.length)
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
        Fecha para la reserva: {props.request.reservation_date} <br />
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
