import React from 'react';
import {Delete, Edit} from '@mui/icons-material';
import {STATUS} from '../../services/Constant';
import {Fab, Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import apiSettings from '../../services/service';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

const Card = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginTop: '20px',
      }}
    >
      <Box sx={{backgroundColor: 'cardContentHead.main'}}>
        <div
          style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            // background: '#172B4D',
          }}
        >
          <div>
            <b style={{fontWeight: 'bold'}}>Materia: </b>{' '}
            {props.request.subject}
          </div>
          <div style={{}}>
            <b style={{fontWeight: 'bold'}}>Fecha: </b>{' '}
            {props.request.fecha}
          </div>
        </div>
      </Box>
      <Box sx={{backgroundColor: 'cardContent.main'}}>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            background:
              'linear-gradient(180deg, #FFFFFF 50%, #EBF6DF 50%)',
            color: 'black',
          }}
        >
          <div
            style={{
              minWidth: '100px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Stack direction="row" spacing={1}>
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
                        apiSettings.deleteReservationRequest(
                          props.request.id
                        );
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
          </div>
        </div>
      </Box>
    </div>
  );
};
export default Card;

function recargar() {
  window.location.reload();
}
