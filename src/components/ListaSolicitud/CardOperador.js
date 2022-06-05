import React from 'react';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Stack,
  Box,
  CircularProgress,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import {useModal} from '../../hooks/useModal';
import ContentDetail from '../details/ContentDetail';
import {useRequestDetail} from '../../hooks/useDetail';
import {STATUS} from '../../services/Constant';

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
  const [
    loadingUpd,
    errorUpd,
    messageUpd,
    responseUpd,
    statusUpd,
    handleRequestUpd,
  ] = useRequestDetail();

  return (
    <Card
      style={{
        marginTop: '20px',
        color: 'black',
      }}
    >
      <div>
        {props.request.state === STATUS.SENT ? (
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
        ) : props.request.state === STATUS.REJECTED ? (
          <CardContent>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                borderBottom: '1px solid #e0e0e0',
              }}
            >
              <div>
                <b style={{fontWeight: 'bold'}}>Enviado el:</b>{' '}
                {props.request.register_date}
              </div>
            </div>
            <div>
              <b style={{fontWeight: 'bold'}}>Motivo de rechazo: </b>
              {props.request.request_reason}
            </div>
            <div>
              <b style={{fontWeight: 'bold'}}>Motivo de solicitud: </b>
              {props.request.request_reason}
            </div>
            <div>
              <b style={{fontWeight: 'bold'}}>Fecha para la reserva: </b>
              {props.request.reservation_date}
            </div>
          </CardContent>
        ) : props.request.state === STATUS.ASSIGNED ? (
          <CardContent>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                borderBottom: '1px solid #e0e0e0',
              }}
            >
              <div>
                <b style={{fontWeight: 'bold'}}>Enviado el:</b>{' '}
                {props.request.register_date}
              </div>
            </div>
            <div>
              <b style={{fontWeight: 'bold'}}>Motivo de solicitud: </b>
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
            <div>
              <b style={{fontWeight: 'bold'}}>Aula(s): </b>
              {props.request.reservation_date}
            </div>
          </CardContent>
        ) : (
          <CardContent></CardContent>
        )}
      </div>
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
            onClick={() => {
              openModal();
              handleRequestUpd(props.request.id);
            }}
          >
            <ContentPasteSearchIcon />
          </Fab>
        </Stack>
      </CardActions>
      <Modal open={isOpenModal} onClose={closeModal}>
        {loadingUpd ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CircularProgress
              onClick={() => {
                openModal();
                handleRequestUpd(props.request.id);
              }}
              color="inherit"
            />
          </Box>
        ) : (
          <ContentDetail request={responseUpd} />
        )}
      </Modal>
    </Card>
  );
};
export default CardOperador;
