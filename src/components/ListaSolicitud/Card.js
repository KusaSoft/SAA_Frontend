import React from 'react';
import {Delete, Edit} from '@mui/icons-material';
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
          <b style={{fontWeight: 'bold'}}>
            {props.request.state === STATUS.DRAFT
              ? 'Ultima modificacon'
              : 'Fecha de solicitud'}
          </b>
          {': '}
          {props.request.fecha}
        </div>
        <div
          style={{
            padding: '10px',
            display: 'flex',
          }}
        >
          <b style={{fontWeight: 'bold'}}>Materia: </b>{' '}
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
            {props.request.motivo}
          </div>
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
            <Modal open={isOpenModal} onClose={closeModal}>
              <ContentDetail request={props.request} />
            </Modal>
          </Fab>
          {props.request.state == STATUS.DRAFT ? (
            <Link to={`/user/reservationRequest/${props.request.id}`}>
              <Fab
                color="primary"
                size="small"
                sx={{
                  '&:hover': {
                    backgroundColor: 'hover.main',
                    color: 'hover.contrastText',
                  },
                }}
              >
                <Edit />
              </Fab>
            </Link>
          ) : (
            <></>
          )}
          <Fab
            color="error"
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: 'hover.main',
                color: 'hover.contrastText',
              },
            }}
          >
            <Delete
              onClick={() => {
                handleOpen();
              }}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  ¿Esta seguro que desea eliminar este elemento?
                </Typography>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button
                  sx={{marginLeft: '82px'}}
                  onClick={() => {
                    apiSettings.deleteReservationRequest(props.request.id);
                    handleClose();
                    recargar();
                    //window.location.reload();
                  }}
                >
                  Eliminar
                </Button>
              </Box>
            </Modal>
          </Fab>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default SimpleCard;

function recargar() {
  window.location.reload();
}
