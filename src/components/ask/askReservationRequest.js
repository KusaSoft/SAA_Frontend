import React from 'react';
import {Box, Button, List, Typography, ListItem} from '@mui/material';
import {Wrapper} from './askReservationRequest.styles';
import {Link} from 'react-router-dom';
import {CheckCircleOutline, ErrorOutline} from '@mui/icons-material';
import {PATHS} from '../../services/Constant';
import {BoxColumn} from '../../emotion/GlobalComponents';
export default function AskReservationRequest(props) {
  return (
    <Wrapper>
      {props.error !== '' ? (
        <BoxColumn>
          <Typography variant="h6" color="error">
            {props.message}
            {props.error}
          </Typography>
          <ErrorOutline color="error" sx={{fontSize: 70}} />
        </BoxColumn>
      ) : props.reservation ? (
        <BoxColumn>
          <Typography variant="h3">Acuse de recibo</Typography>
          <Box>
            <Typography variant="h6" color="primary">
              {props.message}
            </Typography>
            <CheckCircleOutline color="success" sx={{fontSize: 70}} />
          </Box>
          <Typography
            variant="body1"
            sx={{
              paddingBottom: '1rem',
            }}
          >
            La solicitud de reserva se recibio con exito en fecha{' '}
            <b>{props.reservation.register_date.split(' ')[0]} </b>a horas{' '}
            <b>{props.reservation.register_date.split(' ')[1]}</b> a nombre
            de <b>{props.reservation.name}</b>.
          </Typography>
          <Typography variant="body1">
            Materia: {props.reservation.subject}
            <br />
            <br />
            Grupo(s): <br />
            <List>
              <ListItem>{` ${props.reservation.group_list[0]}`}</ListItem>
              {props.reservation.group_list
                .slice(1, props.reservation.group_list.length)
                .map((group) => {
                  return <ListItem>{group}</ListItem>;
                })}
            </List>
            <br />
            <br />
            Fecha solicitada para la reserva{' '}
            {props.reservation.reservation_date.split('T')[0]} a horas{' '}
            {props.reservation.horario_ini} hasta{' '}
            {props.reservation.horario_end}
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Link
              to={`/user/${PATHS.PENDING}`}
              style={{textDecoration: 'none'}}
            >
              <Button variant="contained" color="primary">
                Continuar
              </Button>
            </Link>
          </Box>
        </BoxColumn>
      ) : null}
    </Wrapper>
  );
}
