import React from 'react';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import {Card, CardActions, CardContent, Fab, Stack} from '@mui/material';
import {Link} from 'react-router-dom';

const CardOperador = (props) => {
  return (
    <Card
      style={{
        marginTop: '20px',
      }}
    >
      <CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <div>
            <b style={{fontWeight: 'bold'}}>Enviado:</b>{' '}
            {props.request.register_date}
          </div>
        </div>
        <div>
          <b style={{fontWeight: 'bold'}}>Motivo: </b>
          {props.request.request_reason}
        </div>
        <div>
          <b style={{fontWeight: 'bold'}}>Fecha para la reserva: </b>
          {props.request.reservation_date}
        </div>
        <div>
          <b style={{fontWeight: 'bold'}}>Desde: </b>{' '}
          {props.request.horario_ini}
          <b style={{fontWeight: 'bold'}}> - Hasta: </b>{' '}
          {props.request.horario_end}
        </div>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Fab
            color="neutral"
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: '#DFE1E6',
                color: 'black',
              },
            }}
          >
            <ContentPasteSearchIcon
              onClick={() => {
                alert('redirect Request: ' + props.request.id);
              }}
            />
          </Fab>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default CardOperador;
