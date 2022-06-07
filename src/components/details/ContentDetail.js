import {
  Box,
  List,
  Divider,
  ListItem,
  Typography,
  Button,
} from '@mui/material';
import DataTransform from '../../utilities/DataController/DataTransform';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import {ROLES, PATHS, STATUS} from '../../services/Constant';
import {Link} from 'react-router-dom';
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
  const {auth} = useAuth();
  return (
    <Box sx={style}>
      <Typography variant="h4" align="center">
        Solicitud de reserva
      </Typography>
      <Typography variant="body1">
        <b>Registrado el: </b>
        {props.request.register_date}
        <br />
        <b>Realizada en nombre de: </b>
        {props.request.user}
        <br />
        <b>Motivo de la solicitud:</b> {props.request.request_reason}
        <br />
        <b>Materia:</b> {props.request.subject}
        <br />
        <b>Cantidad de estudiantes:</b> {props.request.total_students}
        <br />
        <b>Grupo(s):</b> <br />
        <List>
          {props.request.group_list &&
            props.request.group_list.map((group) => (
              <ListItem>
                G{group.group} {group.teacher}
              </ListItem>
            ))}

          {props.request.other_groups &&
            props.request.other_groups.map((group) => (
              <ListItem>
                G{group.group} {group.teacher}
              </ListItem>
            ))}
        </List>
        <br />
        <Divider
          style={{
            color: 'white',
          }}
        />
        <br />
        <b>Fecha para la reserva: </b>
        {props.request.reservation_date} <br />
        <br />
        <b>
          Cantidad de periodos:{' '}
          {DataTransform.getQuantityPeriod(
            props.request.horario_ini,
            props.request.horario_end
          )}
        </b>
        <br />
        <b>Hora Inicio:</b> {props.request.horario_ini}
        <br />
        <b>Hora Fin:</b> {props.request.horario_end}
      </Typography>
      {auth.roles.includes(ROLES.REVIEWER) &&
        props.request.state !== STATUS.ASSIGNED &&
        props.request.state !== STATUS.REJECTED && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 3,
            }}
          >
            <Link
              to={`/user/reservationRequest/${props.request.id}/classroomAssignation`}
              style={{
                textDecoration: 'none',
              }}
            >
              <Button variant="contained" color="primary">
                Asignar aula(s)
              </Button>
            </Link>
          </Box>
        )}
    </Box>
  );
}
