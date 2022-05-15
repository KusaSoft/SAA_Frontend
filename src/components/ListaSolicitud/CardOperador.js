import React from 'react';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Stack,
  Box,
  List,
  Divider,
  ListItem,
} from '@mui/material';
import {Link} from 'react-router-dom';
import Modal from '@mui/material/Modal';
// import Modal from '../Modals/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Wrapper} from '../ask/askReservationRequest.styles';
import {useModal} from '../../hooks/useModal';
import ContentDetail from '../details/ContentDetail';

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
const CardOperador = (props) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <Card
      style={{
        marginTop: '20px',
        color: 'black',
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
            color="success"
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: 'hover.main',
                color: 'hover.contrastText',
              },
            }}
          >
            <ContentPasteSearchIcon onClick={openModal} />
          </Fab>
        </Stack>
      </CardActions>
      <Modal open={isOpenModal} onClose={closeModal}>
        <ContentDetail />
      </Modal>
    </Card>
  );
};
export default CardOperador;
