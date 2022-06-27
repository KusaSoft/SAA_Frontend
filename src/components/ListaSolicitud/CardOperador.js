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
  List,
  ListItem,
  Button,
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
              {props.request.rejection_reason}
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
            <div
              style={{
                color: 'black',
                padding: '10px',
              }}
            >
              <b style={{fontWeight: 'bold', color: 'green'}}>
                Aulas asignadas:{' '}
              </b>{' '}
              <List>
                {props.request.assigned_classrooms &&
                  props.request.assigned_classrooms.map((classrom) => (
                    <ListItem sx={{display: 'inline'}}>
                      {classrom.name_classroom}
                    </ListItem>
                  ))}
              </List>
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
        <Button
          color="info"
          variant="outlined"
          size="small"
          onClick={() => {
            openModal();
            handleRequestUpd(props.request.id);
          }}
          startIcon={<ContentPasteSearchIcon />}
        >
          Detalles
        </Button>
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
