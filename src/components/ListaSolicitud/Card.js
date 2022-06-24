import React from 'react';
import {Delete, Edit} from '@mui/icons-material';
import {CircularProgress} from '@mui/material';
import {STATUS} from '../../services/Constant';
import {Card, CardActions, CardContent, Fab, Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import apiSettings from '../../services/service';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useModal} from '../../hooks/useModal';
import ContentDetail from '../details/ContentDetail';
import {useRequest} from '../../hooks/useRequest.hooks';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SimpleCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [
    loadingUpd,
    errorUpd,
    messageUpd,
    responseUpd,
    statusUpd,
    handleRequestUpd,
  ] = useRequest({
    methodRequest: apiSettings.getReservationRequestD,
  });
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
          {props.request.state === STATUS.DRAFT ? (
            <div>
              <b style={{fontWeight: 'bold'}}>Ultima modificación: </b>
              {props.request.register_date}
            </div>
          ) : (
            <div>
              <b style={{fontWeight: 'bold'}}>Fecha de solicitud: </b>
              {props.request.reservation_date}
            </div>
          )}
        </div>
        <div
          style={{
            padding: '10px',
          }}
        >
          <b style={{fontWeight: 'bold'}}>Materia: </b>
          {props.request.subject}
        </div>
        <div>
          <div
            style={{
              color: 'black',
              padding: '10px',
            }}
          >
            <b style={{fontWeight: 'bold'}}>Motivo: </b>{' '}
            {props.request.request_reason}
          </div>
        </div>
        <Box
          sx={{
            padding: '14px',
          }}
        >
          {props.request.state === STATUS.SENT && (
            <div>
              <b style={{fontWeight: 'bold'}}>Registrado el: </b>
              {props.request.register_date}
            </div>
          )}
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: 'inline-block',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          color="info"
          variant="outlined"
          size="small"
          style={{
            marginRight: '6px',
            marginTop: '6px',
          }}
          onClick={() => {
            openModal();
            handleRequestUpd(props.request.id);
          }}
          startIcon={<ContentPasteSearchIcon />}
        >
          Detalles
        </Button>
        {props.request.state == STATUS.DRAFT ? (
          <Link
            style={{
              textDecoration: 'none',
            }}
            to={`/user/reservationRequest/${props.request.id}`}
          >
            <Button
              color="info"
              variant="outlined"
              size="small"
              style={{
                marginTop: '6px',
              }}
              startIcon={<Edit />}
            >
              Editar
            </Button>
          </Link>
        ) : (
          <></>
        )}
        <Button
          color="error"
          variant="outlined"
          size="small"
          style={{
            marginLeft: '6px',
            marginTop: '6px',
          }}
          onClick={() => {
            handleOpen();
          }}
          startIcon={<Delete />}
        >
          Eliminar
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
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <ContentDetail request={responseUpd} />
        )}
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Está seguro que desea eliminar esta solicitud?
          </Typography>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            sx={{marginLeft: '82px'}}
            onClick={async () => {
              await apiSettings.deleteReservationRequest(props.request.id);
              handleClose();
              recargar();
              //window.location.reload();
            }}
          >
            Eliminar
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};
export default SimpleCard;

function recargar() {
  window.location.reload();
}
